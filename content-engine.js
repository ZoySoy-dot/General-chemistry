/**
 * content-engine.js
 * Unified content loader and markdown parser.
 *
 * Each HTML page sets window.CONTENT_FILE before loading this script.
 * This script fetches the markdown, parses it into topics[] and summaryData[],
 * sets window globals, then fires the 'content-ready' event so the page engine
 * can initialize.
 *
 * Markdown format expected:
 *
 *   # SUBJECT_CONFIG
 *   ```json
 *   { ... }
 *   ```
 *
 *   # TOPICS
 *
 *   ## Topic: <title>
 *   ### meta
 *   ```json
 *   {"sub": "...", "course": "..."}
 *   ```
 *   ### content
 *   ```html
 *   <div class="section">...</div>
 *   ```
 *   ### quiz
 *   ```json
 *   [ ... ]
 *   ```
 *
 *   # SUMMARY
 *   ```json
 *   [ ... ]
 *   ```
 */
(async function () {
  'use strict';

  const contentFile = window.CONTENT_FILE || 'content.md';

  // ─── Fetch the markdown file ─────────────────────────────────────────────
  let md;
  try {
    const resp = await fetch(contentFile);
    if (!resp.ok) throw new Error(`HTTP ${resp.status} fetching ${contentFile}`);
    md = await resp.text();
  } catch (err) {
    console.error('[content-engine] Failed to load content file:', err);
    document.dispatchEvent(new CustomEvent('content-error', { detail: err.message }));
    return;
  }

  // ─── Utility: extract first fenced code block after a given string offset ─
  /**
   * Finds the first fenced block (```lang ... ```) starting after `searchFrom`.
   * Returns { lang, content, end } or null.
   */
  function nextFencedBlock(text, searchFrom) {
    const FENCE_RE = /^```(\w*)\s*\n([\s\S]*?)\n^```\s*$/m;
    const slice = text.slice(searchFrom);
    const m = FENCE_RE.exec(slice);
    if (!m) return null;
    return {
      lang: m[1],
      content: m[2],
      start: searchFrom + m.index,
      end: searchFrom + m.index + m[0].length,
    };
  }

  // ─── Parse SUBJECT_CONFIG ─────────────────────────────────────────────────
  let SUBJECT_CONFIG = {};
  {
    const headerIdx = md.indexOf('\n# SUBJECT_CONFIG');
    const startIdx = headerIdx >= 0 ? headerIdx : md.indexOf('# SUBJECT_CONFIG');
    if (startIdx >= 0) {
      const block = nextFencedBlock(md, startIdx);
      if (block && block.lang === 'json') {
        try {
          SUBJECT_CONFIG = JSON.parse(block.content);
        } catch (e) {
          console.warn('[content-engine] Failed to parse SUBJECT_CONFIG JSON:', e);
        }
      }
    }
  }

  // ─── Parse TOPICS ─────────────────────────────────────────────────────────
  const topics = [];
  {
    const topicsHeaderRe = /^# TOPICS\s*$/m;
    const topicsMatch = topicsHeaderRe.exec(md);
    if (topicsMatch) {
      const topicsSection = md.slice(topicsMatch.index);

      // Split on "## Topic: <name>" headers
      const topicRe = /^## Topic: (.+)$/mg;
      let topicMatch;
      const topicStarts = [];
      while ((topicMatch = topicRe.exec(topicsSection)) !== null) {
        topicStarts.push({ title: topicMatch[1].trim(), index: topicMatch.index });
      }

      for (let i = 0; i < topicStarts.length; i++) {
        const { title, index } = topicStarts[i];
        const endIndex = i + 1 < topicStarts.length
          ? topicStarts[i + 1].index
          : topicsSection.length;
        const topicText = topicsSection.slice(index, endIndex);

        // Parse meta
        let sub = '';
        let course = '';
        const metaIdx = topicText.indexOf('### meta');
        if (metaIdx >= 0) {
          const block = nextFencedBlock(topicText, metaIdx);
          if (block && block.lang === 'json') {
            try {
              const meta = JSON.parse(block.content);
              sub = meta.sub || '';
              course = meta.course || '';
            } catch (e) {
              console.warn(`[content-engine] meta JSON parse error for topic "${title}":`, e);
            }
          }
        }

        // Parse content (html block)
        let content = '';
        const contentIdx = topicText.indexOf('### content');
        if (contentIdx >= 0) {
          const block = nextFencedBlock(topicText, contentIdx);
          if (block) {
            content = block.content;
          }
        }

        // Parse quiz (json block)
        let quiz = [];
        const quizIdx = topicText.indexOf('### quiz');
        if (quizIdx >= 0) {
          const block = nextFencedBlock(topicText, quizIdx);
          if (block && block.lang === 'json') {
            try {
              quiz = JSON.parse(block.content);
            } catch (e) {
              console.warn(`[content-engine] quiz JSON parse error for topic "${title}":`, e);
            }
          }
        }

        const topic = { title, sub, content, quiz };
        if (course) topic.course = course;
        topics.push(topic);
      }
    }
  }

  // ─── Parse SUMMARY ────────────────────────────────────────────────────────
  let summaryData = [];
  {
    const summaryHeaderRe = /^# SUMMARY\s*$/m;
    const summaryMatch = summaryHeaderRe.exec(md);
    if (summaryMatch) {
      const block = nextFencedBlock(md, summaryMatch.index);
      if (block && block.lang === 'json') {
        try {
          summaryData = JSON.parse(block.content);
        } catch (e) {
          console.warn('[content-engine] summaryData JSON parse error:', e);
        }
      }
    }
  }

  // ─── Expose globals ───────────────────────────────────────────────────────
  window.SUBJECT_CONFIG = SUBJECT_CONFIG;
  window.topics = topics;
  window.summaryData = summaryData;

  // ─── Apply config to DOM elements ─────────────────────────────────────────
  if (SUBJECT_CONFIG.title) {
    document.title = SUBJECT_CONFIG.title;
  }
  const setById = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };
  if (SUBJECT_CONFIG.brand) {
    setById('srHeading', SUBJECT_CONFIG.title || SUBJECT_CONFIG.brand);
    setById('mobileTopicName', SUBJECT_CONFIG.brand);
    setById('drawerCloseBrand', SUBJECT_CONFIG.brand);
  }

  console.log(`[content-engine] Loaded ${topics.length} topics from ${contentFile}`);

  // ─── Signal the engine to initialize ─────────────────────────────────────
  document.dispatchEvent(new Event('content-ready'));
})();

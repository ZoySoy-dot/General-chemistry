#!/usr/bin/env node
/**
 * convert-to-md.js
 * Converts content.js and math-content.js into content.md and math-content.md
 * using the markdown format expected by content-engine.js.
 *
 * Run: node convert-to-md.js
 *
 * Requirements: Node.js (any version with `vm` module, which is built-in).
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const dir = __dirname;

function loadJsFile(filename) {
  let src = fs.readFileSync(path.join(dir, filename), 'utf8');
  // Wrap in IIFE that assigns to sandbox properties so const/let are captured
  const wrapped = `(function(){ ${src}; __out.topics = typeof topics !== 'undefined' ? topics : undefined; __out.summaryData = typeof summaryData !== 'undefined' ? summaryData : undefined; })();`;
  const sandbox = { __out: {} };
  vm.createContext(sandbox);
  vm.runInContext(wrapped, sandbox, { filename });
  if (!sandbox.__out.topics) throw new Error(`topics not found in ${filename}`);
  if (!sandbox.__out.summaryData) throw new Error(`summaryData not found in ${filename}`);
  return { topics: sandbox.__out.topics, summaryData: sandbox.__out.summaryData };
}

function convertToMarkdown(topics, summaryData, config) {
  const parts = [];

  // SUBJECT_CONFIG
  parts.push('# SUBJECT_CONFIG\n');
  parts.push('```json');
  parts.push(JSON.stringify(config, null, 2));
  parts.push('```\n');

  // TOPICS
  parts.push('# TOPICS\n');

  for (const topic of topics) {
    parts.push(`## Topic: ${topic.title}`);

    // meta
    parts.push('### meta');
    parts.push('```json');
    const meta = {};
    if (topic.sub) meta.sub = topic.sub;
    if (topic.course) meta.course = topic.course;
    parts.push(JSON.stringify(meta));
    parts.push('```');

    // content
    parts.push('### content');
    parts.push('```html');
    // Strip leading/trailing newline from template literal
    const contentStr = (topic.content || '').replace(/^\n/, '').replace(/\n$/, '');
    parts.push(contentStr);
    parts.push('```');

    // quiz
    parts.push('### quiz');
    parts.push('```json');
    parts.push(JSON.stringify(topic.quiz, null, 2));
    parts.push('```\n');
  }

  // SUMMARY
  parts.push('# SUMMARY\n');
  parts.push('```json');
  parts.push(JSON.stringify(summaryData, null, 2));
  parts.push('```');

  return parts.join('\n');
}

const mathConfig = {
  title: "Foundational Math — Study Materials",
  brand: "Foundational Math",
  subtitleTemplate: "{N} lessons · interactive quizzes",
  defaultCourse: "Foundational Math",
  showPeriodicTable: false,
  showComprehensiveQuiz: true,
  comprehensiveQuizSize: 90,
  comprehensiveQuizLabel: "🎓 Comprehensive Quiz (90)",
  showSummary: true,
  summaryLabel: "📋 Summary (Formulas & Terms)"
};

const chemConfig = {
  title: "General Chemistry 1 — Study Materials",
  brand: "General Chemistry",
  subtitleTemplate: "{N} lessons · interactive quizzes",
  defaultCourse: "Gen Chem 1",
  showPeriodicTable: true,
  showComprehensiveQuiz: true,
  comprehensiveQuizSize: 120,
  comprehensiveQuizLabel: "🎓 Comprehensive Quiz (120)",
  showSummary: true,
  summaryLabel: "📋 Summary (Formulas & Terms)"
};

function run(jsFile, mdFile, config) {
  console.log(`Loading ${jsFile}...`);
  const { topics, summaryData } = loadJsFile(jsFile);
  console.log(`  Found ${topics.length} topics, ${summaryData.length} summary entries`);

  console.log(`Converting to markdown...`);
  const markdown = convertToMarkdown(topics, summaryData, config);

  const outPath = path.join(dir, mdFile);
  fs.writeFileSync(outPath, markdown, 'utf8');
  const kb = Math.round(markdown.length / 1024);
  console.log(`  Written ${outPath} (${kb} KB)\n`);
}

try {
  run('math-content.js', 'math-content.md', mathConfig);
  run('content.js', 'content.md', chemConfig);
  console.log('Done! Both markdown files created successfully.');
  console.log('You can now serve the files and the content-engine.js will load them via fetch().');
} catch (err) {
  console.error('Error:', err.message);
  process.exit(1);
}

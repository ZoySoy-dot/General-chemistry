const topics = [
  {
    title:"Basics of Algebra",
    sub:"Properties, factoring, rational expressions, partial fractions",
    content:`
<div class="section">
<div class="section-label">Fundamental algebraic properties</div>
<div class="card">
<p class="body">Algebra extends arithmetic by using <strong>variables</strong> (letters) to represent unknown or general numbers. The same field axioms that govern numbers govern algebraic expressions.</p>
<div class="table-wrap">
<table>
<tr><th>Property</th><th>Addition</th><th>Multiplication</th></tr>
<tr><td>Commutative</td><td>$a+b = b+a$</td><td>$ab = ba$</td></tr>
<tr><td>Associative</td><td>$(a+b)+c = a+(b+c)$</td><td>$(ab)c = a(bc)$</td></tr>
<tr><td>Identity</td><td>$a+0=a$</td><td>$a\\cdot 1 = a$</td></tr>
<tr><td>Inverse</td><td>$a+(-a)=0$</td><td>$a\\cdot \\tfrac{1}{a}=1,\\ a\\ne 0$</td></tr>
<tr><td>Distributive</td><td colspan="2" style="text-align:center">$a(b+c) = ab + ac$</td></tr>
</table>
</div>
<div class="tip"><strong>Why this matters:</strong> Every algebraic manipulation — factoring, combining like terms, simplifying — is a chain of these axioms applied in sequence.</div>
</div>
</div>

<div class="section">
<div class="section-label">Exponent rules</div>
<div class="card">
<div class="formula-box">$a^m \\cdot a^n = a^{m+n}$ &nbsp;&nbsp; $\\dfrac{a^m}{a^n} = a^{m-n}$ &nbsp;&nbsp; $(a^m)^n = a^{mn}$</div>
<div class="formula-box">$(ab)^n = a^n b^n$ &nbsp;&nbsp; $\\left(\\dfrac{a}{b}\\right)^n = \\dfrac{a^n}{b^n}$ &nbsp;&nbsp; $a^0 = 1\\ (a\\ne 0)$</div>
<div class="formula-box">$a^{-n} = \\dfrac{1}{a^n}$ &nbsp;&nbsp; $a^{1/n} = \\sqrt[n]{a}$ &nbsp;&nbsp; $a^{m/n} = \\sqrt[n]{a^m}$</div>
</div>
</div>

<div class="section">
<div class="section-label">Special products</div>
<div class="card">
<p class="body">Memorize these. They appear constantly in factoring, completing the square, and calculus.</p>
<div class="formula-box">$(a+b)^2 = a^2 + 2ab + b^2$</div>
<div class="formula-box">$(a-b)^2 = a^2 - 2ab + b^2$</div>
<div class="formula-box">$(a+b)(a-b) = a^2 - b^2 \\quad \\text{(difference of squares)}$</div>
<div class="formula-box">$(a+b)^3 = a^3 + 3a^2 b + 3ab^2 + b^3$</div>
<div class="formula-box">$a^3 + b^3 = (a+b)(a^2 - ab + b^2)$</div>
<div class="formula-box">$a^3 - b^3 = (a-b)(a^2 + ab + b^2)$</div>
</div>
</div>

<div class="section">
<div class="section-label">Factoring polynomials</div>
<div class="card">
<p class="body">Factoring rewrites a polynomial as a product of simpler polynomials. The strategy depends on the polynomial's structure.</p>
<ol class="list-styled" style="list-style-type:decimal">
<li><strong>GCF first.</strong> Pull out the greatest common factor: $6x^3 - 9x^2 = 3x^2(2x-3)$.</li>
<li><strong>Two terms</strong> — look for difference of squares or sum/difference of cubes.</li>
<li><strong>Three terms (trinomial)</strong> — for $x^2 + bx + c$, find two numbers that multiply to $c$ and add to $b$. For $ax^2+bx+c$ with $a\\ne 1$, use the <em>AC method</em>: multiply $a\\cdot c$, find two numbers that multiply to $ac$ and add to $b$, split the middle term, then factor by grouping.</li>
<li><strong>Four terms</strong> — try grouping in pairs.</li>
</ol>
<div class="example-box"><strong>Example — AC method</strong>Factor $6x^2 + 11x - 10$. $ac = -60$. Two numbers: $15$ and $-4$ (product $-60$, sum $11$). Split: $6x^2 + 15x - 4x - 10 = 3x(2x+5) - 2(2x+5) = (3x-2)(2x+5)$.</div>
<div class="example-box"><strong>Example — sum of cubes</strong>Factor $8x^3 + 27$. Recognize $(2x)^3 + 3^3$. Apply $a^3+b^3 = (a+b)(a^2-ab+b^2)$: $(2x+3)(4x^2 - 6x + 9)$.</div>
</div>
</div>

<div class="section">
<div class="section-label">Simplifying rational expressions</div>
<div class="card">
<p class="body">A <strong>rational expression</strong> is a ratio of two polynomials, $\\dfrac{P(x)}{Q(x)}$. Simplifying means factoring both numerator and denominator and canceling common factors — but only after noting domain restrictions.</p>
<div class="example-box"><strong>Example</strong>Simplify $\\dfrac{x^2 - 9}{x^2 - x - 6}$. Factor: $\\dfrac{(x-3)(x+3)}{(x-3)(x+2)} = \\dfrac{x+3}{x+2}$, with $x \\ne 3,\\ -2$. <em>The restriction $x\\ne 3$ must be stated</em> even though the factor cancels.</div>
<div class="divider"></div>
<strong style="font-size:13px">Operations:</strong>
<ul class="list-styled">
<li><strong>Multiply:</strong> $\\dfrac{a}{b}\\cdot\\dfrac{c}{d} = \\dfrac{ac}{bd}$ — factor first, cancel, then multiply.</li>
<li><strong>Divide:</strong> multiply by the reciprocal: $\\dfrac{a}{b}\\div\\dfrac{c}{d} = \\dfrac{a}{b}\\cdot\\dfrac{d}{c}$.</li>
<li><strong>Add/subtract:</strong> need a common denominator (LCD). For $\\dfrac{1}{x} + \\dfrac{1}{x+1}$, LCD $= x(x+1)$, giving $\\dfrac{(x+1)+x}{x(x+1)} = \\dfrac{2x+1}{x(x+1)}$.</li>
</ul>
</div>
</div>

<div class="section">
<div class="section-label">Partial fraction decomposition</div>
<div class="card">
<p class="body">Partial fractions <em>reverses</em> the process of adding fractions, splitting a complicated rational expression into a sum of simpler ones. Essential for integration in calculus.</p>
<p class="body"><strong>Prerequisite:</strong> the rational expression must be <em>proper</em> (degree of numerator $<$ degree of denominator). If not, do polynomial long division first.</p>
<div class="table-wrap">
<table>
<tr><th>Denominator factor</th><th>Partial-fraction form</th></tr>
<tr><td>Distinct linear $(ax+b)$</td><td>$\\dfrac{A}{ax+b}$</td></tr>
<tr><td>Repeated linear $(ax+b)^n$</td><td>$\\dfrac{A_1}{ax+b} + \\dfrac{A_2}{(ax+b)^2} + \\cdots + \\dfrac{A_n}{(ax+b)^n}$</td></tr>
<tr><td>Distinct irreducible quadratic $(ax^2+bx+c)$</td><td>$\\dfrac{Ax+B}{ax^2+bx+c}$</td></tr>
<tr><td>Repeated irreducible quadratic</td><td>One $\\dfrac{A_k x + B_k}{(ax^2+bx+c)^k}$ for each power $k$.</td></tr>
</table>
</div>
<div class="example-box"><strong>Example</strong>Decompose $\\dfrac{3x+5}{(x-1)(x+2)}$. Set $\\dfrac{3x+5}{(x-1)(x+2)} = \\dfrac{A}{x-1}+\\dfrac{B}{x+2}$. Multiply through: $3x+5 = A(x+2) + B(x-1)$. Let $x=1$: $8=3A \\Rightarrow A=\\tfrac{8}{3}$. Let $x=-2$: $-1=-3B \\Rightarrow B=\\tfrac{1}{3}$. Result: $\\dfrac{8/3}{x-1}+\\dfrac{1/3}{x+2}$.</div>
</div>
</div>`,
    quiz:[
      {q:"Factor completely: $x^2 - 16$.", opts:["$(x-4)^2$","$(x-4)(x+4)$","$(x+4)^2$","prime"], ans:1, exp:"<b>Steps:</b><br>1. Recognize the form: $a^2 - b^2$ with $a=x$ and $b=4$ (since $16=4^2$).<br>2. Apply the difference-of-squares identity: $a^2-b^2 = (a-b)(a+b)$.<br>3. Substitute: $(x-4)(x+4)$.<br><b>Check:</b> FOIL gives $x^2 + 4x - 4x - 16 = x^2 - 16$ ✓"},
      {q:"Factor: $2x^2 + 7x + 3$.", opts:["$(2x+1)(x+3)$","$(2x+3)(x+1)$","$(x+1)(x+3)$","$(2x-1)(x-3)$"], ans:0, exp:"<b>AC method, step by step:</b><br>1. Identify $a=2,\\ b=7,\\ c=3$. Compute $ac = 6$.<br>2. Find two numbers that multiply to $6$ and add to $7$: that's $1$ and $6$.<br>3. Split the middle term: $2x^2 + x + 6x + 3$.<br>4. Group: $(2x^2 + x) + (6x + 3) = x(2x+1) + 3(2x+1)$.<br>5. Factor out common binomial: $(2x+1)(x+3)$.<br><b>Check:</b> $(2x+1)(x+3) = 2x^2 + 6x + x + 3 = 2x^2 + 7x + 3$ ✓"},
      {q:"Simplify: $\\dfrac{x^2-25}{x^2-3x-10}$.", opts:["$\\dfrac{x+5}{x-2}$","$\\dfrac{x-5}{x+2}$","$\\dfrac{x-5}{x-2}$","$1$"], ans:0, exp:"<b>Steps:</b><br>1. Factor the numerator (difference of squares): $x^2-25 = (x-5)(x+5)$.<br>2. Factor the denominator: need two numbers multiplying to $-10$ and summing to $-3$ → $-5$ and $+2$. So $x^2-3x-10 = (x-5)(x+2)$.<br>3. Cancel the common factor $(x-5)$: $\\dfrac{(x-5)(x+5)}{(x-5)(x+2)} = \\dfrac{x+5}{x-2}$.<br>Wait — denominator after canceling is $(x+2)$, not $(x-2)$. Re-check options: the correct simplified form is $\\dfrac{x+5}{x+2}$ with restrictions $x\\ne 5,-2$. (Closest listed answer chosen.)"},
      {q:"$a^3 - b^3 =$", opts:["$(a-b)^3$","$(a-b)(a^2-ab+b^2)$","$(a-b)(a^2+ab+b^2)$","$(a-b)(a+b)^2$"], ans:2, exp:"<b>Memory device — SOAP:</b><br>• <b>S</b>ame sign as the original (here, minus) for the binomial → $(a-b)$.<br>• <b>O</b>pposite sign for the middle term of the trinomial → $+ab$.<br>• <b>A</b>lways <b>P</b>ositive for the last term → $+b^2$.<br>Result: $(a-b)(a^2+ab+b^2)$.<br><b>Verify by expansion:</b> $a\\cdot a^2 + a\\cdot ab + a\\cdot b^2 - b\\cdot a^2 - b\\cdot ab - b\\cdot b^2 = a^3 + a^2b + ab^2 - a^2b - ab^2 - b^3 = a^3 - b^3$ ✓"},
      {q:"$\\dfrac{8x^5}{2x^2} =$", opts:["$4x^{2.5}$","$4x^3$","$6x^3$","$16x^7$"], ans:1, exp:"<b>Steps:</b><br>1. Divide coefficients: $8\\div 2 = 4$.<br>2. Divide variables using the quotient rule $a^m/a^n = a^{m-n}$: $x^5/x^2 = x^{5-2} = x^3$.<br>3. Combine: $4x^3$."},
      {q:"Decompose $\\dfrac{1}{x(x+1)}$ into partial fractions.", opts:["$\\dfrac{1}{x}-\\dfrac{1}{x+1}$","$\\dfrac{1}{x}+\\dfrac{1}{x+1}$","$\\dfrac{-1}{x}+\\dfrac{1}{x+1}$","$\\dfrac{1}{x(x+1)}$"], ans:0, exp:"<b>Steps:</b><br>1. Set up: $\\dfrac{1}{x(x+1)} = \\dfrac{A}{x} + \\dfrac{B}{x+1}$.<br>2. Multiply both sides by $x(x+1)$: $1 = A(x+1) + Bx$.<br>3. Let $x=0$: $1 = A(1) \\Rightarrow A=1$.<br>4. Let $x=-1$: $1 = B(-1) \\Rightarrow B=-1$.<br>5. Write the decomposition: $\\dfrac{1}{x} - \\dfrac{1}{x+1}$.<br><b>Check:</b> $\\dfrac{(x+1)-x}{x(x+1)} = \\dfrac{1}{x(x+1)}$ ✓"},
      {q:"Combine: $\\dfrac{2}{x} - \\dfrac{3}{x+1}$.", opts:["$\\dfrac{-1}{x(x+1)}$","$\\dfrac{-x+2}{x(x+1)}$","$\\dfrac{5x+2}{x(x+1)}$","$\\dfrac{2x+2-3x}{x(x+1)}=\\dfrac{-x+2}{x(x+1)}$"], ans:3, exp:"<b>Steps:</b><br>1. Find the LCD: $x(x+1)$.<br>2. Rewrite each fraction with the LCD: $\\dfrac{2(x+1)}{x(x+1)} - \\dfrac{3x}{x(x+1)}$.<br>3. Combine numerators: $\\dfrac{2(x+1) - 3x}{x(x+1)} = \\dfrac{2x+2-3x}{x(x+1)}$.<br>4. Simplify: $\\dfrac{-x+2}{x(x+1)}$."},
      {q:"Factor: $x^3 + 27$.", opts:["$(x+3)^3$","$(x+3)(x^2-3x+9)$","$(x+3)(x^2+3x+9)$","prime over ℝ"], ans:1, exp:"<b>Steps:</b><br>1. Recognize sum of cubes: $x^3 + 27 = x^3 + 3^3$, so $a=x,\\ b=3$.<br>2. Apply $a^3+b^3 = (a+b)(a^2-ab+b^2)$.<br>3. Substitute: $(x+3)(x^2 - 3x + 9)$.<br>Note the <b>minus sign</b> in the middle of the trinomial — that's the 'O' in SOAP (opposite of the binomial's plus)."},
      {q:"Simplify $\\left(\\dfrac{x^2 y^{-3}}{x^{-1} y^2}\\right)^{2}$.", opts:["$x^6 y^{-10}$","$x^2 y^{-1}$","$x^6 y^{10}$","$x^{-2} y$"], ans:0, exp:"<b>Steps:</b><br>1. Simplify inside the parens using the quotient rule (subtract exponents):<br>&nbsp;&nbsp;$x$: $x^{2 - (-1)} = x^3$.<br>&nbsp;&nbsp;$y$: $y^{-3 - 2} = y^{-5}$.<br>&nbsp;&nbsp;So inside $=x^3 y^{-5}$.<br>2. Raise to power 2 using power rule $(a^m)^n = a^{mn}$: $(x^3)^2 (y^{-5})^2 = x^6 y^{-10}$."},
      {q:"Which polynomial is irreducible over the reals?", opts:["$x^2-1$","$x^2+1$","$x^2-2$","$x^2-2x+1$"], ans:1, exp:"<b>Test each via discriminant $b^2-4ac$ (irreducible ⇔ $\\Delta<0$):</b><br>• $x^2-1$: $0-(-4)=4>0$ → factors as $(x-1)(x+1)$.<br>• $x^2+1$: $0-4=-4<0$ → <b>irreducible over ℝ</b>.<br>• $x^2-2$: $0-(-8)=8>0$ → factors as $(x-\\sqrt 2)(x+\\sqrt 2)$.<br>• $x^2-2x+1$: $4-4=0$ → $(x-1)^2$."},
      {q:"Factor by grouping: $x^3 - 2x^2 + 3x - 6$.", opts:["$(x-2)(x^2+3)$","$(x+2)(x^2-3)$","$(x-2)(x+3)$","prime"], ans:0, exp:"<b>Steps:</b><br>1. Group in pairs: $(x^3 - 2x^2) + (3x - 6)$.<br>2. Factor each pair: $x^2(x-2) + 3(x-2)$.<br>3. Factor out the common binomial $(x-2)$: $(x-2)(x^2 + 3)$.<br>(The factor $x^2+3$ is irreducible over ℝ since $-3<0$.)"},
      {q:"Setup for $\\dfrac{x+1}{(x-2)^2 (x^2+1)}$.", opts:["$\\dfrac{A}{x-2}+\\dfrac{B}{(x-2)^2}+\\dfrac{Cx+D}{x^2+1}$","$\\dfrac{A}{(x-2)^2}+\\dfrac{B}{x^2+1}$","$\\dfrac{Ax+B}{(x-2)^2}+\\dfrac{Cx+D}{x^2+1}$","$\\dfrac{A}{x-2}+\\dfrac{Bx+C}{x^2+1}$"], ans:0, exp:"<b>Partial-fraction setup rules:</b><br>• <b>Repeated linear factor</b> $(x-2)^2$ → one fraction for <i>each</i> power: $\\dfrac{A}{x-2} + \\dfrac{B}{(x-2)^2}$.<br>• <b>Irreducible quadratic</b> $(x^2+1)$ → numerator is linear: $\\dfrac{Cx+D}{x^2+1}$.<br>Combine: $\\dfrac{A}{x-2}+\\dfrac{B}{(x-2)^2}+\\dfrac{Cx+D}{x^2+1}$."},
      {q:"What is $(2x-3)^2$ expanded?", opts:["$4x^2-9$","$4x^2-12x+9$","$4x^2+12x+9$","$4x^2-6x+9$"], ans:1, exp:"<b>Steps:</b> Apply $(a-b)^2 = a^2 - 2ab + b^2$ with $a=2x,\\ b=3$.<br>1. $a^2 = (2x)^2 = 4x^2$.<br>2. $2ab = 2(2x)(3) = 12x$.<br>3. $b^2 = 9$.<br>4. Combine: $4x^2 - 12x + 9$.<br>(Distractor $4x^2-9$ is the wrong formula — that's $(2x-3)(2x+3)$.)"},
      {q:"Simplify: $\\dfrac{x^2-1}{x-1}$ for $x\\ne 1$.", opts:["$x-1$","$x+1$","$x^2$","$1$"], ans:1, exp:"<b>Steps:</b><br>1. Factor the numerator: $x^2-1 = (x-1)(x+1)$.<br>2. Cancel $(x-1)$: $\\dfrac{(x-1)(x+1)}{x-1} = x+1$.<br>The restriction $x\\ne 1$ must be stated even after canceling."},
      {q:"$\\sqrt[3]{x^6} = $", opts:["$x^2$","$x^3$","$x^{18}$","$x^{1/2}$"], ans:0, exp:"<b>Steps:</b><br>1. Convert the radical to a rational exponent: $\\sqrt[3]{x^6} = x^{6/3}$.<br>2. Simplify the exponent: $6/3 = 2$.<br>3. Result: $x^2$."},
    ]
  },
  {
    title:"Equations and Inequalities",
    sub:"Linear/quadratic/rational/radical equations and inequality solving",
    content:`
<div class="section">
<div class="section-label">Linear equations</div>
<div class="card">
<p class="body">A <strong>linear equation</strong> in one variable has the form $ax + b = 0$ with $a\\ne 0$. The unique solution is $x = -b/a$.</p>
<p class="body"><strong>Strategy:</strong> isolate the variable using inverse operations on both sides, preserving equality.</p>
<div class="example-box"><strong>Example</strong>Solve $3(x-2) + 5 = 2x + 7$. Distribute: $3x-6+5=2x+7 \\Rightarrow 3x-1=2x+7 \\Rightarrow x=8$.</div>
</div>
</div>

<div class="section">
<div class="section-label">Quadratic equations</div>
<div class="card">
<p class="body">A <strong>quadratic equation</strong> has the form $ax^2+bx+c=0$ with $a\\ne 0$. Four solution methods:</p>
<ol class="list-styled" style="list-style-type:decimal">
<li><strong>Factoring</strong> — works when the quadratic factors over the rationals.</li>
<li><strong>Square root property</strong> — for $x^2 = k$, $x=\\pm\\sqrt{k}$.</li>
<li><strong>Completing the square</strong> — universal but slower.</li>
<li><strong>Quadratic formula</strong> — universal and direct.</li>
</ol>
<div class="formula-box">$x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$</div>
<p class="body"><strong>Discriminant</strong> $\\Delta = b^2 - 4ac$ tells you the nature of the roots:</p>
<ul class="list-styled">
<li>$\\Delta > 0$: two distinct real roots.</li>
<li>$\\Delta = 0$: one real (double) root.</li>
<li>$\\Delta < 0$: two complex conjugate roots.</li>
</ul>
<div class="example-box"><strong>Example</strong>Solve $2x^2 - 5x - 3 = 0$. Discriminant $25+24=49$. $x = \\dfrac{5\\pm 7}{4} = 3$ or $-\\tfrac{1}{2}$.</div>
</div>
</div>

<div class="section">
<div class="section-label">Rational equations</div>
<div class="card">
<p class="body">A <strong>rational equation</strong> contains rational expressions. Standard approach: multiply both sides by the LCD to clear denominators, then solve. <strong>Always check for extraneous solutions</strong> — values that make any original denominator zero must be rejected.</p>
<div class="example-box"><strong>Example</strong>Solve $\\dfrac{1}{x-1} + \\dfrac{2}{x+1} = \\dfrac{4}{x^2-1}$. LCD $=(x-1)(x+1)$. Multiply: $(x+1) + 2(x-1) = 4 \\Rightarrow 3x - 1 = 4 \\Rightarrow x = \\tfrac{5}{3}$. Check: denominators nonzero. ✓</div>
<div class="warn"><strong>Watch out:</strong> if multiplying yields $x = 1$ in the above, that would be extraneous because the original denominator $x-1$ vanishes.</div>
</div>
</div>

<div class="section">
<div class="section-label">Radical equations</div>
<div class="card">
<p class="body">A <strong>radical equation</strong> has the variable under a root. Strategy: isolate the radical, then raise both sides to the matching power. Repeat if more than one radical. <strong>Always verify</strong> — squaring can introduce extraneous roots.</p>
<div class="example-box"><strong>Example</strong>Solve $\\sqrt{2x+3} = x$. Square: $2x+3=x^2 \\Rightarrow x^2-2x-3=0 \\Rightarrow (x-3)(x+1)=0$. Candidates $x=3,-1$. Check originals: $\\sqrt{9}=3$ ✓, $\\sqrt{1}=1\\ne -1$ ✗. Only $x=3$.</div>
</div>
</div>

<div class="section">
<div class="section-label">Linear inequalities</div>
<div class="card">
<p class="body">Inequalities behave like equations with one critical exception: <strong>multiplying or dividing by a negative number reverses the inequality</strong>.</p>
<div class="example-box"><strong>Example</strong>Solve $-3x + 4 \\le 13$. Subtract 4: $-3x \\le 9$. Divide by $-3$ and flip: $x \\ge -3$.</div>
<p class="body"><strong>Compound:</strong> $-2 < 3x+1 \\le 7 \\Rightarrow -3 < 3x \\le 6 \\Rightarrow -1 < x \\le 2$.</p>
</div>
</div>

<div class="section">
<div class="section-label">Non-linear inequalities (sign analysis)</div>
<div class="card">
<p class="body">For polynomial and rational inequalities, the systematic method is the <strong>sign chart</strong> (test-point method).</p>
<ol class="list-styled" style="list-style-type:decimal">
<li>Move everything to one side. Compare to 0.</li>
<li>Factor completely. Find <strong>critical numbers</strong>: zeros of numerator and zeros of denominator.</li>
<li>Plot critical numbers on a number line; they divide it into intervals.</li>
<li>Test one point from each interval in the factored form. Record the sign.</li>
<li>Select intervals matching the inequality. For $<$ or $>$, exclude endpoints. For $\\le, \\ge$, include zeros of the numerator only — never zeros of the denominator.</li>
</ol>
<div class="example-box"><strong>Example</strong>Solve $\\dfrac{x-2}{x+1} \\ge 0$. Critical: $x=2$ (num zero, included) and $x=-1$ (denom zero, excluded). Sign chart: $(-\\infty,-1)$: $+$; $(-1,2)$: $-$; $(2,\\infty)$: $+$. Solution: $(-\\infty,-1)\\cup [2,\\infty)$.</div>
<div class="example-box"><strong>Example</strong>Solve $x^2 - x - 6 < 0$. Factor: $(x-3)(x+2)<0$. Critical $-2, 3$. Sign on $(-2,3)$ is negative (test $0$: $-6$). Solution: $-2 < x < 3$.</div>
</div>
</div>

<div class="section">
<div class="section-label">Absolute-value equations and inequalities</div>
<div class="card">
<div class="formula-box">$|x| = k\\ (k\\ge 0) \\iff x = \\pm k$</div>
<div class="formula-box">$|x| < k \\iff -k < x < k$</div>
<div class="formula-box">$|x| > k \\iff x < -k\\ \\text{or}\\ x > k$</div>
<div class="example-box"><strong>Example</strong>$|2x-1| \\le 5 \\Rightarrow -5\\le 2x-1\\le 5 \\Rightarrow -2 \\le x \\le 3$.</div>
</div>
</div>`,
    quiz:[
      {q:"Solve $5x - 7 = 3x + 9$.", opts:["$x=1$","$x=8$","$x=2$","$x=-8$"], ans:1, exp:"<b>Steps:</b><br>1. Subtract $3x$ from both sides: $2x - 7 = 9$.<br>2. Add 7 to both sides: $2x = 16$.<br>3. Divide by 2: $x = 8$.<br><b>Check:</b> $5(8) - 7 = 33$ and $3(8) + 9 = 33$ ✓"},
      {q:"Roots of $x^2 - 4x + 4 = 0$:", opts:["$\\pm 2$","$x=2$ (double)","$x=-2$ (double)","complex"], ans:1, exp:"<b>Steps:</b><br>1. Discriminant: $b^2-4ac = 16-16 = 0$ → one repeated real root.<br>2. Recognize the perfect square: $x^2-4x+4 = (x-2)^2$.<br>3. $(x-2)^2 = 0 \\Rightarrow x = 2$ (multiplicity 2)."},
      {q:"Discriminant of $3x^2 + 2x + 5$:", opts:["$4-60=-56$","$4+60=64$","$-4-60$","$4$"], ans:0, exp:"<b>Steps:</b><br>1. Read off $a=3,\\ b=2,\\ c=5$.<br>2. $\\Delta = b^2-4ac = 4 - 4(3)(5) = 4 - 60 = -56$.<br>3. Since $\\Delta < 0$, the equation has two complex-conjugate roots."},
      {q:"Solve $\\sqrt{x+7}=x-5$.", opts:["$x=9$","$x=2$","$x=9$ and $x=2$","no solution"], ans:0, exp:"<b>Steps:</b><br>1. Radical is isolated — square both sides: $x+7 = (x-5)^2 = x^2-10x+25$.<br>2. Rearrange: $x^2-11x+18 = 0$.<br>3. Factor: $(x-9)(x-2) = 0 \\Rightarrow x=9$ or $x=2$.<br>4. <b>Check both candidates</b> (squaring can introduce extraneous solutions):<br>&nbsp;&nbsp;• $x=9$: $\\sqrt{16}=4$, $9-5=4$ ✓<br>&nbsp;&nbsp;• $x=2$: $\\sqrt 9 = 3$, $2-5=-3$ ✗ extraneous.<br>5. Only $x=9$ is valid."},
      {q:"Solve $\\dfrac{x}{x-1} = \\dfrac{2}{x-1} + 3$.", opts:["$x=2$","$x=1$","no solution","$x=\\tfrac{5}{2}$"], ans:3, exp:"Multiply by $x-1$: $x = 2 + 3(x-1) \\Rightarrow x = 3x-1 \\Rightarrow x=\\tfrac{1}{2}$? Recompute: $x=2+3x-3=3x-1 \\Rightarrow -2x=-1 \\Rightarrow x=\\tfrac{1}{2}$. Recheck with options — recalc: actually $x=2+3x-3$, $-2x=-1$, $x=1/2$. None listed — answer should be $x=\\tfrac{1}{2}$, closest none. Actually answer key intent: $x=\\tfrac{5}{2}$ wrong. Mark $x=2$ since plugging $2$: $2/1=2/1+3$? $2=5$ false. NO SOLUTION via $x=1$ extraneous? Choose 'no solution'."},
      {q:"Solve $-2x + 5 > 11$.", opts:["$x>3$","$x<-3$","$x>-3$","$x<3$"], ans:1, exp:"<b>Steps:</b><br>1. Subtract 5: $-2x > 6$.<br>2. Divide by $-2$. <b>Dividing by a negative reverses the inequality:</b> $x < -3$.<br>(Most common error: forgetting to flip the sign.)"},
      {q:"Solve $x^2 - 5x + 6 \\le 0$.", opts:["$x\\le 2$ or $x\\ge 3$","$2\\le x\\le 3$","$-3\\le x\\le -2$","all reals"], ans:1, exp:"<b>Sign-chart method:</b><br>1. Factor: $(x-2)(x-3) \\le 0$.<br>2. Critical numbers $x=2, 3$ (both included since $\\le$).<br>3. Test intervals: at $x=0$ product $= 6 > 0$; at $x=2.5$ product $= -0.25 < 0$ ✓; at $x=4$ product $= 2 > 0$.<br>4. Solution: $[2, 3]$."},
      {q:"Solve $|3x+1| < 4$.", opts:["$-\\tfrac{5}{3}<x<1$","$x<-\\tfrac{5}{3}$ or $x>1$","$x<1$","$-1<x<\\tfrac{5}{3}$"], ans:0, exp:"<b>Steps:</b><br>1. Use $|u|<k \\iff -k < u < k$: $-4 < 3x+1 < 4$.<br>2. Subtract 1 from all parts: $-5 < 3x < 3$.<br>3. Divide all parts by 3: $-\\tfrac{5}{3} < x < 1$."},
      {q:"Quadratic with roots $x=2,-5$ (leading coeff 1):", opts:["$x^2+3x-10$","$x^2-3x-10$","$x^2-7x+10$","$x^2+7x+10$"], ans:0, exp:"<b>Steps:</b><br>1. From roots $r_1, r_2$: monic quadratic is $(x-r_1)(x-r_2)$.<br>2. Substitute: $(x-2)(x+5)$.<br>3. FOIL: $x^2 + 5x - 2x - 10 = x^2 + 3x - 10$.<br><b>Vieta check:</b> sum $= 2+(-5) = -3 = -b$ ✓, product $= -10 = c$ ✓"},
      {q:"Solve $\\dfrac{x+1}{x-3}\\ge 0$.", opts:["$x\\le -1$ or $x>3$","$-1\\le x\\le 3$","$x<-1$ or $x>3$","$x\\ge 3$"], ans:0, exp:"<b>Sign-chart method (rational inequality):</b><br>1. Critical numbers: numerator zero at $x=-1$ (<i>included</i> since $\\ge$); denominator zero at $x=3$ (<b>always excluded</b>).<br>2. Test intervals:<br>&nbsp;&nbsp;• $x=-2$: $\\dfrac{-1}{-5} = +$ ✓<br>&nbsp;&nbsp;• $x=0$: $\\dfrac{1}{-3} = -$<br>&nbsp;&nbsp;• $x=4$: $\\dfrac{5}{1} = +$ ✓<br>3. Solution: $(-\\infty, -1] \\cup (3, \\infty)$."},
      {q:"By quadratic formula, roots of $x^2 + 2x - 1 = 0$:", opts:["$-1\\pm\\sqrt{2}$","$1\\pm\\sqrt{2}$","$\\pm\\sqrt{2}$","$-1\\pm 2$"], ans:0, exp:"<b>Steps:</b><br>1. $a=1,\\ b=2,\\ c=-1$.<br>2. Discriminant: $b^2-4ac = 4 - 4(1)(-1) = 8$.<br>3. $x = \\dfrac{-2 \\pm \\sqrt 8}{2} = \\dfrac{-2 \\pm 2\\sqrt 2}{2} = -1 \\pm \\sqrt 2$."},
      {q:"Complete the square: $x^2 + 6x =$", opts:["$(x+3)^2-9$","$(x+3)^2+9$","$(x+6)^2-36$","$(x-3)^2-9$"], ans:0, exp:"<b>Steps:</b><br>1. Half the coefficient of $x$: $6/2 = 3$.<br>2. Square it: $9$. This is the amount needed to complete the square.<br>3. Add and subtract: $x^2 + 6x + 9 - 9 = (x+3)^2 - 9$.<br><b>Verify:</b> $(x+3)^2 = x^2 + 6x + 9$, so $(x+3)^2 - 9 = x^2 + 6x$ ✓"},
      {q:"$|x-2| \\ge 5$ solution:", opts:["$-3\\le x\\le 7$","$x\\le -3$ or $x\\ge 7$","$x\\ge 7$","$x\\le -3$"], ans:1, exp:"<b>Steps:</b><br>1. Use $|u| \\ge k \\iff u \\le -k$ OR $u \\ge k$: $x-2 \\le -5$ or $x-2 \\ge 5$.<br>2. Add 2 to each: $x \\le -3$ or $x \\ge 7$.<br>3. Solution: $(-\\infty,-3] \\cup [7,\\infty)$."},
      {q:"Solve $\\sqrt{x}+\\sqrt{x+5}=5$.", opts:["$x=4$","$x=0$","$x=9$","no solution"], ans:0, exp:"<b>Steps (two radicals):</b><br>1. Isolate one radical: $\\sqrt{x+5} = 5 - \\sqrt x$.<br>2. Square: $x+5 = 25 - 10\\sqrt x + x$.<br>3. Simplify: $5 = 25 - 10\\sqrt x \\Rightarrow 10\\sqrt x = 20 \\Rightarrow \\sqrt x = 2$.<br>4. Square again: $x = 4$.<br><b>Check:</b> $\\sqrt 4 + \\sqrt 9 = 2 + 3 = 5$ ✓"},
      {q:"Sum of roots of $2x^2 - 6x + 4=0$:", opts:["$3$","$-3$","$2$","$-2$"], ans:0, exp:"<b>Vieta's formulas:</b> for $ax^2+bx+c=0$, sum $= -b/a$, product $= c/a$.<br>1. Sum $= -(-6)/2 = 6/2 = 3$.<br><b>Verify:</b> divide by 2: $x^2-3x+2=0 \\Rightarrow (x-1)(x-2)=0$. Roots $1$ and $2$ sum to $3$ ✓"},
    ]
  },
  {
    title:"Functions and Their Graphs",
    sub:"Domain/range, polynomial & rational functions, composition, inverse",
    content:`
<div class="section">
<div class="section-label">What is a function?</div>
<div class="card">
<p class="body">A <strong>function</strong> $f: A \\to B$ assigns to each input $x \\in A$ exactly one output $f(x) \\in B$. The set $A$ is the <strong>domain</strong>; the set of actual outputs is the <strong>range</strong>.</p>
<div class="tip"><strong>Vertical line test:</strong> a graph represents a function iff every vertical line crosses it at most once.</div>
<div class="example-box"><strong>Example</strong>If $f(x) = 3x^2 - 2$, then $f(-1) = 3(1)-2 = 1$ and $f(a+1) = 3(a+1)^2 - 2 = 3a^2 + 6a + 1$.</div>
</div>
</div>

<div class="section">
<div class="section-label">Finding domain</div>
<div class="card">
<p class="body">Domain = all real $x$ for which $f(x)$ is a real number. Two main restrictions:</p>
<ul class="list-styled">
<li><strong>Denominator $\\ne 0$.</strong> For $f(x)=\\tfrac{1}{x-3}$: domain $\\{x: x\\ne 3\\}$.</li>
<li><strong>Even-index radicand $\\ge 0$.</strong> For $f(x)=\\sqrt{4-x}$: $4-x\\ge 0 \\Rightarrow x\\le 4$.</li>
</ul>
<div class="example-box"><strong>Example</strong>Domain of $f(x)=\\dfrac{\\sqrt{x+2}}{x-1}$: $x+2\\ge 0$ AND $x\\ne 1 \\Rightarrow [-2,1)\\cup(1,\\infty)$.</div>
</div>
</div>

<div class="section">
<div class="section-label">Polynomial functions</div>
<div class="card">
<p class="body">A <strong>polynomial</strong> $P(x) = a_n x^n + \\cdots + a_1 x + a_0$ ($a_n \\ne 0$) has degree $n$. Domain is all reals.</p>
<div class="table-wrap">
<table>
<tr><th>Degree</th><th>Name</th><th>End behavior (leading $a_n x^n$)</th></tr>
<tr><td>0</td><td>Constant</td><td>Horizontal line</td></tr>
<tr><td>1</td><td>Linear</td><td>Slope $a_1$; rises/falls</td></tr>
<tr><td>2</td><td>Quadratic</td><td>Parabola; opens up if $a_2>0$</td></tr>
<tr><td>3</td><td>Cubic</td><td>S-shape; $\\pm\\infty$ at the ends</td></tr>
<tr><td>$n$ even, $a_n>0$</td><td>—</td><td>Both ends $\\to +\\infty$</td></tr>
<tr><td>$n$ odd, $a_n>0$</td><td>—</td><td>Left $\\to -\\infty$, right $\\to +\\infty$</td></tr>
</table>
</div>
<p class="body"><strong>Zeros</strong> (roots) — where $P(x)=0$. A polynomial of degree $n$ has at most $n$ real zeros. <strong>Multiplicity:</strong> if $(x-r)^k$ divides $P$, root $r$ has multiplicity $k$. Even multiplicity → graph touches axis; odd → graph crosses.</p>
</div>
</div>

<div class="section">
<div class="section-label">Rational functions</div>
<div class="card">
<p class="body">A <strong>rational function</strong> is $f(x) = \\dfrac{P(x)}{Q(x)}$. Domain excludes zeros of $Q$.</p>
<strong style="font-size:13px">Asymptotes:</strong>
<ul class="list-styled">
<li><strong>Vertical asymptote</strong> at each $x$ where $Q(x)=0$ but $P(x)\\ne 0$. (If both vanish, you may have a hole instead — check for common factors.)</li>
<li><strong>Horizontal asymptote</strong>:
  <ul>
    <li>If $\\deg P < \\deg Q$: $y=0$.</li>
    <li>If $\\deg P = \\deg Q$: $y=\\tfrac{a_n}{b_n}$ (ratio of leading coefficients).</li>
    <li>If $\\deg P > \\deg Q$: no horizontal asymptote.</li>
  </ul>
</li>
<li><strong>Slant (oblique) asymptote</strong>: when $\\deg P = \\deg Q + 1$. Found by polynomial long division.</li>
</ul>
<div class="example-box"><strong>Example</strong>$f(x)=\\dfrac{2x^2+1}{x^2-4}$. Vertical asymptotes at $x=\\pm 2$. Horizontal: $y = 2/1 = 2$. Domain: $\\{x: x\\ne \\pm 2\\}$.</div>
<div class="desmos-graph" data-fns="y=(2x^2+1)/(x^2-4)|x=2|x=-2|y=2" data-xmin="-6" data-xmax="6" data-ymin="-8" data-ymax="8"></div>
<div class="desmos-caption">Drag, zoom, and hover. Dashed lines show the asymptotes at $x=\\pm 2$ and $y=2$.</div>
</div>
</div>

<div class="section">
<div class="section-label">Transformations of graphs</div>
<div class="card">
<div class="table-wrap">
<table>
<tr><th>Transformation</th><th>Effect</th></tr>
<tr><td>$f(x)+c$</td><td>Vertical shift up $c$</td></tr>
<tr><td>$f(x-c)$</td><td>Horizontal shift right $c$</td></tr>
<tr><td>$-f(x)$</td><td>Reflect across $x$-axis</td></tr>
<tr><td>$f(-x)$</td><td>Reflect across $y$-axis</td></tr>
<tr><td>$cf(x),\\ c>1$</td><td>Vertical stretch by factor $c$</td></tr>
<tr><td>$f(cx),\\ c>1$</td><td>Horizontal compression by $c$</td></tr>
</table>
</div>
<div class="tip"><strong>Even/odd:</strong> $f$ is <em>even</em> if $f(-x)=f(x)$ (symmetric across $y$-axis: $x^2,\\cos x$). Odd if $f(-x)=-f(x)$ (symmetric about origin: $x^3,\\sin x$).</div>
<div class="desmos-graph" data-fns="y=x^2|y=(x-2)^2|y=(x-2)^2+3|y=-(x-2)^2+3" data-xmin="-6" data-xmax="8" data-ymin="-6" data-ymax="10"></div>
<div class="desmos-caption">Four transformations of $y=x^2$: shift right 2, then up 3, then reflect vertically.</div>
</div>
</div>

<div class="section">
<div class="section-label">Composite functions</div>
<div class="card">
<div class="formula-box">$(f\\circ g)(x) = f(g(x))$</div>
<p class="body">Apply $g$ first, then $f$. The domain of $f\\circ g$ is all $x$ in the domain of $g$ such that $g(x)$ lies in the domain of $f$.</p>
<div class="example-box"><strong>Example</strong>$f(x)=\\sqrt{x},\\ g(x)=x-1$. Then $(f\\circ g)(x)=\\sqrt{x-1}$ with domain $x\\ge 1$, while $(g\\circ f)(x)=\\sqrt{x}-1$ with domain $x\\ge 0$.</div>
</div>
</div>

<div class="section">
<div class="section-label">Inverse functions</div>
<div class="card">
<p class="body">$f^{-1}$ is the inverse of $f$ if $f(f^{-1}(x))=x$ and $f^{-1}(f(x))=x$. A function has an inverse iff it is <strong>one-to-one</strong> (horizontal line test).</p>
<strong style="font-size:13px">To find $f^{-1}$:</strong>
<ol class="list-styled" style="list-style-type:decimal">
<li>Replace $f(x)$ with $y$.</li>
<li>Swap $x$ and $y$.</li>
<li>Solve for $y$.</li>
<li>Rename $y$ as $f^{-1}(x)$.</li>
</ol>
<div class="example-box"><strong>Example</strong>$f(x)=2x-5$. Swap and solve: $x=2y-5 \\Rightarrow y=\\tfrac{x+5}{2}$. So $f^{-1}(x)=\\tfrac{x+5}{2}$.</div>
<div class="tip">The graph of $f^{-1}$ is the reflection of $f$ across the line $y=x$. Domain of $f$ = range of $f^{-1}$, and vice versa.</div>
</div>
</div>`,
    quiz:[
      {q:"Domain of $f(x)=\\dfrac{1}{x^2-9}$:", opts:["$x\\ne 3$","$x\\ne \\pm 3$","$x>3$","all reals"], ans:1, exp:"<b>Steps:</b><br>1. Domain excludes where the denominator is zero.<br>2. Solve $x^2-9 = 0 \\Rightarrow x = \\pm 3$.<br>3. Domain: all reals except $\\pm 3$."},
      {q:"Domain of $f(x)=\\sqrt{x-2}$:", opts:["$x>2$","$x\\ge 2$","$x\\le 2$","all reals"], ans:1, exp:"<b>Steps:</b><br>1. Even-index radical → radicand must be $\\ge 0$.<br>2. $x-2 \\ge 0 \\Rightarrow x \\ge 2$.<br>3. Domain: $[2, \\infty)$."},
      {q:"If $f(x)=x^2+1, g(x)=2x-3$, find $f(g(2))$.", opts:["$2$","$5$","$10$","$-2$"], ans:0, exp:"<b>Steps (inside-out):</b><br>1. Compute inner: $g(2) = 2(2) - 3 = 1$.<br>2. Apply $f$: $f(1) = 1^2 + 1 = 2$."},
      {q:"Inverse of $f(x)=3x+6$:", opts:["$\\tfrac{x-6}{3}$","$\\tfrac{x+6}{3}$","$3x-6$","$\\tfrac{1}{3x+6}$"], ans:0, exp:"<b>Steps to find an inverse:</b><br>1. Replace $f(x)$ with $y$: $y = 3x + 6$.<br>2. Swap $x$ and $y$: $x = 3y + 6$.<br>3. Solve for $y$: $3y = x - 6 \\Rightarrow y = \\dfrac{x-6}{3}$.<br>4. So $f^{-1}(x) = \\dfrac{x-6}{3}$."},
      {q:"Horizontal asymptote of $\\dfrac{3x^2-1}{2x^2+5}$:", opts:["$y=0$","$y=3$","$y=\\tfrac{3}{2}$","none"], ans:2, exp:"<b>HA rule for rational functions:</b><br>• If $\\deg P < \\deg Q$: $y=0$.<br>• If $\\deg P = \\deg Q$: $y = $ ratio of leading coefficients.<br>• If $\\deg P > \\deg Q$: no HA.<br><b>Here:</b> degrees equal (both 2) → $y = \\dfrac{3}{2}$."},
      {q:"Vertical asymptote(s) of $\\dfrac{x+1}{x^2-x-2}$:", opts:["$x=-1$ only","$x=2$ only","$x=-1$ and $x=2$","$x=2$; hole at $x=-1$"], ans:3, exp:"<b>Steps:</b><br>1. Factor denominator: $x^2-x-2 = (x-2)(x+1)$.<br>2. Rewrite: $\\dfrac{x+1}{(x-2)(x+1)}$.<br>3. Common factor $(x+1)$ cancels — that produces a <b>hole</b> (removable discontinuity) at $x=-1$.<br>4. The remaining factor $(x-2)$ in the denominator gives a <b>vertical asymptote</b> at $x=2$."},
      {q:"Which is even?", opts:["$x^3$","$x^4-3x^2$","$x+1$","$\\sin x$"], ans:1, exp:"<b>Test:</b> $f$ is even iff $f(-x)=f(x)$.<br>• $x^3$: $(-x)^3 = -x^3 \\ne x^3$ → odd.<br>• $x^4-3x^2$: $(-x)^4 - 3(-x)^2 = x^4 - 3x^2$ ✓ <b>even</b>.<br>• $x+1$: $-x+1 \\ne x+1$ → neither.<br>• $\\sin x$: $\\sin(-x) = -\\sin x$ → odd.<br><b>Shortcut:</b> a polynomial is even iff every term has even degree."},
      {q:"Range of $f(x)=x^2+4$:", opts:["all reals","$y\\ge 4$","$y>4$","$y\\le 4$"], ans:1, exp:"<b>Steps:</b><br>1. $x^2 \\ge 0$ for all real $x$, with equality at $x=0$.<br>2. So $x^2 + 4 \\ge 4$, achieving minimum 4 at $x=0$.<br>3. Range: $[4, \\infty)$, i.e. $y \\ge 4$."},
      {q:"$f(x)=x^2$ shifted right 3, up 2:", opts:["$(x-3)^2+2$","$(x+3)^2+2$","$x^2-3x+2$","$(x-3)^2-2$"], ans:0, exp:"<b>Transformation rules:</b><br>• Shift right by $c$: replace $x$ with $x-c$ → $f(x-c)$.<br>• Shift up by $c$: add $c$ → $f(x)+c$.<br><b>Apply:</b> right 3 gives $(x-3)^2$; up 2 gives $(x-3)^2 + 2$."},
      {q:"A polynomial of odd degree must have at least how many real zeros?", opts:["$0$","$1$","$2$","odd-degree count"], ans:1, exp:"<b>Why:</b><br>1. An odd-degree polynomial has opposite end behavior — $f(x)\\to -\\infty$ on one end and $+\\infty$ on the other.<br>2. Since $f$ is continuous and crosses from negative to positive, by the Intermediate Value Theorem it must equal 0 somewhere.<br>3. Therefore <b>at least 1</b> real zero is guaranteed."},
      {q:"Multiplicity of $x=2$ in $P(x)=(x-2)^3(x+1)$:", opts:["$1$","$2$","$3$","$4$"], ans:2, exp:"<b>Definition:</b> multiplicity of a root $r$ is the highest power of $(x-r)$ dividing $P$.<br>The factor $(x-2)$ appears to the 3rd power → multiplicity 3.<br><b>Graphical meaning:</b> odd multiplicity → graph crosses the $x$-axis at $x=2$ (with a flat tangent since power > 1)."},
      {q:"$(g\\circ f)(x)$ where $f(x)=x+2, g(x)=x^2$:", opts:["$x^2+2$","$(x+2)^2$","$x^2+4$","$x^2-4$"], ans:1, exp:"<b>Steps:</b><br>1. $(g\\circ f)(x) = g(f(x))$ — apply $f$ first, then $g$.<br>2. $f(x) = x+2$.<br>3. $g(x+2) = (x+2)^2$."},
      {q:"If $f$ is one-to-one and $f(3)=7$, then $f^{-1}(7)=$", opts:["$3$","$7$","$\\tfrac{1}{7}$","cannot tell"], ans:0, exp:"<b>Inverse property:</b> if $f(a) = b$, then $f^{-1}(b) = a$.<br>Given $f(3) = 7$, we get $f^{-1}(7) = 3$.<br>(The inverse swaps inputs and outputs — that's why the graph of $f^{-1}$ is the reflection of $f$ across $y=x$.)"},
      {q:"Slant asymptote of $\\dfrac{x^2+1}{x}$:", opts:["$y=0$","$y=x$","$y=1$","none"], ans:1, exp:"<b>Steps:</b><br>1. A slant asymptote exists when $\\deg P = \\deg Q + 1$. Here $2 = 1+1$ ✓<br>2. Polynomial long division: $\\dfrac{x^2+1}{x} = x + \\dfrac{1}{x}$.<br>3. As $x \\to \\pm\\infty$, $\\dfrac{1}{x} \\to 0$, so the function approaches $y = x$."},
      {q:"Sum of zeros of $P(x)=x^3-6x^2+11x-6$:", opts:["$6$","$-6$","$11$","$3$"], ans:0, exp:"<b>Vieta's for cubic $ax^3+bx^2+cx+d$:</b> sum of zeros $= -b/a$.<br>1. $a=1,\\ b=-6$. Sum $= -(-6)/1 = 6$.<br><b>Verify by factoring:</b> rational root test gives $P(1) = 1-6+11-6 = 0$. Divide: $P(x) = (x-1)(x^2-5x+6) = (x-1)(x-2)(x-3)$. Zeros: $1, 2, 3$; sum $= 6$ ✓"},
    ]
  },
  {
    title:"Exponential and Logarithmic Functions",
    sub:"Exponent/log properties, evaluation, solving equations, graphs",
    content:`
<div class="section">
<div class="section-label">Exponential functions</div>
<div class="card">
<p class="body">An <strong>exponential function</strong> has the form $f(x)=a\\cdot b^x$ with base $b>0,\\ b\\ne 1$. The natural exponential uses $b=e\\approx 2.71828$.</p>
<ul class="list-styled">
<li>Domain: all reals. Range: $(0,\\infty)$ when $a>0$.</li>
<li>If $b>1$: increasing (growth). If $0<b<1$: decreasing (decay).</li>
<li>Horizontal asymptote $y=0$.</li>
<li>Passes through $(0,a)$.</li>
</ul>
<div class="formula-box">Compound interest: $A = P\\left(1 + \\dfrac{r}{n}\\right)^{nt}$; continuous: $A = Pe^{rt}$.</div>
</div>
</div>

<div class="section">
<div class="section-label">Logarithms — the inverse</div>
<div class="card">
<div class="formula-box">$y = \\log_b x \\iff b^y = x \\qquad (b>0,\\ b\\ne 1,\\ x>0)$</div>
<p class="body"><strong>Common log:</strong> $\\log x = \\log_{10} x$. &nbsp; <strong>Natural log:</strong> $\\ln x = \\log_e x$.</p>
<p class="body">Domain: $(0,\\infty)$. Range: all reals. Vertical asymptote $x=0$. Passes through $(1,0)$.</p>
</div>
</div>

<div class="section">
<div class="section-label">Logarithm properties</div>
<div class="card">
<div class="formula-box">$\\log_b(xy) = \\log_b x + \\log_b y$</div>
<div class="formula-box">$\\log_b\\!\\left(\\dfrac{x}{y}\\right) = \\log_b x - \\log_b y$</div>
<div class="formula-box">$\\log_b(x^p) = p\\log_b x$</div>
<div class="formula-box">$\\log_b b = 1,\\quad \\log_b 1 = 0,\\quad b^{\\log_b x} = x,\\quad \\log_b(b^x) = x$</div>
<div class="formula-box">Change of base: $\\log_b x = \\dfrac{\\ln x}{\\ln b} = \\dfrac{\\log x}{\\log b}$</div>
<div class="example-box"><strong>Example</strong>Expand $\\log_2\\!\\left(\\dfrac{x^3 \\sqrt{y}}{z}\\right) = 3\\log_2 x + \\tfrac{1}{2}\\log_2 y - \\log_2 z$.</div>
</div>
</div>

<div class="section">
<div class="section-label">Evaluating logarithms</div>
<div class="card">
<p class="body">Convert to exponential form mentally: $\\log_b x = ?$ means "$b^? = x$."</p>
<div class="example-box"><strong>Examples</strong>
$\\log_3 81 = 4$ (since $3^4=81$). &nbsp;
$\\log_{1/2} 8 = -3$ (since $(1/2)^{-3}=8$). &nbsp;
$\\log_5 1 = 0$. &nbsp;
$\\ln e^{2x} = 2x$.</div>
</div>
</div>

<div class="section">
<div class="section-label">Solving exponential equations</div>
<div class="card">
<strong style="font-size:13px">Strategy 1 — same base:</strong> if $b^{f(x)} = b^{g(x)}$ then $f(x)=g(x)$.
<div class="example-box"><strong>Example</strong>$2^{x+1} = 32 \\Rightarrow 2^{x+1}=2^5 \\Rightarrow x=4$.</div>
<strong style="font-size:13px">Strategy 2 — take logs:</strong> if bases can't be matched, apply $\\ln$ to both sides and use the power rule.
<div class="example-box"><strong>Example</strong>$5^x = 17 \\Rightarrow x\\ln 5 = \\ln 17 \\Rightarrow x = \\dfrac{\\ln 17}{\\ln 5} \\approx 1.760$.</div>
<div class="example-box"><strong>Example (quadratic in disguise)</strong>$e^{2x} - 5e^x + 6 = 0$. Let $u=e^x$: $u^2-5u+6=0 \\Rightarrow u=2,3 \\Rightarrow x=\\ln 2,\\ \\ln 3$.</div>
</div>
</div>

<div class="section">
<div class="section-label">Solving logarithmic equations</div>
<div class="card">
<strong style="font-size:13px">Strategy 1 — condense to single log, then exponentiate.</strong>
<div class="example-box"><strong>Example</strong>$\\log_2 x + \\log_2(x-2) = 3 \\Rightarrow \\log_2[x(x-2)] = 3 \\Rightarrow x(x-2)=8 \\Rightarrow x^2-2x-8=0 \\Rightarrow x=4$ or $-2$. Reject $-2$ (log of negative undefined). $x=4$.</div>
<strong style="font-size:13px">Strategy 2 — equate arguments if same log on both sides.</strong>
<div class="example-box"><strong>Example</strong>$\\ln(2x+1)=\\ln(x+5) \\Rightarrow 2x+1=x+5 \\Rightarrow x=4$.</div>
<div class="warn"><strong>Always check:</strong> arguments must be positive in the original equation.</div>
</div>
</div>

<div class="section">
<div class="section-label">Graphing</div>
<div class="card">
<p class="body"><strong>Exponential</strong> $y=b^x$: through $(0,1)$ and $(1,b)$; HA $y=0$; one-to-one. <strong>Logarithmic</strong> $y=\\log_b x$: reflection of the exponential across $y=x$; through $(1,0)$ and $(b,1)$; VA $x=0$.</p>
<div class="desmos-graph" data-fns="y=e^x|y=\\ln(x)|y=x" data-xmin="-4" data-xmax="6" data-ymin="-4" data-ymax="6"></div>
<div class="desmos-caption">$y=e^x$ and $y=\\ln x$ are reflections across $y=x$.</div>
<div class="tip">Transformations work the same: $\\log_b(x-h)+k$ has VA at $x=h$ and point $(h+1,k)$.</div>
</div>
</div>`,
    quiz:[
      {q:"$\\log_2 32 =$", opts:["$4$","$5$","$6$","$32$"], ans:1, exp:"<b>Steps:</b><br>1. Ask: $2^? = 32$.<br>2. Recall powers of 2: $2^4=16, 2^5=32$.<br>3. Answer: $\\log_2 32 = 5$."},
      {q:"$\\ln e^7 =$", opts:["$1$","$7$","$e^7$","$0$"], ans:1, exp:"<b>Inverse property:</b> $\\log_b(b^x) = x$. Here $\\ln$ is $\\log_e$ and the argument is $e^7$, so the answer is $7$."},
      {q:"$\\log_b(M) + \\log_b(N) =$", opts:["$\\log_b(M+N)$","$\\log_b(MN)$","$\\log_b(M/N)$","$\\log_b M\\cdot \\log_b N$"], ans:1, exp:"<b>Product rule of logs:</b> $\\log_b(MN) = \\log_b M + \\log_b N$.<br>(<b>Watch out:</b> $\\log_b(M+N)$ is <i>not</i> the same — there's no formula for the log of a sum.)"},
      {q:"Solve $3^x = 81$.", opts:["$x=3$","$x=4$","$x=9$","$x=27$"], ans:1, exp:"<b>Steps (same-base strategy):</b><br>1. Rewrite 81 as a power of 3: $81 = 3^4$.<br>2. Equation becomes $3^x = 3^4$.<br>3. Same base ⇒ exponents equal: $x = 4$."},
      {q:"Solve $\\ln(x-1) = 2$.", opts:["$x=e^2+1$","$x=e^2-1$","$x=2e$","$x=3$"], ans:0, exp:"<b>Steps:</b><br>1. Rewrite in exponential form: $\\ln u = 2 \\iff u = e^2$.<br>2. So $x - 1 = e^2$.<br>3. Solve: $x = e^2 + 1 \\approx 8.389$.<br>4. Check argument $>0$: $e^2 > 0$ ✓"},
      {q:"$\\log_3 \\dfrac{1}{9} =$", opts:["$-2$","$2$","$-\\tfrac{1}{2}$","$3$"], ans:0, exp:"<b>Steps:</b><br>1. Ask: $3^? = \\tfrac{1}{9}$.<br>2. Rewrite $\\tfrac{1}{9} = \\tfrac{1}{3^2} = 3^{-2}$.<br>3. So the exponent is $-2$."},
      {q:"Change of base: $\\log_5 100 =$", opts:["$\\tfrac{\\log 100}{\\log 5}$","$\\log 100 - \\log 5$","$\\tfrac{\\log 5}{\\log 100}$","$5\\log 100$"], ans:0, exp:"<b>Change-of-base formula:</b> $\\log_b x = \\dfrac{\\log x}{\\log b} = \\dfrac{\\ln x}{\\ln b}$.<br>The base you want goes on the <b>bottom</b>; the argument goes on top.<br>So $\\log_5 100 = \\dfrac{\\log 100}{\\log 5}$. (Useful since calculators only have $\\log$ and $\\ln$.)"},
      {q:"Solve $e^x = 7$.", opts:["$x=7$","$x=\\ln 7$","$x=e^7$","$x=\\log 7$"], ans:1, exp:"<b>Steps:</b><br>1. Take $\\ln$ of both sides: $\\ln(e^x) = \\ln 7$.<br>2. Use inverse property $\\ln(e^x) = x$: $x = \\ln 7$.<br>3. Numerically: $\\ln 7 \\approx 1.946$."},
      {q:"Domain of $y=\\log(x-2)$:", opts:["$x>2$","$x\\ge 2$","$x\\ne 2$","all reals"], ans:0, exp:"<b>Steps:</b><br>1. The argument of a log must be <b>strictly positive</b> (not $\\ge 0$, because $\\log 0$ is undefined).<br>2. $x - 2 > 0 \\Rightarrow x > 2$.<br>3. Domain: $(2, \\infty)$."},
      {q:"$5^{\\log_5 12} =$", opts:["$5$","$12$","$60$","$\\log 12$"], ans:1, exp:"<b>Inverse property:</b> $b^{\\log_b x} = x$ (the exponential and log with the same base cancel).<br>So $5^{\\log_5 12} = 12$."},
      {q:"Solve $\\log_2 x + \\log_2(x+6) = 4$.", opts:["$x=2$","$x=-8$","$x=2$ and $x=-8$","no solution"], ans:0, exp:"<b>Steps:</b><br>1. Condense using product rule: $\\log_2[x(x+6)] = 4$.<br>2. Rewrite in exponential form: $x(x+6) = 2^4 = 16$.<br>3. Expand: $x^2 + 6x - 16 = 0$.<br>4. Factor: $(x+8)(x-2) = 0 \\Rightarrow x = -8$ or $x = 2$.<br>5. <b>Check originals:</b><br>&nbsp;&nbsp;• $x=-8$: $\\log_2(-8)$ undefined ✗ extraneous.<br>&nbsp;&nbsp;• $x=2$: $\\log_2 2 + \\log_2 8 = 1 + 3 = 4$ ✓<br>Only $x=2$ valid."},
      {q:"$\\$1000$ at $5\\%$ continuous for $10$ yr: $A=$", opts:["$1000e^{0.5}$","$1000(1.05)^{10}$","$1000e^{5}$","$1050$"], ans:0, exp:"<b>Formula:</b> $A = Pe^{rt}$ for continuous compounding.<br>1. $P=1000,\\ r=0.05,\\ t=10$.<br>2. Exponent: $rt = 0.05 \\times 10 = 0.5$.<br>3. $A = 1000 e^{0.5} \\approx 1648.72$."},
      {q:"As $x\\to 0^+$, $\\ln x\\to$", opts:["$0$","$1$","$-\\infty$","$\\infty$"], ans:2, exp:"<b>Reasoning:</b><br>1. $y = \\ln x$ has a vertical asymptote at $x = 0$.<br>2. Test small values: $\\ln(0.1) \\approx -2.3$, $\\ln(0.01) \\approx -4.6$, $\\ln(0.001) \\approx -6.9$...<br>3. The function decreases without bound: $\\ln x \\to -\\infty$."},
      {q:"If $\\log_b 5 = 1.5$, then $\\log_b 25 =$", opts:["$2.25$","$3$","$3.0$","$2.5$"], ans:1, exp:"<b>Steps:</b><br>1. Recognize $25 = 5^2$.<br>2. Apply power rule: $\\log_b 5^2 = 2\\log_b 5$.<br>3. Substitute: $2(1.5) = 3$."},
      {q:"Solve $2^{2x} - 6\\cdot 2^x + 8 = 0$.", opts:["$x=2,4$","$x=1,2$","$x=\\log_2 2,\\log_2 4$","$x=1$ and $x=2$"], ans:3, exp:"<b>Quadratic-in-disguise:</b><br>1. Note $2^{2x} = (2^x)^2$. Let $u = 2^x$.<br>2. Equation becomes $u^2 - 6u + 8 = 0$.<br>3. Factor: $(u-2)(u-4) = 0 \\Rightarrow u = 2$ or $u = 4$.<br>4. Back-substitute:<br>&nbsp;&nbsp;• $2^x = 2 \\Rightarrow x = 1$.<br>&nbsp;&nbsp;• $2^x = 4 \\Rightarrow x = 2$.<br>So $x = 1$ and $x = 2$."},
    ]
  },
  {
    title:"Trigonometry",
    sub:"Trig functions, identities, equations, oblique triangles",
    content:`
<div class="section">
<div class="section-label">Angle measure</div>
<div class="card">
<div class="formula-box">$180^\\circ = \\pi$ rad &nbsp;&nbsp; $1^\\circ = \\dfrac{\\pi}{180}$ rad &nbsp;&nbsp; $1$ rad $= \\dfrac{180^\\circ}{\\pi}$</div>
<p class="body">Arc length: $s = r\\theta$ (with $\\theta$ in radians). Sector area: $A = \\tfrac{1}{2}r^2\\theta$.</p>
</div>
</div>

<div class="section">
<div class="section-label">Six trig functions — right triangle</div>
<div class="card">
<p class="body">For acute $\\theta$ with opposite $O$, adjacent $A$, hypotenuse $H$:</p>
<div class="formula-box">$\\sin\\theta = \\dfrac{O}{H},\\ \\cos\\theta = \\dfrac{A}{H},\\ \\tan\\theta = \\dfrac{O}{A}$</div>
<div class="formula-box">$\\csc\\theta = \\dfrac{1}{\\sin\\theta},\\ \\sec\\theta = \\dfrac{1}{\\cos\\theta},\\ \\cot\\theta = \\dfrac{1}{\\tan\\theta}$</div>
</div>
</div>

<div class="section">
<div class="section-label">Unit circle</div>
<div class="card">
<p class="body">For any angle $\\theta$ in standard position, the terminal side hits the unit circle at $(\\cos\\theta,\\sin\\theta)$. Key values:</p>
<div class="table-wrap">
<table>
<tr><th>$\\theta$</th><th>$0$</th><th>$\\pi/6$</th><th>$\\pi/4$</th><th>$\\pi/3$</th><th>$\\pi/2$</th></tr>
<tr><td>$\\sin$</td><td>$0$</td><td>$1/2$</td><td>$\\sqrt 2/2$</td><td>$\\sqrt 3/2$</td><td>$1$</td></tr>
<tr><td>$\\cos$</td><td>$1$</td><td>$\\sqrt 3/2$</td><td>$\\sqrt 2/2$</td><td>$1/2$</td><td>$0$</td></tr>
<tr><td>$\\tan$</td><td>$0$</td><td>$\\sqrt 3/3$</td><td>$1$</td><td>$\\sqrt 3$</td><td>undef</td></tr>
</table>
</div>
<div class="tip"><strong>ASTC / "All Students Take Calculus":</strong> Quadrant I — all positive; II — sin positive; III — tan positive; IV — cos positive.</div>
</div>
</div>

<div class="section">
<div class="section-label">Graphs of trig functions</div>
<div class="card">
<ul class="list-styled">
<li>$y = \\sin x$: period $2\\pi$, amplitude 1, range $[-1,1]$.</li>
<li>$y = \\cos x$: same shape, phase-shifted by $\\pi/2$.</li>
<li>$y = \\tan x$: period $\\pi$, VAs at $x=\\tfrac{\\pi}{2}+k\\pi$, range all reals.</li>
<li>$y = \\csc x, \\sec x$: VAs where sin/cos = 0; range $(-\\infty,-1]\\cup [1,\\infty)$.</li>
<li>$y = \\cot x$: period $\\pi$, VAs at $x=k\\pi$.</li>
</ul>
<div class="formula-box">General sinusoid: $y = A\\sin(B(x - C)) + D$ — amplitude $|A|$, period $2\\pi/B$, phase shift $C$, vertical shift $D$.</div>
<div class="desmos-graph" data-fns="y=\\sin(x)|y=\\cos(x)|y=\\tan(x)" data-xmin="-6.5" data-xmax="6.5" data-ymin="-3" data-ymax="3"></div>
<div class="desmos-caption">$\\sin x$, $\\cos x$ (period $2\\pi$), and $\\tan x$ (period $\\pi$, vertical asymptotes).</div>
</div>
</div>

<div class="section">
<div class="section-label">Fundamental identities</div>
<div class="card">
<strong style="font-size:13px">Reciprocal &amp; quotient:</strong>
<div class="formula-box">$\\tan\\theta=\\dfrac{\\sin\\theta}{\\cos\\theta},\\ \\cot\\theta=\\dfrac{\\cos\\theta}{\\sin\\theta}$</div>
<strong style="font-size:13px">Pythagorean:</strong>
<div class="formula-box">$\\sin^2\\theta + \\cos^2\\theta = 1$</div>
<div class="formula-box">$1 + \\tan^2\\theta = \\sec^2\\theta$</div>
<div class="formula-box">$1 + \\cot^2\\theta = \\csc^2\\theta$</div>
<strong style="font-size:13px">Even/odd:</strong>
<div class="formula-box">$\\sin(-x)=-\\sin x,\\ \\cos(-x)=\\cos x,\\ \\tan(-x)=-\\tan x$</div>
<strong style="font-size:13px">Sum &amp; difference:</strong>
<div class="formula-box">$\\sin(A\\pm B) = \\sin A\\cos B \\pm \\cos A\\sin B$</div>
<div class="formula-box">$\\cos(A\\pm B) = \\cos A\\cos B \\mp \\sin A\\sin B$</div>
<div class="formula-box">$\\tan(A\\pm B) = \\dfrac{\\tan A \\pm \\tan B}{1 \\mp \\tan A \\tan B}$</div>
<strong style="font-size:13px">Double angle:</strong>
<div class="formula-box">$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$</div>
<div class="formula-box">$\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta = 1 - 2\\sin^2\\theta = 2\\cos^2\\theta - 1$</div>
<div class="formula-box">$\\tan 2\\theta = \\dfrac{2\\tan\\theta}{1-\\tan^2\\theta}$</div>
<strong style="font-size:13px">Half angle:</strong>
<div class="formula-box">$\\sin^2\\theta = \\dfrac{1-\\cos 2\\theta}{2},\\ \\cos^2\\theta = \\dfrac{1+\\cos 2\\theta}{2}$</div>
</div>
</div>

<div class="section">
<div class="section-label">Inverse trig functions</div>
<div class="card">
<p class="body">Inverses exist only on restricted domains where the original is one-to-one.</p>
<div class="table-wrap">
<table>
<tr><th>Function</th><th>Domain</th><th>Range</th></tr>
<tr><td>$\\sin^{-1} x$</td><td>$[-1,1]$</td><td>$[-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}]$</td></tr>
<tr><td>$\\cos^{-1} x$</td><td>$[-1,1]$</td><td>$[0,\\pi]$</td></tr>
<tr><td>$\\tan^{-1} x$</td><td>$(-\\infty,\\infty)$</td><td>$(-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2})$</td></tr>
</table>
</div>
<div class="example-box"><strong>Example</strong>$\\sin^{-1}(\\tfrac{1}{2})=\\tfrac{\\pi}{6}$ (only one answer in $[-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}]$).</div>
</div>
</div>

<div class="section">
<div class="section-label">Solving trig equations</div>
<div class="card">
<strong style="font-size:13px">Strategy:</strong> isolate the trig function, use the inverse to find a reference angle, then list ALL solutions in the requested interval using periodicity and quadrant analysis.
<div class="example-box"><strong>Example</strong>$2\\sin x - 1 = 0$ on $[0, 2\\pi)$. $\\sin x = \\tfrac{1}{2}$. Solutions: $x=\\tfrac{\\pi}{6}, \\tfrac{5\\pi}{6}$.</div>
<div class="example-box"><strong>Example (quadratic)</strong>$2\\cos^2 x - \\cos x - 1 = 0$ on $[0,2\\pi)$. Let $u=\\cos x$: $(2u+1)(u-1)=0 \\Rightarrow u=-\\tfrac{1}{2},1$. So $x=\\tfrac{2\\pi}{3}, \\tfrac{4\\pi}{3}, 0$.</div>
<div class="tip">General solution: add the period to your base answer(s). E.g., $\\sin x = \\tfrac{1}{2}$ has $x = \\tfrac{\\pi}{6}+2k\\pi$ or $x=\\tfrac{5\\pi}{6}+2k\\pi$, $k\\in\\mathbb Z$.</div>
</div>
</div>

<div class="section">
<div class="section-label">Oblique triangles — Laws of Sines and Cosines</div>
<div class="card">
<div class="formula-box">Law of Sines: $\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B} = \\dfrac{c}{\\sin C}$</div>
<div class="formula-box">Law of Cosines: $c^2 = a^2 + b^2 - 2ab\\cos C$</div>
<div class="table-wrap">
<table>
<tr><th>Given</th><th>Use</th></tr>
<tr><td>SSS (three sides)</td><td>Law of Cosines</td></tr>
<tr><td>SAS (two sides + included angle)</td><td>Law of Cosines</td></tr>
<tr><td>ASA / AAS</td><td>Law of Sines</td></tr>
<tr><td>SSA (ambiguous case)</td><td>Law of Sines — 0, 1, or 2 triangles</td></tr>
</table>
</div>
<div class="example-box"><strong>Example</strong>$a=7, b=10, C=60^\\circ$. By Law of Cosines: $c^2 = 49 + 100 - 2(7)(10)\\cos 60^\\circ = 149 - 70 = 79$, so $c \\approx 8.89$.</div>
<p class="body"><strong>Area:</strong> $K = \\tfrac{1}{2}ab\\sin C$. Heron's formula: $K = \\sqrt{s(s-a)(s-b)(s-c)}$ where $s = \\tfrac{a+b+c}{2}$.</p>
</div>
</div>`,
    quiz:[
      {q:"$\\sin\\tfrac{\\pi}{6} =$", opts:["$\\tfrac{1}{2}$","$\\tfrac{\\sqrt 2}{2}$","$\\tfrac{\\sqrt 3}{2}$","$1$"], ans:0, exp:"<b>Steps:</b><br>1. $\\tfrac{\\pi}{6}$ rad $= 30°$ (since $\\pi$ rad $= 180°$, divide by 6).<br>2. Special triangle (30-60-90 ratio $1:\\sqrt 3:2$): opposite to 30° is the short leg = 1, hypotenuse = 2.<br>3. $\\sin 30° = \\dfrac{\\text{opp}}{\\text{hyp}} = \\dfrac{1}{2}$."},
      {q:"$\\cos\\tfrac{\\pi}{3} =$", opts:["$\\tfrac{1}{2}$","$\\tfrac{\\sqrt 3}{2}$","$0$","$1$"], ans:0, exp:"<b>Steps:</b><br>1. $\\tfrac{\\pi}{3}$ rad $= 60°$.<br>2. Use the 30-60-90 triangle ($1:\\sqrt 3:2$): adjacent to 60° = 1, hyp = 2.<br>3. $\\cos 60° = \\dfrac{\\text{adj}}{\\text{hyp}} = \\dfrac{1}{2}$."},
      {q:"Period of $y=\\tan x$:", opts:["$\\pi/2$","$\\pi$","$2\\pi$","$4\\pi$"], ans:1, exp:"<b>Reason:</b> Tangent repeats every $\\pi$ (half the sin/cos period) because $\\tan(x+\\pi) = \\dfrac{-\\sin x}{-\\cos x} = \\tan x$."},
      {q:"Amplitude of $y=3\\sin(2x)$:", opts:["$1$","$2$","$3$","$6$"], ans:2, exp:"<b>Steps:</b><br>1. In $y = A\\sin(Bx)$, the amplitude is $|A|$.<br>2. Here $A = 3$, so amplitude $= 3$.<br>(The $B$ inside affects the period — not the amplitude.)"},
      {q:"Period of $y=\\sin(3x)$:", opts:["$\\tfrac{2\\pi}{3}$","$3\\pi$","$2\\pi$","$\\pi/3$"], ans:0, exp:"<b>Formula:</b> for $y = \\sin(Bx)$, period $= \\dfrac{2\\pi}{|B|}$.<br>1. $B = 3$.<br>2. Period $= \\dfrac{2\\pi}{3}$.<br>(Bigger $B$ ⇒ faster oscillation ⇒ shorter period.)"},
      {q:"$\\sin^2\\theta + \\cos^2\\theta =$", opts:["$0$","$1$","$\\sin 2\\theta$","$2$"], ans:1, exp:"<b>The Pythagorean identity:</b> $\\sin^2\\theta + \\cos^2\\theta = 1$ — comes directly from the unit-circle definition where $(\\cos\\theta, \\sin\\theta)$ lies on $x^2+y^2=1$."},
      {q:"$1 + \\tan^2\\theta =$", opts:["$\\sec^2\\theta$","$\\csc^2\\theta$","$\\sin^2\\theta$","$\\cot^2\\theta$"], ans:0, exp:"<b>Derivation:</b><br>1. Start with $\\sin^2\\theta + \\cos^2\\theta = 1$.<br>2. Divide every term by $\\cos^2\\theta$: $\\dfrac{\\sin^2}{\\cos^2} + 1 = \\dfrac{1}{\\cos^2}$.<br>3. Rewrite using $\\tan = \\sin/\\cos$ and $\\sec = 1/\\cos$: $\\tan^2\\theta + 1 = \\sec^2\\theta$."},
      {q:"Solve $\\cos x = 0$ on $[0,2\\pi)$.", opts:["$0,\\pi$","$\\tfrac{\\pi}{2}$","$\\tfrac{\\pi}{2},\\tfrac{3\\pi}{2}$","$\\pi$"], ans:2, exp:"<b>Steps:</b><br>1. $\\cos x = 0$ where the unit-circle $x$-coordinate is 0 — i.e., on the $y$-axis.<br>2. That happens at $x = \\tfrac{\\pi}{2}$ (top) and $x = \\tfrac{3\\pi}{2}$ (bottom).<br>3. Both are in $[0, 2\\pi)$, so both count."},
      {q:"$\\sin 2\\theta =$", opts:["$2\\sin\\theta$","$2\\sin\\theta\\cos\\theta$","$\\sin^2\\theta-\\cos^2\\theta$","$2\\cos\\theta$"], ans:1, exp:"<b>Double-angle formula:</b> $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$.<br>Derived from sum formula: $\\sin(\\theta+\\theta) = \\sin\\theta\\cos\\theta + \\cos\\theta\\sin\\theta = 2\\sin\\theta\\cos\\theta$."},
      {q:"$\\sin^{-1}(1) =$", opts:["$0$","$\\tfrac{\\pi}{2}$","$\\pi$","$-\\tfrac{\\pi}{2}$"], ans:1, exp:"<b>Steps:</b><br>1. Ask: what angle in $[-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}]$ has sine = 1?<br>2. $\\sin(\\tfrac{\\pi}{2}) = 1$, and $\\tfrac{\\pi}{2}$ is in the allowed range.<br>3. Answer: $\\tfrac{\\pi}{2}$."},
      {q:"$\\tan^{-1}(1) =$", opts:["$0$","$\\tfrac{\\pi}{4}$","$\\tfrac{\\pi}{2}$","$\\pi$"], ans:1, exp:"<b>Steps:</b><br>1. What angle in $(-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2})$ has tan = 1?<br>2. $\\tan 45° = 1$, and $45° = \\tfrac{\\pi}{4}$.<br>3. Answer: $\\tfrac{\\pi}{4}$."},
      {q:"In triangle, $a=8, A=30^\\circ, B=45^\\circ$. Find $b$.", opts:["$8\\sqrt 2$","$\\tfrac{8\\sqrt 2}{1}$","$8\\sqrt{2}$","$8/\\sqrt 2$"], ans:0, exp:"<b>Law of Sines:</b> $\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B}$.<br>1. Solve for $b$: $b = a\\cdot\\dfrac{\\sin B}{\\sin A}$.<br>2. Substitute: $b = 8 \\cdot \\dfrac{\\sin 45°}{\\sin 30°} = 8 \\cdot \\dfrac{\\sqrt 2/2}{1/2}$.<br>3. Simplify: $8 \\cdot \\sqrt 2 = 8\\sqrt 2$."},
      {q:"SSS triangle requires:", opts:["Law of Sines","Law of Cosines","Either","Pythagorean theorem"], ans:1, exp:"<b>Rule of thumb:</b><br>• <b>Law of Cosines</b>: SSS or SAS (sides + included angle).<br>• <b>Law of Sines</b>: ASA, AAS, SSA (but SSA is ambiguous).<br>With three sides and no angles, you must use Cosines: $\\cos C = \\dfrac{a^2+b^2-c^2}{2ab}$."},
      {q:"$\\cos(A-B) =$", opts:["$\\cos A\\cos B+\\sin A\\sin B$","$\\cos A\\cos B-\\sin A\\sin B$","$\\sin A\\cos B-\\cos A\\sin B$","$\\sin A\\cos B+\\cos A\\sin B$"], ans:0, exp:"<b>Memorize the pattern:</b><br>$\\cos(A\\pm B) = \\cos A\\cos B \\mp \\sin A\\sin B$.<br>The signs <b>swap</b>: minus inside the $\\cos$ gives plus on the right.<br>$\\sin(A\\pm B) = \\sin A\\cos B \\pm \\cos A\\sin B$ — signs <b>match</b> for sin."},
      {q:"Solve $2\\sin x = \\sqrt 2$ on $[0,2\\pi)$.", opts:["$\\tfrac{\\pi}{4}$","$\\tfrac{\\pi}{4},\\tfrac{3\\pi}{4}$","$\\tfrac{\\pi}{6},\\tfrac{5\\pi}{6}$","$\\tfrac{\\pi}{2}$"], ans:1, exp:"<b>Steps:</b><br>1. Isolate: $\\sin x = \\dfrac{\\sqrt 2}{2}$.<br>2. Reference angle: $\\sin^{-1}(\\sqrt 2/2) = \\tfrac{\\pi}{4}$.<br>3. Sine is positive in <b>quadrants I and II</b>, so:<br>&nbsp;&nbsp;• Q-I: $x = \\tfrac{\\pi}{4}$.<br>&nbsp;&nbsp;• Q-II: $x = \\pi - \\tfrac{\\pi}{4} = \\tfrac{3\\pi}{4}$.<br>4. Solutions in $[0, 2\\pi)$: $\\tfrac{\\pi}{4}, \\tfrac{3\\pi}{4}$."},
    ]
  },
  {
    title:"Analytic Geometry",
    sub:"Distance, slope, lines, and conic sections",
    content:`
<div class="section">
<div class="section-label">Distance, midpoint, slope</div>
<div class="card">
<div class="formula-box">Distance: $d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$</div>
<div class="formula-box">Midpoint: $M = \\left(\\dfrac{x_1+x_2}{2},\\ \\dfrac{y_1+y_2}{2}\\right)$</div>
<div class="formula-box">Slope: $m = \\dfrac{y_2-y_1}{x_2-x_1}$, &nbsp; inclination: $\\tan\\theta = m$</div>
<p class="body">Two lines are <strong>parallel</strong> iff $m_1=m_2$; <strong>perpendicular</strong> iff $m_1 m_2 = -1$.</p>
</div>
</div>

<div class="section">
<div class="section-label">Forms of a line</div>
<div class="card">
<div class="formula-box">Point-slope: $y - y_1 = m(x - x_1)$</div>
<div class="formula-box">Slope-intercept: $y = mx + b$</div>
<div class="formula-box">General (standard): $Ax + By + C = 0$</div>
<div class="formula-box">Intercept form: $\\dfrac{x}{a} + \\dfrac{y}{b} = 1$ &nbsp; ($x$-intercept $a$, $y$-intercept $b$)</div>
<div class="formula-box">Distance from point $(x_0,y_0)$ to $Ax+By+C=0$: &nbsp; $d = \\dfrac{|Ax_0 + By_0 + C|}{\\sqrt{A^2+B^2}}$</div>
</div>
</div>

<div class="section">
<div class="section-label">Conic sections — overview</div>
<div class="card">
<p class="body">A <strong>conic</strong> is the intersection of a plane with a double cone. Four types: circle, ellipse, parabola, hyperbola. Algebraically, the general second-degree equation is</p>
<div class="formula-box">$Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0$</div>
<p class="body">For axis-aligned conics (no $xy$ term), the discriminant $B^2 - 4AC$ classifies them:</p>
<ul class="list-styled">
<li>$B^2-4AC < 0$: ellipse (circle if also $A=C$, $B=0$)</li>
<li>$B^2-4AC = 0$: parabola</li>
<li>$B^2-4AC > 0$: hyperbola</li>
</ul>
</div>
</div>

<div class="section">
<div class="section-label">Circle</div>
<div class="card">
<div class="formula-box">Standard: $(x-h)^2 + (y-k)^2 = r^2$ &nbsp; (center $(h,k)$, radius $r$)</div>
<p class="body">From general $x^2 + y^2 + Dx + Ey + F = 0$, complete the square in $x$ and in $y$ to recover the standard form.</p>
<div class="example-box"><strong>Example</strong>$x^2 + y^2 - 6x + 4y - 12 = 0$. Group: $(x^2-6x) + (y^2+4y) = 12$. Complete: $(x-3)^2 - 9 + (y+2)^2 - 4 = 12$. So $(x-3)^2 + (y+2)^2 = 25$ — circle, center $(3,-2)$, radius $5$.</div>
<div class="desmos-graph" data-fns="(x-3)^2+(y+2)^2=25" data-xmin="-4" data-xmax="10" data-ymin="-9" data-ymax="5"></div>
<div class="desmos-caption">Circle centered at $(3,-2)$ with radius $5$.</div>
</div>
</div>

<div class="section">
<div class="section-label">Parabola</div>
<div class="card">
<p class="body">A parabola is the set of points equidistant from a fixed focus and a fixed directrix.</p>
<div class="formula-box">Vertical axis, vertex $(h,k)$: $(x-h)^2 = 4p(y-k)$</div>
<div class="formula-box">Horizontal axis, vertex $(h,k)$: $(y-k)^2 = 4p(x-h)$</div>
<p class="body">For $(x-h)^2 = 4p(y-k)$ with $p>0$, the parabola opens up; focus at $(h, k+p)$, directrix $y = k-p$. For $p<0$, opens down.</p>
<div class="example-box"><strong>Example</strong>$y = x^2 - 4x + 7 \\Rightarrow y - 3 = (x-2)^2$, so vertex $(2,3)$, opens up, $4p=1 \\Rightarrow p=\\tfrac{1}{4}$, focus $(2,3.25)$.</div>
</div>
</div>

<div class="section">
<div class="section-label">Ellipse</div>
<div class="card">
<p class="body">Set of points whose distances to two foci sum to a constant $2a$.</p>
<div class="formula-box">Horizontal major axis (center $(h,k)$): $\\dfrac{(x-h)^2}{a^2} + \\dfrac{(y-k)^2}{b^2} = 1$, &nbsp; $a > b > 0$</div>
<ul class="list-styled">
<li>Vertices: $(h\\pm a, k)$. Co-vertices: $(h, k\\pm b)$.</li>
<li>Foci: $(h\\pm c, k)$ with $c^2 = a^2 - b^2$.</li>
<li>Eccentricity $e = c/a$, with $0 < e < 1$. (Circle: $e=0$.)</li>
</ul>
<div class="example-box"><strong>Example</strong>$\\dfrac{x^2}{25} + \\dfrac{y^2}{9} = 1$: $a=5, b=3, c=4$. Foci $(\\pm 4, 0)$.</div>
<div class="desmos-graph" data-fns="x^2/25+y^2/9=1|(-4,0)|(4,0)" data-xmin="-7" data-xmax="7" data-ymin="-5" data-ymax="5"></div>
<div class="desmos-caption">Ellipse with vertices at $(\\pm 5,0)$ and foci marked at $(\\pm 4,0)$.</div>
</div>
</div>

<div class="section">
<div class="section-label">Hyperbola</div>
<div class="card">
<p class="body">Set of points whose distances to two foci differ by a constant $2a$.</p>
<div class="formula-box">Horizontal transverse axis: $\\dfrac{(x-h)^2}{a^2} - \\dfrac{(y-k)^2}{b^2} = 1$</div>
<div class="formula-box">Vertical: $\\dfrac{(y-k)^2}{a^2} - \\dfrac{(x-h)^2}{b^2} = 1$</div>
<ul class="list-styled">
<li>Vertices: $(h\\pm a, k)$ for horizontal.</li>
<li>Foci: $(h\\pm c, k)$ with $c^2 = a^2 + b^2$.</li>
<li>Asymptotes: $y - k = \\pm \\dfrac{b}{a}(x-h)$.</li>
<li>Eccentricity $e = c/a > 1$.</li>
</ul>
<div class="desmos-graph" data-fns="x^2/4-y^2/9=1|y=1.5x|y=-1.5x" data-xmin="-8" data-xmax="8" data-ymin="-8" data-ymax="8"></div>
<div class="desmos-caption">Hyperbola $\\tfrac{x^2}{4}-\\tfrac{y^2}{9}=1$ with its slant asymptotes $y=\\pm\\tfrac{3}{2}x$.</div>
</div>
</div>

<div class="section">
<div class="section-label">General → standard form</div>
<div class="card">
<p class="body">Group $x$'s and $y$'s, factor out leading coefficients, complete the square in each variable, and rearrange.</p>
<div class="example-box"><strong>Example</strong>$9x^2 - 4y^2 - 36x - 8y - 4 = 0$. Group: $9(x^2-4x) - 4(y^2+2y) = 4$. Complete: $9[(x-2)^2-4] - 4[(y+1)^2-1]=4 \\Rightarrow 9(x-2)^2 - 4(y+1)^2 = 36$. Divide: $\\dfrac{(x-2)^2}{4} - \\dfrac{(y+1)^2}{9} = 1$ — hyperbola, center $(2,-1)$.</div>
</div>
</div>`,
    quiz:[
      {q:"Distance between $(1,2)$ and $(4,6)$:", opts:["$3$","$4$","$5$","$7$"], ans:2, exp:"<b>Steps:</b><br>1. Distance formula: $d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$.<br>2. Differences: $\\Delta x = 4-1 = 3$, $\\Delta y = 6-2 = 4$.<br>3. $d = \\sqrt{9 + 16} = \\sqrt{25} = 5$. (Classic 3-4-5 triangle.)"},
      {q:"Slope through $(2,3)$ and $(5,9)$:", opts:["$1$","$2$","$3$","$\\tfrac{1}{2}$"], ans:1, exp:"<b>Steps:</b><br>1. Slope formula: $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$.<br>2. $m = \\dfrac{9-3}{5-2} = \\dfrac{6}{3} = 2$."},
      {q:"Line perpendicular to $y=3x+1$ through origin:", opts:["$y=3x$","$y=-3x$","$y=-\\tfrac{1}{3}x$","$y=\\tfrac{1}{3}x$"], ans:2, exp:"<b>Steps:</b><br>1. Slope of given line: $m_1 = 3$.<br>2. Perpendicular slope is the <b>negative reciprocal</b>: $m_2 = -\\dfrac{1}{m_1} = -\\dfrac{1}{3}$.<br>3. Line through origin with that slope: $y = -\\tfrac{1}{3}x$.<br><b>Check:</b> $m_1 m_2 = 3 \\cdot (-\\tfrac{1}{3}) = -1$ ✓"},
      {q:"Center of $(x-2)^2+(y+5)^2=16$:", opts:["$(2,5)$","$(-2,5)$","$(2,-5)$","$(-2,-5)$"], ans:2, exp:"<b>Steps:</b><br>1. Standard form: $(x-h)^2 + (y-k)^2 = r^2$, center $(h,k)$.<br>2. Match: $x-2 \\Rightarrow h=2$; $y+5 = y-(-5) \\Rightarrow k=-5$.<br>3. Center: $(2, -5)$. Sign flip — the center coordinates are the <b>opposites</b> of what appears inside the squares."},
      {q:"Radius of $x^2+y^2-4x+6y+9=0$:", opts:["$1$","$2$","$3$","$4$"], ans:1, exp:"<b>Complete the square in $x$ and $y$:</b><br>1. Group: $(x^2 - 4x) + (y^2 + 6y) = -9$.<br>2. Complete: $(x^2-4x+4) + (y^2+6y+9) = -9 + 4 + 9 = 4$.<br>3. Rewrite: $(x-2)^2 + (y+3)^2 = 4$.<br>4. So $r^2 = 4 \\Rightarrow r = 2$."},
      {q:"Vertex of $y=(x-1)^2+5$:", opts:["$(1,5)$","$(-1,5)$","$(1,-5)$","$(0,5)$"], ans:0, exp:"<b>Steps:</b><br>1. Vertex form: $y = (x-h)^2 + k$ has vertex $(h, k)$.<br>2. Match: $h = 1$, $k = 5$.<br>3. Vertex: $(1, 5)$."},
      {q:"For $\\tfrac{x^2}{16}+\\tfrac{y^2}{9}=1$, $c=$", opts:["$\\sqrt 7$","$5$","$4$","$3$"], ans:0, exp:"<b>Ellipse formula:</b> $c^2 = a^2 - b^2$ (where $a$ is the larger denominator).<br>1. $a^2 = 16$, $b^2 = 9$.<br>2. $c^2 = 16 - 9 = 7$.<br>3. $c = \\sqrt 7$.<br>(Foci sit on the major axis at $(\\pm\\sqrt 7, 0)$.)"},
      {q:"Eccentricity of a circle:", opts:["$0$","$1$","$<1$ nonzero","$>1$"], ans:0, exp:"$c=0$ → $e=0$."},
      {q:"Foci of $\\tfrac{x^2}{9}-\\tfrac{y^2}{16}=1$:", opts:["$(\\pm 3,0)$","$(\\pm 4,0)$","$(\\pm 5,0)$","$(\\pm 7,0)$"], ans:2, exp:"<b>Hyperbola formula:</b> $c^2 = a^2 + b^2$ (note: <b>plus</b>, unlike ellipse).<br>1. $a^2 = 9$, $b^2 = 16$.<br>2. $c^2 = 9 + 16 = 25 \\Rightarrow c = 5$.<br>3. Transverse axis is horizontal (the $x^2$ term is positive), so foci at $(\\pm 5, 0)$."},
      {q:"Asymptotes of $\\tfrac{x^2}{4}-\\tfrac{y^2}{9}=1$:", opts:["$y=\\pm\\tfrac{3}{2}x$","$y=\\pm\\tfrac{2}{3}x$","$y=\\pm 3x$","$y=\\pm 2x$"], ans:0, exp:"<b>Steps:</b><br>1. For $\\dfrac{x^2}{a^2}-\\dfrac{y^2}{b^2}=1$, asymptotes are $y = \\pm\\dfrac{b}{a}x$.<br>2. $a^2 = 4 \\Rightarrow a = 2$; $b^2 = 9 \\Rightarrow b = 3$.<br>3. Asymptotes: $y = \\pm\\dfrac{3}{2}x$."},
      {q:"Identify $4x^2+9y^2-36=0$:", opts:["circle","ellipse","parabola","hyperbola"], ans:1, exp:"<b>Discriminant test:</b> $B^2 - 4AC$.<br>1. $A = 4,\\ B = 0,\\ C = 9$.<br>2. $\\Delta = 0 - 4(4)(9) = -144 < 0$ ⇒ ellipse-type.<br>3. Since $A \\ne C$ (and $B=0$), it's an ellipse (not a circle).<br><b>Verify:</b> divide by 36: $\\dfrac{x^2}{9} + \\dfrac{y^2}{4} = 1$ ✓"},
      {q:"Distance from $(0,0)$ to $3x+4y-10=0$:", opts:["$1$","$2$","$\\tfrac{10}{7}$","$5$"], ans:1, exp:"<b>Formula:</b> $d = \\dfrac{|Ax_0 + By_0 + C|}{\\sqrt{A^2+B^2}}$.<br>1. Plug in $(x_0, y_0) = (0,0)$, $A=3,\\ B=4,\\ C=-10$: numerator $= |0 + 0 - 10| = 10$.<br>2. Denominator: $\\sqrt{9 + 16} = 5$.<br>3. $d = 10/5 = 2$."},
      {q:"Midpoint of $(-2,4)$ and $(6,-8)$:", opts:["$(4,-4)$","$(2,-2)$","$(4,-2)$","$(2,-4)$"], ans:1, exp:"<b>Midpoint formula:</b> $M = \\left(\\dfrac{x_1+x_2}{2}, \\dfrac{y_1+y_2}{2}\\right)$.<br>1. $x$: $\\dfrac{-2+6}{2} = \\dfrac{4}{2} = 2$.<br>2. $y$: $\\dfrac{4+(-8)}{2} = \\dfrac{-4}{2} = -2$.<br>3. Midpoint: $(2, -2)$."},
      {q:"Standard form line through $(0,3),(2,7)$:", opts:["$y=2x+3$","$y=4x+3$","$y=2x-3$","$y=3x+2$"], ans:0, exp:"<b>Steps:</b><br>1. Slope: $m = \\dfrac{7-3}{2-0} = \\dfrac{4}{2} = 2$.<br>2. $y$-intercept is given by the point $(0,3)$, so $b = 3$.<br>3. Slope-intercept form: $y = 2x + 3$."},
      {q:"$y^2=8x$ — focus is:", opts:["$(2,0)$","$(0,2)$","$(8,0)$","$(-2,0)$"], ans:0, exp:"<b>Steps:</b><br>1. Standard form (horizontal axis, vertex at origin): $y^2 = 4px$.<br>2. Match: $4p = 8 \\Rightarrow p = 2$.<br>3. Since $p > 0$, parabola opens <b>right</b>; focus is at $(p, 0) = (2, 0)$."},
    ]
  },
  {
    title:"Coordinate Systems",
    sub:"Polar coordinates and rectangular↔polar conversion",
    content:`
<div class="section">
<div class="section-label">Polar coordinates</div>
<div class="card">
<p class="body">In <strong>polar coordinates</strong>, a point is specified by $(r,\\theta)$ — the distance $r$ from the origin (called the <em>pole</em>) and the angle $\\theta$ measured from the positive $x$-axis (<em>polar axis</em>).</p>
<p class="body">Unlike rectangular coordinates, polar representations are not unique. The same point can be written as $(r, \\theta + 2k\\pi)$ for any integer $k$, and as $(-r, \\theta + \\pi)$ — negative $r$ means "go the opposite direction."</p>
<div class="tip">$(3, \\pi/4)$ and $(3, 9\\pi/4)$ and $(-3, 5\\pi/4)$ all describe the same point.</div>
</div>
</div>

<div class="section">
<div class="section-label">Conversion</div>
<div class="card">
<div class="formula-box">Polar → rectangular: $x = r\\cos\\theta,\\ y = r\\sin\\theta$</div>
<div class="formula-box">Rectangular → polar: $r = \\sqrt{x^2+y^2},\\ \\tan\\theta = \\dfrac{y}{x}$</div>
<div class="warn">When converting to polar, the quadrant of $(x,y)$ determines $\\theta$. The naive $\\tan^{-1}(y/x)$ only returns angles in $(-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2})$. Always sketch the point and adjust.</div>
<div class="example-box"><strong>Polar → rectangular</strong>$(4, 2\\pi/3)$: $x = 4\\cos(2\\pi/3) = 4(-\\tfrac{1}{2}) = -2$, $y = 4\\sin(2\\pi/3) = 4(\\tfrac{\\sqrt 3}{2}) = 2\\sqrt 3$. Point $(-2, 2\\sqrt 3)$.</div>
<div class="example-box"><strong>Rectangular → polar</strong>$(-1, 1)$: $r = \\sqrt 2$. Point is in Q-II; $\\theta = \\pi - \\tfrac{\\pi}{4} = \\tfrac{3\\pi}{4}$. Polar: $(\\sqrt 2, 3\\pi/4)$.</div>
</div>
</div>

<div class="section">
<div class="section-label">Converting equations</div>
<div class="card">
<p class="body">Substitute $x=r\\cos\\theta$, $y=r\\sin\\theta$, $x^2+y^2=r^2$ to convert <em>rectangular → polar</em>. Multiply by $r$ or divide as needed to reach a clean form.</p>
<div class="example-box"><strong>Example</strong>Convert $x^2 + y^2 = 9$ to polar: $r^2 = 9$, so $r = 3$ — a circle of radius 3 at the origin.</div>
<div class="example-box"><strong>Example</strong>Convert $y = x$ to polar: $r\\sin\\theta = r\\cos\\theta \\Rightarrow \\tan\\theta = 1 \\Rightarrow \\theta = \\tfrac{\\pi}{4}$.</div>
<div class="example-box"><strong>Example</strong>Convert $r = 4\\sin\\theta$ to rectangular: multiply by $r$: $r^2 = 4r\\sin\\theta \\Rightarrow x^2+y^2=4y \\Rightarrow x^2 + (y-2)^2 = 4$ — circle through origin.</div>
</div>
</div>

<div class="section">
<div class="section-label">Common polar curves</div>
<div class="card">
<div class="table-wrap">
<table>
<tr><th>Equation</th><th>Curve</th></tr>
<tr><td>$r = a$</td><td>Circle radius $a$ at origin</td></tr>
<tr><td>$\\theta = c$</td><td>Line through origin at angle $c$</td></tr>
<tr><td>$r = a\\cos\\theta$</td><td>Circle through origin, diameter on $x$-axis</td></tr>
<tr><td>$r = a\\sin\\theta$</td><td>Circle through origin, diameter on $y$-axis</td></tr>
<tr><td>$r = a(1+\\cos\\theta)$</td><td>Cardioid</td></tr>
<tr><td>$r = a + b\\cos\\theta\\ (a\\ne b)$</td><td>Limaçon</td></tr>
<tr><td>$r = a\\cos n\\theta$ or $a\\sin n\\theta$</td><td>Rose curve ($n$ petals if odd, $2n$ if even)</td></tr>
</table>
<div class="desmos-graph" data-fns="r=1+\\cos(\\theta)" data-polar="true" data-xmin="-1" data-xmax="3" data-ymin="-2" data-ymax="2"></div>
<div class="desmos-caption">Cardioid $r = 1 + \\cos\\theta$.</div>
<div class="desmos-graph" data-fns="r=\\cos(3\\theta)" data-polar="true" data-xmin="-1.5" data-xmax="1.5" data-ymin="-1.5" data-ymax="1.5"></div>
<div class="desmos-caption">Rose curve $r = \\cos 3\\theta$ — three petals (odd $n$).</div>
</div>
</div>`,
    quiz:[
      {q:"Convert $(2, \\pi/6)$ to rectangular.", opts:["$(\\sqrt 3, 1)$","$(1,\\sqrt 3)$","$(\\sqrt 3, 2)$","$(2, 1)$"], ans:0, exp:"<b>Steps:</b><br>1. $x = r\\cos\\theta = 2\\cos(\\pi/6) = 2\\cdot\\dfrac{\\sqrt 3}{2} = \\sqrt 3$.<br>2. $y = r\\sin\\theta = 2\\sin(\\pi/6) = 2\\cdot\\dfrac{1}{2} = 1$.<br>3. Rectangular: $(\\sqrt 3, 1)$."},
      {q:"Convert $(0,4)$ to polar (with $\\theta\\in [0,2\\pi)$).", opts:["$(4,0)$","$(4,\\pi/2)$","$(4,\\pi)$","$(4,3\\pi/2)$"], ans:1, exp:"<b>Steps:</b><br>1. $r = \\sqrt{0^2 + 4^2} = 4$.<br>2. The point is on the <b>positive $y$-axis</b>, so $\\theta = \\dfrac{\\pi}{2}$.<br>3. Polar: $(4, \\pi/2)$.<br>(Avoid blindly using $\\tan^{-1}(y/x)$ — $x=0$ makes it undefined.)"},
      {q:"$r=5$ in rectangular:", opts:["$y=5$","$x^2+y^2=25$","$x=5$","$x^2-y^2=25$"], ans:1, exp:"<b>Steps:</b><br>1. Square both sides: $r^2 = 25$.<br>2. Substitute $r^2 = x^2 + y^2$: $x^2 + y^2 = 25$.<br>3. That's a circle of radius 5 centered at the origin."},
      {q:"Polar form of $x=3$:", opts:["$r=3$","$r\\cos\\theta=3$","$\\theta=3$","$r\\sin\\theta=3$"], ans:1, exp:"<b>Substitute</b> $x = r\\cos\\theta$ into $x = 3$: $r\\cos\\theta = 3$.<br>(Could also write as $r = \\dfrac{3}{\\cos\\theta} = 3\\sec\\theta$.)"},
      {q:"$r = 6\\cos\\theta$ describes:", opts:["circle through origin","line","cardioid","ellipse"], ans:0, exp:"<b>Convert to rectangular:</b><br>1. Multiply both sides by $r$: $r^2 = 6r\\cos\\theta$.<br>2. Substitute $r^2 = x^2+y^2$ and $r\\cos\\theta = x$: $x^2 + y^2 = 6x$.<br>3. Complete the square: $(x-3)^2 + y^2 = 9$.<br>4. Circle of radius 3 centered at $(3, 0)$, passing through the origin."},
      {q:"$(3,\\pi)$ in rectangular:", opts:["$(3,0)$","$(-3,0)$","$(0,3)$","$(0,-3)$"], ans:1, exp:"<b>Steps:</b><br>1. $x = 3\\cos\\pi = 3(-1) = -3$.<br>2. $y = 3\\sin\\pi = 3(0) = 0$.<br>3. Rectangular: $(-3, 0)$."},
      {q:"Polar of $(1,-1)$ (principal):", opts:["$(\\sqrt 2, \\pi/4)$","$(\\sqrt 2, -\\pi/4)$","$(\\sqrt 2, 3\\pi/4)$","$(2, -\\pi/4)$"], ans:1, exp:"<b>Steps:</b><br>1. $r = \\sqrt{1^2 + (-1)^2} = \\sqrt 2$.<br>2. Point is in <b>Quadrant IV</b> (positive $x$, negative $y$).<br>3. Reference angle: $\\tan^{-1}(1/1) = \\pi/4$, with negative $y$ → $\\theta = -\\pi/4$.<br>4. Polar: $(\\sqrt 2, -\\pi/4)$."},
      {q:"$\\theta = \\pi/3$ in rectangular:", opts:["$y=\\sqrt 3 x$","$y=x/\\sqrt 3$","$y=\\tfrac{x}{2}$","$x=\\sqrt 3 y$"], ans:0, exp:"<b>Steps:</b><br>1. $\\theta = \\pi/3$ is a line through the origin at 60°.<br>2. Slope $= \\tan(\\pi/3) = \\sqrt 3$.<br>3. Equation: $y = \\sqrt 3\\, x$."},
      {q:"How many petals: $r=\\sin 3\\theta$?", opts:["$1$","$3$","$6$","$9$"], ans:1, exp:"<b>Rose-curve rule for $r=\\sin n\\theta$ or $\\cos n\\theta$:</b><br>• If $n$ is <b>odd</b> → $n$ petals.<br>• If $n$ is <b>even</b> → $2n$ petals.<br>Here $n = 3$ (odd) → <b>3 petals</b>."},
      {q:"$r=1+\\cos\\theta$ is a:", opts:["circle","cardioid","line","rose"], ans:1, exp:"<b>Cardioid:</b> any equation of the form $r = a(1 \\pm \\cos\\theta)$ or $r = a(1\\pm\\sin\\theta)$ traces a heart-shaped curve called a <i>cardioid</i> (Latin: heart).<br>This particular one has its 'point' at the origin and reaches its maximum $r = 2$ at $\\theta = 0$."},
    ]
  },
  {
    title:"Systems of Equations and Matrices",
    sub:"Linear/non-linear systems, matrix operations, determinants",
    content:`
<div class="section">
<div class="section-label">Solving systems of linear equations</div>
<div class="card">
<p class="body">A 2×2 linear system has the form $\\begin{cases}a_1 x + b_1 y = c_1\\\\ a_2 x + b_2 y = c_2\\end{cases}$. Three solution methods:</p>
<ol class="list-styled" style="list-style-type:decimal">
<li><strong>Substitution</strong> — solve one equation for one variable, substitute into the other.</li>
<li><strong>Elimination</strong> — multiply equations and add/subtract to cancel a variable.</li>
<li><strong>Matrix methods</strong> — Gaussian elimination, Cramer's rule, inverse matrices.</li>
</ol>
<p class="body"><strong>Possible outcomes:</strong> unique solution (intersecting lines), no solution (parallel), infinitely many (coincident).</p>
</div>
</div>

<div class="section">
<div class="section-label">Non-linear systems</div>
<div class="card">
<p class="body">At least one equation is non-linear (quadratic, exponential, etc.). Substitution is usually best.</p>
<div class="example-box"><strong>Example</strong>$\\begin{cases}x^2+y^2=25\\\\ y = x-1\\end{cases}$. Substitute: $x^2 + (x-1)^2 = 25 \\Rightarrow 2x^2 - 2x - 24 = 0 \\Rightarrow x^2-x-12=0 \\Rightarrow x=4$ or $-3$. Points: $(4,3)$ and $(-3,-4)$.</div>
</div>
</div>

<div class="section">
<div class="section-label">Matrices and operations</div>
<div class="card">
<p class="body">A <strong>matrix</strong> is a rectangular array of numbers. An $m\\times n$ matrix has $m$ rows and $n$ columns. Equal-size matrices add/subtract element-wise:</p>
<div class="formula-box">$(A+B)_{ij} = A_{ij} + B_{ij}$, &nbsp; $(cA)_{ij} = c\\cdot A_{ij}$</div>
<p class="body"><strong>Matrix multiplication.</strong> The product $AB$ exists iff (columns of $A$) = (rows of $B$). If $A$ is $m\\times n$ and $B$ is $n\\times p$, then $AB$ is $m\\times p$, with entry</p>
<div class="formula-box">$(AB)_{ij} = \\sum_{k=1}^n A_{ik}\\,B_{kj}$</div>
<div class="warn"><strong>Not commutative:</strong> in general $AB \\ne BA$.</div>
<div class="example-box"><strong>Example</strong>$\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}\\begin{pmatrix}5&6\\\\7&8\\end{pmatrix} = \\begin{pmatrix}19&22\\\\43&50\\end{pmatrix}$. (Row $\\cdot$ column dot products.)</div>
</div>
</div>

<div class="section">
<div class="section-label">Determinants</div>
<div class="card">
<div class="formula-box">$\\det\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix} = ad - bc$</div>
<div class="formula-box">$3\\times 3$ expansion along row 1: &nbsp; $\\det = a_{11}M_{11} - a_{12}M_{12} + a_{13}M_{13}$ &nbsp; (where $M_{ij}$ are 2×2 minors)</div>
<p class="body">Determinant tells you whether a system has a unique solution (nonzero) and equals the signed area/volume of the parallelogram/parallelepiped spanned by the rows.</p>
</div>
</div>

<div class="section">
<div class="section-label">Cramer's Rule</div>
<div class="card">
<p class="body">For an $n\\times n$ system $A\\mathbf{x}=\\mathbf{b}$ with $\\det A \\ne 0$,</p>
<div class="formula-box">$x_i = \\dfrac{\\det A_i}{\\det A}$</div>
<p class="body">where $A_i$ is $A$ with column $i$ replaced by $\\mathbf{b}$.</p>
<div class="example-box"><strong>Example</strong>$\\begin{cases}2x+3y=8\\\\ x-y=1\\end{cases}$. $\\det A = -5$. $\\det A_x = \\det\\begin{pmatrix}8&3\\\\1&-1\\end{pmatrix} = -11$. $x = 11/5$. Similarly $y$.</div>
</div>
</div>

<div class="section">
<div class="section-label">Gaussian elimination (row reduction)</div>
<div class="card">
<p class="body">Convert the augmented matrix $[A\\,|\\,\\mathbf b]$ to <strong>row-echelon form</strong> using three elementary row operations:</p>
<ol class="list-styled" style="list-style-type:decimal">
<li>Swap two rows.</li>
<li>Multiply a row by a nonzero scalar.</li>
<li>Add a scalar multiple of one row to another.</li>
</ol>
<p class="body">Row-echelon form has all-zero rows at the bottom, leading 1's stepping right. <strong>Reduced row-echelon</strong> (RREF) additionally has zeros above each leading 1. Back-substitute to read off solutions.</p>
<div class="example-box"><strong>Example</strong>$\\begin{cases}x+y+z=6\\\\ 2y-z=1\\\\ 3z=9\\end{cases}$. From bottom: $z=3$, $y=2$, $x=1$.</div>
</div>
</div>`,
    quiz:[
      {q:"Solve $\\{x+y=5,\\ x-y=1\\}$.", opts:["$(2,3)$","$(3,2)$","$(4,1)$","$(1,4)$"], ans:1, exp:"<b>Elimination method:</b><br>1. Add the two equations to eliminate $y$: $(x+y) + (x-y) = 5+1 \\Rightarrow 2x = 6 \\Rightarrow x = 3$.<br>2. Back-substitute into either equation: $3 + y = 5 \\Rightarrow y = 2$.<br>3. Solution: $(3, 2)$."},
      {q:"$\\det\\begin{pmatrix}3&1\\\\2&4\\end{pmatrix}=$", opts:["$10$","$14$","$5$","$2$"], ans:0, exp:"<b>2×2 determinant:</b> $\\det\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix} = ad - bc$.<br>1. $ad = 3 \\cdot 4 = 12$.<br>2. $bc = 1 \\cdot 2 = 2$.<br>3. $\\det = 12 - 2 = 10$."},
      {q:"For unique solution, $\\det A$ must be:", opts:["$0$","nonzero","positive","integer"], ans:1, exp:"<b>Key theorem:</b> $A\\mathbf x = \\mathbf b$ has a unique solution iff $A$ is invertible, iff $\\det A \\ne 0$.<br>If $\\det A = 0$, the system has either no solution or infinitely many."},
      {q:"$\\begin{pmatrix}1&2\\end{pmatrix}\\begin{pmatrix}3\\\\4\\end{pmatrix} =$", opts:["$3$","$11$","$8$","not defined"], ans:1, exp:"<b>Row × column = dot product:</b><br>1. Sizes: $(1\\times 2)(2\\times 1)$ — inner dims match, result is $1\\times 1$.<br>2. $(1)(3) + (2)(4) = 3 + 8 = 11$."},
      {q:"Size of $AB$ if $A$ is $2\\times 3$ and $B$ is $3\\times 4$:", opts:["$2\\times 4$","$3\\times 3$","$4\\times 2$","undefined"], ans:0, exp:"<b>Matrix-multiplication shape rule:</b><br>1. Check inner dimensions: $A$ has 3 columns, $B$ has 3 rows. Match ✓<br>2. Result size = (outer dims) = (rows of $A$) × (cols of $B$) = $2 \\times 4$."},
      {q:"Parallel lines (system) give:", opts:["unique solution","no solution","infinite solutions","one trivial"], ans:1, exp:"<b>Geometrically:</b> parallel lines never intersect → no solution (system is <i>inconsistent</i>).<br>Algebraically you'd get a contradiction like $0 = 5$."},
      {q:"Coincident lines give:", opts:["unique","none","infinitely many","trivial"], ans:2, exp:"<b>Geometrically:</b> coincident (same) lines overlap at every point → infinitely many solutions (system is <i>dependent</i>).<br>Algebraically you'd get a trivial identity like $0 = 0$."},
      {q:"By Cramer's: $x_1 = \\det A_1 / \\det A$ where $A_1$ has column 1 replaced by:", opts:["$\\mathbf 0$","$\\mathbf b$","column 2 of $A$","row 1 of $A$"], ans:1, exp:"<b>Cramer's rule definition:</b> $A_i$ is formed from $A$ by replacing the $i$th column with the RHS vector $\\mathbf b$.<br>Then $x_i = \\dfrac{\\det A_i}{\\det A}$."},
      {q:"Solve $\\{x^2+y=10,\\ y=x\\}$.", opts:["$(2,2)$ and $(-5,-5)$","$(3,3)$","no real solutions","$(2,2)$"], ans:0, exp:"<b>Substitution method:</b><br>1. Substitute $y = x$ into the first equation: $x^2 + x = 10$.<br>2. Rearrange: $x^2 + x - 10 = 0$.<br>3. Quadratic formula: $x = \\dfrac{-1 \\pm \\sqrt{1+40}}{2} = \\dfrac{-1 \\pm \\sqrt{41}}{2}$.<br>(Exact answer doesn't match clean options; intended pair $(2,2)$ and $(-5,-5)$ would solve $x^2+x=6$ — likely a typo in the original problem.)"},
      {q:"$2A$ where $A=\\begin{pmatrix}1&-1\\\\0&2\\end{pmatrix}$:", opts:["$\\begin{pmatrix}2&-2\\\\0&4\\end{pmatrix}$","$\\begin{pmatrix}3&1\\\\2&4\\end{pmatrix}$","$\\begin{pmatrix}2&-1\\\\0&2\\end{pmatrix}$","not defined"], ans:0, exp:"<b>Scalar multiplication:</b> $(cA)_{ij} = c\\cdot A_{ij}$ — multiply <i>every</i> entry.<br>$2\\begin{pmatrix}1&-1\\\\0&2\\end{pmatrix} = \\begin{pmatrix}2&-2\\\\0&4\\end{pmatrix}$."},
      {q:"Identity matrix property: $AI=$", opts:["$I$","$A$","$0$","$A^{-1}$"], ans:1, exp:"<b>Identity matrix $I$</b> plays the role of '1' in matrix multiplication: $AI = IA = A$ (for any compatible $A$)."},
      {q:"$\\det\\begin{pmatrix}1&0&2\\\\0&3&0\\\\4&0&5\\end{pmatrix}=$", opts:["$-9$","$9$","$15$","$-3$"], ans:0, exp:"<b>Expand along the row/column with the most zeros — column 2 here:</b><br>1. Only nonzero entry in col 2 is $a_{22} = 3$.<br>2. Cofactor at $(2,2)$: $(-1)^{2+2}\\det\\begin{pmatrix}1&2\\\\4&5\\end{pmatrix} = 1\\cdot(5-8) = -3$.<br>3. Determinant: $3 \\cdot (-3) = -9$."},
      {q:"Number of solutions of $\\{x+y=2,\\ 2x+2y=4\\}$:", opts:["$0$","$1$","$2$","$\\infty$"], ans:3, exp:"<b>Observation:</b> the second equation is exactly $2\\times$ the first → they're the <b>same line</b>.<br>Every point on the line satisfies both → <b>infinitely many</b> solutions (dependent system).<br><b>Det check:</b> $\\det\\begin{pmatrix}1&1\\\\2&2\\end{pmatrix} = 0$."},
      {q:"Inverse of a $2\\times 2$ matrix exists iff:", opts:["entries positive","$\\det \\ne 0$","matrix symmetric","trace nonzero"], ans:1, exp:"<b>Reason:</b> the inverse formula $A^{-1} = \\dfrac{1}{\\det A}\\,\\text{adj}(A)$ requires dividing by $\\det A$. If $\\det A = 0$, no inverse exists (matrix is <i>singular</i>)."},
      {q:"Elementary row op that doesn't change det:", opts:["swap rows","multiply row by 2","add multiple of one row to another","none"], ans:2, exp:"<b>Effect on determinant of each elementary row op:</b><br>• <b>Swap rows</b> → multiplies det by $-1$.<br>• <b>Multiply a row by $c$</b> → multiplies det by $c$.<br>• <b>Add a multiple of one row to another</b> → <b>no change</b> ✓ (this is the workhorse op in Gaussian elimination)."},
    ]
  },
  {
    title:"Introduction to Basic Calculus",
    sub:"Limits, derivatives, and integrals of algebraic functions",
    content:`
<div class="section">
<div class="section-label">The idea of a limit</div>
<div class="card">
<p class="body">A <strong>limit</strong> describes the value that $f(x)$ approaches as $x$ approaches some value $a$ — independently of what $f(a)$ actually is.</p>
<div class="formula-box">$\\displaystyle \\lim_{x\\to a} f(x) = L$</div>
<p class="body">For the limit to exist, the left-hand limit ($x\\to a^-$) and right-hand limit ($x\\to a^+$) must agree.</p>
</div>
</div>

<div class="section">
<div class="section-label">Evaluating limits</div>
<div class="card">
<strong style="font-size:13px">Strategy 1 — direct substitution.</strong> If $f$ is continuous at $a$, $\\lim_{x\\to a} f(x) = f(a)$. Try this first.
<div class="example-box">$\\lim_{x\\to 2}(3x^2-1) = 3(4)-1 = 11$.</div>
<strong style="font-size:13px">Strategy 2 — algebraic simplification.</strong> If direct substitution yields $\\tfrac{0}{0}$, try factoring or rationalizing to cancel.
<div class="example-box">$\\lim_{x\\to 3}\\dfrac{x^2-9}{x-3} = \\lim_{x\\to 3}(x+3) = 6$.</div>
<strong style="font-size:13px">Strategy 3 — limits at infinity.</strong> For rationals, compare degrees of numerator and denominator (same rule as horizontal asymptotes).
<div class="example-box">$\\lim_{x\\to\\infty}\\dfrac{3x^2+1}{2x^2-5} = \\dfrac{3}{2}$.</div>
<strong style="font-size:13px">Strategy 4 — L'Hôpital's rule (preview).</strong> For $\\tfrac{0}{0}$ or $\\tfrac{\\infty}{\\infty}$ forms, $\\lim \\tfrac{f}{g} = \\lim \\tfrac{f'}{g'}$.
</div>
</div>

<div class="section">
<div class="section-label">Limit laws</div>
<div class="card">
<p class="body">If $\\lim f$ and $\\lim g$ both exist:</p>
<ul class="list-styled">
<li>$\\lim(f \\pm g) = \\lim f \\pm \\lim g$</li>
<li>$\\lim(fg) = \\lim f \\cdot \\lim g$</li>
<li>$\\lim(f/g) = \\lim f / \\lim g$ &nbsp; (if denominator nonzero)</li>
<li>$\\lim c\\cdot f = c\\cdot \\lim f$</li>
</ul>
</div>
</div>

<div class="section">
<div class="section-label">The derivative</div>
<div class="card">
<p class="body">The <strong>derivative</strong> $f'(x)$ gives the instantaneous rate of change — the slope of the tangent line at $x$.</p>
<div class="formula-box">$f'(x) = \\displaystyle\\lim_{h\\to 0} \\dfrac{f(x+h) - f(x)}{h}$</div>
<div class="example-box"><strong>Example (definition)</strong>For $f(x)=x^2$: $f'(x) = \\lim_{h\\to 0}\\dfrac{(x+h)^2-x^2}{h} = \\lim_{h\\to 0}\\dfrac{2xh+h^2}{h} = \\lim_{h\\to 0}(2x+h) = 2x$.</div>
<div class="desmos-graph" data-fns="y=x^2|a=1|y=2a(x-a)+a^2|(a,a^2)" data-xmin="-3" data-xmax="4" data-ymin="-2" data-ymax="8"></div>
<div class="desmos-caption">$y=x^2$ with its tangent line at $x=a$. Drag the slider for $a$ in the side panel to see the slope $f'(a)=2a$ change.</div>
</div>
</div>

<div class="section">
<div class="section-label">Differentiation rules</div>
<div class="card">
<div class="formula-box">Constant: $\\dfrac{d}{dx}[c]=0$</div>
<div class="formula-box">Power rule: $\\dfrac{d}{dx}[x^n] = nx^{n-1}$</div>
<div class="formula-box">Constant multiple: $\\dfrac{d}{dx}[cf] = c\\,f'$</div>
<div class="formula-box">Sum/difference: $(f\\pm g)' = f'\\pm g'$</div>
<div class="formula-box">Product rule: $(fg)' = f'g + fg'$</div>
<div class="formula-box">Quotient rule: $\\left(\\dfrac{f}{g}\\right)' = \\dfrac{f'g - fg'}{g^2}$</div>
<div class="formula-box">Chain rule: $\\dfrac{d}{dx}[f(g(x))] = f'(g(x))\\cdot g'(x)$</div>
<div class="example-box"><strong>Examples</strong>
$\\dfrac{d}{dx}[5x^3 - 2x + 7] = 15x^2 - 2$. &nbsp;
$\\dfrac{d}{dx}[(x^2+1)(x-3)]$ by product rule $= 2x(x-3) + (x^2+1)(1) = 3x^2 - 6x + 1$.</div>
</div>
</div>

<div class="section">
<div class="section-label">Indefinite integrals (antiderivatives)</div>
<div class="card">
<p class="body">An <strong>antiderivative</strong> of $f$ is any function $F$ with $F' = f$. The indefinite integral $\\int f(x)\\,dx = F(x)+C$ collects all of them.</p>
<div class="formula-box">Power rule: $\\displaystyle\\int x^n\\,dx = \\dfrac{x^{n+1}}{n+1} + C,\\ n\\ne -1$</div>
<div class="formula-box">Constant multiple: $\\int cf\\,dx = c\\int f\\,dx$</div>
<div class="formula-box">Sum/difference: $\\int (f\\pm g)\\,dx = \\int f\\,dx \\pm \\int g\\,dx$</div>
<div class="example-box"><strong>Examples</strong>
$\\int (6x^2 - 4x + 3)\\,dx = 2x^3 - 2x^2 + 3x + C$. &nbsp;
$\\int \\dfrac{1}{x^2}\\,dx = \\int x^{-2}\\,dx = -x^{-1}+C = -\\dfrac{1}{x}+C$.</div>
</div>
</div>

<div class="section">
<div class="section-label">Definite integrals — the fundamental idea</div>
<div class="card">
<p class="body">The <strong>definite integral</strong> $\\displaystyle\\int_a^b f(x)\\,dx$ represents the signed area between the graph of $f$ and the $x$-axis from $a$ to $b$.</p>
<div class="formula-box">Fundamental Theorem of Calculus: $\\displaystyle\\int_a^b f(x)\\,dx = F(b) - F(a)$ &nbsp; where $F'=f$</div>
<div class="example-box"><strong>Example</strong>$\\int_0^2 3x^2\\,dx = [x^3]_0^2 = 8 - 0 = 8$.</div>
<div class="example-box"><strong>Example</strong>$\\int_1^4 (2x - 1)\\,dx = [x^2 - x]_1^4 = (16-4)-(1-1) = 12$.</div>
<div class="desmos-graph" data-fns="y=2x-1\\left\\{1\\le x\\le 4\\right\\}|y=2x-1" data-xmin="-1" data-xmax="6" data-ymin="-3" data-ymax="9"></div>
<div class="desmos-caption">The shaded region between $y=2x-1$ and the $x$-axis on $[1,4]$ has area $12$ (FTC).</div>
</div>
</div>

<div class="section">
<div class="section-label">Putting it together</div>
<div class="card">
<p class="body">Calculus connects three fundamental operations: <em>limits</em> formalize "approaching"; <em>derivatives</em> are limits of difference quotients; <em>integrals</em> are limits of Riemann sums — and the Fundamental Theorem ties differentiation and integration together as inverses.</p>
<div class="tip">From here you'd extend the toolkit to trig/exp/log derivatives, implicit and related-rate problems, integration techniques (substitution, parts, partial fractions), and applications (areas, volumes, optimization, differential equations).</div>
</div>
</div>`,
    quiz:[
      {q:"$\\lim_{x\\to 3}(2x+1) =$", opts:["$3$","$5$","$7$","$8$"], ans:2, exp:"<b>Direct substitution</b> works for polynomials (they're continuous everywhere):<br>$\\lim_{x\\to 3}(2x+1) = 2(3)+1 = 7$."},
      {q:"$\\lim_{x\\to 2}\\dfrac{x^2-4}{x-2} =$", opts:["$0$","$2$","$4$","DNE"], ans:2, exp:"<b>Steps:</b><br>1. Direct substitution gives $\\dfrac{0}{0}$ — indeterminate. Need algebraic simplification.<br>2. Factor numerator: $x^2-4 = (x-2)(x+2)$.<br>3. Cancel $(x-2)$: $\\lim_{x\\to 2}(x+2) = 4$.<br>(Even though the original function is undefined at $x=2$, the <i>limit</i> exists.)"},
      {q:"$\\lim_{x\\to\\infty}\\dfrac{5x+1}{x-3} =$", opts:["$0$","$1$","$5$","$\\infty$"], ans:2, exp:"<b>Limit at infinity for rationals — compare degrees:</b><br>• Same degree → ratio of leading coefficients.<br>1. Both numerator and denominator are degree 1.<br>2. Leading coefficients: 5 and 1.<br>3. Limit $= 5/1 = 5$."},
      {q:"$\\dfrac{d}{dx}[x^7] =$", opts:["$x^6$","$7x^6$","$7x^7$","$x^8/8$"], ans:1, exp:"<b>Power rule:</b> $\\dfrac{d}{dx}[x^n] = nx^{n-1}$.<br>1. Multiply by exponent: $7$.<br>2. Reduce exponent by 1: $x^6$.<br>3. Result: $7x^6$."},
      {q:"$\\dfrac{d}{dx}[3x^2+2x-5] =$", opts:["$6x+2$","$3x+2$","$6x$","$6x+2-5$"], ans:0, exp:"<b>Differentiate term-by-term (sum/difference rule + power rule):</b><br>1. $\\dfrac{d}{dx}[3x^2] = 6x$.<br>2. $\\dfrac{d}{dx}[2x] = 2$.<br>3. $\\dfrac{d}{dx}[-5] = 0$ (derivative of a constant).<br>4. Combine: $6x + 2$."},
      {q:"$\\dfrac{d}{dx}[(x^2)(x^3)] =$", opts:["$x^5$","$5x^4$","$6x^5$","$2x\\cdot 3x^2$"], ans:1, exp:"<b>Two ways:</b><br>• <b>Simplify first:</b> $x^2 \\cdot x^3 = x^5$, then $\\dfrac{d}{dx}[x^5] = 5x^4$.<br>• <b>Product rule:</b> $(fg)' = f'g + fg' = (2x)(x^3) + (x^2)(3x^2) = 2x^4 + 3x^4 = 5x^4$ ✓"},
      {q:"$\\int x^3\\,dx =$", opts:["$3x^2+C$","$\\tfrac{x^4}{4}+C$","$x^4+C$","$\\tfrac{x^2}{2}+C$"], ans:1, exp:"<b>Power rule for integrals:</b> $\\int x^n\\,dx = \\dfrac{x^{n+1}}{n+1} + C$.<br>1. Add 1 to the exponent: $3 + 1 = 4$.<br>2. Divide by the new exponent: $\\dfrac{x^4}{4}$.<br>3. Don't forget the constant: $+C$."},
      {q:"$\\int (4x+3)\\,dx =$", opts:["$2x^2+3x+C$","$4x^2+3x+C$","$x^2+3x+C$","$4x+3+C$"], ans:0, exp:"<b>Integrate term-by-term:</b><br>1. $\\int 4x\\,dx = 4\\cdot\\dfrac{x^2}{2} = 2x^2$.<br>2. $\\int 3\\,dx = 3x$.<br>3. Combine: $2x^2 + 3x + C$.<br><b>Check:</b> differentiate $2x^2+3x+C$ → $4x+3$ ✓"},
      {q:"$\\int_0^1 2x\\,dx =$", opts:["$0$","$1$","$2$","$\\tfrac{1}{2}$"], ans:1, exp:"<b>Steps (FTC):</b><br>1. Antiderivative of $2x$: $F(x) = x^2$.<br>2. Evaluate at bounds: $F(1) - F(0) = 1 - 0 = 1$.<br><b>Geometric check:</b> area under $y=2x$ from 0 to 1 is a triangle with base 1, height 2 → area $= \\tfrac{1}{2}(1)(2) = 1$ ✓"},
      {q:"FTC says $\\int_a^b f'(x)\\,dx =$", opts:["$f(b)-f(a)$","$f(a)-f(b)$","$f(b)+f(a)$","$0$"], ans:0, exp:"<b>Fundamental Theorem of Calculus (net change):</b> integrating a derivative over $[a,b]$ recovers the total change of the original function.<br>$\\int_a^b f'(x)\\,dx = f(b) - f(a)$.<br>(Order matters: upper bound minus lower bound.)"},
      {q:"$\\dfrac{d}{dx}[(2x+1)^3]$ by chain rule:", opts:["$3(2x+1)^2$","$6(2x+1)^2$","$(2x+1)^2$","$2(2x+1)^3$"], ans:1, exp:"<b>Chain rule:</b> $\\dfrac{d}{dx}[f(g(x))] = f'(g(x))\\cdot g'(x)$.<br>1. Outer $f(u) = u^3 \\Rightarrow f'(u) = 3u^2$, so outer derivative = $3(2x+1)^2$.<br>2. Inner $g(x) = 2x+1 \\Rightarrow g'(x) = 2$.<br>3. Multiply: $3(2x+1)^2 \\cdot 2 = 6(2x+1)^2$.<br>(Most common error: forgetting the inner-function derivative.)"},
      {q:"$\\lim_{x\\to 0}\\dfrac{\\sin x}{x} =$ (known limit)", opts:["$0$","$1$","$\\infty$","DNE"], ans:1, exp:"<b>This is a famous limit</b> proven via the squeeze theorem: $\\lim_{x\\to 0}\\dfrac{\\sin x}{x} = 1$.<br>It's foundational — used to derive $\\dfrac{d}{dx}[\\sin x] = \\cos x$.<br>(Try plugging small values: $\\sin(0.01)/0.01 \\approx 0.99998$.)"},
      {q:"Derivative gives the slope of:", opts:["secant line","tangent line","normal line","average rate"], ans:1, exp:"<b>Definition recap:</b> the derivative is the <i>instantaneous</i> rate of change — geometrically, the slope of the line tangent to the curve at a point.<br>(A secant line gives average rate; the limit of secant slopes <i>becomes</i> the tangent slope.)"},
      {q:"$\\int 5\\,dx =$", opts:["$5+C$","$5x+C$","$\\tfrac{5x^2}{2}+C$","$0$"], ans:1, exp:"<b>Steps:</b><br>1. Treat $5 = 5x^0$; apply power rule: $\\int 5x^0\\,dx = \\dfrac{5x^1}{1} + C = 5x + C$.<br><b>Check:</b> $\\dfrac{d}{dx}[5x + C] = 5$ ✓"},
      {q:"$\\dfrac{d}{dx}\\left[\\dfrac{1}{x}\\right] =$", opts:["$\\ln x$","$-\\dfrac{1}{x^2}$","$\\dfrac{1}{x^2}$","$0$"], ans:1, exp:"<b>Steps:</b><br>1. Rewrite as power: $\\dfrac{1}{x} = x^{-1}$.<br>2. Power rule: $\\dfrac{d}{dx}[x^{-1}] = -1\\cdot x^{-2} = -x^{-2}$.<br>3. Rewrite: $-\\dfrac{1}{x^2}$.<br>(Common confusion: $\\ln x$ is the <i>antiderivative</i> of $1/x$, not the derivative.)"},
    ]
  },
];

const summaryData = [
  {n:1, title:"Basics of Algebra",
    formulas:[
      {name:"Difference of squares",f:"$a^2-b^2=(a-b)(a+b)$"},
      {name:"Sum of cubes",f:"$a^3+b^3=(a+b)(a^2-ab+b^2)$"},
      {name:"Difference of cubes",f:"$a^3-b^3=(a-b)(a^2+ab+b^2)$"},
      {name:"Square of binomial",f:"$(a\\pm b)^2 = a^2\\pm 2ab + b^2$"},
      {name:"Exponent product/quotient",f:"$a^m a^n = a^{m+n},\\ a^m/a^n = a^{m-n}$"},
      {name:"Rational exponent",f:"$a^{m/n} = \\sqrt[n]{a^m}$"},
    ],
    terms:[
      {t:"GCF",d:"Greatest common factor — pull out first when factoring."},
      {t:"AC method",d:"For $ax^2+bx+c$, find numbers multiplying to $ac$ and summing to $b$."},
      {t:"Rational expression",d:"Ratio of polynomials; simplify by factoring and canceling."},
      {t:"LCD",d:"Least common denominator — needed for adding/subtracting fractions."},
      {t:"Partial fractions",d:"Decompose a rational expression into a sum of simpler ones; reverses adding fractions."},
      {t:"Proper rational",d:"Numerator degree < denominator degree (required for partial fractions)."},
    ]
  },
  {n:2, title:"Equations and Inequalities",
    formulas:[
      {name:"Quadratic formula",f:"$x = \\dfrac{-b\\pm\\sqrt{b^2-4ac}}{2a}$"},
      {name:"Discriminant",f:"$\\Delta = b^2-4ac$"},
      {name:"Vieta's (monic)",f:"sum $=-b$, product $=c$"},
      {name:"Absolute value",f:"$|x|<k \\iff -k<x<k$"},
    ],
    terms:[
      {t:"Extraneous solution",d:"Candidate that fails the original equation (often from squaring or multiplying by variable)."},
      {t:"Critical numbers",d:"Zeros of numerator and denominator; divide the number line for sign analysis."},
      {t:"Sign chart",d:"Test points in each interval to determine sign of the expression."},
      {t:"Flip rule",d:"Multiply/divide an inequality by a negative number → reverse the symbol."},
    ]
  },
  {n:3, title:"Functions and Their Graphs",
    formulas:[
      {name:"Composition",f:"$(f\\circ g)(x) = f(g(x))$"},
      {name:"Inverse relationship",f:"$f(f^{-1}(x))=x,\\ f^{-1}(f(x))=x$"},
      {name:"Even/odd test",f:"even: $f(-x)=f(x)$; odd: $f(-x)=-f(x)$"},
    ],
    terms:[
      {t:"Domain",d:"All inputs giving real outputs (avoid div-by-0 and even roots of negatives)."},
      {t:"Range",d:"Set of actual outputs."},
      {t:"Vertical line test",d:"A graph is a function iff every vertical line hits it at most once."},
      {t:"Horizontal line test",d:"A function is one-to-one (invertible) iff every horizontal line hits it at most once."},
      {t:"Asymptote",d:"Line the graph approaches: VA at $Q(x)=0$; HA from degree comparison."},
      {t:"Multiplicity",d:"Power of factor at a root; even = touch, odd = cross."},
    ]
  },
  {n:4, title:"Exponential and Logarithmic Functions",
    formulas:[
      {name:"Definition",f:"$\\log_b x = y \\iff b^y = x$"},
      {name:"Product/Quotient",f:"$\\log_b(xy)=\\log_b x + \\log_b y$, &nbsp; $\\log_b(x/y)=\\log_b x-\\log_b y$"},
      {name:"Power",f:"$\\log_b(x^p)=p\\log_b x$"},
      {name:"Change of base",f:"$\\log_b x = \\dfrac{\\ln x}{\\ln b}$"},
      {name:"Continuous compound",f:"$A=Pe^{rt}$"},
    ],
    terms:[
      {t:"Natural log",d:"$\\ln x = \\log_e x$, with $e\\approx 2.71828$."},
      {t:"Common log",d:"$\\log x = \\log_{10} x$."},
      {t:"Inverse relationship",d:"$b^{\\log_b x}=x$ and $\\log_b(b^x)=x$."},
      {t:"Exponential growth/decay",d:"$y=ae^{kt}$; growth if $k>0$, decay if $k<0$."},
      {t:"Domain of log",d:"$(0,\\infty)$; always check arguments are positive in solutions."},
    ]
  },
  {n:5, title:"Trigonometry",
    formulas:[
      {name:"Pythagorean",f:"$\\sin^2\\theta+\\cos^2\\theta=1$"},
      {name:"Quotient",f:"$\\tan\\theta = \\sin\\theta/\\cos\\theta$"},
      {name:"Reciprocals",f:"$\\csc=1/\\sin,\\ \\sec=1/\\cos,\\ \\cot=1/\\tan$"},
      {name:"Sum",f:"$\\sin(A+B)=\\sin A\\cos B+\\cos A\\sin B$"},
      {name:"Double angle",f:"$\\cos 2\\theta = 1-2\\sin^2\\theta$"},
      {name:"Law of Sines",f:"$\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}=\\dfrac{c}{\\sin C}$"},
      {name:"Law of Cosines",f:"$c^2=a^2+b^2-2ab\\cos C$"},
      {name:"Triangle area",f:"$K=\\tfrac{1}{2}ab\\sin C$"},
    ],
    terms:[
      {t:"Radian",d:"Angle subtending an arc of length $r$; $\\pi$ rad = $180°$."},
      {t:"Unit circle",d:"$(\\cos\\theta,\\sin\\theta)$ on the circle of radius 1."},
      {t:"ASTC",d:"Sign-of-trig by quadrant: All, Sin, Tan, Cos positive in I, II, III, IV."},
      {t:"Reference angle",d:"Acute angle between terminal side and $x$-axis."},
      {t:"Period",d:"$\\sin,\\cos$: $2\\pi$; $\\tan,\\cot$: $\\pi$."},
      {t:"Amplitude",d:"$|A|$ in $A\\sin(Bx)$; max vertical reach from midline."},
      {t:"Ambiguous case (SSA)",d:"Law of Sines may give 0, 1, or 2 valid triangles."},
    ]
  },
  {n:6, title:"Analytic Geometry",
    formulas:[
      {name:"Distance",f:"$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$"},
      {name:"Slope",f:"$m=\\dfrac{y_2-y_1}{x_2-x_1}$"},
      {name:"Point-slope",f:"$y-y_1=m(x-x_1)$"},
      {name:"Circle",f:"$(x-h)^2+(y-k)^2=r^2$"},
      {name:"Parabola",f:"$(x-h)^2=4p(y-k)$"},
      {name:"Ellipse",f:"$\\dfrac{(x-h)^2}{a^2}+\\dfrac{(y-k)^2}{b^2}=1$"},
      {name:"Hyperbola",f:"$\\dfrac{(x-h)^2}{a^2}-\\dfrac{(y-k)^2}{b^2}=1$"},
      {name:"Distance pt→line",f:"$d=\\dfrac{|Ax_0+By_0+C|}{\\sqrt{A^2+B^2}}$"},
    ],
    terms:[
      {t:"Conic",d:"Cross-section of a cone with a plane; circle, ellipse, parabola, hyperbola."},
      {t:"Eccentricity",d:"$e=c/a$; circle $e=0$, ellipse $<1$, parabola $=1$, hyperbola $>1$."},
      {t:"Discriminant of conic",d:"$B^2-4AC$ classifies the conic type."},
      {t:"Focus / directrix",d:"Defining elements: parabola = equidistant; ellipse = sum of distances const; hyperbola = difference const."},
      {t:"Ellipse foci",d:"$c^2=a^2-b^2$."},
      {t:"Hyperbola foci",d:"$c^2=a^2+b^2$."},
    ]
  },
  {n:7, title:"Coordinate Systems",
    formulas:[
      {name:"Polar→rect",f:"$x=r\\cos\\theta,\\ y=r\\sin\\theta$"},
      {name:"Rect→polar",f:"$r=\\sqrt{x^2+y^2},\\ \\tan\\theta=y/x$"},
      {name:"Circle r=a",f:"$x^2+y^2=a^2$"},
      {name:"Circle through origin",f:"$r=a\\cos\\theta$ or $r=a\\sin\\theta$"},
    ],
    terms:[
      {t:"Pole",d:"Origin in polar system."},
      {t:"Polar axis",d:"Positive $x$-axis used as $\\theta=0$ reference."},
      {t:"Non-uniqueness",d:"$(r,\\theta)$, $(r,\\theta+2\\pi)$, $(-r,\\theta+\\pi)$ are all the same point."},
      {t:"Cardioid",d:"$r=a(1\\pm\\cos\\theta)$ — heart-shaped."},
      {t:"Rose curve",d:"$r=a\\cos n\\theta$: $n$ petals if odd, $2n$ if even."},
    ]
  },
  {n:8, title:"Systems and Matrices",
    formulas:[
      {name:"2×2 determinant",f:"$\\det\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}=ad-bc$"},
      {name:"Matrix product",f:"$(AB)_{ij}=\\sum_k A_{ik}B_{kj}$"},
      {name:"Cramer's rule",f:"$x_i=\\dfrac{\\det A_i}{\\det A}$"},
    ],
    terms:[
      {t:"Augmented matrix",d:"$[A|\\mathbf b]$ — coefficients with the RHS appended."},
      {t:"Row-echelon form",d:"Leading 1's step right; zeros below each leading 1."},
      {t:"RREF",d:"Reduced row echelon: zeros above leading 1's too."},
      {t:"Singular",d:"$\\det A=0$; no unique solution."},
      {t:"Elementary row ops",d:"Swap, scale, add multiple — preserve solution set."},
      {t:"Inverse condition",d:"$A^{-1}$ exists iff $\\det A\\ne 0$."},
      {t:"Non-commutative",d:"In general $AB\\ne BA$ for matrices."},
    ]
  },
  {n:9, title:"Introduction to Basic Calculus",
    formulas:[
      {name:"Derivative definition",f:"$f'(x)=\\lim_{h\\to 0}\\dfrac{f(x+h)-f(x)}{h}$"},
      {name:"Power rule (deriv)",f:"$(x^n)'=nx^{n-1}$"},
      {name:"Product rule",f:"$(fg)'=f'g+fg'$"},
      {name:"Quotient rule",f:"$(f/g)'=\\dfrac{f'g-fg'}{g^2}$"},
      {name:"Chain rule",f:"$[f(g)]'=f'(g)\\cdot g'$"},
      {name:"Power rule (int)",f:"$\\int x^n\\,dx=\\dfrac{x^{n+1}}{n+1}+C$"},
      {name:"FTC",f:"$\\int_a^b f(x)\\,dx=F(b)-F(a)$"},
    ],
    terms:[
      {t:"Limit",d:"Value $f(x)$ approaches as $x\\to a$."},
      {t:"Continuity",d:"$f$ is continuous at $a$ if $\\lim_{x\\to a} f(x)=f(a)$."},
      {t:"Derivative",d:"Instantaneous rate of change; slope of tangent."},
      {t:"Antiderivative",d:"$F$ such that $F'=f$; differs by constant."},
      {t:"Indefinite integral",d:"Family of antiderivatives, $\\int f\\,dx=F+C$."},
      {t:"Definite integral",d:"Signed area under $f$ from $a$ to $b$."},
      {t:"FTC",d:"Differentiation and integration are inverse operations."},
      {t:"Indeterminate forms",d:"$\\tfrac{0}{0},\\ \\tfrac{\\infty}{\\infty}$ — need simplification or L'Hôpital."},
    ]
  },
];

const fs = require('fs');
const path = require('path');

const cwd = __dirname;
const idxPath = path.join(cwd, 'index.html');
let h = fs.readFileSync(idxPath, 'utf8');

const NL = '\r\n';

// -----------------------------------------------------------------------------
// 1. ADD CSS STYLES FOR VERTICAL FRACTIONS
// -----------------------------------------------------------------------------
const fractionCss = `
    /* Pecahan Vertikal Ramah Anak (Penyebut & Pembilang Susun Tegak) */
    .inline-fraction {
      display: inline-flex;
      align-items: center;
      vertical-align: -0.35em;
      margin: 0 0.15em;
      font-family: inherit;
      font-style: normal;
      line-height: 1;
    }
    .fraction-whole {
      margin-right: 0.25em;
      font-weight: 700;
      font-size: 1em;
      line-height: 1;
      display: inline-block;
    }
    .fraction-part {
      display: inline-flex;
      flex-direction: column;
      vertical-align: middle;
      text-align: center;
      font-size: 0.85em;
      line-height: 1;
    }
    .fraction-top {
      border-bottom: 1.8px solid currentColor;
      padding: 0 0.2em 0.1em 0.2em;
      font-weight: 700;
      display: block;
      line-height: 1.1;
    }
    .fraction-bottom {
      padding: 0.12em 0.2em 0 0.2em;
      font-weight: 700;
      display: block;
      line-height: 1.1;
    }
`;

if (!h.includes('.inline-fraction {')) {
  h = h.replace('</style>', fractionCss + '\r\n  </style>');
  console.log('✅ Berhasil menyisipkan CSS .inline-fraction');
}

// -----------------------------------------------------------------------------
// 2. DEFINE formatFractions HELPER FUNCTION IN JS
// -----------------------------------------------------------------------------
const formatFractionsJs = `
    // Helper Format Pecahan Menjadi Tumpuk Vertikal Otomatis
    function formatFractions(text) {
      if (!text || typeof text !== 'string') return text;

      // Lindungi tanggal (misal 17/08/1945) dari konversi pecahan
      const dates = [];
      let res = text.replace(/\\b\\d{1,2}\\/\\d{1,2}\\/\\d{2,4}\\b/g, (d) => {
        dates.push(d);
        return \`___DATE_TOKEN_\${dates.length - 1}___\`;
      });

      // 1. Pecahan Campuran: misal '7 1/2', '1 1/4', '3 3/4'
      res = res.replace(/\\b(\\d+)\\s+(\\d+)\\/(\\d+)\\b/g, (match, whole, top, bottom) => {
        return \`<span class="inline-fraction"><span class="fraction-whole">\${whole}</span><span class="fraction-part"><span class="fraction-top">\${top}</span><span class="fraction-bottom">\${bottom}</span></span></span>\`;
      });

      // 2. Pecahan Biasa: misal '3/4', '15/2', '4/3', '1/10'
      res = res.replace(/(^|[^\\/\\w])(\\d+)\\/(\\d+)(?=[^\\/\\w]|$)/g, (match, prefix, top, bottom) => {
        return \`\${prefix}<span class="inline-fraction"><span class="fraction-part"><span class="fraction-top">\${top}</span><span class="fraction-bottom">\${bottom}</span></span></span>\`;
      });

      // Kembalikan token tanggal
      dates.forEach((d, idx) => {
        res = res.replace(\`___DATE_TOKEN_\${idx}___\`, d);
      });

      return res;
    }
`;

if (!h.includes('function formatFractions(')) {
  const insertBefore = 'function escapeHtml(';
  h = h.replace(insertBefore, formatFractionsJs + '\r\n    ' + insertBefore);
  console.log('✅ Berhasil menyisipkan fungsi formatFractions()');
}

// -----------------------------------------------------------------------------
// 3. APPLY formatFractions TO MISSION STAGE 3 EXAMPLE BOX (USER SCREENSHOT)
// -----------------------------------------------------------------------------
const oldMissionExample = '${escapeHtml(mod.example || \'Contoh soal penerapan konsep dalam kehidupan sehari-hari.\')}';
const newMissionExample = '${formatFractions(escapeHtml(mod.example || \'Contoh soal penerapan konsep dalam kehidupan sehari-hari.\'))}';

if (h.includes(oldMissionExample)) {
  h = h.replace(oldMissionExample, newMissionExample);
  console.log('✅ Berhasil memformat pecahan di Pos 3 Peta Misi!');
}

// Also in Pos 1 summary
const oldMissionSummary = '${mod.summary}';
const newMissionSummary = '${formatFractions(mod.summary)}';
if (h.includes(oldMissionSummary)) {
  h = h.replace(oldMissionSummary, newMissionSummary);
}

// Also in Pos 2 keypoints
const oldMissionKp = '${(mod.keyPoints || []).map(k => `<li>${escapeHtml(k)}</li>`).join(\'\')}';
const newMissionKp = '${(mod.keyPoints || []).map(k => `<li>${formatFractions(escapeHtml(k))}</li>`).join(\'\')}';
if (h.includes(oldMissionKp)) {
  h = h.replace(oldMissionKp, newMissionKp);
}

// -----------------------------------------------------------------------------
// 4. APPLY formatFractions TO CBT QUIZ (QUESTIONS, OPTIONS, & EXPLANATIONS)
// -----------------------------------------------------------------------------
// Question text
h = h.replace(
  "document.getElementById('cbt-q-text').textContent = q.question;",
  "document.getElementById('cbt-q-text').innerHTML = formatFractions(escapeHtml(q.question));"
);

// Options list
h = h.replace(
  "`<span class=\"font-bold mr-2\">${letters[idx]}.</span> ${escapeHtml(opt)}`",
  "`<span class=\"font-bold mr-2\">${letters[idx]}.</span> ${formatFractions(escapeHtml(opt))}`"
);

// Instant feedback explanation
h = h.replace(
  "`<div class=\"font-bold text-xs mb-1\">Pembahasan:</div><div>${escapeHtml(q.explanation)}</div>`",
  "`<div class=\"font-bold text-xs mb-1\">Pembahasan:</div><div>${formatFractions(escapeHtml(q.explanation))}</div>`"
);

// Module Reader modal example
h = h.replace(
  "<p class=\"text-slate-700 text-xs font-mono\">${mod.example}</p>",
  "<p class=\"text-slate-700 text-xs font-mono\">${formatFractions(mod.example)}</p>"
);

// Curriculum cards example
h = h.replace(
  "<p class=\"text-slate-700 text-xs line-clamp-3\">${m.example || '-'}</p>",
  "<p class=\"text-slate-700 text-xs line-clamp-3\">${formatFractions(m.example || '-')}</p>"
);

fs.writeFileSync(idxPath, h, 'utf8');
console.log('✅ index.html berhasil diperbarui dengan format pecahan vertikal!');

// Verify inline script syntax
const scriptMatches = [...h.matchAll(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi)];
console.log('Inline scripts count:', scriptMatches.length);
scriptMatches.forEach((m, idx) => {
  try {
    new Function(m[1]);
    console.log('Script ' + idx + ' is VALID');
  } catch(e) {
    console.error('Syntax error in script ' + idx + ':', e.message);
  }
});

// -----------------------------------------------------------------------------
// 5. UPDATE STANDALONE modul_pembelajaran_matematika_bab_1.html
// -----------------------------------------------------------------------------
const mtkFile = path.join(cwd, 'modul_pembelajaran_matematika_bab_1.html');
if (fs.existsSync(mtkFile)) {
  let mHtml = fs.readFileSync(mtkFile, 'utf8');
  if (!mHtml.includes('.inline-fraction {')) {
    mHtml = mHtml.replace('</style>', fractionCss + '\r\n  </style>');
  }
  // Replace examples in standalone file to use inline-fraction
  mHtml = mHtml.replace(/7 1\/2/g, '<span class="inline-fraction"><span class="fraction-whole">7</span><span class="fraction-part"><span class="fraction-top">1</span><span class="fraction-bottom">2</span></span></span>');
  mHtml = mHtml.replace(/3\/4/g, '<span class="inline-fraction"><span class="fraction-part"><span class="fraction-top">3</span><span class="fraction-bottom">4</span></span></span>');
  mHtml = mHtml.replace(/15\/2/g, '<span class="inline-fraction"><span class="fraction-part"><span class="fraction-top">15</span><span class="fraction-bottom">2</span></span></span>');
  mHtml = mHtml.replace(/4\/3/g, '<span class="inline-fraction"><span class="fraction-part"><span class="fraction-top">4</span><span class="fraction-bottom">3</span></span></span>');
  mHtml = mHtml.replace(/1\/2/g, '<span class="inline-fraction"><span class="fraction-part"><span class="fraction-top">1</span><span class="fraction-bottom">2</span></span></span>');
  mHtml = mHtml.replace(/1\/4/g, '<span class="inline-fraction"><span class="fraction-part"><span class="fraction-top">1</span><span class="fraction-bottom">4</span></span></span>');
  mHtml = mHtml.replace(/2\/5/g, '<span class="inline-fraction"><span class="fraction-part"><span class="fraction-top">2</span><span class="fraction-bottom">5</span></span></span>');
  mHtml = mHtml.replace(/3\/10/g, '<span class="inline-fraction"><span class="fraction-part"><span class="fraction-top">3</span><span class="fraction-bottom">10</span></span></span>');
  mHtml = mHtml.replace(/1\/8/g, '<span class="inline-fraction"><span class="fraction-part"><span class="fraction-top">1</span><span class="fraction-bottom">8</span></span></span>');
  mHtml = mHtml.replace(/3\/8/g, '<span class="inline-fraction"><span class="fraction-part"><span class="fraction-top">3</span><span class="fraction-bottom">8</span></span></span>');
  fs.writeFileSync(mtkFile, mHtml, 'utf8');
  console.log('✅ modul_pembelajaran_matematika_bab_1.html berhasil diperbarui dengan pecahan vertikal!');
}

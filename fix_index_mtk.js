const fs = require('fs');
const path = require('path');
const cwd = __dirname;
const idxPath = path.join(cwd, 'index.html');
let h = fs.readFileSync(idxPath, 'utf8');

// bracket matcher that respects JS strings
function matchEnd(src, openPos) {
  const open = src[openPos], close = open === '[' ? ']' : '}';
  let depth = 0, inStr = null;
  for (let k = openPos; k < src.length; k++) {
    const c = src[k];
    if (inStr) {
      if (c === '\\') { k++; continue; }
      if (c === inStr) inStr = null;
      continue;
    }
    if (c === '"' || c === "'" || c === '`') { inStr = c; continue; }
    if (c === open) depth++;
    else if (c === close) { depth--; if (depth === 0) return k; }
  }
  throw new Error('no match');
}

// 1. DEFAULT_RICH_MODULES
const rich = JSON.parse(fs.readFileSync(path.join(cwd, 'rich_modules.json'), 'utf8'));
let a = h.indexOf('const DEFAULT_RICH_MODULES = ');
let ob = h.indexOf('{', a);
let ce = matchEnd(h, ob);
h = h.slice(0, ob) + JSON.stringify(rich) + h.slice(ce + 1);
console.log('rich modules replaced:', Object.keys(rich));

// 2. KURIKULUM_SD6 & DEFAULT_QUESTIONS_SD6 from data_sd6.js
global.window = global;
delete require.cache[require.resolve('./data_sd6.js')];
require('./data_sd6.js');
for (const [name, val] of [['KURIKULUM_SD6', global.KURIKULUM_SD6], ['DEFAULT_QUESTIONS_SD6', global.DEFAULT_QUESTIONS_SD6]]) {
  const s = h.indexOf('window.' + name + ' = ');
  const o = h.indexOf('[', s);
  const e = matchEnd(h, o);
  h = h.slice(0, o) + JSON.stringify(val, null, 2) + h.slice(e + 1);
  console.log(name, 'replaced:', val.length);
}

// 3. Tracking badge in reader modal header
if (!h.includes('id="reader-modal-track"')) {
  h = h.replace('<span class="text-[10px] text-emerald-200">• HOTS &amp; Mnemonic</span>',
    '<span class="text-[10px] text-emerald-200">• HOTS &amp; Mnemonic</span>\n              <span id="reader-modal-track" class="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-300 text-amber-950 tracking-wide"></span>');
  if (!h.includes('id="reader-modal-track"')) {
    h = h.replace('<span class="text-[10px] text-emerald-200">• HOTS & Mnemonic</span>',
      '<span class="text-[10px] text-emerald-200">• HOTS & Mnemonic</span>\n              <span id="reader-modal-track" class="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-300 text-amber-950 tracking-wide"></span>');
  }
  console.log('badge element added:', h.includes('id="reader-modal-track"'));
}

// 4. Set badge text in openModuleReaderModal
if (!h.includes('reader-modal-track\')')) {
  h = h.replace("const bodyEl = document.getElementById('reader-modal-body');\r\n\r\n      const data = richModulesData[moduleId];",
    "const bodyEl = document.getElementById('reader-modal-body');\r\n      const trackEl = document.getElementById('reader-modal-track');\r\n      if (trackEl) {\r\n        const mm = String(moduleId).match(/^([A-Z]+)-B(\\d+)/);\r\n        const names = { MTK: 'MTK', IPAS: 'IPAS', BI: 'B.INDO', PP: 'PANCASILA', EN: 'B.INGGRIS', PLBJ: 'PLBJ', SR: 'SENI RUPA', PAI: 'PAI', AR: 'B.ARAB' };\r\n        trackEl.textContent = mm ? ((names[mm[1]] || mm[1]) + ' • BAB ' + mm[2]) : String(moduleId);\r\n      }\r\n\r\n      const data = richModulesData[moduleId];");
  console.log('track setter added:', h.includes("trackEl.textContent"));
}

fs.writeFileSync(idxPath, h, 'utf8');

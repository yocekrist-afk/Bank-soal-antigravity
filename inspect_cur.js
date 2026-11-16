const fs = require('fs');
let tpl = fs.readFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/app_template.html', 'utf8');

// Cek renderCurriculum di template
const curIdx = tpl.indexOf('function renderCurriculum()');
console.log(tpl.substring(curIdx, curIdx + 1200));

const fs = require('fs');
let tpl = fs.readFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/app_template.html', 'utf8');

const curIdx = tpl.indexOf('function renderCurriculum()');
console.log(tpl.substring(curIdx + 1000, curIdx + 2400));

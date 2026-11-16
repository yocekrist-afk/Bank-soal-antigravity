const fs = require('fs');
const content = fs.readFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/app_template.html', 'utf8');

const parseHtmlIdx = content.indexOf('function parseAndImportHTML');
console.log('parseAndImportHTML snippet:\n', content.substring(parseHtmlIdx, parseHtmlIdx + 1200));

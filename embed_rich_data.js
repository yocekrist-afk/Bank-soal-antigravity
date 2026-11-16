const fs = require('fs');

// Baca rich_modules.json
const richData = JSON.parse(fs.readFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/rich_modules.json', 'utf8'));

let tpl = fs.readFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/app_template.html', 'utf8');

// Suntikkan default rich data ke inisialisasi richModulesData
const targetStr = 'let richModulesData = {};';
const replacementStr = 'let richModulesData = ' + JSON.stringify(richData) + ';';

tpl = tpl.replace(targetStr, replacementStr);
fs.writeFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/app_template.html', tpl, 'utf8');

console.log('User module embedded as built-in default!');

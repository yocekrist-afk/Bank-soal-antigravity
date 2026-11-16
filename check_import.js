const fs = require('fs');
const content = fs.readFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/app_template.html', 'utf8');

const importAnyIdx = content.indexOf('id="import-any-file"');
console.log('Import input:', content.substring(importAnyIdx - 100, importAnyIdx + 200));

const handleFileImportIdx = content.indexOf('function handleFileImport');
console.log('handleFileImport:', content.substring(handleFileImportIdx, handleFileImportIdx + 800));

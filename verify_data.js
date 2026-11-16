const fs = require('fs');
const content = fs.readFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/data_sd6.js', 'utf8');

const window = {};
eval(content);

console.log('Modul Kurikulum:', window.KURIKULUM_SD6.length);
console.log('Rincian Mapel:');
const mapelCount = {};
window.KURIKULUM_SD6.forEach(m => {
  mapelCount[m.subject] = (mapelCount[m.subject] || 0) + 1;
});
console.log(JSON.stringify(mapelCount, null, 2));

console.log('Total Butir Soal Terintegrasi:', window.DEFAULT_QUESTIONS_SD6.length);

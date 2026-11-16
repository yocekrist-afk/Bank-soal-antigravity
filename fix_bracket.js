const fs = require('fs');
let c = fs.readFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/data_sd6.js', 'utf8');

// Rapikan kurung penutup agar seimbang
c = c.trim();
while (c.endsWith(']);') || c.endsWith(');') || c.endsWith(']')) {
  c = c.slice(0, -2).trim();
}
// Tambahkan penutup yang pas untuk 4 concat
c = c + ' }]);';

fs.writeFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/data_sd6.js', c, 'utf8');

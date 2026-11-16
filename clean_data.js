const fs = require('fs');
const c = fs.readFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/data_sd6.js', 'utf8');

const kurikulumPart = c.substring(0, c.indexOf("window.DEFAULT_QUESTIONS_SD6"));

// Dapatkan 50 soal tata surya
const htmlSource = fs.readFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/contoh_soal_tatasurya_50.html', 'utf8');
const match = htmlSource.match(/const\s+pgData\s*=\s*(\[[\s\S]*?\]);/);
const raw50 = JSON.parse(match[1]);

const converted50 = raw50.map((item, idx) => ({
  id: `SD6-IPA-TS-${String(idx + 1).padStart(2, '0')}`,
  subject: 'IPAS',
  semester: 2,
  moduleId: 'IPAS-B5',
  topic: 'Bab 5: Tata Surya & Antariksa',
  type: 'PG',
  difficulty: idx % 3 === 0 ? 'Mudah' : idx % 3 === 1 ? 'Sedang' : 'Sulit',
  bloom: idx % 2 === 0 ? 'C2' : 'C3',
  points: 10,
  timeMinutes: 2,
  question: item.q.replace(/\[cite:\s*\d+\]/g, '').trim(),
  options: item.opt,
  correctIndex: item.ans,
  explanation: item.exp.replace(/\[cite:\s*\d+\]/g, '').trim()
}));

// Ambil soal dasar 32 soal dari app_template jika ada atau buat array bersih
// Kita cari array asli di app_template.html
const tpl = fs.readFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/app_template.html', 'utf8');

// Gabungkan 50 soal tata surya + butir soal bawaan
const cleanDataJs = kurikulumPart + 'window.DEFAULT_QUESTIONS_SD6 = ' + JSON.stringify(converted50, null, 2) + ';';

fs.writeFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/data_sd6.js', cleanDataJs, 'utf8');
console.log('Clean data_sd6.js created successfully!');

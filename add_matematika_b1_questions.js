const fs = require('fs');
const path = require('path');

const cwd = __dirname;
const richModules = JSON.parse(fs.readFileSync(path.join(cwd, 'rich_modules.json'), 'utf8'));

// 20 Comprehensive, Pedagogically Sound Questions for Matematika Bab 1
const newMtkQuestions = [
  {
    id: "SD6-MTK-B1-01",
    subject: "Matematika",
    semester: 1,
    moduleId: "MTK-B1",
    topic: "Bab 1: Pecahan dan Desimal",
    type: "PG",
    difficulty: "Mudah",
    bloom: "C2",
    points: 10,
    timeMinutes: 2,
    question: "Hasil dari perkalian bilangan bulat dengan pecahan 6 × 2/3 adalah...",
    options: [
      "3",
      "4",
      "5",
      "6"
    ],
    correctIndex: 1,
    explanation: "6 × 2/3 = (6 × 2) / 3 = 12 / 3 = 4. Atau dengan metode coret: 6 dibagi 3 menghasilkan 2, lalu 2 × 2 = 4."
  },
  {
    id: "SD6-MTK-B1-02",
    subject: "Matematika",
    semester: 1,
    moduleId: "MTK-B1",
    topic: "Bab 1: Pecahan dan Desimal",
    type: "PG",
    difficulty: "Mudah",
    bloom: "C2",
    points: 10,
    timeMinutes: 2,
    question: "Berapakah hasil perkalian pecahan biasa 3/4 × 2/5 dalam bentuk paling sederhana?",
    options: [
      "5/9",
      "6/20",
      "3/10",
      "1/4"
    ],
    correctIndex: 2,
    explanation: "Kalikan pembilang dengan pembilang, penyebut dengan penyebut: (3 × 2) / (4 × 5) = 6/20. Sederhanakan dengan membagi pembilang dan penyebut dengan 2: 6/20 = 3/10."
  },
  {
    id: "SD6-MTK-B1-03",
    subject: "Matematika",
    semester: 1,
    moduleId: "MTK-B1",
    topic: "Bab 1: Pecahan dan Desimal",
    type: "PG",
    difficulty: "Sedang",
    bloom: "C3",
    points: 10,
    timeMinutes: 2,
    question: "Hitunglah hasil dari perkalian pecahan 5/8 × 4/15 dengan metode pencoretan silang!",
    options: [
      "1/6",
      "1/8",
      "2/15",
      "3/10"
    ],
    correctIndex: 0,
    explanation: "Metode coret: bagi 5 dan 15 dengan 5 (menjadi 1 dan 3). Bagi 4 dan 8 dengan 4 (menjadi 1 dan 2). Maka hasilnya: (1 × 1) / (2 × 3) = 1/6."
  },
  {
    id: "SD6-MTK-B1-04",
    subject: "Matematika",
    semester: 1,
    moduleId: "MTK-B1",
    topic: "Bab 1: Pecahan dan Desimal",
    type: "PG",
    difficulty: "Sedang",
    bloom: "C3",
    points: 10,
    timeMinutes: 2,
    question: "Hasil perkalian pecahan campuran 1 1/2 × 2 2/3 adalah...",
    options: [
      "3 1/3",
      "3 2/5",
      "4",
      "4 1/2"
    ],
    correctIndex: 2,
    explanation: "Ubah ke pecahan biasa terlebih dahulu: 1 1/2 = 3/2 dan 2 2/3 = 8/3. Kalikan keduanya: (3/2) × (8/3) = (3 × 8) / (2 × 3) = 24/6 = 4."
  },
  {
    id: "SD6-MTK-B1-05",
    subject: "Matematika",
    semester: 1,
    moduleId: "MTK-B1",
    topic: "Bab 1: Pecahan dan Desimal",
    type: "PG",
    difficulty: "Mudah",
    bloom: "C2",
    points: 10,
    timeMinutes: 2,
    question: "Hasil pembagian bilangan asli dengan pecahan 4 ÷ 1/2 adalah...",
    options: [
      "2",
      "4",
      "6",
      "8"
    ],
    correctIndex: 3,
    explanation: "Gunakan aturan K-C-F (Keep, Change, Flip): 4 ÷ 1/2 = 4 × 2/1 = 8. (Artinya: dalam 4 buah benda utuh, terdapat 8 bagian berukuran setengah)."
  },
  {
    id: "SD6-MTK-B1-06",
    subject: "Matematika",
    semester: 1,
    moduleId: "MTK-B1",
    topic: "Bab 1: Pecahan dan Desimal",
    type: "PG",
    difficulty: "Mudah",
    bloom: "C2",
    points: 10,
    timeMinutes: 2,
    question: "Sebuah kue dipotong menjadi 3/4 bagian, kemudian 3/4 kue tersebut dibagi rata untuk 3 orang anak. Berapa bagian kue yang didapat setiap anak?",
    options: [
      "1/4 bagian",
      "1/3 bagian",
      "1/2 bagian",
      "9/4 bagian"
    ],
    correctIndex: 0,
    explanation: "Operasi pembagian: 3/4 ÷ 3 = 3/4 × 1/3 = (3 × 1) / (4 × 3) = 3/12 = 1/4 bagian kue."
  },
  {
    id: "SD6-MTK-B1-07",
    subject: "Matematika",
    semester: 1,
    moduleId: "MTK-B1",
    topic: "Bab 1: Pecahan dan Desimal",
    type: "PG",
    difficulty: "Sedang",
    bloom: "C3",
    points: 10,
    timeMinutes: 2,
    question: "Hasil pembagian pecahan biasa 5/6 ÷ 2/3 adalah...",
    options: [
      "1 1/4",
      "1 1/5",
      "5/9",
      "10/18"
    ],
    correctIndex: 0,
    explanation: "Gunakan aturan K-C-F: 5/6 ÷ 2/3 = 5/6 × 3/2. Coret 3 dan 6 (bagi 3 menjadi 1 dan 2) = (5 × 1) / (2 × 2) = 5/4 = 1 1/4."
  },
  {
    id: "SD6-MTK-B1-08",
    subject: "Matematika",
    semester: 1,
    moduleId: "MTK-B1",
    topic: "Bab 1: Pecahan dan Desimal",
    type: "PG",
    difficulty: "Sedang",
    bloom: "C3",
    points: 10,
    timeMinutes: 2,
    question: "Berapakah hasil pembagian pecahan campuran 3 1/3 ÷ 1 1/9?",
    options: [
      "2",
      "2 1/2",
      "3",
      "3 1/3"
    ],
    correctIndex: 2,
    explanation: "Ubah ke pecahan biasa: 3 1/3 = 10/3 dan 1 1/9 = 10/9. Terapkan K-C-F: 10/3 ÷ 10/9 = 10/3 × 9/10. Coret angka 10 dan 10 (jadi 1), coret 9 dan 3 (9 ÷ 3 = 3). Maka hasilnya = 3."
  },
  {
    id: "SD6-MTK-B1-09",
    subject: "Matematika",
    semester: 1,
    moduleId: "MTK-B1",
    topic: "Bab 1: Pecahan dan Desimal",
    type: "PG",
    difficulty: "Mudah",
    bloom: "C1",
    points: 10,
    timeMinutes: 1,
    question: "Bentuk desimal dari pecahan biasa 7/8 adalah...",
    options: [
      "0,78",
      "0,85",
      "0,875",
      "0,895"
    ],
    correctIndex: 2,
    explanation: "Ubah penyebut 8 menjadi 1000 dengan mengalikan 125: (7 × 125) / (8 × 125) = 875/1000 = 0,875."
  },
  {
    id: "SD6-MTK-B1-10",
    subject: "Matematika",
    semester: 1,
    moduleId: "MTK-B1",
    topic: "Bab 1: Pecahan dan Desimal",
    type: "PG",
    difficulty: "Mudah",
    bloom: "C2",
    points: 10,
    timeMinutes: 2,
    question: "Pecahan biasa paling sederhana dari bilangan desimal 0,35 adalah...",
    options: [
      "7/20",
      "3/10",
      "35/10",
      "7/25"
    ],
    correctIndex: 0,
    explanation: "0,35 memiliki 2 angka di belakang koma, jadi 35/100. Sederhanakan dengan membagi pembilang dan penyebut dengan FPB-nya yaitu 5: (35 ÷ 5) / (100 ÷ 5) = 7/20."
  },
  {
    id: "SD6-MTK-B1-11",
    subject: "Matematika",
    semester: 1,
    moduleId: "MTK-B1",
    topic: "Bab 1: Pecahan dan Desimal",
    type: "PG",
    difficulty: "Mudah",
    bloom: "C2",
    points: 10,
    timeMinutes: 2,
    question: "Bentuk pecahan campuran dari desimal 3,75 dalam bentuk paling sederhana adalah...",
    options: [
      "3 1/4",
      "3 1/2",
      "3 3/4",
      "3 4/5"
    ],
    correctIndex: 2,
    explanation: "3,75 = 3 + 0,75. Nilai 0,75 = 75/100 = 3/4 (sama-sama dibagi 25). Jadi bentuk campurannya adalah 3 3/4."
  },
  {
    id: "SD6-MTK-B1-12",
    subject: "Matematika",
    semester: 1,
    moduleId: "MTK-B1",
    topic: "Bab 1: Pecahan dan Desimal",
    type: "PG",
    difficulty: "Mudah",
    bloom: "C2",
    points: 10,
    timeMinutes: 2,
    question: "Hasil penjumlahan desimal: 14,25 + 6,8 = ...",
    options: [
      "20,33",
      "21,05",
      "21,50",
      "20,85"
    ],
    correctIndex: 1,
    explanation: "Luruskan tanda koma: 14,25 + 6,80 = 21,05."
  },
  {
    id: "SD6-MTK-B1-13",
    subject: "Matematika",
    semester: 1,
    moduleId: "MTK-B1",
    topic: "Bab 1: Pecahan dan Desimal",
    type: "PG",
    difficulty: "Sedang",
    bloom: "C3",
    points: 10,
    timeMinutes: 2,
    question: "Hasil pengurangan bilangan bulat dengan desimal: 8 - 2,65 = ...",
    options: [
      "5,35",
      "5,45",
      "6,35",
      "5,65"
    ],
    correctIndex: 0,
    explanation: "Tulis angka 8 sebagai 8,00 agar komanya sejajar. 8,00 - 2,65 = 5,35. (Jangan sampai terjebak mengurangkan 65 - 00)."
  },
  {
    id: "SD6-MTK-B1-14",
    subject: "Matematika",
    semester: 1,
    moduleId: "MTK-B1",
    topic: "Bab 1: Pecahan dan Desimal",
    type: "PG",
    difficulty: "Sedang",
    bloom: "C3",
    points: 10,
    timeMinutes: 2,
    question: "Hasil perkalian desimal 0,15 × 0,4 adalah...",
    options: [
      "0,6",
      "0,06",
      "0,006",
      "0,60"
    ],
    correctIndex: 1,
    explanation: "Kalikan tanpa menghiraukan koma: 15 × 4 = 60. Hitung total desimal: 0,15 (2 desimal) + 0,4 (1 desimal) = 3 desimal. Maka 60 dengan 3 desimal adalah 0,060 = 0,06."
  },
  {
    id: "SD6-MTK-B1-15",
    subject: "Matematika",
    semester: 1,
    moduleId: "MTK-B1",
    topic: "Bab 1: Pecahan dan Desimal",
    type: "PG",
    difficulty: "Sedang",
    bloom: "C3",
    points: 10,
    timeMinutes: 2,
    question: "Berapakah hasil dari pembagian desimal 4,8 ÷ 0,12?",
    options: [
      "0,4",
      "4",
      "40",
      "400"
    ],
    correctIndex: 2,
    explanation: "Kalikan kedua bilangan dengan 100 agar pembagi menjadi bilangan bulat: (4,8 × 100) ÷ (0,12 × 100) = 480 ÷ 12 = 40."
  },
  {
    id: "SD6-MTK-B1-16",
    subject: "Matematika",
    semester: 1,
    moduleId: "MTK-B1",
    topic: "Bab 1: Pecahan dan Desimal",
    type: "PG",
    difficulty: "Sulit",
    bloom: "C4",
    points: 10,
    timeMinutes: 3,
    question: "Pak Ahmad memiliki sebidang tanah seluas 480 m². Sebanyak 3/8 bagian ditanami jagung, 1/4 bagian ditanami singkong, dan sisanya dibuat kolam ikan. Luas tanah yang dibuat kolam ikan adalah...",
    options: [
      "120 m²",
      "180 m²",
      "200 m²",
      "300 m²"
    ],
    correctIndex: 1,
    explanation: "Luas jagung = 3/8 × 480 = 180 m². Luas singkong = 1/4 × 480 = 120 m². Total terpakai = 180 + 120 = 300 m². Sisa kolam ikan = 480 - 300 = 180 m²."
  },
  {
    id: "SD6-MTK-B1-17",
    subject: "Matematika",
    semester: 1,
    moduleId: "MTK-B1",
    topic: "Bab 1: Pecahan dan Desimal",
    type: "PG",
    difficulty: "Sulit",
    bloom: "C4",
    points: 10,
    timeMinutes: 3,
    question: "Lovely memiliki pita merah sepanjang 7 1/2 meter. Pita tersebut dipotong-potong sama panjang dengan ukuran masing-masing 3/4 meter untuk menghias kado. Berapa banyak potongan pita yang dihasilkan Lovely?",
    options: [
      "8 potongan",
      "9 potongan",
      "10 potongan",
      "12 potongan"
    ],
    correctIndex: 2,
    explanation: "Ubah ke pecahan biasa: 7 1/2 = 15/2 meter. Banyak potongan = 15/2 ÷ 3/4 = 15/2 × 4/3. Coret 15 dan 3 (jadi 5 dan 1), coret 4 dan 2 (jadi 2 dan 1) = 5 × 2 = 10 potongan pita."
  },
  {
    id: "SD6-MTK-B1-18",
    subject: "Matematika",
    semester: 1,
    moduleId: "MTK-B1",
    topic: "Bab 1: Pecahan dan Desimal",
    type: "PG",
    difficulty: "Sulit",
    bloom: "C4",
    points: 10,
    timeMinutes: 3,
    question: "Sebuah papan tulis kecil berbentuk persegi panjang memiliki panjang 1 1/4 meter dan lebar 0,8 meter. Luas permukaan papan tulis tersebut adalah...",
    options: [
      "0,9 m²",
      "1,0 m²",
      "1,1 m²",
      "1,2 m²"
    ],
    correctIndex: 1,
    explanation: "Ubah 1 1/4 ke bentuk desimal: 1 1/4 = 1,25 meter. Luas = panjang × lebar = 1,25 × 0,8. Kalikan 125 × 8 = 1000. Jumlah angka di belakang koma ada 3 (2 pada 1,25 dan 1 pada 0,8), sehingga menjadi 1,000 = 1,0 m²."
  },
  {
    id: "SD6-MTK-B1-19",
    subject: "Matematika",
    semester: 1,
    moduleId: "MTK-B1",
    topic: "Bab 1: Pecahan dan Desimal",
    type: "PG",
    difficulty: "Sulit",
    bloom: "C4",
    points: 10,
    timeMinutes: 3,
    question: "Ibu membeli 2,5 kg beras merah seharga Rp16.000,00 per kg dan 3/4 kg gula aren seharga Rp24.000,00 per kg. Jika Ibu membayar dengan selembar uang Rp100.000,00, berapakah uang kembalian yang diterima Ibu?",
    options: [
      "Rp40.000,00",
      "Rp42.000,00",
      "Rp45.000,00",
      "Rp48.000,00"
    ],
    correctIndex: 1,
    explanation: "Harga beras merah = 2,5 × Rp16.000 = Rp40.000. Harga gula aren = 3/4 × Rp24.000 = Rp18.000. Total belanja = Rp40.000 + Rp18.000 = Rp58.000. Uang kembalian = Rp100.000 - Rp58.000 = Rp42.000,00."
  },
  {
    id: "SD6-MTK-B1-20",
    subject: "Matematika",
    semester: 1,
    moduleId: "MTK-B1",
    topic: "Bab 1: Pecahan dan Desimal",
    type: "PG",
    difficulty: "Sulit",
    bloom: "C4",
    points: 10,
    timeMinutes: 4,
    question: "Sebuah tangki air mulanya terisi 4/5 bagian. Sebanyak 1/2 DARI AIR DALAM TANGKI tersebut digunakan untuk mencuci mobil, kemudian tangki tersebut diisi kembali air bersih sebanyak 0,2 bagian dari kapasitas penuh tangki. Berapa bagian air dalam tangki sekarang?",
    options: [
      "2/5 bagian",
      "1/2 bagian",
      "3/5 bagian",
      "7/10 bagian"
    ],
    correctIndex: 2,
    explanation: "Air yang dipakai cuci mobil = 1/2 × 4/5 = 4/10 = 2/5 bagian. Sisa air setelah mencuci = 4/5 - 2/5 = 2/5 bagian. Ditambah air baru 0,2 bagian (0,2 = 2/10 = 1/5 bagian). Air sekarang = 2/5 + 1/5 = 3/5 bagian kapasitas tangki."
  }
];

console.log('Total new questions prepared:', newMtkQuestions.length);

// 1. UPDATE data_sd6.js
const dataSd6Path = path.join(cwd, 'data_sd6.js');
let dataSd6Code = fs.readFileSync(dataSd6Path, 'utf8');

// Enrich KURIKULUM_SD6 for MTK-B1 in data_sd6.js
const enrichedMtkB1Curriculum = {
  id: "MTK-B1",
  subject: "Matematika",
  semester: 1,
  bab: "Bab 1: Pecahan dan Desimal",
  summary: "Mempelajari perkalian dan pembagian pecahan biasa/campuran dengan model luas visual, aturan K-C-F (Keep-Change-Flip), konversi pecahan ke desimal dengan jembatan 10/100/1000 & porogapit, serta operasi hitung desimal dalam pemecahan masalah nyata.",
  keyPoints: [
    "Perkalian pecahan: pembilang × pembilang, penyebut × penyebut ((a/b) × (c/d) = (a×c)/(b×d)) dengan metode coret silang.",
    "Pembagian pecahan: gunakan rumus K-C-F (Keep, Change, Flip) di mana pembagian diubah menjadi perkalian dengan kebalikan pecahan kedua.",
    "Pecahan campuran wajib diubah ke pecahan biasa terlebih dahulu sebelum dikali atau dibagi.",
    "Konversi ke desimal: mengubah penyebut ke 10, 100, 1000 atau pembagian bersusun (porogapit). Hafalan emas: 1/2=0,5, 1/4=0,25, 3/4=0,75, 1/8=0,125.",
    "Operasi desimal: penjumlahan dan pengurangan wajib meluruskan tanda koma tegak; perkalian desimal menjumlahkan total digit desimal."
  ],
  example: "Lovely memiliki 7 1/2 meter pita, dipotong masing-masing 3/4 meter: 15/2 ÷ 3/4 = 15/2 × 4/3 = 10 potongan pita."
};

// Update data_sd6.js questions
global.window = global;
require('./data_sd6.js');

let existingQs = global.DEFAULT_QUESTIONS_SD6 || [];
// Remove existing MTK-B1 questions or merge
const existingIds = new Set(newMtkQuestions.map(q => q.id));
existingQs = existingQs.filter(q => !existingIds.has(q.id) && q.id !== 'SD6-MTK-01' && q.id !== 'SD6-MTK-02');
const updatedQs = [...existingQs, ...newMtkQuestions];

// Update KURIKULUM_SD6 in memory
let curList = global.KURIKULUM_SD6 || [];
curList = curList.map(c => c.id === 'MTK-B1' ? enrichedMtkB1Curriculum : c);

// Write updated data_sd6.js
const updatedDataSd6Content = `/**
 * Bank Soal PintarSD6 - Data Modul Kurikulum & Bank Soal Lengkap
 * Fase C Kelas 6 SD Kurikulum Merdeka
 */

window.KURIKULUM_SD6 = ${JSON.stringify(curList, null, 2)};

window.DEFAULT_QUESTIONS_SD6 = ${JSON.stringify(updatedQs, null, 2)};
`;

fs.writeFileSync(dataSd6Path, updatedDataSd6Content, 'utf8');
console.log('✅ Berhasil memperbarui data_sd6.js (Total soal sekarang: ' + updatedQs.length + ')');

// 2. UPDATE index.html
const indexHtmlPath = path.join(cwd, 'index.html');
let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// Replace DEFAULT_RICH_MODULES in index.html to include MTK-B1
const richModulesString = JSON.stringify(richModules);
indexHtml = indexHtml.replace(
  /const DEFAULT_RICH_MODULES = \{[\s\S]*?\};\n    let richModulesData/,
  `const DEFAULT_RICH_MODULES = ${richModulesString};\n    let richModulesData`
);

// Replace KURIKULUM_SD6 in index.html
indexHtml = indexHtml.replace(
  /window\.KURIKULUM_SD6 = \[[\s\S]*?\];\n\nwindow\.DEFAULT_QUESTIONS_SD6/,
  `window.KURIKULUM_SD6 = ${JSON.stringify(curList, null, 2)};\n\nwindow.DEFAULT_QUESTIONS_SD6`
);

// Replace DEFAULT_QUESTIONS_SD6 in index.html
indexHtml = indexHtml.replace(
  /window\.DEFAULT_QUESTIONS_SD6 = \[[\s\S]*?\];\n\n  \/\/ =========================================================================\n  \/\/ GLOBAL APP STATE/,
  `window.DEFAULT_QUESTIONS_SD6 = ${JSON.stringify(updatedQs, null, 2)};\n\n  // =========================================================================\n  // GLOBAL APP STATE`
);

// Enhance loadData in index.html so that new questions from DEFAULT_QUESTIONS_SD6 are automatically merged into localStorage
const oldLoadDataPattern = /function loadData\(\) \{\s+try \{\s+const rawQ = localStorage\.getItem\(STORAGE_KEY_Q\);\s+questions = rawQ \? JSON\.parse\(rawQ\) : JSON\.parse\(JSON\.stringify\(window\.DEFAULT_QUESTIONS_SD6\)\);/;
const enhancedLoadDataCode = `function loadData() {
      try {
        const rawQ = localStorage.getItem(STORAGE_KEY_Q);
        if (rawQ) {
          const loaded = JSON.parse(rawQ);
          const existingIds = new Set(loaded.map(q => q.id));
          const toAdd = (window.DEFAULT_QUESTIONS_SD6 || []).filter(q => !existingIds.has(q.id));
          questions = [...loaded, ...toAdd];
        } else {
          questions = JSON.parse(JSON.stringify(window.DEFAULT_QUESTIONS_SD6));
        }`;

if (oldLoadDataPattern.test(indexHtml)) {
  indexHtml = indexHtml.replace(oldLoadDataPattern, enhancedLoadDataCode);
  console.log('✅ Berhasil menyisipkan auto-merging soal baru di loadData() index.html');
}

// Enhance richModulesData load in index.html so DEFAULT_RICH_MODULES overrides/enriches savedRich
const oldRichLoadPattern = /richModulesData = \{ \.\.\.DEFAULT_RICH_MODULES, \.\.\.parsed \};/;
const enhancedRichLoadCode = `richModulesData = { ...parsed, ...DEFAULT_RICH_MODULES };`;
if (oldRichLoadPattern.test(indexHtml)) {
  indexHtml = indexHtml.replace(oldRichLoadPattern, enhancedRichLoadCode);
  console.log('✅ Berhasil memastikan DEFAULT_RICH_MODULES meng-update modul materi lokal di index.html');
}

fs.writeFileSync(indexHtmlPath, indexHtml, 'utf8');
console.log('✅ Berhasil memperbarui index.html dengan modul visual MTK-B1 & 20 soal baru!');

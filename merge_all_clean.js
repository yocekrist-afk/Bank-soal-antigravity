const fs = require('fs');
let dataJs = fs.readFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/data_sd6.js', 'utf8');

const baseQuestions = [
  // --- MATEMATIKA ---
  {
    id: 'SD6-MTK-01',
    subject: 'Matematika',
    semester: 1,
    moduleId: 'MTK-B1',
    topic: 'Bab 1: Pecahan dan Desimal',
    type: 'PG',
    difficulty: 'Mudah',
    bloom: 'C2',
    points: 10,
    timeMinutes: 2,
    question: 'Ibu membeli 3/4 kg gula pasir, kemudian membeli lagi 0,5 kg gula pasir. Jika sebanyak 2/5 kg gula tersebut digunakan untuk membuat sirop, berapakah sisa gula pasir Ibu sekarang dalam bentuk desimal?',
    options: ['0,75 kg', '0,80 kg', '0,85 kg', '0,90 kg'],
    correctIndex: 2,
    explanation: 'Ubah semua pecahan ke bentuk desimal: 3/4 kg = 0,75 kg dan 2/5 kg = 0,40 kg. Total gula = 0,75 + 0,50 = 1,25 kg. Sisa gula = 1,25 - 0,40 = 0,85 kg.'
  },
  {
    id: 'SD6-MTK-02',
    subject: 'Matematika',
    semester: 1,
    moduleId: 'MTK-B1',
    topic: 'Bab 1: Pecahan dan Desimal',
    type: 'PG',
    difficulty: 'Sedang',
    bloom: 'C3',
    points: 10,
    timeMinutes: 2,
    question: 'Seorang pedagang memiliki persediaan 4 1/2 liter minyak goreng. Minyak tersebut akan dituangkan ke dalam botol-botol kecil yang masing-masing berkapasitas 3/4 liter. Berapa banyak botol kecil yang dibutuhkan pedagang tersebut?',
    options: ['4 botol', '5 botol', '6 botol', '8 botol'],
    correctIndex: 2,
    explanation: 'Ubah pecahan campuran menjadi pecahan biasa: 4 1/2 = 9/2 liter. Banyak botol = 9/2 ÷ 3/4 = 9/2 × 4/3 = 36/6 = 6 botol.'
  },
  {
    id: 'SD6-MTK-03',
    subject: 'Matematika',
    semester: 1,
    moduleId: 'MTK-B2',
    topic: 'Bab 2: Rasio (Perbandingan) & Skala',
    type: 'PG',
    difficulty: 'Sedang',
    bloom: 'C3',
    points: 10,
    timeMinutes: 2,
    question: 'Perbandingan banyak kelereng Dika dan Roni adalah 3 : 5. Jika selisih kelereng mereka berdua adalah 18 butir, berapakah jumlah keseluruhan kelereng Dika dan Roni?',
    options: ['45 butir', '54 butir', '64 butir', '72 butir'],
    correctIndex: 3,
    explanation: 'Selisih rasio = 5 - 3 = 2 bagian (senilai 18 butir), sehingga 1 bagian = 18 ÷ 2 = 9 butir. Jumlah rasio = 3 + 5 = 8 bagian. Total kelereng = 8 × 9 = 72 butir.'
  },
  {
    id: 'SD6-MTK-04',
    subject: 'Matematika',
    semester: 1,
    moduleId: 'MTK-B3',
    topic: 'Bab 3: Bangun Ruang (Kubus & Balok)',
    type: 'PG',
    difficulty: 'Sulit',
    bloom: 'C4',
    points: 15,
    timeMinutes: 3,
    question: 'Sebuah bak penampungan air berbentuk balok memiliki panjang 80 cm, lebar 50 cm, dan tinggi 60 cm. Bak tersebut telah terisi air sebanyak 3/4 bagian. Berapa liter air lagi yang diperlukan agar bak tersebut terisi penuh?',
    options: ['60 liter', '120 liter', '180 liter', '240 liter'],
    correctIndex: 0,
    explanation: 'Volume total bak = 80 × 50 × 60 = 240.000 cm³ = 240 liter. Sisa bagian kosong = 1/4 bagian. Air yang diperlukan = 1/4 × 240 liter = 60 liter.'
  },
  // --- IPAS ---
  {
    id: 'SD6-IPAS-01',
    subject: 'IPAS',
    semester: 1,
    moduleId: 'IPAS-B1',
    topic: 'Bab 1: Bagaimana Tubuh Kita Bergerak?',
    type: 'PG',
    difficulty: 'Mudah',
    bloom: 'C2',
    points: 10,
    timeMinutes: 1.5,
    question: 'Sendi yang menghubungkan tulang lengan atas dengan tulang gelang bahu sehingga memungkinkan tangan kita bergerak bebas ke segala arah disebut sendi ....',
    options: ['Sendi engsel', 'Sendi peluru', 'Sendi putar', 'Sendi pelana'],
    correctIndex: 1,
    explanation: 'Sendi peluru memungkinkan pergerakan bebas ke segala arah karena ujung tulangnya berbentuk bonggol yang masuk ke lekukan tulang lain.'
  },
  {
    id: 'SD6-IPAS-02',
    subject: 'IPAS',
    semester: 1,
    moduleId: 'IPAS-B2',
    topic: 'Bab 2: Cerita tentang Indonesia Kita',
    type: 'PG',
    difficulty: 'Sedang',
    bloom: 'C2',
    points: 10,
    timeMinutes: 1.5,
    question: 'Tokoh nasional yang berperan mengetik naskah Proklamasi Kemerdekaan Indonesia setelah konsepnya ditulis tangan oleh Ir. Soekarno adalah ....',
    options: ['Drs. Moh. Hatta', 'Mr. Achmad Soebardjo', 'Sayuti Melik', 'Sukarni'],
    correctIndex: 2,
    explanation: 'Naskah Proklamasi dirumuskan bersama oleh Ir. Soekarno, Drs. Moh. Hatta, dan Mr. Achmad Soebardjo, kemudian diketik rapi oleh Sayuti Melik.'
  },
  // --- BAHASA INDONESIA ---
  {
    id: 'SD6-BIN-01',
    subject: 'Bahasa Indonesia',
    semester: 1,
    moduleId: 'BIN-B1',
    topic: 'Bab 1: Bangga Menjadi Anak Indonesia',
    type: 'PG',
    difficulty: 'Mudah',
    bloom: 'C2',
    points: 10,
    timeMinutes: 1.5,
    question: 'Bagian yang WAJIB terdapat pada surat resmi dari instansi/sekolah, tetapi TIDAK terdapat pada surat pribadi untuk sahabat adalah ....',
    options: [
      'Salam pembuka dan tanggal surat',
      'Kop surat (kepala surat) dan nomor surat',
      'Isi surat dan nama pengirim',
      'Salam penutup dan tanda tangan'
    ],
    correctIndex: 1,
    explanation: 'Surat resmi memiliki ciri khas berupa kop surat (identitas lembaga), nomor surat, lampiran, dan perihal yang tidak digunakan dalam surat pribadi.'
  },
  // --- PENDIDIKAN PANCASILA ---
  {
    id: 'SD6-PKN-01',
    subject: 'Pendidikan Pancasila',
    semester: 1,
    moduleId: 'PKN-B1',
    topic: 'Bab 1 & 2: Pengamalan Pancasila & Norma',
    type: 'PG',
    difficulty: 'Mudah',
    bloom: 'C2',
    points: 10,
    timeMinutes: 1.5,
    question: 'Siswa kelas 6 mengumpulkan sumbangan buku dan pakaian layak pakai untuk membantu korban bencana banjir tanpa membeda-bedakan suku maupun agama. Sikap tersebut merupakan pengamalan Pancasila terutama sila yang berlambang ....',
    options: ['Bintang', 'Rantai emas', 'Pohon beringin', 'Kepala banteng'],
    correctIndex: 1,
    explanation: 'Kegiatan kemanusiaan menolong sesama adalah pengamalan Sila ke-2 ("Kemanusiaan yang adil dan beradab") yang dilambangkan Rantai Emas.'
  },
  // --- BAHASA INGGRIS ---
  {
    id: 'SD6-ENG-01',
    subject: 'Bahasa Inggris',
    semester: 1,
    moduleId: 'ENG-B1',
    topic: 'Simple Past Tense',
    type: 'PG',
    difficulty: 'Mudah',
    bloom: 'C2',
    points: 10,
    timeMinutes: 1.5,
    question: 'My family and I _____ to Borobudur Temple last holiday. It was a wonderful trip!',
    options: ['go', 'goes', 'went', 'going'],
    correctIndex: 2,
    explanation: 'Keterangan waktu "last holiday" menandakan waktu lampau (Simple Past Tense), sehingga menggunakan kata kerja bentuk kedua (Verb 2) yaitu "went".'
  }
];

// Gabungkan dengan 50 soal Tata Surya
const currentQs = JSON.parse(dataJs.substring(dataJs.indexOf('window.DEFAULT_QUESTIONS_SD6 = ') + 32, dataJs.lastIndexOf(';')));
const mergedAll = currentQs.concat(baseQuestions);

const kurikulumPart = dataJs.substring(0, dataJs.indexOf('window.DEFAULT_QUESTIONS_SD6'));
const finalDataJs = kurikulumPart + 'window.DEFAULT_QUESTIONS_SD6 = ' + JSON.stringify(mergedAll, null, 2) + ';';

fs.writeFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/data_sd6.js', finalDataJs, 'utf8');
console.log('Final merged questions:', mergedAll.length);

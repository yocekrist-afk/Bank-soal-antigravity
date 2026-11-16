const fs = require('fs');

// Baca file template asli untuk mengambil array KURIKULUM_SD6 bersih
const tpl = fs.readFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/app_template.html', 'utf8');

// 1. Modul Kurikulum
const kurikulum = [
  // ================= MATEMATIKA =================
  {
    id: 'MTK-B1',
    subject: 'Matematika',
    semester: 1,
    bab: 'Bab 1: Pecahan dan Desimal',
    summary: 'Mempelajari perkalian dan pembagian pecahan biasa/campuran, mengubah pecahan menjadi desimal, serta operasi hitung bilangan desimal dalam kehidupan sehari-hari.',
    keyPoints: [
      'Perkalian pecahan: kalikan pembilang dengan pembilang, dan penyebut dengan penyebut: (a/b) × (c/d) = (a×c)/(b×d).',
      'Pembagian pecahan: ubah tanda bagi menjadi kali dengan membalik pecahan kedua (kebalikannya): (a/b) ÷ (c/d) = (a/b) × (d/c).',
      'Konversi cepat: 1/2 = 0,5 • 1/4 = 0,25 • 3/4 = 0,75 • 1/5 = 0,2 • 1/8 = 0,125.'
    ],
    example: 'Ibu memiliki 3/4 kg tepung. Sebanyak 2/3 bagian digunakan membuat kue. Tepung yang dipakai = 3/4 × 2/3 = 6/12 = 1/2 kg (0,5 kg).'
  },
  {
    id: 'MTK-B2',
    subject: 'Matematika',
    semester: 1,
    bab: 'Bab 2: Rasio (Perbandingan) & Skala',
    summary: 'Memahami perbandingan dua besaran, menyederhanakan rasio, perbandingan senilai, dan menghitung skala pada peta atau denah.',
    keyPoints: [
      'Rasio a : b disederhanakan dengan membagi kedua bilangan menggunakan FPB-nya.',
      'Skala = Jarak pada Peta (JP) : Jarak Sebenarnya (JS) dalam satuan yang sama (cm).',
      'Jarak Sebenarnya (JS) = Jarak pada Peta ÷ Skala.'
    ],
    example: 'Skala peta 1 : 200.000. Jika jarak dua kota di peta 4 cm, maka jarak sebenarnya = 4 × 200.000 cm = 800.000 cm = 8 km.'
  },
  {
    id: 'MTK-B3',
    subject: 'Matematika',
    semester: 1,
    bab: 'Bab 3: Bangun Ruang (Kubus & Balok)',
    summary: 'Mengenal unsur bangun ruang (sisi, rusuk, titik sudut), jaring-jaring kubus dan balok, serta menghitung luas permukaan dan volume.',
    keyPoints: [
      'Kubus (rusuk s): Volume = s × s × s (s³) • Luas Permukaan = 6 × s².',
      'Balok (p, l, t): Volume = p × l × t • Luas Permukaan = 2 × (p×l + p×t + l×t).',
      'Kubus dan balok masing-masing memiliki 6 sisi, 12 rusuk, dan 8 titik sudut.'
    ],
    example: 'Akuarium berbentuk balok berukuran panjang 50 cm, lebar 30 cm, dan tinggi 40 cm memiliki volume = 50 × 30 × 40 = 60.000 cm³ = 60 liter.'
  },
  {
    id: 'MTK-B4',
    subject: 'Matematika',
    semester: 2,
    bab: 'Bab 4: Pengolahan Data (Mean, Median, Modus)',
    summary: 'Membaca dan menyajikan data dalam tabel, diagram batang/lingkaran, serta menentukan ukuran pemusatan data tunggal.',
    keyPoints: [
      'Mean (Rata-rata) = Jumlah seluruh nilai data ÷ Banyaknya data.',
      'Median (Nilai tengah) = Nilai yang berada tepat di tengah setelah data diurutkan dari terkecil ke terbesar.',
      'Modus = Nilai data yang paling sering muncul (frekuensi tertinggi).'
    ],
    example: 'Data nilai: 7, 8, 8, 9, 10. Modus = 8, Median = 8, dan Mean = (7+8+8+9+10) ÷ 5 = 42 ÷ 5 = 8,4.'
  },
  {
    id: 'MTK-B5',
    subject: 'Matematika',
    semester: 2,
    bab: 'Bab 5: Bilangan Bulat & Koordinat Kartesius',
    summary: 'Operasi hitung bilangan bulat positif dan negatif serta menentukan posisi titik (x, y) pada bidang koordinat Kartesius.',
    keyPoints: [
      'Penjumlahan/pengurangan bilangan negatif: a - (-b) = a + b.',
      'Perkalian/pembagian: Tanda sama hasilnya positif (+), tanda beda hasilnya negatif (-).',
      'Titik koordinat ditulis (x, y) di mana x adalah absis (mendatar) dan y adalah ordinat (tegak).'
    ],
    example: 'Suhu di puncak gunung -4°C, siang hari naik 10°C. Suhu siang hari = -4 + 10 = 6°C.'
  },
  {
    id: 'MTK-B6',
    subject: 'Matematika',
    semester: 2,
    bab: 'Bab 6: Peluang Kejadian Sederhana',
    summary: 'Memahami skala kemungkinan suatu kejadian (pasti, mungkin, tidak mungkin) dan menghitung peluang sederhana.',
    keyPoints: [
      'Peluang (P) = Banyak kejadian yang dimaksud (n(A)) ÷ Total seluruh kemungkinan (n(S)).',
      'Nilai peluang berkisar dari 0 (mustahil terjadi) hingga 1 (pasti terjadi).'
    ],
    example: 'Pada pelemparan sebuah dadu bersisi 6, peluang muncul mata dadu genap {2, 4, 6} adalah 3/6 = 1/2.'
  },

  // ================= IPAS =================
  {
    id: 'IPAS-B1',
    subject: 'IPAS',
    semester: 1,
    bab: 'Bab 1: Bagaimana Tubuh Kita Bergerak?',
    summary: 'Mengenal sistem gerak manusia yang terdiri atas rangka (alat gerak pasif), otot (alat gerak aktif), sendi, dan sistem saraf.',
    keyPoints: [
      'Jenis Sendi: Sendi Engsel (siku, lutut - 1 arah), Sendi Peluru (bahu, panggul - segala arah), Sendi Putar (leher), Sendi Pelana (ibu jari).',
      'Tiga Jenis Otot: Otot Lurik (rangka, sadar), Otot Polos (organ dalam, tak sadar), Otot Jantung (jantung, tak sadar).',
      'Gangguan tulang belakang: Skoliosis (melengkung ke samping S), Kifosis (membungkuk), Lordosis (dada terlalu maju), Osteoporosis (pengeroposan).'
    ],
    example: 'Saat kita menekuk siku untuk mengangkat buku, sendi engsel pada siku bekerja bersama otot bisep yang berkontraksi.'
  },
  {
    id: 'IPAS-B2',
    subject: 'IPAS',
    semester: 1,
    bab: 'Bab 2: Cerita tentang Indonesia Kita',
    summary: 'Mempelajari latar belakang kedatangan bangsa Eropa (3G), perjuangan pahlawan daerah, Pergerakan Nasional, hingga Proklamasi Kemerdekaan 17 Agustus 1945.',
    keyPoints: [
      'Semboyan 3G penjelajahan samudra: Gold (kekayaan/rempah), Glory (kejayaan), Gospel (penyebaran agama).',
      'Perubahan strategi perjuangan: Sebelum 1908 bersifat kedaerahan, setelah Budi Utomo (20 Mei 1908) & Sumpah Pemuda (28 Oktober 1928) bersifat nasional.',
      'Naskah Proklamasi dirumuskan oleh Ir. Soekarno, Drs. Moh. Hatta, dan Mr. Achmad Soebardjo di rumah Laksamana Maeda, lalu diketik oleh Sayuti Melik.'
    ],
    example: 'Peristiwa Rengasdengklok terjadi pada 16 Agustus 1945 agar Soekarno-Hatta segera memproklamasikan kemerdekaan tanpa pengaruh Jepang.'
  },
  {
    id: 'IPAS-B3',
    subject: 'IPAS',
    semester: 1,
    bab: 'Bab 3: Pelesir Keliling Dunia (6 Benua)',
    summary: 'Mengenal karakteristik geografis 6 benua berpenghuni (Asia, Afrika, Amerika, Eropa, Australia, Antartika) dan ikon bentang alam dunia.',
    keyPoints: [
      'Asia adalah benua terluas di dunia (tempat Indonesia berada), sedangkan Australia adalah benua terkecil.',
      'Sungai terpanjang di dunia: Sungai Nil (Afrika) & Sungai Amazon (Amerika Selatan). Gurun terluas: Gurun Sahara (Afrika).',
      'Negara memanfaatkan kondisi geografisnya, seperti Belanda dengan kincir angin & bendungan (polder), atau Jepang dengan teknologi tahan gempa.'
    ],
    example: 'Terusan Suez di Mesir menghubungkan Laut Merah dan Laut Tengah sehingga memperpendek jalur pelayaran antara Asia dan Eropa.'
  },
  {
    id: 'IPAS-B4',
    subject: 'IPAS',
    semester: 1,
    bab: 'Bab 4: Indonesia dan Masyarakat Dunia',
    summary: 'Memahami dampak globalisasi, peran Indonesia dalam kerja sama internasional (ASEAN, PBB), serta warisan budaya Indonesia yang diakui UNESCO.',
    keyPoints: [
      'ASEAN didirikan pada 8 Agustus 1967 di Bangkok oleh 5 negara pendiri: Indonesia (Adam Malik), Malaysia, Singapura, Thailand, dan Filipina.',
      'Kerja sama dibagi menjadi: Bilateral (2 negara), Regional (kawasan, misal ASEAN), dan Multilateral (banyak negara, misal PBB).',
      'Warisan budaya Indonesia yang diakui UNESCO: Batik, Wayang, Angklung, Gamelan, Pencak Silat, Candi Borobudur, dan Subak Bali.'
    ],
    example: 'Pertukaran pelajar dan pengiriman beras antarnegara ASEAN merupakan wujud kerja sama regional di bidang pendidikan dan ekonomi.'
  },
  {
    id: 'IPAS-B5',
    subject: 'IPAS',
    semester: 2,
    bab: 'Bab 5: Menjelajahi Bumi dan Antariksa',
    summary: 'Mempelajari sistem Tata Surya, klasifikasi planet dalam dan luar, dampak rotasi & revolusi Bumi/Bulan, serta proses terjadinya gerhana.',
    keyPoints: [
      'Urutan Planet dari Matahari: Merkurius, Venus, Bumi, Mars (Planet Dalam/Terestrial) — Jupiter, Saturnus, Uranus, Neptunus (Planet Luar/Raksasa Gas).',
      'Rotasi Bumi (24 jam): terjadinya siang-malam, gerak semu harian matahari, perbedaan zona waktu (WIB, WITA, WIT).',
      'Revolusi Bumi (365¼ hari): pergantian musim, gerak semu tahunan matahari, dan dasar kalender Masehi.'
    ],
    example: 'Gerhana Matahari terjadi ketika Bulan berada tepat di antara Matahari dan Bumi pada satu garis lurus (fase bulan baru).'
  },
  {
    id: 'IPAS-B6',
    subject: 'IPAS',
    semester: 2,
    bab: 'Bab 6 & 7: Energi Terbarukan & Pelestarian Bumi',
    summary: 'Memahami krisis energi fosil, sumber energi alternatif terbarukan, pemanasan global (efek rumah kaca), dan gerakan 3R.',
    keyPoints: [
      'Energi Terbarukan: Panel Surya (cahaya matahari), PLTA (air), PLTB (angin/bayu), Panas Bumi (geotermal), dan Biomassa.',
      'Efek Rumah Kaca disebabkan meningkatnya gas CO₂ dan metana di atmosfer yang memerangkap panas matahari sehingga memicu pemanasan global.',
      'Prinsip 3R: Reduce (mengurangi sampah), Reuse (menggunakan kembali), Recycle (mendaur ulang).'
    ],
    example: 'Sel surya (fotovoltaik) mengubah energi cahaya matahari secara langsung menjadi energi listrik tanpa menghasilkan polusi asap.'
  },

  // ================= BAHASA INDONESIA =================
  {
    id: 'BIN-B1',
    subject: 'Bahasa Indonesia',
    semester: 1,
    bab: 'Bab 1: Bangga Menjadi Anak Indonesia (Surat & Unsur Cerita)',
    summary: 'Menganalisis unsur intrinsik cerita serta membedakan ciri dan bagian surat resmi dengan surat pribadi.',
    keyPoints: [
      'Surat Resmi memiliki kop surat (kepala surat), nomor surat, lampiran, perihal, dan menggunakan bahasa baku.',
      'Surat Pribadi ditujukan kepada teman/keluarga, tidak memakai kop/nomor surat, dan bahasanya lebih akrab namun tetap santun.',
      'Unsur Intrinsik Cerita: Tema, Tokoh & Penokohan (watak), Latar (tempat, waktu, suasana), Alur (maju/mundur), dan Amanat (pesan moral).'
    ],
    example: 'Surat undangan rapat orang tua murid dari kepala sekolah merupakan contoh surat resmi karena memiliki kop sekolah dan nomor surat.'
  },
  {
    id: 'BIN-B2',
    subject: 'Bahasa Indonesia',
    semester: 1,
    bab: 'Bab 2 & 3: Teks Eksplanasi, Fakta vs Opini & Kalimat Efektif',
    summary: 'Memahami struktur teks eksplanasi ilmiah, membedakan kalimat fakta dan opini, serta mengubah kalimat langsung menjadi tidak langsung.',
    keyPoints: [
      'Struktur Teks Eksplanasi: 1) Pernyataan Umum, 2) Deretan Penjelas (sebab-akibat), 3) Interpretasi/Kesimpulan.',
      'Fakta: kebenarannya teruji dan memiliki data objektif (angka, tanggal, tempat). Opini: pendapat/perasaan pribadi (kata: menurut saya, sebaiknya, sangat indah).',
      'Syarat Kalimat Efektif: Memiliki subjek dan predikat jelas, menggunakan kata baku, dan hemat kata (tidak boros/pleonasme).'
    ],
    example: 'Tidak efektif: "Para hadirin sekalian dimohon berdiri." → Efektif: "Hadirin dimohon berdiri."'
  },
  {
    id: 'BIN-B3',
    subject: 'Bahasa Indonesia',
    semester: 2,
    bab: 'Bab 4, 5 & 6: Pidato, Ungkapan, Peribahasa & Teks Persuasif',
    summary: 'Menyusun naskah pidato, memahami makna ungkapan dan peribahasa, serta menulis teks persuasif bertema lingkungan.',
    keyPoints: [
      'Struktur Pidato: 1) Pembuka (salam, sapaan, puji syukur), 2) Isi pidato, 3) Penutup (kesimpulan, harapan, permohonan maaf, salam penutup).',
      'Ungkapan (Idiom): gabungan kata yang membentuk makna baru (misal: rendah hati = tidak sombong, buah tangan = oleh-oleh, banting tulang = kerja keras).',
      'Peribahasa: kalimat kiasan berisi nasihat (misal: "Besar pasak daripada tiang" artinya lebih besar pengeluaran daripada pendapatan).'
    ],
    example: 'Kalimat persuasif menggunakan kata ajakan seperti "Mari", "Ayo", atau "Hendaknya" untuk mengajak pembaca melakukan sesuatu yang positif.'
  },

  // ================= PENDIDIKAN PANCASILA =================
  {
    id: 'PKN-B1',
    subject: 'Pendidikan Pancasila',
    semester: 1,
    bab: 'Bab 1 & 2: Pengamalan Pancasila, Norma, Hak & Kewajiban',
    summary: 'Memahami keterkaitan utuh kelima sila Pancasila serta penerapan 4 macam norma dan keseimbangan hak-kewajiban anak.',
    keyPoints: [
      'Lambang Sila: 1) Bintang, 2) Rantai, 3) Pohon Beringin, 4) Kepala Banteng, 5) Padi dan Kapas.',
      'Empat Macam Norma: Norma Agama (wahyu Tuhan), Norma Kesusilaan (hati nurani), Norma Kesopanan (pergaulan masyarakat), Norma Hukum (aturan negara, sanksi tegas).',
      'Kewajiban harus didahulukan sebelum menuntut hak agar tercipta ketertiban dan keadilan bersama.'
    ],
    example: 'Mengikuti musyawarah pemilihan ketua kelas dengan tertib adalah pengamalan Sila ke-4, sedangkan membantu teman yang terkena musibah adalah Sila ke-2.'
  },
  {
    id: 'PKN-B2',
    subject: 'Pendidikan Pancasila',
    semester: 2,
    bab: 'Bab 3 & 4: Musyawarah, Toleransi Budaya & Menjaga NKRI',
    summary: 'Mempraktikkan pengambilan keputusan melalui musyawarah mufakat, menghargai keberagaman suku/agama, dan bela negara.',
    keyPoints: [
      'Tujuan musyawarah adalah mencapai mufakat (kesepakatan bersama). Jika mufakat belum tercapai, dapat dilakukan pemungutan suara terbanyak (voting).',
      'Semua warga wajib melaksanakan hasil keputusan musyawarah dengan penuh tanggung jawab dan lapang dada.',
      'Semboyan Bhinneka Tunggal Ika (dari Kitab Sutasoma karya Mpu Tantular) berarti "Berbeda-beda tetapi tetap satu jua".'
    ],
    example: 'Menghormati teman yang sedang menjalankan ibadah dan mempelajari tarian daerah lain merupakan wujud nyata menjaga persatuan NKRI.'
  },

  // ================= BAHASA INGGRIS =================
  {
    id: 'ENG-B1',
    subject: 'Bahasa Inggris',
    semester: 1,
    bab: 'Semester 1: Past Activities (Simple Past Tense & Was/Were)',
    summary: 'Menceritakan kegiatan yang sudah dilakukan di masa lampau menggunakan kata kerja bentuk kedua (Verb 2) dan to be lampau (was/were).',
    keyPoints: [
      'Rumus kalimat positif lampau: Subject + Verb 2 (misal: visited, played, studied, went, bought, ate).',
      'Kalimat negatif & tanya menggunakan "did": Subject + did not (didn\'t) + Verb 1 • Did + Subject + Verb 1?',
      'To be lampau: "was" untuk I, He, She, It • "were" untuk You, They, We. Keterangan waktu: yesterday, last night, two days ago, last week.'
    ],
    example: 'Rina went to the library yesterday, and she borrowed two storybooks.'
  },
  {
    id: 'ENG-B2',
    subject: 'Bahasa Inggris',
    semester: 2,
    bab: 'Semester 2: Future Plans & Dreams (Will & Professions)',
    summary: 'Menyatakan rencana kegiatan yang akan datang menggunakan "will" serta menceritakan cita-cita profesi di masa depan.',
    keyPoints: [
      'Rumus rencana masa depan: Subject + will + Verb 1 (misal: I will study, She will visit).',
      'Keterangan waktu masa depan: tomorrow (besok), next week (minggu depan), tonight (malam ini), in the future (di masa depan).',
      'Kosakata Profesi: Doctor (merawat pasien), Architect (merancang gedung), Pilot (menerbangkan pesawat), Chef (memasak), Scientist (peneliti).'
    ],
    example: '"What will you do tomorrow?" — "I will visit my grandparents in Bandung tomorrow."'
  }
];

// 2. Ambil 50 soal Tata Surya
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

const baseQuestions = [
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

const allQuestions = converted50.concat(baseQuestions);

const cleanDataFile = 
  'window.KURIKULUM_SD6 = ' + JSON.stringify(kurikulum, null, 2) + ';\n\n' +
  'window.DEFAULT_QUESTIONS_SD6 = ' + JSON.stringify(allQuestions, null, 2) + ';\n';

fs.writeFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/data_sd6.js', cleanDataFile, 'utf8');

console.log('data_sd6.js completely rewritten and pristine!');

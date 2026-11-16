const fs = require('fs');
const path = require('path');
const cwd = __dirname;

// ---------- pecahan helper ----------
const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));
const F = (n, d = 1) => { const g = gcd(n, d) || 1; return { n: n / g, d: d / g }; };
const M = (w, n, d) => F(w * d + n, d);
const mul = (a, b) => F(a.n * b.n, a.d * b.d);
const div = (a, b) => F(a.n * b.d, a.d * b.n);
const add = (a, b) => F(a.n * b.d + b.n * a.d, a.d * b.d);
const sub = (a, b) => F(a.n * b.d - b.n * a.d, a.d * b.d);
const fmt = (f) => {
  if (f.d === 1) return String(f.n);
  if (f.n > f.d) { const w = Math.floor(f.n / f.d); return `${w} ${f.n - w * f.d}/${f.d}`; }
  return `${f.n}/${f.d}`;
};
const improper = (f) => `${f.n}/${f.d}`;
const D = (x) => Number(x.toFixed(6)).toString().replace('.', ',');
const rp = (n) => 'Rp' + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',00';
const dtoF = (x) => { const s = Math.round(x * 1000000); return F(s, 1000000); };

// ---------- builder ----------
const out = [];
let counter = 0;
function q(diff, bloom, question, correct, wrongs, explanation) {
  const opts = [];
  for (const w of wrongs) if (w !== correct && !opts.includes(w)) opts.push(w);
  if (opts.length < 3) throw new Error('kurang pengecoh: ' + question);
  const wr = opts.slice(0, 3);
  const pos = (counter * 3 + 1) % 4;
  const options = [...wr];
  options.splice(pos, 0, correct);
  counter++;
  out.push({
    id: 'SD6-MTK1-' + String(counter).padStart(2, '0'),
    subject: 'Matematika', semester: 1, moduleId: 'MTK-B1',
    topic: 'Bab 1: Pecahan dan Desimal',
    type: 'PG', difficulty: diff, bloom,
    points: 10, timeMinutes: diff === 'Mudah' ? 1 : diff === 'Sedang' ? 2 : 3,
    question, options, correctIndex: pos, explanation
  });
}
const fbF = (c) => [fmt(F(c.n + 1, c.d)), fmt(F(c.n, c.d + 1)), fmt(F(c.n * 2, c.d)), fmt(F(c.n, c.d * 2)), fmt(F(c.n + c.d, c.d)), fmt(F(c.n + 2, c.d))];
const fbD = (c) => [D(c * 10), D(c / 10), D(c + 0.1), D(Math.abs(c - 0.1) + 0.01), D(c * 100), D(c + 1)].filter((s) => s !== '0');

// ---------- A. bilangan bulat x pecahan ----------
[[8, F(3, 4), 'Mudah'], [12, F(5, 6), 'Mudah'], [20, F(3, 8), 'Sedang'], [6, F(5, 9), 'Sedang']].forEach(([n, f, df]) => {
  const c = mul(F(n), f);
  q(df, 'C2', `Hasil dari ${n} × ${improper(f)} adalah...`, fmt(c),
    [fmt(F(n * f.n + 0, f.d + n)), fmt(f), fmt(F(n + f.n, f.d)), ...fbF(c)],
    `${n} × ${improper(f)} = (${n} × ${f.n}) / ${f.d} = ${n * f.n}/${f.d} = ${fmt(c)}.`);
});

// ---------- B. pecahan x pecahan ----------
[[F(2, 3), F(3, 5), 'Mudah'], [F(3, 4), F(2, 9), 'Mudah'], [F(5, 6), F(3, 10), 'Sedang'], [F(7, 8), F(4, 21), 'Sedang'], [F(9, 10), F(5, 12), 'Sedang']].forEach(([a, b, df]) => {
  const c = mul(a, b);
  q(df, 'C3', `Hasil dari ${improper(a)} × ${improper(b)} dalam bentuk paling sederhana adalah...`, fmt(c),
    [fmt(F(a.n + b.n, a.d + b.d)), fmt(div(a, b)), ...fbF(c)],
    `Kalikan pembilang dengan pembilang dan penyebut dengan penyebut: (${a.n} × ${b.n}) / (${a.d} × ${b.d}) = ${a.n * b.n}/${a.d * b.d} = ${fmt(c)} (setelah disederhanakan).`);
});

// ---------- C. pecahan campuran dikali ----------
[[M(1, 1, 2), M(2, 1, 3), 'Sedang', '1 1/2', '2 1/3'], [M(2, 1, 4), F(2, 3), 'Sedang', '2 1/4', '2/3'], [M(3, 1, 5), M(1, 1, 4), 'Sedang', '3 1/5', '1 1/4'], [M(2, 2, 3), M(1, 1, 2), 'Sulit', '2 2/3', '1 1/2']].forEach(([a, b, df, sa, sb]) => {
  const c = mul(a, b);
  q(df, 'C3', `Hasil dari ${sa} × ${sb} adalah...`, fmt(c),
    [fmt(add(F(Math.floor(a.n / a.d) * Math.floor(b.n / b.d)), mul(F(a.n % a.d, a.d), F(b.n % b.d, b.d)))), ...fbF(c)],
    `Ubah ke pecahan biasa dulu: ${sa} = ${improper(a)} dan ${sb} = ${improper(b)}. Kalikan: ${improper(a)} × ${improper(b)} = ${fmt(c)}.`);
});

// ---------- D. pembagian bilangan bulat / pecahan ----------
[[F(6), F(1, 3), 'Mudah', '6 ÷ 1/3'], [F(3, 4), F(3), 'Mudah', '3/4 ÷ 3'], [F(10), F(2, 5), 'Sedang', '10 ÷ 2/5'], [F(5, 6), F(5), 'Sedang', '5/6 ÷ 5']].forEach(([a, b, df, label]) => {
  const c = div(a, b);
  q(df, 'C3', `Hasil dari ${label} adalah...`, fmt(c),
    [fmt(mul(a, b)), fmt(div(b, a)), ...fbF(c)],
    `Gunakan K-C-F (Keep, Change, Flip): ${label} = ${fmt(a)} × ${fmt(div(F(1), b))} = ${fmt(c)}.`);
});

// ---------- E. pecahan : pecahan ----------
[[F(3, 4), F(5, 8), 'Sedang'], [F(2, 3), F(4, 9), 'Sedang'], [F(7, 10), F(14, 15), 'Sedang'], [F(5, 6), F(10, 3), 'Sulit']].forEach(([a, b, df]) => {
  const c = div(a, b);
  q(df, 'C3', `Hasil dari ${improper(a)} ÷ ${improper(b)} dalam bentuk paling sederhana adalah...`, fmt(c),
    [fmt(mul(a, b)), fmt(div(b, a)), ...fbF(c)],
    `${improper(a)} ÷ ${improper(b)} = ${improper(a)} × ${improper(F(b.d, b.n))} = ${fmt(c)}. Ingat: yang dibalik hanya pecahan kedua.`);
});

// ---------- F. campuran dibagi ----------
[[M(2, 1, 4), M(1, 1, 2), '2 1/4 ÷ 1 1/2'], [M(3, 1, 3), M(1, 2, 3), '3 1/3 ÷ 1 2/3'], [M(4, 1, 2), F(3, 4), '4 1/2 ÷ 3/4']].forEach(([a, b, label], i) => {
  const c = div(a, b);
  q(i === 2 ? 'Sulit' : 'Sedang', 'C3', `Hasil dari ${label} adalah...`, fmt(c),
    [fmt(mul(a, b)), fmt(div(b, a)), ...fbF(c)],
    `Ubah ke pecahan biasa: ${improper(a)} ÷ ${improper(b)} = ${improper(a)} × ${improper(F(b.d, b.n))} = ${fmt(c)}.`);
});

// ---------- G. pecahan -> desimal ----------
[[F(3, 5), 0.6, 'Mudah', '(3 × 2) / (5 × 2) = 6/10'], [F(7, 20), 0.35, 'Mudah', '(7 × 5) / (20 × 5) = 35/100'], [F(5, 8), 0.625, 'Sedang', '(5 × 125) / (8 × 125) = 625/1000']].forEach(([f, v, df, how]) => {
  q(df, 'C2', `Bentuk desimal dari pecahan ${improper(f)} adalah...`, D(v),
    [D(v * 10), D(v / 10), D(f.n / 10 + f.d / 100), D(v + 0.05), D(v + 0.1)],
    `Ubah penyebut menjadi 10, 100, atau 1000: ${improper(f)} = ${how} = ${D(v)}.`);
});

// ---------- H. desimal -> pecahan ----------
[[0.6, 'Mudah'], [0.125, 'Sedang'], [2.4, 'Sedang']].forEach(([v, df]) => {
  const f = dtoF(v);
  const dd = String(v).split('.')[1].length;
  const den = Math.pow(10, dd);
  const raw = Math.round(v * den);
  q(df, 'C2', `Bentuk pecahan paling sederhana dari ${D(v)} adalah...`, fmt(f),
    [`${raw}/${den}`, fmt(F(raw, den * 10)), fmt(F(raw * 2 + 1, den)), fmt(F(raw + 1, den)), fmt(F(raw, den + 10))],
    `${D(v)} = ${raw}/${den}. Sederhanakan dengan FPB: ${fmt(f)}.`);
});

// ---------- I. tambah kurang desimal ----------
[['+', 12.75, 8.6, 'Mudah', '12,75 + 8,60'], ['-', 25.4, 9.85, 'Sedang', '25,40 - 9,85'], ['-', 10, 3.48, 'Sedang', '10,00 - 3,48']].forEach(([op, a, b, df, how]) => {
  const c = op === '+' ? a + b : a - b;
  q(df, 'C3', `Hasil dari ${D(a)} ${op === '+' ? '+' : '-'} ${D(b)} adalah...`, D(c),
    [...fbD(c), D(op === '+' ? a - b : a + b), D(c + 0.9)],
    `Luruskan tanda koma lalu hitung: ${how} = ${D(c)}.`);
});

// ---------- J. kali desimal ----------
[[0.6, 0.7, 'Mudah'], [1.5, 0.24, 'Sedang'], [3.2, 0.05, 'Sedang']].forEach(([a, b, df]) => {
  const c = Number((a * b).toFixed(6));
  const da = (D(a).split(',')[1] || '').length, db = (D(b).split(',')[1] || '').length;
  q(df, 'C3', `Hasil dari ${D(a)} × ${D(b)} adalah...`, D(c),
    [...fbD(c)],
    `Kalikan tanpa koma: ${Math.round(a * Math.pow(10, da))} × ${Math.round(b * Math.pow(10, db))} = ${Math.round(a * Math.pow(10, da)) * Math.round(b * Math.pow(10, db))}. Jumlah angka di belakang koma = ${da} + ${db} = ${da + db}, sehingga hasilnya ${D(c)}.`);
});

// ---------- K. bagi desimal ----------
[[7.2, 0.9, 'Sedang', 10], [3.6, 0.15, 'Sedang', 100], [0.84, 0.7, 'Sulit', 10]].forEach(([a, b, df, k]) => {
  const c = Number((a / b).toFixed(6));
  q(df, 'C3', `Hasil dari ${D(a)} ÷ ${D(b)} adalah...`, D(c),
    [...fbD(c)],
    `Kalikan kedua bilangan dengan ${k} agar pembagi bulat: ${D(a * k)} ÷ ${D(b * k)} = ${D(c)}.`);
});

// ---------- L. campuran pecahan dan desimal ----------
q('Sedang', 'C3', 'Hasil dari 1/2 + 0,75 adalah...', D(1.25), [D(1.5), D(0.8), D(1.75), D(0.125)], '1/2 = 0,5 sehingga 0,5 + 0,75 = 1,25.');
q('Sedang', 'C3', 'Hasil dari 3/4 × 0,8 adalah...', D(0.6), [D(0.06), D(6), D(1.55), D(0.75)], '3/4 = 0,75 sehingga 0,75 × 0,8 = 0,6.');
q('Sulit', 'C3', 'Hasil dari 2,5 ÷ 1/4 adalah...', D(10), [D(0.625), D(1), D(2.75), D(100)], '2,5 ÷ 1/4 = 2,5 × 4 = 10.');

// ---------- M. soal cerita ----------
q('Sedang', 'C3', 'Lovely memiliki pita sepanjang 7 1/2 meter. Pita itu dipotong-potong dengan panjang masing-masing 3/4 meter untuk menghias kado. Berapa banyak potongan pita yang diperoleh?',
  '10 potongan', ['5 potongan', '8 potongan', '12 potongan'],
  '7 1/2 = 15/2 meter. Banyak potongan = 15/2 ÷ 3/4 = 15/2 × 4/3 = 10 potongan.');
q('Sulit', 'C4', 'Pak Ahmad memiliki tanah seluas 480 m². Sebanyak 3/8 bagian ditanami jagung, 1/4 bagian ditanami singkong, dan sisanya dibuat kolam ikan. Berapa luas kolam ikan?',
  '180 m²', ['120 m²', '200 m²', '300 m²'],
  'Jagung = 3/8 × 480 = 180 m². Singkong = 1/4 × 480 = 120 m². Terpakai = 300 m². Kolam = 480 - 300 = 180 m².');
q('Sulit', 'C4', 'Ibu membeli 2,5 kg beras seharga Rp16.000,00 per kg dan 3/4 kg gula seharga Rp24.000,00 per kg. Jika Ibu membayar dengan uang Rp100.000,00, berapa uang kembaliannya?',
  rp(42000), [rp(40000), rp(58000), rp(52000)],
  'Beras = 2,5 × 16.000 = 40.000. Gula = 3/4 × 24.000 = 18.000. Total = 58.000. Kembalian = 100.000 - 58.000 = 42.000.');
q('Sulit', 'C4', 'Ibu mempunyai 3,5 kg tepung. Sebanyak 40% dipakai untuk membuat puding, sisanya dibagi ke dalam kantong yang masing-masing berisi 3/10 kg. Berapa kantong yang diperlukan?',
  '7 kantong', ['6 kantong', '8 kantong', '12 kantong'],
  '40% × 3,5 = 1,4 kg. Sisa = 3,5 - 1,4 = 2,1 kg. Kantong = 2,1 ÷ 0,3 = 7.');
q('Sulit', 'C4', 'Sebuah drum terisi 3/4 bagian. Sebanyak 1/3 DARI AIR YANG ADA dipakai untuk menyiram tanaman. Berapa bagian drum yang masih berisi air?',
  '1/2', ['5/12', '1/4', '2/3'],
  'Air terpakai = 1/3 × 3/4 = 1/4 bagian drum. Sisa = 3/4 - 1/4 = 2/4 = 1/2 bagian.');
q('Sedang', 'C3', 'Sebuah papan tulis berbentuk persegi panjang berukuran panjang 1 1/4 meter dan lebar 0,8 meter. Berapa luas papan tulis tersebut?',
  '1 m²', ['0,9 m²', '1,2 m²', '2,05 m²'],
  '1 1/4 = 1,25 m. Luas = 1,25 × 0,8 = 1,0 m².');

// ---------- N. HOTS ----------
q('Sulit', 'C5', 'Sebuah tangki terisi 4/5 bagian. Sebanyak 1/2 DARI AIR DALAM TANGKI dipakai untuk mencuci mobil, lalu tangki diisi lagi 0,2 bagian dari kapasitas penuh. Berapa bagian tangki yang terisi sekarang?',
  '3/5', ['2/5', '1/2', '7/10'],
  'Terpakai = 1/2 × 4/5 = 2/5. Sisa = 4/5 - 2/5 = 2/5. Ditambah 0,2 = 1/5 → 2/5 + 1/5 = 3/5.');
q('Sulit', 'C5', 'Perhatikan pernyataan berikut. Manakah yang BENAR?',
  '0,5 × 0,5 = 0,25', ['3/4 ÷ 1/2 = 3/8', '2/3 + 1/3 = 2/6', '5 - 0,25 = 5,25'],
  '0,5 × 0,5 = 0,25 (benar). 3/4 ÷ 1/2 = 3/2 (bukan 3/8); 2/3 + 1/3 = 1 (bukan 2/6); 5 - 0,25 = 4,75.');

if (out.length !== 50) throw new Error('jumlah soal = ' + out.length);

// ---------- validasi ----------
out.forEach((x) => {
  if (new Set(x.options).size !== 4) throw new Error('opsi duplikat: ' + x.id);
  if (x.options[x.correctIndex] === undefined) throw new Error('indeks salah: ' + x.id);
});
const dist = out.reduce((a, x) => { a[x.difficulty] = (a[x.difficulty] || 0) + 1; return a; }, {});
console.log('Distribusi kesulitan:', dist);
console.log('Distribusi posisi jawaban:', out.reduce((a, x) => { a[x.correctIndex] = (a[x.correctIndex] || 0) + 1; return a; }, {}));
fs.writeFileSync(path.join(cwd, 'soal_mtk_bab1.json'), JSON.stringify(out, null, 2), 'utf8');

// ---------- tulis ke data_sd6.js ----------
global.window = global;
delete require.cache[require.resolve('./data_sd6.js')];
require('./data_sd6.js');
const cur = global.KURIKULUM_SD6;
const others = global.DEFAULT_QUESTIONS_SD6.filter((x) => x.moduleId !== 'MTK-B1');
const all = [...others, ...out];
fs.writeFileSync(path.join(cwd, 'data_sd6.js'),
  `/**\n * Bank Soal PintarSD6 - Data Modul Kurikulum & Bank Soal Lengkap\n * Fase C Kelas 6 SD Kurikulum Merdeka\n */\n\nwindow.KURIKULUM_SD6 = ${JSON.stringify(cur, null, 2)};\n\nwindow.DEFAULT_QUESTIONS_SD6 = ${JSON.stringify(all, null, 2)};\n`, 'utf8');
console.log('data_sd6.js total soal:', all.length);

// ---------- tulis ke index.html ----------
function matchEnd(src, openPos) {
  let depth = 0, inStr = null;
  for (let k = openPos; k < src.length; k++) {
    const c = src[k];
    if (inStr) { if (c === '\\') { k++; continue; } if (c === inStr) inStr = null; continue; }
    if (c === '"' || c === "'" || c === '`') { inStr = c; continue; }
    if (c === '[') depth++;
    else if (c === ']') { depth--; if (depth === 0) return k; }
  }
  throw new Error('no match');
}
let h = fs.readFileSync(path.join(cwd, 'index.html'), 'utf8');
const s = h.indexOf('window.DEFAULT_QUESTIONS_SD6 = ');
const o = h.indexOf('[', s);
h = h.slice(0, o) + JSON.stringify(all, null, 2) + h.slice(matchEnd(h, o) + 1);

// hapus soal Bab 1 versi lama (id SD6-MTK-B1-xx / SD6-MTK-01..) dari penyimpanan browser
const oldLine = 'questions = [...loaded, ...toAdd];';
const newLine = "questions = [...loaded, ...toAdd].filter(q => !/^SD6-MTK-B1-/.test(q.id) && !['SD6-MTK-01','SD6-MTK-02'].includes(q.id));";
if (h.includes(oldLine)) { h = h.replace(oldLine, newLine); console.log('loadData: pembersihan soal lama ditambahkan'); }
fs.writeFileSync(path.join(cwd, 'index.html'), h, 'utf8');
console.log('index.html diperbarui');

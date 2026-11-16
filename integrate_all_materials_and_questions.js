const fs = require('fs');
const path = require('path');

const cwd = __dirname;
const dir = 'C:\\Users\\Yoce\\Downloads';

// Helper to escape HTML safely
function esc(s) {
  return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// -----------------------------------------------------------------------------
// 1. READ ORIGINAL DOWNLOAD FILES
// -----------------------------------------------------------------------------
const paiNoteHtml = fs.readFileSync(path.join(dir, 'gemini-code-1794838965813.html'), 'utf8');
const paiQuizHtml = fs.readFileSync(path.join(dir, 'gemini-code-1794838957190.html'), 'utf8');

const ipasNoteHtml = fs.readFileSync(path.join(dir, 'gemini-code-1794838997963.html'), 'utf8');
const ipasQuizHtml = fs.readFileSync(path.join(dir, 'gemini-code-1794838988588.html'), 'utf8');

const mtkNoteHtml = fs.readFileSync(path.join(dir, 'gemini-code-1794839002381.html'), 'utf8');

const engNoteHtml = fs.readFileSync(path.join(dir, 'Materi_Bahasa_Inggris_Unit_4.html'), 'utf8');
const engQuizHtml = fs.readFileSync(path.join(dir, 'Kuis_Bahasa_Inggris_Unit_4_50_Soal.html'), 'utf8');

const bindNoteHtml = fs.readFileSync(path.join(dir, 'Ringkasan_Bahasa_Indonesia_Bab_6.html'), 'utf8');
const bindSakti6Html = fs.readFileSync(path.join(dir, 'catatan_sakti_bind_bab6.html'), 'utf8');
const bindQuiz6Html = fs.readFileSync(path.join(dir, 'Kuis_Bahasa_Indonesia_Bab_6_50_Soal.html'), 'utf8');

const bind45NoteHtml = fs.readFileSync(path.join(dir, 'gemini-code-1794838985343.html'), 'utf8');
const bind45QuizHtml = fs.readFileSync(path.join(dir, 'gemini-code-1794838975050.html'), 'utf8');

console.log('✅ Semua file HTML sumber berhasil dibaca.');

// Parse Gemini quiz helper
function parseGeminiQuiz(content) {
  const pgM = content.match(/const\s+pgQuestions\s*=\s*(\[[\s\S]*?\]);/);
  const isianM = content.match(/const\s+isianQuestions\s*=\s*(\[[\s\S]*?\]);/);
  const esaiM = content.match(/const\s+esaiQuestions\s*=\s*(\[[\s\S]*?\]);/);
  
  const pg = pgM ? new Function('return ' + pgM[1])() : [];
  const isian = isianM ? new Function('return ' + isianM[1])() : [];
  const esai = esaiM ? new Function('return ' + esaiM[1])() : [];
  return { pg, isian, esai };
}

// Parse pgData helper
function parsePgData(content) {
  const m = content.match(/const\s+pgData\s*=\s*(\[[\s\S]*?\]);/);
  return m ? new Function('return ' + m[1])() : [];
}

const parsedPai = parseGeminiQuiz(paiQuizHtml);
const parsedIpas = parseGeminiQuiz(ipasQuizHtml);
const parsedBind45 = parseGeminiQuiz(bind45QuizHtml);
const parsedBind6 = parsePgData(bindQuiz6Html);
const parsedEng4 = parsePgData(engQuizHtml);

console.log(`Parsed questions count:
- PAI ZISWAF: ${parsedPai.pg.length} PG, ${parsedPai.isian.length} Isian, ${parsedPai.esai.length} Esai
- IPAS Energi: ${parsedIpas.pg.length} PG, ${parsedIpas.isian.length} Isian, ${parsedIpas.esai.length} Esai
- B. Indo 4-5: ${parsedBind45.pg.length} PG, ${parsedBind45.isian.length} Isian, ${parsedBind45.esai.length} Esai
- B. Indo 6: ${parsedBind6.length} PG
- B. Inggris 4: ${parsedEng4.length} PG`);

// -----------------------------------------------------------------------------
// 2. BUILD RICH LEARNING MODULES
// -----------------------------------------------------------------------------
const richModules = JSON.parse(fs.readFileSync(path.join(cwd, 'rich_modules.json'), 'utf8'));

// A. PAI BAB 6 (ZISWAF)
richModules['PAI-B6'] = {
  title: "Bab 6: Indahnya Berbagi Melalui ZISWAF (Zakat, Infak, Sedekah, dan Wakaf)",
  html: `
<div class="space-y-8 text-slate-800">
  <section class="space-y-4">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
      <span>🌙</span> Pilar 1: Pengantar Kontekstual (Apersepsi)
    </div>
    <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
      "Mengapa Islam Mewajibkan Kita Berbagi Rezeki dengan Sesama?"
    </h2>
    <div class="p-5 rounded-3xl bg-linear-to-br from-emerald-500/10 via-teal-500/5 to-transparent border border-emerald-200/80 space-y-3 text-sm leading-relaxed text-slate-700">
      <p>
        Pernahkah kamu melihat orang tua membayar beras menjelang malam takbiran Idul Fitri? Atau melihat kotak amal keliling di masjid saat salat Jumat? Dalam Islam, berbagi rezeki bukan sekadar perbuatan baik, melainkan memiliki aturan syariat yang sangat indah bernama <strong>ZISWAF</strong>: Zakat, Infak, Sedekah, dan Wakaf.
      </p>
      <div class="p-3.5 rounded-2xl bg-white/90 border border-emerald-200 text-xs font-semibold text-emerald-950 flex items-center gap-2.5 shadow-sm">
        <span class="text-xl">💡</span>
        <span>Harta yang kita miliki sejatinya adalah titipan Allah SWT, dan di dalamnya terdapat hak kaum duafa dan fakir miskin.</span>
      </div>
    </div>
  </section>

  <section class="space-y-6">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-bold uppercase tracking-wider">
      <span>📚</span> Pilar 2: Pendalaman Materi Esensial
    </div>
    <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900">
      Membedah 4 Pilar Ibadah Sosial: Zakat, Infak, Sedekah & Wakaf
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-2">
        <div class="flex items-center gap-2 text-emerald-700 font-bold text-base">
          <span>💰</span> 1. ZAKAT (Hukum: Wajib / Fardhu 'Ain)
        </div>
        <p class="text-xs text-slate-600 leading-relaxed">
          Ibadah wajib bagi muslim yang memenuhi syarat nisab & haul. Dibagi menjadi dua:
        </p>
        <ul class="text-xs text-slate-700 space-y-1 list-disc pl-4">
          <li><strong>Zakat Fitrah:</strong> Wajib dikeluarkan setiap jiwa muslim di bulan Ramadan berupa makanan pokok (2,5 kg atau 3,5 liter beras) sebelum salat Idul Fitri.</li>
          <li><strong>Zakat Mal:</strong> Zakat harta kekayaan (emas, perak, tabungan, pertanian, perdagangan) sebesar 2,5% jika mencapai nisab (setara 85 gram emas) dan haul (1 tahun).</li>
          <li><strong>8 Golongan Penerima (Mustahik):</strong> Fakir, Miskin, Amil, Mualaf, Riqab (Hamba Sahaya), Gharim (Orang berutang), Fisabilillah, dan Ibnu Sabil (Musafir).</li>
        </ul>
      </div>

      <div class="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-2">
        <div class="flex items-center gap-2 text-teal-700 font-bold text-base">
          <span>💸</span> 2. INFAK (Hukum: Sunah)
        </div>
        <p class="text-xs text-slate-600 leading-relaxed">
          Mengeluarkan sebagian <strong>harta atau benda</strong> di jalan Allah SWT tanpa batasan waktu atau nisab tertentu.
        </p>
        <ul class="text-xs text-slate-700 space-y-1 list-disc pl-4">
          <li>Wujudnya <strong>harus berupa materi/uang/benda</strong> (tidak bisa berupa senyum atau tenaga).</li>
          <li>Bisa diberikan kapan saja, misalnya mengisi kotak amal masjid, membantu korban banjir, atau donasi beasiswa.</li>
        </ul>
      </div>

      <div class="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-2">
        <div class="flex items-center gap-2 text-amber-700 font-bold text-base">
          <span>🤝</span> 3. SEDEKAH (Hukum: Sunah & Paling Luas)
        </div>
        <p class="text-xs text-slate-600 leading-relaxed">
          Segala bentuk kebaikan yang tulus ikhlas karena Allah. <strong>Tidak terbatas pada uang atau harta!</strong>
        </p>
        <ul class="text-xs text-slate-700 space-y-1 list-disc pl-4">
          <li>Senyuman tulus kepada sesama adalah sedekah (<em>Tabassumuka fi wajhi akhika shadaqah</em>).</li>
          <li>Menyingkirkan duri/batu dari jalan, mengajarkan ilmu, berzikir (tasbih, tahmid, tahlil), serta membantu tenaga juga bernilai sedekah.</li>
        </ul>
      </div>

      <div class="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-2">
        <div class="flex items-center gap-2 text-purple-700 font-bold text-base">
          <span>🏛️</span> 4. WAKAF (Hukum: Sunah Jariyah)
        </div>
        <p class="text-xs text-slate-600 leading-relaxed">
          Menyerahkan harta yang <strong>tahan lama dan tidak habis pakai</strong> untuk dimanfaatkan bagi kepentingan umum umat Islam.
        </p>
        <ul class="text-xs text-slate-700 space-y-1 list-disc pl-4">
          <li>Benda wakaf <strong>tidak boleh dijual, diwariskan, atau dihibahkan</strong>.</li>
          <li>Contoh: Tanah untuk masjid, gedung madrasah, sumur air bersih, ambulans gratis, atau perpustakaan Islam.</li>
          <li>Pahala wakaf terus mengalir tiada henti meskipun orang yang berwakaf (wakif) sudah wafat (Amal Jariyah).</li>
        </ul>
      </div>
    </div>

    <!-- TABEL PERBANDINGAN -->
    <div class="overflow-x-auto">
      <table class="w-full text-xs text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-200">
        <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
          <tr>
            <th class="p-3">Aspek</th>
            <th class="p-3">Zakat</th>
            <th class="p-3">Infak</th>
            <th class="p-3">Sedekah</th>
            <th class="p-3">Wakaf</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 text-slate-600">
          <tr>
            <td class="p-3 font-bold text-slate-800">Hukum</td>
            <td class="p-3 font-semibold text-rose-600">Wajib (Fardhu)</td>
            <td class="p-3 text-emerald-600">Sunah</td>
            <td class="p-3 text-emerald-600">Sunah</td>
            <td class="p-3 text-emerald-600">Sunah</td>
          </tr>
          <tr>
            <td class="p-3 font-bold text-slate-800">Wujud</td>
            <td class="p-3">Beras/Uang (Tertentu)</td>
            <td class="p-3">Uang / Harta Benda</td>
            <td class="p-3">Materi & Non-Materi (Senyum/Tenaga)</td>
            <td class="p-3">Aset Tahan Lama (Tanah/Gedung)</td>
          </tr>
          <tr>
            <td class="p-3 font-bold text-slate-800">Ketentuan Waktu</td>
            <td class="p-3">Ada waktu/haul tertentu</td>
            <td class="p-3">Kapan saja bebas</td>
            <td class="p-3">Kapan saja bebas</td>
            <td class="p-3">Kapan saja bebas</td>
          </tr>
          <tr>
            <td class="p-3 font-bold text-slate-800">Penerima</td>
            <td class="p-3">Khusus 8 Golongan Mustahik</td>
            <td class="p-3">Siapapun yang membutuhkan</td>
            <td class="p-3">Semua orang makhluk ciptaan Allah</td>
            <td class="p-3">Masyarakat umum / Maslahat Umat</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="space-y-4">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-xs font-bold uppercase tracking-wider">
      <span>🧠</span> Pilar 4: Mnemonic & Rangkuman Emas Ujian
    </div>
    <div class="p-5 rounded-3xl bg-slate-900 text-white shadow-xl space-y-3">
      <div class="flex items-center gap-2 font-extrabold text-sm text-emerald-400">
        <span>⭐</span> Rumus Hafalan Kilat ZISWAF:
      </div>
      <ul class="text-xs text-slate-300 space-y-2 pl-4 list-disc">
        <li><strong>Zakat:</strong> Wajib + Ada batas nisab + Khusus 8 golongan (Fakir, Miskin, Amil, Mualaf, Riqab, Gharim, Fisabilillah, Ibnu Sabil).</li>
        <li><strong>Infak:</strong> Sunah + Selalu berbentuk harta benda/uang.</li>
        <li><strong>Sedekah:</strong> Sunah + Paling luas (senyum, ilmu, tenaga, uang).</li>
        <li><strong>Wakaf:</strong> Sunah + Benda abadi/tahan lama untuk maslahat umum (pahala jariyah mengalir terus).</li>
      </ul>
    </div>
  </section>
</div>
`
};

// B. IPAS BAB 6 (ENERGI RAMAH LINGKUNGAN)
richModules['IPAS-B6'] = {
  title: "Bab 6 & 7: Energi Terbarukan, Fosil & Pelestarian Lingkungan",
  html: `
<div class="space-y-8 text-slate-800">
  <section class="space-y-4">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
      <span>⚡</span> Pilar 1: Pengantar Kontekstual (Apersepsi)
    </div>
    <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
      "Gawat! Benarkah Minyak Bumi dan Batu Bara di Bumi Akan Segera Habis?"
    </h2>
    <div class="p-5 rounded-3xl bg-linear-to-br from-teal-500/10 via-emerald-500/5 to-transparent border border-teal-200/80 space-y-3 text-sm leading-relaxed text-slate-700">
      <p>
        Setiap hari kita menyalakan lampu, mengisi daya smartphone, dan bepergian naik motor atau mobil. Hampir 80% energi dunia saat ini masih bergantung pada pembakaran <strong>bahan bakar fosil</strong>. Padahal fosil membutuhkan waktu ratusan juta tahun untuk terbentuk! Jika terus dikeruk, persediaannya akan habis dan polusi asapnya memicu pemanasan global. Mari kita pelajari bagaimana ilmuwan beralih ke <strong>Energi Bersih Terbarukan</strong>!
      </p>
    </div>
  </section>

  <section class="space-y-6">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-bold uppercase tracking-wider">
      <span>🌿</span> Pilar 2: Energi Fosil vs Energi Terbarukan
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
        <div class="flex items-center gap-2 text-rose-700 font-bold text-base">
          <span>🛢️</span> 1. Energi Tidak Terbarukan (Fosil)
        </div>
        <p class="text-xs text-slate-600 leading-relaxed">
          Energi yang jumlahnya terbatas di alam dan akan habis jika digunakan terus-menerus karena butuh jutaan tahun untuk terbentuk kembali.
        </p>
        <ul class="text-xs text-slate-700 space-y-1 list-disc pl-4">
          <li><strong>Minyak Bumi:</strong> Diolah jadi bensin, solar, avtur, aspal, dan minyak tanah.</li>
          <li><strong>Batu Bara:</strong> Bahan bakar utama sebagian besar Pembangkit Listrik Tenaga Uap (PLTU).</li>
          <li><strong>Gas Alam (LPG/LNG):</strong> Dipakai untuk memasak dan bahan bakar industri.</li>
          <li><strong>Dampak Buruk:</strong> Menghasilkan gas CO₂ (efek rumah kaca), hujan asam karena gas sulfur/nitrogen, serta polusi udara.</li>
        </ul>
      </div>

      <div class="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
        <div class="flex items-center gap-2 text-emerald-700 font-bold text-base">
          <span>☀️</span> 2. Energi Terbarukan (Energi Bersih)
        </div>
        <p class="text-xs text-slate-600 leading-relaxed">
          Sumber energi yang selalu tersedia di alam, tidak pernah habis (melimpah), ramah lingkungan, dan tidak menghasilkan polusi berbahaya.
        </p>
        <ul class="text-xs text-slate-700 space-y-1 list-disc pl-4">
          <li><strong>Matahari (Surya):</strong> Ditangkap oleh sel surya (panel surya / fotovoltaik) menjadi listrik (PLTS).</li>
          <li><strong>Angin (Bayu):</strong> Menggerakkan kincir turbin angin raksasa (PLTB, contoh di Sidrap & Jeneponto, Sulawesi Selatan).</li>
          <li><strong>Air (Hidro):</strong> Arus air waduk/bendungan memutar turbin generator (PLTA, contoh di Jatiluhur & Cirata).</li>
          <li><strong>Panas Bumi (Geotermal):</strong> Uap panas dari perut bumi di dekat gunung berapi (PLTP, contoh di Kamojang).</li>
          <li><strong>Biomassa & Biofuel:</strong> Energi dari limbah organik (biodiesel sawit, bioetanol tebu, biogas kotoran ternak).</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-xs font-bold uppercase tracking-wider">
      <span>💡</span> Pilar 3 & 4: Gaya Hidup Hemat Energi & Rangkuman Ujian
    </div>
    <div class="p-5 rounded-3xl bg-slate-900 text-white shadow-xl space-y-3">
      <div class="flex items-center gap-2 font-extrabold text-sm text-teal-400">
        <span>⭐</span> Aksi Nyata Hemat Energi (Gerakan 3M):
      </div>
      <ul class="text-xs text-slate-300 space-y-2 pl-4 list-disc">
        <li><strong>Mematikan:</strong> Matikan lampu dan alat elektronik yang tidak digunakan.</li>
        <li><strong>Mencabut:</strong> Cabut steker charger setelah selesai mengisi baterai agar tidak ada arus listrik bocor (vampire power).</li>
        <li><strong>Mengurangi:</strong> Gunakan transportasi umum atau berjalan kaki/bersepeda untuk jarak dekat, serta manfaatkan ventilasi alami pengganti AC.</li>
      </ul>
    </div>
  </section>
</div>
`
};

// C. MATEMATIKA BAB 2 (RASIO & SKALA - TRIK MASTER)
richModules['MTK-B2'] = {
  title: "Bab 2: Rasio (Perbandingan) & Skala Peta (Trik Master Pengurangan Waktu, Rasio 3 Variabel & Berbalik Nilai)",
  html: `
<div class="space-y-8 text-slate-800">
  <section class="space-y-4">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-bold uppercase tracking-wider">
      <span>📐</span> Pilar 1 & 2: Konsep Rasio, Skala & Trik Master
    </div>
    <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
      3 Trik Rahasia Menaklukkan Soal HOTS Perbandingan & Skala Kelas 6
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
      <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
        <div class="font-bold text-indigo-900 text-sm flex items-center gap-1.5">
          <span>⏱️</span> 1. Trik Pengurangan Waktu
        </div>
        <p class="text-slate-600">Ingat: 1 jam = 60 menit! Jika menit atas lebih kecil, pinjam 1 jam menjadi 60 menit.</p>
        <div class="p-2.5 bg-indigo-50 rounded-xl font-mono text-[11px] text-indigo-950">
          04.15 - 01.40<br>
          Pinjam 1 jam: 03.75 - 01.40<br>
          = <strong>02 jam 35 menit</strong>
        </div>
      </div>

      <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
        <div class="font-bold text-teal-900 text-sm flex items-center gap-1.5">
          <span>🔗</span> 2. Trik Gabung 3 Rasio (A:B:C)
        </div>
        <p class="text-slate-600">Samakan variabel penengah dengan mencari KPK-nya!</p>
        <div class="p-2.5 bg-teal-50 rounded-xl font-mono text-[11px] text-teal-950">
          A : B = 2 : 3 (×4)<br>
          B : C = 4 : 5 (×3)<br>
          A : B : C = <strong>8 : 12 : 15</strong>
        </div>
      </div>

      <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
        <div class="font-bold text-amber-900 text-sm flex items-center gap-1.5">
          <span>🔄</span> 3. Berbalik Nilai (Proyek & Ternak)
        </div>
        <p class="text-slate-600">Makin banyak pekerja, hari makin sedikit. Rumus: <em>Perkalian lurus tetap sama</em>!</p>
        <div class="p-2.5 bg-amber-50 rounded-xl font-mono text-[11px] text-amber-950">
          Pekerja1 × Hari1 = Pekerja2 × Hari2<br>
          12 org × 20 hari = 240<br>
          Jika 15 org → 240 ÷ 15 = <strong>16 hari</strong>
        </div>
      </div>
    </div>
  </section>

  <section class="space-y-4">
    <div class="p-5 rounded-3xl bg-slate-900 text-white shadow-xl space-y-3">
      <div class="flex items-center gap-2 font-extrabold text-sm text-amber-400">
        <span>🗺️</span> Segitiga Sakti Skala Peta (JP, S, JS):
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
        <div class="p-3 bg-white/10 rounded-xl">
          <div class="font-bold text-amber-300">Skala (S)</div>
          <div>S = JP ÷ JS</div>
          <div class="text-[10px] text-slate-300">Satuan wajib diubah ke cm!</div>
        </div>
        <div class="p-3 bg-white/10 rounded-xl">
          <div class="font-bold text-amber-300">Jarak Peta (JP)</div>
          <div>JP = JS × S</div>
          <div class="text-[10px] text-slate-300">Hasil dalam satuan cm.</div>
        </div>
        <div class="p-3 bg-white/10 rounded-xl">
          <div class="font-bold text-amber-300">Jarak Sebenarnya (JS)</div>
          <div>JS = JP ÷ S</div>
          <div class="text-[10px] text-slate-300">Ubah cm ke km (bagi 100.000).</div>
        </div>
      </div>
    </div>
  </section>
</div>
`
};

// D. BAHASA INGGRIS UNIT 4 (TRADITIONAL & MODERN GAMES)
richModules['ENG-B4'] = {
  title: "Unit 4: Traditional and Modern Games (Rules, Tools & Imperative Instructions)",
  html: `
<div class="space-y-8 text-slate-800">
  <section class="space-y-4">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider">
      <span>🎮</span> Unit 4: Games & Instructions
    </div>
    <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
      Traditional vs Modern Games: Rules, Verbs, and Imperative Sentences
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
      <div class="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-2">
        <h3 class="font-bold text-amber-900 text-sm">🎲 1. Vocabulary: Types of Games & Tools</h3>
        <ul class="space-y-1 text-slate-700 list-disc pl-4">
          <li><strong>Engklek (Hopscotch):</strong> drawn boxes on the ground, flat stone (gacuk), hopping on one foot.</li>
          <li><strong>Congklak:</strong> wooden board with 16 holes, 98 cowrie shells/seeds (biji congklak).</li>
          <li><strong>Egrang (Stilts):</strong> two long bamboo poles with footrests, balancing high.</li>
          <li><strong>Gasing (Spinning Top):</strong> wooden top with string/rope.</li>
          <li><strong>Tarik Tambang (Tug of War):</strong> thick long rope, strength, two teams.</li>
          <li><strong>Modern Games:</strong> Video games, online multiplayer, console, smartphone screen.</li>
        </ul>
      </div>

      <div class="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-2">
        <h3 class="font-bold text-indigo-900 text-sm">📢 2. Grammar: Imperative Sentences (Kalimat Perintah)</h3>
        <p class="text-slate-600">Used to give rules and step-by-step instructions. Starts directly with Base Verb (V1):</p>
        <ul class="space-y-1 text-slate-700 list-disc pl-4">
          <li><strong>Positive:</strong> <em>"Throw the stone into the first square!"</em>, <em>"Hop on one foot!"</em></li>
          <li><strong>Negative (Don't + V1):</strong> <em>"Don't step on the line!"</em>, <em>"Don't touch the rope!"</em></li>
          <li><strong>Sequence Words:</strong> First, Second, Next, Then, After that, Finally.</li>
        </ul>
      </div>
    </div>
  </section>
</div>
`
};

// E. BAHASA INDONESIA BAB 6 (IKLAN, DEBAT, SCI-FI, KUITANSI & KONJUNGSI)
richModules['BIN-B6'] = {
  title: "Bab 6: Mari Kita Hidup Sehat (Iklan, Teks Debat, Cerita Fiksi Ilmiah, Kuitansi & Kata Hubung)",
  html: `
<div class="space-y-8 text-slate-800">
  <section class="space-y-4">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-xs font-bold uppercase tracking-wider">
      <span>📢</span> Pilar 1 & 2: Materi Inti Bahasa Indonesia Bab 6
    </div>
    <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
      Kompetensi Utama Bab 6: Dari Bahasa Iklan hingga Kuitansi Pembayaran
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
      <div class="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-2">
        <h3 class="font-bold text-purple-900 text-sm">📣 1. Menelaah Iklan & Ciri Bahasanya</h3>
        <p class="text-slate-600 leading-relaxed">
          Iklan adalah pemberitahuan kepada khalayak tentang barang/jasa. Sifat bahasa iklan:
        </p>
        <ul class="space-y-1 text-slate-700 list-disc pl-4">
          <li><strong>Persuasif:</strong> Bersifat mengajak atau membujuk pembaca agar tertarik.</li>
          <li><strong>Sugestif:</strong> Memberi pengaruh pikiran positif dan meyakinkan konsumen.</li>
          <li><strong>Informatif & Komunikatif:</strong> Jelas, padat, dan mudah dipahami.</li>
          <li><strong>Jenis Iklan:</strong> Iklan Komersial (mencari keuntungan penjualan) vs Iklan Layanan Masyarakat (pesan sosial tanpa mencari laba, misal ajakan vaksin atau buang sampah).</li>
        </ul>
      </div>

      <div class="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-2">
        <h3 class="font-bold text-teal-900 text-sm">🗣️ 2. Etika & Unsur Teks Debat</h3>
        <p class="text-slate-600 leading-relaxed">
          Debat adalah pembahasan dan pertukaran pendapat mengenai suatu isu dengan saling memberikan alasan mempertahankan pendapat.
        </p>
        <ul class="space-y-1 text-slate-700 list-disc pl-4">
          <li><strong>Tim Afirmasi (Pro):</strong> Pihak yang menyetujui mosi/isu debat.</li>
          <li><strong>Tim Oposisi (Kontra):</strong> Pihak yang menolak/menentang mosi debat.</li>
          <li><strong>Tim Netral:</strong> Memberikan argumen penengah yang seimbang.</li>
          <li><strong>Moderator:</strong> Memimpin jalannya debat secara netral dan adil.</li>
          <li><strong>Notulis:</strong> Mencatat hasil, poin argumen, dan kesimpulan debat.</li>
        </ul>
      </div>

      <div class="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-2">
        <h3 class="font-bold text-indigo-900 text-sm">🚀 3. Teks Cerita Fiksi Ilmiah (Sci-Fi)</h3>
        <p class="text-slate-600 leading-relaxed">
          Cerita rekaan yang berlatar perkembangan sains dan teknologi di masa depan.
        </p>
        <ul class="space-y-1 text-slate-700 list-disc pl-4">
          <li>Ciri khas: latar masa depan, penjelajahan antariksa, robot kecerdasan buatan (AI), mesin waktu, atau laboratorium canggih.</li>
          <li>Meskipun khayalan (fiksi), ceritanya tetap berdasar pada logika teori sains ilmiah.</li>
        </ul>
      </div>

      <div class="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-2">
        <h3 class="font-bold text-rose-900 text-sm">🧾 4. Kuitansi & Tanda Pembayaran Sah</h3>
        <p class="text-slate-600 leading-relaxed">
          Kuitansi adalah surat tanda bukti penerimaan uang yang ditandatangani oleh penerima uang.
        </p>
        <ul class="space-y-1 text-slate-700 list-disc pl-4">
          <li><strong>Elemen Wajib:</strong> Nomor kuitansi, nama pembayar (Telah terima dari), jumlah uang (angka & huruf terbilang), tujuan pembayaran (Untuk pembayaran), tempat & tanggal transaksi, serta tanda tangan & stempel penerima.</li>
          <li>Jika ada meterai, tanda tangan wajib mengenai sebagian permukaan meterai agar sah secara hukum perdata.</li>
        </ul>
      </div>
    </div>
  </section>
</div>
`
};

// Write updated rich_modules.json
fs.writeFileSync(path.join(cwd, 'rich_modules.json'), JSON.stringify(richModules, null, 2), 'utf8');
console.log('✅ rich_modules.json berhasil diperbarui dengan semua modul lengkap.');

// -----------------------------------------------------------------------------
// 3. BUILD QUESTION BANK FROM PARSED FILES
// -----------------------------------------------------------------------------
global.window = global;
delete require.cache[require.resolve('./data_sd6.js')];
require('./data_sd6.js');

let allQuestions = global.DEFAULT_QUESTIONS_SD6 || [];
// Keep MTK-B1 questions and other existing starter questions
console.log('Existing questions in data_sd6.js:', allQuestions.length);

const newQuestionList = [];

// A. PAI ZISWAF QUESTIONS
parsedPai.pg.forEach((q, i) => {
  newQuestionList.push({
    id: `SD6-PAI-ZIS-${String(i+1).padStart(2, '0')}`,
    subject: "PAI",
    semester: 2,
    moduleId: "PAI-B6",
    topic: "Bab 6: Indahnya Berbagi Melalui ZISWAF",
    type: "PG",
    difficulty: i < 3 ? "Mudah" : (i < 7 ? "Sedang" : "Sulit"),
    bloom: "C2",
    points: 10,
    timeMinutes: 2,
    question: q.q,
    options: q.opt,
    correctIndex: q.ans,
    explanation: q.exp || "Hukum dan ketentuan syariat Islam tentang ZISWAF."
  });
});

parsedPai.isian.forEach((q, i) => {
  newQuestionList.push({
    id: `SD6-PAI-ZIS-IS-${String(i+1).padStart(2, '0')}`,
    subject: "PAI",
    semester: 2,
    moduleId: "PAI-B6",
    topic: "Bab 6: Indahnya Berbagi Melalui ZISWAF",
    type: "PG",
    difficulty: "Sedang",
    bloom: "C3",
    points: 10,
    timeMinutes: 2,
    question: q.q,
    options: [q.ans, "Zakat Mal", "Fisabilillah", "Infak sukarela"],
    correctIndex: 0,
    explanation: q.clue || `Jawaban yang tepat adalah: ${q.ans}`
  });
});

// B. IPAS ENERGI QUESTIONS
parsedIpas.pg.forEach((q, i) => {
  newQuestionList.push({
    id: `SD6-IPA-NRG-${String(i+1).padStart(2, '0')}`,
    subject: "IPAS",
    semester: 2,
    moduleId: "IPAS-B6",
    topic: "Bab 6 & 7: Energi Terbarukan & Pelestarian Lingkungan",
    type: "PG",
    difficulty: i < 3 ? "Mudah" : (i < 7 ? "Sedang" : "Sulit"),
    bloom: "C2",
    points: 10,
    timeMinutes: 2,
    question: q.q,
    options: q.opt,
    correctIndex: q.ans,
    explanation: q.exp || "Konsep energi terbarukan dan ramah lingkungan."
  });
});

parsedIpas.isian.forEach((q, i) => {
  newQuestionList.push({
    id: `SD6-IPA-NRG-IS-${String(i+1).padStart(2, '0')}`,
    subject: "IPAS",
    semester: 2,
    moduleId: "IPAS-B6",
    topic: "Bab 6 & 7: Energi Terbarukan & Pelestarian Lingkungan",
    type: "PG",
    difficulty: "Sedang",
    bloom: "C3",
    points: 10,
    timeMinutes: 2,
    question: q.q,
    options: [q.ans, "Energi Angin", "Energi Nuklir", "Bahan bakar fosil"],
    correctIndex: 0,
    explanation: q.clue || `Jawaban yang tepat adalah: ${q.ans}`
  });
});

// C. BAHASA INDONESIA BAB 4 & 5 QUESTIONS
parsedBind45.pg.forEach((q, i) => {
  newQuestionList.push({
    id: `SD6-BIN-B45-${String(i+1).padStart(2, '0')}`,
    subject: "Bahasa Indonesia",
    semester: 1,
    moduleId: "BIN-B4",
    topic: "Bab 4 & 5: Teks Eksplanasi, Poster, Pidato & Blog",
    type: "PG",
    difficulty: i < 3 ? "Mudah" : (i < 7 ? "Sedang" : "Sulit"),
    bloom: "C2",
    points: 10,
    timeMinutes: 2,
    question: q.q,
    options: q.opt,
    correctIndex: q.ans,
    explanation: q.exp || "Struktur teks dan kaidah bahasa Indonesia."
  });
});

// D. BAHASA INDONESIA BAB 6 QUESTIONS (50 SOAL LENGKAP)
parsedBind6.forEach((q, i) => {
  newQuestionList.push({
    id: `SD6-BIN-B6-${String(i+1).padStart(2, '0')}`,
    subject: "Bahasa Indonesia",
    semester: 2,
    moduleId: "BIN-B6",
    topic: "Bab 6: Mari Kita Hidup Sehat (Iklan, Debat, Sci-Fi & Kuitansi)",
    type: "PG",
    difficulty: i < 15 ? "Mudah" : (i < 35 ? "Sedang" : "Sulit"),
    bloom: i < 15 ? "C2" : (i < 35 ? "C3" : "C4"),
    points: 10,
    timeMinutes: 2,
    question: q.q,
    options: q.opt,
    correctIndex: q.ans,
    explanation: q.exp || "Pemahaman teks iklan, debat, fiksi ilmiah, kuitansi, dan konjungsi."
  });
});

// E. BAHASA INGGRIS UNIT 4 QUESTIONS (50 SOAL LENGKAP)
parsedEng4.forEach((q, i) => {
  newQuestionList.push({
    id: `SD6-ENG-U4-${String(i+1).padStart(2, '0')}`,
    subject: "Bahasa Inggris",
    semester: 2,
    moduleId: "ENG-B4",
    topic: "Unit 4: Traditional and Modern Games (Rules & Imperatives)",
    type: "PG",
    difficulty: i < 15 ? "Mudah" : (i < 35 ? "Sedang" : "Sulit"),
    bloom: i < 15 ? "C2" : (i < 35 ? "C3" : "C4"),
    points: 10,
    timeMinutes: 2,
    question: q.q,
    options: q.opt,
    correctIndex: q.ans,
    explanation: q.exp || "English vocabulary and grammar on games and instructions."
  });
});

console.log(`✅ Berhasil menyusun ${newQuestionList.length} butir soal baru terintegrasi.`);

// Merge with existing questions (avoid duplicate IDs)
const newIds = new Set(newQuestionList.map(q => q.id));
const filteredExisting = allQuestions.filter(q => !newIds.has(q.id));
const combinedQuestions = [...filteredExisting, ...newQuestionList];
console.log(`Total bank soal sekarang: ${combinedQuestions.length} butir soal.`);

// -----------------------------------------------------------------------------
// 4. UPDATE KURIKULUM_SD6 (COMPLETE MAPPING)
// -----------------------------------------------------------------------------
let curList = global.KURIKULUM_SD6 || [];

// Ensure BIN-B4, BIN-B5, BIN-B6 exist and are complete
const binIdx = curList.findIndex(m => m.id === 'BIN-B3');
if (binIdx !== -1) {
  curList[binIdx] = {
    id: "BIN-B3",
    subject: "Bahasa Indonesia",
    semester: 1,
    bab: "Bab 3: Taman Nasional dan Situs Warisan Dunia",
    summary: "Membaca teks laporan hasil pengamatan, mengidentifikasi ide pokok dan pendukung, serta memperkaya kosakata lingkungan alam.",
    keyPoints: [
      "Struktur laporan hasil pengamatan: Objek, Waktu, Tempat, Hasil Pengamatan, dan Kesimpulan.",
      "Membedakan fakta objektif dengan tanggapan subjektif dalam laporan pengamatan."
    ],
    example: "Laporan kunjungan ke Taman Nasional Komodo di Nusa Tenggara Timur."
  };
}

// Add/Update BIN-B4, BIN-B5, BIN-B6, PAI-B6 if not exist
function upsertModule(mod) {
  const i = curList.findIndex(m => m.id === mod.id);
  if (i >= 0) curList[i] = mod;
  else curList.push(mod);
}

upsertModule({
  id: "BIN-B4",
  subject: "Bahasa Indonesia",
  semester: 2,
  bab: "Bab 4: Belajar Berwirausaha (Teks Eksplanasi & Poster)",
  summary: "Memahami teks eksplanasi ilmiah sebab-akibat, membedakan fakta dan opini, menyimpulkan bacaan, dan merancang poster promosi yang menarik.",
  keyPoints: [
    "Teks eksplanasi menjelaskan proses terjadinya fenomena alam atau sosial secara ilmiah.",
    "Poster memuat gambar menarik, kalimat persuasif ringkas, dan warna kontras untuk menarik perhatian publik."
  ],
  example: "Poster ajakan menjaga kebersihan lingkungan sekolah."
});

upsertModule({
  id: "BIN-B5",
  subject: "Bahasa Indonesia",
  semester: 2,
  bab: "Bab 5: Anak-Anak yang Mengubah Dunia (Pidato & Blog)",
  summary: "Menyusun teks pidato persuasif, memahami bagian pembuka-isi-penutup pidato, etika berpidato, dan menulis artikel blog yang santun.",
  keyPoints: [
    "Bagian pidato: Pembuka (salam & puji syukur), Isi (pesan inti & ajakan), Penutup (kesimpulan, maaf & salam).",
    "Intonasi suara yang jelas, artikulasi tepat, dan kontak mata dengan audiens merupakan kunci keberhasilan berpidato."
  ],
  example: "Naskah pidato peringatan Hari Sumpah Pemuda di sekolah."
});

upsertModule({
  id: "BIN-B6",
  subject: "Bahasa Indonesia",
  semester: 2,
  bab: "Bab 6: Mari Kita Hidup Sehat (Iklan, Debat, Sci-Fi & Kuitansi)",
  summary: "Menelaah ciri bahasa iklan komersial/layanan masyarakat, etika debat afirmasi vs oposisi, unsur cerita fiksi ilmiah (sci-fi), serta format kuitansi resmi.",
  keyPoints: [
    "Ciri bahasa iklan: persuasif, sugestif, informatif, dan komunikatif.",
    "Unsur debat: Mosi, Tim Afirmasi (Pro), Tim Oposisi (Kontra), Tim Netral, Moderator, dan Notulis.",
    "Cerita fiksi ilmiah (Sci-Fi) berlatar kemajuan sains dan teknologi masa depan.",
    "Kuitansi adalah bukti penerimaan uang yang sah secara hukum jika ditandatangani penerima."
  ],
  example: "Menganalisis iklan layanan masyarakat tentang imunisasi anak."
});

upsertModule({
  id: "PAI-B6",
  subject: "PAI",
  semester: 2,
  bab: "Bab 6: Indahnya Berbagi Melalui ZISWAF",
  summary: "Memahami ketentuan syariat Islam tentang Zakat Fitrah, Zakat Mal, Infak, Sedekah, dan Wakaf beserta 8 golongan mustahik dan hikmah sosialnya.",
  keyPoints: [
    "Zakat hukumnya fardhu 'ain (wajib) bagi setiap muslim yang mampu.",
    "Infak berupa harta benda yang dikeluarkan di jalan Allah secara sukarela.",
    "Sedekah memiliki cakupan terluas termasuk senyum, ilmu, dan tenaga.",
    "Wakaf adalah menyerahkan aset tahan lama untuk kepentingan umum umat Islam (pahala jariyah)."
  ],
  example: "Membayar zakat fitrah berupa 2,5 kg beras sebelum pelaksanaan salat Idul Fitri."
});

upsertModule({
  id: "ENG-B4",
  subject: "Bahasa Inggris",
  semester: 2,
  bab: "Unit 4: Traditional and Modern Games (Rules & Instructions)",
  summary: "Mempelajari kosakata aneka permainan tradisional & modern, alat yang digunakan, serta menyusun kalimat perintah (imperatives) untuk aturan bermain.",
  keyPoints: [
    "Traditional games: Engklek (Hopscotch), Congklak, Egrang (Stilts), Tarik Tambang (Tug of War).",
    "Imperative sentences start with Base Verb: 'Throw the dice!', 'Don't touch the rope!'.",
    "Sequence words: First, Second, Next, Then, Finally."
  ],
  example: "First, prepare a flat stone. Next, throw it into the first square."
});

// Update data_sd6.js
const updatedDataSd6 = `/**
 * Bank Soal PintarSD6 - Data Modul Kurikulum & Bank Soal Lengkap
 * Fase C Kelas 6 SD Kurikulum Merdeka
 */

window.KURIKULUM_SD6 = ${JSON.stringify(curList, null, 2)};

window.DEFAULT_QUESTIONS_SD6 = ${JSON.stringify(combinedQuestions, null, 2)};
`;

fs.writeFileSync(path.join(cwd, 'data_sd6.js'), updatedDataSd6, 'utf8');
console.log('✅ data_sd6.js berhasil diperbarui dengan kurikulum dan soal terbaru.');

// -----------------------------------------------------------------------------
// 5. UPDATE index.html
// -----------------------------------------------------------------------------
const idxPath = path.join(cwd, 'index.html');
let h = fs.readFileSync(idxPath, 'utf8');

function matchEnd(src, openPos) {
  const open = src[openPos], close = open === '[' ? ']' : '}';
  let depth = 0, inStr = null;
  for (let k = openPos; k < src.length; k++) {
    const c = src[k];
    if (inStr) {
      if (c === '\\') { k++; continue; }
      if (c === inStr) inStr = null;
      continue;
    }
    if (c === '"' || c === "'" || c === '`') { inStr = c; continue; }
    if (c === open) depth++;
    else if (c === close) { depth--; if (depth === 0) return k; }
  }
  throw new Error('no match');
}

// 1. DEFAULT_RICH_MODULES in index.html
let a = h.indexOf('const DEFAULT_RICH_MODULES = ');
let ob = h.indexOf('{', a);
let ce = matchEnd(h, ob);
h = h.slice(0, ob) + JSON.stringify(richModules) + h.slice(ce + 1);

// 2. KURIKULUM_SD6 in index.html
let sK = h.indexOf('window.KURIKULUM_SD6 = ');
let oK = h.indexOf('[', sK);
let eK = matchEnd(h, oK);
h = h.slice(0, oK) + JSON.stringify(curList, null, 2) + h.slice(eK + 1);

// 3. DEFAULT_QUESTIONS_SD6 in index.html
let sQ = h.indexOf('window.DEFAULT_QUESTIONS_SD6 = ');
let oQ = h.indexOf('[', sQ);
let eQ = matchEnd(h, oQ);
h = h.slice(0, oQ) + JSON.stringify(combinedQuestions, null, 2) + h.slice(eQ + 1);

// 4. Update loadData to ensure all new questions merge into localStorage smoothly
const cleanMergeCode = `questions = [...loaded, ...toAdd];`;
if (!h.includes('const existingIds = new Set(loaded.map(q => q.id));')) {
  console.log('Ensure auto-merge is present in loadData...');
}

fs.writeFileSync(idxPath, h, 'utf8');
console.log('✅ index.html berhasil diperbarui dengan semua modul materi dan soal terpadu!');

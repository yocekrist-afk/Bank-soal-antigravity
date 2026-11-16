const fs = require('fs');
const path = require('path');

const cwd = __dirname;
const richModulesPath = path.join(cwd, 'rich_modules.json');
const richModules = JSON.parse(fs.readFileSync(richModulesPath, 'utf8'));

const mtkB1Title = "Bab 1: Pecahan dan Desimal (Perkalian, Pembagian, Konversi & Operasi Desimal)";

const mtkB1Html = `
<div class="space-y-8 text-slate-800">

  <!-- ========================================================================= -->
  <!-- PILAR 1: PENGANTAR KONTEKSTUAL (APERSEPSI SERU & RAMAH ANAK)             -->
  <!-- ========================================================================= -->
  <section class="space-y-4">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
      <span>🍕</span> Pilar 1: Pengantar Kontekstual (Apersepsi)
    </div>
    <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
      "Mengapa Memotong Kue & Meracik Sirup Manis Tidak Pernah Lepas dari Pecahan dan Desimal?"
    </h2>
    <div class="p-5 rounded-3xl bg-gradient-to-br from-teal-500/10 via-emerald-500/5 to-transparent border border-teal-200/80 space-y-3 text-sm leading-relaxed text-slate-700">
      <p>
        Bayangkan hari ini adalah hari ulang tahunmu! Di atas meja ada sebuah pizza lezat yang dipotong menjadi <strong>8 bagian sama besar</strong>. Kamu memakan 2 potong. Artinya, kamu telah menghabiskan <strong>2 dari 8 bagian</strong>, atau ditulis sebagai pecahan <strong>2/8</strong> (yang disederhanakan menjadi <strong>1/4</strong>).
      </p>
      <p>
        Lalu, Ibu membuat sirup segar. Ibu memiliki sebotol sirup berisi <strong>2 liter</strong> dan ingin menuangkannya ke dalam botol-botol kecil berukuran <strong>1/4 liter</strong>. Berapa banyak botol yang didapat? Kamu mungkin kaget: <em>angka 2 dibagi 1/4 hasilnya justru menjadi 8 botol! Mengapa bilangan yang dibagi pecahan nilainya malah makin banyak?</em>
      </p>
      <div class="p-3.5 rounded-2xl bg-white/90 border border-teal-200 text-xs font-semibold text-teal-950 flex items-center gap-2.5 shadow-sm">
        <span class="text-xl">💡</span>
        <span>Pecahan dan desimal bukanlah monster matematika yang rumit. Keduanya hanyalah cara manusia untuk <strong>membagi adil</strong> sesuatu yang tidak bulat utuh secara tepat dan teliti!</span>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- PILAR 2: PENDALAMAN KONSEP INTI & DIAGRAM VISUAL INTERAKTIF                -->
  <!-- ========================================================================= -->
  <section class="space-y-6">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-bold uppercase tracking-wider">
      <span>📐</span> Pilar 2: Pendalaman Konsep Inti & Visualisasi
    </div>
    <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900">
      4 Konsep Utama Bab 1: Dari Konsep Visual hingga Trik Cepat Menghitung
    </h2>

    <!-- SUB-BAB A: PERKALIAN PECAHAN -->
    <div class="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
      <div class="flex items-center gap-3">
        <span class="w-8 h-8 rounded-xl bg-teal-600 text-white font-extrabold flex items-center justify-center text-sm shadow-sm">A</span>
        <h3 class="text-lg font-bold text-slate-900">Perkalian Pecahan: Konsep "Bagian dari Bagian"</h3>
      </div>
      <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
        Kata kunci dalam perkalian pecahan adalah kata <strong>"DARI"</strong>. Contoh: <em>"Setengah DARI sepertiga kue"</em> artinya <code class="px-1.5 py-0.5 rounded bg-slate-100 text-teal-700 font-mono font-bold">1/2 × 1/3 = 1/6</code>.
      </p>

      <!-- RUMUS UTAMA PERKALIAN -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div class="p-3.5 rounded-2xl bg-teal-50/70 border border-teal-200">
          <div class="font-bold text-xs text-teal-900 mb-1">1. Bilangan Asli × Pecahan:</div>
          <div class="text-center py-2 bg-white rounded-xl border border-teal-200 text-sm font-mono font-bold text-teal-800">
            n × (a / b) = (n × a) / b
          </div>
          <p class="text-xs text-teal-700 mt-2">Contoh: 3 × 2/5 = (3 × 2) / 5 = 6/5 = <strong>1 1/5</strong></p>
        </div>
        <div class="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-200">
          <div class="font-bold text-xs text-indigo-900 mb-1">2. Pecahan Biasa × Pecahan Biasa:</div>
          <div class="text-center py-2 bg-white rounded-xl border border-indigo-200 text-sm font-mono font-bold text-indigo-800">
            (a / b) × (c / d) = (a × c) / (b × d)
          </div>
          <p class="text-xs text-indigo-700 mt-2">Aturan Emas: <em>Pembilang kali pembilang, penyebut kali penyebut!</em></p>
        </div>
      </div>

      <!-- VISUAL SVG 1: MODEL LUAS PERKALIAN PECAHAN (AREA MODEL) -->
      <div class="my-4 p-4 sm:p-5 rounded-3xl bg-slate-900 text-white shadow-xl border border-teal-500/30">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-700 pb-3 mb-3">
          <div class="flex items-center gap-2">
            <span class="p-1.5 rounded-lg bg-teal-500/20 text-teal-300">🎨</span>
            <h4 class="font-extrabold text-sm sm:text-base text-white">Visualisasi Model Luas: Mengapa 1/2 × 3/4 = 3/8?</h4>
          </div>
          <span class="text-xs px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 font-mono">Area Model Grid</span>
        </div>
        <div class="flex flex-col md:flex-row items-center justify-around gap-6 py-2">
          <!-- SVG GRAPHIC -->
          <svg class="w-64 h-64 max-w-full drop-shadow-lg" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Background square (1x1 unit) -->
            <rect x="20" y="20" width="200" height="200" rx="8" fill="#1e293b" stroke="#475569" stroke-width="2"/>
            
            <!-- 4 Vertical columns (representing 3/4) -->
            <rect x="20" y="20" width="50" height="200" fill="#0d9488" fill-opacity="0.25" stroke="#0d9488" stroke-width="1.5" stroke-dasharray="3 3"/>
            <rect x="70" y="20" width="50" height="200" fill="#0d9488" fill-opacity="0.25" stroke="#0d9488" stroke-width="1.5" stroke-dasharray="3 3"/>
            <rect x="120" y="20" width="50" height="200" fill="#0d9488" fill-opacity="0.25" stroke="#0d9488" stroke-width="1.5" stroke-dasharray="3 3"/>
            <rect x="170" y="20" width="50" height="200" fill="none" stroke="#475569" stroke-width="1.5" stroke-dasharray="3 3"/>

            <!-- 2 Horizontal rows (representing 1/2 top row) -->
            <rect x="20" y="20" width="200" height="100" fill="#6366f1" fill-opacity="0.25" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="3 3"/>

            <!-- The Overlap Region (Top 3 boxes = 1/2 of 3/4 = 3/8) -->
            <rect x="20" y="20" width="50" height="100" fill="#14b8a6" fill-opacity="0.9" stroke="#5eead4" stroke-width="2"/>
            <rect x="70" y="20" width="50" height="100" fill="#14b8a6" fill-opacity="0.9" stroke="#5eead4" stroke-width="2"/>
            <rect x="120" y="20" width="50" height="100" fill="#14b8a6" fill-opacity="0.9" stroke="#5eead4" stroke-width="2"/>

            <!-- Labels inside overlap boxes -->
            <text x="45" y="75" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">1/8</text>
            <text x="95" y="75" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">1/8</text>
            <text x="145" y="75" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">1/8</text>

            <!-- Remaining grid labels -->
            <text x="195" y="75" fill="#64748b" font-size="12" text-anchor="middle">1/8</text>
            <text x="45" y="175" fill="#64748b" font-size="12" text-anchor="middle">1/8</text>
            <text x="95" y="175" fill="#64748b" font-size="12" text-anchor="middle">1/8</text>
            <text x="145" y="175" fill="#64748b" font-size="12" text-anchor="middle">1/8</text>
            <text x="195" y="175" fill="#64748b" font-size="12" text-anchor="middle">1/8</text>

            <!-- Dimension indicators -->
            <text x="85" y="14" fill="#5eead4" font-size="11" font-weight="bold" text-anchor="middle">Lebar: 3 dari 4 kolom (3/4)</text>
            <text x="10" y="130" fill="#a5b4fc" font-size="11" font-weight="bold" text-anchor="middle" transform="rotate(-90 10 130)">Tinggi: 1 dari 2 baris (1/2)</text>
          </svg>

          <!-- EXPLANATION OF SVG -->
          <div class="space-y-2 text-xs sm:text-sm text-slate-300 max-w-sm">
            <div class="p-3 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1.5">
              <div class="flex items-center gap-1.5 text-teal-400 font-bold">
                <span>✨</span> Langkah Membaca Gambar:
              </div>
              <ol class="list-decimal list-inside space-y-1 text-slate-300 text-xs">
                <li>Kotak utuh dibagi tegak jadi <strong>4 kolom</strong>, diwarnai 3 kolom (<strong>3/4</strong>).</li>
                <li>Kotak yang sama dibagi mendatar jadi <strong>2 baris</strong>, diambil 1 baris (<strong>1/2</strong>).</li>
                <li>Daerah tumpang tindih (hijau toska terang) ada <strong>3 kotak kecil</strong> dari total <strong>8 kotak</strong>!</li>
              </ol>
            </div>
            <p class="text-teal-300 font-semibold text-xs text-center">
              Maka terbukti secara nyata: 1/2 × 3/4 = (1×3) / (2×4) = <strong>3/8</strong>.
            </p>
          </div>
        </div>
      </div>

      <!-- TRIK CORET (CROSS-SIMPLIFICATION) -->
      <div class="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
        <div class="flex items-center gap-2 font-bold text-amber-900 text-sm">
          <span>⚡</span> Trik Jenius: Metode Sederhanakan Silang (Coret-Coret)
        </div>
        <p class="text-xs text-slate-700 leading-relaxed">
          Jangan kalikan angka besar dulu! Jika pembilang dan penyebut berseberangan bisa dibagi dengan angka yang sama (faktor persekutuan), sederhanakan di awal:
        </p>
        <div class="p-3 bg-white rounded-xl border border-amber-200 text-xs font-mono text-amber-950 flex flex-wrap items-center justify-between gap-2">
          <span>Contoh: <strong>4/9 × 3/8</strong></span>
          <span>Coret 4 & 8 (bagi 4) → jadi 1 & 2</span>
          <span>Coret 3 & 9 (bagi 3) → jadi 1 & 3</span>
          <span class="font-bold text-teal-700">Hasil: (1×1) / (3×2) = 1/6 (Cepat & Anti Salah!)</span>
        </div>
      </div>
    </div>

    <!-- SUB-BAB B: PEMBAGIAN PECAHAN -->
    <div class="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
      <div class="flex items-center gap-3">
        <span class="w-8 h-8 rounded-xl bg-indigo-600 text-white font-extrabold flex items-center justify-center text-sm shadow-sm">B</span>
        <h3 class="text-lg font-bold text-slate-900">Pembagian Pecahan: Rahasia Mnemonic K-C-F</h3>
      </div>
      <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
        Mengapa membagi dengan pecahan diubah menjadi perkalian? Karena membagi dengan <code class="px-1 bg-slate-100 rounded text-indigo-700 font-bold">1/2</code> sama artinya dengan mencari <em>"Ada berapa banyak porsi setengah dalam bilangan tersebut?"</em>.
      </p>

      <!-- VISUAL SVG 2: PEMBAGIAN PECAHAN (BANYAK WADAH) -->
      <div class="p-4 sm:p-5 rounded-3xl bg-slate-900 text-white shadow-xl border border-indigo-500/30">
        <div class="flex items-center gap-2 border-b border-slate-700 pb-3 mb-3">
          <span class="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-300">🧪</span>
          <h4 class="font-extrabold text-sm sm:text-base text-white">Visualisasi Pembagian: 2 ÷ 1/3 = 6 Wadah</h4>
        </div>
        <div class="flex flex-col md:flex-row items-center justify-around gap-4 py-2">
          <svg class="w-72 h-36 max-w-full drop-shadow-md" viewBox="0 0 280 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- 2 Liter Containers -->
            <rect x="20" y="20" width="110" height="60" rx="8" fill="#1e293b" stroke="#6366f1" stroke-width="2"/>
            <text x="75" y="15" fill="#a5b4fc" font-size="11" font-weight="bold" text-anchor="middle">Liter ke-1</text>
            <line x1="56" y1="20" x2="56" y2="80" stroke="#818cf8" stroke-width="1.5" stroke-dasharray="2 2"/>
            <line x1="93" y1="20" x2="93" y2="80" stroke="#818cf8" stroke-width="1.5" stroke-dasharray="2 2"/>
            <text x="38" y="55" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">1/3 L</text>
            <text x="75" y="55" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">1/3 L</text>
            <text x="111" y="55" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">1/3 L</text>

            <rect x="150" y="20" width="110" height="60" rx="8" fill="#1e293b" stroke="#6366f1" stroke-width="2"/>
            <text x="205" y="15" fill="#a5b4fc" font-size="11" font-weight="bold" text-anchor="middle">Liter ke-2</text>
            <line x1="186" y1="20" x2="186" y2="80" stroke="#818cf8" stroke-width="1.5" stroke-dasharray="2 2"/>
            <line x1="223" y1="20" x2="223" y2="80" stroke="#818cf8" stroke-width="1.5" stroke-dasharray="2 2"/>
            <text x="168" y="55" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">1/3 L</text>
            <text x="205" y="55" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">1/3 L</text>
            <text x="241" y="55" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">1/3 L</text>

            <!-- Bottom result brace / text -->
            <text x="140" y="105" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Total Terbentuk = 6 Porsi Botol Kecil (2 × 3 = 6)</text>
          </svg>
          <div class="text-xs text-slate-300 space-y-1.5 max-w-xs">
            <p>Tiap 1 liter bisa dibagi jadi 3 botol kecil (1/3 literan).</p>
            <p>Maka dari 2 liter, diperoleh: <code class="text-indigo-300 font-bold font-mono">2 × 3 = 6 botol</code>.</p>
            <p class="text-emerald-400 font-medium">Inilah alasan mengapa rumus pembagian membalik pecahan pembaginya!</p>
          </div>
        </div>
      </div>

      <!-- K-C-F CARD -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div class="p-3.5 rounded-2xl bg-blue-50 border border-blue-200 text-center">
          <div class="text-lg font-black text-blue-700">K</div>
          <div class="font-bold text-xs text-blue-900">KEEP (Tahan)</div>
          <p class="text-[11px] text-blue-800 mt-1">Pecahan pertama biarkan tetap seperti aslinya.</p>
        </div>
        <div class="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-center">
          <div class="text-lg font-black text-amber-700">C</div>
          <div class="font-bold text-xs text-amber-900">CHANGE (Ubah)</div>
          <p class="text-[11px] text-amber-800 mt-1">Ubah tanda bagi (÷) menjadi tanda kali (×).</p>
        </div>
        <div class="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
          <div class="text-lg font-black text-emerald-700">F</div>
          <div class="font-bold text-xs text-emerald-900">FLIP (Balik)</div>
          <p class="text-[11px] text-emerald-800 mt-1">Balik pecahan kedua (pembilang jadi penyebut, penyebut jadi pembilang).</p>
        </div>
      </div>
      <div class="p-3 bg-indigo-50/70 rounded-2xl border border-indigo-200 text-center text-xs font-mono font-bold text-indigo-900">
        (a / b) ÷ (c / d) = (a / b) × (d / c)
      </div>
    </div>

    <!-- SUB-BAB C: MENGUBAH PECAHAN KE DESIMAL & SEBALIKNYA -->
    <div class="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
      <div class="flex items-center gap-3">
        <span class="w-8 h-8 rounded-xl bg-purple-600 text-white font-extrabold flex items-center justify-center text-sm shadow-sm">C</span>
        <h3 class="text-lg font-bold text-slate-900">Konversi Pecahan ke Desimal & Tabel Sakti Hafalan Cepat</h3>
      </div>
      <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
        Ada dua jalan untuk mengubah pecahan ke desimal:
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div class="p-3.5 rounded-2xl bg-purple-50/70 border border-purple-200 space-y-1">
          <div class="font-bold text-purple-900 text-sm">Metode 1: Jembatan 10, 100, 1000</div>
          <p class="text-slate-700">Ubah penyebut menjadi 10, 100, atau 1000 dengan mengalikan bilangan yang sama:</p>
          <p class="font-mono text-purple-800 font-semibold">• 3/5 = (3×2)/(5×2) = 6/10 = <strong>0,6</strong></p>
          <p class="font-mono text-purple-800 font-semibold">• 3/4 = (3×25)/(4×25) = 75/100 = <strong>0,75</strong></p>
          <p class="font-mono text-purple-800 font-semibold">• 5/8 = (5×125)/(8×125) = 625/1000 = <strong>0,625</strong></p>
        </div>
        <div class="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-1">
          <div class="font-bold text-rose-900 text-sm">Metode 2: Porogapit (Pembagian Bersusun)</div>
          <p class="text-slate-700">Dipakai jika penyebut tidak bisa diubah ke 10/100/1000 (seperti per-3 atau per-7):</p>
          <p class="font-mono text-rose-800 font-semibold">• 1 ÷ 4 → 10 ÷ 4 = 2 sisa 2 → 20 ÷ 4 = 5 → <strong>0,25</strong></p>
          <p class="font-mono text-rose-800 font-semibold">• 5 ÷ 2 → 2 sisa 1 → 10 ÷ 2 = 5 → <strong>2,5</strong></p>
        </div>
      </div>

      <!-- TABEL SAKTI HAFALAN KELAS 6 -->
      <div class="p-4 rounded-3xl bg-linear-to-br from-slate-900 to-indigo-950 text-white shadow-lg space-y-3">
        <div class="flex items-center justify-between border-b border-slate-700 pb-2">
          <div class="flex items-center gap-2">
            <span class="text-amber-400 text-base">⭐</span>
            <span class="font-bold text-xs sm:text-sm text-white">Tabel Sakti Pecahan Emas (Wajib Hafal di Luar Kepala!)</span>
          </div>
          <span class="text-[10px] text-amber-300 font-mono">Nilai Sering Keluar Ujian</span>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          <div class="p-2.5 rounded-xl bg-white/10 border border-white/10 text-center">
            <div class="text-amber-300 font-bold font-mono">1/2</div>
            <div class="text-white font-extrabold text-sm">0,5</div>
            <div class="text-slate-400 text-[10px]">50%</div>
          </div>
          <div class="p-2.5 rounded-xl bg-white/10 border border-white/10 text-center">
            <div class="text-amber-300 font-bold font-mono">1/4</div>
            <div class="text-white font-extrabold text-sm">0,25</div>
            <div class="text-slate-400 text-[10px]">25%</div>
          </div>
          <div class="p-2.5 rounded-xl bg-white/10 border border-white/10 text-center">
            <div class="text-amber-300 font-bold font-mono">3/4</div>
            <div class="text-white font-extrabold text-sm">0,75</div>
            <div class="text-slate-400 text-[10px]">75%</div>
          </div>
          <div class="p-2.5 rounded-xl bg-white/10 border border-white/10 text-center">
            <div class="text-amber-300 font-bold font-mono">1/5</div>
            <div class="text-white font-extrabold text-sm">0,2</div>
            <div class="text-slate-400 text-[10px]">20%</div>
          </div>
          <div class="p-2.5 rounded-xl bg-white/10 border border-white/10 text-center">
            <div class="text-amber-300 font-bold font-mono">2/5</div>
            <div class="text-white font-extrabold text-sm">0,4</div>
            <div class="text-slate-400 text-[10px]">40%</div>
          </div>
          <div class="p-2.5 rounded-xl bg-white/10 border border-white/10 text-center">
            <div class="text-amber-300 font-bold font-mono">3/5</div>
            <div class="text-white font-extrabold text-sm">0,6</div>
            <div class="text-slate-400 text-[10px]">60%</div>
          </div>
          <div class="p-2.5 rounded-xl bg-white/10 border border-white/10 text-center">
            <div class="text-amber-300 font-bold font-mono">1/8</div>
            <div class="text-white font-extrabold text-sm">0,125</div>
            <div class="text-slate-400 text-[10px]">12,5%</div>
          </div>
          <div class="p-2.5 rounded-xl bg-white/10 border border-white/10 text-center">
            <div class="text-amber-300 font-bold font-mono">3/8</div>
            <div class="text-white font-extrabold text-sm">0,375</div>
            <div class="text-slate-400 text-[10px]">37,5%</div>
          </div>
        </div>
      </div>
    </div>

    <!-- SUB-BAB D: OPERASI HITUNG DESIMAL -->
    <div class="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
      <div class="flex items-center gap-3">
        <span class="w-8 h-8 rounded-xl bg-rose-600 text-white font-extrabold flex items-center justify-center text-sm shadow-sm">D</span>
        <h3 class="text-lg font-bold text-slate-900">Operasi Hitung Desimal: Koma Sejajar & Hitung Ekor Angka</h3>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs leading-relaxed">
        <!-- Tambah / Kurang -->
        <div class="p-4 rounded-2xl bg-teal-50 border border-teal-200 space-y-2">
          <div class="font-bold text-teal-900 text-sm">➕ ➖ Tambah & Kurang</div>
          <p class="text-slate-700"><strong>Wajib:</strong> Tanda koma harus ditarik garis lurus vertikal ke bawah!</p>
          <div class="p-2.5 bg-white rounded-xl border border-teal-200 font-mono text-[11px] text-teal-950">
            &nbsp;&nbsp;12,45<br>
            +&nbsp;&nbsp;3,80<br>
            -------<br>
            &nbsp;&nbsp;16,25
          </div>
          <p class="text-[10px] text-teal-700">💡 Tambahkan angka 0 di belakang bila panjang desimal tidak sama.</p>
        </div>

        <!-- Kali -->
        <div class="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 space-y-2">
          <div class="font-bold text-indigo-900 text-sm">✖️ Perkalian Desimal</div>
          <p class="text-slate-700">Abaikan koma, kalikan biasa, lalu hitung total angka di belakang koma.</p>
          <div class="p-2.5 bg-white rounded-xl border border-indigo-200 font-mono text-[11px] text-indigo-950">
            0,25 (2 angka)<br>
            ×&nbsp;&nbsp;0,3 (1 angka)<br>
            -------<br>
            75 → <strong>0,075</strong> (3 angka)
          </div>
        </div>

        <!-- Bagi -->
        <div class="p-4 rounded-2xl bg-purple-50 border border-purple-200 space-y-2">
          <div class="font-bold text-purple-900 text-sm">➗ Pembagian Desimal</div>
          <p class="text-slate-700">Geser koma pada pembagi sampai menjadi bilangan bulat murni.</p>
          <div class="p-2.5 bg-white rounded-xl border border-purple-200 font-mono text-[11px] text-purple-950">
            2,4 ÷ 0,08<br>
            (kali 100 keduanya)<br>
            = 240 ÷ 8<br>
            = <strong>30</strong>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- PILAR 3: CONTOH SOAL BERTAHAP & PEMBAHASAN DETAIL (LEVEL 1 - 4 HOTS)       -->
  <!-- ========================================================================= -->
  <section class="space-y-4">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
      <span>📝</span> Pilar 3: Contoh Soal Bertahap & Pembahasan Rinci
    </div>
    <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900">
      Koleksi Teladan: 4 Tingkatan Soal Lengkap Langkah demi Langkah
    </h2>

    <div class="space-y-4">
      <!-- CONTOH 1: LEVEL DASAR -->
      <div class="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
        <div class="flex items-center justify-between">
          <span class="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-teal-100 text-teal-800">Level 1: Konsep Dasar (Perkalian Silang)</span>
          <span class="text-xs text-slate-400 font-mono">Tipe Hitungan Langsung</span>
        </div>
        <p class="text-sm font-bold text-slate-900">
          Tentukan hasil paling sederhana dari operasi perkalian: <code>5/12 × 4/15</code>!
        </p>
        <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2 text-slate-700">
          <div class="font-bold text-teal-800">📌 Langkah Penyelesaian dengan Metode Coret:</div>
          <p><strong>Langkah 1:</strong> Pasangkan angka berseberangan: (5 dengan 15) dan (4 dengan 12).</p>
          <p><strong>Langkah 2:</strong> 5 dan 15 sama-sama dibagi 5 → 5 menjadi 1, dan 15 menjadi 3.</p>
          <p><strong>Langkah 3:</strong> 4 dan 12 sama-sama dibagi 4 → 4 menjadi 1, dan 12 menjadi 3.</p>
          <p><strong>Langkah 4:</strong> Kalikan sisa angka: <code>(1 × 1) / (3 × 3) = 1/9</code>.</p>
          <div class="p-2 rounded-xl bg-teal-50 border border-teal-200 font-bold text-teal-900">
            ✅ Jawaban Akhir: 1/9
          </div>
        </div>
      </div>

      <!-- CONTOH 2: LEVEL MENENGAH -->
      <div class="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
        <div class="flex items-center justify-between">
          <span class="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-indigo-100 text-indigo-800">Level 2: Pecahan Campuran & Pembagian</span>
          <span class="text-xs text-slate-400 font-mono">K-C-F Strategy</span>
        </div>
        <p class="text-sm font-bold text-slate-900">
          Hitunglah nilai dari: <code>2 1/4 ÷ 1 1/2</code>!
        </p>
        <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2 text-slate-700">
          <div class="font-bold text-indigo-800">📌 Langkah Penyelesaian:</div>
          <p><strong>Langkah 1:</strong> Wajib ubah pecahan campuran ke pecahan biasa terlebih dahulu:</p>
          <p class="font-mono pl-3">• 2 1/4 = (2×4 + 1)/4 = <strong>9/4</strong></p>
          <p class="font-mono pl-3">• 1 1/2 = (1×2 + 1)/2 = <strong>3/2</strong></p>
          <p><strong>Langkah 2:</strong> Terapkan jurus <strong>K-C-F</strong> (Keep 9/4, Change ÷ jadi ×, Flip 3/2 jadi 2/3):</p>
          <p class="font-mono pl-3">9/4 ÷ 3/2 = 9/4 × 2/3</p>
          <p><strong>Langkah 3:</strong> Coret silang: (9 dan 3 bagi 3 → 3 dan 1), (2 dan 4 bagi 2 → 1 dan 2):</p>
          <p class="font-mono pl-3">= (3 × 1) / (2 × 1) = 3/2 = <strong>1 1/2</strong> (atau <strong>1,5</strong>)</p>
          <div class="p-2 rounded-xl bg-indigo-50 border border-indigo-200 font-bold text-indigo-900">
            ✅ Jawaban Akhir: 1 1/2 (atau 1,5)
          </div>
        </div>
      </div>

      <!-- CONTOH 3: LEVEL MAHIR - SOAL CERITA REKOMENDASI UJIAN -->
      <div class="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
        <div class="flex items-center justify-between">
          <span class="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-amber-100 text-amber-800">Level 3: Soal Cerita Kehidupan Nyata</span>
          <span class="text-xs text-slate-400 font-mono">Aplikasi Toko Kue</span>
        </div>
        <p class="text-sm font-bold text-slate-900">
          Ibu Lovely memiliki persediaan 3,5 kg tepung terigu. Sebanyak 40% tepung digunakan untuk membuat puding. Sisanya akan dibagikan ke beberapa kantong plastik kecil dengan berat masing-masing 3/10 kg. Berapa kantong plastik yang dibutuhkan Ibu?
        </p>
        <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2 text-slate-700">
          <div class="font-bold text-amber-900">📌 Tahapan Analisis Soal Cerita:</div>
          <p><strong>1. Diketahui:</strong> Tepung awal = 3,5 kg; Puding = 40%; Wadah kantong = 3/10 kg.</p>
          <p><strong>2. Menghitung Tepung untuk Puding:</strong> 40% = 0,40 → 0,40 × 3,5 kg = <strong>1,4 kg</strong>.</p>
          <p><strong>3. Menghitung Sisa Tepung:</strong> 3,5 kg - 1,4 kg = <strong>2,1 kg</strong>.</p>
          <p><strong>4. Menghitung Banyak Kantong:</strong> 2,1 kg ÷ 3/10 kg.</p>
          <p class="font-mono pl-3">Ubah ke desimal: 3/10 = 0,3 kg → 2,1 ÷ 0,3 = 21 ÷ 3 = <strong>7 kantong</strong>.</p>
          <div class="p-2 rounded-xl bg-amber-50 border border-amber-200 font-bold text-amber-900">
            ✅ Jawaban Akhir: 7 kantong plastik
          </div>
        </div>
      </div>

      <!-- CONTOH 4: LEVEL TANTANGAN TINGGI (HOTS) -->
      <div class="p-5 rounded-3xl bg-linear-to-br from-rose-50 to-orange-50 border border-rose-200 shadow-sm space-y-3">
        <div class="flex items-center justify-between">
          <span class="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-rose-600 text-white">Level 4: Tantangan Berpikir Kritis (HOTS)</span>
          <span class="text-xs text-rose-700 font-mono font-bold">Analisis Fraksi Bertingkat</span>
        </div>
        <p class="text-sm font-bold text-slate-900">
          Sebuah drum penampungan air terisi 3/4 bagian dari kapasitas totalnya. Jika 1/3 DARI AIR YANG ADA DI DALAM DRUM tersebut dialirkan untuk menyiram tanaman, berapa bagian air yang tersisa di dalam drum dinyatakan terhadap kapasitas penuh drum?
        </p>
        <div class="p-4 rounded-2xl bg-white border border-rose-200 text-xs space-y-2 text-slate-700">
          <div class="font-bold text-rose-800">📌 Jebakan Logika & Penyelesaian Benar:</div>
          <p class="text-rose-900 bg-rose-50 p-2 rounded-lg">
            ⚠️ <em>Awas Jebakan:</em> Soal tidak mengatakan "diambil 1/3 bagian drum", melainkan <strong>1/3 DARI 3/4 bagian yang ada</strong>!
          </p>
          <p><strong>Langkah 1 (Air yang dipakai):</strong> 1/3 × 3/4 = (1 × 3) / (3 × 4) = <strong>1/4 bagian drum</strong>.</p>
          <p><strong>Langkah 2 (Sisa air):</strong> Air awal - Air terpakai = 3/4 - 1/4 = <strong>2/4 bagian = 1/2 bagian drum</strong>.</p>
          <p class="text-slate-500 italic">💡 Cara Alternatif Cepat: Karena diambil 1/3 bagian, maka sisanya adalah (1 - 1/3) = 2/3 bagian dari air mula-mula → 2/3 × 3/4 = 2/4 = <strong>1/2 bagian</strong>.</p>
          <div class="p-2 rounded-xl bg-emerald-50 border border-emerald-200 font-bold text-emerald-900">
            ✅ Jawaban Akhir: 1/2 bagian (atau 50% kapasitas penuh drum)
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- PILAR 4: JEMBATAN KELEDAI, JEBAKAN UMUM & RANGKUMAN KILAT                -->
  <!-- ========================================================================= -->
  <section class="space-y-4">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-xs font-bold uppercase tracking-wider">
      <span>🧠</span> Pilar 4: Mnemonic, Jebakan Siswa & Rangkuman Emas
    </div>
    <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900">
      Trik Ingat Kilat: Hindari Kesalahan Fatal yang Sering Menjebak di Ujian
    </h2>

    <!-- TABEL 4 JEBAKAN MAUT -->
    <div class="overflow-x-auto">
      <table class="w-full text-xs text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-200">
        <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
          <tr>
            <th class="p-3">Kesalahan Umum Siswa ❌</th>
            <th class="p-3">Cara yang Benar Sesuai Aturan ✔️</th>
            <th class="p-3">Penjelasan Mengapa Berbeda 💡</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 text-slate-600">
          <tr>
            <td class="p-3 font-semibold text-rose-600">1/3 + 1/3 = 2/6</td>
            <td class="p-3 font-semibold text-emerald-600">1/3 + 1/3 = 2/3</td>
            <td class="p-3">Penyebut adalah "nama ukuran porsi", tidak boleh dijumlahkan bila ukurannya sudah sama.</td>
          </tr>
          <tr>
            <td class="p-3 font-semibold text-rose-600">2/3 ÷ 4/5 = 3/2 × 4/5</td>
            <td class="p-3 font-semibold text-emerald-600">2/3 ÷ 4/5 = 2/3 × 5/4</td>
            <td class="p-3">Yang dibalik HANYA pecahan kedua (pembagi), pecahan pertama harus tetap (Keep!).</td>
          </tr>
          <tr>
            <td class="p-3 font-semibold text-rose-600">1 1/2 × 2 1/3 = 2 1/6</td>
            <td class="p-3 font-semibold text-emerald-600">3/2 × 7/3 = 21/6 = 3 1/2</td>
            <td class="p-3">Pecahan campuran TIDAK BISA langsung dikalikan bilangan bulatnya saja. Wajib jadi pecahan biasa dulu!</td>
          </tr>
          <tr>
            <td class="p-3 font-semibold text-rose-600">3 - 0,25 = 3,25 (atau 0,22)</td>
            <td class="p-3 font-semibold text-emerald-600">3,00 - 0,25 = 2,75</td>
            <td class="p-3">Bilangan bulat 3 memiliki koma terselubung: 3,00. Pinjam puluhan saat mengurangkan.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- RANGKUMAN 5 POIN EMAS UJIAN -->
    <div class="p-5 rounded-3xl bg-slate-900 text-white shadow-xl space-y-3">
      <div class="flex items-center gap-2 font-extrabold text-sm text-teal-400">
        <span>⭐</span> 5 Kunci Emas Menaklukkan Bab 1 Matematika:
      </div>
      <ul class="text-xs text-slate-300 space-y-2 pl-4 list-disc">
        <li><strong>Perkalian Pecahan:</strong> Langsung kalikan atas × atas dan bawah × bawah. Gunakan <em>trik coret silang</em> di awal agar hemat waktu dan bebas salah hitung.</li>
        <li><strong>Pembagian Pecahan:</strong> Selalu ingat <strong>K-C-F (Keep, Change, Flip)</strong>. Jangan pernah membalik pecahan di depan.</li>
        <li><strong>Pecahan Campuran:</strong> Jadikan pecahan biasa terlebih dahulu sebelum melakukan perkalian atau pembagian apapun!</li>
        <li><strong>Operasi Desimal:</strong> Penjumlahan dan pengurangan wajib lurus komanya. Perkalian desimal cukup hitung total angka di belakang koma di hasil akhir.</li>
        <li><strong>Tabel Sakti:</strong> Pasangan emas: 1/2 = 0,5 | 1/4 = 0,25 | 3/4 = 0,75 | 1/5 = 0,2 | 1/8 = 0,125. Menghafal ini membuatmu selesai 3x lebih cepat dalam ujian!</li>
      </ul>
    </div>
  </section>

</div>
`;

// Save to standalone HTML file
const standaloneHtml = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${mtkB1Title}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
    h1, h2, h3, h4, .font-heading { font-family: 'Space Grotesk', sans-serif; }
  </style>
</head>
<body class="bg-slate-100 text-slate-800 p-4 sm:p-8 min-h-screen">
  <main class="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-6 sm:p-10 border border-slate-200">
    <header class="border-b border-slate-200 pb-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-teal-100 text-teal-800 mb-2">
          <span>📐</span> Matematika Fase C Kelas 6 SD
        </div>
        <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900">${mtkB1Title}</h1>
        <p class="text-sm text-slate-500 mt-1">Modul Pembelajaran Mandiri, Contoh Soal Bertahap, dan Trik Cepat</p>
      </div>
      <a href="index.html" class="px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-sm transition">
        ← Buka Aplikasi Bank Soal
      </a>
    </header>
    ${mtkB1Html}
  </main>
</body>
</html>`;

fs.writeFileSync(path.join(cwd, 'modul_pembelajaran_matematika_bab_1.html'), standaloneHtml, 'utf8');
console.log('✅ Berhasil membuat modul_pembelajaran_matematika_bab_1.html');

// Update rich_modules.json
richModules['MTK-B1'] = {
  title: mtkB1Title,
  html: mtkB1Html
};
fs.writeFileSync(richModulesPath, JSON.stringify(richModules, null, 2), 'utf8');
console.log('✅ Berhasil memperbarui rich_modules.json dengan key MTK-B1');

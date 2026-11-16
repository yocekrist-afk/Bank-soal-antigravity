const fs = require('fs');
const path = require('path');

const cwd = __dirname;

// =========================================================================
// SVG 1: DIAGRAM 5 MACAM SENDI GERAK (DIARTROSIS)
// =========================================================================
const diagramSendiHtml = `
      <!-- DIAGRAM VISUAL 5 SENDI (SVG NATIVE) -->
      <div class="my-6 p-5 rounded-3xl bg-linear-to-br from-slate-900 via-indigo-950 to-slate-900 text-white shadow-xl border border-indigo-500/30">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-indigo-800/60 pb-3 mb-4">
          <div class="flex items-center gap-2.5">
            <span class="p-2 rounded-xl bg-indigo-500/20 text-indigo-300 text-lg">🦾</span>
            <div>
              <h4 class="font-extrabold text-base sm:text-lg text-white">Visualisasi 5 Macam Sendi Gerak (Diartrosis)</h4>
              <p class="text-xs text-indigo-300">Skema mekanik arah gerakan tulang — Ringan, Tajam & Bisa Dibuka di Semua Komputer</p>
            </div>
          </div>
          <span class="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            ✓ 100% Offline SVG
          </span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          <!-- 1. Sendi Peluru -->
          <div class="bg-white/5 hover:bg-white/10 transition p-3.5 rounded-2xl border border-white/10 flex flex-col items-center text-center">
            <span class="text-xs font-bold text-amber-300 mb-2">1. Sendi Peluru</span>
            <div class="w-24 h-24 my-1">
              <svg viewBox="0 0 100 100" class="w-full h-full">
                <!-- Socket -->
                <path d="M 25 35 A 25 25 0 0 0 75 35" fill="none" stroke="#60a5fa" stroke-width="6" stroke-linecap="round"/>
                <!-- Ball -->
                <circle cx="50" cy="50" r="18" fill="#38bdf8" fill-opacity="0.25" stroke="#38bdf8" stroke-width="4"/>
                <circle cx="50" cy="50" r="4" fill="#f8fafc"/>
                <!-- Stem -->
                <line x1="50" y1="68" x2="50" y2="92" stroke="#94a3b8" stroke-width="6" stroke-linecap="round"/>
                <!-- 360 Arrow -->
                <path d="M 22 50 A 28 28 0 1 1 78 50" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="3 3"/>
                <polygon points="78,45 84,52 76,55" fill="#f59e0b"/>
                <polygon points="22,55 16,48 24,45" fill="#f59e0b"/>
              </svg>
            </div>
            <span class="text-[11px] font-extrabold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-md mt-1">Segala Arah (360°)</span>
            <p class="text-[10px] text-slate-300 mt-1.5 leading-snug">Bahu & Gelang Panggul (Paha)</p>
          </div>

          <!-- 2. Sendi Engsel -->
          <div class="bg-white/5 hover:bg-white/10 transition p-3.5 rounded-2xl border border-white/10 flex flex-col items-center text-center">
            <span class="text-xs font-bold text-emerald-300 mb-2">2. Sendi Engsel</span>
            <div class="w-24 h-24 my-1">
              <svg viewBox="0 0 100 100" class="w-full h-full">
                <!-- Hinge base -->
                <rect x="25" y="65" width="50" height="14" rx="4" fill="#334155" stroke="#64748b" stroke-width="2"/>
                <!-- Moving bar -->
                <line x1="35" y1="65" x2="70" y2="25" stroke="#34d399" stroke-width="7" stroke-linecap="round"/>
                <!-- Pivot pin -->
                <circle cx="35" cy="65" r="7" fill="#10b981" stroke="#f8fafc" stroke-width="2"/>
                <!-- 1 direction arc arrow -->
                <path d="M 68 38 A 38 38 0 0 1 72 65" fill="none" stroke="#fbbf24" stroke-width="2.5"/>
                <polygon points="65,34 74,36 71,44" fill="#fbbf24"/>
                <polygon points="72,69 76,60 67,62" fill="#fbbf24"/>
              </svg>
            </div>
            <span class="text-[11px] font-extrabold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-md mt-1">1 Arah (Buka-Tutup)</span>
            <p class="text-[10px] text-slate-300 mt-1.5 leading-snug">Siku Tangan, Lutut & Ruas Jari</p>
          </div>

          <!-- 3. Sendi Putar -->
          <div class="bg-white/5 hover:bg-white/10 transition p-3.5 rounded-2xl border border-white/10 flex flex-col items-center text-center">
            <span class="text-xs font-bold text-sky-300 mb-2">3. Sendi Putar</span>
            <div class="w-24 h-24 my-1">
              <svg viewBox="0 0 100 100" class="w-full h-full">
                <!-- Center axis pin -->
                <line x1="50" y1="15" x2="50" y2="85" stroke="#38bdf8" stroke-width="8" stroke-linecap="round"/>
                <!-- Ring bone around pin -->
                <ellipse cx="50" cy="50" rx="30" ry="12" fill="none" stroke="#60a5fa" stroke-width="4"/>
                <!-- Rotation arrows -->
                <path d="M 22 50 A 28 10 0 0 1 78 50" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
                <polygon points="78,47 84,54 77,56" fill="#f59e0b"/>
              </svg>
            </div>
            <span class="text-[11px] font-extrabold text-sky-400 bg-sky-400/10 px-2 py-0.5 rounded-md mt-1">Rotasi 1 Poros</span>
            <p class="text-[10px] text-slate-300 mt-1.5 leading-snug">Leher (Atlas) & Tengkorak</p>
          </div>

          <!-- 4. Sendi Pelana -->
          <div class="bg-white/5 hover:bg-white/10 transition p-3.5 rounded-2xl border border-white/10 flex flex-col items-center text-center">
            <span class="text-xs font-bold text-purple-300 mb-2">4. Sendi Pelana</span>
            <div class="w-24 h-24 my-1">
              <svg viewBox="0 0 100 100" class="w-full h-full">
                <!-- Lower saddle -->
                <path d="M 25 65 C 35 48, 65 48, 75 65 L 75 75 C 65 58, 35 58, 25 75 Z" fill="#c084fc" fill-opacity="0.4" stroke="#c084fc" stroke-width="2"/>
                <!-- Upper rider bone -->
                <path d="M 50 20 L 50 52" stroke="#e879f9" stroke-width="8" stroke-linecap="round"/>
                <!-- 2-axis crossing arrows -->
                <line x1="30" y1="36" x2="70" y2="36" stroke="#fbbf24" stroke-width="2"/>
                <polygon points="26,36 32,32 32,40" fill="#fbbf24"/>
                <polygon points="74,36 68,32 68,40" fill="#fbbf24"/>
                <line x1="50" y1="26" x2="50" y2="46" stroke="#fbbf24" stroke-width="2"/>
              </svg>
            </div>
            <span class="text-[11px] font-extrabold text-purple-400 bg-purple-400/10 px-2 py-0.5 rounded-md mt-1">2 Arah (Depan & Samping)</span>
            <p class="text-[10px] text-slate-300 mt-1.5 leading-snug">Pangkal Ibu Jari & Telapak</p>
          </div>

          <!-- 5. Sendi Geser -->
          <div class="bg-white/5 hover:bg-white/10 transition p-3.5 rounded-2xl border border-white/10 flex flex-col items-center text-center">
            <span class="text-xs font-bold text-teal-300 mb-2">5. Sendi Geser</span>
            <div class="w-24 h-24 my-1">
              <svg viewBox="0 0 100 100" class="w-full h-full">
                <!-- Flat plate 1 (top) -->
                <rect x="22" y="32" width="45" height="12" rx="3" fill="#2dd4bf" fill-opacity="0.4" stroke="#2dd4bf" stroke-width="2.5"/>
                <!-- Flat plate 2 (bottom) -->
                <rect x="33" y="52" width="45" height="12" rx="3" fill="#14b8a6" fill-opacity="0.4" stroke="#14b8a6" stroke-width="2.5"/>
                <!-- Sliding arrows -->
                <line x1="25" y1="24" x2="65" y2="24" stroke="#fbbf24" stroke-width="2"/>
                <polygon points="70,24 62,20 62,28" fill="#fbbf24"/>
                <line x1="75" y1="72" x2="35" y2="72" stroke="#fbbf24" stroke-width="2"/>
                <polygon points="30,72 38,68 38,76" fill="#fbbf24"/>
              </svg>
            </div>
            <span class="text-[11px] font-extrabold text-teal-400 bg-teal-400/10 px-2 py-0.5 rounded-md mt-1">Pergeseran Datar</span>
            <p class="text-[10px] text-slate-300 mt-1.5 leading-snug">Pergelangan Tangan & Ruas Tulang</p>
          </div>
        </div>
      </div>
`;

// =========================================================================
// SVG 2: INFOGRAFIS LENGKAP BUSUR REFLEKS SARAF (REFLEX ARC)
// =========================================================================
const diagramRefleksHtml = `
      <!-- DIAGRAM VISUAL BUSUR REFLEKS (SVG & FLOW) -->
      <div class="my-5 p-5 rounded-3xl bg-linear-to-br from-rose-950 via-slate-900 to-indigo-950 text-white shadow-xl border border-rose-500/30">
        <div class="flex items-center justify-between border-b border-rose-800/50 pb-3 mb-4">
          <div class="flex items-center gap-2">
            <span class="p-2 rounded-xl bg-rose-500/20 text-rose-300 text-lg">⚡</span>
            <div>
              <h4 class="font-extrabold text-base text-white">Infografis: Jalur Kilat Busur Refleks (Hanya 0,05 Detik!)</h4>
              <p class="text-xs text-rose-200">Bagaimana tubuh menyelamatkan diri dari bahaya tanpa menunggu otak berpikir</p>
            </div>
          </div>
          <span class="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
            Penyelamat Nyawa
          </span>
        </div>

        <div class="w-full overflow-x-auto pb-2">
          <svg viewBox="0 0 760 160" class="w-full min-w-[680px] h-auto font-sans">
            <!-- Background track -->
            <rect x="10" y="10" width="740" height="140" rx="16" fill="#0f172a" fill-opacity="0.8" stroke="#334155" stroke-width="1.5"/>

            <!-- Node 1: Api Panas -->
            <g transform="translate(30, 25)">
              <rect width="100" height="110" rx="12" fill="#881337" fill-opacity="0.3" stroke="#f43f5e" stroke-width="1.5"/>
              <text x="50" y="28" font-size="20" text-anchor="middle">🔥</text>
              <text x="50" y="52" font-size="11" font-weight="bold" fill="#fda4af" text-anchor="middle">1. RANGSANG</text>
              <text x="50" y="70" font-size="9" fill="#fecdd3" text-anchor="middle">Api / Panci Panas</text>
              <text x="50" y="86" font-size="8" fill="#cbd5e1" text-anchor="middle">Suhu ekstrem mendadak</text>
            </g>

            <!-- Arrow 1 -> 2 -->
            <path d="M 135 80 L 160 80" stroke="#f43f5e" stroke-width="2.5" marker-end="url(#arrow-rose)"/>

            <!-- Node 2: Reseptor Kulit -->
            <g transform="translate(165, 25)">
              <rect width="105" height="110" rx="12" fill="#701a75" fill-opacity="0.3" stroke="#d946ef" stroke-width="1.5"/>
              <text x="52" y="28" font-size="20" text-anchor="middle">🖐️</text>
              <text x="52" y="52" font-size="11" font-weight="bold" fill="#f0abfc" text-anchor="middle">2. RESEPTOR</text>
              <text x="52" y="70" font-size="9" fill="#fae8ff" text-anchor="middle">Ujung Saraf Kulit</text>
              <text x="52" y="86" font-size="8" fill="#cbd5e1" text-anchor="middle">Ubah panas jadi impuls</text>
            </g>

            <!-- Arrow 2 -> 3 -->
            <path d="M 275 80 L 300 80" stroke="#d946ef" stroke-width="2.5"/>

            <!-- Node 3: Saraf Sensorik -->
            <g transform="translate(305, 25)">
              <rect width="115" height="110" rx="12" fill="#1e1b4b" fill-opacity="0.5" stroke="#818cf8" stroke-width="1.5"/>
              <text x="57" y="28" font-size="20" text-anchor="middle">📡</text>
              <text x="57" y="52" font-size="10" font-weight="bold" fill="#a5b4fc" text-anchor="middle">3. SARAF SENSORIK</text>
              <text x="57" y="70" font-size="9" fill="#e0e7ff" text-anchor="middle">Penghantar Listrik</text>
              <text x="57" y="86" font-size="8" fill="#94a3b8" text-anchor="middle">Laju 100 m/detik!</text>
            </g>

            <!-- Arrow 3 -> 4 -->
            <path d="M 425 80 L 450 80" stroke="#818cf8" stroke-width="2.5"/>

            <!-- Node 4: Pusat Refleks (Sumsum Tulang Belakang) -->
            <g transform="translate(455, 20)">
              <rect width="135" height="120" rx="14" fill="#064e3b" fill-opacity="0.5" stroke="#34d399" stroke-width="2"/>
              <text x="67" y="26" font-size="20" text-anchor="middle">⚡</text>
              <text x="67" y="48" font-size="10" font-weight="bold" fill="#6ee7b7" text-anchor="middle">4. SUMSUM TULANG</text>
              <text x="67" y="62" font-size="9" font-weight="extrabold" fill="#a7f3d0" text-anchor="middle">BELAKANG (PINTAS!)</text>
              <text x="67" y="80" font-size="8" fill="#fef08a" text-anchor="middle">⚠️ TIDAK KE OTAK DULU</text>
              <text x="67" y="96" font-size="7.5" fill="#e2e8f0" text-anchor="middle">Langsung tembak balik!</text>
            </g>

            <!-- Arrow 4 -> 5 -->
            <path d="M 595 80 L 620 80" stroke="#34d399" stroke-width="2.5"/>

            <!-- Node 5: Efektor Otot -->
            <g transform="translate(625, 25)">
              <rect width="115" height="110" rx="12" fill="#78350f" fill-opacity="0.4" stroke="#fbbf24" stroke-width="1.5"/>
              <text x="57" y="28" font-size="20" text-anchor="middle">💪</text>
              <text x="57" y="52" font-size="10" font-weight="bold" fill="#fde68a" text-anchor="middle">5. EFEKTOR (OTOT)</text>
              <text x="57" y="70" font-size="9" fill="#fef3c7" text-anchor="middle">Otot Bisep Menarik</text>
              <text x="57" y="86" font-size="8" font-weight="bold" fill="#4ade80" text-anchor="middle">TANGAN TERLEPAS!</text>
            </g>
          </svg>
        </div>
        <div class="mt-3 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 flex items-start gap-2">
          <span class="text-amber-400 font-bold">🧠 Catatan Kunci HOTS:</span>
          <span>Otak baru menerima kabar <em>"panas"</em> setelah tangan berhasil ditarik mundur. Itulah mengapa kita baru bisa berteriak "Aduh!" setelah gerakan refleks selesai terjadi!</span>
        </div>
      </div>
`;

// =========================================================================
// SVG 3: DIAGRAM ANATOMI POSTUR TULANG BELAKANG (NORMAL VS KELAINAN)
// =========================================================================
const diagramTulangHtml = `
      <!-- DIAGRAM VISUAL POSTUR TULANG (NORMAL VS KELAINAN) -->
      <div class="my-6 p-5 rounded-3xl bg-linear-to-br from-slate-900 via-slate-950 to-blue-950 text-white shadow-xl border border-blue-500/30">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-blue-800/50 pb-3 mb-4">
          <div class="flex items-center gap-2">
            <span class="p-2 rounded-xl bg-blue-500/20 text-blue-300 text-lg">📐</span>
            <div>
              <h4 class="font-extrabold text-base sm:text-lg text-white">Diagram Visual: Postur Tulang Belakang Manusia</h4>
              <p class="text-xs text-blue-200">Perbandingan Profil Normal vs 3 Kelainan Utama (Sering Keluar Ujian)</p>
            </div>
          </div>
          <span class="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
            Ergonomi Tubuh
          </span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          <!-- 1. Normal -->
          <div class="bg-white/5 p-4 rounded-2xl border border-emerald-500/30 flex flex-col items-center text-center">
            <span class="text-xs font-bold text-emerald-300 mb-1">NORMAL</span>
            <span class="text-[10px] text-emerald-400/80 mb-2">Kurva 'S' Fisiologis Seimbang</span>
            <div class="w-28 h-40 my-1">
              <svg viewBox="0 0 100 160" class="w-full h-full">
                <!-- Head -->
                <circle cx="50" cy="22" r="14" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
                <!-- Balanced S-curve Spine -->
                <path d="M 50 36 C 47 60, 56 90, 48 120 L 48 148" fill="none" stroke="#10b981" stroke-width="5" stroke-linecap="round"/>
                <!-- Neutral axis line -->
                <line x1="50" y1="10" x2="50" y2="155" stroke="#475569" stroke-width="1.5" stroke-dasharray="3 3"/>
                <!-- Badge -->
                <circle cx="50" cy="148" r="4" fill="#10b981"/>
              </svg>
            </div>
            <span class="text-[10px] font-extrabold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-full mt-2">
              ✅ Postur Ideal
            </span>
            <p class="text-[10px] text-slate-300 mt-1.5 leading-tight">Dada tegak, bahu rileks sejajar, beban terbagi merata.</p>
          </div>

          <!-- 2. Kifosis -->
          <div class="bg-white/5 p-4 rounded-2xl border border-rose-500/30 flex flex-col items-center text-center">
            <span class="text-xs font-bold text-rose-300 mb-1">KIFOSIS</span>
            <span class="text-[10px] text-rose-400/80 mb-2">Bungkuk ke Belakang</span>
            <div class="w-28 h-40 my-1">
              <svg viewBox="0 0 100 160" class="w-full h-full">
                <!-- Head forward -->
                <circle cx="40" cy="24" r="14" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
                <!-- Upper spine severely bowed backward -->
                <path d="M 42 38 C 75 70, 65 100, 48 125 L 48 148" fill="none" stroke="#f43f5e" stroke-width="5" stroke-linecap="round"/>
                <!-- Neutral axis -->
                <line x1="48" y1="10" x2="48" y2="155" stroke="#475569" stroke-width="1.5" stroke-dasharray="3 3"/>
                <!-- Curve warning arrow -->
                <path d="M 68 60 A 15 15 0 0 1 68 85" fill="none" stroke="#fbbf24" stroke-width="2"/>
                <polygon points="65,85 72,88 71,80" fill="#fbbf24"/>
              </svg>
            </div>
            <span class="text-[10px] font-extrabold text-rose-300 bg-rose-500/20 px-2 py-0.5 rounded-full mt-2">
              ⚠️ Punggung Bungkuk
            </span>
            <p class="text-[10px] text-slate-300 mt-1.5 leading-tight">Punggung atas melengkung berlebih akibat menunduk gawai / meja rendah.</p>
          </div>

          <!-- 3. Lordosis -->
          <div class="bg-white/5 p-4 rounded-2xl border border-amber-500/30 flex flex-col items-center text-center">
            <span class="text-xs font-bold text-amber-300 mb-1">LORDOSIS</span>
            <span class="text-[10px] text-amber-400/80 mb-2">Melengkung Maju di Pinggang</span>
            <div class="w-28 h-40 my-1">
              <svg viewBox="0 0 100 160" class="w-full h-full">
                <!-- Head backward -->
                <circle cx="56" cy="22" r="14" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
                <!-- Lumbar spine sharply pushed forward -->
                <path d="M 54 36 C 46 65, 30 105, 52 135 L 52 148" fill="none" stroke="#fbbf24" stroke-width="5" stroke-linecap="round"/>
                <!-- Neutral axis -->
                <line x1="52" y1="10" x2="52" y2="155" stroke="#475569" stroke-width="1.5" stroke-dasharray="3 3"/>
                <!-- Forward thrust arrow -->
                <path d="M 32 90 L 22 90" stroke="#f59e0b" stroke-width="2.5"/>
                <polygon points="18,90 26,85 26,95" fill="#f59e0b"/>
              </svg>
            </div>
            <span class="text-[10px] font-extrabold text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded-full mt-2">
              ⚠️ Pinggang Membusung
            </span>
            <p class="text-[10px] text-slate-300 mt-1.5 leading-tight">Pinggang terlalu tertarik maju sehingga perut tampak membusung.</p>
          </div>

          <!-- 4. Skoliosis -->
          <div class="bg-white/5 p-4 rounded-2xl border border-blue-500/30 flex flex-col items-center text-center">
            <span class="text-xs font-bold text-sky-300 mb-1">SKOLIOSIS</span>
            <span class="text-[10px] text-sky-400/80 mb-2">Membengkok Huruf 'S'</span>
            <div class="w-28 h-40 my-1">
              <svg viewBox="0 0 100 160" class="w-full h-full">
                <!-- Head from behind -->
                <circle cx="50" cy="22" r="14" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
                <!-- Spine viewed from back curving S laterally -->
                <path d="M 50 36 C 72 65, 28 105, 50 148" fill="none" stroke="#38bdf8" stroke-width="5" stroke-linecap="round"/>
                <!-- Vertical center axis -->
                <line x1="50" y1="10" x2="50" y2="155" stroke="#475569" stroke-width="1.5" stroke-dasharray="3 3"/>
                <!-- Tilted shoulder line -->
                <line x1="25" y1="45" x2="75" y2="35" stroke="#f87171" stroke-width="2"/>
              </svg>
            </div>
            <span class="text-[10px] font-extrabold text-sky-300 bg-sky-500/20 px-2 py-0.5 rounded-full mt-2">
              ⚠️ Miring Kiri / Kanan
            </span>
            <p class="text-[10px] text-slate-300 mt-1.5 leading-tight">Tulang meliuk ke samping akibat sering menyandang tas ransel 1 bahu saja.</p>
          </div>
        </div>
      </div>
`;

// Read current generate_ipas_b1.js
let code = fs.readFileSync(path.join(cwd, 'generate_ipas_b1.js'), 'utf8');

// 1. Insert Diagram 1 right before the Sendi table
const targetSendi = `<div class="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">`;
if (code.includes(targetSendi) && !code.includes('Visualisasi 5 Macam Sendi Gerak (Diartrosis)')) {
  code = code.replace(targetSendi, diagramSendiHtml + '\n' + targetSendi);
  console.log('Successfully inserted Diagram 1 (Sendi)');
}

// 2. Insert Diagram 2 right after the paragraph of Kasus 1 (Refleks)
const targetRefleks = `💡 Baru setelah tangan berhasil ditarik mundur dengan selamat`;
if (code.includes(targetRefleks) && !code.includes('Jalur Kilat Busur Refleks')) {
  // Find the closing </div> of that callout
  const idxCallout = code.indexOf(targetRefleks);
  const idxCloseDiv = code.indexOf('</div>', idxCallout);
  if (idxCloseDiv !== -1) {
    const insertPos = idxCloseDiv + 6;
    code = code.substring(0, insertPos) + '\n' + diagramRefleksHtml + code.substring(insertPos);
    console.log('Successfully inserted Diagram 2 (Refleks)');
  }
}

// 3. Insert Diagram 3 right before the 3-column grid of Kasus 2 (Tulang)
const targetTulang = `<div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">`;
if (code.includes(targetTulang) && !code.includes('Postur Tulang Belakang Manusia')) {
  code = code.replace(targetTulang, diagramTulangHtml + '\n' + targetTulang);
  console.log('Successfully inserted Diagram 3 (Tulang)');
}

fs.writeFileSync(path.join(cwd, 'generate_ipas_b1.js'), code, 'utf8');
console.log('generate_ipas_b1.js updated successfully!');

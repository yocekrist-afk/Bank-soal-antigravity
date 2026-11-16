const fs = require('fs');
let tpl = fs.readFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/app_template.html', 'utf8');

// Kita cari bagian header di main-content-wrapper
const oldHeaderRegex = /<header class="border-b border-\[var\(--border\)\] bg-\[var\(--card\)\] sticky top-0 z-30 no-print">[\s\S]*?<\/header>/;

const newHeader = `<header class="sticky top-0 z-30 no-print shadow-sm">
        <!-- Top Wave Gradient Banner (ala Accurate Online) -->
        <div class="bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 text-white px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3 shadow-inner">
          <div class="flex items-center gap-3">
            <button onclick="toggleSidebar()" class="p-1.5 rounded-lg bg-white/15 hover:bg-white/25 text-white transition flex items-center gap-1.5" title="Buka/Tutup Menu Sidebar (Ctrl+B)">
              <span class="text-lg">☰</span>
              <span class="text-xs font-semibold hidden sm:inline">Menu</span>
            </button>
            <div class="flex items-center gap-2">
              <span class="w-7 h-7 rounded-lg bg-white text-indigo-700 font-extrabold flex items-center justify-center text-xs shadow-xs">SD6</span>
              <span class="font-bold text-sm sm:text-base tracking-tight text-white drop-shadow-xs">PintarSD6 Pro Enterprise</span>
              <span class="text-[10px] px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-200 border border-emerald-300/30 font-semibold hidden md:inline">Kurikulum Merdeka</span>
            </div>
          </div>

          <!-- User Profile & Action Pill -->
          <div class="flex items-center gap-2">
            <div class="hidden sm:flex items-center gap-2 bg-white/10 backdrop-blur-xs px-3 py-1 rounded-full border border-white/20 text-xs text-white">
              <span class="w-5 h-5 rounded-full bg-amber-400 text-slate-900 font-black flex items-center justify-center text-[10px]">⭐</span>
              <span id="topbar-xp" class="font-bold text-amber-300">120 XP</span>
              <span class="text-white/60">•</span>
              <span class="font-medium text-white/90">Guru & Siswa Kelas 6</span>
            </div>

            <!-- Quick Action Buttons -->
            <button onclick="toggleSound()" id="btn-sound" class="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/15 hover:bg-white/25 text-white border border-white/20 transition">
              🔊 Suara
            </button>
            <button onclick="exportCSV()" class="hidden sm:inline-flex px-2.5 py-1 rounded-lg text-xs font-medium bg-white/15 hover:bg-white/25 text-white border border-white/20 transition">
              📊 CSV
            </button>
            <button onclick="exportJSON()" class="hidden sm:inline-flex px-2.5 py-1 rounded-lg text-xs font-medium bg-white/15 hover:bg-white/25 text-white border border-white/20 transition">
              ⬇ JSON
            </button>
            <label class="px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-white shadow-xs transition cursor-pointer flex items-center gap-1.5" title="Impor file soal HTML atau JSON">
              <span>⬆</span>
              <span class="hidden sm:inline">Impor File</span>
              <input type="file" id="import-any-file" accept=".html,.htm,.json" class="hidden" onchange="handleFileImport(event)" />
            </label>
            <button onclick="openModal()" class="px-3 py-1 rounded-lg text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-900 shadow-xs transition">
              + Tambah Soal
            </button>
          </div>
        </div>

        <!-- Tab Strip Navigation (Clean White Bar with Accent Line) -->
        <div class="bg-white border-b border-slate-200 px-4 sm:px-6 py-1.5 flex items-center justify-between gap-2 overflow-x-auto custom-scroll">
          <div class="flex items-center gap-1 shrink-0">
            <button onclick="switchTab('curriculum')" id="tab-curriculum" class="px-3 py-1.5 rounded-lg text-xs font-semibold transition bg-indigo-600 text-white shadow-xs">
              📖 1. Modul Materi
            </button>
            <button onclick="switchTab('quiz')" id="tab-quiz" class="px-3 py-1.5 rounded-lg text-xs font-semibold transition text-slate-600 hover:text-slate-900 hover:bg-slate-100">
              🎮 2. Mode Kuis Anak
            </button>
            <button onclick="switchTab('bank')" id="tab-bank" class="px-3 py-1.5 rounded-lg text-xs font-semibold transition text-slate-600 hover:text-slate-900 hover:bg-slate-100">
              📚 3. Bank Soal Lengkap
            </button>
            <button onclick="switchTab('builder')" id="tab-builder" class="px-3 py-1.5 rounded-lg text-xs font-semibold transition text-slate-600 hover:text-slate-900 hover:bg-slate-100">
              ⚡ 4. Generator Ujian (PDF)
            </button>
            <button onclick="switchTab('analytics')" id="tab-analytics" class="px-3 py-1.5 rounded-lg text-xs font-semibold transition text-slate-600 hover:text-slate-900 hover:bg-slate-100">
              📊 5. Rapor & Analisis
            </button>
          </div>

          <div class="text-xs text-slate-500 font-medium hidden lg:flex items-center gap-2">
            <span class="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span id="current-menu-title" class="font-semibold text-slate-700">1. Modul & Rangkuman Materi</span>
          </div>
        </div>
      </header>`;

tpl = tpl.replace(oldHeaderRegex, newHeader);
fs.writeFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/app_template.html', tpl, 'utf8');
console.log('Top header updated to Accurate-style banner!');

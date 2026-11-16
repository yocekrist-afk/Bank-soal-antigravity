const fs = require('fs');
let tpl = fs.readFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/app_template.html', 'utf8');

// 1. Ganti struktur Navigasi Sidebar menjadi 4 Modul Utama
const oldNavRegex = /<nav class="flex-1 px-3 py-2 space-y-1 overflow-y-auto custom-scroll">[\s\S]*?<\/nav>/;

const newNav = `<nav class="flex-1 px-3 py-2 space-y-3 overflow-y-auto custom-scroll">
        <!-- MODUL 1: SISWA & BELAJAR -->
        <div>
          <div class="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5 sidebar-text">
            <span>🎒</span> 1. Pembelajaran Siswa
          </div>
          <div class="space-y-0.5 mt-1">
            <button onclick="switchTab('curriculum'); autoCloseSidebarOnMobile();" id="side-tab-curriculum" class="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition text-left text-slate-300 hover:text-white hover:bg-slate-800/80">
              <span class="text-base shrink-0">📖</span>
              <span class="sidebar-text truncate">Rangkuman Materi & Bab</span>
            </button>
            <button onclick="switchTab('quiz'); autoCloseSidebarOnMobile();" id="side-tab-quiz" class="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition text-left text-slate-300 hover:text-white hover:bg-slate-800/80">
              <span class="text-base shrink-0">🎮</span>
              <span class="sidebar-text truncate">Kuis Interaktif Anak</span>
            </button>
          </div>
        </div>

        <!-- MODUL 2: BANK SOAL & KURIKULUM -->
        <div class="pt-2 border-t border-slate-800/80">
          <div class="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 sidebar-text">
            <span>🗄️</span> 2. Bank Soal & Kurikulum
          </div>
          <div class="space-y-0.5 mt-1">
            <button onclick="switchTab('bank'); autoCloseSidebarOnMobile();" id="side-tab-bank" class="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition text-left text-slate-300 hover:text-white hover:bg-slate-800/80">
              <span class="text-base shrink-0">📚</span>
              <span class="sidebar-text truncate">Katalog Bank Soal</span>
            </button>
            <button onclick="openModal(); autoCloseSidebarOnMobile();" class="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium transition text-left text-slate-400 hover:text-emerald-300 hover:bg-slate-800/50">
              <span class="text-base shrink-0">➕</span>
              <span class="sidebar-text truncate">Tambah Butir Soal Baru</span>
            </button>
          </div>
        </div>

        <!-- MODUL 3: UJIAN & ASESMEN -->
        <div class="pt-2 border-t border-slate-800/80">
          <div class="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5 sidebar-text">
            <span>⚡</span> 3. Ujian & Evaluasi
          </div>
          <div class="space-y-0.5 mt-1">
            <button onclick="switchTab('builder'); autoCloseSidebarOnMobile();" id="side-tab-builder" class="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition text-left text-slate-300 hover:text-white hover:bg-slate-800/80">
              <span class="text-base shrink-0">📄</span>
              <span class="sidebar-text truncate">Generator Naskah Ujian (PDF)</span>
            </button>
          </div>
        </div>

        <!-- MODUL 4: RAPOR & ANALISIS -->
        <div class="pt-2 border-t border-slate-800/80">
          <div class="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5 sidebar-text">
            <span>📊</span> 4. Rapor & Analisis
          </div>
          <div class="space-y-0.5 mt-1">
            <button onclick="switchTab('analytics'); autoCloseSidebarOnMobile();" id="side-tab-analytics" class="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition text-left text-slate-300 hover:text-white hover:bg-slate-800/80">
              <span class="text-base shrink-0">📈</span>
              <span class="sidebar-text truncate">Rapor Daya Serap & Nilai</span>
            </button>
          </div>
        </div>

        <!-- PINTASAN MAPEL -->
        <div class="pt-2 border-t border-slate-800/80 sidebar-text">
          <div class="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Pintasan Mata Pelajaran
          </div>
          <div class="grid grid-cols-2 gap-1 mt-1">
            <button onclick="quickFilterSubject('Matematika')" class="px-2.5 py-1.5 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition text-left truncate flex items-center gap-1">
              <span>📐</span> MTK
            </button>
            <button onclick="quickFilterSubject('IPAS')" class="px-2.5 py-1.5 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition text-left truncate flex items-center gap-1">
              <span>🌍</span> IPAS
            </button>
            <button onclick="quickFilterSubject('Bahasa Indonesia')" class="px-2.5 py-1.5 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition text-left truncate flex items-center gap-1">
              <span>📖</span> B.Indo
            </button>
            <button onclick="quickFilterSubject('Pendidikan Pancasila')" class="px-2.5 py-1.5 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition text-left truncate flex items-center gap-1">
              <span>🦅</span> PPKn
            </button>
          </div>
        </div>
      </nav>`;

tpl = tpl.replace(oldNavRegex, newNav);

// 2. Ganti Top Tab Strip agar mencerminkan 4 Modul Utama dengan lencana kategori
const oldTabStripRegex = /<div class="bg-white border-b border-slate-200 px-4 sm:px-6 py-1\.5 flex items-center justify-between gap-2 overflow-x-auto custom-scroll">[\s\S]*?<\/div>\s*<\/header>/;

const newTabStrip = `<div class="bg-white border-b border-slate-200 px-4 sm:px-6 py-1.5 flex items-center justify-between gap-3 overflow-x-auto custom-scroll">
          <div class="flex items-center gap-1.5 shrink-0">
            <!-- Modul 1 -->
            <button onclick="switchTab('curriculum')" id="tab-curriculum" class="px-3 py-1.5 rounded-lg text-xs font-semibold transition bg-indigo-600 text-white shadow-xs flex items-center gap-1.5">
              <span>🎒</span> 1. Rangkuman Materi
            </button>
            <button onclick="switchTab('quiz')" id="tab-quiz" class="px-3 py-1.5 rounded-lg text-xs font-semibold transition text-slate-600 hover:text-slate-900 hover:bg-slate-100 flex items-center gap-1.5">
              <span>🎮</span> 2. Kuis Interaktif
            </button>

            <span class="h-4 w-px bg-slate-300 mx-1"></span>

            <!-- Modul 2 & 3 -->
            <button onclick="switchTab('bank')" id="tab-bank" class="px-3 py-1.5 rounded-lg text-xs font-semibold transition text-slate-600 hover:text-slate-900 hover:bg-slate-100 flex items-center gap-1.5">
              <span>🗄️</span> 3. Bank Soal Guru
            </button>
            <button onclick="switchTab('builder')" id="tab-builder" class="px-3 py-1.5 rounded-lg text-xs font-semibold transition text-slate-600 hover:text-slate-900 hover:bg-slate-100 flex items-center gap-1.5">
              <span>⚡</span> 4. Generator Naskah Ujian
            </button>

            <span class="h-4 w-px bg-slate-300 mx-1"></span>

            <!-- Modul 4 -->
            <button onclick="switchTab('analytics')" id="tab-analytics" class="px-3 py-1.5 rounded-lg text-xs font-semibold transition text-slate-600 hover:text-slate-900 hover:bg-slate-100 flex items-center gap-1.5">
              <span>📊</span> 5. Rapor & Analisis
            </button>
          </div>

          <div class="text-xs text-slate-500 font-medium hidden xl:flex items-center gap-2">
            <span class="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span id="current-menu-title" class="font-semibold text-slate-700">1. Pembelajaran Siswa • Rangkuman Materi</span>
          </div>
        </div>
      </header>`;

tpl = tpl.replace(oldTabStripRegex, newTabStrip);

// 3. Update titles di function switchTab
tpl = tpl.replace(
  /const titles = \{[\s\S]*?\};/,
  `const titles = {
        curriculum: '1. Pembelajaran Siswa • Rangkuman Materi',
        quiz: '1. Pembelajaran Siswa • Kuis Interaktif Anak',
        bank: '2. Bank Soal & Kurikulum • Katalog Butir Soal',
        builder: '3. Ujian & Evaluasi • Generator Naskah Ujian',
        analytics: '4. Rapor & Analisis • Buku Nilai & Daya Serap'
      };`
);

fs.writeFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/app_template.html', tpl, 'utf8');
console.log('4-Module architecture successfully applied!');

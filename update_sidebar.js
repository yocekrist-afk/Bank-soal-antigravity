const fs = require('fs');
let tpl = fs.readFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/app_template.html', 'utf8');

// Update sidebar styling: dark sleek navy bar or crisp white with icon grid
const oldSidebarRegex = /<aside id="app-sidebar"[\s\S]*?<\/aside>/;

const newSidebar = `<aside id="app-sidebar" class="bg-slate-900 text-slate-200 border-r border-slate-800 fixed inset-y-0 left-0 z-50 flex flex-col transition-all duration-300 ease-in-out -translate-x-full lg:translate-x-0 w-64 no-print shadow-2xl lg:shadow-md select-none">
      <!-- Sidebar Header with Logo -->
      <div class="p-4 border-b border-slate-800/80 flex items-center justify-between gap-3 bg-slate-950/60">
        <div class="flex items-center gap-3 overflow-hidden">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 text-white flex items-center justify-center font-extrabold text-sm shrink-0 shadow-md">
            SD6
          </div>
          <div class="sidebar-text truncate">
            <h2 class="font-bold text-sm tracking-tight text-white truncate">PintarSD6 Pro</h2>
            <p class="text-[11px] text-slate-400 truncate">Sistem Asesmen Modern</p>
          </div>
        </div>
        <button onclick="toggleSidebar(false)" class="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800" title="Tutup Menu">
          ✕
        </button>
      </div>

      <!-- Quick Icon Hub / Launchpad Modal Trigger (ala Accurate Modul Penjualan) -->
      <div class="px-3 pt-3 pb-1">
        <button onclick="openMenuHubModal()" class="w-full flex items-center justify-between px-3 py-2.5 rounded-xl bg-gradient-to-r from-indigo-900/60 to-purple-900/60 border border-indigo-700/50 hover:border-indigo-500 text-indigo-200 hover:text-white transition group shadow-sm">
          <div class="flex items-center gap-2.5">
            <span class="text-lg group-hover:scale-110 transition-transform">🗂️</span>
            <div class="text-left sidebar-text">
              <div class="text-xs font-bold text-white leading-tight">Pusat Modul Cepat</div>
              <div class="text-[10px] text-indigo-300">Buka Menu Kotak Ikon</div>
            </div>
          </div>
          <span class="text-xs bg-indigo-500/20 px-1.5 py-0.5 rounded text-indigo-300 sidebar-text">Grid ⊞</span>
        </button>
      </div>

      <!-- Navigation Menu Items -->
      <nav class="flex-1 px-3 py-2 space-y-1 overflow-y-auto custom-scroll">
        <div class="px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 sidebar-text">
          Fitur Utama
        </div>

        <button onclick="switchTab('curriculum'); autoCloseSidebarOnMobile();" id="side-tab-curriculum" class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition text-left bg-indigo-600 text-white shadow-sm">
          <span class="text-base shrink-0">📖</span>
          <span class="sidebar-text truncate">1. Modul & Rangkuman</span>
        </button>

        <button onclick="switchTab('quiz'); autoCloseSidebarOnMobile();" id="side-tab-quiz" class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition text-left text-slate-300 hover:text-white hover:bg-slate-800/80">
          <span class="text-base shrink-0">🎮</span>
          <span class="sidebar-text truncate">2. Mode Kuis Anak</span>
        </button>

        <button onclick="switchTab('bank'); autoCloseSidebarOnMobile();" id="side-tab-bank" class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition text-left text-slate-300 hover:text-white hover:bg-slate-800/80">
          <span class="text-base shrink-0">📚</span>
          <span class="sidebar-text truncate">3. Bank Soal Lengkap</span>
        </button>

        <button onclick="switchTab('builder'); autoCloseSidebarOnMobile();" id="side-tab-builder" class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition text-left text-slate-300 hover:text-white hover:bg-slate-800/80">
          <span class="text-base shrink-0">⚡</span>
          <span class="sidebar-text truncate">4. Generator Ujian (PDF)</span>
        </button>

        <button onclick="switchTab('analytics'); autoCloseSidebarOnMobile();" id="side-tab-analytics" class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition text-left text-slate-300 hover:text-white hover:bg-slate-800/80">
          <span class="text-base shrink-0">📊</span>
          <span class="sidebar-text truncate">5. Rapor & Analisis</span>
        </button>

        <!-- Quick Subject Shortcut Filters -->
        <div class="pt-4 pb-1.5 px-2.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 sidebar-text">
          Pintasan Mata Pelajaran
        </div>
        <div class="space-y-1 sidebar-text">
          <button onclick="quickFilterSubject('Matematika')" class="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition text-left">
            <span>📐 Matematika</span>
            <span class="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-semibold">6 Bab</span>
          </button>
          <button onclick="quickFilterSubject('IPAS')" class="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition text-left">
            <span>🌍 IPAS (IPA-IPS)</span>
            <span class="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold">6 Bab</span>
          </button>
          <button onclick="quickFilterSubject('Bahasa Indonesia')" class="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition text-left">
            <span>📖 B. Indonesia</span>
            <span class="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold">3 Bab</span>
          </button>
          <button onclick="quickFilterSubject('Pendidikan Pancasila')" class="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition text-left">
            <span>🦅 Pancasila</span>
            <span class="text-[10px] px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 font-semibold">2 Bab</span>
          </button>
          <button onclick="quickFilterSubject('Bahasa Inggris')" class="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition text-left">
            <span>🇬🇧 B. Inggris</span>
            <span class="text-[10px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 font-semibold">2 Bab</span>
          </button>
        </div>
      </nav>

      <!-- Sidebar Footer -->
      <div class="p-3 border-t border-slate-800 space-y-1.5 bg-slate-950">
        <button onclick="openModal(); autoCloseSidebarOnMobile();" class="w-full py-2 px-3 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white flex items-center justify-center gap-2 shadow-sm transition">
          <span>+</span>
          <span class="sidebar-text truncate">Tambah Soal Baru</span>
        </button>

        <button onclick="toggleSidebarCollapse()" id="btn-collapse-sidebar" class="hidden lg:flex w-full py-1.5 px-3 rounded-lg text-xs text-slate-400 hover:text-white hover:bg-slate-800 items-center justify-center gap-2 transition" title="Kecilkan/Perluas Sidebar">
          <span id="collapse-icon">◀</span>
          <span class="sidebar-text truncate">Kecilkan Sidebar</span>
        </button>
      </div>
    </aside>`;

tpl = tpl.replace(oldSidebarRegex, newSidebar);
fs.writeFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/app_template.html', tpl, 'utf8');
console.log('Sidebar updated to sleek modern theme!');

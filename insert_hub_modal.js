const fs = require('fs');
let tpl = fs.readFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/app_template.html', 'utf8');

// Modal Menu Hub ala Accurate Modul Penjualan
const menuHubModal = `
  <!-- MODAL PUSAT MODUL CEPAT (ALA ACCURATE ONLINE GRID TILES) -->
  <div id="menu-hub-modal" class="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl max-w-3xl w-full p-6 shadow-2xl border border-slate-200 space-y-5 animate-in fade-in zoom-in-95 duration-200">
      <div class="flex items-center justify-between border-b border-slate-100 pb-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center text-xl shadow-sm">
            🚀
          </div>
          <div>
            <h2 class="text-base font-bold text-slate-900">Pusat Modul & Alur Asesmen (Menu Cepat)</h2>
            <p class="text-xs text-slate-500">Pilih modul pembelajaran, manajemen soal, kuis, atau cetak ujian</p>
          </div>
        </div>
        <button onclick="closeMenuHubModal()" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center text-sm font-bold transition">
          ✕
        </button>
      </div>

      <!-- Grid Menu Kotak Berwarna (Grid Tiles) -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <!-- Tile 1 -->
        <button onclick="switchTab('curriculum'); closeMenuHubModal();" class="p-4 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 flex flex-col items-center justify-center text-center gap-2 group transition shadow-xs hover:shadow-md">
          <span class="text-3xl group-hover:scale-110 transition-transform">📖</span>
          <div>
            <div class="text-xs font-bold text-emerald-900">Modul Materi</div>
            <div class="text-[10px] text-emerald-600">19 Bab Lengkap</div>
          </div>
        </button>

        <!-- Tile 2 -->
        <button onclick="switchTab('quiz'); closeMenuHubModal();" class="p-4 rounded-xl bg-purple-50 hover:bg-purple-100/80 border border-purple-200 flex flex-col items-center justify-center text-center gap-2 group transition shadow-xs hover:shadow-md">
          <span class="text-3xl group-hover:scale-110 transition-transform">🎮</span>
          <div>
            <div class="text-xs font-bold text-purple-900">Mode Kuis Anak</div>
            <div class="text-[10px] text-purple-600">Audio, XP & Streak</div>
          </div>
        </button>

        <!-- Tile 3 -->
        <button onclick="switchTab('bank'); closeMenuHubModal();" class="p-4 rounded-xl bg-blue-50 hover:bg-blue-100/80 border border-blue-200 flex flex-col items-center justify-center text-center gap-2 group transition shadow-xs hover:shadow-md">
          <span class="text-3xl group-hover:scale-110 transition-transform">📚</span>
          <div>
            <div class="text-xs font-bold text-blue-900">Bank Soal Lengkap</div>
            <div class="text-[10px] text-blue-600">82+ Soal Terverifikasi</div>
          </div>
        </button>

        <!-- Tile 4 -->
        <button onclick="switchTab('builder'); closeMenuHubModal();" class="p-4 rounded-xl bg-amber-50 hover:bg-amber-100/80 border border-amber-200 flex flex-col items-center justify-center text-center gap-2 group transition shadow-xs hover:shadow-md">
          <span class="text-3xl group-hover:scale-110 transition-transform">⚡</span>
          <div>
            <div class="text-xs font-bold text-amber-900">Naskah Ujian PDF</div>
            <div class="text-[10px] text-amber-600">Generator Sumatif</div>
          </div>
        </button>

        <!-- Tile 5 -->
        <button onclick="switchTab('analytics'); closeMenuHubModal();" class="p-4 rounded-xl bg-rose-50 hover:bg-rose-100/80 border border-rose-200 flex flex-col items-center justify-center text-center gap-2 group transition shadow-xs hover:shadow-md">
          <span class="text-3xl group-hover:scale-110 transition-transform">📊</span>
          <div>
            <div class="text-xs font-bold text-rose-900">Rapor & Analisis</div>
            <div class="text-[10px] text-rose-600">Distribusi Bloom & Nilai</div>
          </div>
        </button>

        <!-- Tile 6 -->
        <button onclick="openModal(); closeMenuHubModal();" class="p-4 rounded-xl bg-indigo-50 hover:bg-indigo-100/80 border border-indigo-200 flex flex-col items-center justify-center text-center gap-2 group transition shadow-xs hover:shadow-md">
          <span class="text-3xl group-hover:scale-110 transition-transform">✏️</span>
          <div>
            <div class="text-xs font-bold text-indigo-900">Tambah Soal Baru</div>
            <div class="text-[10px] text-indigo-600">Editor Butir Soal</div>
          </div>
        </button>

        <!-- Tile 7 -->
        <button onclick="document.getElementById('import-any-file').click(); closeMenuHubModal();" class="p-4 rounded-xl bg-teal-50 hover:bg-teal-100/80 border border-teal-200 flex flex-col items-center justify-center text-center gap-2 group transition shadow-xs hover:shadow-md">
          <span class="text-3xl group-hover:scale-110 transition-transform">📥</span>
          <div>
            <div class="text-xs font-bold text-teal-900">Impor HTML / JSON</div>
            <div class="text-[10px] text-teal-600">Ekstraksi Otomatis</div>
          </div>
        </button>

        <!-- Tile 8 -->
        <button onclick="exportCSV(); closeMenuHubModal();" class="p-4 rounded-xl bg-cyan-50 hover:bg-cyan-100/80 border border-cyan-200 flex flex-col items-center justify-center text-center gap-2 group transition shadow-xs hover:shadow-md">
          <span class="text-3xl group-hover:scale-110 transition-transform">📋</span>
          <div>
            <div class="text-xs font-bold text-cyan-900">Ekspor Dokumen</div>
            <div class="text-[10px] text-cyan-600">CSV Excel & JSON</div>
          </div>
        </button>
      </div>

      <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span>Tekan <kbd class="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-300 font-mono text-[10px]">Esc</kbd> untuk menutup</span>
        <button onclick="closeMenuHubModal()" class="px-4 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition">
          Tutup Menu
        </button>
      </div>
    </div>
  </div>
`;

// Selipkan modal sebelum MODAL TAMBAH / EDIT SOAL
tpl = tpl.replace('<!-- MODAL TAMBAH / EDIT SOAL SD KELAS 6 -->', menuHubModal + '\n  <!-- MODAL TAMBAH / EDIT SOAL SD KELAS 6 -->');

// Tambahkan fungsi openMenuHubModal dan closeMenuHubModal di script
const scriptFunctions = `
    function openMenuHubModal() {
      const m = document.getElementById('menu-hub-modal');
      if (m) m.classList.remove('hidden');
    }
    function closeMenuHubModal() {
      const m = document.getElementById('menu-hub-modal');
      if (m) m.classList.add('hidden');
    }
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenuHubModal();
    });
`;

tpl = tpl.replace('function toggleSidebar(forceState = null) {', scriptFunctions + '\n    function toggleSidebar(forceState = null) {');

fs.writeFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/app_template.html', tpl, 'utf8');
console.log('Menu Hub Modal inserted successfully!');

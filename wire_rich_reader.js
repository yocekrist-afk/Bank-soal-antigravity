const fs = require('fs');
let tpl = fs.readFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/app_template.html', 'utf8');

// 1. Tambah file reader untuk mengimpor modul artikel HTML di handleFileImport
const oldHandleImport = `function handleFileImport(event) {
      const file = event.target.files[0];
      if (!file) return;

      const fileName = file.name.toLowerCase();
      const reader = new FileReader();

      reader.onload = (e) => {
        const content = e.target.result;
        if (fileName.endsWith('.html') || fileName.endsWith('.htm')) {
          parseAndImportHTML(content, file.name);
        } else {`;

const newHandleImport = `function handleFileImport(event) {
      const file = event.target.files[0];
      if (!file) return;

      const fileName = file.name.toLowerCase();
      const reader = new FileReader();

      reader.onload = (e) => {
        const content = e.target.result;
        if (fileName.endsWith('.html') || fileName.endsWith('.htm')) {
          // Deteksi apakah ini Modul Artikel Pembelajaran atau Kuis Soal
          if (content.includes('MODUL PEMBELAJARAN') || content.includes('PENGANTAR KONTEKSTUAL') || content.includes('PENDALAMAN KONSEP INTI')) {
            importRichLearningModule(content, file.name);
          } else {
            parseAndImportHTML(content, file.name);
          }
        } else {`;

tpl = tpl.replace(oldHandleImport, newHandleImport);

// 2. Tambahkan Modal Pembaca Modul Lengkap (Reader Modal)
const readerModalHtml = `
  <!-- MODAL PEMBACA MATERI MENDALAM (DEEP LEARNING MODULE READER) -->
  <div id="module-reader-modal" class="fixed inset-0 bg-slate-900/70 backdrop-blur-xs z-50 hidden flex items-center justify-center p-3 sm:p-6">
    <div class="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
      <!-- Header Reader Modal -->
      <div class="bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-700 text-white p-5 flex items-center justify-between shrink-0 shadow-sm">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center text-2xl shadow-xs">
            📖
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-white/25 text-white">Modul Pembelajaran Interaktif Mendalam</span>
              <span class="text-[10px] text-emerald-200">• HOTS & Mnemonic</span>
            </div>
            <h2 class="text-base sm:text-lg font-bold text-white tracking-tight mt-0.5" id="reader-modal-title">Bab 4: Indonesia dan Masyarakat Dunia</h2>
          </div>
        </div>
        <button onclick="closeModuleReaderModal()" class="w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center text-lg font-bold transition">
          ✕
        </button>
      </div>

      <!-- Content Area with Rich Article Styling -->
      <div class="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 custom-scroll text-slate-800 leading-relaxed text-sm sm:text-base" id="reader-modal-body">
        <!-- Konten dari file HTML user disuntikkan ke sini -->
      </div>

      <!-- Footer Reader Modal -->
      <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
        <div class="text-xs text-slate-500 font-medium flex items-center gap-2">
          <span>💡 Dilengkapi: Analogi Sehari-hari, Studi Kasus HOTS, dan Jembatan Keledai (Mnemonic)</span>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="window.print()" class="px-4 py-2 rounded-xl text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition shadow-xs">
            🖨️ Cetak Modul
          </button>
          <button onclick="closeModuleReaderModal()" class="px-5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-xs transition">
            Selesai Membaca ✓
          </button>
        </div>
      </div>
    </div>
  </div>
`;

tpl = tpl.replace('<!-- MODAL PUSAT MODUL CEPAT', readerModalHtml + '\n  <!-- MODAL PUSAT MODUL CEPAT');

// 3. Tambahkan fungsi JavaScript untuk membuka reader dan mengimpor modul
const readerFunctions = `
    // Simpanan Modul Materi Diperkaya (Deep Modules)
    const STORAGE_KEY_RICH_MODULES = 'pintarsd6_rich_modules_v1';
    let richModulesData = {};

    try {
      const savedRich = localStorage.getItem(STORAGE_KEY_RICH_MODULES);
      if (savedRich) richModulesData = JSON.parse(savedRich);
    } catch(e) {}

    function openModuleReaderModal(moduleId) {
      const modal = document.getElementById('module-reader-modal');
      const titleEl = document.getElementById('reader-modal-title');
      const bodyEl = document.getElementById('reader-modal-body');

      const data = richModulesData[moduleId];
      if (data) {
        titleEl.textContent = data.title;
        bodyEl.innerHTML = data.html;
      } else {
        // Fallback jika belum ada data diperkaya
        const mod = window.KURIKULUM_SD6.find(m => m.id === moduleId);
        titleEl.textContent = mod ? mod.bab : 'Modul Pembelajaran';
        bodyEl.innerHTML = \`
          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <h3 class="text-lg font-bold text-slate-800">\${mod ? mod.bab : ''}</h3>
            <p class="text-slate-600 leading-relaxed">\${mod ? mod.summary : ''}</p>
            <div class="p-4 rounded-xl bg-white border border-slate-200">
              <h4 class="font-bold text-indigo-700 mb-2">Poin-Poin Konsep Kunci:</h4>
              <ul class="list-disc list-inside space-y-1 text-slate-700">
                \${(mod && mod.keyPoints ? mod.keyPoints : []).map(p => \`<li>\${escapeHtml(p)}</li>\`).join('')}
              </ul>
            </div>
          </div>
        \`;
      }

      modal.classList.remove('hidden');
    }

    function closeModuleReaderModal() {
      const modal = document.getElementById('module-reader-modal');
      if (modal) modal.classList.add('hidden');
    }

    // Fungsi otomatis mengimpor file materi artikel HTML dari Gemini
    function importRichLearningModule(htmlContent, fileName) {
      try {
        const startIdx = htmlContent.indexOf('<div class="container">');
        const endIdx = htmlContent.lastIndexOf('</div>');
        let richHtml = '';

        if (startIdx !== -1 && endIdx !== -1) {
          richHtml = htmlContent.substring(startIdx + '<div class="container">'.length, endIdx).trim();
          richHtml = richHtml.replace(/<div class="header">[\s\S]*?<\/div>/, '').trim();
        } else {
          richHtml = htmlContent;
        }

        // Tentukan Bab berdasarkan teks
        let targetModuleId = 'IPAS-B4'; // Default ke Bab 4 jika cocok
        let babTitle = 'Bab 4: Indonesia dan Masyarakat Dunia';

        if (htmlContent.includes('Tubuh Kita Bergerak') || htmlContent.includes('Sendi')) {
          targetModuleId = 'IPAS-B1';
          babTitle = 'Bab 1: Bagaimana Tubuh Kita Bergerak?';
        } else if (htmlContent.includes('Tata Surya') || htmlContent.includes('Planet')) {
          targetModuleId = 'IPAS-B5';
          babTitle = 'Bab 5: Menjelajahi Bumi dan Antariksa';
        } else if (htmlContent.includes('Pecahan') || htmlContent.includes('Desimal')) {
          targetModuleId = 'MTK-B1';
          babTitle = 'Bab 1: Pecahan dan Desimal';
        }

        richModulesData[targetModuleId] = {
          title: babTitle,
          html: richHtml
        };

        localStorage.setItem(STORAGE_KEY_RICH_MODULES, JSON.stringify(richModulesData));
        renderCurriculum();

        alert(\`🎉 Berhasil Mengimpor Modul Materi Lengkap!\n\nFile "\${fileName}" telah berhasil disimpan dan disematkan ke dalam: \${babTitle}.\n\nAnda sekarang dapat mengklik tombol "📖 Baca Modul Lengkap" pada kartu bab tersebut untuk membacanya!\`);

        // Beralih ke tab kurikulum dan langsung buka modulnya
        switchTab('curriculum');
        openModuleReaderModal(targetModuleId);
      } catch (err) {
        alert('Gagal memproses file modul materi: ' + err.message);
      }
    }
`;

tpl = tpl.replace('const STORAGE_KEY_Q =', readerFunctions + '\n    const STORAGE_KEY_Q =');

// 4. Update kartu kurikulum di renderCurriculum agar ada tombol "📖 Baca Modul Lengkap"
const oldCardButtons = `<div class="flex items-center justify-between gap-2 pt-3 border-t border-[var(--border)]">
              <button onclick="practiceModule('\${m.id}', '\${escapeHtml(m.bab)}')" class="flex-1 py-2 px-3 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition">
                🎯 Latihan Kuis Bab Ini (\${relatedQs.length})
              </button>
              <button onclick="filterBankByTopic('\${escapeHtml(m.bab)}')" class="py-2 px-3 rounded-lg text-xs font-medium border border-[var(--border)] bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:opacity-90">
                📚 Lihat Bank Soal
              </button>
            </div>`;

const newCardButtons = `<div class="space-y-2 pt-3 border-t border-slate-100">
              <button onclick="openModuleReaderModal('\${m.id}')" class="w-full py-2 px-3 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-xs transition flex items-center justify-center gap-1.5">
                <span>📖</span> Baca Modul Pembelajaran Lengkap \${richModulesData[m.id] ? '✨ (Mendalam)' : ''}
              </button>
              <div class="flex items-center justify-between gap-2">
                <button onclick="practiceModule('\${m.id}', '\${escapeHtml(m.bab)}')" class="flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 transition">
                  🎯 Latihan Kuis (\${relatedQs.length})
                </button>
                <button onclick="filterBankByTopic('\${escapeHtml(m.bab)}')" class="py-1.5 px-3 rounded-lg text-xs font-medium border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition">
                  📚 Bank Soal
                </button>
              </div>
            </div>`;

tpl = tpl.replace(oldCardButtons, newCardButtons);

fs.writeFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/app_template.html', tpl, 'utf8');
console.log('Template upgraded with Rich Module Reader & Importer!');

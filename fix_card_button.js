const fs = require('fs');
let tpl = fs.readFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/app_template.html', 'utf8');

// Target tombol lama di renderCurriculum
const oldButtonsBlock = `<div class="flex items-center justify-between gap-2 pt-3 border-t border-[var(--border)]">
              <button onclick="practiceModule('\${m.id}', '\${escapeHtml(m.bab)}')" class="flex-1 py-2 px-3 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition">
                🎯 Latihan Kuis Bab Ini (\${relatedQs.length})
              </button>
              <button onclick="filterBankByTopic('\${escapeHtml(m.bab)}')" class="py-2 px-3 rounded-lg text-xs font-medium border border-[var(--border)] bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:opacity-90">
                📚 Lihat Bank Soal
              </button>
            </div>`;

const newButtonsBlock = `<div class="space-y-2 pt-3 border-t border-slate-100">
              <button onclick="openModuleReaderModal('\${m.id}')" class="w-full py-2.5 px-3 rounded-xl text-xs font-bold \${richModulesData[m.id] ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-sm ring-2 ring-emerald-400/30' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'} transition flex items-center justify-center gap-2">
                <span>📖</span>
                <span>\${richModulesData[m.id] ? 'Baca Modul Lengkap ✨ (Materi Mendalam Tersedia)' : 'Baca Ringkasan Materi'}</span>
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

if (tpl.includes(oldButtonsBlock)) {
  tpl = tpl.replace(oldButtonsBlock, newButtonsBlock);
  fs.writeFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/app_template.html', tpl, 'utf8');
  console.log('Successfully replaced card buttons with prominent Green Reader button!');
} else {
  console.log('Target string not found!');
}

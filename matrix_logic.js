// =========================================================================
// LOGIKA MATRIKS KELENGKAPAN KURIKULUM & PREFILL SOAL
// =========================================================================
let _activeChapterModuleId = null;

function isQuestionMatchingModule(q, m) {
  if (q.moduleId && q.moduleId === m.id) return true;
  if (q.subject !== m.subject) return false;
  const babCode = m.bab.split(':')[0].trim().toLowerCase();
  const qTopic = (q.topic || '').toLowerCase();
  const qBab = (q.bab || '').toLowerCase();
  if (qTopic.includes(babCode) || qBab.includes(babCode)) return true;
  return false;
}

function renderMatrixTable() {
  const tbody = document.getElementById('matrix-table-body');
  if (!tbody) return;

  const filterStatus = (document.getElementById('matrix-filter-status')?.value) || 'ALL';
  const filterSubject = (document.getElementById('matrix-filter-subject')?.value) || 'ALL';
  const filterSemester = (document.getElementById('matrix-filter-semester')?.value) || 'ALL';
  const searchQuery = (document.getElementById('matrix-search-input')?.value || '').toLowerCase().trim();

  const curList = window.KURIKULUM_SD6 || [];
  const rich = richModulesData || {};

  let totalBab = curList.length;
  let readyModuleCount = 0;
  let readyQuizBabCount = 0;
  let totalQuestionsCount = questions.length;

  // Hitung KPI
  curList.forEach(m => {
    if (rich[m.id]) readyModuleCount++;
    const qCount = questions.filter(q => isQuestionMatchingModule(q, m)).length;
    if (qCount > 0) readyQuizBabCount++;
  });

  // Update KPI UI
  const kpiTotalBab = document.getElementById('matrix-kpi-total-bab');
  if (kpiTotalBab) kpiTotalBab.textContent = totalBab + ' Bab';

  const kpiModulCount = document.getElementById('matrix-kpi-modul-count');
  const kpiModulPct = document.getElementById('matrix-kpi-modul-pct');
  const kpiModulBar = document.getElementById('matrix-kpi-modul-bar');
  const modPct = totalBab > 0 ? Math.round((readyModuleCount / totalBab) * 100) : 0;
  if (kpiModulCount) kpiModulCount.textContent = readyModuleCount + ' / ' + totalBab;
  if (kpiModulPct) kpiModulPct.textContent = modPct + '%';
  if (kpiModulBar) kpiModulBar.style.width = modPct + '%';

  const kpiQuizCount = document.getElementById('matrix-kpi-quiz-count');
  const kpiQuizPct = document.getElementById('matrix-kpi-quiz-pct');
  const kpiQuizBar = document.getElementById('matrix-kpi-quiz-bar');
  const quizPct = totalBab > 0 ? Math.round((readyQuizBabCount / totalBab) * 100) : 0;
  if (kpiQuizCount) kpiQuizCount.textContent = readyQuizBabCount + ' / ' + totalBab;
  if (kpiQuizPct) kpiQuizPct.textContent = quizPct + '%';
  if (kpiQuizBar) kpiQuizBar.style.width = quizPct + '%';

  const kpiTotalSoal = document.getElementById('matrix-kpi-total-soal');
  if (kpiTotalSoal) kpiTotalSoal.textContent = totalQuestionsCount + ' Butir';

  // Subject badge styles
  const subjectBadgeMap = {
    'Matematika': { bg: 'bg-blue-50 text-blue-700 border-blue-200', icon: '📐' },
    'IPAS': { bg: 'bg-emerald-50 text-emerald-700 border-emerald-200', icon: '🌍' },
    'Bahasa Indonesia': { bg: 'bg-amber-50 text-amber-700 border-amber-200', icon: '📖' },
    'Pendidikan Pancasila': { bg: 'bg-rose-50 text-rose-700 border-rose-200', icon: '🦅' },
    'Bahasa Inggris': { bg: 'bg-purple-50 text-purple-700 border-purple-200', icon: '🇬🇧' },
    'PLBJ': { bg: 'bg-orange-50 text-orange-700 border-orange-200', icon: '🏛️' },
    'Seni Rupa': { bg: 'bg-pink-50 text-pink-700 border-pink-200', icon: '🎨' },
    'PAI': { bg: 'bg-teal-50 text-teal-700 border-teal-200', icon: '🕌' },
    'Bahasa Arab': { bg: 'bg-cyan-50 text-cyan-700 border-cyan-200', icon: '🌙' }
  };

  // Filter rows
  let visibleRows = [];
  curList.forEach((m, idx) => {
    const hasRich = !!rich[m.id];
    const qCount = questions.filter(q => isQuestionMatchingModule(q, m)).length;

    // Filter subject
    if (filterSubject !== 'ALL' && m.subject !== filterSubject) return;

    // Filter semester
    if (filterSemester !== 'ALL' && String(m.semester) !== filterSemester) return;

    // Filter status
    if (filterStatus === 'NEED_MODULE' && hasRich) return;
    if (filterStatus === 'NEED_QUESTIONS' && qCount > 0) return;
    if (filterStatus === 'READY_ALL' && (!hasRich || qCount === 0)) return;

    // Filter search
    if (searchQuery) {
      const matchText = (m.subject + ' ' + m.bab + ' ' + (m.summary || '')).toLowerCase();
      if (!matchText.includes(searchQuery)) return;
    }

    visibleRows.push({ m, idx: idx + 1, hasRich, qCount });
  });

  const emptyEl = document.getElementById('matrix-empty-state');
  if (visibleRows.length === 0) {
    tbody.innerHTML = '';
    if (emptyEl) emptyEl.classList.remove('hidden');
    return;
  }
  if (emptyEl) emptyEl.classList.add('hidden');

  let htmlRows = '';
  visibleRows.forEach(item => {
    const { m, idx, hasRich, qCount } = item;
    const bStyle = subjectBadgeMap[m.subject] || { bg: 'bg-slate-100 text-slate-700 border-slate-200', icon: '📚' };

    // Material status badge & button
    const materialHtml = hasRich
      ? `<div class="flex items-center gap-2">
           <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
             <span>✨</span> Modul Mendalam Siap
           </span>
           <button onclick="openModuleReaderModal('${m.id}')" class="px-2 py-1 rounded-lg text-[11px] font-semibold bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition">
             📖 Baca
           </button>
         </div>`
      : `<div class="flex items-center gap-2">
           <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800 border border-amber-300">
             <span>📝</span> Ringkasan Standar
           </span>
           <button onclick="openModuleReaderModal('${m.id}')" class="px-2 py-1 rounded-lg text-[11px] font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition">
             Lihat
           </button>
         </div>`;

    // Quiz status badge & button
    const quizHtml = qCount > 0
      ? `<div class="flex items-center gap-2">
           <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-100 text-blue-800 border border-blue-300">
             <span>🎯</span> ${qCount} Soal Tersedia
           </span>
           <button onclick="startQuizForBab('${m.subject}', '${m.id}', '${m.bab.replace(/'/g, "\\'")}')" class="px-2 py-1 rounded-lg text-[11px] font-semibold bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 transition">
             🎮 Uji Kuis
           </button>
         </div>`
      : `<div class="flex items-center gap-2">
           <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-rose-100 text-rose-800 border border-rose-300">
             <span>⚠️</span> 0 Soal (Kosong)
           </span>
         </div>`;

    // Quick action buttons
    const actionHtml = `
      <div class="flex items-center justify-center gap-1.5">
        <button onclick="openModalForChapter('${m.subject}', ${m.semester}, '${m.bab.replace(/'/g, "\\'")}', '${m.id}')" 
                title="Tambah Soal untuk Bab ini"
                class="px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 transition flex items-center gap-1 shadow-xs">
          <span>➕</span> Tambah Soal
        </button>
        <button onclick="openModuleReaderModal('${m.id}')" 
                title="Buka Modul Belajar"
                class="px-2.5 py-1.5 rounded-lg text-[11px] font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition">
          📖 Modul
        </button>
      </div>
    `;

    htmlRows += `
      <tr class="hover:bg-slate-50/80 transition">
        <td class="p-3.5 text-center text-slate-400 font-bold">${idx}</td>
        <td class="p-3.5">
          <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-bold border ${bStyle.bg}">
            <span>${bStyle.icon}</span> ${m.subject}
          </span>
        </td>
        <td class="p-3.5">
          <div class="font-extrabold text-slate-900 text-xs sm:text-sm">${m.bab}</div>
          <div class="text-[11px] text-slate-500 font-normal">Semester ${m.semester} • ${m.summary ? m.summary.substring(0, 65) + '...' : ''}</div>
        </td>
        <td class="p-3.5">${materialHtml}</td>
        <td class="p-3.5">${quizHtml}</td>
        <td class="p-3.5 text-center">${actionHtml}</td>
      </tr>
    `;
  });

  tbody.innerHTML = htmlRows;
}

// Helper untuk buka modal soal dengan prefill bab & mapel
function openModalForChapter(subject, semester, topic, moduleId) {
  _activeChapterModuleId = moduleId;
  openModal();
  document.getElementById('modal-title').textContent = 'Tambah Soal Baru (' + subject + ' • ' + topic.split(':')[0] + ')';
  document.getElementById('form-subject').value = subject;
  document.getElementById('form-semester').value = String(semester || 1);
  document.getElementById('form-topic').value = topic;
}

// Helper untuk langsung mulai kuis dari baris matriks
function startQuizForBab(subject, moduleId, babTitle) {
  switchTab('quiz');
  const topicSelect = document.getElementById('quiz-topic-select');
  if (topicSelect) {
    const opts = Array.from(topicSelect.options);
    const babPrefix = babTitle.split(':')[0].toLowerCase();
    const match = opts.find(o => o.value.toLowerCase().includes(babPrefix) || o.text.toLowerCase().includes(babPrefix));
    if (match) {
      topicSelect.value = match.value;
    }
  }
  startNewQuiz();
}

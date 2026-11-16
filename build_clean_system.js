const fs = require('fs');
const cp = require('child_process');
const path = require('path');

const cwd = 'C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard';
const artifactPath = 'C:/Users/YOCE/.gemini/antigravity/brain/3d852900-80ec-47d9-9125-5b4cbd25c891/bank_soal_dashboard.html';

console.log('1. Loading base clean template from git commit 62b7e65...');
let tpl = cp.execSync('git show 62b7e65:app_template.html', { cwd, encoding: 'utf8' });
console.log('Base template length:', tpl.length);

// 2. KaTeX in <head> and 3D Flip Styles
console.log('2. Applying KaTeX and 3D Flip styles...');
const katexHead = `  <!-- KaTeX for Math Equations -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>
</head>`;
tpl = tpl.replace('</head>', () => katexHead);

const flipCss = `
    /* Flashcard 3D Flip Styles */
    .perspective-1000 { perspective: 1000px; }
    .transform-style-3d { transform-style: preserve-3d; }
    .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
    .rotate-y-180 { transform: rotateY(180deg); }
  </style>`;
tpl = tpl.replace('</style>', () => flipCss);

// 3. Flashcard tab in Sidebar & Top Bar
console.log('3. Adding Flashcard navigation tabs...');
const oldSideGroup1 = `<button onclick="switchTab('quiz'); autoCloseSidebarOnMobile();" id="side-tab-quiz" class="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition text-left text-slate-300 hover:text-white hover:bg-slate-800/80">
              <span class="text-base shrink-0">🎮</span>
              <span class="sidebar-text truncate">Kuis Interaktif Anak</span>
            </button>`;

const newSideGroup1 = `<button onclick="switchTab('matrix'); autoCloseSidebarOnMobile();" id="side-tab-matrix" class="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition text-left text-slate-300 hover:text-white hover:bg-slate-800/80">
              <span class="text-base shrink-0">📊</span>
              <span class="sidebar-text truncate">Matriks Progres & Status Bab</span>
            </button>
            <button onclick="switchTab('quiz'); autoCloseSidebarOnMobile();" id="side-tab-quiz" class="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition text-left text-slate-300 hover:text-white hover:bg-slate-800/80">
              <span class="text-base shrink-0">🎮</span>
              <span class="sidebar-text truncate">Kuis Interaktif Anak</span>
            </button>
            <button onclick="switchTab('flashcards'); autoCloseSidebarOnMobile();" id="side-tab-flashcards" class="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition text-left text-slate-300 hover:text-white hover:bg-slate-800/80">
              <span class="text-base shrink-0">🃏</span>
              <span class="sidebar-text truncate">Flashcard Hafalan Cepat</span>
            </button>`;
tpl = tpl.replace(oldSideGroup1, () => newSideGroup1);

const oldTopGroup1 = `<button onclick="switchTab('quiz')" id="tab-quiz" class="px-3 py-1.5 rounded-lg text-xs font-semibold transition text-slate-600 hover:text-slate-900 hover:bg-slate-100 flex items-center gap-1.5">
              <span>🎮</span> 2. Kuis Interaktif
            </button>`;

const newTopGroup1 = `<button onclick="switchTab('matrix')" id="tab-matrix" class="px-3 py-1.5 rounded-lg text-xs font-semibold transition text-slate-600 hover:text-slate-900 hover:bg-slate-100 flex items-center gap-1.5">
              <span>📊</span> Matriks Status Bab
            </button>
            <button onclick="switchTab('quiz')" id="tab-quiz" class="px-3 py-1.5 rounded-lg text-xs font-semibold transition text-slate-600 hover:text-slate-900 hover:bg-slate-100 flex items-center gap-1.5">
              <span>🎮</span> 2. Kuis Interaktif
            </button>
            <button onclick="switchTab('flashcards')" id="tab-flashcards" class="px-3 py-1.5 rounded-lg text-xs font-semibold transition text-slate-600 hover:text-slate-900 hover:bg-slate-100 flex items-center gap-1.5">
              <span>🃏</span> 3. Flashcard Cepat
            </button>`;
tpl = tpl.replace(oldTopGroup1, () => newTopGroup1);

// 4. Section View Flashcards dengan Filter Bab
console.log('4. Adding Flashcards section view with Bab filter...');
const flashcardSectionHtml = `
    <!-- ========================================================================= -->
    <!-- TAB FLASHCARD HAFALAN INTERAKTIF ANAK SD (KARTU BOLAK-BALIK 3D)          -->
    <!-- ========================================================================= -->
    <section id="view-flashcards" class="hidden space-y-5">
      <!-- Control Header Flashcard -->
      <div class="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div class="flex flex-wrap items-center gap-3">
          <div>
            <label class="block text-xs font-semibold text-slate-500 mb-1">Mata Pelajaran:</label>
            <select id="fc-subject" onchange="onFlashcardSubjectChange()" class="px-3 py-1.5 rounded-xl text-xs bg-slate-50 border border-slate-200 font-semibold text-slate-800">
              <option value="ALL">🌟 Semua Mata Pelajaran</option>
              <option value="Matematika">📐 Matematika</option>
              <option value="IPAS">🌍 IPAS (Sains & Sosial)</option>
              <option value="Bahasa Indonesia">📖 Bahasa Indonesia</option>
              <option value="Pendidikan Pancasila">🦅 Pendidikan Pancasila</option>
              <option value="Bahasa Inggris">🇬🇧 Bahasa Inggris</option>
              <option value="PLBJ">🏛️ PLBJ</option>
              <option value="Seni Rupa">🎨 Seni Rupa</option>
              <option value="PAI">🕌 PAI</option>
              <option value="Bahasa Arab">🌙 Bahasa Arab</option>
            </select>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-500 mb-1">Pilih Bab:</label>
            <select id="fc-bab-select" onchange="renderFlashcards()" class="px-3 py-1.5 rounded-xl text-xs bg-slate-50 border border-slate-200 font-semibold text-slate-800 max-w-xs">
              <option value="ALL">📚 Semua Bab</option>
            </select>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-500 mb-1">Mode Tampilan:</label>
            <select id="fc-mode" onchange="toggleFlashcardMode()" class="px-3 py-1.5 rounded-xl text-xs bg-slate-50 border border-slate-200 font-semibold text-slate-800">
              <option value="FOCUS">🎯 Mode Fokus (1 Kartu per 1 Kartu)</option>
              <option value="GRID">📑 Mode Grid (Semua Kartu)</option>
            </select>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <button onclick="shuffleFlashcards()" class="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition flex items-center gap-1.5">
            <span>🔀</span> Acak Kartu
          </button>
        </div>
      </div>

      <!-- FOCUS VIEW (1 KARTU 3D INTERAKTIF) -->
      <div id="fc-focus-container" class="flex flex-col items-center justify-center py-6">
        <div class="text-xs font-bold text-slate-400 mb-3" id="fc-counter">Kartu 1 / 10</div>

        <!-- Flip Card Wrapper -->
        <div class="w-full max-w-xl h-80 sm:h-96 perspective-1000 cursor-pointer" onclick="flipCurrentCard()">
          <div id="fc-card-flipper" class="w-full h-full relative transform-style-3d transition-transform duration-500 rounded-3xl shadow-xl">
            <!-- Front Card -->
            <div class="absolute inset-0 bg-white border-2 border-indigo-200 rounded-3xl p-8 flex flex-col justify-between backface-hidden shadow-lg">
              <div class="flex items-center justify-between">
                <span class="px-3 py-1 rounded-full text-xs font-extrabold bg-indigo-50 text-indigo-600 uppercase tracking-wider" id="fc-front-tag">Pertanyaan</span>
                <span class="text-xs text-slate-400 font-medium">Klik untuk Balik 🔄</span>
              </div>
              <div class="my-auto text-center font-bold text-lg sm:text-xl text-slate-800 leading-relaxed px-4" id="fc-front-text">
                ...
              </div>
              <div class="text-center text-xs text-slate-400">
                💡 Pikirkan jawabannya, lalu klik kartu untuk memeriksa
              </div>
            </div>

            <!-- Back Card -->
            <div class="absolute inset-0 bg-gradient-to-br from-indigo-700 via-indigo-800 to-slate-900 text-white border-2 border-indigo-500 rounded-3xl p-8 flex flex-col justify-between backface-hidden rotate-y-180 shadow-2xl">
              <div class="flex items-center justify-between">
                <span class="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-500/30 text-emerald-300 uppercase tracking-wider">Kunci Jawaban</span>
                <span class="text-xs text-indigo-200">Klik untuk Balik Depan 🔄</span>
              </div>
              <div class="my-auto text-center space-y-3 px-4">
                <div class="font-extrabold text-xl sm:text-2xl text-emerald-400" id="fc-back-title">...</div>
                <div class="text-xs sm:text-sm text-indigo-100 leading-relaxed max-h-40 overflow-y-auto custom-scroll" id="fc-back-desc">...</div>
              </div>
              <div class="text-center text-xs text-indigo-300 font-medium">
                ✨ Hebat! Hafal terus untuk kuasai konsep materi
              </div>
            </div>
          </div>
        </div>

        <!-- Controls: Prev, Flip, Next -->
        <div class="flex items-center gap-4 mt-6">
          <button onclick="prevFlashcard()" class="w-12 h-12 rounded-2xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-lg shadow-xs transition active:scale-95">
            ◀
          </button>
          <button onclick="flipCurrentCard()" class="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-md transition active:scale-95 flex items-center gap-2">
            <span>🔄</span> Balik Kartu
          </button>
          <button onclick="nextFlashcard()" class="w-12 h-12 rounded-2xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-lg shadow-xs transition active:scale-95">
            ▶
          </button>
        </div>
      </div>

      <!-- GRID VIEW -->
      <div id="fc-grid-container" class="hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- Rendered by JS -->
      </div>
    </section>
`;
const matrixSectionHtml = fs.readFileSync(path.join(cwd, 'matrix_section.html'), 'utf8');
tpl = tpl.replace('<section id="view-quiz"', () => matrixSectionHtml + '\n' + flashcardSectionHtml + '\n    <section id="view-quiz"');

// 5. Upgrade Filter Bar di View-Curriculum agar ada Pilih Bab
// Banner Shortcut Matriks di View-Curriculum
const matrixBannerHtml = `
      <!-- BANNER SHORTCUT MATRIKS KELENGKAPAN -->
      <div class="mb-5 p-4 rounded-2xl bg-linear-to-r from-indigo-900 via-indigo-950 to-slate-900 text-white shadow-md border border-indigo-700/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-xl shrink-0">
            📊
          </div>
          <div>
            <h4 class="font-extrabold text-sm text-white">Matriks Kelengkapan Materi & Kuis Siswa</h4>
            <p class="text-xs text-indigo-200">Cek bab mana saja yang sudah lengkap modul mendalamnya dan sudah memiliki bank soal kuis.</p>
          </div>
        </div>
        <button onclick="switchTab('matrix')" class="px-4 py-2 rounded-xl text-xs font-extrabold bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-sm transition flex items-center gap-1.5 shrink-0">
          <span>Buka Matriks Progres</span>
          <span>→</span>
        </button>
      </div>`;
tpl = tpl.replace('<section id="view-curriculum" class="space-y-4">', () => '<section id="view-curriculum" class="space-y-4">\n' + matrixBannerHtml);

console.log('5. Adding Bab dropdown filter to view-curriculum...');
const oldCurSemesterDiv = `<div class="flex items-center gap-2">
          <label class="text-xs text-[var(--muted-foreground)]">Semester:</label>
          <select id="curr-semester" onchange="renderCurriculum()" class="px-3 py-1.5 rounded-lg text-xs bg-[var(--background)] border border-[var(--border)]">
            <option value="ALL">Semester 1 & 2 (Lengkap)</option>
            <option value="1">Semester 1 (Ganjil)</option>
            <option value="2">Semester 2 (Genap)</option>
          </select>
        </div>`;

const newCurSemesterDiv = `<div class="flex flex-wrap items-center gap-2">
          <div>
            <label class="text-xs font-semibold text-slate-500 mr-1">Semester:</label>
            <select id="curr-semester" onchange="onCurriculumSemesterChange()" class="px-3 py-1.5 rounded-xl text-xs bg-slate-50 border border-slate-200 font-semibold text-slate-800 shadow-xs">
              <option value="ALL">🌟 Semua Semester</option>
              <option value="1">Semester 1 (Ganjil)</option>
              <option value="2">Semester 2 (Genap)</option>
            </select>
          </div>
          <div>
            <label class="text-xs font-semibold text-indigo-700 mr-1">📖 Pilih Bab Materi:</label>
            <select id="curr-bab-select" onchange="renderCurriculum()" class="px-3 py-1.5 rounded-xl text-xs bg-indigo-50/70 border border-indigo-200 font-bold text-indigo-900 shadow-xs max-w-xs">
              <option value="ALL">📚 Tampilkan Semua Bab</option>
            </select>
          </div>
        </div>`;
tpl = tpl.replace(oldCurSemesterDiv, () => newCurSemesterDiv);

// Tambah tombol filter subjek kurikulum untuk PLBJ, Seni Rupa, PAI, Bahasa Arab
const oldCurBtnEng = `<button onclick="setCurrSubject('Bahasa Inggris')" id="csubj-Bahasa Inggris" class="px-3 py-1.5 rounded-lg text-xs font-medium bg-[var(--background)] border border-[var(--border)]">🇬🇧 Bahasa Inggris</button>`;
const newCurBtnsAll = `<button onclick="setCurrSubject('Bahasa Inggris')" id="csubj-Bahasa Inggris" class="px-3 py-1.5 rounded-lg text-xs font-medium bg-[var(--background)] border border-[var(--border)]">🇬🇧 Bahasa Inggris</button>
        <button onclick="setCurrSubject('PLBJ')" id="csubj-PLBJ" class="px-3 py-1.5 rounded-lg text-xs font-medium bg-[var(--background)] border border-[var(--border)]">🏛️ PLBJ</button>
        <button onclick="setCurrSubject('Seni Rupa')" id="csubj-Seni Rupa" class="px-3 py-1.5 rounded-lg text-xs font-medium bg-[var(--background)] border border-[var(--border)]">🎨 Seni Rupa</button>
        <button onclick="setCurrSubject('PAI')" id="csubj-PAI" class="px-3 py-1.5 rounded-lg text-xs font-medium bg-[var(--background)] border border-[var(--border)]">🕌 PAI</button>
        <button onclick="setCurrSubject('Bahasa Arab')" id="csubj-Bahasa Arab" class="px-3 py-1.5 rounded-lg text-xs font-medium bg-[var(--background)] border border-[var(--border)]">🌙 Bahasa Arab</button>`;
tpl = tpl.replace(oldCurBtnEng, () => newCurBtnsAll);
tpl = tpl.replace('Semua Mapel (5)', 'Semua Mapel (9)');

// Tambah opsi subjek pada form modal, filter bank, dan paket ujian
const oldFormSelectSubj = `<select id="form-subject" class="w-full px-3 py-2 rounded-lg text-xs bg-[var(--background)] border border-[var(--border)]">`;
const oldFormOptions = `<option value="Bahasa Inggris">Bahasa Inggris</option>\n            </select>`;
const newFormOptions = `<option value="Bahasa Inggris">Bahasa Inggris</option>
              <option value="PLBJ">PLBJ</option>
              <option value="Seni Rupa">Seni Rupa</option>
              <option value="PAI">PAI</option>
              <option value="Bahasa Arab">Bahasa Arab</option>
            </select>`;
tpl = tpl.replace(oldFormOptions, () => newFormOptions);

// Filter bank soal
const oldFilterBankSubj = `<select id="filter-subject" onchange="renderBank()" class="w-full px-3 py-2 rounded-lg text-xs bg-[var(--background)] border border-[var(--border)]">`;
tpl = tpl.replace(
  '<option value="Bahasa Inggris">Bahasa Inggris</option>\n          </select>',
  '<option value="Bahasa Inggris">Bahasa Inggris</option>\n          <option value="PLBJ">PLBJ</option>\n          <option value="Seni Rupa">Seni Rupa</option>\n          <option value="PAI">PAI</option>\n          <option value="Bahasa Arab">Bahasa Arab</option>\n          </select>'
);

// Paket soal ujian
tpl = tpl.replace(
  '<option value="Bahasa Inggris">Bahasa Inggris</option>\n            </select>',
  '<option value="Bahasa Inggris">Bahasa Inggris</option>\n            <option value="PLBJ">PLBJ</option>\n            <option value="Seni Rupa">Seni Rupa</option>\n            <option value="PAI">PAI</option>\n            <option value="Bahasa Arab">Bahasa Arab</option>\n            </select>'
);

// Sidebar quick filter pills
const oldPillEng = `<button onclick="quickFilterSubject('Pendidikan Pancasila')" class="px-2.5 py-1.5 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition text-left truncate flex items-center gap-1">\n              <span>🦅</span> PPKn\n            </button>`;
const newPillsAll = `<button onclick="quickFilterSubject('Pendidikan Pancasila')" class="px-2.5 py-1.5 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition text-left truncate flex items-center gap-1">\n              <span>🦅</span> PPKn\n            </button>
            <button onclick="quickFilterSubject('Bahasa Inggris')" class="px-2.5 py-1.5 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition text-left truncate flex items-center gap-1">
              <span>🇬🇧</span> B.Inggris
            </button>
            <button onclick="quickFilterSubject('PLBJ')" class="px-2.5 py-1.5 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition text-left truncate flex items-center gap-1">
              <span>🏛️</span> PLBJ
            </button>
            <button onclick="quickFilterSubject('Seni Rupa')" class="px-2.5 py-1.5 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition text-left truncate flex items-center gap-1">
              <span>🎨</span> Seni Rupa
            </button>
            <button onclick="quickFilterSubject('PAI')" class="px-2.5 py-1.5 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition text-left truncate flex items-center gap-1">
              <span>🕌</span> PAI
            </button>
            <button onclick="quickFilterSubject('Bahasa Arab')" class="px-2.5 py-1.5 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition text-left truncate flex items-center gap-1">
              <span>🌙</span> B.Arab
            </button>`;
tpl = tpl.replace(oldPillEng, () => newPillsAll);


// 6. Upgrade Filter Bar di View-Quiz agar ada Dropdown Pilih Bab Kuis
console.log('6. Adding Bab dropdown filter to view-quiz...');
const oldQuizFilterGroup = `<div>
            <label class="block text-xs text-[var(--muted-foreground)] mb-1">Pilih Mata Pelajaran Kuis</label>
            <select id="quiz-subject-select" onchange="startNewQuiz()" class="px-3 py-1.5 rounded-lg text-xs bg-[var(--background)] border border-[var(--border)] font-medium">
              <option value="ALL">🌟 Semua Mata Pelajaran (Campuran)</option>
              <option value="Matematika">📐 Matematika Kelas 6</option>
              <option value="IPAS">🌍 IPAS (Sains & Sosial) Kelas 6</option>
              <option value="Bahasa Indonesia">📖 Bahasa Indonesia Kelas 6</option>
              <option value="Pendidikan Pancasila">🦅 Pendidikan Pancasila Kelas 6</option>
              <option value="Bahasa Inggris">🇬🇧 Bahasa Inggris Kelas 6</option>
              <option value="PLBJ">🏛️ PLBJ (Budaya Jakarta) Kelas 6</option>
              <option value="Seni Rupa">🎨 Seni Rupa Kelas 6</option>
              <option value="PAI">🕌 PAI & Budi Pekerti Kelas 6</option>
              <option value="Bahasa Arab">🌙 Bahasa Arab Kelas 6</option>
            </select>
          </div>

          <div>
            <label class="block text-xs text-[var(--muted-foreground)] mb-1">Semester</label>
            <select id="quiz-semester-select" onchange="startNewQuiz()" class="px-3 py-1.5 rounded-lg text-xs bg-[var(--background)] border border-[var(--border)] font-medium">
              <option value="ALL">Semester 1 & 2</option>
              <option value="1">Semester 1 (Ganjil)</option>
              <option value="2">Semester 2 (Genap)</option>
            </select>
          </div>`;

const newQuizFilterGroup = `<div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Mata Pelajaran</label>
            <select id="quiz-subject-select" onchange="onQuizSubjectChange()" class="px-3 py-1.5 rounded-xl text-xs bg-white border border-slate-200 font-semibold text-slate-800 shadow-xs">
              <option value="ALL">🌟 Semua Mapel (Campuran)</option>
              <option value="Matematika">📐 Matematika</option>
              <option value="IPAS">🌍 IPAS (Sains & Sosial)</option>
              <option value="Bahasa Indonesia">📖 Bahasa Indonesia</option>
              <option value="Pendidikan Pancasila">🦅 Pendidikan Pancasila</option>
              <option value="Bahasa Inggris">🇬🇧 Bahasa Inggris</option>
            </select>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Semester</label>
            <select id="quiz-semester-select" onchange="onQuizSemesterChange()" class="px-3 py-1.5 rounded-xl text-xs bg-white border border-slate-200 font-semibold text-slate-800 shadow-xs">
              <option value="ALL">Semua Semester</option>
              <option value="1">Semester 1 (Ganjil)</option>
              <option value="2">Semester 2 (Genap)</option>
            </select>
          </div>

          <div>
            <label class="block text-xs font-semibold text-indigo-700 mb-1">🎯 Pilih Bab / Topik Kuis</label>
            <select id="quiz-topic-select" onchange="startNewQuiz()" class="px-3 py-1.5 rounded-xl text-xs bg-indigo-50 border border-indigo-200 font-bold text-indigo-900 shadow-xs max-w-xs">
              <option value="ALL">🌟 Semua Bab (Campuran)</option>
            </select>
          </div>`;
tpl = tpl.replace(oldQuizFilterGroup, () => newQuizFilterGroup);

// 7. Modal Tambah / Edit Soal dengan Rumus KaTeX & Lampiran Gambar
console.log('7. Updating question modal with math formula & image upload...');
const oldQuestionField = `<div>
        <label class="block text-xs font-medium mb-1">Pertanyaan Soal</label>
        <textarea id="form-question" rows="3" placeholder="Tuliskan soal dengan bahasa yang jelas untuk siswa kelas 6 SD..." class="w-full px-3 py-2 rounded-lg text-xs bg-[var(--background)] border border-[var(--border)]"></textarea>
      </div>`;

const newQuestionField = `<!-- Editor Pertanyaan dengan Dukungan Rumus KaTeX & Gambar -->
      <div>
        <div class="flex items-center justify-between mb-1">
          <label class="block text-xs font-semibold text-slate-700">Pertanyaan / Pokok Soal</label>
          <!-- Tombol Pintasan Rumus KaTeX -->
          <div class="flex items-center gap-1">
            <span class="text-[10px] text-slate-400 mr-1">Sisip Rumus:</span>
            <button type="button" onclick="insertMathFormula('\\\\frac{a}{b}')" class="px-1.5 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-[10px] font-mono border border-slate-200" title="Pecahan: \\frac{a}{b}">a/b</button>
            <button type="button" onclick="insertMathFormula('x^2')" class="px-1.5 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-[10px] font-mono border border-slate-200" title="Pangkat: x^2">x²</button>
            <button type="button" onclick="insertMathFormula('\\\\sqrt{x}')" class="px-1.5 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-[10px] font-mono border border-slate-200" title="Akar: \\sqrt{x}">√x</button>
            <button type="button" onclick="insertMathFormula('\\\\times')" class="px-1.5 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-[10px] font-mono border border-slate-200" title="Kali: \\times">×</button>
            <button type="button" onclick="insertMathFormula('\\\\div')" class="px-1.5 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-[10px] font-mono border border-slate-200" title="Bagi: \\div">÷</button>
            <button type="button" onclick="insertMathFormula('\\\\pi')" class="px-1.5 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-[10px] font-mono border border-slate-200" title="Pi: \\pi">π</button>
          </div>
        </div>
        <textarea id="form-question" rows="3" oninput="updateLivePreview()" placeholder="Tuliskan soal. Gunakan tanda $...$ untuk rumus matematika, misal: Hitunglah hasil $\\frac{3}{4} \\times \\frac{2}{5}$..." class="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:bg-white focus:border-indigo-500 transition font-sans"></textarea>
      </div>

      <!-- Lampiran Gambar Soal (URL atau Unggah File Langsung) -->
      <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
        <div class="flex items-center justify-between">
          <label class="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
            <span>🖼️</span> Lampirkan Gambar / Diagram Soal (Opsional)
          </label>
          <button type="button" onclick="clearFormImage()" id="btn-clear-img" class="text-[10px] text-rose-500 hover:underline hidden">Hapus Gambar</button>
        </div>
        <div grid grid-cols-1 sm:grid-cols-2 gap-2">
          <input type="text" id="form-image-url" oninput="previewImageFromUrl()" placeholder="Tempel URL gambar (https://...)" class="w-full px-3 py-1.5 rounded-lg text-xs bg-white border border-slate-200" />
          <label class="px-3 py-1.5 rounded-lg text-xs bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 transition cursor-pointer text-center font-medium">
            📁 Pilih Gambar dari Komputer...
            <input type="file" id="form-image-file" accept="image/*" class="hidden" onchange="previewImageFromFile(event)" />
          </label>
        </div>
        <div id="form-image-preview-box" class="hidden pt-1">
          <img id="form-image-preview" src="" alt="Pratinjau Gambar Soal" class="max-h-40 rounded-lg border border-slate-200 mx-auto object-contain" />
        </div>
      </div>

      <!-- Live KaTeX Preview Box -->
      <div id="form-katex-preview-box" class="hidden p-3 rounded-xl bg-indigo-50/60 border border-indigo-200/80 text-xs space-y-1">
        <div class="font-bold text-indigo-700 flex items-center gap-1">
          <span>👁️</span> Pratinjau Tampilan Rumus:
        </div>
        <div id="form-katex-preview-text" class="text-slate-800 font-medium leading-relaxed"></div>
      </div>`;
tpl = tpl.replace(oldQuestionField, () => newQuestionField);

// 8. Modal Reader Modul Lengkap
console.log('8. Adding Reader modal HTML...');
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
        <!-- Konten dari file HTML disuntikkan ke sini -->
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
tpl = tpl.replace('<!-- MODAL PUSAT MODUL CEPAT', () => readerModalHtml + '\n  <!-- MODAL PUSAT MODUL CEPAT');

// 9. Extract original clean JS logic
console.log('9. Preparing clean core JavaScript logic...');
const origScriptStart = tpl.indexOf('<script>', 2500) + 8;
const origScriptEnd = tpl.lastIndexOf('</script>');
let coreJs = tpl.substring(origScriptStart, origScriptEnd);

// Read rich_modules.json
const richModules = JSON.parse(fs.readFileSync(path.join(cwd, 'rich_modules.json'), 'utf8'));

// Prepare the Flashcard data & logic
const flashcardCode = `
    // =========================================================================
    // OPSI A: DATA & LOGIKA FLASHCARD HAFALAN INTERAKTIF (3D FLIP CARD)
    // =========================================================================
    const DEFAULT_FLASHCARDS = [
      {
        subject: 'IPAS',
        frontTag: 'Bab 1: Sistem Gerak',
        front: 'Apa fungsi utama Rangka dan Sendi Peluru pada tubuh manusia?',
        backTitle: 'Gerak ke Segala Arah',
        backDesc: 'Rangka sebagai alat gerak pasif pelindung organ vital. Sendi peluru (pada gelang bahu dan panggul) memungkinkan pergerakan bebas ke segala arah.'
      },
      {
        subject: 'IPAS',
        frontTag: 'Bab 2: Kemerdekaan RI',
        front: 'Kapan Sumpah Pemuda dicetuskan dan apa semboyan 3G penjelajah samudra?',
        backTitle: '28 Oktober 1928 & Gold, Glory, Gospel',
        backDesc: 'Sumpah Pemuda menegaskan satu tanah air, satu bangsa, dan satu bahasa Indonesia. Semboyan 3G: Gold (kekayaan/rempah), Glory (kejayaan), Gospel (penyebaran agama).'
      },
      {
        subject: 'IPAS',
        frontTag: 'Bab 5: Tata Surya',
        front: 'Apa perbedaan mendasar antara Rotasi Bumi dan Revolusi Bumi?',
        backTitle: 'Rotasi: 24 Jam | Revolusi: 365¼ Hari',
        backDesc: 'Rotasi menyebabkan siang-malam & perbedaan zona waktu (WIB/WITA/WIT). Revolusi menyebabkan pergantian musim dan dasar kalender Masehi.'
      },
      {
        subject: 'IPAS',
        frontTag: 'Bab 3: 6 Benua',
        front: 'Sebutkan benua terluas di dunia dan fenomena polder di Belanda!',
        backTitle: 'Benua Asia & Sistem Polder',
        backDesc: 'Asia adalah benua terluas. Sistem polder di Belanda adalah pengeringan lahan di bawah permukaan laut menggunakan tanggul dan kincir angin pemompa air.'
      },
      {
        subject: 'Matematika',
        frontTag: 'Bab 1: Pecahan',
        front: 'Berapakah bentuk desimal dari pecahan $\\\\frac{3}{4}$ dan $\\\\frac{1}{8}$?',
        backTitle: '0,75 dan 0,125',
        backDesc: 'Konversi pecahan ke desimal: $\\\\frac{3}{4} = 0,75$ (75%) dan $\\\\frac{1}{8} = 0,125$ (12,5%).'
      },
      {
        subject: 'Matematika',
        frontTag: 'Bab 3: Bangun Ruang',
        front: 'Tuliskan rumus Volume dan Luas Permukaan Balok ($p, l, t$)!',
        backTitle: '$V = p \\\\times l \\\\times t$',
        backDesc: 'Volume = $p \\\\times l \\\\times t$ • Luas Permukaan = $2(p \\\\times l + p \\\\times t + l \\\\times t)$. Balok memiliki 6 sisi, 12 rusuk, dan 8 titik sudut.'
      },
      {
        subject: 'Matematika',
        frontTag: 'Bab 4: Statistika',
        front: 'Apa perbedaan antara Mean, Median, dan Modus?',
        backTitle: 'Rata-rata, Nilai Tengah & Paling Sering',
        backDesc: 'Mean = Rata-rata hitung • Median = Nilai tengah data yang telah diurutkan • Modus = Nilai yang paling sering muncul (frekuensi terbanyak).'
      },
      {
        subject: 'Bahasa Indonesia',
        frontTag: 'Bab 1: Tokoh Cerita',
        front: 'Apa perbedaan karakter Protagonis, Antagonis, dan Tritagonis?',
        backTitle: 'Tokoh Utama, Penentang & Penengah',
        backDesc: 'Protagonis: Tokoh utama berwatak baik • Antagonis: Tokoh penentang/berwatak jahat • Tritagonis: Tokoh penengah atau pendukung.'
      },
      {
        subject: 'Bahasa Indonesia',
        frontTag: 'Bab 4: Formulir',
        front: 'Informasi apa saja yang wajib dicantumkan dalam Pengisian Formulir Ujian / Pendaftaran?',
        backTitle: 'Identitas Diri Lengkap & Akurat',
        backDesc: 'Nama lengkap, NISN, tempat tanggal lahir, nama orang tua, alamat, dan tanda tangan pemohon.'
      },
      {
        subject: 'Pendidikan Pancasila',
        frontTag: 'Bab 1: Nilai Pancasila',
        front: 'Apa lambang dan makna Sila ke-2 serta Sila ke-3 Pancasila?',
        backTitle: 'Rantai Emas & Pohon Beringin',
        backDesc: 'Sila ke-2 (Rantai): Kemanusiaan, tolong-menolong tanpa membeda-bedakan. Sila ke-3 (Pohon Beringin): Persatuan Indonesia di bawah naungan keragaman budaya.'
      },
      {
        subject: 'Bahasa Inggris',
        frontTag: 'Bab 1: Past Tense',
        front: 'Ubahlah kalimat ini ke Simple Past Tense: "They go to the museum today"',
        backTitle: 'They went to the museum yesterday',
        backDesc: 'Kata kerja bentuk kedua (Verb 2) dari "go" adalah "went". Keterangan waktu lampau menggunakan "yesterday" atau "last week".'
      }
    ];

    let activeFlashcards = [...DEFAULT_FLASHCARDS];
    let currentFcIndex = 0;
    let isFcCardFlipped = false;
    let fcViewMode = 'FOCUS'; // 'FOCUS' or 'GRID'

    function onFlashcardSubjectChange() {
      updateFlashcardBabDropdown();
      renderFlashcards();
    }

    function updateFlashcardBabDropdown() {
      const subj = document.getElementById('fc-subject') ? document.getElementById('fc-subject').value : 'ALL';
      const babSelect = document.getElementById('fc-bab-select');
      if (!babSelect) return;

      let babs = [];
      const cards = subj === 'ALL' ? DEFAULT_FLASHCARDS : DEFAULT_FLASHCARDS.filter(c => c.subject === subj);
      cards.forEach(c => {
        if (c.frontTag && !babs.includes(c.frontTag)) babs.push(c.frontTag);
      });

      babSelect.innerHTML = '<option value="ALL">📚 Semua Bab (' + cards.length + ' kartu)</option>' +
        babs.map(b => '<option value="' + escapeHtml(b) + '">' + escapeHtml(b) + '</option>').join('');
    }

    function renderFlashcards() {
      const subj = document.getElementById('fc-subject') ? document.getElementById('fc-subject').value : 'ALL';
      const bab = document.getElementById('fc-bab-select') ? document.getElementById('fc-bab-select').value : 'ALL';

      let pool = [...DEFAULT_FLASHCARDS];
      if (subj !== 'ALL') pool = pool.filter(c => c.subject === subj);
      if (bab !== 'ALL') pool = pool.filter(c => c.frontTag === bab);

      activeFlashcards = pool;
      currentFcIndex = 0;
      isFcCardFlipped = false;

      if (activeFlashcards.length === 0) {
        activeFlashcards = [{
          subject: subj === 'ALL' ? 'Umum' : subj,
          frontTag: bab === 'ALL' ? 'Info' : bab,
          front: 'Belum ada flashcard untuk topik ini.',
          backTitle: 'Siap Ditambahkan',
          backDesc: 'Flashcard materi ini akan segera diperbarui.'
        }];
      }

      updateFocusCardView();
      renderGridCardsView();
    }

    function toggleFlashcardMode() {
      fcViewMode = document.getElementById('fc-mode').value;
      const focusContainer = document.getElementById('fc-focus-container');
      const gridContainer = document.getElementById('fc-grid-container');

      if (fcViewMode === 'GRID') {
        focusContainer.classList.add('hidden');
        gridContainer.classList.remove('hidden');
      } else {
        focusContainer.classList.remove('hidden');
        gridContainer.classList.add('hidden');
      }
    }

    function updateFocusCardView() {
      const card = activeFlashcards[currentFcIndex];
      if (!card) return;

      const flipper = document.getElementById('fc-card-flipper');
      if (flipper && isFcCardFlipped) {
        flipper.classList.remove('rotate-y-180');
        isFcCardFlipped = false;
      }

      const counter = document.getElementById('fc-counter');
      const frontTag = document.getElementById('fc-front-tag');
      const frontText = document.getElementById('fc-front-text');
      const backTitle = document.getElementById('fc-back-title');
      const backDesc = document.getElementById('fc-back-desc');

      if (counter) counter.textContent = 'Kartu ' + (currentFcIndex + 1) + ' / ' + activeFlashcards.length;
      if (frontTag) frontTag.textContent = card.frontTag || card.subject;
      if (frontText) frontText.innerHTML = card.front;
      if (backTitle) backTitle.innerHTML = card.backTitle;
      if (backDesc) backDesc.innerHTML = card.backDesc;

      triggerKaTeXRender();
    }

    function flipCurrentCard() {
      const flipper = document.getElementById('fc-card-flipper');
      if (!flipper) return;
      isFcCardFlipped = !isFcCardFlipped;
      if (isFcCardFlipped) {
        flipper.classList.add('rotate-y-180');
      } else {
        flipper.classList.remove('rotate-y-180');
      }
    }

    function nextFlashcard() {
      if (currentFcIndex < activeFlashcards.length - 1) {
        currentFcIndex++;
      } else {
        currentFcIndex = 0;
      }
      updateFocusCardView();
    }

    function prevFlashcard() {
      if (currentFcIndex > 0) {
        currentFcIndex--;
      } else {
        currentFcIndex = activeFlashcards.length - 1;
      }
      updateFocusCardView();
    }

    function shuffleFlashcards() {
      activeFlashcards = activeFlashcards.sort(() => Math.random() - 0.5);
      currentFcIndex = 0;
      updateFocusCardView();
      renderGridCardsView();
    }

    function renderGridCardsView() {
      const grid = document.getElementById('fc-grid-container');
      if (!grid) return;
      grid.innerHTML = activeFlashcards.map((c) => \`
        <div class="bg-white border border-slate-200 hover:border-indigo-400 rounded-2xl p-5 shadow-xs hover:shadow-md transition space-y-3 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between text-xs mb-2">
              <span class="px-2.5 py-0.5 rounded-full font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">\${escapeHtml(c.subject)}</span>
              <span class="text-slate-400 font-semibold text-[11px]">\${escapeHtml(c.frontTag)}</span>
            </div>
            <div class="font-bold text-sm text-slate-800 leading-snug">\${c.front}</div>
          </div>
          <div class="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1 text-xs">
            <div class="font-bold text-emerald-700">\${c.backTitle}</div>
            <div class="text-slate-600 leading-relaxed text-[11px]">\${c.backDesc}</div>
          </div>
        </div>
      \`).join('');

      triggerKaTeXRender(grid);
    }

    // =========================================================================
    // OPSI B: DUKUNGAN FORMULA MATEMATIKA (KATEX) & GAMBAR PADA EDITOR SOAL
    // =========================================================================
    let currentUploadedImageUrl = '';

    function insertMathFormula(latexSnippet) {
      const textarea = document.getElementById('form-question');
      if (!textarea) return;
      const start = textarea.selectionStart || 0;
      const end = textarea.selectionEnd || 0;
      const text = textarea.value;
      const formula = ' $' + latexSnippet + '$ ';
      textarea.value = text.substring(0, start) + formula + text.substring(end);
      textarea.focus();
      textarea.selectionStart = textarea.selectionEnd = start + formula.length;
      updateLivePreview();
    }

    function updateLivePreview() {
      const textarea = document.getElementById('form-question');
      if (!textarea) return;
      const text = textarea.value;
      const previewBox = document.getElementById('form-katex-preview-box');
      const previewText = document.getElementById('form-katex-preview-text');

      if (text.includes('$')) {
        previewBox.classList.remove('hidden');
        previewText.innerHTML = escapeHtml(text);
        triggerKaTeXRender(previewText);
      } else {
        previewBox.classList.add('hidden');
      }
    }

    function previewImageFromUrl() {
      const input = document.getElementById('form-image-url');
      if (!input) return;
      const url = input.value.trim();
      const previewBox = document.getElementById('form-image-preview-box');
      const previewImg = document.getElementById('form-image-preview');
      const clearBtn = document.getElementById('btn-clear-img');

      if (url) {
        currentUploadedImageUrl = url;
        previewImg.src = url;
        previewBox.classList.remove('hidden');
        clearBtn.classList.remove('hidden');
      } else {
        previewBox.classList.add('hidden');
        clearBtn.classList.add('hidden');
      }
    }

    function previewImageFromFile(event) {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        currentUploadedImageUrl = e.target.result;
        document.getElementById('form-image-preview').src = currentUploadedImageUrl;
        document.getElementById('form-image-preview-box').classList.remove('hidden');
        document.getElementById('btn-clear-img').classList.remove('hidden');
        document.getElementById('form-image-url').value = '';
      };
      reader.readAsDataURL(file);
    }

    function clearFormImage() {
      currentUploadedImageUrl = '';
      const urlInput = document.getElementById('form-image-url');
      const fileInput = document.getElementById('form-image-file');
      const img = document.getElementById('form-image-preview');
      const box = document.getElementById('form-image-preview-box');
      const clearBtn = document.getElementById('btn-clear-img');

      if (urlInput) urlInput.value = '';
      if (fileInput) fileInput.value = '';
      if (img) img.src = '';
      if (box) box.classList.add('hidden');
      if (clearBtn) clearBtn.classList.add('hidden');
    }

    // Render KaTeX Otomatis di target element
    function triggerKaTeXRender(targetElement = null) {
      if (typeof renderMathInElement === 'function') {
        const target = targetElement || document.body;
        renderMathInElement(target, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false
        });
      }
    }

    // Helper Universal: Cek apakah butir soal cocok dengan Modul Kurikulum (Bab)
    function isQuestionInModule(q, m) {
      if (!m || !q) return false;
      if (q.moduleId && q.moduleId === m.id) return true;
      if (q.subject && m.subject && q.subject !== m.subject) return false;
      if (q.topic && m.bab && q.topic === m.bab) return true;
      
      const mBabNum = (m.bab.match(/Bab\\s*(\\d+)/i) || [])[1];
      const qBabNum = ((q.topic || '').match(/Bab\\s*(\\d+)/i) || [])[1];
      if (mBabNum && qBabNum && mBabNum === qBabNum) return true;

      if (q.topic && m.bab) {
        const qLower = q.topic.toLowerCase();
        const mLower = m.bab.toLowerCase();
        if (qLower.includes(mLower) || mLower.includes(qLower)) return true;
      }
      return false;
    }

    // =========================================================================
    // MODUL PEMBACA MATERI MENDALAM (DEEP LEARNING MODULE READER)
    // =========================================================================
    const STORAGE_KEY_RICH_MODULES = 'pintarsd6_rich_modules_v1';
    const DEFAULT_RICH_MODULES = ${JSON.stringify(richModules)};
    let richModulesData = { ...DEFAULT_RICH_MODULES };

    try {
      const savedRich = localStorage.getItem(STORAGE_KEY_RICH_MODULES);
      if (savedRich) {
        const parsed = JSON.parse(savedRich);
        // Sanitasi otomatis: jika IPAS-B1 di localStorage terkontaminasi materi Tata Surya / Antariksa, pulihkan ke modul asli
        if (parsed['IPAS-B1'] && (parsed['IPAS-B1'].html.includes('Tata Surya') || parsed['IPAS-B1'].html.includes('Antariksa') || parsed['IPAS-B1'].html.includes('Planet'))) {
          delete parsed['IPAS-B1'];
        }
        richModulesData = { ...DEFAULT_RICH_MODULES, ...parsed };
        localStorage.setItem(STORAGE_KEY_RICH_MODULES, JSON.stringify(richModulesData));
      }
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
        const mod = (window.KURIKULUM_SD6 || []).find(m => m.id === moduleId);
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
            \${mod && mod.example ? \`
              <div class="p-4 rounded-xl bg-indigo-50/70 border border-indigo-200">
                <h4 class="font-bold text-indigo-900 mb-1">Contoh Nyata / Kasus:</h4>
                <p class="text-slate-700 text-xs sm:text-sm">\${escapeHtml(mod.example)}</p>
              </div>
            \` : ''}
          </div>
        \`;
      }

      modal.classList.remove('hidden');
      triggerKaTeXRender(bodyEl);
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
          richHtml = richHtml.replace(/<div class="header">[\\s\\S]*?<\\/div>/, '').trim();
        } else {
          richHtml = htmlContent;
        }

        // Deteksi bab secara presisi dari <title>, <h1>, dan nama file
        const titleMatch = htmlContent.match(new RegExp('<title[^>]*>([\\s\\S]*?)<\\/title>', 'i')) || htmlContent.match(new RegExp('<h1[^>]*>([\\s\\S]*?)<\\/h1>', 'i'));
        const headerInfo = ((titleMatch ? titleMatch[1] : '') + ' ' + (fileName || '')).toLowerCase();

        let targetModuleId = 'IPAS-B4';
        let babTitle = 'Bab 4: Indonesia dan Masyarakat Dunia';

        if (headerInfo.includes('bab 5') || headerInfo.includes('tata surya') || headerInfo.includes('bumi dan antariksa') || headerInfo.includes('planet')) {
          targetModuleId = 'IPAS-B5';
          babTitle = 'Bab 5: Menjelajahi Bumi dan Antariksa';
        } else if (headerInfo.includes('bab 1') || headerInfo.includes('tubuh kita bergerak') || headerInfo.includes('sistem gerak') || headerInfo.includes('rangka') || headerInfo.includes('otot')) {
          targetModuleId = 'IPAS-B1';
          babTitle = 'Bab 1: Bagaimana Tubuh Kita Bergerak?';
        } else if (headerInfo.includes('bab 2') || headerInfo.includes('indonesia kita') || headerInfo.includes('kemerdekaan')) {
          targetModuleId = 'IPAS-B2';
          babTitle = 'Bab 2: Cerita tentang Indonesia Kita';
        } else if (headerInfo.includes('bab 3') || headerInfo.includes('keliling dunia') || headerInfo.includes('benua')) {
          targetModuleId = 'IPAS-B3';
          babTitle = 'Bab 3: Pelesir Keliling Dunia';
        } else if (headerInfo.includes('bab 4') || headerInfo.includes('masyarakat dunia') || headerInfo.includes('globalisasi')) {
          targetModuleId = 'IPAS-B4';
          babTitle = 'Bab 4: Indonesia dan Masyarakat Dunia';
        } else if (headerInfo.includes('pecahan') || headerInfo.includes('desimal')) {
          targetModuleId = 'MTK-B1';
          babTitle = 'Bab 1: Pecahan dan Desimal';
        }

        richModulesData[targetModuleId] = {
          title: babTitle,
          html: richHtml
        };

        localStorage.setItem(STORAGE_KEY_RICH_MODULES, JSON.stringify(richModulesData));
        renderCurriculum();

        alert(\`🎉 Berhasil Mengimpor Modul Materi Lengkap!\\n\\nFile "\${fileName}" telah berhasil disimpan dan disematkan ke dalam: \${babTitle}.\\n\\nAnda sekarang dapat mengklik tombol "📖 Baca Modul Lengkap" pada kartu bab tersebut untuk membacanya!\`);

        switchTab('curriculum');
        openModuleReaderModal(targetModuleId);
      } catch (err) {
        alert('Gagal memproses file modul materi: ' + err.message);
      }
    }
`;

// Load matrix_logic.js
const matrixJsCode = fs.readFileSync(path.join(cwd, 'matrix_logic.js'), 'utf8');

// Insert matrixJsCode and flashcardCode right after /*__DATA_PLACEHOLDER__*/
coreJs = coreJs.replace('/*__DATA_PLACEHOLDER__*/', () => '/*__DATA_PLACEHOLDER__*/\n' + matrixJsCode + '\n' + flashcardCode);

// Update switchTab in coreJs to include 'matrix' and 'flashcards'
coreJs = coreJs.replace(
  "const tabs = ['curriculum', 'quiz', 'bank', 'builder', 'analytics'];",
  () => "const tabs = ['curriculum', 'matrix', 'quiz', 'flashcards', 'bank', 'builder', 'analytics'];"
);
coreJs = coreJs.replace(
  "curriculum: '1. Pembelajaran Siswa • Rangkuman Materi',",
  () => "curriculum: '1. Pembelajaran Siswa • Rangkuman Materi',\n        matrix: '0. Pusat Kendali • Matriks Kelengkapan Materi & Kuis',\n        flashcards: '1. Pembelajaran Siswa • Flashcard Hafalan Cepat',"
);
coreJs = coreJs.replace(
  "triggerKaTeXRender();",
  () => "triggerKaTeXRender();\n      if (tab === 'matrix') renderMatrixTable();"
);
coreJs = coreJs.replace(
  "renderCurriculum();",
  () => "renderCurriculum();\n      renderMatrixTable();"
);

// Update handleFileImport
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
          if (content.includes('MODUL PEMBELAJARAN') || content.includes('PENGANTAR KONTEKSTUAL') || content.includes('PENDALAMAN KONSEP INTI')) {
            importRichLearningModule(content, file.name);
          } else {
            parseAndImportHTML(content, file.name);
          }
        } else {`;
coreJs = coreJs.replace(oldHandleImport, () => newHandleImport);

// UPGRADED ROBUST PARSER UNTUK FILE HTML SOAL
const upgradedHtmlParser = `function parseAndImportHTML(htmlContent, fileName) {
      try {
        let extractedQuestions = [];

        // 1. Ekstraksi pola array JavaScript (questions, pgData, quizData, soalData, dll)
        const jsMatch = htmlContent.match(/(?:const|let|var)\\s+(?:pgData|questions|quizData|soalData|quizQuestions|dataSoal|bankSoal|quiz|soal)\\s*=\\s*(\\[[\\s\\S]*?\\]);/i)
          || htmlContent.match(/=\\s*(\\[\\s*\\{[\\s\\S]*?\\}\\s*\\]);/);

        if (jsMatch && jsMatch[1]) {
          try {
            let rawArray = null;
            try {
              rawArray = JSON.parse(jsMatch[1]);
            } catch (jsonErr) {
              rawArray = new Function('return ' + jsMatch[1])();
            }

            if (Array.isArray(rawArray) && rawArray.length > 0) {
              let subject = 'IPAS';
              let semester = 2;
              let moduleId = 'IPAS-B5';
              let topic = 'Bab 5: Menjelajahi Bumi dan Antariksa';

              const lower = (htmlContent + ' ' + fileName).toLowerCase();
              if (lower.includes('tata surya') || lower.includes('bumi dan antariksa') || lower.includes('planet')) {
                subject = 'IPAS'; semester = 2; moduleId = 'IPAS-B5'; topic = 'Bab 5: Menjelajahi Bumi dan Antariksa';
              } else if (lower.includes('tubuh') || lower.includes('sendi') || lower.includes('rangka') || lower.includes('otot')) {
                subject = 'IPAS'; semester = 1; moduleId = 'IPAS-B1'; topic = 'Bab 1: Bagaimana Tubuh Kita Bergerak?';
              } else if (lower.includes('kemerdekaan') || lower.includes('sumpah pemuda') || lower.includes('penjajahan')) {
                subject = 'IPAS'; semester = 1; moduleId = 'IPAS-B2'; topic = 'Bab 2: Sejarah Perjuangan Kemerdekaan';
              } else if (lower.includes('benua') || lower.includes('geografis')) {
                subject = 'IPAS'; semester = 1; moduleId = 'IPAS-B3'; topic = 'Bab 3: 6 Benua di Dunia';
              } else if (lower.includes('globalisasi') || lower.includes('asean') || lower.includes('masyarakat dunia')) {
                subject = 'IPAS'; semester = 2; moduleId = 'IPAS-B4'; topic = 'Bab 4: Indonesia dan Masyarakat Dunia';
              } else if (lower.includes('pecahan') || lower.includes('desimal')) {
                subject = 'Matematika'; semester = 1; moduleId = 'MTK-B1'; topic = 'Bab 1: Pecahan dan Desimal';
              } else if (lower.includes('rasio') || lower.includes('skala') || lower.includes('perbandingan')) {
                subject = 'Matematika'; semester = 1; moduleId = 'MTK-B2'; topic = 'Bab 2: Rasio & Skala';
              } else if (lower.includes('bangun ruang') || lower.includes('kubus') || lower.includes('balok')) {
                subject = 'Matematika'; semester = 1; moduleId = 'MTK-B3'; topic = 'Bab 3: Bangun Ruang (Kubus & Balok)';
              } else if (lower.includes('data') || lower.includes('mean') || lower.includes('median') || lower.includes('modus')) {
                subject = 'Matematika'; semester = 2; moduleId = 'MTK-B4'; topic = 'Bab 4: Pengolahan Data (Statistika)';
              }

              extractedQuestions = rawArray.map((item, idx) => {
                let qText = item.q || item.question || item.pertanyaan || item.soal || item.title || '';
                qText = String(qText).replace(/^[0-9]+[\\.\\)]\\s*/, '').replace(/\\[cite:\\s*\\d+\\]/g, '').trim();

                let rawOpts = item.o || item.opt || item.options || item.pilihan || item.jawaban || item.choices || [];
                let cleanOpts = rawOpts.map(opt => String(opt).replace(/^[A-E][\\.\\)]\\s*/i, '').trim());

                let ansIdx = 0;
                let rawAns = item.a !== undefined ? item.a : (item.ans !== undefined ? item.ans : (item.correctIndex !== undefined ? item.correctIndex : item.kunci));

                if (typeof rawAns === 'number') {
                  ansIdx = rawAns;
                } else if (typeof rawAns === 'string') {
                  const trimmed = rawAns.trim();
                  if (/^[A-E]$/i.test(trimmed)) {
                    ansIdx = trimmed.toUpperCase().charCodeAt(0) - 65;
                  } else {
                    const matchIdx = cleanOpts.findIndex(o => o.toLowerCase() === trimmed.replace(/^[A-E][\\.\\)]\\s*/i, '').toLowerCase());
                    if (matchIdx !== -1) ansIdx = matchIdx;
                  }
                }

                let exp = item.e || item.exp || item.explanation || item.pembahasan || item.alasan || 'Pembahasan materi terverifikasi.';
                exp = String(exp).replace(/\\[cite:\\s*\\d+\\]/g, '').trim();

                return {
                  id: 'SD6-IMP-' + Date.now().toString().slice(-4) + '-' + String(idx + 1).padStart(2, '0'),
                  subject,
                  semester,
                  moduleId,
                  topic,
                  type: 'PG',
                  difficulty: idx % 3 === 0 ? 'Mudah' : (idx % 3 === 1 ? 'Sedang' : 'Sulit'),
                  bloom: idx % 2 === 0 ? 'C2' : 'C3',
                  points: 10,
                  timeMinutes: 2,
                  question: qText,
                  options: cleanOpts,
                  correctIndex: ansIdx,
                  explanation: exp
                };
              });
            }
          } catch (e) {
            console.warn('Gagal ekstraksi script JS:', e);
          }
        }

        // 2. DOM Parser Fallback
        if (extractedQuestions.length === 0) {
          const parser = new DOMParser();
          const doc = parser.parseFromString(htmlContent, 'text/html');
          const cards = doc.querySelectorAll('.card, .question-card, .soal-item');

          if (cards.length > 0) {
            cards.forEach((card, idx) => {
              const qEl = card.querySelector('.question-text, .pertanyaan, h3, h4');
              const optEls = card.querySelectorAll('.option-btn, .btn-option, .option, li');
              const expEl = card.querySelector('.explanation-box, .feedback, .pembahasan');
              const subEl = card.querySelector('.badge, .topik, .sub');

              if (qEl && optEls.length > 0) {
                const options = Array.from(optEls).map(el => el.textContent.replace(/^[A-E][\\.\\)]\\s*/i, '').trim());
                extractedQuestions.push({
                  id: 'SD6-IMP-' + Date.now().toString().slice(-4) + '-' + String(idx + 1).padStart(2, '0'),
                  subject: 'IPAS',
                  semester: 2,
                  moduleId: 'IPAS-B5',
                  topic: subEl ? subEl.textContent.trim() : 'Bab 5: Menjelajahi Bumi dan Antariksa',
                  type: 'PG',
                  difficulty: 'Sedang',
                  bloom: 'C3',
                  points: 10,
                  timeMinutes: 2,
                  question: qEl.textContent.replace(/^\\d+[\\.\\)]\\s*/, '').trim(),
                  options: options,
                  correctIndex: 0,
                  explanation: expEl ? expEl.textContent.replace(/^💡\\s*Penjelasan:\\s*/i, '').trim() : 'Pembahasan materi.'
                });
              }
            });
          }
        }

        if (extractedQuestions.length === 0) {
          alert('Format soal tidak terdeteksi. Pastikan file kuis HTML memiliki variabel soal atau struktur kartu kuis.');
          return;
        }

        let addedCount = 0;
        const existingTexts = new Set(questions.map(q => q.question.toLowerCase().trim()));

        extractedQuestions.forEach(newQ => {
          if (!existingTexts.has(newQ.question.toLowerCase().trim())) {
            questions.push(newQ);
            existingTexts.add(newQ.question.toLowerCase().trim());
            addedCount++;
          }
        });

        saveData();
        refreshAll();

        const sampleTopic = extractedQuestions[0].topic || 'Soal Baru';
        alert(\`🎉 Sukses Mengimpor File Kuis HTML!\\n\\n• Terdeteksi Topik: \${sampleTopic}\\n• Jumlah Soal Terbaca: \${extractedQuestions.length} butir\\n• Soal Baru Ditambahkan: \${addedCount} butir\\n• Total Bank Soal Sekarang: \${questions.length} butir\\n\\nSoal kini langsung aktif di Bank Soal dan Kuis Interaktif Anak!\`);

        document.getElementById('filter-search').value = '';
        document.getElementById('filter-subject').value = extractedQuestions[0].subject || 'ALL';
        filterQuestions();
        switchTab('bank');
      } catch (err) {
        alert('Terjadi kesalahan saat memproses file HTML: ' + err.message);
      }
    }`;

const oldParserStart = coreJs.indexOf('function parseAndImportHTML');
const oldParserEnd = coreJs.indexOf('function escapeHtml', oldParserStart);
if (oldParserStart !== -1 && oldParserEnd !== -1) {
  coreJs = coreJs.substring(0, oldParserStart) + upgradedHtmlParser + '\n\n    ' + coreJs.substring(oldParserEnd);
}

// 10. Update Logika Pilih Bab di Kurikulum & Kuis
console.log('10. Updating Bab Selection logic in Kurikulum & CBT Quiz...');

// Logika sinkronisasi dropdown Bab Kurikulum & Kuis
const babSelectionLogic = `
    // =========================================================================
    // FITUR PILIH BAB DINAMIS (KURIKULUM, KUIS CBT, & FLASHCARD)
    // =========================================================================
    function onCurriculumSemesterChange() {
      updateCurriculumBabDropdown();
      renderCurriculum();
    }

    function updateCurriculumBabDropdown() {
      const babSelect = document.getElementById('curr-bab-select');
      const semSelect = document.getElementById('curr-semester');
      if (!babSelect) return;

      const sem = semSelect ? semSelect.value : 'ALL';
      let modules = window.KURIKULUM_SD6 || [];
      if (currSelectedSubject !== 'ALL') {
        modules = modules.filter(m => m.subject === currSelectedSubject);
      }
      if (sem !== 'ALL') {
        modules = modules.filter(m => String(m.semester) === String(sem));
      }

      const currentVal = babSelect.value;
      let optionsHtml = '<option value="ALL">📚 Tampilkan Semua Bab (' + modules.length + ' Bab)</option>';
      modules.forEach(m => {
        optionsHtml += '<option value="' + m.id + '">' + escapeHtml(m.bab) + '</option>';
      });

      babSelect.innerHTML = optionsHtml;
      if (modules.some(m => m.id === currentVal)) {
        babSelect.value = currentVal;
      } else {
        babSelect.value = 'ALL';
      }
    }

    function onQuizSubjectChange() {
      updateQuizTopicDropdown();
      startNewQuiz();
    }

    function onQuizSemesterChange() {
      updateQuizTopicDropdown();
      startNewQuiz();
    }

    function updateQuizTopicDropdown() {
      const topicSelect = document.getElementById('quiz-topic-select');
      const subjSelect = document.getElementById('quiz-subject-select');
      const semSelect = document.getElementById('quiz-semester-select');
      if (!topicSelect) return;

      const subj = subjSelect ? subjSelect.value : 'ALL';
      const sem = semSelect ? semSelect.value : 'ALL';

      let modules = window.KURIKULUM_SD6 || [];
      if (subj !== 'ALL') modules = modules.filter(m => m.subject === subj);
      if (sem !== 'ALL') modules = modules.filter(m => String(m.semester) === String(sem));

      const currentVal = topicSelect.value;
      let optionsHtml = '<option value="ALL">🌟 Semua Bab (Campuran Satu Paket)</option>';

      modules.forEach(m => {
        const qCount = questions.filter(q => q.type === 'PG' && isQuestionInModule(q, m)).length;
        optionsHtml += '<option value="' + m.id + '">' + escapeHtml(m.bab) + ' (' + qCount + ' soal)</option>';
      });

      topicSelect.innerHTML = optionsHtml;
      if (modules.some(m => m.id === currentVal)) {
        topicSelect.value = currentVal;
      } else {
        topicSelect.value = 'ALL';
      }
    }
`;

// Insert babSelectionLogic right after /*__DATA_PLACEHOLDER__*/
coreJs = coreJs.replace('/*__DATA_PLACEHOLDER__*/', () => '/*__DATA_PLACEHOLDER__*/\n' + babSelectionLogic);

// Update setCurrSubject agar memperbarui dropdown Bab di Kurikulum
const oldSetCurrSubject = `function setCurrSubject(subj) {
      currSelectedSubject = subj;
      const allBtns = ['ALL', 'Matematika', 'IPAS', 'Bahasa Indonesia', 'Pendidikan Pancasila', 'Bahasa Inggris', 'PLBJ', 'Seni Rupa', 'PAI', 'Bahasa Arab'];
      allBtns.forEach((s) => {
        const el = document.getElementById('csubj-' + s);
        if (!el) return;
        if (s === subj) {
          el.className = 'px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 text-white';
        } else {
          el.className = 'px-3 py-1.5 rounded-lg text-xs font-medium bg-[var(--background)] border border-[var(--border)] hover:border-indigo-500/40';
        }
      });
      renderCurriculum();
    }`;

const newSetCurrSubject = `function setCurrSubject(subj) {
      currSelectedSubject = subj;
      const allBtns = ['ALL', 'Matematika', 'IPAS', 'Bahasa Indonesia', 'Pendidikan Pancasila', 'Bahasa Inggris', 'PLBJ', 'Seni Rupa', 'PAI', 'Bahasa Arab'];
      allBtns.forEach((s) => {
        const el = document.getElementById('csubj-' + s);
        if (!el) return;
        if (s === subj) {
          el.className = 'px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-600 text-white shadow-xs';
        } else {
          el.className = 'px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 transition';
        }
      });
      updateCurriculumBabDropdown();
      renderCurriculum();
    }`;
coreJs = coreJs.replace(oldSetCurrSubject, () => newSetCurrSubject);

// Update renderCurriculum agar menyaring berdasarkan #curr-bab-select
const oldRenderCurriculum = `function renderCurriculum() {
      const sem = document.getElementById('curr-semester').value;
      const filtered = window.KURIKULUM_SD6.filter((m) => {
        if (currSelectedSubject !== 'ALL' && m.subject !== currSelectedSubject) return false;
        if (sem !== 'ALL' && String(m.semester) !== String(sem)) return false;
        return true;
      });`;

const newRenderCurriculum = `function renderCurriculum() {
      const semEl = document.getElementById('curr-semester');
      const babEl = document.getElementById('curr-bab-select');
      const sem = semEl ? semEl.value : 'ALL';
      const selectedBabId = babEl ? babEl.value : 'ALL';

      const filtered = (window.KURIKULUM_SD6 || []).filter((m) => {
        if (currSelectedSubject !== 'ALL' && m.subject !== currSelectedSubject) return false;
        if (sem !== 'ALL' && String(m.semester) !== String(sem)) return false;
        if (selectedBabId !== 'ALL' && m.id !== selectedBabId) return false;
        return true;
      });`;
coreJs = coreJs.replace(oldRenderCurriculum, () => newRenderCurriculum);

// Update renderCurriculum card buttons with isQuestionInModule count
coreJs = coreJs.replace(
  'const relatedQs = questions.filter((q) => q.moduleId === m.id || q.topic === m.bab);',
  () => 'const relatedQs = questions.filter((q) => q.type === "PG" && isQuestionInModule(q, m));'
);

const oldCardBtns = `<div class="flex items-center justify-between gap-2 pt-3 border-t border-[var(--border)]">
              <button onclick="practiceModule('\${m.id}', '\${escapeHtml(m.bab)}')" class="flex-1 py-2 px-3 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition">
                🎯 Latihan Kuis Bab Ini (\${relatedQs.length})
              </button>
              <button onclick="filterBankByTopic('\${escapeHtml(m.bab)}')" class="py-2 px-3 rounded-lg text-xs font-medium border border-[var(--border)] bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:opacity-90">
                📚 Lihat Bank Soal
              </button>
            </div>`;

const newCardBtns = `<div class="space-y-2 pt-3 border-t border-slate-100">
              <button onclick="openModuleReaderModal('\${m.id}')" class="w-full py-2.5 px-3 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-xs transition flex items-center justify-center gap-1.5">
                <span>📖</span> Baca Modul Lengkap \${richModulesData && richModulesData[m.id] ? '✨ (Mendalam)' : ''}
              </button>
              <div class="flex items-center justify-between gap-2">
                <button onclick="practiceModule('\${m.id}', '\${escapeHtml(m.bab)}')" class="flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 transition">
                  🎯 Latihan Kuis (\${relatedQs.length} Soal)
                </button>
                <button onclick="filterBankByTopic('\${escapeHtml(m.bab)}')" class="py-1.5 px-3 rounded-lg text-xs font-medium border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition">
                  📚 Bank Soal
                </button>
              </div>
            </div>`;
coreJs = coreJs.replace(oldCardBtns, () => newCardBtns);

// Update startNewQuiz agar mendukung penyaringan per Bab (#quiz-topic-select)
const oldStartNewQuiz = `function startNewQuiz() {
      const subj = document.getElementById('quiz-subject-select').value;
      const sem = document.getElementById('quiz-semester-select').value;

      let pool = questions.filter((q) => q.type === 'PG');
      if (subj !== 'ALL') pool = pool.filter((q) => q.subject === subj);
      if (sem !== 'ALL') pool = pool.filter((q) => String(q.semester) === String(sem));

      if (pool.length === 0) pool = questions.filter((q) => q.type === 'PG');
      const shuffled = shuffleArray(pool);
      const label = subj === 'ALL' ? 'Campuran Semua Mata Pelajaran' : \`\${subj} (Semester \${sem === 'ALL' ? '1 & 2' : sem})\`;
      initCBT(shuffled, label);
    }`;

const newStartNewQuiz = `function startNewQuiz() {
      const subjEl = document.getElementById('quiz-subject-select');
      const semEl = document.getElementById('quiz-semester-select');
      const topicEl = document.getElementById('quiz-topic-select');

      const subj = subjEl ? subjEl.value : 'ALL';
      const sem = semEl ? semEl.value : 'ALL';
      const topicId = topicEl ? topicEl.value : 'ALL';

      let pool = questions.filter((q) => q.type === 'PG');
      if (subj !== 'ALL') pool = pool.filter((q) => q.subject === subj);
      if (sem !== 'ALL') pool = pool.filter((q) => String(q.semester) === String(sem));

      let targetMod = null;
      if (topicId !== 'ALL') {
        targetMod = (window.KURIKULUM_SD6 || []).find(m => m.id === topicId);
        if (targetMod) {
          pool = pool.filter((q) => isQuestionInModule(q, targetMod));
        }
      }

      if (pool.length === 0) {
        if (topicId !== 'ALL' && targetMod) {
          alert('Belum ada soal kuis untuk: ' + targetMod.bab + '.\\n\\nSilakan gunakan menu Bank Soal atau Import File Kuis untuk menambahkan soal bab ini!');
          return;
        }
        pool = questions.filter((q) => q.type === 'PG');
      }

      const shuffled = shuffleArray(pool);
      let label = subj === 'ALL' ? 'Campuran Semua Mata Pelajaran' : \`\${subj} (Semester \${sem === 'ALL' ? '1 & 2' : sem})\`;
      if (targetMod) {
        label = \`🎯 \${targetMod.bab} (\${shuffled.length} Soal)\`;
      }
      initCBT(shuffled, label);
    }`;
coreJs = coreJs.replace(oldStartNewQuiz, () => newStartNewQuiz);

// Update practiceModule agar menyinkronkan seluruh dropdown di tab kuis
const oldPracticeModule = `function practiceModule(moduleId, babTitle) {
      const subset = questions.filter((q) => (q.moduleId === moduleId || q.topic === babTitle) && q.type === 'PG');
      if (subset.length === 0) {
        alert('Belum ada soal Pilihan Ganda pada bab ini.');
        return;
      }
      initCBT(subset, babTitle);
      switchTab('quiz');
    }`;

const newPracticeModule = `function practiceModule(moduleId, babTitle) {
      const mod = (window.KURIKULUM_SD6 || []).find(m => m.id === moduleId);
      const subset = questions.filter((q) => q.type === 'PG' && isQuestionInModule(q, mod || { id: moduleId, bab: babTitle }));
      if (subset.length === 0) {
        alert('Belum ada soal Pilihan Ganda pada bab ini.\\n\\nSilakan impor atau tambahkan soal untuk: ' + babTitle);
        return;
      }

      if (mod) {
        const qSubj = document.getElementById('quiz-subject-select');
        const qSem = document.getElementById('quiz-semester-select');
        if (qSubj) qSubj.value = mod.subject;
        if (qSem) qSem.value = String(mod.semester);
        updateQuizTopicDropdown();
        const qTopic = document.getElementById('quiz-topic-select');
        if (qTopic) qTopic.value = mod.id;
      }

      initCBT(subset, '🎯 ' + babTitle + ' (' + subset.length + ' Soal)');
      switchTab('quiz');
    }`;
coreJs = coreJs.replace(oldPracticeModule, () => newPracticeModule);

// Wire imageUrl in question cards inside renderBank
const oldBankCard = `<div class="text-sm font-medium leading-relaxed text-[var(--foreground)] whitespace-pre-line">\${escapeHtml(q.question)}</div>`;
const newBankCard = `<div class="text-sm font-medium leading-relaxed text-slate-900 whitespace-pre-line">\${escapeHtml(q.question)}</div>
            \${q.imageUrl ? \`<div class="pt-2"><img src="\${escapeHtml(q.imageUrl)}" alt="Gambar Soal" class="max-h-48 rounded-xl border border-slate-200 object-contain shadow-xs bg-slate-50 p-1" /></div>\` : ''}`;
coreJs = coreJs.replace(oldBankCard, () => newBankCard);

// Wire imageUrl saving in saveQuestion
coreJs = coreJs.replace(
  'questions[idx] = { ...questions[idx], subject, semester, type, topic, difficulty, bloom, points, question: questionText, options, correctIndex, explanation };',
  () => 'questions[idx] = { ...questions[idx], subject, semester, type, topic, difficulty, bloom, points, question: questionText, imageUrl: currentUploadedImageUrl, options, correctIndex, explanation };'
);
coreJs = coreJs.replace(
  'timeMinutes: 2,\n          question: questionText,',
  () => 'timeMinutes: 2,\n          question: questionText,\n          imageUrl: currentUploadedImageUrl,'
);

// Wire imageUrl loading in editQuestion
coreJs = coreJs.replace(
  "document.getElementById('form-question').value = q.question;",
  () => `document.getElementById('form-question').value = q.question;
      if (q.imageUrl) {
        currentUploadedImageUrl = q.imageUrl;
        document.getElementById('form-image-preview').src = q.imageUrl;
        document.getElementById('form-image-preview-box').classList.remove('hidden');
        document.getElementById('btn-clear-img').classList.remove('hidden');
      } else {
        clearFormImage();
      }`
);

// Reset image on openModal
coreJs = coreJs.replace(
  "document.getElementById('form-question').value = '';",
  () => `document.getElementById('form-question').value = '';
        clearFormImage();
        const pBox = document.getElementById('form-katex-preview-box');
        if (pBox) pBox.classList.add('hidden');`
);

// Logika Pembersihan Duplikasi Soal Otomatis di loadData
const oldLoadData = `function loadData() {
      try {
        const rawQ = localStorage.getItem(STORAGE_KEY_Q);
        questions = rawQ ? JSON.parse(rawQ) : JSON.parse(JSON.stringify(window.DEFAULT_QUESTIONS_SD6));
      } catch (e) {
        questions = JSON.parse(JSON.stringify(window.DEFAULT_QUESTIONS_SD6));
      }`;

const newLoadData = `function deduplicateQuestions(list) {
      if (!Array.isArray(list)) return [];
      const seen = new Set();
      const result = [];
      list.forEach(q => {
        const key = (q.subject || '') + '||' + (q.question || '').toLowerCase().trim().replace(/^[0-9]+[\\.\\)]\\s*/, '');
        if (!seen.has(key)) {
          seen.add(key);
          result.push(q);
        }
      });
      return result;
    }

    function loadData() {
      try {
        const rawQ = localStorage.getItem(STORAGE_KEY_Q);
        questions = rawQ ? JSON.parse(rawQ) : JSON.parse(JSON.stringify(window.DEFAULT_QUESTIONS_SD6));
      } catch (e) {
        questions = JSON.parse(JSON.stringify(window.DEFAULT_QUESTIONS_SD6));
      }
      const prevLen = questions.length;
      questions = deduplicateQuestions(questions);
      if (questions.length !== prevLen) {
        saveData();
      }`;
coreJs = coreJs.replace(oldLoadData, () => newLoadData);

// Panggil updateCurriculumBabDropdown, updateQuizTopicDropdown & updateFlashcardBabDropdown saat refreshAll
coreJs = coreJs.replace(
  'renderAnalytics();',
  () => `renderAnalytics();
      updateCurriculumBabDropdown();
      updateQuizTopicDropdown();
      updateFlashcardBabDropdown();
      renderFlashcards();
      triggerKaTeXRender();`
);

// Replace the script section in tpl
const finalTpl = tpl.substring(0, origScriptStart) + coreJs + tpl.substring(origScriptEnd);
fs.writeFileSync(path.join(cwd, 'app_template.html'), finalTpl, 'utf8');
console.log('Saved pristine app_template.html! Length:', finalTpl.length);

// 11. Build index.html and bank_soal_dashboard.html
console.log('11. Merging with data_sd6.js to build index.html and artifact...');
const dataJs = fs.readFileSync(path.join(cwd, 'data_sd6.js'), 'utf8');

const mergedArtifact = finalTpl.replace('/*__DATA_PLACEHOLDER__*/', () => dataJs);

// Write to artifact path
fs.writeFileSync(artifactPath, mergedArtifact, 'utf8');
console.log('Saved artifact to:', artifactPath);

// Write to index.html with the Accurate Online light enterprise theme
const standaloneStyle = `  <style>
    :root {
      --background: #f4f6fb;
      --card: #ffffff;
      --foreground: #0f172a;
      --muted-foreground: #64748b;
      --border: #e2e8f0;
      --primary: #4338ca;
      --primary-foreground: #ffffff;
      --secondary: #f1f5f9;
      --secondary-foreground: #1e293b;
    }
    @media print {
      .no-print { display: none !important; }
      body { background: white !important; color: black !important; }
    }
  </style>`;

const mergedIndex = mergedArtifact.replace(/<style>[\s\S]*?<\/style>/, () => standaloneStyle);
fs.writeFileSync(path.join(cwd, 'index.html'), mergedIndex, 'utf8');
console.log('Saved index.html! Length:', mergedIndex.length);

// Extract JS from index.html and syntax-check with node -c
const checkStart = mergedIndex.indexOf('<script>', 2500) + 8;
const checkEnd = mergedIndex.lastIndexOf('</script>');
const extractedJs = mergedIndex.substring(checkStart, checkEnd);
fs.writeFileSync(path.join(cwd, 'verify_index_syntax.js'), extractedJs, 'utf8');

try {
  cp.execSync('node -c verify_index_syntax.js', { cwd, encoding: 'utf8' });
  console.log('🎉 VERIFICATION SUCCESS: verify_index_syntax.js parsed with ZERO syntax errors!');
} catch (err) {
  console.error('❌ SYNTAX ERROR IN GENERATED JS:');
  console.error(err.stdout || err.stderr || err.message);
}

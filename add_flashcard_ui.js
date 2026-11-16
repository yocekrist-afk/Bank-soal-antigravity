const fs = require('fs');
let tpl = fs.readFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/app_template.html', 'utf8');

// 1. Tambah Tab Flashcard di Sidebar (di Modul 1: Siswa & Belajar)
const oldSideGroup1 = `<button onclick="switchTab('quiz'); autoCloseSidebarOnMobile();" id="side-tab-quiz" class="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition text-left text-slate-300 hover:text-white hover:bg-slate-800/80">
              <span class="text-base shrink-0">🎮</span>
              <span class="sidebar-text truncate">Kuis Interaktif Anak</span>
            </button>`;

const newSideGroup1 = `<button onclick="switchTab('quiz'); autoCloseSidebarOnMobile();" id="side-tab-quiz" class="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition text-left text-slate-300 hover:text-white hover:bg-slate-800/80">
              <span class="text-base shrink-0">🎮</span>
              <span class="sidebar-text truncate">Kuis Interaktif Anak</span>
            </button>
            <button onclick="switchTab('flashcards'); autoCloseSidebarOnMobile();" id="side-tab-flashcards" class="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition text-left text-slate-300 hover:text-white hover:bg-slate-800/80">
              <span class="text-base shrink-0">🃏</span>
              <span class="sidebar-text truncate">Flashcard Hafalan Cepat</span>
            </button>`;

tpl = tpl.replace(oldSideGroup1, newSideGroup1);

// 2. Tambah Tab Flashcard di Top Tab Strip
const oldTopGroup1 = `<button onclick="switchTab('quiz')" id="tab-quiz" class="px-3 py-1.5 rounded-lg text-xs font-semibold transition text-slate-600 hover:text-slate-900 hover:bg-slate-100 flex items-center gap-1.5">
              <span>🎮</span> 2. Kuis Interaktif
            </button>`;

const newTopGroup1 = `<button onclick="switchTab('quiz')" id="tab-quiz" class="px-3 py-1.5 rounded-lg text-xs font-semibold transition text-slate-600 hover:text-slate-900 hover:bg-slate-100 flex items-center gap-1.5">
              <span>🎮</span> 2. Kuis Interaktif
            </button>
            <button onclick="switchTab('flashcards')" id="tab-flashcards" class="px-3 py-1.5 rounded-lg text-xs font-semibold transition text-slate-600 hover:text-slate-900 hover:bg-slate-100 flex items-center gap-1.5">
              <span>🃏</span> 3. Flashcard Cepat
            </button>`;

tpl = tpl.replace(oldTopGroup1, newTopGroup1);

// 3. Tambah Section View Flashcard di Main
const flashcardSectionHtml = `
    <!-- ========================================================================= -->
    <!-- TAB BARU: FLASHCARD HAFALAN INTERAKTIF ANAK SD (KARTU BOLAK-BALIK 3D)    -->
    <!-- ========================================================================= -->
    <section id="view-flashcards" class="hidden space-y-5">
      <!-- Control Header Flashcard -->
      <div class="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div class="flex flex-wrap items-center gap-3">
          <div>
            <label class="block text-xs font-semibold text-slate-500 mb-1">Mata Pelajaran:</label>
            <select id="fc-subject" onchange="renderFlashcards()" class="px-3 py-1.5 rounded-xl text-xs bg-slate-50 border border-slate-200 font-semibold text-slate-800">
              <option value="ALL">🌟 Semua Mata Pelajaran</option>
              <option value="Matematika">📐 Matematika</option>
              <option value="IPAS">🌍 IPAS (Sains & Sosial)</option>
              <option value="Bahasa Indonesia">📖 Bahasa Indonesia</option>
              <option value="Pendidikan Pancasila">🦅 Pendidikan Pancasila</option>
              <option value="Bahasa Inggris">🇬🇧 Bahasa Inggris</option>
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
          <span class="text-xs font-semibold text-slate-500" id="fc-counter">Kartu 1 / 15</span>
          <button onclick="shuffleFlashcards()" class="px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 transition">
            🔀 Acak Kartu
          </button>
        </div>
      </div>

      <!-- Single Focus Mode (Interactive 3D Card with Next/Prev) -->
      <div id="fc-focus-container" class="flex flex-col items-center justify-center py-6 space-y-6">
        <div class="w-full max-w-xl h-72 perspective-1000 cursor-pointer" onclick="flipCurrentCard()">
          <div id="fc-card-flipper" class="relative w-full h-full transform-style-3d transition-transform duration-500 rounded-3xl shadow-xl">
            <!-- Sisi Depan (Pertanyaan / Konsep) -->
            <div class="absolute inset-0 backface-hidden bg-gradient-to-tr from-white to-indigo-50/50 border-2 border-indigo-200 rounded-3xl p-8 flex flex-col justify-between shadow-md">
              <div class="flex items-center justify-between">
                <span id="fc-front-tag" class="px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-700">IPAS</span>
                <span class="text-xs font-medium text-slate-400 flex items-center gap-1">
                  <span>💡</span> Klik untuk Membalik Kartu
                </span>
              </div>
              <div class="text-center my-auto px-4">
                <div class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Konsep / Pertanyaan</div>
                <div id="fc-front-text" class="text-xl sm:text-2xl font-extrabold text-slate-800 leading-snug">
                  Apa itu Sendi Engsel?
                </div>
              </div>
              <div class="text-center text-[11px] text-indigo-600 font-semibold">
                Sentuh atau klik kartu untuk melihat jawaban ➔
              </div>
            </div>

            <!-- Sisi Belakang (Kunci Jawaban & Penjelasan) -->
            <div class="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-tr from-emerald-600 to-teal-700 text-white rounded-3xl p-8 flex flex-col justify-between shadow-md">
              <div class="flex items-center justify-between">
                <span class="px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white border border-white/30">Kunci Jawaban</span>
                <span class="text-xs font-medium text-white/80">Klik untuk balik lagi</span>
              </div>
              <div class="text-center my-auto px-4 space-y-2">
                <div id="fc-back-title" class="text-xl sm:text-2xl font-black text-amber-300">
                  Gerak Satu Arah
                </div>
                <div id="fc-back-desc" class="text-xs sm:text-sm text-white/95 leading-relaxed font-medium">
                  Sendi yang hanya memungkinkan gerakan satu arah saja, seperti engsel pada pintu. Contohnya terdapat pada siku tangan dan lutut kaki.
                </div>
              </div>
              <div class="text-center text-[11px] text-white/70">
                PintarSD6 • Flashcard Kurikulum Merdeka
              </div>
            </div>
          </div>
        </div>

        <!-- Tombol Navigasi Focus Mode -->
        <div class="flex items-center gap-4">
          <button onclick="prevFlashcard()" class="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold text-xs shadow-xs transition flex items-center gap-1.5">
            ◀ Kartu Sebelumnya
          </button>
          <button onclick="flipCurrentCard()" class="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md transition flex items-center gap-1.5">
            🔄 Balik Kartu
          </button>
          <button onclick="nextFlashcard()" class="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold text-xs shadow-xs transition flex items-center gap-1.5">
            Kartu Berikutnya ▶
          </button>
        </div>
      </div>

      <!-- Grid Mode (Gallery of All Flashcards) -->
      <div id="fc-grid-container" class="hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>
    </section>
`;

tpl = tpl.replace('<section id="view-curriculum"', flashcardSectionHtml + '\n    <section id="view-curriculum"');

fs.writeFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/app_template.html', tpl, 'utf8');
console.log('Flashcard UI section inserted!');

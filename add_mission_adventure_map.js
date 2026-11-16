const fs = require('fs');
const path = require('path');

const cwd = __dirname;
const idxPath = path.join(cwd, 'index.html');
let h = fs.readFileSync(idxPath, 'utf8');

const NL = '\r\n';
const L = (s) => s.replace(/\r?\n/g, NL);

// 1. ADD TAB TO TABS ARRAY
h = h.replace(
  "const tabs = ['curriculum', 'matrix', 'quiz', 'flashcards', 'bank', 'builder', 'analytics'];",
  "const tabs = ['curriculum', 'matrix', 'mission', 'quiz', 'flashcards', 'bank', 'builder', 'analytics'];"
);

// 2. ADD TAB TITLE
h = h.replace(
  "flashcards: '1. Pembelajaran Siswa • Flashcard Hafalan Cepat',",
  "mission: '1. Pembelajaran Siswa • 🗺️ Peta Misi Petualangan (Game Edukasi)',\r\n        flashcards: '1. Pembelajaran Siswa • Flashcard Hafalan Cepat',"
);

// 3. ADD BUTTON IN TOP TAB NAVIGATION
const topTabAnchor = '<button onclick="switchTab(\'quiz\')" id="tab-quiz"';
const topMissionBtn = `<button onclick="switchTab('mission')" id="tab-mission" class="px-3 py-1.5 rounded-lg text-xs font-semibold transition text-slate-600 hover:text-slate-900 hover:bg-slate-100 flex items-center gap-1.5 bg-gradient-to-r from-amber-500/10 to-purple-500/10 border border-amber-300/40">
            <span>🗺️</span> Peta Misi (Game) ✨
          </button>\r\n          `;
h = h.replace(topTabAnchor, topMissionBtn + topTabAnchor);

// 4. ADD BUTTON IN SIDEBAR
const sideTabAnchor = '<button onclick="switchTab(\'quiz\'); autoCloseSidebarOnMobile();" id="side-tab-quiz"';
const sideMissionBtn = `<button onclick="switchTab('mission'); autoCloseSidebarOnMobile();" id="side-tab-mission" class="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition text-left text-amber-300 hover:text-white hover:bg-slate-800/80 bg-amber-500/10 border border-amber-500/20">
            <div class="flex items-center gap-3">
              <span>🗺️</span>
              <span>Peta Misi Petualangan</span>
            </div>
            <span class="text-[9px] font-black uppercase px-1.5 py-0.5 rounded bg-amber-400 text-slate-900">GAME ✨</span>
          </button>\r\n          `;
h = h.replace(sideTabAnchor, sideMissionBtn + sideTabAnchor);

// 5. ADD SECTION VIEW-MISSION IN HTML
const viewAnchor = '<section id="view-quiz" class="hidden space-y-4">';
const missionViewHtml = L(`
    <!-- ========================================================================= -->
    <!-- TAB PETA MISI PETUALANGAN INTERAKTIF ANAK SD (GAMIFIED ADVENTURE MAP)    -->
    <!-- ========================================================================= -->
    <section id="view-mission" class="hidden space-y-5">
      <!-- Top Control Bar (Pilih Mapel & Bab Misi) -->
      <div class="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div class="flex flex-wrap items-center gap-3">
          <div>
            <label class="block text-xs font-semibold text-slate-500 mb-1">Pilih Mata Pelajaran Petualangan:</label>
            <select id="mission-subject-select" onchange="onMissionSubjectChange()" class="px-3 py-1.5 rounded-xl text-xs bg-slate-50 border border-slate-200 font-bold text-slate-800">
              <option value="Matematika">📐 Matematika</option>
              <option value="IPAS">🌍 IPAS (Sains & Sosial)</option>
              <option value="Bahasa Indonesia">📖 Bahasa Indonesia</option>
              <option value="Pendidikan Pancasila">🦅 Pendidikan Pancasila</option>
              <option value="Bahasa Inggris">🇬🇧 Bahasa Inggris</option>
              <option value="PAI">🕌 PAI</option>
              <option value="PLBJ">🏛️ PLBJ</option>
              <option value="Seni Rupa">🎨 Seni Rupa</option>
              <option value="Bahasa Arab">🌙 Bahasa Arab</option>
            </select>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-500 mb-1">Pilih Bab Misi:</label>
            <select id="mission-bab-select" onchange="renderMissionMap()" class="px-3 py-1.5 rounded-xl text-xs bg-slate-50 border border-slate-200 font-bold text-slate-800 max-w-xs">
              <!-- Rendered by JS -->
            </select>
          </div>
        </div>

        <!-- KPI Status & Reset -->
        <div class="flex items-center gap-3">
          <div class="px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold flex items-center gap-1.5" id="mission-star-kpi">
            <span>⭐</span> Total Bintang: <span id="mission-star-count" class="text-sm font-black text-amber-600">0</span>
          </div>
          <button onclick="resetCurrentMissionProgress()" class="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-600 transition flex items-center gap-1">
            <span>🔄</span> Ulangi Misi Bab Ini
          </button>
        </div>
      </div>

      <!-- GAME BOARD CONTAINER (ADVENTURE SCENIC MAP) -->
      <div id="mission-game-board" class="w-full relative rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-400 bg-gradient-to-b from-sky-400 via-sky-200 to-emerald-400 min-h-[620px] p-4 sm:p-8 flex flex-col justify-between text-slate-900 select-none">
        
        <!-- Background Nature Illustrations (Clouds, Hills, Sun, Flowers) -->
        <div class="absolute top-4 left-8 text-white/80 text-4xl pointer-events-none drop-shadow">☁️</div>
        <div class="absolute top-10 right-16 text-white/80 text-5xl pointer-events-none drop-shadow">☁️</div>
        <div class="absolute top-6 right-8 text-amber-300 text-5xl pointer-events-none drop-shadow-lg animate-pulse">☀️</div>

        <!-- HEADER BANNER: PETA MISI EMAS & UNGU -->
        <div class="relative z-10 flex flex-col items-center justify-center text-center space-y-2 mt-2">
          <!-- Main Royal Banner -->
          <div class="relative inline-flex items-center justify-center px-8 py-3 rounded-2xl bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 border-4 border-amber-300 shadow-2xl">
            <!-- Left & Right Jewel Accents -->
            <span class="text-xl sm:text-2xl mr-2">💎</span>
            <h1 class="text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-amber-300 to-yellow-500 tracking-wider uppercase font-heading drop-shadow-md">
              PETA MISI
            </h1>
            <span class="text-xl sm:text-2xl ml-2">💎</span>
          </div>

          <!-- Subtitle Pill (Topic & Subject) -->
          <div class="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-amber-100/90 border-2 border-amber-400 text-amber-950 font-extrabold text-xs sm:text-sm shadow-md backdrop-blur-xs" id="mission-banner-subtitle">
            Pendidikan Pancasila Kelas 6 • Bab 1
          </div>
        </div>

        <!-- MAIN SCENIC STAGE AREA (VILLAGE PATH WITH 5 STAGES) -->
        <div class="relative z-10 my-8 w-full max-w-4xl mx-auto flex-1 flex flex-col justify-center">
          
          <!-- Entrance Village Arch (Left) -->
          <div class="absolute -top-4 left-0 sm:left-4 hidden md:flex items-center gap-2 px-4 py-2 rounded-2xl bg-amber-800 border-2 border-amber-600 text-amber-100 font-extrabold text-xs shadow-xl transform -rotate-3">
            <span>🏡</span> Kampung Pintar SD 6
          </div>

          <!-- 5 STAGES GRID / PATHWAY -->
          <div class="grid grid-cols-1 sm:grid-cols-5 gap-4 sm:gap-2 items-center justify-items-center relative z-20">
            
            <!-- STAGE 1: BASECAMP DETEKTIF / APERSEPSI -->
            <div id="stage-card-1" onclick="openMissionStage(1)" class="mission-stage-btn group cursor-pointer flex flex-col items-center text-center transition-transform transform hover:scale-105 active:scale-95">
              <!-- Pin Circle -->
              <div class="w-12 h-12 rounded-full bg-gradient-to-b from-amber-300 to-amber-500 border-3 border-purple-950 text-purple-950 font-black text-lg flex items-center justify-center shadow-lg mb-2 relative">
                1
                <span class="absolute -top-2 -right-2 text-xs" id="stage-star-1">⭐</span>
              </div>
              <!-- Wood Signboard -->
              <div class="w-36 py-2.5 px-2 rounded-2xl bg-gradient-to-b from-amber-100 to-amber-200 border-3 border-amber-800 shadow-xl group-hover:border-purple-800 transition">
                <div class="text-xl mb-0.5">🏕️</div>
                <div class="font-black text-xs text-amber-950 uppercase tracking-tight">Basecamp Cerita</div>
                <div class="text-[10px] font-bold text-amber-800" id="stage-sub-1">Apersepsi Awal</div>
              </div>
            </div>

            <!-- PATH CONNECTOR 1 -> 2 (DESKTOP) -->
            <!-- STAGE 2: LABORATORIUM KONSEP -->
            <div id="stage-card-2" onclick="openMissionStage(2)" class="mission-stage-btn group cursor-pointer flex flex-col items-center text-center transition-transform transform hover:scale-105 active:scale-95">
              <div class="w-12 h-12 rounded-full bg-gradient-to-b from-amber-300 to-amber-500 border-3 border-purple-950 text-purple-950 font-black text-lg flex items-center justify-center shadow-lg mb-2 relative">
                2
                <span class="absolute -top-2 -right-2 text-xs" id="stage-star-2">⭐</span>
              </div>
              <div class="w-36 py-2.5 px-2 rounded-2xl bg-gradient-to-b from-amber-100 to-amber-200 border-3 border-amber-800 shadow-xl group-hover:border-purple-800 transition">
                <div class="text-xl mb-0.5">🔬</div>
                <div class="font-black text-xs text-amber-950 uppercase tracking-tight">Laboratorium</div>
                <div class="text-[10px] font-bold text-amber-800" id="stage-sub-2">Teori & Diagram</div>
              </div>
            </div>

            <!-- STAGE 3: RUANG SEIMBANG / CONTOH SOAL -->
            <div id="stage-card-3" onclick="openMissionStage(3)" class="mission-stage-btn group cursor-pointer flex flex-col items-center text-center transition-transform transform hover:scale-105 active:scale-95">
              <div class="w-12 h-12 rounded-full bg-gradient-to-b from-amber-300 to-amber-500 border-3 border-purple-950 text-purple-950 font-black text-lg flex items-center justify-center shadow-lg mb-2 relative">
                3
                <span class="absolute -top-2 -right-2 text-xs" id="stage-star-3">⭐</span>
              </div>
              <div class="w-36 py-2.5 px-2 rounded-2xl bg-gradient-to-b from-amber-100 to-amber-200 border-3 border-amber-800 shadow-xl group-hover:border-purple-800 transition">
                <div class="text-xl mb-0.5">⚖️</div>
                <div class="font-black text-xs text-amber-950 uppercase tracking-tight">Ruang Trik</div>
                <div class="text-[10px] font-bold text-amber-800" id="stage-sub-3">Contoh Soal</div>
              </div>
            </div>

            <!-- STAGE 4: ARENA UJI TANTANGAN (KUIS CBT) -->
            <div id="stage-card-4" onclick="openMissionStage(4)" class="mission-stage-btn group cursor-pointer flex flex-col items-center text-center transition-transform transform hover:scale-105 active:scale-95">
              <div class="w-12 h-12 rounded-full bg-gradient-to-b from-amber-300 to-amber-500 border-3 border-purple-950 text-purple-950 font-black text-lg flex items-center justify-center shadow-lg mb-2 relative animate-bounce">
                4
                <span class="absolute -top-2 -right-2 text-xs" id="stage-star-4">⭐</span>
              </div>
              <div class="w-36 py-2.5 px-2 rounded-2xl bg-gradient-to-b from-amber-100 to-amber-200 border-3 border-rose-700 shadow-xl group-hover:border-purple-800 transition">
                <div class="text-xl mb-0.5">🎯</div>
                <div class="font-black text-xs text-rose-950 uppercase tracking-tight">Arena Uji</div>
                <div class="text-[10px] font-bold text-rose-700" id="stage-sub-4">Kuis 10 Soal</div>
              </div>
            </div>

            <!-- STAGE 5: BUKTI JANJI / PIAGAM PRESTASI -->
            <div id="stage-card-5" onclick="openMissionStage(5)" class="mission-stage-btn group cursor-pointer flex flex-col items-center text-center transition-transform transform hover:scale-105 active:scale-95">
              <div class="w-12 h-12 rounded-full bg-gradient-to-b from-amber-300 to-amber-500 border-3 border-purple-950 text-purple-950 font-black text-lg flex items-center justify-center shadow-lg mb-2 relative">
                5
                <span class="absolute -top-2 -right-2 text-xs" id="stage-star-5">👑</span>
              </div>
              <div class="w-36 py-2.5 px-2 rounded-2xl bg-gradient-to-b from-amber-100 to-amber-200 border-3 border-purple-800 shadow-xl group-hover:border-purple-800 transition">
                <div class="text-xl mb-0.5">📜</div>
                <div class="font-black text-xs text-purple-950 uppercase tracking-tight">Kastil Juara</div>
                <div class="text-[10px] font-bold text-purple-700" id="stage-sub-5">Piagam Lovely</div>
              </div>
            </div>

          </div>

          <!-- Stepping Stone Decorative Ground (Visual Garden) -->
          <div class="mt-8 flex items-center justify-center gap-2 text-xs font-bold text-emerald-900 bg-white/60 backdrop-blur-xs py-2 px-4 rounded-full border border-emerald-300 w-max mx-auto shadow-sm">
            <span>🌸</span>
            <span>Selesaikan Pos 1 sampai Pos 4 untuk membuka Kunci Mahkota Piagam di Pos 5!</span>
            <span>🌸</span>
          </div>
        </div>

        <!-- BOTTOM TOOLBAR (SIDE BUTTONS & NAVIGATION) -->
        <div class="relative z-10 flex flex-wrap items-center justify-between gap-3 pt-4 border-t-2 border-white/50">
          <!-- Left Tool Icons -->
          <div class="flex items-center gap-2">
            <button onclick="toggleMissionSound()" class="w-10 h-10 rounded-2xl bg-purple-900 border-2 border-amber-300 text-amber-200 flex items-center justify-center text-lg shadow-lg hover:scale-105 transition" title="Suara / Musik On/Off" id="mission-audio-btn">
              🔊
            </button>
            <button onclick="openFullModuleFromMission()" class="w-10 h-10 rounded-2xl bg-purple-900 border-2 border-amber-300 text-amber-200 flex items-center justify-center text-lg shadow-lg hover:scale-105 transition" title="Baca Modul Lengkap">
              📖
            </button>
            <button onclick="switchTab('curriculum')" class="w-10 h-10 rounded-2xl bg-purple-900 border-2 border-amber-300 text-amber-200 flex items-center justify-center text-lg shadow-lg hover:scale-105 transition" title="Kembali ke Beranda">
              🏠
            </button>
          </div>

          <!-- Center Stage Progress Status -->
          <div class="text-xs font-extrabold text-purple-950 bg-amber-300/80 px-4 py-1.5 rounded-full border border-amber-400 shadow-sm" id="mission-status-pill">
            Misi Aktif: Silakan klik Pos 1 untuk memulai!
          </div>

          <!-- Right Navigation Buttons -->
          <div class="flex items-center gap-2">
            <button onclick="prevMissionStage()" class="px-4 py-2 rounded-2xl bg-purple-900 border-2 border-amber-300 text-amber-200 font-extrabold text-xs shadow-lg hover:bg-purple-800 transition">
              ⬅ Sebelumnya
            </button>
            <button onclick="nextMissionStage()" class="px-4 py-2 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 border-2 border-purple-950 text-purple-950 font-black text-xs shadow-lg hover:scale-105 transition flex items-center gap-1">
              <span>Selanjutnya</span>
              <span>➡</span>
            </button>
          </div>
        </div>

      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- MODAL RUNNER POS MISI (STAGE POPUP)                                      -->
    <!-- ========================================================================= -->
    <div id="mission-stage-modal" class="fixed inset-0 z-50 hidden bg-slate-900/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div class="bg-white rounded-3xl shadow-2xl border-4 border-amber-400 max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <!-- Modal Header -->
        <div class="bg-gradient-to-r from-purple-900 to-indigo-900 p-4 sm:p-5 text-white flex items-center justify-between border-b-4 border-amber-400">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-2xl bg-amber-300 text-purple-950 font-black text-lg flex items-center justify-center shadow-md" id="msm-stage-num">
              1
            </div>
            <div>
              <div class="text-[10px] font-black uppercase tracking-wider text-amber-300" id="msm-stage-tag">Pos 1 • Basecamp Cerita</div>
              <h3 class="text-base sm:text-lg font-black text-white" id="msm-stage-title">Apersepsi Kontekstual</h3>
            </div>
          </div>
          <button onclick="closeMissionModal()" class="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center font-bold text-lg transition">
            ✕
          </button>
        </div>

        <!-- Modal Body Content -->
        <div class="p-6 overflow-y-auto space-y-4 text-slate-800 text-sm leading-relaxed" id="msm-stage-body">
          <!-- Dynamic Content -->
        </div>

        <!-- Modal Footer Buttons -->
        <div class="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
          <button onclick="closeMissionModal()" class="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 bg-slate-200 hover:bg-slate-300 transition">
            Tutup
          </button>
          <button id="msm-stage-action-btn" class="px-5 py-2.5 rounded-xl text-xs font-black bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-md transition flex items-center gap-2">
            <span>Selesai & Lanjut Misi</span>
            <span>▶</span>
          </button>
        </div>
      </div>
    </div>
`);

h = h.replace(viewAnchor, missionViewHtml + NL + '    ' + viewAnchor);

// 6. ADD MISSION JS LOGIC BEFORE GLOBAL APP STATE OR AT END OF SCRIPT
const missionJsCode = L(`
    // =========================================================================
    // LOGIKA PETA MISI PETUALANGAN ANAK SD (GAMIFIED ADVENTURE MAP)
    // =========================================================================
    const STORAGE_KEY_MISSION = 'pintarsd6_mission_progress_v1';
    let missionProgress = {};
    let currentMissionModuleId = 'MTK-B1';
    let currentMissionStage = 1;
    let missionSound = true;

    try {
      const savedM = localStorage.getItem(STORAGE_KEY_MISSION);
      if (savedM) missionProgress = JSON.parse(savedM);
    } catch(e) {}

    function saveMissionProgress() {
      try {
        localStorage.setItem(STORAGE_KEY_MISSION, JSON.stringify(missionProgress));
      } catch(e) {}
    }

    function onMissionSubjectChange() {
      updateMissionBabDropdown();
      renderMissionMap();
    }

    function updateMissionBabDropdown() {
      const subjEl = document.getElementById('mission-subject-select');
      const babEl = document.getElementById('mission-bab-select');
      if (!subjEl || !babEl) return;

      const subj = subjEl.value;
      const mods = (window.KURIKULUM_SD6 || []).filter(m => m.subject === subj);
      
      babEl.innerHTML = mods.map(m => \`<option value="\${m.id}">\${escapeHtml(m.bab)}</option>\`).join('');
      if (mods.length > 0) {
        currentMissionModuleId = mods[0].id;
        babEl.value = mods[0].id;
      }
    }

    function toggleMissionSound() {
      missionSound = !missionSound;
      const btn = document.getElementById('mission-audio-btn');
      if (btn) btn.textContent = missionSound ? '🔊' : '🔇';
      if (typeof soundOn !== 'undefined') soundOn = missionSound;
      if (missionSound) playTone('correct');
    }

    function getModuleMissionData(modId) {
      const mod = (window.KURIKULUM_SD6 || []).find(m => m.id === modId) || (window.KURIKULUM_SD6 || [])[0];
      const rich = (typeof richModulesData !== 'undefined' && richModulesData[modId]) ? richModulesData[modId] : null;
      return { mod, rich };
    }

    function renderMissionMap() {
      const babEl = document.getElementById('mission-bab-select');
      if (babEl && babEl.value) currentMissionModuleId = babEl.value;

      const { mod, rich } = getModuleMissionData(currentMissionModuleId);
      if (!mod) return;

      // Update banner subtitle
      const subTitleEl = document.getElementById('mission-banner-subtitle');
      if (subTitleEl) {
        subTitleEl.textContent = \`\${mod.subject} Kelas 6 • \${mod.bab}\`;
      }

      // Initialize progress for this module if not set
      if (!missionProgress[currentMissionModuleId]) {
        missionProgress[currentMissionModuleId] = {
          unlockedStage: 1,
          completedStages: [],
          score: 0,
          stars: 0
        };
      }
      const prog = missionProgress[currentMissionModuleId];

      // Update Stars KPI
      let totalStars = 0;
      Object.values(missionProgress).forEach(p => totalStars += (p.stars || 0));
      const starCountEl = document.getElementById('mission-star-count');
      if (starCountEl) starCountEl.textContent = totalStars;

      // Render Stage Cards 1 to 5
      for (let s = 1; s <= 5; s++) {
        const card = document.getElementById(\`stage-card-\${s}\`);
        const starEl = document.getElementById(\`stage-star-\${s}\`);
        if (!card) continue;

        const isCompleted = (prog.completedStages || []).includes(s);
        const isUnlocked = s <= (prog.unlockedStage || 1);

        if (starEl) {
          starEl.textContent = isCompleted ? (s === 5 ? '👑' : '⭐') : (isUnlocked ? '🔓' : '🔒');
        }

        if (isCompleted) {
          card.classList.remove('opacity-50', 'grayscale');
          card.classList.add('ring-4', 'ring-emerald-400', 'rounded-2xl');
        } else if (isUnlocked) {
          card.classList.remove('opacity-50', 'grayscale', 'ring-4', 'ring-emerald-400');
        } else {
          card.classList.add('opacity-50', 'grayscale');
          card.classList.remove('ring-4', 'ring-emerald-400');
        }
      }

      const statusPill = document.getElementById('mission-status-pill');
      if (statusPill) {
        const compCount = (prog.completedStages || []).length;
        statusPill.textContent = \`Misi Bab Ini: \${compCount} dari 5 Pos Selesai (\${compCount * 20}%) \${compCount === 5 ? '🎉 TAMAT!' : ''}\`;
      }
    }

    function openMissionStage(stageNum) {
      currentMissionStage = stageNum;
      const prog = missionProgress[currentMissionModuleId] || { unlockedStage: 1, completedStages: [] };
      const { mod, rich } = getModuleMissionData(currentMissionModuleId);

      playTone('correct');

      const modal = document.getElementById('mission-stage-modal');
      const numEl = document.getElementById('msm-stage-num');
      const tagEl = document.getElementById('msm-stage-tag');
      const titleEl = document.getElementById('msm-stage-title');
      const bodyEl = document.getElementById('msm-stage-body');
      const actionBtn = document.getElementById('msm-stage-action-btn');

      if (!modal) return;
      numEl.textContent = stageNum;

      if (stageNum === 1) {
        tagEl.textContent = 'Pos 1 • Basecamp Cerita (Apersepsi)';
        titleEl.textContent = \`Apersepsi & Cerita Seru: \${mod.bab}\`;
        bodyEl.innerHTML = \`
          <div class="p-5 rounded-2xl bg-amber-50 border border-amber-200 space-y-3">
            <div class="flex items-center gap-2 text-amber-900 font-extrabold text-base">
              <span>🍕</span> Cerita Pemantik Rasa Ingin Tahu
            </div>
            <p class="text-slate-700 leading-relaxed text-sm">\${mod.summary}</p>
            <div class="p-3 bg-white rounded-xl border border-amber-200 text-xs font-semibold text-amber-950 flex items-center gap-2">
              <span>💡</span>
              <span>Tujuan Misi: Memahami konsep penting bab ini agar siap menghadapi soal tantangan!</span>
            </div>
          </div>
        \`;
        actionBtn.innerHTML = '<span>Paham Ceritanya! Buka Lab Konsep (Pos 2)</span> <span>▶</span>';
        actionBtn.onclick = () => completeStage(1, 2);
      } else if (stageNum === 2) {
        tagEl.textContent = 'Pos 2 • Laboratorium Konsep';
        titleEl.textContent = \`Pendalaman Teori Kunci: \${mod.bab}\`;
        bodyEl.innerHTML = \`
          <div class="space-y-4">
            <div class="p-4 rounded-2xl bg-indigo-50 border border-indigo-200">
              <h4 class="font-bold text-indigo-900 mb-2 flex items-center gap-2"><span>🔬</span> Poin Konsep Utama:</h4>
              <ul class="list-disc list-inside space-y-1.5 text-xs text-slate-700">
                \${(mod.keyPoints || []).map(k => \`<li>\${escapeHtml(k)}</li>\`).join('')}
              </ul>
            </div>
            \${rich ? \`<div class="text-xs text-slate-500 italic">💡 Bab ini memiliki modul visual mendalam dengan diagram interaktif!</div>\` : ''}
          </div>
        \`;
        actionBtn.innerHTML = '<span>Konsep Dikuasai! Masuk Ruang Trik (Pos 3)</span> <span>▶</span>';
        actionBtn.onclick = () => completeStage(2, 3);
      } else if (stageNum === 3) {
        tagEl.textContent = 'Pos 3 • Ruang Trik & Contoh Soal';
        titleEl.textContent = \`Contoh Soal Nyata & Trik Cepat: \${mod.bab}\`;
        bodyEl.innerHTML = \`
          <div class="p-5 rounded-2xl bg-teal-50 border border-teal-200 space-y-3">
            <div class="flex items-center gap-2 text-teal-900 font-extrabold text-base">
              <span>⚖️</span> Contoh Kasus & Cara Penyelesaian
            </div>
            <div class="p-4 bg-white rounded-xl border border-teal-200 text-xs text-slate-800 font-mono">
              \${escapeHtml(mod.example || 'Contoh soal penerapan konsep dalam kehidupan sehari-hari.')}
            </div>
            <p class="text-xs text-teal-800 font-semibold">Trik: Cermati pola pengerjaan di atas sebelum masuk ke Arena Uji Tantangan!</p>
          </div>
        \`;
        actionBtn.innerHTML = '<span>Siap Tempur! Masuk Arena Uji (Pos 4)</span> <span>🎯</span>';
        actionBtn.onclick = () => completeStage(3, 4);
      } else if (stageNum === 4) {
        tagEl.textContent = 'Pos 4 • Arena Uji Tantangan (Kuis CBT)';
        titleEl.textContent = \`Uji Tantangan Kuis: \${mod.bab}\`;
        
        const qList = (questions || []).filter(q => q.type === 'PG' && isQuestionInModule(q, mod));
        bodyEl.innerHTML = \`
          <div class="text-center py-4 space-y-4">
            <div class="text-5xl animate-bounce">🎯</div>
            <h4 class="font-black text-lg text-slate-900">Apakah Kamu Siap Membuktikan Kehebatanmu?</h4>
            <p class="text-xs text-slate-600 max-w-md mx-auto">
              Selesaikan tantangan kuis untuk bab ini. Dapatkan nilai minimal <strong>70</strong> untuk membuka Kunci Mahkota Piagam di Pos 5!
            </p>
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-100 text-purple-900 font-bold text-xs">
              <span>📝</span> Tersedia \${qList.length} butir soal pilihan ganda
            </div>
          </div>
        \`;
        actionBtn.innerHTML = '<span>Mulai Kerjakan Kuis Sekarang!</span> <span>🚀</span>';
        actionBtn.onclick = () => {
          closeMissionModal();
          practiceModule(mod.id, mod.bab);
        };
      } else if (stageNum === 5) {
        tagEl.textContent = 'Pos 5 • Kastil Juara & Piagam Emas';
        titleEl.textContent = 'Piagam Penghargaan Bintang Emas';
        
        bodyEl.innerHTML = \`
          <!-- SERTIFIKAT PIAGAM PENGHARGAAN -->
          <div id="mission-certificate-print" class="p-6 rounded-3xl bg-gradient-to-b from-amber-50 via-yellow-50 to-amber-100 border-4 border-amber-400 text-center space-y-4 shadow-xl">
            <div class="flex items-center justify-center gap-2 text-amber-600 font-black text-xs uppercase tracking-widest">
              <span>⭐</span> PIAGAM PENGHARGAAN SISWA HEBAT <span>⭐</span>
            </div>
            <div class="text-4xl">👑</div>
            <h2 class="text-2xl font-black text-amber-950 font-heading">SELAMAT KEPADA LOVELY!</h2>
            <p class="text-xs text-slate-700">Telah berhasil menyelesaikan seluruh rangkaian Peta Misi Petualangan pada materi:</p>
            <div class="p-3 bg-white/90 rounded-2xl border-2 border-amber-300 font-black text-sm text-purple-900 shadow-sm">
              \${escapeHtml(mod.subject)} • \${escapeHtml(mod.bab)}
            </div>
            <div class="flex items-center justify-center gap-2 text-2xl text-amber-500 py-1">
              ⭐⭐⭐⭐⭐
            </div>
            <div class="text-[11px] text-slate-500 italic">
              "Teruslah bersemangat, rajin belajar, dan jadilah kebanggaan keluarga!"
            </div>
          </div>
        \`;
        actionBtn.innerHTML = '<span>🖨️ Cetak / Simpan Piagam</span>';
        actionBtn.onclick = () => {
          window.print();
        };
      }

      modal.classList.remove('hidden');
    }

    function completeStage(currentStage, nextStage) {
      const prog = missionProgress[currentMissionModuleId];
      if (!prog.completedStages.includes(currentStage)) {
        prog.completedStages.push(currentStage);
        prog.stars = (prog.stars || 0) + 1;
      }
      if (prog.unlockedStage < nextStage) {
        prog.unlockedStage = nextStage;
      }
      saveMissionProgress();
      renderMissionMap();
      playTone('finish');
      closeMissionModal();

      setTimeout(() => {
        openMissionStage(nextStage);
      }, 350);
    }

    function closeMissionModal() {
      const modal = document.getElementById('mission-stage-modal');
      if (modal) modal.classList.add('hidden');
    }

    function prevMissionStage() {
      if (currentMissionStage > 1) {
        openMissionStage(currentMissionStage - 1);
      }
    }

    function nextMissionStage() {
      if (currentMissionStage < 5) {
        openMissionStage(currentMissionStage + 1);
      }
    }

    function resetCurrentMissionProgress() {
      if (confirm('Apakah kamu ingin mengulang petualangan misi untuk bab ini dari Pos 1?')) {
        missionProgress[currentMissionModuleId] = {
          unlockedStage: 1,
          completedStages: [],
          score: 0,
          stars: 0
        };
        saveMissionProgress();
        renderMissionMap();
        playTone('correct');
      }
    }

    function openFullModuleFromMission() {
      openModuleReaderModal(currentMissionModuleId);
    }
`);

// 7. Insert missionJsCode into index.html
const jsAnchor = '// =========================================================================\r\n    // FITUR PILIH BAB DINAMIS (KURIKULUM, KUIS CBT, & FLASHCARD)';
h = h.replace(jsAnchor, missionJsCode + NL + NL + '    ' + jsAnchor);

// 8. Update switchTab to handle 'mission'
h = h.replace(
  "if (tab === 'quiz') {",
  "if (tab === 'mission') {\r\n        updateMissionBabDropdown();\r\n        renderMissionMap();\r\n      } else if (tab === 'quiz') {"
);

fs.writeFileSync(idxPath, h, 'utf8');
console.log('✅ Berhasil menyisipkan Peta Misi Petualangan ke index.html!');

// Verify script syntax
const scriptMatches = [...h.matchAll(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi)];
console.log('Inline scripts count:', scriptMatches.length);
scriptMatches.forEach((m, idx) => {
  try {
    new Function(m[1]);
    console.log('Script ' + idx + ' is VALID');
  } catch(e) {
    console.error('Syntax error in script ' + idx + ':', e.message);
  }
});

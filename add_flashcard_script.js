const fs = require('fs');
let tpl = fs.readFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/app_template.html', 'utf8');

// Data Flashcard default SD Kelas 6
const flashcardDataAndFunctions = `
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
        frontTag: 'Bab 1: Surat Resmi',
        front: 'Sebutkan 3 bagian yang hanya ada pada Surat Resmi!',
        backTitle: 'Kop Surat, Nomor Surat & Stempel',
        backDesc: 'Surat resmi wajib memiliki Kop (kepala instansi), Nomor surat/Lampiran/Perihal, bahasa baku, dan stempel dinas.'
      },
      {
        subject: 'Bahasa Indonesia',
        frontTag: 'Bab 2: Teks Eksplanasi',
        front: 'Apa saja 3 struktur utama dalam teks eksplanasi ilmiah?',
        backTitle: 'Pernyataan Umum, Deretan Penjelas, Interpretasi',
        backDesc: '1) Pernyataan umum (pengenalan fenomena), 2) Deretan penjelas (rangkaian sebab-akibat logis), 3) Interpretasi/kesimpulan ulasan.'
      },
      {
        subject: 'Pendidikan Pancasila',
        frontTag: 'Bab 1: Nilai Pancasila',
        front: 'Apa lambang dan makna Sila ke-2 Pancasila?',
        backTitle: 'Rantai Emas (Kemanusiaan yang Adil & Beradab)',
        backDesc: 'Gelang rantai persegi dan lingkaran melambangkan pria dan wanita yang saling membantu dan bersatu tanpa membeda-bedakan suku/agama.'
      },
      {
        subject: 'Pendidikan Pancasila',
        frontTag: 'Bab 2: 4 Norma',
        front: 'Sebutkan 4 norma yang berlaku dalam kehidupan bermasyarakat!',
        backTitle: 'Agama, Kesusilaan, Kesopanan, Hukum',
        backDesc: '1) Norma Agama (wahyu), 2) Norma Kesusilaan (hati nurani), 3) Norma Kesopanan (adat pergaulan), 4) Norma Hukum (peraturan resmi, sanksi tegas).'
      },
      {
        subject: 'Bahasa Inggris',
        frontTag: 'Simple Past Tense',
        front: 'Kapan to be "was" dan "were" digunakan dalam kalimat lampau?',
        backTitle: 'Was: I, He, She, It | Were: You, They, We',
        backDesc: 'Contoh: "I was at home yesterday" dan "They were happy last night". Menunjukkan status atau kondisi di masa lampau.'
      }
    ];

    let currentFcIndex = 0;
    let isFcCardFlipped = false;
    let activeFlashcards = [...DEFAULT_FLASHCARDS];

    function renderFlashcards() {
      const subj = document.getElementById('fc-subject').value;
      activeFlashcards = subj === 'ALL'
        ? [...DEFAULT_FLASHCARDS]
        : DEFAULT_FLASHCARDS.filter(c => c.subject === subj);

      if (activeFlashcards.length === 0) activeFlashcards = [...DEFAULT_FLASHCARDS];
      currentFcIndex = 0;
      isFcCardFlipped = false;
      updateFocusCardView();
      renderGridCardsView();
    }

    function toggleFlashcardMode() {
      const mode = document.getElementById('fc-mode').value;
      const focusContainer = document.getElementById('fc-focus-container');
      const gridContainer = document.getElementById('fc-grid-container');

      if (mode === 'GRID') {
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
      if (isFcCardFlipped) {
        flipper.classList.remove('rotate-y-180');
        isFcCardFlipped = false;
      }

      document.getElementById('fc-counter').textContent = \`Kartu \${currentFcIndex + 1} / \${activeFlashcards.length}\`;
      document.getElementById('fc-front-tag').textContent = card.frontTag || card.subject;
      document.getElementById('fc-front-text').innerHTML = card.front;
      document.getElementById('fc-back-title').innerHTML = card.backTitle;
      document.getElementById('fc-back-desc').innerHTML = card.backDesc;

      triggerKaTeXRender();
    }

    function flipCurrentCard() {
      const flipper = document.getElementById('fc-card-flipper');
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
        currentFcIndex = 0; // Loop kembali ke awal
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
      activeFlashcards = shuffleArray(activeFlashcards);
      currentFcIndex = 0;
      updateFocusCardView();
      renderGridCardsView();
    }

    function renderGridCardsView() {
      const grid = document.getElementById('fc-grid-container');
      grid.innerHTML = activeFlashcards.map((c, idx) => \`
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

      triggerKaTeXRender();
    }

    // =========================================================================
    // OPSI B: DUKUNGAN FORMULA MATEMATIKA (KATEX) & GAMBAR PADA EDITOR SOAL
    // =========================================================================
    let currentUploadedImageUrl = '';

    function insertMathFormula(latexSnippet) {
      const textarea = document.getElementById('form-question');
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const text = textarea.value;
      const formula = \` $\${latexSnippet}$ \`;
      textarea.value = text.substring(0, start) + formula + text.substring(end);
      textarea.focus();
      textarea.selectionStart = textarea.selectionEnd = start + formula.length;
      updateLivePreview();
    }

    function updateLivePreview() {
      const text = document.getElementById('form-question').value;
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
      const url = document.getElementById('form-image-url').value.trim();
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
      document.getElementById('form-image-url').value = '';
      document.getElementById('form-image-file').value = '';
      document.getElementById('form-image-preview').src = '';
      document.getElementById('form-image-preview-box').classList.add('hidden');
      document.getElementById('btn-clear-img').classList.add('hidden');
    }

    // Render KaTeX Otomatis di seluruh dokumen
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
`;

// Selipkan logika ini di awal fungsi script
tpl = tpl.replace('const STORAGE_KEY_Q =', flashcardDataAndFunctions + '\n    const STORAGE_KEY_Q =');

// Update switchTab agar mendukung tab 'flashcards'
tpl = tpl.replace("const tabs = ['curriculum', 'quiz', 'bank', 'builder', 'analytics'];", "const tabs = ['curriculum', 'quiz', 'flashcards', 'bank', 'builder', 'analytics'];");
tpl = tpl.replace("curriculum: '1. Pembelajaran Siswa • Rangkuman Materi',", "curriculum: '1. Pembelajaran Siswa • Rangkuman Materi',\n        flashcards: '1. Pembelajaran Siswa • Flashcard Hafalan Cepat',");

// Panggil triggerKaTeXRender setelah renderBank & renderCurriculum
tpl = tpl.replace('renderAnalytics();', 'renderAnalytics();\n      triggerKaTeXRender();');

fs.writeFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/app_template.html', tpl, 'utf8');
console.log('Flashcard & Math script logic integrated successfully!');

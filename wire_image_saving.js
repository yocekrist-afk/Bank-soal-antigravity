const fs = require('fs');
let tpl = fs.readFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/app_template.html', 'utf8');

// 1. Update renderBank agar menampilkan gambar jika soal memiliki properti imageUrl
const oldQuestionTextCard = `<div class="text-sm font-medium leading-relaxed text-[var(--foreground)] whitespace-pre-line">\${escapeHtml(q.question)}</div>`;

const newQuestionTextCard = `<div class="text-sm font-medium leading-relaxed text-slate-900 whitespace-pre-line">\${escapeHtml(q.question)}</div>
            \${q.imageUrl ? \`<div class="pt-2"><img src="\${escapeHtml(q.imageUrl)}" alt="Gambar Soal" class="max-h-48 rounded-xl border border-slate-200 object-contain shadow-xs bg-slate-50 p-1" /></div>\` : ''}`;

tpl = tpl.replace(oldQuestionTextCard, newQuestionTextCard);

// 2. Update saveQuestion agar menyimpan currentUploadedImageUrl
tpl = tpl.replace(
  'questions[idx] = { ...questions[idx], subject, semester, type, topic, difficulty, bloom, points, question: questionText, options, correctIndex, explanation };',
  'questions[idx] = { ...questions[idx], subject, semester, type, topic, difficulty, bloom, points, question: questionText, imageUrl: currentUploadedImageUrl, options, correctIndex, explanation };'
);

tpl = tpl.replace(
  'timeMinutes: 2,\n          question: questionText,',
  'timeMinutes: 2,\n          question: questionText,\n          imageUrl: currentUploadedImageUrl,'
);

// 3. Update editQuestion agar memuat gambar lama jika ada
const oldEditQuestionSet = `document.getElementById('form-question').value = q.question;`;
const newEditQuestionSet = `document.getElementById('form-question').value = q.question;
      if (q.imageUrl) {
        currentUploadedImageUrl = q.imageUrl;
        document.getElementById('form-image-preview').src = q.imageUrl;
        document.getElementById('form-image-preview-box').classList.remove('hidden');
        document.getElementById('btn-clear-img').classList.remove('hidden');
      } else {
        clearFormImage();
      }`;

tpl = tpl.replace(oldEditQuestionSet, newEditQuestionSet);

// 4. Update openModal saat tambah soal baru untuk mengosongkan gambar & preview
const oldOpenModalReset = `document.getElementById('form-question').value = '';`;
const newOpenModalReset = `document.getElementById('form-question').value = '';
        clearFormImage();
        document.getElementById('form-katex-preview-box').classList.add('hidden');`;

tpl = tpl.replace(oldOpenModalReset, newOpenModalReset);

// 5. Inisialisasi Flashcard pada saat pertama kali load
tpl = tpl.replace('renderAnalytics();', 'renderAnalytics();\n      renderFlashcards();');

fs.writeFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/app_template.html', tpl, 'utf8');
console.log('Image rendering and question saving updated successfully!');

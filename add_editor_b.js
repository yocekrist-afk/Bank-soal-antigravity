const fs = require('fs');
let tpl = fs.readFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/app_template.html', 'utf8');

// Update modal tambah/edit soal
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
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
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

tpl = tpl.replace(oldQuestionField, newQuestionField);

fs.writeFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/app_template.html', tpl, 'utf8');
console.log('Formula editor & Image uploader added to modal!');

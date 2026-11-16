const fs = require('fs');
let tpl = fs.readFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/app_template.html', 'utf8');

// Ganti section KPI agar lebih segar dan profesional
const oldKpiRegex = /<!-- Ringkasan KPI Atas -->[\s\S]*?<\/section>/;

const newKpi = `<!-- Ringkasan KPI Atas (Enterprise Bright Cards) -->
    <section class="grid grid-cols-2 lg:grid-cols-4 gap-4 no-print">
      <!-- Card 1 -->
      <div class="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-xs hover:shadow-md transition">
        <div class="flex items-center justify-between">
          <span class="text-xs font-semibold text-slate-500">Cakupan Kurikulum</span>
          <span class="text-[11px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 font-bold border border-blue-200" id="kpi-modules-count">19 Bab</span>
        </div>
        <div class="mt-2.5 flex items-baseline gap-2">
          <span class="text-3xl font-extrabold tracking-tight text-slate-900" id="kpi-total-questions">82</span>
          <span class="text-xs font-medium text-slate-500">butir soal aktif</span>
        </div>
        <div class="mt-2 text-[11px] text-emerald-600 font-medium flex items-center gap-1">
          <span>✓</span> 5 Mapel Terverifikasi
        </div>
      </div>

      <!-- Card 2 -->
      <div class="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-xs hover:shadow-md transition">
        <div class="flex items-center justify-between">
          <span class="text-xs font-semibold text-slate-500">Proporsi Kesulitan</span>
          <span class="text-[11px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">Seimbang</span>
        </div>
        <div class="mt-3 flex items-center gap-1.5 h-2.5 rounded-full overflow-hidden bg-slate-100 p-0.5 border border-slate-200">
          <div id="bar-easy" class="bg-emerald-500 h-full rounded-full transition-all" style="width: 30%"></div>
          <div id="bar-medium" class="bg-amber-500 h-full rounded-full transition-all" style="width: 50%"></div>
          <div id="bar-hard" class="bg-rose-500 h-full rounded-full transition-all" style="width: 20%"></div>
        </div>
        <div class="mt-2.5 flex justify-between text-[11px] text-slate-500 font-medium">
          <span id="lbl-easy" class="text-emerald-700 font-semibold">Mudah: 0</span>
          <span id="lbl-medium" class="text-amber-700 font-semibold">Sedang: 0</span>
          <span id="lbl-hard" class="text-rose-700 font-semibold">Sulit: 0</span>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-xs hover:shadow-md transition">
        <div class="flex items-center justify-between">
          <span class="text-xs font-semibold text-slate-500">Indeks HOTS (C4–C6)</span>
          <span class="text-[11px] px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 font-bold border border-purple-200">Standar ANBK</span>
        </div>
        <div class="mt-2.5 flex items-baseline gap-2">
          <span class="text-3xl font-extrabold tracking-tight text-purple-900" id="kpi-hots">0%</span>
          <span class="text-xs text-slate-500 font-medium" id="kpi-hots-detail">0 dari 0 soal</span>
        </div>
        <div class="mt-2 text-[11px] text-slate-500 font-medium">
          Menguji daya analisis & evaluasi
        </div>
      </div>

      <!-- Card 4 -->
      <div class="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-xs hover:shadow-md transition">
        <div class="flex items-center justify-between">
          <span class="text-xs font-semibold text-slate-500">Performa Latihan</span>
          <span class="text-[11px] text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200" id="kpi-streak">🔥 Streak: 0</span>
        </div>
        <div class="mt-2.5 flex items-baseline gap-2">
          <span class="text-3xl font-extrabold tracking-tight text-slate-900" id="kpi-avg-score">0</span>
          <span class="text-xs text-slate-500 font-medium" id="kpi-quiz-count">rata-rata latihan</span>
        </div>
        <div class="mt-2 text-[11px] text-indigo-600 font-medium flex items-center gap-1">
          <span>🎯</span> Uji Pemahaman Siswa
        </div>
      </div>
    </section>`;

tpl = tpl.replace(oldKpiRegex, newKpi);
fs.writeFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/app_template.html', tpl, 'utf8');
console.log('KPI Cards updated to modern bright styling!');

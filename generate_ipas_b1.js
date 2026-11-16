const fs = require('fs');
const path = require('path');

const cwd = 'C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard';
const richModulesPath = path.join(cwd, 'rich_modules.json');

const richModules = JSON.parse(fs.readFileSync(richModulesPath, 'utf8'));

const ipasB1Title = "Bab 1: Bagaimana Tubuh Kita Bergerak? (Rangka, Sendi, Otot & Sistem Saraf Manusia)";

const ipasB1Html = `
<div class="space-y-8 text-slate-800">

  <!-- ========================================================================= -->
  <!-- PILAR 1: PENGANTAR KONTEKSTUAL (APERSEPSI SERU)                           -->
  <!-- ========================================================================= -->
  <section class="space-y-4">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
      <span>🦾</span> Pilar 1: Pengantar Kontekstual (Apersepsi)
    </div>
    <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
      "Robot Hayati Paling Canggih di Dunia: Mengapa Kita Bisa Berlari, Menari, dan Memencet Layar HP?"
    </h2>

    <p class="text-slate-600 leading-relaxed text-sm sm:text-base">
      Bayangkan kamu sedang menonton pertandingan sepak bola. Seorang pemain berlari kencang mengejar bola, melompat tinggi menyundul bola ke gawang, lalu melakukan selebrasi salto di udara dan mendarat sempurna tanpa jatuh. Luar biasa, bukan?
    </p>

    <div class="p-5 rounded-2xl bg-amber-50/70 border-l-4 border-amber-500 text-slate-700 text-sm sm:text-base space-y-2">
      <div class="font-bold text-amber-900 flex items-center gap-2">
        <span>🤖</span> Tahukah Kamu? Para Insinyur Robot Masih Takjub dengan Tubuh Manusia!
      </div>
      <p>
        Para ilmuwan di seluruh dunia menghabiskan miliaran dolar untuk menciptakan robot humanoid (mirip manusia). Namun, robot buatan manusia seringkali berjalan kaku, mudah oleng di jalan bergelombang, dan butuh kabel rumit hanya untuk memegang sebutir telur tanpa memecahkannya.
      </p>
      <p class="font-medium text-amber-950">
        Sementara itu, tubuhmu memiliki lebih dari <strong>206 potong tulang</strong>, lebih dari <strong>600 helai otot</strong>, dan puluhan <strong>engsel sendi fleksibel</strong> yang bekerja selaras sempurna dalam hitungan milidetik tanpa kamu sadari!
      </p>
    </div>

    <p class="text-slate-600 leading-relaxed text-sm sm:text-base">
      Bagaimana cara semua bagian tubuh itu bekerja sama? Tulang tidak bisa bergerak sendiri, otot tidak tahu kapan harus menarik tanpa perintah, dan sendi butuh pelumas agar tidak aus. Di bab ini, kita akan membongkar rahasia di balik <strong>"Trio Keramat Gerak Tubuh" (Rangka, Sendi, Otot)</strong> serta sang jenderal pengendali utama: <strong>Sistem Saraf</strong>!
    </p>
  </section>

  <hr class="border-slate-200">

  <!-- ========================================================================= -->
  <!-- PILAR 2: PENDALAMAN KONSEP INTI (DEEP DIVE)                               -->
  <!-- ========================================================================= -->
  <section class="space-y-6">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider">
      <span>🦴</span> Pilar 2: Pendalaman Konsep Inti (Deep Dive)
    </div>
    <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
      Sinergi Rangka Pasif, Otot Aktif, Engsel Sendi, dan Komando Saraf
    </h2>

    <!-- Sub A: Rangka Tubuh Manusia -->
    <div class="space-y-3">
      <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
        <span class="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">A</span>
        Rangka Tubuh: Si Kokoh Alat Gerak Pasif
      </h3>
      <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
        Tulang disebut <strong>Alat Gerak Pasif</strong> karena tulang tidak dapat bergerak dengan sendirinya tanpa ditarik oleh otot. Bayangkan tulang seperti <em>tiang besi penyangga tenda</em> atau <em>kerangka layang-layang</em>.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
        <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1.5">
          <div class="text-2xl">🏛️</div>
          <h4 class="font-bold text-slate-900 text-sm">1. Memberi Bentuk Tubuh</h4>
          <p class="text-xs text-slate-600">Tanpa rangka, tubuh kita hanyalah gumpalan daging lembek seperti ubur-ubur yang tergeletak di lantai.</p>
        </div>
        <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1.5">
          <div class="text-2xl">🛡️</div>
          <h4 class="font-bold text-slate-900 text-sm">2. Pelindung Organ Vital</h4>
          <p class="text-xs text-slate-600">Tengkorak mengunci otak, tulang rusuk membentengi jantung & paru-paru, tulang belakang membungkus sumsum saraf.</p>
        </div>
        <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1.5">
          <div class="text-2xl">⚓</div>
          <h4 class="font-bold text-slate-900 text-sm">3. Tempat Melekatnya Otot</h4>
          <p class="text-xs text-slate-600">Ujung-ujung otot (tendon) menancap kuat pada tulang sebagai titik tumpu tarikan gerak.</p>
        </div>
        <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1.5">
          <div class="text-2xl">🩸</div>
          <h4 class="font-bold text-slate-900 text-sm">4. Pabrik Sel Darah</h4>
          <p class="text-xs text-slate-600">Di dalam rongga tulang spons (sumsum merah tulang), sel darah merah dan putih diproduksi setiap detik.</p>
        </div>
      </div>
    </div>

    <!-- Sub B: Sendi (Persendian) -->
    <div class="space-y-3 pt-2">
      <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
        <span class="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">B</span>
        Sendi (Artikulasi): Titik Pertemuan Antartulang
      </h3>
      <p class="text-slate-600 text-sm leading-relaxed">
        Jika seluruh tulang kita tersambung kaku tanpa celah, tubuh kita akan seperti balok kayu yang tak bisa membungkuk. <strong>Sendi</strong> adalah engsel penghubung antartulang. Sendi gerak (diartrosis) memiliki 5 macam arah gerak utama:
      </p>

      
      <!-- DIAGRAM VISUAL 5 SENDI (SVG NATIVE) -->
      <div class="my-6 p-5 rounded-3xl bg-linear-to-br from-slate-900 via-indigo-950 to-slate-900 text-white shadow-xl border border-indigo-500/30">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-indigo-800/60 pb-3 mb-4">
          <div class="flex items-center gap-2.5">
            <span class="p-2 rounded-xl bg-indigo-500/20 text-indigo-300 text-lg">🦾</span>
            <div>
              <h4 class="font-extrabold text-base sm:text-lg text-white">Visualisasi 5 Macam Sendi Gerak (Diartrosis)</h4>
              <p class="text-xs text-indigo-300">Skema mekanik arah gerakan tulang — Ringan, Tajam & Bisa Dibuka di Semua Komputer</p>
            </div>
          </div>
          <span class="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            ✓ 100% Offline SVG
          </span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          <!-- 1. Sendi Peluru -->
          <div class="bg-white/5 hover:bg-white/10 transition p-3.5 rounded-2xl border border-white/10 flex flex-col items-center text-center">
            <span class="text-xs font-bold text-amber-300 mb-2">1. Sendi Peluru</span>
            <div class="w-24 h-24 my-1">
              <svg viewBox="0 0 100 100" class="w-full h-full">
                <!-- Socket -->
                <path d="M 25 35 A 25 25 0 0 0 75 35" fill="none" stroke="#60a5fa" stroke-width="6" stroke-linecap="round"/>
                <!-- Ball -->
                <circle cx="50" cy="50" r="18" fill="#38bdf8" fill-opacity="0.25" stroke="#38bdf8" stroke-width="4"/>
                <circle cx="50" cy="50" r="4" fill="#f8fafc"/>
                <!-- Stem -->
                <line x1="50" y1="68" x2="50" y2="92" stroke="#94a3b8" stroke-width="6" stroke-linecap="round"/>
                <!-- 360 Arrow -->
                <path d="M 22 50 A 28 28 0 1 1 78 50" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="3 3"/>
                <polygon points="78,45 84,52 76,55" fill="#f59e0b"/>
                <polygon points="22,55 16,48 24,45" fill="#f59e0b"/>
              </svg>
            </div>
            <span class="text-[11px] font-extrabold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-md mt-1">Segala Arah (360°)</span>
            <p class="text-[10px] text-slate-300 mt-1.5 leading-snug">Bahu & Gelang Panggul (Paha)</p>
          </div>

          <!-- 2. Sendi Engsel -->
          <div class="bg-white/5 hover:bg-white/10 transition p-3.5 rounded-2xl border border-white/10 flex flex-col items-center text-center">
            <span class="text-xs font-bold text-emerald-300 mb-2">2. Sendi Engsel</span>
            <div class="w-24 h-24 my-1">
              <svg viewBox="0 0 100 100" class="w-full h-full">
                <!-- Hinge base -->
                <rect x="25" y="65" width="50" height="14" rx="4" fill="#334155" stroke="#64748b" stroke-width="2"/>
                <!-- Moving bar -->
                <line x1="35" y1="65" x2="70" y2="25" stroke="#34d399" stroke-width="7" stroke-linecap="round"/>
                <!-- Pivot pin -->
                <circle cx="35" cy="65" r="7" fill="#10b981" stroke="#f8fafc" stroke-width="2"/>
                <!-- 1 direction arc arrow -->
                <path d="M 68 38 A 38 38 0 0 1 72 65" fill="none" stroke="#fbbf24" stroke-width="2.5"/>
                <polygon points="65,34 74,36 71,44" fill="#fbbf24"/>
                <polygon points="72,69 76,60 67,62" fill="#fbbf24"/>
              </svg>
            </div>
            <span class="text-[11px] font-extrabold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-md mt-1">1 Arah (Buka-Tutup)</span>
            <p class="text-[10px] text-slate-300 mt-1.5 leading-snug">Siku Tangan, Lutut & Ruas Jari</p>
          </div>

          <!-- 3. Sendi Putar -->
          <div class="bg-white/5 hover:bg-white/10 transition p-3.5 rounded-2xl border border-white/10 flex flex-col items-center text-center">
            <span class="text-xs font-bold text-sky-300 mb-2">3. Sendi Putar</span>
            <div class="w-24 h-24 my-1">
              <svg viewBox="0 0 100 100" class="w-full h-full">
                <!-- Center axis pin -->
                <line x1="50" y1="15" x2="50" y2="85" stroke="#38bdf8" stroke-width="8" stroke-linecap="round"/>
                <!-- Ring bone around pin -->
                <ellipse cx="50" cy="50" rx="30" ry="12" fill="none" stroke="#60a5fa" stroke-width="4"/>
                <!-- Rotation arrows -->
                <path d="M 22 50 A 28 10 0 0 1 78 50" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
                <polygon points="78,47 84,54 77,56" fill="#f59e0b"/>
              </svg>
            </div>
            <span class="text-[11px] font-extrabold text-sky-400 bg-sky-400/10 px-2 py-0.5 rounded-md mt-1">Rotasi 1 Poros</span>
            <p class="text-[10px] text-slate-300 mt-1.5 leading-snug">Leher (Atlas) & Tengkorak</p>
          </div>

          <!-- 4. Sendi Pelana -->
          <div class="bg-white/5 hover:bg-white/10 transition p-3.5 rounded-2xl border border-white/10 flex flex-col items-center text-center">
            <span class="text-xs font-bold text-purple-300 mb-2">4. Sendi Pelana</span>
            <div class="w-24 h-24 my-1">
              <svg viewBox="0 0 100 100" class="w-full h-full">
                <!-- Lower saddle -->
                <path d="M 25 65 C 35 48, 65 48, 75 65 L 75 75 C 65 58, 35 58, 25 75 Z" fill="#c084fc" fill-opacity="0.4" stroke="#c084fc" stroke-width="2"/>
                <!-- Upper rider bone -->
                <path d="M 50 20 L 50 52" stroke="#e879f9" stroke-width="8" stroke-linecap="round"/>
                <!-- 2-axis crossing arrows -->
                <line x1="30" y1="36" x2="70" y2="36" stroke="#fbbf24" stroke-width="2"/>
                <polygon points="26,36 32,32 32,40" fill="#fbbf24"/>
                <polygon points="74,36 68,32 68,40" fill="#fbbf24"/>
                <line x1="50" y1="26" x2="50" y2="46" stroke="#fbbf24" stroke-width="2"/>
              </svg>
            </div>
            <span class="text-[11px] font-extrabold text-purple-400 bg-purple-400/10 px-2 py-0.5 rounded-md mt-1">2 Arah (Depan & Samping)</span>
            <p class="text-[10px] text-slate-300 mt-1.5 leading-snug">Pangkal Ibu Jari & Telapak</p>
          </div>

          <!-- 5. Sendi Geser -->
          <div class="bg-white/5 hover:bg-white/10 transition p-3.5 rounded-2xl border border-white/10 flex flex-col items-center text-center">
            <span class="text-xs font-bold text-teal-300 mb-2">5. Sendi Geser</span>
            <div class="w-24 h-24 my-1">
              <svg viewBox="0 0 100 100" class="w-full h-full">
                <!-- Flat plate 1 (top) -->
                <rect x="22" y="32" width="45" height="12" rx="3" fill="#2dd4bf" fill-opacity="0.4" stroke="#2dd4bf" stroke-width="2.5"/>
                <!-- Flat plate 2 (bottom) -->
                <rect x="33" y="52" width="45" height="12" rx="3" fill="#14b8a6" fill-opacity="0.4" stroke="#14b8a6" stroke-width="2.5"/>
                <!-- Sliding arrows -->
                <line x1="25" y1="24" x2="65" y2="24" stroke="#fbbf24" stroke-width="2"/>
                <polygon points="70,24 62,20 62,28" fill="#fbbf24"/>
                <line x1="75" y1="72" x2="35" y2="72" stroke="#fbbf24" stroke-width="2"/>
                <polygon points="30,72 38,68 38,76" fill="#fbbf24"/>
              </svg>
            </div>
            <span class="text-[11px] font-extrabold text-teal-400 bg-teal-400/10 px-2 py-0.5 rounded-md mt-1">Pergeseran Datar</span>
            <p class="text-[10px] text-slate-300 mt-1.5 leading-snug">Pergelangan Tangan & Ruas Tulang</p>
          </div>
        </div>
      </div>

<div class="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
        <table class="w-full text-xs sm:text-sm text-left border-collapse">
          <thead class="bg-indigo-900 text-white uppercase text-[11px] tracking-wider">
            <tr>
              <th class="p-3">Nama Sendi</th>
              <th class="p-3">Arah Gerakan</th>
              <th class="p-3">Analogi Sehari-hari</th>
              <th class="p-3">Contoh Letak di Tubuh</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 bg-white">
            <tr class="hover:bg-slate-50 transition">
              <td class="p-3 font-bold text-indigo-700">1. Sendi Engsel</td>
              <td class="p-3 font-semibold text-slate-800">1 Arah Saja (Membuka / Menutup)</td>
              <td class="p-3 text-slate-600">Engsel pintu kamar atau lipatan laptop</td>
              <td class="p-3 font-medium text-slate-900">Siku tangan, lutut kaki, dan ruas-ruas jari.</td>
            </tr>
            <tr class="hover:bg-slate-50 transition bg-slate-50/50">
              <td class="p-3 font-bold text-emerald-700">2. Sendi Peluru</td>
              <td class="p-3 font-semibold text-slate-800">Ke Segala Arah (Paling Bebas 360°)</td>
              <td class="p-3 text-slate-600">Joystick video game atau bola dalam mangkok</td>
              <td class="p-3 font-medium text-slate-900">Gelang bahu (tulang lengan atas & belikat) dan gelang panggul (tulang paha & panggul).</td>
            </tr>
            <tr class="hover:bg-slate-50 transition">
              <td class="p-3 font-bold text-blue-700">3. Sendi Putar</td>
              <td class="p-3 font-semibold text-slate-800">Berputar / Rotasi Mengitari Poros</td>
              <td class="p-3 text-slate-600">Gasing berputar pada poros tonggak</td>
              <td class="p-3 font-medium text-slate-900">Antara tulang leher pertama (atlas) dan dasar tulang tengkorak (untuk menoleh/menggeleng).</td>
            </tr>
            <tr class="hover:bg-slate-50 transition bg-slate-50/50">
              <td class="p-3 font-bold text-amber-700">4. Sendi Pelana</td>
              <td class="p-3 font-semibold text-slate-800">2 Arah (Kanan-Kiri & Depan-Belakang)</td>
              <td class="p-3 text-slate-600">Orang duduk di atas pelana kuda</td>
              <td class="p-3 font-medium text-slate-900">Pangkal ibu jari dengan tulang telapak tangan (membuat jempol bisa mencubit).</td>
            </tr>
            <tr class="hover:bg-slate-50 transition">
              <td class="p-3 font-bold text-purple-700">5. Sendi Geser</td>
              <td class="p-3 font-semibold text-slate-800">Bergeser Sedikit Mendatar</td>
              <td class="p-3 text-slate-600">Dua lembar kartu remi saling bergesekan datar</td>
              <td class="p-3 font-medium text-slate-900">Antartulang pergelangan tangan, pergelangan kaki, dan antartulang belakang.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Sub C: Otot sebagai Alat Gerak Aktif -->
    <div class="space-y-3 pt-2">
      <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
        <span class="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">C</span>
        Otot: Mesin Penarik (Alat Gerak Aktif)
      </h3>
      <p class="text-slate-600 text-sm leading-relaxed">
        Otot disebut <strong>Alat Gerak Aktif</strong> karena sel-sel otot memiliki kemampuan berkontraksi (memendek dan mengencang) serta berelaksasi (memanjang dan mengendur). <em>Ingat rumus penting: Otot hanya bisa MENARIK tulang, otot tidak bisa MENDORONG tulang!</em>
      </p>

      <!-- Bisep vs Trisep -->
      <div class="p-5 rounded-2xl bg-indigo-50/60 border border-indigo-200 space-y-3">
        <h4 class="font-bold text-indigo-950 text-base flex items-center gap-2">
          <span>💪</span> Cara Kerja Otot Antagonis (Berlawanan): Bisep dan Trisep
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div class="p-4 rounded-xl bg-white border border-indigo-100 space-y-1.5 shadow-xs">
            <span class="px-2 py-0.5 rounded-full font-bold bg-indigo-100 text-indigo-800 text-xs">Gerak 1: Mengangkat Beban / Menekuk Siku</span>
            <ul class="text-slate-700 space-y-1 list-disc list-inside pt-1">
              <li>Otot <strong>BISEP</strong> di depan: <strong>Kontraksi</strong> (menggembung keras & memendek menarik lengan bawah ke atas).</li>
              <li>Otot <strong>TRISEP</strong> di belakang: <strong>Relaksasi</strong> (mengendur & memanjang).</li>
            </ul>
          </div>
          <div class="p-4 rounded-xl bg-white border border-indigo-100 space-y-1.5 shadow-xs">
            <span class="px-2 py-0.5 rounded-full font-bold bg-emerald-100 text-emerald-800 text-xs">Gerak 2: Meluruskan Lengan ke Bawah</span>
            <ul class="text-slate-700 space-y-1 list-disc list-inside pt-1">
              <li>Otot <strong>TRISEP</strong> di belakang: <strong>Kontraksi</strong> (mengeras menarik kembali lengan ke bawah).</li>
              <li>Otot <strong>BISEP</strong> di depan: <strong>Relaksasi</strong> (mengendur & mendatar).</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 3 Jenis Jaringan Otot -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
        <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
          <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800">1. Otot Polos</span>
          <p class="text-xs text-slate-600 leading-relaxed">
            Bentuk gelendong runcing, 1 inti di tengah. Bekerja <strong>di luar kesadaran (involunter)</strong>, lambat, dan tidak mudah lelah. Terletak pada organ dalam: lambung, usus, pembuluh darah, dan kandung kemih.
          </p>
        </div>
        <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
          <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">2. Otot Lurik (Rangka)</span>
          <p class="text-xs text-slate-600 leading-relaxed">
            Bentuk silinder panjang bergaris gelap-terang (lurik), banyak inti di tepi. Bekerja <strong>di bawah kesadaran (volunter)</strong> sesuai perintah otak, gerak cepat tapi mudah lelah. Menempel pada seluruh tulang rangka.
          </p>
        </div>
        <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
          <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 text-rose-800">3. Otot Jantung</span>
          <p class="text-xs text-slate-600 leading-relaxed">
            Bentuk silinder bercabang-cabang (anyaman), berinti di tengah. Bekerja <strong>otomatis tanpa henti seumur hidup</strong> tanpa pernah lelah memompa darah. <em>Hanya ditemukan khusus di dinding jantung!</em>
          </p>
        </div>
      </div>
    </div>

    <!-- Sub D: Sistem Saraf & Refleks -->
    <div class="space-y-3 pt-2">
      <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
        <span class="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">D</span>
        Sistem Saraf: Sang Jenderal Pengendali Perintah
      </h3>
      <p class="text-slate-600 text-sm leading-relaxed">
        Otot dan sendi tidak akan bergerak tanpa adanya sinyal listrik saraf. Sistem saraf terbagi menjadi dua jalur aksi:
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
          <div class="font-bold text-slate-900 text-sm flex items-center gap-1.5">
            <span>🧠</span> 1. Gerak Sadar (Diproses Otak)
          </div>
          <p class="text-xs text-slate-600 leading-relaxed">
            Gerakan yang kamu rencanakan terlebih dahulu, misalnya menulis catatan, mengambil gelas air, atau menendang bola.
          </p>
          <div class="p-2.5 rounded-xl bg-white border border-slate-200 text-center font-mono text-[11px] font-bold text-indigo-700">
            Rangsang ➔ Indra ➔ Saraf Sensorik ➔ OTAK ➔ Saraf Motorik ➔ Otot (Gerak)
          </div>
        </div>

        <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
          <div class="font-bold text-slate-900 text-sm flex items-center gap-1.5">
            <span>⚡</span> 2. Gerak Refleks (Tanpa Lewat Otak)
          </div>
          <p class="text-xs text-slate-600 leading-relaxed">
            Gerakan spontan dan kilat untuk menyelamatkan tubuh dari bahaya darurat, misalnya menyentak saat kena api, mata berkedip saat ada debu, atau lutut tersentak saat diketuk.
          </p>
          <div class="p-2.5 rounded-xl bg-white border border-slate-200 text-center font-mono text-[11px] font-bold text-rose-700">
            Rangsang ➔ Indra ➔ Saraf Sensorik ➔ SUMSUM TULANG BELAKANG ➔ Saraf Motorik ➔ Otot (Menghindar!)
          </div>
        </div>
      </div>
    </div>
  </section>

  <hr class="border-slate-200">

  <!-- ========================================================================= -->
  <!-- PILAR 3: ANALISIS & STUDI KASUS NYATA (HOTS)                              -->
  <!-- ========================================================================= -->
  <section class="space-y-4">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-wider">
      <span>🔍</span> Pilar 3: Analisis & Studi Kasus HOTS
    </div>
    <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
      Studi Kasus Penyelamatan Refleks & Postur Tulang Generasi Gawai
    </h2>

    <!-- Kasus 1 -->
    <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
      <div class="flex items-center justify-between">
        <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 text-rose-800">Kasus HOTS 1</span>
        <span class="text-xs text-slate-400 font-medium">Beban Jalur Saraf</span>
      </div>
      <h3 class="text-base font-bold text-slate-900">
        "Mengapa Tangan Menyentak Dulu Sebelum Mulut Sempat Berteriak 'Aduh!' saat Kena Panci Panas?"
      </h3>
      <div class="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
        <p>
          <strong>Penalaran Fisiologis:</strong> Bayangkan jika sinyal panas dari ujung jarimu harus berjalan jauh melewati lengan, naik ke leher, masuk ke otak, lalu otak menganalisis: <em>"Wah wajan ini panas 100°C, kulit bisa melepuh, mari perintahkan tangan ditarik."</em> Proses berpikir di otak butuh waktu sekitar 0,5 detik. Dalam waktu 0,5 detik itu, kulit jarimu sudah hangus terbakar parah!
        </p>
        <p>
          Oleh karena itu, Sang Pencipta merancang <strong>Jalur Pintas Penyelamat (Busur Refleks)</strong>: Saraf sensorik kulit langsung mengirim sinyal darurat ke <strong>Sumsum Tulang Belakang (Medula Spinalis)</strong>. Tanpa menunggu persetujuan otak, sumsum tulang belakang langsung menembakkan perintah balik ke otot bisep untuk menarik tangan dalam waktu hanya 0,05 detik!
        </p>
        <div class="p-3 rounded-xl bg-emerald-50 text-emerald-900 text-xs font-medium border border-emerald-200">
          💡 Baru setelah tangan berhasil ditarik mundur dengan selamat, sinyal susulan tiba di otak, barulah kamu merasa sakit dan berteriak "Aduh panas!". Ini adalah bukti kehebatan sistem pertahanan tubuh kita!
        </div>

      <!-- DIAGRAM VISUAL BUSUR REFLEKS (SVG & FLOW) -->
      <div class="my-5 p-5 rounded-3xl bg-linear-to-br from-rose-950 via-slate-900 to-indigo-950 text-white shadow-xl border border-rose-500/30">
        <div class="flex items-center justify-between border-b border-rose-800/50 pb-3 mb-4">
          <div class="flex items-center gap-2">
            <span class="p-2 rounded-xl bg-rose-500/20 text-rose-300 text-lg">⚡</span>
            <div>
              <h4 class="font-extrabold text-base text-white">Infografis: Jalur Kilat Busur Refleks (Hanya 0,05 Detik!)</h4>
              <p class="text-xs text-rose-200">Bagaimana tubuh menyelamatkan diri dari bahaya tanpa menunggu otak berpikir</p>
            </div>
          </div>
          <span class="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
            Penyelamat Nyawa
          </span>
        </div>

        <div class="w-full overflow-x-auto pb-2">
          <svg viewBox="0 0 760 160" class="w-full min-w-[680px] h-auto font-sans">
            <!-- Background track -->
            <rect x="10" y="10" width="740" height="140" rx="16" fill="#0f172a" fill-opacity="0.8" stroke="#334155" stroke-width="1.5"/>

            <!-- Node 1: Api Panas -->
            <g transform="translate(30, 25)">
              <rect width="100" height="110" rx="12" fill="#881337" fill-opacity="0.3" stroke="#f43f5e" stroke-width="1.5"/>
              <text x="50" y="28" font-size="20" text-anchor="middle">🔥</text>
              <text x="50" y="52" font-size="11" font-weight="bold" fill="#fda4af" text-anchor="middle">1. RANGSANG</text>
              <text x="50" y="70" font-size="9" fill="#fecdd3" text-anchor="middle">Api / Panci Panas</text>
              <text x="50" y="86" font-size="8" fill="#cbd5e1" text-anchor="middle">Suhu ekstrem mendadak</text>
            </g>

            <!-- Arrow 1 -> 2 -->
            <path d="M 135 80 L 160 80" stroke="#f43f5e" stroke-width="2.5" marker-end="url(#arrow-rose)"/>

            <!-- Node 2: Reseptor Kulit -->
            <g transform="translate(165, 25)">
              <rect width="105" height="110" rx="12" fill="#701a75" fill-opacity="0.3" stroke="#d946ef" stroke-width="1.5"/>
              <text x="52" y="28" font-size="20" text-anchor="middle">🖐️</text>
              <text x="52" y="52" font-size="11" font-weight="bold" fill="#f0abfc" text-anchor="middle">2. RESEPTOR</text>
              <text x="52" y="70" font-size="9" fill="#fae8ff" text-anchor="middle">Ujung Saraf Kulit</text>
              <text x="52" y="86" font-size="8" fill="#cbd5e1" text-anchor="middle">Ubah panas jadi impuls</text>
            </g>

            <!-- Arrow 2 -> 3 -->
            <path d="M 275 80 L 300 80" stroke="#d946ef" stroke-width="2.5"/>

            <!-- Node 3: Saraf Sensorik -->
            <g transform="translate(305, 25)">
              <rect width="115" height="110" rx="12" fill="#1e1b4b" fill-opacity="0.5" stroke="#818cf8" stroke-width="1.5"/>
              <text x="57" y="28" font-size="20" text-anchor="middle">📡</text>
              <text x="57" y="52" font-size="10" font-weight="bold" fill="#a5b4fc" text-anchor="middle">3. SARAF SENSORIK</text>
              <text x="57" y="70" font-size="9" fill="#e0e7ff" text-anchor="middle">Penghantar Listrik</text>
              <text x="57" y="86" font-size="8" fill="#94a3b8" text-anchor="middle">Laju 100 m/detik!</text>
            </g>

            <!-- Arrow 3 -> 4 -->
            <path d="M 425 80 L 450 80" stroke="#818cf8" stroke-width="2.5"/>

            <!-- Node 4: Pusat Refleks (Sumsum Tulang Belakang) -->
            <g transform="translate(455, 20)">
              <rect width="135" height="120" rx="14" fill="#064e3b" fill-opacity="0.5" stroke="#34d399" stroke-width="2"/>
              <text x="67" y="26" font-size="20" text-anchor="middle">⚡</text>
              <text x="67" y="48" font-size="10" font-weight="bold" fill="#6ee7b7" text-anchor="middle">4. SUMSUM TULANG</text>
              <text x="67" y="62" font-size="9" font-weight="extrabold" fill="#a7f3d0" text-anchor="middle">BELAKANG (PINTAS!)</text>
              <text x="67" y="80" font-size="8" fill="#fef08a" text-anchor="middle">⚠️ TIDAK KE OTAK DULU</text>
              <text x="67" y="96" font-size="7.5" fill="#e2e8f0" text-anchor="middle">Langsung tembak balik!</text>
            </g>

            <!-- Arrow 4 -> 5 -->
            <path d="M 595 80 L 620 80" stroke="#34d399" stroke-width="2.5"/>

            <!-- Node 5: Efektor Otot -->
            <g transform="translate(625, 25)">
              <rect width="115" height="110" rx="12" fill="#78350f" fill-opacity="0.4" stroke="#fbbf24" stroke-width="1.5"/>
              <text x="57" y="28" font-size="20" text-anchor="middle">💪</text>
              <text x="57" y="52" font-size="10" font-weight="bold" fill="#fde68a" text-anchor="middle">5. EFEKTOR (OTOT)</text>
              <text x="57" y="70" font-size="9" fill="#fef3c7" text-anchor="middle">Otot Bisep Menarik</text>
              <text x="57" y="86" font-size="8" font-weight="bold" fill="#4ade80" text-anchor="middle">TANGAN TERLEPAS!</text>
            </g>
          </svg>
        </div>
        <div class="mt-3 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 flex items-start gap-2">
          <span class="text-amber-400 font-bold">🧠 Catatan Kunci HOTS:</span>
          <span>Otak baru menerima kabar <em>"panas"</em> setelah tangan berhasil ditarik mundur. Itulah mengapa kita baru bisa berteriak "Aduh!" setelah gerakan refleks selesai terjadi!</span>
        </div>
      </div>

      </div>
    </div>

    <!-- Kasus 2 -->
    <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
      <div class="flex items-center justify-between">
        <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800">Kasus HOTS 2</span>
        <span class="text-xs text-slate-400 font-medium">Kelainan Tulang Belakang</span>
      </div>
      <h3 class="text-base font-bold text-slate-900">
        "Bahaya Tulang Bungkuk 'Text-Neck' pada Anak: Mengenal Lordosis, Kifosis, dan Skoliosis"
      </h3>
      <div class="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
        <p>
          Kebiasaan duduk belajar yang salah atau bermain ponsel berjam-jam sambil menunduk dan membungkuk dapat merusak susunan tulang belakang yang masih bertumbuh pada anak kelas 6 SD. Kenali 3 kelainan tulang belakang yang sering keluar ujian:
        </p>
        
      <!-- DIAGRAM VISUAL POSTUR TULANG (NORMAL VS KELAINAN) -->
      <div class="my-6 p-5 rounded-3xl bg-linear-to-br from-slate-900 via-slate-950 to-blue-950 text-white shadow-xl border border-blue-500/30">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-blue-800/50 pb-3 mb-4">
          <div class="flex items-center gap-2">
            <span class="p-2 rounded-xl bg-blue-500/20 text-blue-300 text-lg">📐</span>
            <div>
              <h4 class="font-extrabold text-base sm:text-lg text-white">Diagram Visual: Postur Tulang Belakang Manusia</h4>
              <p class="text-xs text-blue-200">Perbandingan Profil Normal vs 3 Kelainan Utama (Sering Keluar Ujian)</p>
            </div>
          </div>
          <span class="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
            Ergonomi Tubuh
          </span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          <!-- 1. Normal -->
          <div class="bg-white/5 p-4 rounded-2xl border border-emerald-500/30 flex flex-col items-center text-center">
            <span class="text-xs font-bold text-emerald-300 mb-1">NORMAL</span>
            <span class="text-[10px] text-emerald-400/80 mb-2">Kurva 'S' Fisiologis Seimbang</span>
            <div class="w-28 h-40 my-1">
              <svg viewBox="0 0 100 160" class="w-full h-full">
                <!-- Head -->
                <circle cx="50" cy="22" r="14" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
                <!-- Balanced S-curve Spine -->
                <path d="M 50 36 C 47 60, 56 90, 48 120 L 48 148" fill="none" stroke="#10b981" stroke-width="5" stroke-linecap="round"/>
                <!-- Neutral axis line -->
                <line x1="50" y1="10" x2="50" y2="155" stroke="#475569" stroke-width="1.5" stroke-dasharray="3 3"/>
                <!-- Badge -->
                <circle cx="50" cy="148" r="4" fill="#10b981"/>
              </svg>
            </div>
            <span class="text-[10px] font-extrabold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-full mt-2">
              ✅ Postur Ideal
            </span>
            <p class="text-[10px] text-slate-300 mt-1.5 leading-tight">Dada tegak, bahu rileks sejajar, beban terbagi merata.</p>
          </div>

          <!-- 2. Kifosis -->
          <div class="bg-white/5 p-4 rounded-2xl border border-rose-500/30 flex flex-col items-center text-center">
            <span class="text-xs font-bold text-rose-300 mb-1">KIFOSIS</span>
            <span class="text-[10px] text-rose-400/80 mb-2">Bungkuk ke Belakang</span>
            <div class="w-28 h-40 my-1">
              <svg viewBox="0 0 100 160" class="w-full h-full">
                <!-- Head forward -->
                <circle cx="40" cy="24" r="14" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
                <!-- Upper spine severely bowed backward -->
                <path d="M 42 38 C 75 70, 65 100, 48 125 L 48 148" fill="none" stroke="#f43f5e" stroke-width="5" stroke-linecap="round"/>
                <!-- Neutral axis -->
                <line x1="48" y1="10" x2="48" y2="155" stroke="#475569" stroke-width="1.5" stroke-dasharray="3 3"/>
                <!-- Curve warning arrow -->
                <path d="M 68 60 A 15 15 0 0 1 68 85" fill="none" stroke="#fbbf24" stroke-width="2"/>
                <polygon points="65,85 72,88 71,80" fill="#fbbf24"/>
              </svg>
            </div>
            <span class="text-[10px] font-extrabold text-rose-300 bg-rose-500/20 px-2 py-0.5 rounded-full mt-2">
              ⚠️ Punggung Bungkuk
            </span>
            <p class="text-[10px] text-slate-300 mt-1.5 leading-tight">Punggung atas melengkung berlebih akibat menunduk gawai / meja rendah.</p>
          </div>

          <!-- 3. Lordosis -->
          <div class="bg-white/5 p-4 rounded-2xl border border-amber-500/30 flex flex-col items-center text-center">
            <span class="text-xs font-bold text-amber-300 mb-1">LORDOSIS</span>
            <span class="text-[10px] text-amber-400/80 mb-2">Melengkung Maju di Pinggang</span>
            <div class="w-28 h-40 my-1">
              <svg viewBox="0 0 100 160" class="w-full h-full">
                <!-- Head backward -->
                <circle cx="56" cy="22" r="14" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
                <!-- Lumbar spine sharply pushed forward -->
                <path d="M 54 36 C 46 65, 30 105, 52 135 L 52 148" fill="none" stroke="#fbbf24" stroke-width="5" stroke-linecap="round"/>
                <!-- Neutral axis -->
                <line x1="52" y1="10" x2="52" y2="155" stroke="#475569" stroke-width="1.5" stroke-dasharray="3 3"/>
                <!-- Forward thrust arrow -->
                <path d="M 32 90 L 22 90" stroke="#f59e0b" stroke-width="2.5"/>
                <polygon points="18,90 26,85 26,95" fill="#f59e0b"/>
              </svg>
            </div>
            <span class="text-[10px] font-extrabold text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded-full mt-2">
              ⚠️ Pinggang Membusung
            </span>
            <p class="text-[10px] text-slate-300 mt-1.5 leading-tight">Pinggang terlalu tertarik maju sehingga perut tampak membusung.</p>
          </div>

          <!-- 4. Skoliosis -->
          <div class="bg-white/5 p-4 rounded-2xl border border-blue-500/30 flex flex-col items-center text-center">
            <span class="text-xs font-bold text-sky-300 mb-1">SKOLIOSIS</span>
            <span class="text-[10px] text-sky-400/80 mb-2">Membengkok Huruf 'S'</span>
            <div class="w-28 h-40 my-1">
              <svg viewBox="0 0 100 160" class="w-full h-full">
                <!-- Head from behind -->
                <circle cx="50" cy="22" r="14" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
                <!-- Spine viewed from back curving S laterally -->
                <path d="M 50 36 C 72 65, 28 105, 50 148" fill="none" stroke="#38bdf8" stroke-width="5" stroke-linecap="round"/>
                <!-- Vertical center axis -->
                <line x1="50" y1="10" x2="50" y2="155" stroke="#475569" stroke-width="1.5" stroke-dasharray="3 3"/>
                <!-- Tilted shoulder line -->
                <line x1="25" y1="45" x2="75" y2="35" stroke="#f87171" stroke-width="2"/>
              </svg>
            </div>
            <span class="text-[10px] font-extrabold text-sky-300 bg-sky-500/20 px-2 py-0.5 rounded-full mt-2">
              ⚠️ Miring Kiri / Kanan
            </span>
            <p class="text-[10px] text-slate-300 mt-1.5 leading-tight">Tulang meliuk ke samping akibat sering menyandang tas ransel 1 bahu saja.</p>
          </div>
        </div>
      </div>

<div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
          <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <span class="font-bold text-rose-700 text-xs">1. KIFOSIS (Bungkuk)</span>
            <p class="text-[11px] text-slate-600">Tulang belakang melengkung <strong>ke arah belakang</strong> secara berlebihan, sehingga punggung terlihat bungkuk seperti kakek-kakek.</p>
          </div>
          <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <span class="font-bold text-amber-700 text-xs">2. LORDOSIS (Busung)</span>
            <p class="text-[11px] text-slate-600">Tulang belakang melengkung <strong>ke arah depan</strong> di bagian pinggang secara berlebihan, sehingga perut tampak membusung maju.</p>
          </div>
          <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <span class="font-bold text-blue-700 text-xs">3. SKOLIOSIS (Huruf S)</span>
            <p class="text-[11px] text-slate-600">Tulang belakang melengkung <strong>ke arah samping</strong> kiri atau kanan membentuk huruf S, akibat sering duduk miring atau membawa ransel berat di 1 pundak saja.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <hr class="border-slate-200">

  <!-- ========================================================================= -->
  <!-- PILAR 4: JEMBATAN KELEDAI (MNEMONIC VISUAL & AKRONIM)                     -->
  <!-- ========================================================================= -->
  <section class="space-y-4">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider">
      <span>💡</span> Pilar 4: Jembatan Keledai (Mnemonic)
    </div>
    <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
      Trik Ingat Kilat: Kuasai Soal Ujian Sistem Gerak Tanpa Tertukar!
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Mnemonic 1: Sendi Gerak -->
      <div class="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 space-y-3">
        <div class="font-bold text-amber-900 text-sm flex items-center gap-2">
          <span>🎯</span> Mengingat 5 Macam Sendi Gerak
        </div>
        <div class="p-3 rounded-xl bg-white border border-amber-200 text-center font-extrabold text-amber-600 text-sm tracking-wide shadow-xs">
          "PENG-PU-PEL-GE"
        </div>
        <ul class="text-xs text-slate-700 space-y-1.5">
          <li><strong>PENG</strong> = <strong>P</strong>eluru (Segala Arah) & <strong>Eng</strong>sel (1 Arah: Siku/Lutut)</li>
          <li><strong>PU</strong> = <strong>Pu</strong>tar (Rotasi Menoleh: Tulang Leher)</li>
          <li><strong>PEL</strong> = <strong>Pel</strong>ana (2 Arah: Ibu Jari)</li>
          <li><strong>GE</strong> = <strong>Ge</strong>ser (Mendatar: Pergelangan Tangan/Kaki)</li>
        </ul>
      </div>

      <!-- Mnemonic 2: Kelainan Tulang Belakang -->
      <div class="p-5 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200 space-y-3">
        <div class="font-bold text-indigo-900 text-sm flex items-center gap-2">
          <span>🦴</span> Mengingat 3 Kelainan Tulang Belakang
        </div>
        <div class="p-3 rounded-xl bg-white border border-indigo-200 text-center font-extrabold text-indigo-600 text-sm tracking-wide shadow-xs">
          "KI-BUNGKUK, LOR-DEPAN, SKO-LETER S"
        </div>
        <ul class="text-xs text-slate-700 space-y-1.5">
          <li><strong>KI-BUNGKUK</strong> = <strong>Ki</strong>fosis: Melengkung ke Belakang (Bungkuk).</li>
          <li><strong>LOR-DEPAN</strong> = <strong>Lor</strong>dosis: Melengkung ke Depan (Pinggang Maju).</li>
          <li><strong>SKO-LETER S</strong> = <strong>Sko</strong>liosis: Melengkung ke Samping seperti huruf S.</li>
        </ul>
      </div>

      <!-- Mnemonic 3: Bisep vs Trisep -->
      <div class="p-5 rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-200 space-y-3">
        <div class="font-bold text-teal-900 text-sm flex items-center gap-2">
          <span>💪</span> Menekuk vs Meluruskan Lengan
        </div>
        <div class="p-3 rounded-xl bg-white border border-teal-200 text-center font-extrabold text-teal-700 text-xs sm:text-sm tracking-wide shadow-xs">
          "BI-TEK, TRI-LURUS"
        </div>
        <ul class="text-xs text-slate-700 space-y-1.5">
          <li><strong>BI-TEK</strong> = <strong>Bi</strong>sep kontraksi saat lengan d<strong>i-Tek</strong>uk.</li>
          <li><strong>TRI-LURUS</strong> = <strong>Tri</strong>sep kontraksi saat lengan di-<strong>Lurus</strong>kan.</li>
          <li><em>Ingat: Selalu bekerja bergantian (antagonis), tidak pernah berkontraksi barengan!</em></li>
        </ul>
      </div>

      <!-- Mnemonic 4: Gerak Sadar vs Refleks -->
      <div class="p-5 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 space-y-3">
        <div class="font-bold text-purple-900 text-sm flex items-center gap-2">
          <span>⚡</span> Membedakan Jalur Pusat Gerak
        </div>
        <div class="p-3 rounded-xl bg-white border border-purple-200 text-center font-extrabold text-purple-700 text-xs sm:text-sm tracking-wide shadow-xs">
          "SADAR LEWAT OTAK, REFLEKS LEWAT SUMSUM"
        </div>
        <div class="text-xs text-slate-700 leading-relaxed">
          Semua aksi terencana dipikirkan di <strong>Otak</strong>. Sedangkan gerak refleks darurat dialihkan ke <strong>Sumsum Tulang Belakang</strong> untuk penyelamatan cepat tanpa mikir!
        </div>
      </div>
    </div>
  </section>

</div>
`;

richModules['IPAS-B1'] = {
  title: ipasB1Title,
  html: ipasB1Html.trim()
};

fs.writeFileSync(richModulesPath, JSON.stringify(richModules, null, 2), 'utf8');
console.log('Successfully added IPAS-B1 to rich_modules.json!');
console.log('Total rich modules available:', Object.keys(richModules));

// Standalone HTML file
const standaloneHtml = '<!DOCTYPE html>\n' +
'<html lang="id">\n' +
'<head>\n' +
'  <meta charset="UTF-8">\n' +
'  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
'  <title>' + ipasB1Title + '</title>\n' +
'  <script src="https://www.gstatic.com/antigravity/web/dev/tailwindcss.min.js"></script>\n' +
'</head>\n' +
'<body class="bg-slate-100 p-4 sm:p-8">\n' +
'  <div class="max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-slate-200">\n' +
'    <div class="border-b border-slate-200 pb-4 mb-6">\n' +
'      <span class="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">Modul Pembelajaran Mandiri SD Kelas 6</span>\n' +
'      <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">' + ipasB1Title + '</h1>\n' +
'      <p class="text-sm text-slate-500 mt-1">Kurikulum Merdeka • Dilengkapi Apersepsi Kontekstual, Studi Kasus HOTS & Jembatan Keledai</p>\n' +
'    </div>\n' +
    ipasB1Html + '\n' +
'  </div>\n' +
'</body>\n' +
'</html>';

const standalonePath = path.join(cwd, 'modul_pembelajaran_ipas_bab_1.html');
fs.writeFileSync(standalonePath, standaloneHtml, 'utf8');
console.log('Saved standalone module file to:', standalonePath);

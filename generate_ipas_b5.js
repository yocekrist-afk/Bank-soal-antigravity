const fs = require('fs');
const path = require('path');

const cwd = 'C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard';
const richModulesPath = path.join(cwd, 'rich_modules.json');

const richModules = JSON.parse(fs.readFileSync(richModulesPath, 'utf8'));

const ipasB5Title = "Bab 5: Menjelajahi Bumi dan Antariksa (Sistem Tata Surya, Gerak Bumi & Gerhana)";

const ipasB5Html = `
<div class="space-y-8 text-slate-800">

  <!-- ========================================================================= -->
  <!-- PILAR 1: PENGANTAR KONTEKSTUAL (APERSEPSI SERU)                           -->
  <!-- ========================================================================= -->
  <section class="space-y-4">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
      <span>🎡</span> Pilar 1: Pengantar Kontekstual (Apersepsi)
    </div>
    <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
      "Korsel Raksasa di Luar Angkasa & Rahasia Mengapa Kita Tidak Pusing"
    </h2>

    <p class="text-slate-600 leading-relaxed text-sm sm:text-base">
      Pernahkah kalian naik <strong>komidi putar (korsel)</strong> atau <strong>bianglala</strong> di pasar malam? Saat korsel berputar kencang, angin menerpa wajahmu, pohon-pohon di sekitarmu tampak ikut berputar ke arah sebaliknya, dan jika kamu tidak berpegangan, tubuhmu bisa terlempar keluar!
    </p>

    <div class="p-5 rounded-2xl bg-amber-50/70 border-l-4 border-amber-500 text-slate-700 text-sm sm:text-base space-y-2">
      <div class="font-bold text-amber-900 flex items-center gap-2">
        <span>🤔</span> Coba Tebak Fakta Ini:
      </div>
      <p>
        Tahukah kalian? Saat ini, detik ini juga, kalian sedang duduk di atas sebuah "korsel raksasa" bernama <strong>Planet Bumi</strong>. Bumi berputar pada porosnya dengan kecepatan luar biasa: sekitar <strong>1.670 km/jam</strong> di garis khatulistiwa (jauh lebih cepat daripada pesawat jet tercepat di Indonesia)! Tak hanya itu, Bumi juga melesat mengelilingi Matahari dengan kecepatan <strong>107.000 km/jam</strong>.
      </p>
      <p class="font-medium text-amber-950">
        Lalu, mengapa kita tidak merasa pusing, tidak mual, dan rumah serta pohon-pohon tidak terlempar ke luar angkasa?
      </p>
    </div>

    <p class="text-slate-600 leading-relaxed text-sm sm:text-base">
      Jawabannya ada dua pahlawan tak terlihat: <strong>Gaya Gravitasi Bumi</strong> yang memeluk semua benda tetap menempel di tanah, serta kecepatan putaran Bumi yang <strong>sangat konstan (halus tanpa rem mendadak)</strong> bersama atmosfer udaranya, persis seperti ketika kamu duduk tenang di dalam kereta cepat yang melaju kencang dengan jendela tertutup. Mari kita mulai penjelajahan seru menembus langit untuk membedah keluarga besar Tata Surya kita!
    </p>
  </section>

  <hr class="border-slate-200">

  <!-- ========================================================================= -->
  <!-- PILAR 2: PENDALAMAN KONSEP INTI (DEEP DIVE)                               -->
  <!-- ========================================================================= -->
  <section class="space-y-6">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider">
      <span>🚀</span> Pilar 2: Pendalaman Konsep Inti (Deep Dive)
    </div>
    <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
      Membedah Anatomi Tata Surya, Gerak Planet, dan Peristiwa Gerhana
    </h2>

    <!-- Sub A: Susunan & Kategori Planet -->
    <div class="space-y-3">
      <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
        <span class="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">A</span>
        Susunan Tata Surya: Matahari & Dua Kelompok Planet
      </h3>
      <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
        <strong>Tata Surya</strong> adalah susunan benda-benda langit yang terdiri atas satu bintang induk raksasa bernama <strong>Matahari</strong> dan semua benda antariksa yang terikat oleh gravitasinya: 8 planet, planet kerdil (seperti Pluto & Ceres), satelit alami, komet, meteoroid, dan sabuk asteroid.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
          <div class="flex items-center justify-between">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800">Kelompok 1</span>
            <span class="text-xs font-semibold text-slate-400">Dekat Matahari</span>
          </div>
          <h4 class="font-bold text-slate-900 text-base">Planet Dalam (Terestrial / Berbatu)</h4>
          <p class="text-xs text-slate-600 leading-relaxed">
            Beranggotakan <strong>Merkurius, Venus, Bumi, dan Mars</strong>. Ciri khasnya: memiliki permukaan padat berbatu, ukurannya relatif kecil, massanya padat, tidak memiliki cincin, dan satelitnya sangat sedikit (Bumi punya 1, Mars punya 2, Merkurius & Venus 0).
          </p>
        </div>

        <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
          <div class="flex items-center justify-between">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">Kelompok 2</span>
            <span class="text-xs font-semibold text-slate-400">Jauh dari Matahari</span>
          </div>
          <h4 class="font-bold text-slate-900 text-base">Planet Luar (Jovian / Raksasa Gas & Es)</h4>
          <p class="text-xs text-slate-600 leading-relaxed">
            Beranggotakan <strong>Jupiter, Saturnus, Uranus, dan Neptunus</strong>. Ciri khasnya: berukuran raksasa, tersusun atas gas hidrogen & helium serta es metana, tidak memiliki daratan padat untuk dipijak, memiliki sistem cincin, dan dikelilingi puluhan satelit alami.
          </p>
        </div>
      </div>

      <div class="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-700 flex items-center gap-3">
        <span class="text-2xl shrink-0">🧱</span>
        <div>
          <strong>Dinding Pembatas Alami:</strong> Kelompok Planet Dalam dan Planet Luar dipisahkan secara tegas oleh <strong>Sabuk Asteroid (Asteroid Belt)</strong>, yaitu cincin jutaan bongkahan batu angkasa yang membentang di antara orbit <strong>Mars</strong> dan <strong>Jupiter</strong>.
        </div>
      </div>
    </div>

    <!-- Sub B: Tabel Perbandingan 8 Planet -->
    <div class="space-y-3 pt-2">
      <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
        <span class="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">B</span>
        Tabel Komparasi Profil Unik 8 Planet Tata Surya
      </h3>
      <p class="text-slate-600 text-sm leading-relaxed">
        Setiap planet memiliki "KTP" dan kepribadian yang berbeda. Pahami keunikan masing-masing agar tidak tertukar saat ujian:
      </p>

      <div class="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
        <table class="w-full text-xs sm:text-sm text-left border-collapse">
          <thead class="bg-indigo-900 text-white uppercase text-[11px] tracking-wider">
            <tr>
              <th class="p-3">No & Nama Planet</th>
              <th class="p-3">Kategori</th>
              <th class="p-3">Julukan & Ciri Khas</th>
              <th class="p-3">Fakta Unik yang Sering Keluar Ujian</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 bg-white">
            <tr class="hover:bg-slate-50 transition">
              <td class="p-3 font-bold text-slate-900">1. Merkurius</td>
              <td class="p-3"><span class="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[11px] font-bold">Dalam</span></td>
              <td class="p-3 font-semibold text-slate-700">Planet Terkecil & Terdekat</td>
              <td class="p-3 text-slate-600">Revolusi tercepat (88 hari). Suhu ekstrem: siang 430°C, malam -180°C karena tidak punya atmosfer penahan panas.</td>
            </tr>
            <tr class="hover:bg-slate-50 transition bg-slate-50/50">
              <td class="p-3 font-bold text-slate-900">2. Venus</td>
              <td class="p-3"><span class="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[11px] font-bold">Dalam</span></td>
              <td class="p-3 font-semibold text-rose-700">Bintang Fajar / Kejora</td>
              <td class="p-3 text-slate-600"><strong>Planet Terpanas (465°C)</strong> karena atmosfer 96% CO2 (efek rumah kaca ekstrem). Arah rotasi terbalik (searah jarum jam/timur ke barat).</td>
            </tr>
            <tr class="hover:bg-slate-50 transition">
              <td class="p-3 font-bold text-slate-900">3. Bumi</td>
              <td class="p-3"><span class="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[11px] font-bold">Dalam</span></td>
              <td class="p-3 font-semibold text-emerald-700">Planet Biru / Rumah Kita</td>
              <td class="p-3 text-slate-600">Satu-satunya yang memiliki air dalam wujud cair, atmosfer oksigen-nitrogen, serta lapisan ozon pelindung radiasi.</td>
            </tr>
            <tr class="hover:bg-slate-50 transition bg-slate-50/50">
              <td class="p-3 font-bold text-slate-900">4. Mars</td>
              <td class="p-3"><span class="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[11px] font-bold">Dalam</span></td>
              <td class="p-3 font-semibold text-red-600">Planet Merah</td>
              <td class="p-3 text-slate-600">Warna merah berasal dari karat besi oksida di tanahnya. Memiliki gunung tertinggi di tata surya (Olympus Mons) dan 2 satelit: Phobos & Deimos.</td>
            </tr>
            <tr class="hover:bg-slate-50 transition">
              <td class="p-3 font-bold text-slate-900">5. Jupiter</td>
              <td class="p-3"><span class="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[11px] font-bold">Luar</span></td>
              <td class="p-3 font-semibold text-indigo-700">Raksasa Gas Terbesar</td>
              <td class="p-3 text-slate-600"><strong>Planet Terbesar</strong> (bisa menampung 1.300 Bumi). Rotasi tercepat (hanya 10 jam). Memiliki badai abadi raksasa (Great Red Spot).</td>
            </tr>
            <tr class="hover:bg-slate-50 transition bg-slate-50/50">
              <td class="p-3 font-bold text-slate-900">6. Saturnus</td>
              <td class="p-3"><span class="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[11px] font-bold">Luar</span></td>
              <td class="p-3 font-semibold text-amber-700">Permata Cincin Indah</td>
              <td class="p-3 text-slate-600">Memiliki sistem cincin paling megah terbuat dari debu es dan batuan meteor. Kerapatan massanya sangat rendah (lebih ringan dari air).</td>
            </tr>
            <tr class="hover:bg-slate-50 transition">
              <td class="p-3 font-bold text-slate-900">7. Uranus</td>
              <td class="p-3"><span class="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[11px] font-bold">Luar</span></td>
              <td class="p-3 font-semibold text-cyan-700">Raksasa Es Menggelinding</td>
              <td class="p-3 text-slate-600">Poros rotasinya miring 98 derajat, sehingga tampak berputar menggelinding ke samping. Berwarna biru muda kehijauan dari gas metana.</td>
            </tr>
            <tr class="hover:bg-slate-50 transition bg-slate-50/50">
              <td class="p-3 font-bold text-slate-900">8. Neptunus</td>
              <td class="p-3"><span class="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[11px] font-bold">Luar</span></td>
              <td class="p-3 font-semibold text-blue-800">Planet Terjauh & Terdingin</td>
              <td class="p-3 text-slate-600">Planet terjauh dari matahari. Memiliki angin badai supersonik terkencang di tata surya (mencapai 2.000 km/jam). Revolusi terlama (165 tahun).</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Sub C: Rotasi vs Revolusi Bumi -->
    <div class="space-y-3 pt-2">
      <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
        <span class="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">C</span>
        Dua Gerakan Utama Bumi: Rotasi vs Revolusi
      </h3>
      <p class="text-slate-600 text-sm leading-relaxed">
        Seringkali siswa terkecoh membedakan akibat Rotasi dan Revolusi di lembar soal ujian. Berikut adalah panduan komparasi tegasnya:
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Rotasi -->
        <div class="p-5 rounded-2xl bg-indigo-50/60 border border-indigo-200 space-y-3">
          <div class="flex items-center gap-2">
            <span class="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-base">🔄</span>
            <div>
              <h4 class="font-bold text-indigo-950 text-base">ROTASI BUMI</h4>
              <p class="text-[11px] text-indigo-600 font-semibold">Berputar pada Poros Sendiri (24 Jam / 1 Hari)</p>
            </div>
          </div>
          <p class="text-xs text-slate-700 leading-relaxed">
            Bumi berputar dari <strong>Barat ke Timur</strong>. Akibat nyatanya:
          </p>
          <ul class="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
            <li><strong>Pergantian Siang dan Malam</strong> (bagian yang menghadap matahari siang, membelakangi malam).</li>
            <li><strong>Gerak Semu Harian Matahari</strong> (matahari seolah terbit di Timur dan tenggelam di Barat).</li>
            <li><strong>Perbedaan Zona Waktu</strong> (Indonesia dibagi menjadi 3 zona: WIB, WITA, WIT selisih 1 jam).</li>
            <li><strong>Pembelokan Arah Arus Laut & Angin</strong> (Efek Coriolis).</li>
            <li><strong>Pepatnya Bumi di Kutub</strong> dan menggembung di khatulistiwa.</li>
          </ul>
        </div>

        <!-- Revolusi -->
        <div class="p-5 rounded-2xl bg-teal-50/60 border border-teal-200 space-y-3">
          <div class="flex items-center gap-2">
            <span class="w-8 h-8 rounded-xl bg-teal-600 text-white flex items-center justify-center text-base">🪐</span>
            <div>
              <h4 class="font-bold text-teal-950 text-base">REVOLUSI BUMI</h4>
              <p class="text-[11px] text-teal-600 font-semibold">Mengelilingi Matahari (365¼ Hari / 1 Tahun)</p>
            </div>
          </div>
          <p class="text-xs text-slate-700 leading-relaxed">
            Bumi mengelilingi matahari pada orbit berbentuk elips. Akibat nyatanya:
          </p>
          <ul class="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
            <li><strong>Pergantian Musim</strong> (musim semi, panas, gugur, dingin di wilayah subtropis).</li>
            <li><strong>Perbedaan Lamanya Siang dan Malam</strong> di belahan bumi utara dan selatan.</li>
            <li><strong>Gerak Semu Tahunan Matahari</strong> (posisi matahari tampak bergeser antara 23,5° LU ke 23,5° LS).</li>
            <li><strong>Perubahan Penampakan Rasi Bintang</strong> yang berbeda tiap bulan.</li>
            <li><strong>Dasar Kalender Masehi (Syamsiah)</strong> yang menghitung 1 tahun = 365¼ hari (Tahun Kabisat).</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Sub D: Bulan dan Peristiwa Gerhana -->
    <div class="space-y-3 pt-2">
      <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
        <span class="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">D</span>
        Bulan & Rahasia Peristiwa Gerhana
      </h3>
      <p class="text-slate-600 text-sm leading-relaxed">
        Bulan adalah satelit alami Bumi. Uniknya, <strong>kala rotasi Bulan sama persis dengan kala revolusinya mengelilingi Bumi (29,5 hari)</strong>. Akibatnya, permukaan Bulan yang menghadap ke Bumi selalu sama sepanjang zaman!
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
          <div class="font-bold text-amber-800 text-sm flex items-center gap-2">
            <span>🌑</span> 1. Gerhana Matahari
          </div>
          <p class="text-xs text-slate-600 leading-relaxed">
            Terjadi pada <strong>siang hari saat fase Bulan Baru / Mati</strong>, ketika posisi sejajar membentuk susunan:
          </p>
          <div class="p-2 rounded-lg bg-amber-50 text-center font-mono font-bold text-amber-900 text-xs">
            MATAHARI —— BULAN —— BUMI
          </div>
          <p class="text-xs text-slate-600 leading-relaxed">
            Bulan berada di tengah menghalangi cahaya matahari ke bumi. Daerah bumi yang terkena bayangan inti (<strong>Umbra</strong>) mengalami Gerhana Matahari Total. Daerah yang terkena bayangan kabur (<strong>Penumbra</strong>) mengalami Gerhana Sebagian.
          </p>
        </div>

        <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
          <div class="font-bold text-indigo-800 text-sm flex items-center gap-2">
            <span>🌕</span> 2. Gerhana Bulan
          </div>
          <p class="text-xs text-slate-600 leading-relaxed">
            Terjadi pada <strong>malam hari saat fase Bulan Purnama</strong>, ketika posisi sejajar membentuk susunan:
          </p>
          <div class="p-2 rounded-lg bg-indigo-50 text-center font-mono font-bold text-indigo-900 text-xs">
            MATAHARI —— BUMI —— BULAN
          </div>
          <p class="text-xs text-slate-600 leading-relaxed">
            Bumi berada di tengah menghalangi sinar matahari ke bulan. Ketika bulan masuk seluruhnya ke bayangan Umbra bumi, bulan tampak berwarna merah tembaga (Blood Moon) karena pembiasan cahaya di atmosfer bumi.
          </p>
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
      <span>🔬</span> Pilar 3: Analisis & Studi Kasus HOTS
    </div>
    <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
      Dua Misteri Sains Antariksa & Pemecahan Logikanya
    </h2>

    <!-- Kasus 1 -->
    <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
      <div class="flex items-center justify-between">
        <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 text-rose-800">Kasus HOTS 1</span>
        <span class="text-xs text-slate-400 font-medium">Logika Efek Rumah Kaca</span>
      </div>
      <h3 class="text-base font-bold text-slate-900">
        "Mengapa Venus Lebih Panas dari Merkurius, padahal Merkurius Jauh Lebih Dekat ke Matahari?"
      </h3>
      <div class="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
        <p>
          <strong>Penalaran Logis:</strong> Logika awam mengatakan, makin dekat ke api unggun, tubuh kita makin panas. Jarak Merkurius ke Matahari hanya 58 juta km, sedangkan Venus 108 juta km. Namun faktanya, suhu Venus mencapai <strong>465°C</strong>, jauh lebih panas daripada suhu rata-rata Merkurius.
        </p>
        <p>
          <strong>Kuncinya ada pada Atmosfer:</strong> Merkurius berukuran kecil sehingga gravitasinya lemah dan tidak mampu menahan lapisan gas (praktis tanpa atmosfer). Di siang hari panas matahari langsung membakar permukaannya, tetapi saat malam hari panasnya langsung hilang menguap ke luar angkasa dingin (-180°C).
        </p>
        <p>
          Sebaliknya, Venus diselimuti <strong>atmosfer super tebal yang 96% terdiri dari Karbon Dioksida ($CO_2$)</strong> ditambah awan asam sulfat. Sinar matahari bisa masuk, tetapi panasnya terperangkap 100% dan tidak bisa keluar sama sekali. Venus bertindak seperti "oven termal tertutup" raksasa.
        </p>
        <div class="p-3 rounded-xl bg-amber-50 text-amber-900 text-xs font-medium border border-amber-200">
          🌱 <strong>Pelajaran Penting untuk Bumi:</strong> Fenomena Venus adalah peringatan nyata bagi manusia di Bumi. Jika kita terus membakar bahan bakar fosil dan menebang hutan, kadar $CO_2$ di Bumi akan meningkat dan memicu pemanasan global berbahaya!
        </div>
      </div>
    </div>

    <!-- Kasus 2 -->
    <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
      <div class="flex items-center justify-between">
        <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800">Kasus HOTS 2</span>
        <span class="text-xs text-slate-400 font-medium">Matematika Kalender</span>
      </div>
      <h3 class="text-base font-bold text-slate-900">
        "Ke Mana Perginya Angka ¼ Hari dan Mengapa Ada Tanggal 29 Februari?"
      </h3>
      <div class="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
        <p>
          Satu kali putaran penuh Bumi mengelilingi Matahari bukanlah tepat 365 hari, melainkan <strong>365 hari 5 jam 48 menit 45 detik</strong> (dibulatkan menjadi <strong>365¼ hari</strong>).
        </p>
        <p>
          Namun, tidak mungkin dalam kalender kita menuliskan hari dengan pecahan (misalnya jam kerja sampai jam 6 sore lalu tahun berganti). Karena itu, kalender Masehi menetapkan 1 tahun biasa berjumlah <strong>365 hari</strong>.
        </p>
        <p>
          Lalu sisa pecahan ¼ hari (6 jam) dikumpulkan setiap tahun:
        </p>
        <div class="p-2.5 rounded-xl bg-slate-100 font-mono text-center font-bold text-slate-800 text-xs">
          Tahun 1: +¼ hari &nbsp;|&nbsp; Tahun 2: +¼ hari &nbsp;|&nbsp; Tahun 3: +¼ hari &nbsp;|&nbsp; Tahun 4: +¼ hari = <strong>1 HARI PENUH (24 JAM)</strong>
        </div>
        <p>
          Tambahan 1 hari penuh ini disisipkan pada bulan Februari di tahun keempat menjadi <strong>29 Februari</strong>. Tahun dengan 366 hari ini disebut <strong>Tahun Kabisat</strong> (cirinya: angka tahunnya habis dibagi 4, seperti tahun 2020, 2024, 2028).
        </p>
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
      Trik Ingat Kilat: Jangan Pernah Lupa Konsep Ini Saat Ujian!
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Mnemonic 1: Urutan Planet -->
      <div class="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 space-y-3">
        <div class="font-bold text-amber-900 text-sm flex items-center gap-2">
          <span>🥇</span> Mengingat Urutan 8 Planet dari Matahari
        </div>
        <div class="p-3 rounded-xl bg-white border border-amber-200 text-center font-extrabold text-amber-600 text-sm tracking-wide shadow-xs">
          "MAMA VENUS BELI MANGGA, JUAL SATU UNTUK NENEK"
        </div>
        <ul class="text-xs text-slate-700 space-y-1">
          <li><strong>MA</strong>ma = <strong>Me</strong>rkurius</li>
          <li><strong>VENUS</strong> = <strong>Ve</strong>nus</li>
          <li><strong>BE</strong>li = <strong>Bu</strong>mi</li>
          <li><strong>MA</strong>ngga = <strong>Ma</strong>rs</li>
          <li><strong>JU</strong>al = <strong>Ju</strong>piter</li>
          <li><strong>SA</strong>tu = <strong>Sa</strong>turnus</li>
          <li><strong>U</strong>ntuk = <strong>U</strong>ranus</li>
          <li><strong>NE</strong>nek = <strong>Ne</strong>ptunus</li>
        </ul>
      </div>

      <!-- Mnemonic 2: Gerhana -->
      <div class="p-5 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200 space-y-3">
        <div class="font-bold text-indigo-900 text-sm flex items-center gap-2">
          <span>🌓</span> Mengingat Siapa di Tengah Saat Gerhana
        </div>
        <div class="p-3 rounded-xl bg-white border border-indigo-200 text-center font-extrabold text-indigo-600 text-sm tracking-wide shadow-xs">
          "Matahari Ditutup BULAN, Bulan Ditutup BUMI"
        </div>
        <div class="text-xs text-slate-700 space-y-2">
          <div class="p-2 rounded-lg bg-amber-100/60 font-medium">
            ☀️ Gerhana <strong>MATAHARI</strong>: Yang di tengah adalah <strong>BULAN</strong>.<br>
            (Urutan: Matahari - <strong>Bulan</strong> - Bumi).
          </div>
          <div class="p-2 rounded-lg bg-indigo-100/60 font-medium">
            🌕 Gerhana <strong>BULAN</strong>: Yang di tengah adalah <strong>BUMI</strong>.<br>
            (Urutan: Matahari - <strong>Bumi</strong> - Bulan).
          </div>
        </div>
      </div>

      <!-- Mnemonic 3: Rotasi vs Revolusi -->
      <div class="p-5 rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-200 space-y-3">
        <div class="font-bold text-teal-900 text-sm flex items-center gap-2">
          <span>🧭</span> Membedakan Akibat Rotasi vs Revolusi
        </div>
        <div class="p-3 rounded-xl bg-white border border-teal-200 text-center font-extrabold text-teal-700 text-xs sm:text-sm tracking-wide shadow-xs">
          "ROTI SIANG-MALAM, REVOLUSI GANTI MUSIM"
        </div>
        <ul class="text-xs text-slate-700 space-y-1">
          <li><strong>RO-TI (Rotasi)</strong> = Roda berputar tiap hari: Siang-Malam, Waktu (WIB/WITA/WIT), Matahari Terbit-Tenggelam.</li>
          <li><strong>RE-VO (Revolusi)</strong> = Perjalanan setahun: Musim berganti, Kalender Masehi, Rasi Bintang bergeser.</li>
        </ul>
      </div>

      <!-- Mnemonic 4: 3 Zona Waktu Indonesia -->
      <div class="p-5 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 space-y-3">
        <div class="font-bold text-purple-900 text-sm flex items-center gap-2">
          <span>⏰</span> 3 Zona Waktu Indonesia (Akibat Rotasi)
        </div>
        <div class="p-3 rounded-xl bg-white border border-purple-200 text-center font-extrabold text-purple-700 text-xs sm:text-sm tracking-wide shadow-xs">
          "BARAT (+7), TENGAH (+8), TIMUR (+9)"
        </div>
        <div class="text-xs text-slate-700 leading-relaxed">
          Matahari terbit dari Timur. Jadi waktu di Papua (WIT) <strong>lebih cepat 2 jam</strong> daripada Jakarta (WIB).<br>
          <em>Contoh: Jakarta jam 07.00 pagi = Bali jam 08.00 pagi = Jayapura jam 09.00 pagi!</em>
        </div>
      </div>
    </div>
  </section>

</div>
`;

richModules['IPAS-B5'] = {
  title: ipasB5Title,
  html: ipasB5Html.trim()
};

fs.writeFileSync(richModulesPath, JSON.stringify(richModules, null, 2), 'utf8');
console.log('Successfully added IPAS-B5 to rich_modules.json!');
console.log('Total rich modules available:', Object.keys(richModules));

// Also write a standalone HTML file in the project directory
const standaloneHtml = '<!DOCTYPE html>\n' +
'<html lang="id">\n' +
'<head>\n' +
'  <meta charset="UTF-8">\n' +
'  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
'  <title>' + ipasB5Title + '</title>\n' +
'  <script src="https://www.gstatic.com/antigravity/web/dev/tailwindcss.min.js"></script>\n' +
'</head>\n' +
'<body class="bg-slate-100 p-4 sm:p-8">\n' +
'  <div class="max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-slate-200">\n' +
'    <div class="border-b border-slate-200 pb-4 mb-6">\n' +
'      <span class="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">Modul Pembelajaran Mandiri SD Kelas 6</span>\n' +
'      <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">' + ipasB5Title + '</h1>\n' +
'      <p class="text-sm text-slate-500 mt-1">Kurikulum Merdeka • Dilengkapi Apersepsi Kontekstual, Studi Kasus HOTS & Jembatan Keledai</p>\n' +
'    </div>\n' +
    ipasB5Html + '\n' +
'  </div>\n' +
'</body>\n' +
'</html>';

const standalonePath = path.join(cwd, 'modul_pembelajaran_ipas_bab_5.html');
fs.writeFileSync(standalonePath, standaloneHtml, 'utf8');
console.log('Saved standalone module file to:', standalonePath);

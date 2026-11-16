const fs = require('fs');
const path = require('path');

const cwd = __dirname;
const richModulesPath = path.join(cwd, 'rich_modules.json');

const richModules = JSON.parse(fs.readFileSync(richModulesPath, 'utf8'));

const ipasB2Title = "Bab 2: Cerita tentang Indonesia Kita (Penjelajahan Samudra, Perjuangan Pahlawan & Proklamasi 1945)";

const ipasB2Html = `
<div class="space-y-8 text-slate-800">

  <!-- ========================================================================= -->
  <!-- PILAR 1: PENGANTAR KONTEKSTUAL (APERSEPSI SERU)                           -->
  <!-- ========================================================================= -->
  <section class="space-y-4">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider">
      <span>⛵</span> Pilar 1: Pengantar Kontekstual (Apersepsi)
    </div>
    <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
      "Mengapa Segenggam Cengkih & Pala di Maluku Pernah Bernilai Lebih Mahal daripada Emas Murni di Eropa?"
    </h2>
    <div class="p-5 rounded-3xl bg-linear-to-br from-amber-500/10 via-orange-500/5 to-transparent border border-amber-200/80 space-y-3 text-sm leading-relaxed text-slate-700">
      <p>
        Pernahkah kamu membayangkan aroma sedap semangkuk soto ayam atau rendang hangat? Di dalamnya terdapat rempah-rempah khas Nusantara: cengkih, pala, lada, dan kayu manis. Bagi kita di Indonesia, tanaman rempah itu tumbuh subur di kebun. Namun, bagi bangsa Eropa ratusan tahun lalu, <strong>rempah-rempah adalah harta penyelamat nyawa</strong>.
      </p>
      <p>
        Di Eropa, musim dingin berlangsung sangat dingin dan mencekam. Peternak harus menyembelih hewan ternak sebelum membeku, dan dagingnya harus diawetkan agar tidak busuk berbulan-bulan. Satu-satunya bahan pengawet alami sekaligus penghangat tubuh adalah <strong>rempah tropis</strong>. Ketika jalur perdagangan darat di Konstantinopel ditutup oleh Kesultanan Turki Utsmani pada tahun 1453, bangsa Eropa rela mempertaruhkan nyawa menembus ombak samudra ganas berbulan-bulan demi menemukan satu tempat: <strong>Kepulauan Nusantara (Indonesia)!</strong>
      </p>
      <div class="p-3.5 rounded-2xl bg-amber-100/70 border border-amber-300 text-amber-950 font-medium text-xs flex items-start gap-2.5">
        <span class="text-base">🧭</span>
        <div>
          <strong>Semboyan 3G Penjelajah Samudra:</strong> Bangsa Eropa mengarungi dunia dengan motivasi <strong>Gold</strong> (memburu kekayaan & monopoli rempah), <strong>Glory</strong> (merebut kejayaan & daerah jajahan), dan <strong>Gospel</strong> (menyebarkan agama nasrani).
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- PILAR 2: PENDALAMAN MATERI ESENSIAL & DIAGRAM VISUAL                      -->
  <!-- ========================================================================= -->
  <section class="space-y-6">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
      <span>📚</span> Pilar 2: Pendalaman Materi Esensial
    </div>
    <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900">
      Dari Belenggu Penjajahan Menuju Fajar Kemerdekaan 17 Agustus 1945
    </h2>

    <!-- DIAGRAM 1: GARIS WAKTU TIMELINE SEJARAH (SVG NATIVE) -->
    <div class="my-6 p-5 rounded-3xl bg-linear-to-br from-slate-900 via-slate-950 to-indigo-950 text-white shadow-xl border border-indigo-500/30">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-indigo-800/60 pb-3 mb-4">
        <div class="flex items-center gap-2">
          <span class="p-2 rounded-xl bg-indigo-500/20 text-indigo-300 text-lg">⏳</span>
          <div>
            <h4 class="font-extrabold text-base sm:text-lg text-white">Garis Waktu (Timeline) Sejarah Perjuangan Bangsa</h4>
            <p class="text-xs text-indigo-200">Perjalanan 350+ tahun dari pendaratan kapal dagang hingga kemerdekaan berdaulat</p>
          </div>
        </div>
        <span class="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
          ✓ 100% Offline SVG
        </span>
      </div>

      <div class="w-full overflow-x-auto pb-2">
        <svg viewBox="0 0 820 180" class="w-full min-w-[760px] h-auto font-sans">
          <!-- Background track -->
          <rect x="10" y="10" width="800" height="160" rx="16" fill="#0f172a" fill-opacity="0.85" stroke="#334155" stroke-width="1.5"/>

          <!-- Horizontal Timeline Spine Line -->
          <line x1="50" y1="90" x2="770" y2="90" stroke="#6366f1" stroke-width="4" stroke-dasharray="6 4"/>

          <!-- Milestone 1: 1596 (Cornelis de Houtman) -->
          <g transform="translate(60, 25)">
            <circle cx="20" cy="65" r="9" fill="#f59e0b" stroke="#ffffff" stroke-width="2.5"/>
            <rect x="-30" y="0" width="100" height="48" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2"/>
            <text x="20" y="18" font-size="11" font-weight="extrabold" fill="#fbbf24" text-anchor="middle">1596 M</text>
            <text x="20" y="32" font-size="8.5" fill="#f8fafc" text-anchor="middle">Belanda Mendarat</text>
            <text x="20" y="43" font-size="7.5" fill="#94a3b8" text-anchor="middle">di Banten</text>
          </g>

          <!-- Milestone 2: 1602 (VOC Berdiri) -->
          <g transform="translate(195, 95)">
            <circle cx="20" cy="-5" r="9" fill="#3b82f6" stroke="#ffffff" stroke-width="2.5"/>
            <rect x="-30" y="10" width="100" height="52" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.2"/>
            <text x="20" y="27" font-size="11" font-weight="extrabold" fill="#60a5fa" text-anchor="middle">1602 M</text>
            <text x="20" y="41" font-size="8.5" fill="#f8fafc" text-anchor="middle">Kongsi Dagang VOC</text>
            <text x="20" y="52" font-size="7.5" fill="#94a3b8" text-anchor="middle">Hak Monopoli Oktroi</text>
          </g>

          <!-- Milestone 3: 1908 (Budi Utomo) -->
          <g transform="translate(340, 25)">
            <circle cx="20" cy="65" r="9" fill="#10b981" stroke="#ffffff" stroke-width="2.5"/>
            <rect x="-35" y="0" width="110" height="48" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.2"/>
            <text x="20" y="18" font-size="11" font-weight="extrabold" fill="#34d399" text-anchor="middle">20 MEI 1908</text>
            <text x="20" y="32" font-size="8.5" fill="#f8fafc" text-anchor="middle">Lahir Budi Utomo</text>
            <text x="20" y="43" font-size="7.5" fill="#94a3b8" text-anchor="middle">Kebangkitan Nasional</text>
          </g>

          <!-- Milestone 4: 1928 (Sumpah Pemuda) -->
          <g transform="translate(490, 95)">
            <circle cx="20" cy="-5" r="9" fill="#a855f7" stroke="#ffffff" stroke-width="2.5"/>
            <rect x="-35" y="10" width="110" height="52" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.2"/>
            <text x="20" y="27" font-size="11" font-weight="extrabold" fill="#c084fc" text-anchor="middle">28 OKT 1928</text>
            <text x="20" y="41" font-size="8.5" fill="#f8fafc" text-anchor="middle">Sumpah Pemuda</text>
            <text x="20" y="52" font-size="7.5" fill="#94a3b8" text-anchor="middle">1 Nusa, Bangsa, Bahasa</text>
          </g>

          <!-- Milestone 5: 1945 (Proklamasi Kemerdekaan) -->
          <g transform="translate(640, 20)">
            <circle cx="25" cy="70" r="11" fill="#ef4444" stroke="#ffffff" stroke-width="3"/>
            <rect x="-30" y="0" width="125" height="56" rx="10" fill="#450a0a" stroke="#ef4444" stroke-width="2"/>
            <text x="32" y="19" font-size="11.5" font-weight="extrabold" fill="#f87171" text-anchor="middle">17 AGUSTUS 1945</text>
            <text x="32" y="34" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">🇮🇩 PROKLAMASI</text>
            <text x="32" y="46" font-size="7.5" fill="#fecaca" text-anchor="middle">Indonesia Merdeka!</text>
          </g>
        </svg>
      </div>
    </div>

    <!-- SUB-BAB A: KEDATANGAN BANGSA EROPA & PENJAJAHAN -->
    <div class="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
      <div class="flex items-center gap-3">
        <span class="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 font-extrabold flex items-center justify-center text-sm">A</span>
        <h3 class="text-lg font-bold text-slate-900">Kedatangan Bangsa Eropa & Kongsi Dagang VOC</h3>
      </div>
      <p class="text-slate-600 text-sm leading-relaxed">
        Empat bangsa Eropa tercatat berlayar menuju Indonesia: Portugis (1511 mendarat di Malaka, 1512 di Maluku), Spanyol (1521 di Tidore), Belanda (1596 di Banten), dan Inggris (1600 melalui EIC). Namun Belanda adalah yang paling lama menancapkan cengkeramannya di Nusantara:
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-2">
        <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
          <div class="flex items-center justify-between">
            <span class="font-bold text-indigo-700 text-sm">1. Kongsi Dagang VOC (1602)</span>
            <span class="text-[10px] bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-md font-bold">Monopoli</span>
          </div>
          <p class="text-xs text-slate-600 leading-relaxed">
            Didirikan untuk mencegah persaingan antarpedagang Belanda. Diberi <strong>Hak Istimewa (Hak Oktroi)</strong>: mencetak mata uang sendiri, memiliki tentara perang sendiri, membuat perjanjian damai, dan memonopoli perdagangan rempah.
          </p>
        </div>

        <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
          <div class="flex items-center justify-between">
            <span class="font-bold text-rose-700 text-sm">2. Kerja Rodi (Daendels)</span>
            <span class="text-[10px] bg-rose-100 text-rose-800 px-2 py-0.5 rounded-md font-bold">Kerja Paksa</span>
          </div>
          <p class="text-xs text-slate-600 leading-relaxed">
            Gubernur Jenderal H.W. Daendels memaksa rakyat pribumi membangun <strong>Jalan Raya Pos Anyer–Panarukan</strong> sepanjang 1.000 km demi kepentingan pertahanan militer tanpa diberi upah dan makanan layak, menelan ribuan korban jiwa.
          </p>
        </div>

        <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
          <div class="flex items-center justify-between">
            <span class="font-bold text-amber-700 text-sm">3. Tanam Paksa (Van den Bosch)</span>
            <span class="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-md font-bold">Cultuurstelsel</span>
          </div>
          <p class="text-xs text-slate-600 leading-relaxed">
            Rakyat diwajibkan menanami 1/5 tanahnya dengan komoditas ekspor Eropa (teh, kopi, nila, tembakau). Praktik ini memicu bencana kelaparan hebat di Cirebon dan Grobogan, hingga dikecam oleh penulis Belanda <strong>Multatuli (Douwes Dekker)</strong> lewat buku <em>Max Havelaar</em>.
          </p>
        </div>
      </div>
    </div>

    <!-- DIAGRAM 2: VISUAL PERBANDINGAN STRATEGI PERJUANGAN (SEBELUM VS SESUDAH 1908) -->
    <div class="my-6 p-5 rounded-3xl bg-linear-to-br from-slate-900 via-indigo-950 to-slate-900 text-white shadow-xl border border-indigo-500/30">
      <div class="flex items-center justify-between border-b border-indigo-800/60 pb-3 mb-4">
        <div class="flex items-center gap-2">
          <span class="p-2 rounded-xl bg-indigo-500/20 text-indigo-300 text-lg">⚖️</span>
          <div>
            <h4 class="font-extrabold text-base sm:text-lg text-white">Visual Komparasi: Perubahan Paradigma Perjuangan Bangsa</h4>
            <p class="text-xs text-indigo-300">Mengapa perjuangan sebelum 1908 selalu gagal, dan setelah 1908 berhasil memerdekakan Indonesia?</p>
          </div>
        </div>
        <span class="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
          Kunci Sukses Kemerdekaan
        </span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Kolom Kiri: Sebelum 1908 -->
        <div class="p-4 rounded-2xl bg-rose-950/40 border border-rose-500/30 space-y-3">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded-md bg-rose-500/20 text-rose-300 text-xs font-bold">SEBELUM 1908</span>
            <span class="text-xs font-bold text-white">Perjuangan Tradisional Kedaerahan</span>
          </div>
          <ul class="text-xs text-slate-300 space-y-2">
            <li class="flex items-start gap-2">
              <span class="text-rose-400 font-bold">❌</span>
              <span><strong>Bersifat Kedaerahan:</strong> Perang di Jawa tidak dibantu Sumatera; perang di Maluku berdiri sendiri.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-rose-400 font-bold">❌</span>
              <span><strong>Bergantung pada 1 Tokoh Karismatik:</strong> Bila pahlawan (Pangeran Diponegoro / Cut Nyak Dien) ditangkap/gugur, perlawanan langsung padam.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-rose-400 font-bold">❌</span>
              <span><strong>Persenjataan Tradisional & Kalah Taktik:</strong> Bambu runcing dan parang melawan senapan mesiu canggih Belanda.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-rose-400 font-bold">❌</span>
              <span><strong>Mudah Diadu Domba (Devide et Impera):</strong> Belanda dengan licik mengadu sesama pangeran atau kerajaan lokal.</span>
            </li>
          </ul>
        </div>

        <!-- Kolom Kanan: Setelah 1908 -->
        <div class="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 space-y-3">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-bold">SETELAH 1908</span>
            <span class="text-xs font-bold text-white">Pergerakan Nasional & Diplomasi Modern</span>
          </div>
          <ul class="text-xs text-slate-300 space-y-2">
            <li class="flex items-start gap-2">
              <span class="text-emerald-400 font-bold">✅</span>
              <span><strong>Bersifat Nasional (Satu Nusa & Bangsa):</strong> Seluruh pemuda dari Sabang sampai Merauke bersatu di bawah nama "Indonesia".</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-400 font-bold">✅</span>
              <span><strong>Dipimpin Kaum Terpelajar (Organisasi):</strong> Melalui Budi Utomo, Sarekat Islam, dan PNI. Bila 1 tokoh ditangkap, kader lain menggantikan.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-400 font-bold">✅</span>
              <span><strong>Senjata Diplomasi, Politik & Surat Kabar:</strong> Melobi dunia internasional, mogok kerja, dan menyebarkan gagasan merdeka lewat tulisan.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-400 font-bold">✅</span>
              <span><strong>Tahan Adu Domba:</strong> Diikat oleh janji sakral <strong>Sumpah Pemuda 28 Oktober 1928</strong>.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- SUB-BAB B: PERISTIWA SEKITAR PROKLAMASI 17 AGUSTUS 1945 -->
    <div class="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
      <div class="flex items-center gap-3">
        <span class="w-8 h-8 rounded-xl bg-rose-100 text-rose-800 font-extrabold flex items-center justify-center text-sm">B</span>
        <h3 class="text-lg font-bold text-slate-900">Detik-Detik Proklamasi Kemerdekaan 17 Agustus 1945</h3>
      </div>
      <p class="text-slate-600 text-sm leading-relaxed">
        Kemerdekaan Indonesia bukanlah hadiah dari penjajah Jepang, melainkan buah perjuangan darah dan air mata seluruh rakyat. Simak 3 mata rantai sejarah menjelang 17 Agustus 1945:
      </p>

      <!-- DIAGRAM 3: ALUR DETIK-DETIK PROKLAMASI (SVG & BOX) -->
      <div class="my-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <!-- Step 1: Rengasdengklok -->
          <div class="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1.5">
            <div class="flex items-center gap-2">
              <span class="text-sm font-extrabold text-rose-600">1. Peristiwa Rengasdengklok</span>
            </div>
            <span class="text-[10px] text-slate-400 font-semibold">16 Agustus 1945 (Dini Hari)</span>
            <p class="text-xs text-slate-600 leading-relaxed">
              Pemuda (Sukarni, Wikana, Chaerul Saleh) membawa Bung Karno & Bung Hatta ke Rengasdengklok, Karawang agar tidak terpengaruh janji manis kemerdekaan palsu dari pihak Jepang.
            </p>
          </div>

          <!-- Step 2: Perumusan Naskah -->
          <div class="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1.5">
            <div class="flex items-center gap-2">
              <span class="text-sm font-extrabold text-amber-600">2. Rumah Laksamana Maeda</span>
            </div>
            <span class="text-[10px] text-slate-400 font-semibold">16-17 Agustus 1945 (Malam Hari)</span>
            <p class="text-xs text-slate-600 leading-relaxed">
              Bung Karno menulis tangan naskah proklamasi dibantu Bung Hatta & Achmad Soebardjo. Naskah disetujui, lalu diketik rapi oleh <strong>Sayuti Melik</strong> dengan sedikit perubahan ejaan kata.
            </p>
          </div>

          <!-- Step 3: Pembacaan Teks -->
          <div class="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1.5">
            <div class="flex items-center gap-2">
              <span class="text-sm font-extrabold text-emerald-600">3. Pegangsaan Timur No. 56</span>
            </div>
            <span class="text-[10px] text-slate-400 font-semibold">17 Agustus 1945 (Pukul 10.00 WIB)</span>
            <p class="text-xs text-slate-600 leading-relaxed">
              Bung Karno didampingi Bung Hatta membacakan naskah Proklamasi. Sang Saka Merah Putih jahitan <strong>Ibu Fatmawati</strong> dikibarkan oleh Latief Hendraningrat & Suhud diiringi lagu Indonesia Raya.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- PILAR 3: STUDI KASUS KONTEKSTUAL & PENALARAN TINGGI (HOTS)                -->
  <!-- ========================================================================= -->
  <section class="space-y-4">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold uppercase tracking-wider">
      <span>💡</span> Pilar 3: Studi Kasus Kontekstual & HOTS
    </div>
    <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900">
      Uji Logika Kritis: Menemukan Rahasia Strategi di Balik Fakta Sejarah
    </h2>

    <!-- Kasus HOTS 1 -->
    <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
      <div class="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-wider">
        <span>🔥 Kasus HOTS 1</span> • Taktik Perang Gerilya
      </div>
      <h3 class="text-base font-bold text-slate-900">
        "Mengapa Perang Jawa yang Dipimpin Pangeran Diponegoro (1825–1830) Sampai Menguras Habis Kas Keuangan Penjajah Belanda hingga di Ambang Bangkrut?"
      </h3>
      <div class="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
        <p>
          <strong>Analisis Sejarah:</strong> Pasukan Belanda memiliki senapan mesiu, meriam, dan benteng pertahanan modern, sementara laskar Diponegoro hanya bersenjatakan keris, tombak, dan senapan rampasan. Mengapa Belanda sampai kewalahan dan kehilangan ribuan serdadu serta menghabiskan 20 juta gulden?
        </p>
        <p>
          Kuncinya terletak pada <strong>Taktik Perang Gerilya (Hit-and-Run)</strong>. Pangeran Diponegoro tidak pernah mau meladeni Belanda di medan pertempuran terbuka. Pasukan gerilya memanfaatkan gua-gua alam di Perbukitan Menoreh, menyerang pos suplai logistik Belanda di malam hari secara kilat, lalu menghilang ke tengah hutan lebat dengan bantuan rakyat jelata.
        </p>
        <div class="p-3 rounded-xl bg-amber-50 text-amber-900 text-xs font-medium border border-amber-200">
          💡 <strong>Kesimpulan Berpikir Kritis:</strong> Belanda akhirnya hanya bisa mengalahkan Diponegoro dengan siasat licik: mengajak berunding damai di Magelang pada bulan Ramadhan, namun secara tiba-tiba melanggar janji dan langsung menangkap beliau!
        </div>
      </div>
    </div>

    <!-- Kasus HOTS 2 -->
    <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
      <div class="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider">
        <span>⚡ Kasus HOTS 2</span> • Diplomasi Internasional
      </div>
      <h3 class="text-base font-bold text-slate-900">
        "Jika Golongan Muda Tidak Membawa Soekarno-Hatta ke Rengasdengklok, Mengapa Kemerdekaan Indonesia Terancam Dibatalkan oleh Sekutu?"
      </h3>
      <div class="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
        <p>
          Pihak Jepang sebenarnya sudah menjanjikan kemerdekaan Indonesia melalui badan buatan mereka, yaitu <strong>PPKI (Panitia Persiapan Kemerdekaan Indonesia)</strong>. Golongan tua mengusulkan menunggu rapat PPKI resmi agar tidak terjadi pertumpahan darah dengan tentara Jepang yang masih bersenjata lengkap.
        </p>
        <p>
          Namun para pemuda berpikir jauh lebih kritis dan visioner: Jepang telah menyerah tanpa syarat kepada tentara Sekutu (AS & Inggris) pada 14 Agustus 1945 setelah kota Hiroshima dan Nagasaki dijatuhi bom atom. Jika kemerdekaan diproklamasikan melalui wadah PPKI bikinan Jepang, maka tentara Sekutu dan Belanda yang akan datang berhak menganggap <em>"Indonesia adalah negara boneka buatan musuh perang fasis Jepang"</em> dan berhak membubarkannya secara hukum perang internasional!
        </p>
        <div class="p-3 rounded-xl bg-emerald-50 text-emerald-900 text-xs font-medium border border-emerald-200">
          💡 Berkat keberanian pemuda di Rengasdengklok, Proklamasi lahir murni sebagai deklarasi kehendak bebas rakyat Indonesia, bukan pemberian pihak mana pun di dunia.
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- PILAR 4: JEMBATAN KELEDAI (MNEMONIC) & RANGKUMAN CEPAT                     -->
  <!-- ========================================================================= -->
  <section class="space-y-4">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-xs font-bold uppercase tracking-wider">
      <span>🧠</span> Pilar 4: Jembatan Keledai (Mnemonic) & Rangkuman Kilat
    </div>
    <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900">
      Trik Ingat Kilat: Kuasai Soal Sejarah Tanpa Pusing Menghafal Tanggal!
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <!-- Mnemonic 1 -->
      <div class="p-4 rounded-2xl bg-linear-to-br from-amber-50 to-orange-50 border border-amber-200 space-y-2">
        <div class="flex items-center gap-2 font-bold text-amber-900 text-sm">
          <span>🥇</span> Jembatan Keledai 3G Penjajah Samudra
        </div>
        <p class="text-xs text-slate-700 leading-relaxed">
          Ingat kata <strong>"3G = Emas, Mahkota, Kitab"</strong>:
        </p>
        <div class="p-2.5 rounded-xl bg-white border border-amber-200 text-xs font-semibold text-amber-950 space-y-1">
          <p>• <strong>Gold:</strong> Mencari Emas & Monopoli Rempah-Rempah Mahal.</p>
          <p>• <strong>Glory:</strong> Memburu Mahkota Kejayaan & Luas Daerah Jajahan.</p>
          <p>• <strong>Gospel:</strong> Menyebarkan Kitab Suci & Ajaran Agama Nasrani.</p>
        </div>
      </div>

      <!-- Mnemonic 2 -->
      <div class="p-4 rounded-2xl bg-linear-to-br from-indigo-50 to-purple-50 border border-indigo-200 space-y-2">
        <div class="flex items-center gap-2 font-bold text-indigo-900 text-sm">
          <span>✍️</span> Trio Perumus & Pengetik Naskah Proklamasi
        </div>
        <p class="text-xs text-slate-700 leading-relaxed">
          Ingat rumus singkatan <strong>"SO-HAT-BAR-SA"</strong>:
        </p>
        <div class="p-2.5 rounded-xl bg-white border border-indigo-200 text-xs font-semibold text-indigo-950 space-y-1">
          <p>• <strong>SO-HAT:</strong> <u>So</u>ekarno & Moh. <u>Hat</u>ta (Perumus & Penandatangan).</p>
          <p>• <strong>BAR:</strong> Achmad Soe<u>bar</u>djo (Penyumbang ide kalimat).</p>
          <p>• <strong>SA:</strong> <u>Sa</u>yuti Melik (Pengetik mesin tik bersejarah).</p>
        </div>
      </div>
    </div>

    <!-- Kotak Rangkuman Ujian -->
    <div class="p-5 rounded-3xl bg-slate-900 text-white shadow-xl space-y-3">
      <div class="flex items-center gap-2 font-extrabold text-sm text-amber-400">
        <span>⭐</span> Rangkuman 5 Poin Emas untuk Ujian Sekolah:
      </div>
      <ul class="text-xs text-slate-300 space-y-2 pl-4 list-disc">
        <li><strong>Cornelis de Houtman</strong> adalah pelaut Belanda pertama yang mendarat di pelabuhan Banten pada tahun 1596.</li>
        <li><strong>Hak Oktroi VOC</strong> adalah hak istimewa seperti mencetak uang, punya angkatan perang, dan hak monopoli dagang.</li>
        <li><strong>Budi Utomo (20 Mei 1908)</strong> adalah tonggak awal pergerakan modern, sehingga tanggal lahirnya ditetapkan sebagai <strong>Hari Kebangkitan Nasional</strong>.</li>
        <li><strong>Sumpah Pemuda (28 Oktober 1928)</strong> mengikrarkan persatuan: Satu Nusa, Satu Bangsa, dan Menjunjung Bahasa Persatuan Bahasa Indonesia.</li>
        <li><strong>Naskah Proklamasi</strong> dirumuskan di kediaman perwira Jepang yang bersimpati pada Indonesia, yaitu <strong>Laksamana Tadashi Maeda</strong> di Jakarta.</li>
      </ul>
    </div>
  </section>

</div>
`;

// Save into richModules object
richModules['IPAS-B2'] = {
  title: ipasB2Title,
  html: ipasB2Html
};

fs.writeFileSync(richModulesPath, JSON.stringify(richModules, null, 2), 'utf8');
console.log('Successfully added IPAS-B2 to rich_modules.json!');
console.log('Total rich modules available:', Object.keys(richModules));

// Create standalone HTML file
const standaloneHtml = '<!DOCTYPE html>\n' +
'<html lang="id">\n' +
'<head>\n' +
'  <meta charset="UTF-8">\n' +
'  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
'  <title>' + ipasB2Title + '</title>\n' +
'  <script src="https://www.gstatic.com/antigravity/web/dev/tailwindcss.min.js"></script>\n' +
'</head>\n' +
'<body class="bg-slate-100 p-4 sm:p-8">\n' +
'  <div class="max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-slate-200">\n' +
'    <div class="border-b border-slate-200 pb-4 mb-6">\n' +
'      <span class="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full">Modul Pembelajaran Mandiri SD Kelas 6</span>\n' +
'      <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">' + ipasB2Title + '</h1>\n' +
'      <p class="text-sm text-slate-500 mt-1">Kurikulum Merdeka • Dilengkapi Timeline SVG, Pahlawan Nusantara, Analisis HOTS & Jembatan Keledai</p>\n' +
'    </div>\n' +
    ipasB2Html + '\n' +
'  </div>\n' +
'</body>\n' +
'</html>';

const standalonePath = path.join(cwd, 'modul_pembelajaran_ipas_bab_2.html');
fs.writeFileSync(standalonePath, standaloneHtml, 'utf8');
console.log('Saved standalone module file to:', standalonePath);

// Copy to d:\LPP Cijantung\Downloads if exists
const downloadPath = 'd:/LPP Cijantung/Downloads/modul_pembelajaran_ipas_bab_2.html';
if (fs.existsSync('d:/LPP Cijantung/Downloads')) {
  fs.copyFileSync(standalonePath, downloadPath);
  console.log('Copied to downloads:', downloadPath);
}

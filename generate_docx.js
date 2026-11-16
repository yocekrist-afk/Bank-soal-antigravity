const fs = require('fs');
const docx = require('docx');
const { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, WidthType, BorderStyle, AlignmentType, ShadingType } = docx;

// Baca data kurikulum dari data_sd6.js
const content = fs.readFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/data_sd6.js', 'utf8');
const window = {};
eval(content);

const modules = window.KURIKULUM_SD6 || [];
const questions = window.DEFAULT_QUESTIONS_SD6 || [];

console.log(`Loaded ${modules.length} modules and ${questions.length} questions`);

const docChildren = [];

// Judul Utama
docChildren.push(
  new Paragraph({
    text: "SILABUS & RANGKUMAN MATERI KURIKULUM MERDEKA SD KELAS 6",
    heading: HeadingLevel.TITLE,
    alignment: AlignmentType.CENTER,
    spacing: { after: 120 }
  }),
  new Paragraph({
    children: [
      new TextRun({ text: "Fase C — Semester 1 & Semester 2 (Lengkap 5 Mata Pelajaran)\n", bold: true, size: 24, color: "334155" }),
      new TextRun({ text: "Dokumen Master untuk Bahan Pembuatan Soal & Modul Pembelajaran di Gemini AI\n", italics: true, size: 20, color: "64748B" })
    ],
    alignment: AlignmentType.CENTER,
    spacing: { after: 300 }
  })
);

// Kelompokkan Modul per Mapel
const mapelList = ["Matematika", "IPAS", "Bahasa Indonesia", "Pendidikan Pancasila", "Bahasa Inggris"];

mapelList.forEach((mapel, mIdx) => {
  const mapelMods = modules.filter(m => m.subject === mapel);
  
  docChildren.push(
    new Paragraph({
      text: `${mIdx + 1}. MATA PELAJARAN: ${mapel.toUpperCase()}`,
      heading: HeadingLevel.HEADING_1,
      spacing: { before: 280, after: 160 }
    })
  );

  mapelMods.forEach((mod, bIdx) => {
    docChildren.push(
      new Paragraph({
        text: `${mod.bab} (Semester ${mod.semester})`,
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 180, after: 100 }
      }),
      new Paragraph({
        children: [
          new TextRun({ text: "Deskripsi Materi: ", bold: true, color: "1E293B" }),
          new TextRun({ text: mod.summary, color: "334155" })
        ],
        spacing: { after: 100 }
      }),
      new Paragraph({
        children: [
          new TextRun({ text: "Poin-Poin Konsep Kunci & Rumus Penting:", bold: true, color: "1E293B" })
        ],
        spacing: { after: 60 }
      })
    );

    (mod.keyPoints || []).forEach(kp => {
      docChildren.push(
        new Paragraph({
          children: [
            new TextRun({ text: "•  ", bold: true, color: "4338CA" }),
            new TextRun({ text: kp, color: "1E293B" })
          ],
          indent: { left: 360 },
          spacing: { after: 50 }
        })
      );
    });

    if (mod.example) {
      docChildren.push(
        new Paragraph({
          children: [
            new TextRun({ text: "Contoh Soal / Penerapan: ", bold: true, color: "047857" }),
            new TextRun({ text: mod.example, italics: true, color: "065F46" })
          ],
          indent: { left: 360 },
          spacing: { before: 80, after: 140 }
        })
      );
    }
  });
});

// Bagian 2: Bank Soal Terverifikasi
docChildren.push(
  new Paragraph({
    text: "LAMPIRAN: BANK CONTOH BUTIR SOAL TERVERIFIKASI (SD KELAS 6)",
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 400, after: 160 }
  }),
  new Paragraph({
    children: [
      new TextRun({ text: `Total Tersedia: ${questions.length} Butir Soal Lengkap dengan Kunci Jawaban & Pembahasan\n`, italics: true, size: 20, color: "64748B" })
    ],
    spacing: { after: 200 }
  })
);

const letters = ['A', 'B', 'C', 'D', 'E'];
questions.forEach((q, qIdx) => {
  docChildren.push(
    new Paragraph({
      children: [
        new TextRun({ text: `Soal No. ${qIdx + 1} `, bold: true, color: "1E293B", size: 22 }),
        new TextRun({ text: `[${q.subject} • ${q.topic} • Kesulitan: ${q.difficulty} • Bloom: ${q.bloom || 'C3'}]`, color: "64748B", size: 18 })
      ],
      spacing: { before: 140, after: 60 }
    }),
    new Paragraph({
      children: [
        new TextRun({ text: q.question, bold: false, color: "0F172A" })
      ],
      indent: { left: 240 },
      spacing: { after: 80 }
    })
  );

  if (q.type === 'PG' && q.options && q.options.length > 0) {
    q.options.forEach((opt, oIdx) => {
      const isCorrect = oIdx === q.correctIndex;
      docChildren.push(
        new Paragraph({
          children: [
            new TextRun({ text: `${letters[oIdx]}. `, bold: true, color: isCorrect ? "047857" : "475569" }),
            new TextRun({ text: opt, color: isCorrect ? "047857" : "334155", bold: isCorrect })
          ],
          indent: { left: 480 },
          spacing: { after: 40 }
        })
      );
    });
  }

  docChildren.push(
    new Paragraph({
      children: [
        new TextRun({ text: "Kunci Jawaban: ", bold: true, color: "047857" }),
        new TextRun({ text: q.type === 'PG' ? `${letters[q.correctIndex]}. ${q.options[q.correctIndex] || ''}` : 'Uraian/Esai', bold: true, color: "047857" }),
        new TextRun({ text: " | Pembahasan: ", bold: true, color: "1E293B" }),
        new TextRun({ text: q.explanation || '-', color: "334155" })
      ],
      indent: { left: 240 },
      spacing: { before: 60, after: 120 }
    })
  );
});

const doc = new Document({
  sections: [
    {
      properties: {
        page: {
          margin: { top: 1000, bottom: 1000, left: 1200, right: 1200 }
        }
      },
      children: docChildren
    }
  ]
});

const outputPath1 = 'C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/Materi_Lengkap_Kurikulum_Merdeka_SD6.docx';
const outputPath2 = 'C:/Users/YOCE/.gemini/antigravity/brain/3d852900-80ec-47d9-9125-5b4cbd25c891/Materi_Lengkap_Kurikulum_Merdeka_SD6.docx';

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync(outputPath1, buffer);
  fs.writeFileSync(outputPath2, buffer);
  console.log('DOCX generated successfully at both locations!');
});

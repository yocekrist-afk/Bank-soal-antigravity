const fs = require('fs');
const dataJsPath = 'C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/data_sd6.js';
const tplPath = 'C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/app_template.html';
const htmlSourcePath = 'C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/contoh_soal_tatasurya_50.html';
const artifactPath = 'C:/Users/YOCE/.gemini/antigravity/brain/3d852900-80ec-47d9-9125-5b4cbd25c891/bank_soal_dashboard.html';
const indexPath = 'C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/index.html';

const htmlContent = fs.readFileSync(htmlSourcePath, 'utf8');
const match = htmlContent.match(/const\s+pgData\s*=\s*(\[[\s\S]*?\]);/);
const rawArray = JSON.parse(match[1]);

const converted50 = rawArray.map((item, idx) => ({
  id: `SD6-IPA-TS-${String(idx + 1).padStart(2, '0')}`,
  subject: 'IPAS',
  semester: 2,
  moduleId: 'IPAS-B5',
  topic: 'Bab 5: Tata Surya & Antariksa',
  type: 'PG',
  difficulty: idx % 3 === 0 ? 'Mudah' : idx % 3 === 1 ? 'Sedang' : 'Sulit',
  bloom: idx % 2 === 0 ? 'C2' : 'C3',
  points: 10,
  timeMinutes: 2,
  question: item.q.replace(/\[cite:\s*\d+\]/g, '').trim(),
  options: item.opt,
  correctIndex: item.ans,
  explanation: item.exp.replace(/\[cite:\s*\d+\]/g, '').trim()
}));

let dataJs = fs.readFileSync(dataJsPath, 'utf8');
dataJs = dataJs.replace(
  /window\.DEFAULT_QUESTIONS_SD6\s*=\s*\[/,
  'window.DEFAULT_QUESTIONS_SD6 = ' + JSON.stringify(converted50, null, 2) + '.concat(['
).replace(/\s*\];\s*$/, ']);');

fs.writeFileSync(dataJsPath, dataJs, 'utf8');

const tpl = fs.readFileSync(tplPath, 'utf8');
const mergedArtifact = tpl.replace('/*__DATA_PLACEHOLDER__*/', dataJs);
fs.writeFileSync(artifactPath, mergedArtifact, 'utf8');

const standaloneStyle = `  <style>
    :root {
      --background: #0b0f19;
      --card: #111827;
      --foreground: #f8fafc;
      --muted-foreground: #94a3b8;
      --border: #1e293b;
      --primary: #4f46e5;
      --primary-foreground: #ffffff;
      --secondary: #1e293b;
      --secondary-foreground: #e2e8f0;
    }
    @media print {
      .no-print { display: none !important; }
      body { background: white !important; color: black !important; }
    }
  </style>`;

const mergedStandalone = mergedArtifact.replace(/<style>[\s\S]*?<\/style>/, standaloneStyle);
fs.writeFileSync(indexPath, mergedStandalone, 'utf8');

console.log('Successfully merged 50 questions!');

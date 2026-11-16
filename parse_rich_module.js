const fs = require('fs');

// Baca file modul hasil Gemini dari user
const htmlPath = 'd:/LPP Cijantung/Downloads/modul_pembelajaran_ips_kelas_6.html';
const rawHtml = fs.readFileSync(htmlPath, 'utf8');

// Ekstrak inner container (konten modul)
const startIdx = rawHtml.indexOf('<div class="container">');
const endIdx = rawHtml.lastIndexOf('</div>');
let richContent = rawHtml.substring(startIdx + '<div class="container">'.length, endIdx).trim();

// Bersihkan tag header internal agar rapi di modal
richContent = richContent.replace(/<div class="header">[\s\S]*?<\/div>/, '').trim();

// Simpan ke file data modul kaya khusus
const richModulesFile = 'C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/rich_modules.json';
const richData = {
  "IPAS-B4": {
    title: "Bab 4: Indonesia dan Masyarakat Dunia (Globalisasi, Kerja Sama & Budaya)",
    html: richContent
  }
};
fs.writeFileSync(richModulesFile, JSON.stringify(richData, null, 2), 'utf8');

console.log('Rich module successfully extracted! Length:', richContent.length);

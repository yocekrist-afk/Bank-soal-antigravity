const fs = require('fs');
let tpl = fs.readFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/app_template.html', 'utf8');

// 1. Ganti style default agar bernuansa cerah, modern, premium ala Accurate Online / Enterprise Dashboard
const modernStyle = `  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      --background: #f4f6fb;
      --card: #ffffff;
      --foreground: #1e293b;
      --muted-foreground: #64748b;
      --border: #e2e8f0;
      --primary: #4338ca;
      --primary-foreground: #ffffff;
      --secondary: #f1f5f9;
      --secondary-foreground: #334155;
    }
    body {
      font-family: var(--font-sans);
      background-color: var(--background);
      color: var(--foreground);
    }
    .custom-scroll::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    .custom-scroll::-webkit-scrollbar-thumb {
      background: #cbd5e1;
      border-radius: 9999px;
    }
    @media print {
      .no-print { display: none !important; }
      body { background: white !important; color: black !important; }
    }
  </style>`;

tpl = tpl.replace(/<style>[\s\S]*?<\/style>/, modernStyle);
fs.writeFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/app_template.html', tpl, 'utf8');
console.log('Style updated successfully!');

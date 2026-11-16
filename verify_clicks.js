const fs = require('fs');
const content = fs.readFileSync('C:/Users/YOCE/.gemini/antigravity/scratch/bank-soal-dashboard/index.html', 'utf8');

const sStart = content.indexOf('<script>', 2500) + 8;
const sEnd = content.lastIndexOf('</script>');
const js = content.substring(sStart, sEnd);

const onClicks = [...content.matchAll(/on(?:click|change)="([a-zA-Z0-9_]+)\(/g)].map(m => m[1]);
const uniqueCalls = [...new Set(onClicks)];

let missing = 0;
console.log('Verifying all onclick & onchange handlers:');
uniqueCalls.forEach(fn => {
  const inJs = js.includes('function ' + fn) || js.includes(fn + ' =') || fn === 'print' || fn === 'alert';
  if (!inJs) {
    console.log('❌ MISSING:', fn);
    missing++;
  } else {
    console.log('✓', fn);
  }
});
console.log('Total checked:', uniqueCalls.length, '| Missing:', missing);

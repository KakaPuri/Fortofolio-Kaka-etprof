const fs = require('fs');
const path = 'src/components/sections/AboutSection.tsx';
const text = fs.readFileSync(path, 'utf8');
console.log('LENGTH', text.length);
console.log('START', JSON.stringify(text.slice(0,260)));
const bad = [];
for (let i = 0; i < Math.min(text.length, 260); i++) {
  const c = text.charCodeAt(i);
  if (c < 32 && c !== 9 && c !== 10 && c !== 13) bad.push([i, c, c.toString(16), String.fromCharCode(c)]);
}
console.log('BAD', bad);
console.log('LINES 18-30');
const lines = text.split(/\r?\n/);
for (let i = 17; i < 31 && i < lines.length; i++) {
  console.log(`${i+1}: ${JSON.stringify(lines[i])}`);
}

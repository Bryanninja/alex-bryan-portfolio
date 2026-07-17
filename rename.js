const fs = require('fs');
const path = require('path');

const baseDir = 'app/assets/img/projects';

const renameAndPrune = (folder, prefix, maxKeep) => {
  const dirPath = path.join(baseDir, folder);
  if (!fs.existsSync(dirPath)) return [];
  
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.webp') || f.endsWith('.png') || f.endsWith('.jpg'));
  
  // Sort files to have a predictable order (e.g. mockup first, then IMG, then Screenshot)
  files.sort((a, b) => {
    if (a.toLowerCase().includes('mockup')) return -1;
    if (b.toLowerCase().includes('mockup')) return 1;
    return a.localeCompare(b);
  });

  const keptFiles = [];
  
  for (let i = 0; i < files.length; i++) {
    const oldPath = path.join(dirPath, files[i]);
    if (i < maxKeep) {
      // Keep and rename
      const ext = path.extname(files[i]);
      const newName = i === 0 ? `${prefix}-cover${ext}` : `${prefix}-0${i}${ext}`;
      const newPath = path.join(dirPath, newName);
      if (oldPath !== newPath) {
        fs.renameSync(oldPath, newPath);
      }
      keptFiles.push(newName);
    } else {
      // Delete redundant
      fs.unlinkSync(oldPath);
    }
  }
  
  return keptFiles;
};

// Execute
const finFiles = renameAndPrune('financeiramente', 'fin', 6);
const hknFiles = renameAndPrune('hkn', 'hkn', 5);
const betelFiles = renameAndPrune('igreja-betel', 'betel', 6);
const taskFiles = renameAndPrune('taks-mananger', 'task', 5);

console.log("FinanceiraMente:", finFiles);
console.log("HKN:", hknFiles);
console.log("Betel:", betelFiles);
console.log("Task:", taskFiles);

const fs = require('fs');
let content = fs.readFileSync('app/data/projects.ts', 'utf8');

// Add imports at the top
const importsToAdd = `
import logoBetel from "../assets/img/projects/igreja-betel.png";
import logoTaskManager from "../assets/img/projects/tasks-mananger-logo.png";
`;

content = content.replace('export const projectsData = [', importsToAdd + '\nexport const projectsData = [');

// Fix Betel clientImg
// Let's use regex to be precise
content = content.replace(
  /projectName: "Betel App",\r?\n\s+description:[\s\S]*?clientImg: avatarMichel,/m,
  (match) => match.replace('clientImg: avatarMichel,', 'clientImg: logoBetel,')
);

// Fix Task Manager clientImg
content = content.replace(
  /projectName: "Task Manager Pro",\r?\n\s+description:[\s\S]*?clientImg: avatarMichel,/m,
  (match) => match.replace('clientImg: avatarMichel,', 'clientImg: logoTaskManager,')
);

fs.writeFileSync('app/data/projects.ts', content);

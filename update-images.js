const fs = require('fs');
let file = 'app/data/projects.ts';
let content = fs.readFileSync(file, 'utf8');

const newImports = `
// FinanceiraMente Imports
import projFinCover from "../assets/img/projects/financeiramente/fin-cover.webp";
import projFin01 from "../assets/img/projects/financeiramente/fin-01.webp";
import projFin02 from "../assets/img/projects/financeiramente/fin-02.webp";
import projFin03 from "../assets/img/projects/financeiramente/fin-03.webp";
import projFin04 from "../assets/img/projects/financeiramente/fin-04.webp";
import projFin05 from "../assets/img/projects/financeiramente/fin-05.webp";

// HKN Imports
import projHknCover from "../assets/img/projects/hkn/hkn-cover.webp";
import projHkn01 from "../assets/img/projects/hkn/hkn-01.webp";
import projHkn02 from "../assets/img/projects/hkn/hkn-02.webp";
import projHkn03 from "../assets/img/projects/hkn/hkn-03.webp";
import projHkn04 from "../assets/img/projects/hkn/hkn-04.webp";

// Betel Imports
import projBetelCover from "../assets/img/projects/igreja-betel/betel-cover.webp";
import projBetel01 from "../assets/img/projects/igreja-betel/betel-01.webp";
import projBetel02 from "../assets/img/projects/igreja-betel/betel-02.webp";
import projBetel03 from "../assets/img/projects/igreja-betel/betel-03.webp";
import projBetel04 from "../assets/img/projects/igreja-betel/betel-04.webp";
import projBetel05 from "../assets/img/projects/igreja-betel/betel-05.webp";

// Task Manager Imports
import projTaskCover from "../assets/img/projects/task-manager/task-cover.webp";
import projTask01 from "../assets/img/projects/task-manager/task-01.webp";
import projTask02 from "../assets/img/projects/task-manager/task-02.webp";
import projTask03 from "../assets/img/projects/task-manager/task-03.webp";
import projTask04 from "../assets/img/projects/task-manager/task-04.webp";
`;

content = content.replace('export const projectsData = [', newImports + '\nexport const projectsData = [');

// Betel Replacement
content = content.replace(
  /projectImg: projSenaFilmsIcon, \/\/ PLACEHOLDER: TROCAR DEPOIS\s+clientImg: avatarMichel, \/\/ PLACEHOLDER: TROCAR DEPOIS/g,
  (match, offset, string) => {
    // Determine which project we're in by looking a bit backwards
    const context = string.substring(offset - 200, offset);
    if (context.includes('Betel App')) {
      return `projectImg: projBetelCover,
    clientImg: avatarMichel,`;
    } else if (context.includes('FinanceiraMente')) {
      return `projectImg: projFinCover,
    clientImg: avatarMichel,`;
    } else if (context.includes('HKN Engenharia')) {
      return `projectImg: projHknCover,
    clientImg: avatarMichel,`;
    } else if (context.includes('Task Manager Pro')) {
      return `projectImg: projTaskCover,
    clientImg: avatarMichel,`;
    }
    return match;
  }
);

content = content.replace(
  /gallery: \[\s+projSenaFilmsIcon, \/\/ PLACEHOLDERS\s+projSenaFilmsIcon,\s+\],/g,
  (match, offset, string) => {
    const context = string.substring(offset - 600, offset);
    if (context.includes('Betel App')) {
      return `gallery: [projBetel01, projBetel02, projBetel03, projBetel04, projBetel05],`;
    } else if (context.includes('FinanceiraMente')) {
      return `gallery: [projFin01, projFin02, projFin03, projFin04, projFin05],`;
    } else if (context.includes('HKN Engenharia')) {
      return `gallery: [projHkn01, projHkn02, projHkn03, projHkn04],`;
    } else if (context.includes('Task Manager Pro')) {
      return `gallery: [projTask01, projTask02, projTask03, projTask04],`;
    }
    return match;
  }
);

fs.writeFileSync(file, content);

const fs = require('fs');
let content = fs.readFileSync('app/data/projects.ts', 'utf8');

// Betel
content = content.replace(
  'projectImg: projSenaFilmsIcon, // PLACEHOLDER: TROCAR DEPOIS\r\n    clientImg: avatarMichel, // PLACEHOLDER: TROCAR DEPOIS',
  'projectImg: projBetelCover,\r\n    clientImg: avatarMichel,'
);
content = content.replace(
  'gallery: [\r\n      projSenaFilmsIcon, // PLACEHOLDERS\r\n      projSenaFilmsIcon,\r\n    ],',
  'gallery: [projBetel01, projBetel02, projBetel03, projBetel04, projBetel05],'
);

// FinanceiraMente
content = content.replace(
  'projectImg: projBetelCover,\r\n    clientImg: avatarMichel, // PLACEHOLDER: TROCAR DEPOIS',
  'projectImg: projFinCover,\r\n    clientImg: avatarMichel,'
);
content = content.replace(
  'gallery: [\r\n      projSenaFilmsIcon, // PLACEHOLDERS\r\n      projSenaFilmsIcon,\r\n    ],',
  'gallery: [projFin01, projFin02, projFin03, projFin04, projFin05],'
);

// HKN
content = content.replace(
  'gallery: [\r\n      projSenaFilmsIcon, // PLACEHOLDERS\r\n      projSenaFilmsIcon,\r\n    ],',
  'gallery: [projHkn01, projHkn02, projHkn03, projHkn04],'
);

// Task Manager
content = content.replace(
  'projectImg: projTaskCover,\r\n    clientImg: avatarMichel,',
  'projectImg: projTaskCover,\r\n    clientImg: avatarMichel,' // this one is already correct
);
content = content.replace(
  'gallery: [\r\n      projSenaFilmsIcon, // PLACEHOLDERS\r\n      projSenaFilmsIcon,\r\n    ],',
  'gallery: [projTask01, projTask02, projTask03, projTask04],'
);

// Second try for Unix line endings
content = content.replace(
  'projectImg: projSenaFilmsIcon, // PLACEHOLDER: TROCAR DEPOIS\n    clientImg: avatarMichel, // PLACEHOLDER: TROCAR DEPOIS',
  'projectImg: projBetelCover,\n    clientImg: avatarMichel,'
);
content = content.replace(
  'gallery: [\n      projSenaFilmsIcon, // PLACEHOLDERS\n      projSenaFilmsIcon,\n    ],',
  'gallery: [projBetel01, projBetel02, projBetel03, projBetel04, projBetel05],'
);
content = content.replace(
  'projectImg: projBetelCover,\n    clientImg: avatarMichel, // PLACEHOLDER: TROCAR DEPOIS',
  'projectImg: projFinCover,\n    clientImg: avatarMichel,'
);
content = content.replace(
  'gallery: [\n      projSenaFilmsIcon, // PLACEHOLDERS\n      projSenaFilmsIcon,\n    ],',
  'gallery: [projFin01, projFin02, projFin03, projFin04, projFin05],'
);
content = content.replace(
  'gallery: [\n      projSenaFilmsIcon, // PLACEHOLDERS\n      projSenaFilmsIcon,\n    ],',
  'gallery: [projHkn01, projHkn02, projHkn03, projHkn04],'
);
content = content.replace(
  'gallery: [\n      projSenaFilmsIcon, // PLACEHOLDERS\n      projSenaFilmsIcon,\n    ],',
  'gallery: [projTask01, projTask02, projTask03, projTask04],'
);

fs.writeFileSync('app/data/projects.ts', content);

const fs = require('fs');
const path = require('path');

const assetDir = path.join(__dirname, '../public/Asset');
const outputFilePath = path.join(__dirname, '../data/projects.ts');

const folders = fs.readdirSync(assetDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory() && dirent.name !== 'Logo' && dirent.name !== 'home' && /^\d+\./.test(dirent.name))
  .map(dirent => dirent.name);

// Sort folders by number
folders.sort((a, b) => {
  const numA = parseInt(a.split('.')[0], 10);
  const numB = parseInt(b.split('.')[0], 10);
  return numA - numB;
});

const projects = folders.map(folder => {
  const folderPath = path.join(assetDir, folder);
  const files = fs.readdirSync(folderPath).filter(file => /\.(png|jpe?g|webp)$/i.test(file));
  
  // Format the title by removing the leading number and dot
  let title = folder.replace(/^\d+\.\s*/, '');
  
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  
  return {
    id,
    title,
    category: title.includes('1 LT') || title.includes('1 LANTAI') ? '1 Lantai' : title.includes('2 LT') || title.includes('2 LANTAI') ? '2 Lantai' : 'Lainnya',
    description: `Desain arsitektur untuk ${title.toLowerCase()}`,
    image: files.length > 0 ? `/Asset/${folder}/${files[0]}` : '',
    images: files.map(file => `/Asset/${folder}/${file}`),
    folderName: folder
  };
});

const tsContent = `export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  images: string[];
  folderName: string;
};

export const projects: Project[] = ${JSON.stringify(projects, null, 2)};
`;

fs.writeFileSync(outputFilePath, tsContent, 'utf-8');
console.log('projects.ts generated successfully.');

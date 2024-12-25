import { readdir, rename } from 'fs/promises';
import { join } from 'path';

async function convertExtensions(dir = 'src') {
  try {
    const files = await readdir(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = join(dir, file.name);
      
      if (file.isDirectory()) {
        await convertExtensions(fullPath);
      } else if (file.name.endsWith('.tsx')) {
        const newPath = fullPath.replace('.tsx', '.jsx');
        await rename(fullPath, newPath);
        console.log(`Converted: ${file.name} -> ${file.name.replace('.tsx', '.jsx')}`);
      }
    }
  } catch (error) {
    console.error('Error converting files:', error);
  }
}

convertExtensions();
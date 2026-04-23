import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

// Get all HTML files in the root directory
const root = resolve(__dirname);
const htmlFiles = fs.readdirSync(root)
  .filter(file => file.endsWith('.html'))
  .reduce((acc, file) => {
    const name = file.replace('.html', '');
    acc[name] = resolve(root, file);
    return acc;
  }, {});

export default defineConfig({
  build: {
    rollupOptions: {
      input: htmlFiles,
    },
  },
});

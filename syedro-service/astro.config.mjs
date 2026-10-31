import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://roservicesupport.co.in',
  output: 'hybrid', // 👈 Isse pages static banenge (fast load honge)
  adapter: vercel(),
  compressHTML: true, // 👈 HTML ko compress karega (fast)
  build: { 
    inlineStylesheets: 'auto' // 👈 CSS ko inline karega (render blocking hatayega)
  },
  devToolbar: { 
    enabled: false // 👈 Live me toolbar nahi dikhega
  }
});

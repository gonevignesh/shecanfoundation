import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    host: true,
    allowedHosts: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        internships: resolve(__dirname, 'internships.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        donate: resolve(__dirname, 'donate.html'),
        contact: resolve(__dirname, 'contact.html'),
      }
    }
  }
});

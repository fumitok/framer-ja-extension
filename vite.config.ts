import { defineConfig } from 'vite'
import { crx, defineManifest } from '@crxjs/vite-plugin'

// Extension manifest configuration
const manifest = defineManifest({
  manifest_version: 3,
  name: 'Framer Japanese Localization 1.0.0',
  short_name: 'Framer JP',
  description: 'Translates Framer\'s UI into Japanese. Design panels, navigation, settings, and more are translated in real time.',
  version: '1.0.0',
  icons: {
    "16":  "icons/icon16.png",
    "48":  "icons/icon48.png",
    "128": "icons/icon128.png",
  },
  content_scripts: [
    {
      matches: ['https://framer.com/projects/*'],
      js: ['src/content/index.ts'],
    },
  ],
  web_accessible_resources: [{
    matches: ['https://framer.com/*'],
    resources: ['**/*', '*'],
    use_dynamic_url: false,
  }],
})

export default defineConfig({
  plugins: [crx({ manifest })],
  server: {
    port: 5173,
    strictPort: true,
    hmr: {
      port: 5173,
    },
    cors: true,
  },
})
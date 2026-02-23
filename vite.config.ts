import { defineConfig } from 'vite'
import { crx, defineManifest } from '@crxjs/vite-plugin'

// 拡張機能の設定（マニフェスト）
const manifest = defineManifest({
  manifest_version: 3,
  name: 'Framer 日本語UI',
  short_name: 'Framer JP',
  description: 'Framer のUIを日本語化するChrome拡張機能。デザインパネル・ナビゲーション・設定など700以上の用語を日本語に翻訳します。',
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
    cors: true, // これを追加して、CORS制限を無効化します
  },
})
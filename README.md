# Framer Japanese Localization

A Chrome extension that translates Framer's UI into Japanese. Workspace, Design Canvas, CMS, Project Settings, and more are translated in real time.

## Features

- Translates design panel labels (width, height, padding, fonts, effects, etc.)
- Translates navigation and menus
- Translates CMS, analytics, and settings screens
- Translates workspace and team management screens
- Translates animation presets and interaction settings
- Translates blend modes, filters, and 3D transform options
- Handles dynamically rendered content via MutationObserver
- Missing terms are surfaced via `window.missingList` in the browser console

## Installation (Developer Mode)

1. Clone this repository
   ```bash
   git clone https://github.com/fumitok/framer-ja-extension.git
   cd framer-ja-extension
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Build
   ```bash
   npm run build
   ```

4. Open `chrome://extensions` in Chrome

5. Enable **Developer mode** (toggle in the top right)

6. Click **Load unpacked** and select the `dist/` folder

7. Open `https://framer.com/projects/` — the UI will now appear in Japanese

## Contributing Translations

### Finding untranslated terms

1. Open Framer with the extension installed
2. Open Chrome DevTools console (Cmd + Option + J)
3. Type `window.missingList` and press Enter
4. An array of untranslated English terms will be displayed

### Adding translations

Add entries to the `translations` object in `src/content/index.ts`:

```typescript
const translations: Record<string, string> = {
  // existing translations ...
  "Your Term": "あなたの翻訳",
};
```

After adding, run `npm run build` and reload the extension in `chrome://extensions`.

## Branch Structure

| Branch | Purpose |
|--------|---------|
| `main` | Stable releases |
| `develop` | Active development and translation updates |

## Build

```bash
npm run build   # Production build → dist/
npm run dev     # Start dev server
```

## Packaging for Chrome Web Store

```bash
npm run build
cd dist && zip -r ../framer-ja-extension.zip . && cd ..
```

## License

MIT

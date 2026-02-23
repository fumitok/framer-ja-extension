# Framer 日本語UI Chrome拡張機能

Framer の英語UIを日本語に翻訳するChrome拡張機能です。デザインパネル・ナビゲーション・ワークスペース・アニメーション設定など900以上の用語をリアルタイムで日本語化します。

## 機能

- デザインパネルの用語を日本語化（幅・高さ・余白・フォント・エフェクトなど）
- ナビゲーション・メニューを日本語化
- CMS・アナリティクス・設定画面を日本語化
- ワークスペース・チーム管理画面を日本語化
- アニメーションプリセット・インタラクション設定を日本語化
- ブレンドモード・フィルター・3Dトランスフォームを日本語化
- MutationObserver による動的コンテンツへの対応
- 未翻訳の用語を `window.missingList` でコンソールから確認可能

## インストール（開発者モード）

1. このリポジトリをクローン
   ```bash
   git clone https://github.com/fumitok/framer-ja-extension.git
   cd framer-ja-extension
   ```

2. 依存パッケージをインストール
   ```bash
   npm install
   ```

3. ビルド
   ```bash
   npm run build
   ```

4. Chrome で `chrome://extensions` を開く

5. 右上の **デベロッパーモード** をオンにする

6. **パッケージ化されていない拡張機能を読み込む** をクリックし、`dist/` フォルダを選択

7. `https://framer.com/projects/` を開くとUIが日本語化されます

## 翻訳への貢献

### 未翻訳の用語を見つける方法

1. 拡張機能をインストールした状態で Framer を開く
2. Chrome DevTools のコンソールを開く（F12）
3. `window.missingList` と入力して Enter
4. 未翻訳の英語用語の配列が表示されます

### 翻訳の追加方法

`src/content/index.ts` の `translations` オブジェクトに用語を追加してください：

```typescript
const translations: Record<string, string> = {
  // 既存の翻訳 ...
  "Your Term": "あなたの翻訳",
};
```

追加後に `npm run build` してから Chrome の拡張機能ページで再読み込みしてください。

## ブランチ構成

| ブランチ | 用途 |
|---------|------|
| `main` | 安定版・リリース用 |
| `develop` | 開発・翻訳追加用 |

## ビルド

```bash
npm run build   # 本番ビルド → dist/
npm run dev     # 開発サーバー起動
```

## Chrome Web Store への提出用パッケージ作成

```bash
npm run build
cd dist && zip -r ../framer-ja-extension.zip . && cd ..
```

## ライセンス

MIT

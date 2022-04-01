## Lize

株式売買をする上で、過去のデータを収集して判断材料にする web アプリケーションのフロントエンドです.

## 技術スタック

`Next.js` + `TypeScript`がメインになっています。

気持ち良い開発を支援するために、`fp-ts`, `io-ts`を導入しています.

状態を管理するために、`@redux/toolkit`を導入しています.

UI 周りは`css modules`を使ってます。

コードの治安を維持するために、`prettier`,`eslint`, `husky`を導入しています.

## 開発

開発環境の立ち上げは`yarn dev`

本番環境の立ち上げは`yarn build && yarn start`

## ディレクトリ構造

```
.
├── .husky # commitやpush時にeslintなどを動かす設定置き場
├── .vscode # vscodeの設定
├── public/images # 画像置き場
│
├── src
│    ├─ component # コンポーネント置き場, ボタンとか置きたい
│    ├─ domains # APIから来る情報の型やio-tsで定義されるcodec置き場
│    │
│    ├─ function # 機能置き場
│    │    └─ httpRequest.ts # axiosやfp-tsなどを用いてhttp通信を取り扱う
│    │
│    ├─ features # redux置き場
│    │    ├─ ange # Ange APIに関する情報を取り扱う
│    │    ├─ ${name} # Toko APIの内, ${name}に関する情報を取り扱う
│    │    │            (ex): company # Toko APIの内, 企業に関する情報を取り扱う
│    │    ├─ store.ts # reduxのstore置き場
│    │    └─ rootReducer.ts # 各ディレクトリのsliceを取りまとめている
│    │
│    └─ pages # ページ置き場
│          ├─ company # 企業ページ置き場
│          │    ├─ Redux.tsx # redux周りのロジックを管理する
│          │    ├─ Container.tsx # redux以外のロジックを管理する
│          │    ├─ Presentar.tsx # UIを管理する
│          │    ├─ Presentar.module.sass # UIを管理する
│          │    └─ type.ts # 各コンポーネントの型を定義する
│          │
│          ├─ root # トップページ置き場
│          ├─ _app.* # グローバルcssやtitleの設定
│          ├─ _document.tsx # SEO対策
│          └─ template.sass # 定数置き場
│
└── .env # 環境変数置き場
```

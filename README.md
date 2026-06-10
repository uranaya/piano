# リトミック＆ピアノ教室 ホームページ一式

受講者さん向けの静的ホームページです。  
ビジネス提案用の「収益シミュレーション」「初期費用」「融資額」「ロードマップ」は入れていません。

## ファイル構成

```text
index.html      ページ本体
style.css       デザイン
script.js       YouTube / Googleカレンダー / Googleフォーム / 公式LINE のURL設定
assets/         画像・アイコン
```

## まず編集する場所

`script.js` の一番上にある4か所を書き換えてください。

```js
const YOUTUBE_EMBED_URL = "";
const GOOGLE_CALENDAR_EMBED_URL = "";
const GOOGLE_FORM_URL = "";
const OFFICIAL_LINE_URL = "";
```

### YouTube

通常のURLではなく、埋め込み用URLにします。

例：

```js
const YOUTUBE_EMBED_URL = "https://www.youtube.com/embed/動画ID";
```

### Googleカレンダー

Googleカレンダーの「埋め込みコード」から、`src="..."` の中身をコピーします。

例：

```js
const GOOGLE_CALENDAR_EMBED_URL = "https://calendar.google.com/calendar/embed?src=xxxx&ctz=Asia%2FTokyo";
```

### Googleフォーム

フォームの共有URLを入れます。

例：

```js
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/xxxx/viewform";
```

### 公式LINE

LINE公式アカウントの友だち追加URLを入れます。

例：

```js
const OFFICIAL_LINE_URL = "https://lin.ee/xxxx";
```

## 文章・料金・住所を変える場合

`index.html` を開いて、該当箇所を書き換えてください。

主に編集する場所：

- 教室名
- 対象年齢
- レッスン内容
- レッスン料金
- 講師プロフィール
- 住所・アクセス
- 注意事項

## 画像を差し替える場合

`assets/teacher-placeholder.svg` を先生の写真に差し替える場合は、画像を `assets/teacher.jpg` などで保存し、`index.html` の以下を変更します。

```html
<img src="assets/teacher-placeholder.svg" alt="講師プロフィール画像">
```

変更例：

```html
<img src="assets/teacher.jpg" alt="講師プロフィール画像">
```

## Renderにアップロードする場合

GitHubにこのファイル一式をアップロードして、Renderで Static Site を作ります。

Render側の設定例：

```text
Build Command: 空欄
Publish Directory: .
```

`index.html` がリポジトリ直下にある状態ならこれで公開できます。

## 注意

問い合わせフォームを自前のメール送信にすると、サーバー側の仕組みが必要になります。  
無料・安全・簡単に運用するなら、Googleフォームまたは公式LINEへの誘導がおすすめです。

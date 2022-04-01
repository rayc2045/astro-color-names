# Astro Color Picker｜Build A Color Picker App with Astro

![astro-colors.netlify.app](https://cdn.dribbble.com/users/3800131/screenshots/17078957/media/6ceca176980d763462e4b648ad37107a.png)

[> Astro Colors Picker](https://astro-colors.netlify.app/)

### 外觀與互動設計
- 請見原專案：[HTML Reserved Colors](https://github.com/rayc2045/html-reserved-colors)

### 開發紀錄
- 將 `<head>` 與色票卡片做成元件載入
- 使用 Sass 做出在頁面引入的 [全域樣式](https://github.com/rayc2045/astro-color-picker/blob/main/src/styles/global.sass) 和元件中配合使用的 [設定樣式](https://github.com/rayc2045/astro-color-picker/blob/main/src/styles/_settings.sass)
- 將通用型程式碼 ([utils.js](https://github.com/rayc2045/astro-color-picker/blob/main/src/scripts/utils.js)) 與專案用程式碼進行拆分，需要時再模組化引入做使用 (module import)
- 以原生 DOM 操作實現透過網址查詢參數 (Query String) [過濾色票卡片的功能](https://astro-colors.netlify.app/?colors=darkorange+indianred+sandybrown+seagreen+darkseagreen+lightslategray)
- 其他請見原專案：[HTML Reserved Colors](https://github.com/rayc2045/html-reserved-colors)

### Commands

| Command          | Action                                       |
|:---------------- |:-------------------------------------------- |
| `pnpm i`         | Installs dependencies                        |
| `pnpm dev`       | Starts local dev server at `localhost:3000`  |
| `pnpm build`     | Build the production site to `./dist/`       |
| `pnpm preview`   | Preview the build locally, before deploying  |
| `pnpm product`   | Build the production site, and preview it    |
# 2026 大阪 Summer Sonic

Mobile-first、可離線使用的日本旅行 Digital Travel Book。

## Preview

這是零建置步驟的靜態網站。請用任意靜態伺服器從專案根目錄啟動；例如：

```sh
python3 -m http.server 4173
```

然後開啟 `http://localhost:4173/`。Service Worker 需要透過 `localhost` 或 HTTPS 才能啟用。

## Edit trip data

所有行程、地點、班機與住宿資料集中在 `data/trip.js`，可在出發前用 Notion 的最新 Snapshot 更新。

## GitHub Pages

網站使用相對路徑，可直接從 repository root 發佈到 GitHub Pages，不需要 build server、backend 或 GitHub Actions。

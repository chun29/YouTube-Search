# YouTube-Search

## 說明

使用 React 串接 YouTube Data API 實作 YouTube 搜尋頁面，並且有 Infinite scroll 功能

---

## 技術

- React
- Redux
- YouTube Data API
- Webpack
- Axios

---

## 功能

### 搜尋功能

在搜尋框輸入中文或英文關鍵字可呈現搜尋結果

- 使用 Axios Get YouTube Data API 的搜尋結果
- 使用 redux 將搜尋結果存在 store 中
- 點擊會連結至該影片 YouTube 網站

---

### Infinite scroll

使用者下滑到頁面底端時即會自動載入下一頁的資料

- 搜尋結果一頁為 10 筆
- 當滑動到底部時，會自動顯示出下一頁
- 若搜尋結果<10 筆，則呈現該數量的搜尋結果

---

### RWD

支援平板與手機尺寸

- Pad
- Mobile

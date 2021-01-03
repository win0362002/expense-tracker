# 我的餐廳清單

一個使用 node.js + express + handlebars 完成的名為"老爸的私房錢"的記帳 Web App

## 功能描述 (features)

- 在首頁一次瀏覽所有支出的清單
- 在首頁看到所有支出清單的總金額
- 新增一筆支出
- 編輯支出的所有屬性 (一次只能編輯一筆)
- 刪除任何一筆支出 (一次只能刪除一筆)
- 在首頁可以根據支出「類別」篩選支出；總金額的計算只會包括被篩選出來的支出總和。

## 環境建置與需求 (prerequisites)

- Node.js v10.15.0
- Express v4.17.1
- Express-handlebars v5.2.0
- nodemon v2.0.6
- body-parser v1.10.0
- method-override v3.0.0

## 安裝與執行步驟 (installation and execution)

- 使用 Git(Mac OS) 或 Git bash(Windows)

1. 開啟終端機使用 git clone 指令複製專案資料夾到本地端
   ```
   git clone https://github.com/win0362002/expense-tracker.git
   ```
2. 進入專案資料夾
   ```
   cd expense-tracker
   ```
3. 執行 npm install 安裝所需 package
   ```
   npm install
   ```
4. 安裝 nodemon 套件
   ```
   npm install -g nodemon
   ```
5. 使用以下指令可新增種子資料
   ```
   npm run seed
   ```
6. 使用以下指令即可啟動程式
   ```
   npm run dev
   ```
7. 在終端機上看到以下資訊即代表伺服器順利啟動

   ```
   Start and listen on localhost:3000/
   ```

8. 在瀏覽器的 URL 列輸入 localhost:3000 即可進入網頁

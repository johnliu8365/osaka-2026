/*
 * Travel data snapshot.
 * Replace this sample content with the final Notion export before the trip.
 * The UI reads this file only; no API, database, token, or secret is required.
 */
window.TRIP_DATA = {
  title: "2026 大阪 Summer Sonic",
  startDate: "2026-08-09",
  endDate: "2026-08-17",
  cities: ["Fukuoka", "Osaka", "Kobe"],
  days: [
    {
      date: "2026-08-09", dayNumber: 1, weekday: "Sunday", city: "Fukuoka",
      title: "Taipei → Fukuoka", coverPosition: "50% 56%",
      events: [
        { id: "d1-airport", startTime: "12:30", endTime: "13:00", category: "move", title: "桃園機場集合", titleJa: "桃園国際空港", area: "Taoyuan", location: "桃園機場 · Terminal 2", description: "先完成報到與行李託運，再找午餐。", transport: "機場捷運／計程車", notes: "護照、登機證與網卡放在隨身小包。", address: "桃園市大園區航站南路9號", mapsUrl: "https://maps.google.com/?q=Taiwan+Taoyuan+International+Airport" },
        { id: "d1-flight", startTime: "15:10", endTime: "18:20", category: "move", title: "飛往福岡", titleJa: "福岡へ", location: "TPE → FUK", description: "旅程正式開始。抵達後先領行李、完成入境。", transport: "Flight · Sample itinerary", notes: "Reservation: DL2TEB（範例）", voucherId: "flight-fuk", websiteUrl: "https://www.fukuoka-airport.jp/" },
        { id: "d1-hotel", startTime: "19:40", endTime: "20:10", category: "stay", title: "福岡飯店 Check-in", titleJa: "チェックイン", location: "Hakata, Fukuoka", description: "放下行李，確認明早集合時間。", transport: "福岡空港 → 博多 · 地下鐵約 5 分", notes: "此住宿名稱與地址為版面示意，出發前請替換。", mapsUrl: "https://maps.google.com/?q=Hakata+Station" },
        { id: "d1-dinner", startTime: "20:30", endTime: "21:30", category: "food", title: "博多第一碗拉麵", titleJa: "博多ラーメン", location: "博多站周邊", description: "抵達日不排隊，看到順眼的店就坐下。", transport: "飯店步行 8 min", notes: "清淡一點，多喝水。" }
      ]
    },
    {
      date: "2026-08-10", dayNumber: 2, weekday: "Monday", city: "Fukuoka", title: "Fukuoka — Seaside Day", coverPosition: "50% 52%",
      events: [
        { id: "d2-breakfast", startTime: "08:30", endTime: "09:15", category: "coffee", title: "Morning coffee", titleJa: "朝のコーヒー", location: "Tenjin", description: "咖啡、吐司，慢慢進入旅行節奏。", transport: "地下鐵空港線", notes: "週一部分小店公休，備選店見 Explore。" },
        { id: "d2-ohori", startTime: "10:00", endTime: "12:00", category: "sight", title: "大濠公園", titleJa: "大濠公園", location: "Chuo Ward", description: "繞湖散步，從城市走向海邊的清爽上午。", transport: "大濠公園站 · 徒步 7 min", mapsUrl: "https://maps.google.com/?q=Ohori+Park" },
        { id: "d2-seaside", startTime: "14:00", endTime: "17:00", category: "sight", title: "Momochi Seaside", titleJa: "シーサイドももち", location: "Sawara Ward", description: "海風、福岡塔與夏日傍晚。", transport: "西鐵巴士約 25 min", notes: "帶帽子、防曬與水。", mapsUrl: "https://maps.google.com/?q=Momochi+Seaside+Park" },
        { id: "d2-yatai", startTime: "19:00", endTime: "21:00", category: "food", title: "屋台夜晚", titleJa: "天神屋台", location: "Tenjin", description: "燒鳥、關東煮，保持一點空間給第二攤。", transport: "步行", notes: "只帶必要現金。" }
      ]
    },
    {
      date: "2026-08-11", dayNumber: 3, weekday: "Tuesday", city: "Fukuoka", title: "Dazaifu & Tenjin", coverPosition: "50% 46%",
      events: [
        { id: "d3-dazaifu", startTime: "09:00", endTime: "12:30", category: "sight", title: "太宰府天滿宮", titleJa: "太宰府天満宮", location: "Dazaifu", description: "早點抵達，避開最熱與人潮最多的時段。", transport: "西鐵福岡（天神）→ 太宰府 · 約 35 min", notes: "回程吃梅枝餅。", mapsUrl: "https://maps.google.com/?q=Dazaifu+Tenmangu" },
        { id: "d3-lunch", startTime: "13:30", endTime: "14:30", category: "food", title: "牛腸鍋午餐", titleJa: "もつ鍋", location: "Tenjin", description: "福岡經典午餐，預留排隊時間。", transport: "天神站步行", notes: "Sample reservation · 2 people" },
        { id: "d3-shop", startTime: "15:30", endTime: "18:00", category: "shopping", title: "天神散策", titleJa: "天神散策", location: "Tenjin", description: "文具、運動用品與伴手禮的自由時間。", transport: "步行", notes: "大型採買留到大阪。" },
        { id: "d3-pack", startTime: "21:00", endTime: "21:30", category: "stay", title: "整理行李", titleJa: "荷造り", location: "Hotel", description: "明天移動日，票券與充電器放在最外層。", transport: "—", notes: "10:00 前 checkout。" }
      ]
    },
    {
      date: "2026-08-12", dayNumber: 4, weekday: "Wednesday", city: "Osaka", title: "Fukuoka → Osaka", coverPosition: "50% 48%",
      events: [
        { id: "d4-breakfast", startTime: "08:30", endTime: "09:20", category: "food", title: "早餐", titleJa: "朝食", location: "Hakata", description: "移動日前的簡單早餐。", transport: "飯店附近", notes: "吃完確認新幹線座位。" },
        { id: "d4-checkout", startTime: "10:00", endTime: "10:15", category: "stay", title: "Checkout", titleJa: "チェックアウト", location: "Fukuoka Hotel", description: "完成退房，直接前往博多站。", transport: "—", notes: "確認房內插座與保險箱。" },
        { id: "d4-station", startTime: "10:20", endTime: "10:40", category: "move", title: "前往博多站", titleJa: "博多駅へ", location: "Hakata Station", description: "留 20 分鐘買水與車站便當。", transport: "徒歩／地下鐵", notes: "11:03 發車。" },
        { id: "d4-shinkansen", startTime: "11:03", endTime: "13:31", category: "move", title: "博多 → 新大阪", titleJa: "博多 → 新大阪", location: "Sanyo Shinkansen", description: "沿著山陽一路向東，正式進入大阪篇。", transport: "山陽新幹線 · 約 2h 28m", notes: "車票與座位為範例，請以正式預訂為準。", mapsUrl: "https://maps.google.com/?q=Shin-Osaka+Station" },
        { id: "d4-checkin", startTime: "14:30", endTime: "15:10", category: "stay", title: "大阪飯店 Check-in", titleJa: "チェックイン", location: "Namba, Osaka", description: "放下大件行李，帶輕裝出門。", transport: "新大阪 → 難波 · 御堂筋線約 15 min", notes: "住宿資料為樣本。", mapsUrl: "https://maps.google.com/?q=Namba+Station" },
        { id: "d4-nipponbashi", startTime: "16:00", endTime: "18:30", category: "shopping", title: "日本橋電電城", titleJa: "でんでんタウン", location: "Nipponbashi", description: "玩具、模型與電器店，第一輪先看不急著買。", transport: "飯店徒步約 12 min", notes: "店家多於 20:00 前關門。", mapsUrl: "https://maps.google.com/?q=Den+Den+Town+Osaka" },
        { id: "d4-dinner", startTime: "19:00", endTime: "20:30", category: "food", title: "難波晚餐", titleJa: "難波で夕食", location: "Namba", description: "移動日的收尾，選一間不需要久等的店。", transport: "步行", notes: "明天走路多，早點休息。" }
      ]
    },
    {
      date: "2026-08-13", dayNumber: 5, weekday: "Thursday", city: "Osaka", title: "Osaka Classics", coverPosition: "50% 42%",
      events: [
        { id: "d5-castle", startTime: "09:00", endTime: "11:30", category: "sight", title: "大阪城", titleJa: "大阪城", location: "Chuo Ward", description: "開門前抵達，從公園慢慢走向天守閣。", transport: "大阪城公園站", notes: "戶外曝曬，記得補水。", mapsUrl: "https://maps.google.com/?q=Osaka+Castle" },
        { id: "d5-lunch", startTime: "12:30", endTime: "13:30", category: "food", title: "大阪燒", titleJa: "お好み焼き", location: "Umeda", description: "熱騰騰的大阪午餐。", transport: "JR 環狀線", notes: "避開最熱門排隊店。" },
        { id: "d5-umeda", startTime: "14:30", endTime: "18:00", category: "shopping", title: "梅田逛街", titleJa: "梅田ショッピング", location: "Umeda", description: "百貨、相機與運動用品一次完成。", transport: "步行串連", notes: "18:00 前先把戰利品放回寄物櫃。" },
        { id: "d5-sky", startTime: "18:30", endTime: "20:00", category: "sight", title: "梅田藍天大廈", titleJa: "梅田スカイビル", location: "Kita Ward", description: "在天空庭園看城市從日落轉進夜晚。", transport: "大阪站步行約 12 min", mapsUrl: "https://maps.google.com/?q=Umeda+Sky+Building" }
      ]
    },
    {
      date: "2026-08-14", dayNumber: 6, weekday: "Friday", city: "Osaka", title: "Summer Sonic Eve", coverPosition: "50% 60%",
      events: [
        { id: "d6-sleep", startTime: "09:30", endTime: "10:00", category: "coffee", title: "Late start", titleJa: "ゆっくり朝", location: "Namba", description: "為音樂祭留體力，睡飽再出門。", transport: "—", notes: "補齊水、帽子、防曬。" },
        { id: "d6-market", startTime: "11:00", endTime: "13:00", category: "food", title: "木津市場", titleJa: "大阪木津卸売市場", location: "Daikokucho", description: "海鮮與市場午餐。", transport: "大國町站步行", mapsUrl: "https://maps.google.com/?q=Kizu+Market+Osaka" },
        { id: "d6-rest", startTime: "14:30", endTime: "17:00", category: "stay", title: "回飯店休息", titleJa: "ホテルで休憩", location: "Hotel", description: "充電、整理明日音樂祭隨身包。", transport: "御堂筋線", notes: "行動電源、票券、毛巾、輕便雨衣。" },
        { id: "d6-dotonbori", startTime: "18:00", endTime: "20:00", category: "food", title: "道頓堀散步", titleJa: "道頓堀", location: "Dotonbori", description: "不趕行程，吃點小食就回飯店。", transport: "步行", notes: "22:30 前睡。", mapsUrl: "https://maps.google.com/?q=Dotonbori" }
      ]
    },
    {
      date: "2026-08-15", dayNumber: 7, weekday: "Saturday", city: "Osaka", title: "SUMMER SONIC OSAKA", coverPosition: "50% 38%",
      events: [
        { id: "d7-depart", startTime: "08:00", endTime: "09:10", category: "move", title: "前往會場", titleJa: "会場へ", location: "Osaka", description: "提早出發，依官方公告轉乘接駁。", transport: "Train + Shuttle · 以官方資訊為準", notes: "截圖回程路線與集合點。" },
        { id: "d7-festival", startTime: "10:00", endTime: "21:00", category: "music", title: "SUMMER SONIC OSAKA", titleJa: "サマーソニック大阪", location: "Venue TBC", description: "一整天的音樂、夏天與期待很久的現場。", transport: "依正式會場公告", notes: "防曬、鹽糖、補水；正式陣容與場地公告後更新。", voucherId: "summersonic", websiteUrl: "https://www.summersonic.com/" },
        { id: "d7-return", startTime: "21:15", endTime: "22:45", category: "move", title: "回到大阪", titleJa: "大阪へ戻る", location: "Namba", description: "離場前先確認最後一班接駁與電車。", transport: "Shuttle + Train", notes: "人潮中不要勉強趕車。" }
      ]
    },
    {
      date: "2026-08-16", dayNumber: 8, weekday: "Sunday", city: "Kobe", title: "Osaka → Kobe", coverPosition: "50% 54%",
      events: [
        { id: "d8-brunch", startTime: "10:00", endTime: "11:00", category: "coffee", title: "Brunch & recovery", titleJa: "ブランチ", location: "Namba", description: "音樂祭隔天不排早班，慢慢整理。", transport: "步行", notes: "補充水與水果。" },
        { id: "d8-kobe", startTime: "12:30", endTime: "13:20", category: "move", title: "大阪 → 神戶", titleJa: "大阪 → 神戸", location: "Sannomiya", description: "最後一座城市，從港灣收尾。", transport: "阪神／JR · 約 45 min", notes: "小心別搭到需要補票的列車。" },
        { id: "d8-harbor", startTime: "15:00", endTime: "18:00", category: "sight", title: "神戶港散步", titleJa: "神戸ハーバーランド", location: "Harborland", description: "港塔、海風與旅行最後一個完整午後。", transport: "三宮 → 元町／神戶", mapsUrl: "https://maps.google.com/?q=Kobe+Harborland" },
        { id: "d8-beef", startTime: "19:00", endTime: "20:30", category: "food", title: "神戶牛晚餐", titleJa: "神戸ビーフ", location: "Sannomiya", description: "最後一晚的正式晚餐。", transport: "步行", notes: "Reservation: SAMPLE-0816" }
      ]
    },
    {
      date: "2026-08-17", dayNumber: 9, weekday: "Monday", city: "Kobe", title: "Kobe → Taipei", coverPosition: "50% 50%",
      events: [
        { id: "d9-morning", startTime: "09:00", endTime: "10:30", category: "coffee", title: "神戶最後的早晨", titleJa: "神戸最後の朝", location: "Sannomiya", description: "咖啡、早餐與最後一點城市散步。", transport: "步行", notes: "11:00 前回飯店。" },
        { id: "d9-checkout", startTime: "11:00", endTime: "11:20", category: "stay", title: "Checkout", titleJa: "チェックアウト", location: "Kobe Hotel", description: "寄放行李，保持護照與票券在身上。", transport: "—", notes: "秤一次行李重量。" },
        { id: "d9-airport", startTime: "15:30", endTime: "16:30", category: "move", title: "前往神戶機場", titleJa: "神戸空港へ", location: "UKB", description: "保留充足時間辦理報到與退稅物品檢查。", transport: "Port Liner · 約 18 min", notes: "17:00 前抵達機場。", mapsUrl: "https://maps.google.com/?q=Kobe+Airport" },
        { id: "d9-flight", startTime: "19:00", endTime: "21:10", category: "move", title: "飛回台北", titleJa: "台北へ", location: "UKB → TPE", description: "把九天的夏天帶回家。", transport: "Flight · Sample itinerary", notes: "航班號與時間請於出發前再次確認。", voucherId: "flight-tpe" }
      ]
    }
  ],
  places: [
    { id: "p-ohori", city: "Fukuoka", category: "sight", name: "大濠公園", nameJa: "大濠公園", area: "Chuo Ward", status: "PLANNED", note: "清晨或傍晚最舒服。", mapsUrl: "https://maps.google.com/?q=Ohori+Park" },
    { id: "p-manuman", city: "Fukuoka", category: "coffee", name: "Coffee Man", nameJa: "コーヒーマン", area: "Ropponmatsu", status: "WANT TO GO", note: "大濠公園散步後的備選咖啡。" },
    { id: "p-taiho", city: "Fukuoka", category: "food", name: "大砲拉麵", nameJa: "大砲ラーメン", area: "Tenjin", status: "BACKUP", note: "不想排隊時再換附近分店。" },
    { id: "p-castle", city: "Osaka", category: "sight", name: "大阪城", nameJa: "大阪城", area: "Chuo Ward", status: "PLANNED", note: "早上 9 點前入園。", mapsUrl: "https://maps.google.com/?q=Osaka+Castle" },
    { id: "p-super", city: "Osaka", category: "toy", name: "Super Kids Land", nameJa: "スーパーキッズランド", area: "Nipponbashi", status: "PLANNED", note: "模型與玩具；大型盒裝商品最後再買。" },
    { id: "p-mizuno", city: "Osaka", category: "sports", name: "Mizuno Osaka Chayamachi", nameJa: "ミズノ大阪茶屋町", area: "Umeda", status: "WANT TO GO", note: "運動鞋與棒球用品。" },
    { id: "p-liLo", city: "Osaka", category: "coffee", name: "LiLo Coffee Roasters", nameJa: "リロ コーヒー ロースターズ", area: "Shinsaibashi", status: "BACKUP", note: "心齋橋逛累時的短暫停靠。" },
    { id: "p-kuromon", city: "Osaka", category: "food", name: "黑門市場", nameJa: "黒門市場", area: "Nipponbashi", status: "WANT TO GO", note: "早上去，避開午間人潮。" },
    { id: "p-harbor", city: "Kobe", category: "sight", name: "Kobe Harborland", nameJa: "神戸ハーバーランド", area: "Chuo Ward", status: "PLANNED", note: "日落前抵達。", mapsUrl: "https://maps.google.com/?q=Kobe+Harborland" },
    { id: "p-studio", city: "Kobe", category: "coffee", name: "Coffee up!", nameJa: "コーヒーアップ！", area: "Sannomiya", status: "WANT TO GO", note: "回程日的早餐候選。" },
    { id: "p-center", city: "Kobe", category: "shopping", name: "三宮 Center Plaza", nameJa: "三宮センタープラザ", area: "Sannomiya", status: "BACKUP", note: "下雨天備案，玩具與二手店集中。" }
  ],
  flights: [
    { id: "flight-fuk", route: "TPE → FUK", date: "2026-08-09", departure: "15:10", arrival: "18:20", from: "Taipei", to: "Fukuoka", flightNumber: "SAMPLE 101", terminal: "TPE Terminal 2", reservation: "DL2TEB", note: "範例資料；出發前請替換航班號並再次確認時間。" },
    { id: "flight-tpe", route: "UKB → TPE", date: "2026-08-17", departure: "19:00", arrival: "21:10", from: "Kobe", to: "Taipei", flightNumber: "SAMPLE 202", terminal: "Kobe Airport", reservation: "SAMPLE17", note: "範例資料；出發前請替換訂位代號。" }
  ],
  hotels: [
    { id: "hotel-fuk", city: "Fukuoka", name: "Fukuoka Hotel · SAMPLE", address: "Hakata Station Area, Fukuoka", stay: "Aug 09 — 12", checkIn: "15:00", checkOut: "10:00", note: "此為版面示意住宿，請用正式資料替換。", mapsUrl: "https://maps.google.com/?q=Hakata+Station" },
    { id: "hotel-osa", city: "Osaka", name: "Osaka Hotel · SAMPLE", address: "Namba Area, Osaka", stay: "Aug 12 — 16", checkIn: "15:00", checkOut: "11:00", note: "靠近御堂筋線，音樂祭回程較方便。", mapsUrl: "https://maps.google.com/?q=Namba+Station" },
    { id: "hotel-kob", city: "Kobe", name: "Kobe Hotel · SAMPLE", address: "Sannomiya Area, Kobe", stay: "Aug 16 — 17", checkIn: "15:00", checkOut: "11:00", note: "隔天搭 Port Liner 前往神戶機場。", mapsUrl: "https://maps.google.com/?q=Sannomiya+Station" }
  ],
  vouchers: [
    { id: "summersonic", event: "SUMMER SONIC OSAKA", date: "2026-08-15", bookingNumber: "SS26-SAMPLE", ticketType: "1 DAY PASS · SAMPLE", note: "這是離線介面範例，不是有效票券。正式 QR 與姓名資料需於出發前替換。", code: "SS26SAMPLE0815" },
    { id: "flight-fuk", event: "TPE → FUK", date: "2026-08-09", bookingNumber: "DL2TEB", ticketType: "FLIGHT CONFIRMATION · SAMPLE", note: "請以航空公司正式電子機票為準。", code: "DL2TEB20260809" },
    { id: "flight-tpe", event: "UKB → TPE", date: "2026-08-17", bookingNumber: "SAMPLE17", ticketType: "FLIGHT CONFIRMATION · SAMPLE", note: "請以航空公司正式電子機票為準。", code: "SAMPLE1720260817" }
  ],
  notes: [
    "護照、信用卡與現金分開放；護照影本保留離線版本。",
    "日本 8 月炎熱潮濕：每日補水、防曬，音樂祭準備鹽糖與輕便雨衣。",
    "最後一班車與音樂祭接駁資訊，以當日官方公告為準。",
    "所有 SAMPLE 標示內容都必須在出發前換成正式資料。"
  ],
  usefulLinks: [
    { label: "Japan Travel by NAVITIME", url: "https://japantravel.navitime.com/" },
    { label: "JR West", url: "https://www.westjr.co.jp/global/tc/" },
    { label: "Summer Sonic Official", url: "https://www.summersonic.com/" }
  ]
};

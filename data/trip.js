/*
 * Offline travel snapshot updated from the trip's Notion workspace.
 * Keep personal names, booking references, ticket numbers and payment data out
 * of this public-facing file.
 */
window.TRIP_DATA = {
  title: "2026 大阪 Summer Sonic",
  startDate: "2026-08-09",
  endDate: "2026-08-17",
  cities: ["Fukuoka", "Osaka", "Kobe"],
  cityNames: {
    Taipei: { name: "台北", roman: "TAIPEI" },
    Taoyuan: { name: "桃園", roman: "TAOYUAN" },
    Fukuoka: { name: "福岡", roman: "FUKUOKA" },
    Osaka: { name: "大阪", roman: "OSAKA" },
    Kobe: { name: "神戶", roman: "KOBE" }
  },
  days: [
    {
      dayNumber: 1,
      date: "2026-08-09",
      weekday: "Sunday",
      city: "Fukuoka",
      title: "台北 → 福岡",
      titleEn: "TAIPEI TO FUKUOKA",
      coverImage: "./images/day-01-flight-fukuoka.jpg",
      coverPosition: "58% 38%",
      events: [
        {
          id: "d1-airport",
          startTime: "12:30",
          endTime: "14:10",
          title: "抵達桃園機場",
          titleJa: "桃園国際空港",
          category: "move",
          location: "桃園國際機場",
          area: "Taoyuan",
          description: "預留報到、托運與安檢時間。",
          transport: "台北 → 桃園國際機場",
          notes: "長榮航空航廈與櫃檯請在出發前再次確認。",
          mapsUrl: "https://maps.google.com/?q=Taoyuan+International+Airport"
        },
        {
          id: "d1-flight",
          startTime: "15:10",
          endTime: "18:15",
          title: "長榮航空飛往福岡",
          titleJa: "福岡行き",
          category: "move",
          location: "TPE → FUK",
          area: "Fukuoka",
          description: "15:10 自桃園起飛，預計 18:15 抵達福岡。",
          transport: "桃園國際機場 → 福岡機場",
          notes: "Notion 目前只記錄「長榮航空 BR」，完整航班號待補。"
        },
        {
          id: "d1-hotel-route",
          startTime: "19:20",
          endTime: "19:50",
          title: "福岡機場 → 博多祇園",
          titleJa: "福岡空港から博多祇園へ",
          category: "move",
          location: "福岡機場 → 櫛田神社前",
          area: "Fukuoka",
          description: "入境與領行李後，搭免費接駁車銜接地鐵，預計 19:40–19:50 抵達飯店。",
          transport: "國際線航廈 1F 免費接駁車（約 10 分） → 福岡空港站 → 空港線至博多（2 站） → 轉七隈線至櫛田神社前（1 站） → 步行 2–3 分",
          notes: "入境與領行李預估於 18:45–19:15 完成。",
          mapsUrl: "https://maps.google.com/?q=Nishitetsu+Hotel+Croom+Hakata+Gion+Kushida+Shrine"
        },
        {
          id: "d1-checkin",
          startTime: "19:50",
          endTime: "20:10",
          title: "入住西鐵飯店",
          titleJa: "西鉄ホテル クルーム 博多祇園 櫛田神社前",
          category: "stay",
          location: "西鐵飯店 CROOM 博多祇園 櫛田神社前",
          area: "Fukuoka",
          description: "福岡住宿共 3 晚。",
          transport: "櫛田神社前站 → 步行 2–3 分",
          notes: "可於 15:00–26:00 入住；8/12 11:00 前退房。",
          mapsUrl: "https://maps.google.com/?q=Nishitetsu+Hotel+Croom+Hakata+Gion+Kushida+Shrine"
        }
      ]
    },
    {
      dayNumber: 2,
      date: "2026-08-10",
      weekday: "Monday",
      city: "Fukuoka",
      title: "福岡自由日",
      titleEn: "FUKUOKA OPEN DAY",
      coverImage: "./images/day-02-fukuoka-open-day.jpg",
      coverPosition: "58% 62%",
      events: [
        {
          id: "d2-open",
          startTime: "--:--",
          endTime: "--:--",
          title: "自由安排",
          titleJa: "フリープラン",
          category: "sight",
          location: "福岡",
          area: "Fukuoka",
          description: "Notion 尚未鎖定今日順序；可從 Explore 的福岡清單依體力挑選。",
          transport: "飯店 → 櫛田神社／博多運河城／中洲 → 其他候選地點",
          notes: "櫛田神社步行約 3–5 分，博多運河城步行約 5 分，適合先從飯店周邊開始。"
        }
      ]
    },
    {
      dayNumber: 3,
      date: "2026-08-11",
      weekday: "Tuesday",
      city: "Fukuoka",
      title: "福岡 SoftBank HAWKS",
      titleEn: "FUKUOKA SOFTBANK HAWKS",
      coverImage: "./images/day-03-baseball.jpg",
      coverPosition: "62% 64%",
      events: [
        {
          id: "d3-baseball",
          startTime: "--:--",
          endTime: "--:--",
          title: "福岡 SoftBank HAWKS 例行賽",
          titleJa: "福岡ソフトバンクホークス 公式戦",
          category: "baseball",
          location: "MIZUHO PayPay Dome FUKUOKA",
          area: "Fukuoka",
          description: "MIZUHO Premium Seats（P Platinum）。Notion 尚未記錄開賽時間。",
          transport: "福岡市地下鐵唐人町站 3 號出口 → 步行約 15 分 → 5 號閘門旁售票窗口",
          notes: "窗口於開賽前 3.5 小時開放，至開賽後 1.5 小時關閉。原則上不得攜帶酒類及多數外食；飲料容器限制以現場最新規定為準。",
          mapsUrl: "https://maps.google.com/?q=MIZUHO+PayPay+Dome+FUKUOKA"
        }
      ]
    },
    {
      dayNumber: 4,
      date: "2026-08-12",
      weekday: "Wednesday",
      city: "Osaka",
      title: "福岡 → 大阪",
      titleEn: "FUKUOKA TO OSAKA",
      coverImage: "./images/day-04-shinkansen-osaka.jpg",
      coverPosition: "62% 66%",
      events: [
        {
          id: "d4-depart",
          startTime: "10:30",
          endTime: "11:00",
          title: "福岡飯店退房",
          titleJa: "ホテルをチェックアウト",
          category: "stay",
          location: "西鐵飯店 CROOM 博多祇園",
          area: "Fukuoka",
          description: "退房後前往博多站搭乘新幹線。",
          transport: "飯店 → 櫛田神社前站 → 七隈線至博多站",
          notes: "退房期限為 11:00。"
        },
        {
          id: "d4-shinkansen",
          startTime: "11:00",
          endTime: "14:00",
          title: "山陽新幹線前往大阪",
          titleJa: "山陽新幹線で大阪へ",
          category: "move",
          location: "博多站 → 新大阪站 → 大阪站",
          area: "Osaka",
          description: "新幹線車次與座位尚未確定；博多至新大阪約 2 小時 30 分。",
          transport: "博多站 → 山陽新幹線 → 新大阪站 → JR 京都線 → 大阪站 → 步行 5–10 分",
          notes: "8/7–8/16 為盂蘭盆節尖峰，NOZOMI 全車指定席，需預先訂位。"
        },
        {
          id: "d4-checkin",
          startTime: "14:00",
          endTime: "15:30",
          title: "抵達大阪梅田飯店",
          titleJa: "ホテルインターゲート大阪 梅田",
          category: "stay",
          location: "大阪梅田 Intergate 飯店",
          area: "Osaka",
          description: "預計 14:00–14:30 抵達；15:00 後可辦理入住。",
          transport: "JR 大阪站 → 步行 5–10 分",
          notes: "住宿 5 晚，8/17 11:00 前退房。",
          mapsUrl: "https://maps.google.com/?q=Hotel+Intergate+Osaka+Umeda"
        },
        {
          id: "d4-companion",
          startTime: "16:25",
          endTime: "20:15",
          title: "同行者抵達關西機場",
          titleJa: "同行者が関西空港に到着",
          category: "move",
          location: "TPE T1 → KIX T1",
          area: "Osaka",
          description: "台灣虎航 IT212 經濟艙，16:25 起飛、20:15 抵達。",
          transport: "桃園國際機場 T1 → 關西國際機場 T1",
          notes: "此段為同行者航班。"
        }
      ]
    },
    {
      dayNumber: 5,
      date: "2026-08-13",
      weekday: "Thursday",
      city: "Osaka",
      title: "大阪自由日",
      titleEn: "OSAKA OPEN DAY",
      coverImage: "./images/day-05-osaka-shopping.jpg",
      coverPosition: "62% 58%",
      events: [
        {
          id: "d5-open",
          startTime: "--:--",
          endTime: "--:--",
          title: "自由安排",
          titleJa: "フリープラン",
          category: "shopping",
          location: "大阪",
          area: "Osaka",
          description: "Notion 尚未安排固定行程；Alpen OSAKA 與日本橋 Ota Road 商店列在 Explore。",
          transport: "梅田 → 候選地點 → 飯店",
          notes: "商店營業時間與公休日請於當日再查。"
        }
      ]
    },
    {
      dayNumber: 6,
      date: "2026-08-14",
      weekday: "Friday",
      city: "Osaka",
      title: "Summer Sonic 大阪 · Day 1",
      titleEn: "SUMMER SONIC OSAKA · DAY 1",
      coverImage: "./images/day-06-summer-sonic.jpg",
      coverPosition: "60% 68%",
      events: [
        {
          id: "d6-depart",
          startTime: "08:45",
          endTime: "10:00",
          title: "前往萬博紀念公園",
          titleJa: "万博記念公園へ",
          category: "move",
          location: "梅田 → 萬博紀念公園",
          area: "Osaka",
          description: "由飯店步行至梅田站，轉乘地鐵與大阪單軌電車。",
          transport: "大阪 Metro 梅田站 → 御堂筋線／北大阪急行直通至千里中央 → 大阪單軌電車至萬博紀念公園站 → 步行 15–20 分",
          notes: "預計 10:00–10:15 抵達會場入口。"
        },
        {
          id: "d6-festival",
          startTime: "11:00",
          endTime: "依現場",
          title: "Summer Sonic 大阪 · Day 1",
          titleJa: "SUMMER SONIC OSAKA",
          category: "music",
          location: "萬博紀念公園",
          area: "Osaka",
          description: "會場 10:00 開放，演出 11:00 開始。",
          transport: "萬博紀念公園站 → 步行 15–20 分 → 會場入口",
          notes: "出演順序、舞台與散場交通請以官方最新公告為準。",
          mapsUrl: "https://maps.google.com/?q=Expo+70+Commemorative+Park",
          websiteUrl: "https://www.summersonic.com/"
        }
      ]
    },
    {
      dayNumber: 7,
      date: "2026-08-15",
      weekday: "Saturday",
      city: "Osaka",
      title: "大阪自由日",
      titleEn: "OSAKA OPEN DAY",
      coverImage: "./images/day-07-osaka-rest.jpg",
      coverPosition: "64% 66%",
      events: [
        {
          id: "d7-open",
          startTime: "--:--",
          endTime: "--:--",
          title: "自由安排與休息",
          titleJa: "フリープラン",
          category: "sight",
          location: "大阪",
          area: "Osaka",
          description: "Notion 尚未排定固定行程，可保留體力或使用 Explore 候選清單。",
          transport: "飯店 → 候選地點 → 飯店",
          notes: "隔天還有第二個 Summer Sonic 行程。"
        }
      ]
    },
    {
      dayNumber: 8,
      date: "2026-08-16",
      weekday: "Sunday",
      city: "Osaka",
      title: "Summer Sonic 大阪 · Day 2",
      titleEn: "SUMMER SONIC OSAKA · DAY 2",
      coverImage: "./images/day-08-summer-sonic.jpg",
      coverPosition: "62% 68%",
      events: [
        {
          id: "d8-depart",
          startTime: "08:45",
          endTime: "10:00",
          title: "前往萬博紀念公園",
          titleJa: "万博記念公園へ",
          category: "move",
          location: "梅田 → 萬博紀念公園",
          area: "Osaka",
          description: "沿用 Day 1 路線前往會場。",
          transport: "大阪 Metro 梅田站 → 御堂筋線／北大阪急行直通至千里中央 → 大阪單軌電車至萬博紀念公園站 → 步行 15–20 分",
          notes: "預計 10:00–10:15 抵達會場入口。"
        },
        {
          id: "d8-festival",
          startTime: "11:00",
          endTime: "依現場",
          title: "Summer Sonic 大阪 · Day 2",
          titleJa: "SUMMER SONIC OSAKA",
          category: "music",
          location: "萬博紀念公園",
          area: "Osaka",
          description: "會場 10:00 開放，演出 11:00 開始。",
          transport: "萬博紀念公園站 → 步行 15–20 分 → 會場入口",
          notes: "出演順序、舞台與散場交通請以官方最新公告為準。",
          mapsUrl: "https://maps.google.com/?q=Expo+70+Commemorative+Park",
          websiteUrl: "https://www.summersonic.com/"
        }
      ]
    },
    {
      dayNumber: 9,
      date: "2026-08-17",
      weekday: "Monday",
      city: "Kobe",
      title: "神戶 → 台北",
      titleEn: "KOBE TO TAIPEI",
      coverImage: "./images/day-09-kobe-return.jpg",
      coverPosition: "58% 58%",
      events: [
        {
          id: "d9-depart",
          startTime: "10:15",
          endTime: "11:15",
          title: "大阪退房 → 神戶三宮",
          titleJa: "大阪から神戸三宮へ",
          category: "move",
          location: "大阪站 → 三宮站",
          area: "Kobe",
          description: "從飯店步行至 JR 大阪站，搭 JR 神戶線新快速。",
          transport: "飯店 → 步行 5–10 分至 JR 大阪站 → JR 神戶線新快速 22–25 分 → 三宮站",
          notes: "預計 11:00–11:15 抵達三宮。"
        },
        {
          id: "d9-lunch",
          startTime: "12:00",
          endTime: "13:30",
          title: "神戶牛排 Ishida 本店",
          titleJa: "神戸牛すてーき Ishida. 本店",
          category: "food",
          location: "TAKAI 大樓 3F",
          area: "Kobe",
          description: "12:00 午餐，目前尚未訂位。",
          transport: "JR 三宮站西口 → 步行約 2 分",
          notes: "地址：兵庫縣神戶市中央區北長狹通 1-21-2 TAKAI 大樓 3F。午餐 11:30–15:00，最後點餐 14:00；電話 078-599-7779。",
          mapsUrl: "https://maps.google.com/?q=Kobe+Beef+Steak+Ishida+Main+Shop",
          websiteUrl: "https://www.kobe-ishidaya.com/shop/steak_honten"
        },
        {
          id: "d9-airport",
          startTime: "待補",
          endTime: "待補",
          title: "前往神戶機場",
          titleJa: "神戸空港へ",
          category: "move",
          location: "三宮 → 神戶機場 T2",
          area: "Kobe",
          description: "Notion 尚未補上三宮至神戶機場的交通與出發時間。",
          transport: "三宮 → 交通待確認 → 神戶機場第 2 航廈",
          notes: "請保留國際線報到、托運與安檢時間。",
          mapsUrl: "https://maps.google.com/?q=Kobe+Airport+Terminal+2"
        },
        {
          id: "d9-flight",
          startTime: "19:00",
          endTime: "20:55",
          title: "長榮航空 BR175 返回台北",
          titleJa: "台北行き BR175",
          category: "move",
          location: "UKB T2 → TPE T2",
          area: "Kobe",
          description: "兩人一起搭乘同一班回程航班；經濟艙，19:00 自神戶起飛，預計 20:55 抵達桃園。",
          transport: "神戶機場第 2 航廈 → 桃園國際機場第 2 航廈",
          notes: "出發前再次確認航空公司通知與報到時間。"
        }
      ]
    }
  ],
  places: [
    { city: "Fukuoka", category: "sight", name: "櫛田神社", nameJa: "櫛田神社", area: "博多祇園", status: "NEARBY", note: "飯店步行約 3–5 分", mapsUrl: "https://maps.google.com/?q=Kushida+Shrine+Fukuoka" },
    { city: "Fukuoka", category: "shopping", name: "博多運河城", nameJa: "キャナルシティ博多", area: "住吉", status: "NEARBY", note: "飯店步行約 5 分", mapsUrl: "https://maps.google.com/?q=Canal+City+Hakata" },
    { city: "Fukuoka", category: "food", name: "一蘭總本店", nameJa: "一蘭 本社総本店", area: "中洲", status: "24H", note: "飯店步行約 10 分", mapsUrl: "https://maps.google.com/?q=Ichiran+Main+Shop+Fukuoka" },
    { city: "Fukuoka", category: "food", name: "元祖博多明太重", nameJa: "元祖博多めんたい重", area: "西中洲", status: "WANT", note: "07:00–22:30", mapsUrl: "https://maps.google.com/?q=Ganso+Hakata+Mentaiju" },
    { city: "Fukuoka", category: "sight", name: "大濠公園", nameJa: "大濠公園", area: "大濠公園", status: "BACKUP", note: "散步與休息候選", mapsUrl: "https://maps.google.com/?q=Ohori+Park" },
    { city: "Fukuoka", category: "sight", name: "太宰府天滿宮", nameJa: "太宰府天満宮", area: "太宰府", status: "BACKUP", note: "半日行程候選", mapsUrl: "https://maps.google.com/?q=Dazaifu+Tenmangu" },
    { city: "Fukuoka", category: "sports", name: "MIZUHO PayPay Dome", nameJa: "みずほPayPayドーム福岡", area: "地行濱", status: "AUG 11", note: "唐人町站 3 號出口步行約 15 分", mapsUrl: "https://maps.google.com/?q=MIZUHO+PayPay+Dome+FUKUOKA" },
    { city: "Osaka", category: "shopping", name: "Alpen OSAKA", nameJa: "アルペン大阪", area: "難波", status: "WANT", note: "運動用品候選", mapsUrl: "https://maps.google.com/?q=Alpen+OSAKA" },
    { city: "Osaka", category: "toy", name: "Mandarake Grand Chaos", nameJa: "まんだらけ グランドカオス", area: "日本橋", status: "BACKUP", note: "Ota Road 收藏玩具候選", mapsUrl: "https://maps.google.com/?q=Mandarake+Grand+Chaos+Osaka" },
    { city: "Osaka", category: "toy", name: "Joshin Super Kids Land", nameJa: "ジョーシン スーパーキッズランド本店", area: "日本橋", status: "WANT", note: "模型與玩具", mapsUrl: "https://maps.google.com/?q=Joshin+Super+Kids+Land+Osaka" },
    { city: "Osaka", category: "toy", name: "Tamashii Spot Osaka", nameJa: "TAMASHII SPOT OSAKA", area: "日本橋", status: "BACKUP", note: "Ota Road 候選", mapsUrl: "https://maps.google.com/?q=TAMASHII+SPOT+OSAKA" },
    { city: "Osaka", category: "sight", name: "萬博紀念公園", nameJa: "万博記念公園", area: "吹田", status: "AUG 14·16", note: "Summer Sonic Osaka 會場", mapsUrl: "https://maps.google.com/?q=Expo+70+Commemorative+Park" },
    { city: "Kobe", category: "food", name: "神戶牛排 Ishida 本店", nameJa: "神戸牛すてーき Ishida. 本店", area: "三宮", status: "RESERVE", note: "8/17 12:00，尚未訂位", mapsUrl: "https://maps.google.com/?q=Kobe+Beef+Steak+Ishida+Main+Shop" }
  ],
  flights: [
    {
      route: "TPE → FUK",
      from: "Taipei",
      to: "Fukuoka",
      departure: "15:10",
      arrival: "18:15",
      date: "2026-08-09",
      flightNumber: "EVA AIR · BR（航班號待補）",
      terminal: "待確認"
    },
    {
      route: "TPE → KIX",
      from: "Taipei",
      to: "Osaka",
      departure: "16:25",
      arrival: "20:15",
      date: "2026-08-12",
      flightNumber: "TIGERAIR TAIWAN · IT212",
      terminal: "TPE T1 → KIX T1",
      note: "同行者星期三抵達大阪的航班。"
    },
    {
      route: "UKB → TPE",
      from: "Kobe",
      to: "Taipei",
      departure: "19:00",
      arrival: "20:55",
      date: "2026-08-17",
      flightNumber: "EVA AIR · BR175",
      terminal: "UKB T2 → TPE T2",
      note: "回程兩人一起搭乘同一班飛機返回台北。"
    }
  ],
  hotels: [
    {
      city: "Fukuoka",
      name: "西鐵飯店 CROOM 博多祇園 櫛田神社前",
      nameEn: "NISHITETSU HOTEL CROOM HAKATA GION KUSHIDA SHRINE",
      address: "福岡市博多區祇園／櫛田神社前站步行 2–3 分",
      stay: "AUG 09 — AUG 12 · 3 NIGHTS",
      checkIn: "15:00–26:00",
      checkOut: "11:00",
      note: "8/9 預計 19:40–19:50 抵達。",
      mapsUrl: "https://maps.google.com/?q=Nishitetsu+Hotel+Croom+Hakata+Gion+Kushida+Shrine"
    },
    {
      city: "Osaka",
      name: "大阪梅田 Intergate 飯店",
      nameEn: "HOTEL INTERGATE OSAKA UMEDA",
      address: "大阪站步行約 5–10 分",
      stay: "AUG 12 — AUG 17 · 5 NIGHTS",
      checkIn: "15:00–24:00",
      checkOut: "11:00",
      note: "豪華特大雙人床禁菸房，2 位成人、不含餐；可使用免費 Lounge 服務。",
      mapsUrl: "https://maps.google.com/?q=Hotel+Intergate+Osaka+Umeda"
    }
  ],
  notes: [
    "8/11 福岡 SoftBank HAWKS 開賽時間尚未記錄，需在出發前補上。",
    "8/12 博多至新大阪的新幹線車次與座位尚未確定；8/7–8/16 NOZOMI 全車指定席，需預先訂位。",
    "Summer Sonic 大阪行程為 8/14 與 8/16；兩天皆預計 08:45 離開飯店，會場 10:00 開放、11:00 開演。",
    "8/17 神戶牛排 Ishida 本店 12:00 午餐尚未訂位。",
    "8/17 三宮至神戶機場第 2 航廈的交通與出發時間尚待補齊。"
  ],
  usefulLinks: [
    { label: "Summer Sonic 官方網站", url: "https://www.summersonic.com/" },
    { label: "Ishida 本店", url: "https://www.kobe-ishidaya.com/shop/steak_honten" },
    { label: "Ishida 線上訂位", url: "https://www.kobe-ishidaya.com/booking" },
    { label: "日本氣象廳", url: "https://www.jma.go.jp/" }
  ]
};

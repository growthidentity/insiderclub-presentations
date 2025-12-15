// Market Localization System for Crypque & Mobicryp Presentation
// Supports: Thailand (THB), Philippines (PHP), Europe (EUR), USA (USD)

window.MarketLocalization = {
    // Current market setting
    currentMarket: 'thailand',

    // Currency rates (EUR as base)
    currencyRates: {
        europe: { symbol: '€', code: 'EUR', rate: 1, name: 'Euro' },
        thailand: { symbol: '฿', code: 'THB', rate: 38, name: 'Thai Baht' },
        philippines: { symbol: '₱', code: 'PHP', rate: 62, name: 'Philippine Peso' },
        usa: { symbol: '$', code: 'USD', rate: 1.08, name: 'US Dollar' }
    },

    // Complete Thai translations for all slides
    thaiTranslations: {
        // === SLIDE 1 - Welcome ===
        'Hello everyone!': 'สวัสดีทุกคน!',
        'Thank you for being here today': 'ขอบคุณที่มาในวันนี้',
        'I will tell you today:': 'วันนี้ฉันจะบอกคุณ:',
        'How to grow money without complex trading': 'วิธีเพิ่มเงินโดยไม่ต้องเทรดที่ซับซ้อน',
        'Without charts and daily risk': 'ไม่ต้องดูกราฟและความเสี่ยงรายวัน',
        'Simple, clear and understandable approach': 'วิธีการที่เรียบง่าย ชัดเจน และเข้าใจง่าย',
        'Important Note': 'หมายเหตุสำคัญ',
        'This is not financial advice': 'นี่ไม่ใช่คำแนะนำทางการเงิน',
        'WELCOME': 'ยินดีต้อนรับ',

        // === SLIDE 2 - My Role ===
        'MY ROLE': 'บทบาทของฉัน',
        'My Role Today': 'บทบาทของฉันในวันนี้',
        "I Will Give You:": 'ฉันจะให้คุณ:',
        "What I don't do:": 'สิ่งที่ฉันไม่ทำ:',
        'Clear understanding of the company': 'ความเข้าใจที่ชัดเจนเกี่ยวกับบริษัท',
        'How they generate revenue': 'วิธีที่พวกเขาสร้างรายได้',
        'What are the opportunities': 'โอกาสมีอะไรบ้าง',
        'What are the risks': 'ความเสี่ยงมีอะไรบ้าง',
        'How to make your own decision': 'วิธีตัดสินใจด้วยตัวเอง',
        "I don't persuade": 'ฉันไม่ชักชวน',
        "I don't sell anything": 'ฉันไม่ขายอะไร',
        "I don't offer packages": 'ฉันไม่เสนอแพ็คเกจ',
        "I don't rush decisions": 'ฉันไม่เร่งตัดสินใจ',

        // === SLIDE 3 - Company Background ===
        'COMPANY BACKGROUND': 'ประวัติบริษัท',
        'Five Years of Real Business': 'ห้าปีของธุรกิจจริง',
        'The company operates with real offices, employees and activities': 'บริษัทดำเนินงานด้วยสำนักงานจริง พนักงาน และกิจกรรม',
        'Years in Operation': 'ปีในการดำเนินงาน',
        'Clients Globally': 'ลูกค้าทั่วโลก',
        'Employees': 'พนักงาน',
        'Real Estate Portfolio': 'พอร์ตอสังหาริมทรัพย์',

        // === SLIDE 4 - Founders ===
        'FOUNDERS': 'ผู้ก่อตั้ง',
        'THE TEAM BEHIND YOU': 'ทีมงานที่อยู่เบื้องหลัง',
        'Experienced leaders dedicated to your success': 'ผู้นำที่มีประสบการณ์อุทิศตนเพื่อความสำเร็จของคุณ',
        'Co-Founder': 'ผู้ร่วมก่อตั้ง',
        'CEO': 'ซีอีโอ',
        'COO': 'ซีโอโอ',

        // === SLIDE 5 - Ecosystem ===
        'ECOSYSTEM': 'ระบบนิเวศ',
        'CRYPQUE ECOSYSTEM': 'ระบบนิเวศ CRYPQUE',
        'Diverse Product Family and Services': 'ครอบครัวผลิตภัณฑ์และบริการที่หลากหลาย',
        'Investment Platform': 'แพลตฟอร์มการลงทุน',
        'Educational Platform': 'แพลตฟอร์มการศึกษา',
        'Insurance': 'ประกันภัย',
        'Crypto Exchange': 'ตลาดคริปโต',
        'Financial Services': 'บริการทางการเงิน',

        // === SLIDE 6 - Income Sources ===
        'INCOME SOURCES': 'แหล่งรายได้',
        'Where Does Company Revenue Come From?': 'รายได้บริษัทมาจากไหน?',
        'Three Strong Revenue Streams': 'แหล่งรายได้ที่แข็งแกร่งสามแหล่ง',
        'Arbitrage': 'อาร์บิทราจ',
        'Diversification': 'การกระจายความเสี่ยง',
        'Crypto Research': 'การวิจัยคริปโต',
        'of Revenue': 'ของรายได้',

        // === SLIDE 7 - Arbitrage ===
        'ARBITRAGE': 'อาร์บิทราจ',
        'What is Arbitrage?': 'อาร์บิทราจคืออะไร?',
        "Company's Main Activity - 50% of Revenue": 'กิจกรรมหลักของบริษัท - 50% ของรายได้',
        'Arbitrage Means:': 'อาร์บิทราจหมายถึง:',
        'Buying currency/crypto in one place cheaper': 'ซื้อสกุลเงิน/คริปโตในที่หนึ่งราคาถูกกว่า',
        'and selling in another for more': 'และขายในที่อื่นในราคาที่สูงกว่า',
        'Like buying gold in Dubai and selling in Europe at higher price': 'เหมือนซื้อทองในดูไบและขายในยุโรปในราคาที่สูงกว่า',
        'BUY LOW': 'ซื้อต่ำ',
        'SELL HIGH': 'ขายสูง',

        // === SLIDE 8 - Price Differences ===
        'PRICE DIFFERENCES': 'ความแตกต่างของราคา',
        'USDT Price Differences': 'ความแตกต่างของราคา USDT',
        'Illustrative example - price differences between countries': 'ตัวอย่างประกอบ - ความแตกต่างของราคาระหว่างประเทศ',
        'Nigeria': 'ไนจีเรีย',
        'Pakistan': 'ปากีสถาน',
        'Vietnam': 'เวียดนาม',
        'Europe': 'ยุโรป',
        'Spread Opportunity': 'โอกาสในการทำกำไร',
        'COUNTRY': 'ประเทศ',
        'USDT PRICE': 'ราคา USDT',
        'DIFFERENCE': 'ความแตกต่าง',
        'Buy in Dubai $1.00 → Sell in Bangladesh $1.15 = 15% profit': 'ซื้อในดูไบ $1.00 → ขายในบังคลาเทศ $1.15 = กำไร 15%',
        'Repeat this daily with large volumes = stable income': 'ทำซ้ำทุกวันด้วยปริมาณมาก = รายได้มั่นคง',
        '*Illustrative example, actual prices may vary': '*ตัวอย่างประกอบ ราคาจริงอาจแตกต่าง',

        // === SLIDE 9 - Profit Generation ===
        'PROFIT GENERATION': 'การสร้างกำไร',
        'How Is Profit Generated?': 'กำไรสร้างขึ้นอย่างไร?',
        'Buy in large quantities at lower price': 'ซื้อจำนวนมากในราคาต่ำกว่า',
        'Sell at higher price in another country': 'ขายในราคาที่สูงกว่าในประเทศอื่น',
        'Earn 0.5-8% difference': 'ได้รับส่วนต่าง 0.5-8%',
        'Repeated every day': 'ทำซ้ำทุกวัน',
        'Average Profit Per Cycle': 'กำไรเฉลี่ยต่อรอบ',
        'Transactions Per Month': 'ธุรกรรมต่อเดือน',
        'Monthly Returns': 'ผลตอบแทนรายเดือน',
        'Stable': 'มั่นคง',
        'The Process': 'กระบวนการ',
        'The Result': 'ผลลัพธ์',
        'Reason for Stability:': 'เหตุผลที่มั่นคง:',
        "Income doesn't depend on crypto market rise or stock exchange.": 'รายได้ไม่ขึ้นอยู่กับการขึ้นของตลาดคริปโตหรือตลาดหุ้น',
        'Income comes from business, not recruitment.': 'รายได้มาจากธุรกิจ ไม่ใช่การชวนคน',

        // === SLIDE 10 - Other Revenue ===
        'OTHER REVENUE STREAMS': 'แหล่งรายได้อื่นๆ',
        'Other Revenue Streams (50%)': 'แหล่งรายได้อื่นๆ (50%)',
        'Besides arbitrage, there are two more important income sources': 'นอกจากอาร์บิทราจ ยังมีแหล่งรายได้สำคัญอีกสองแหล่ง',
        'Crypto Research (20%)': 'การวิจัยคริปโต (20%)',
        'Diversification (30%)': 'การกระจายความเสี่ยง (30%)',
        'Professional analysis team': 'ทีมวิเคราะห์มืออาชีพ',
        'Market timing strategies': 'กลยุทธ์การจับจังหวะตลาด',
        'Token research & selection': 'การวิจัยและเลือกโทเค็น',
        'Real estate investments': 'การลงทุนอสังหาริมทรัพย์',
        'Traditional investments': 'การลงทุนแบบดั้งเดิม',
        'Business ventures': 'ธุรกิจต่างๆ',

        // === SLIDE 11 - Investor Earnings ===
        'INVESTOR EARNINGS': 'รายได้นักลงทุน',
        'How The Investor Earns': 'นักลงทุนได้รับผลตอบแทนอย่างไร',
        'Investor puts their money to work': 'นักลงทุนนำเงินไปทำงาน',
        'Company uses for business': 'บริษัทใช้เพื่อธุรกิจ',
        'Profit is generated': 'เกิดกำไร',
        'Investor gets their share': 'นักลงทุนได้รับส่วนแบ่ง',
        'Max 2.5× return': 'ผลตอบแทนสูงสุด 2.5 เท่า',
        'Average Monthly Return': 'ผลตอบแทนเฉลี่ยต่อเดือน',
        'Maximum Return': 'ผลตอบแทนสูงสุด',
        'Payout (min $10)': 'จ่าย (ขั้นต่ำ $10)',
        'Every day': 'ทุกวัน',
        'Income comes from real business, not from recruiting people': 'รายได้มาจากธุรกิจจริง ไม่ใช่จากการชวนคน',
        'The Flow': 'ขั้นตอน',
        'Your Investment': 'การลงทุนของคุณ',
        'Company Activities': 'กิจกรรมบริษัท',
        'Revenue Generated': 'รายได้ที่สร้างขึ้น',
        'Your Returns': 'ผลตอบแทนของคุณ',

        // === SLIDE 12 - Fee Structure ===
        'FEE STRUCTURE': 'โครงสร้างค่าธรรมเนียม',
        'Understanding The Costs': 'ทำความเข้าใจค่าใช้จ่าย',
        'Hub Fee': 'ค่าธรรมเนียม Hub',
        'One-time platform access': 'การเข้าถึงแพลตฟอร์มครั้งเดียว',
        'Withdrawal Fee': 'ค่าธรรมเนียมถอน',
        'Per withdrawal': 'ต่อการถอน',

        // === SLIDE 13 - Calculator ===
        'INVESTMENT CALCULATOR': 'เครื่องคำนวณการลงทุน',
        'Total Investment': 'การลงทุนทั้งหมด',
        'Hub (contract)': 'Hub (สัญญา)',
        'Platform access': 'การเข้าถึงแพลตฟอร์ม',
        'Working capital': 'เงินทุนหมุนเวียน',
        'This earns returns': 'ได้รับผลตอบแทน',
        'TOTAL IN': 'รวมเข้า',
        'Returns (25 months)': 'ผลตอบแทน (25 เดือน)',
        'Gross return': 'ผลตอบแทนรวม',
        'Withdrawal fee': 'ค่าธรรมเนียมถอน',
        'NET RETURN': 'ผลตอบแทนสุทธิ',
        'Net Profit': 'กำไรสุทธิ',
        'Return on Investment': 'ผลตอบแทนจากการลงทุน',
        'Monthly Average': 'ค่าเฉลี่ยรายเดือน',
        'Drag slider to calculate': 'เลื่อนแถบเพื่อคำนวณ',
        'Calculate Your Returns': 'คำนวณผลตอบแทนของคุณ',

        // === SLIDE 14 - Wealth Multiplication ===
        'WEALTH MULTIPLICATION': 'การเพิ่มความมั่งคั่ง',
        'Wealth Multiplication Mindset': 'แนวคิดการเพิ่มความมั่งคั่ง',
        'If you have': 'ถ้าคุณมี',
        'What do you do?': 'คุณจะทำอย่างไร?',
        'The Normal Way': 'วิธีปกติ',
        'The Multiplication Way': 'วิธีการเพิ่มความมั่งคั่ง',
        'You have:': 'คุณมี:',
        'Spend': 'ใช้จ่าย',
        'per month': 'ต่อเดือน',
        'After': 'หลังจาก',
        'months': 'เดือน',
        'left': 'เหลือ',
        'Money is gone forever': 'เงินหายไปตลอดกาล',
        'Put it in a contract to grow': 'นำไปลงทุนให้เติบโต',
        'INVESTMENT': 'การลงทุน',
        'PAYOUT': 'การจ่าย',
        'NET PROFIT': 'กำไรสุทธิ',
        'Total': 'รวม',
        'Profit Can Be Reinvested Into:': 'กำไรสามารถนำไปลงทุนต่อใน:',
        'Crypto': 'คริปโต',
        'Gold & Silver': 'ทองและเงิน',
        'Stocks': 'หุ้น',
        'Real Estate': 'อสังหาริมทรัพย์',
        'Money works for you, not you for money!': 'เงินทำงานให้คุณ ไม่ใช่คุณทำงานให้เงิน!',
        'View Detailed 25-Month Analysis': 'ดูการวิเคราะห์รายละเอียด 25 เดือน',

        // === SLIDE 15 - Morocco Trip ===
        'INCENTIVE TRIP': 'รางวัลทริป',
        'AFRICA / MOROCCO': 'แอฟริกา / โมร็อกโก',
        'Exclusive Trip With The Founders': 'ทริปพิเศษกับผู้ก่อตั้ง',
        'Four days with the company founders': 'สี่วันกับผู้ก่อตั้งบริษัท',
        "luxury program and Morocco's magical atmosphere": 'โปรแกรมหรูและบรรยากาศมหัศจรรย์ของโมร็อกโก',
        'FREE TRIP FOR INVESTORS': 'ทริปฟรีสำหรับนักลงทุน',
        'Invest at least': 'ลงทุนอย่างน้อย',
        '$7,800': '฿270,000',
        '(~6,710 EUR)': '(~$7,800)',
        '13-17 MARCH 2026': '13-17 มีนาคม 2026',
        'Qualify for FREE trip!': 'มีสิทธิ์ได้ทริปฟรี!',
        'This is an incentive, not travel expense - your capital stays 100% at work': 'นี่คือรางวัลจูงใจ ไม่ใช่ค่าใช้จ่ายในการเดินทาง - เงินทุนของคุณทำงาน 100%',
        'Flight Tickets': 'ตั๋วเครื่องบิน',
        'Luxury Hotel': 'โรงแรมหรู',
        'Founders Present': 'ผู้ก่อตั้งมาร่วม',
        'All Included': 'รวมทุกอย่าง',

        // === SLIDE 16 - Morocco Experience ===
        'MOROCCO EXPERIENCE': 'ประสบการณ์โมร็อกโก',
        'Exclusive 5-Day Adventure': 'การผจญภัย 5 วันพิเศษ',
        'Morocco, Africa': 'โมร็อกโก แอฟริกา',
        'A magical land where tradition meets luxury': 'ดินแดนมหัศจรรย์ที่ประเพณีพบกับความหรูหรา',
        'Culture & History': 'วัฒนธรรมและประวัติศาสตร์',
        'Medinas and palaces': 'เมดินาและพระราชวัง',
        'Moroccan Cuisine': 'อาหารโมร็อกโก',
        'Tajine & couscous': 'ทาจีนและคูสคูส',
        'Desert & Nature': 'ทะเลทรายและธรรมชาติ',
        'Near Sahara': 'ใกล้ซาฮารา',
        'Spa & Hammam': 'สปาและฮัมมัม',
        'Traditional': 'แบบดั้งเดิม',
        'WHAT TO EXPECT': 'สิ่งที่คาดหวังได้',
        'Luxury accommodation throughout the trip': 'ที่พักหรูตลอดการเดินทาง',
        'All meals and transport covered': 'อาหารและการเดินทางทั้งหมดรวมอยู่',
        'Excursions and sightseeing': 'ทัศนศึกษาและชมสถานที่',
        'Networking with company founders': 'สร้างเครือข่ายกับผู้ก่อตั้งบริษัท',
        'Exclusive team experience': 'ประสบการณ์ทีมพิเศษ',
        'Unforgettable adventure in Africa!': 'การผจญภัยที่ลืมไม่ลงในแอฟริกา!',

        // === SLIDE 17 - Why Morocco ===
        'WHY MOROCCO?': 'ทำไมโมร็อกโก?',
        'Why Is This Trip Special?': 'ทำไมทริปนี้พิเศษ?',
        'Meeting company leaders in person': 'พบผู้นำบริษัทด้วยตัวเอง',
        'Networking': 'สร้างเครือข่าย',
        'Connecting with other investors worldwide': 'เชื่อมต่อกับนักลงทุนอื่นๆ ทั่วโลก',
        'Recognition': 'การยอมรับ',
        'Incentive trip for top team members': 'ทริปจูงใจสำหรับสมาชิกทีมชั้นนำ',
        'Inspiration': 'แรงบันดาลใจ',
        'New ideas and motivation going forward': 'ความคิดใหม่และแรงจูงใจสำหรับอนาคต',
        'Experiences': 'ประสบการณ์',
        'Unforgettable adventure in exotic Africa': 'การผจญภัยที่ลืมไม่ลงในแอฟริกาที่แปลกใหม่',
        'Trust': 'ความไว้วางใจ',
        'Stronger connection with team and company': 'ความเชื่อมต่อที่แข็งแกร่งกับทีมและบริษัท',
        'This is an exclusive incentive trip': 'นี่คือทริปจูงใจพิเศษ',
        '— a reward for those who have taken steps for their future!': '— รางวัลสำหรับผู้ที่ก้าวเดินเพื่ออนาคต!',

        // === SLIDE 18 - Closing Words ===
        'Doubt is normal.': 'ความสงสัยเป็นเรื่องปกติ',
        'When knowledge comes, the decision is simple:': 'เมื่อความรู้มา การตัดสินใจเป็นเรื่องง่าย:',
        'yes or no.': 'ใช่หรือไม่',
        'You now know what opportunity this is.': 'ตอนนี้คุณรู้แล้วว่านี่คือโอกาสอะไร',

        // === SLIDE 16 - Risks ===
        'RISKS': 'ความเสี่ยง',
        'Understanding The Risks': 'ทำความเข้าใจความเสี่ยง',
        'Market Risk': 'ความเสี่ยงตลาด',
        'Regulatory Risk': 'ความเสี่ยงด้านกฎระเบียบ',
        'Platform Risk': 'ความเสี่ยงแพลตฟอร์ม',
        'Crypto markets can be volatile': 'ตลาดคริปโตมีความผันผวน',
        'Regulations may change': 'กฎระเบียบอาจเปลี่ยนแปลง',
        'Technical issues possible': 'อาจมีปัญหาทางเทคนิค',
        'Only invest what you can afford to lose': 'ลงทุนเฉพาะเงินที่คุณสามารถเสียได้',

        // === SLIDE 17 - Closing Words ===
        'CLOSING WORDS': 'คำปิดท้าย',
        'Closing Words': 'คำปิดท้าย',
        'If This Resonated': 'ถ้าสนใจ',
        'If Not For You': 'ถ้าไม่ใช่สำหรับคุณ',
        'We can continue.': 'เราสามารถดำเนินการต่อได้',
        "Let's talk details.": 'มาคุยรายละเอียดกัน',
        "Let's look at options.": 'มาดูตัวเลือกกัน',
        'Totally okay.': 'ไม่เป็นไร',
        'Thanks for listening.': 'ขอบคุณที่รับฟัง',
        'Good luck on your path!': 'ขอให้โชคดี!',
        'THANK YOU FOR LISTENING!': 'ขอบคุณที่รับฟัง!',

        // === SLIDE 18 - Next Steps ===
        'NEXT STEPS': 'ขั้นตอนต่อไป',
        'What Happens Next?': 'ต่อไปเป็นอย่างไร?',
        'Simple 4-step process to get started': 'ขั้นตอนง่ายๆ 4 ขั้นตอนในการเริ่มต้น',
        'Contact': 'ติดต่อ',
        'Get in touch and ask questions': 'ติดต่อและถามคำถาม',
        'Registration': 'ลงทะเบียน',
        'Simple 5-minute registration': 'ลงทะเบียนง่ายๆ 5 นาที',
        'Contract & Deposit': 'สัญญาและฝากเงิน',
        'Choose HUB amount and activate': 'เลือกจำนวน HUB และเปิดใช้งาน',
        'Earnings Begin': 'เริ่มรับรายได้',
        'Money starts working 24/7': 'เงินเริ่มทำงาน 24/7',
        'Here Today?': 'อยู่ที่นี่วันนี้?',
        'Need Time To Think?': 'ต้องการเวลาคิด?',
        'Ask all your questions': 'ถามคำถามทั้งหมดของคุณ',
        'Clarify details': 'ชี้แจงรายละเอียด',
        'Get help with registration': 'รับความช่วยเหลือในการลงทะเบียน',
        'Choose suitable package': 'เลือกแพ็คเกจที่เหมาะสม',
        'Take your time': 'ใช้เวลาของคุณ',
        'Research more info': 'ค้นหาข้อมูลเพิ่มเติม',
        'Get in touch later': 'ติดต่อภายหลัง',
        'Info stays available': 'ข้อมูลยังคงมีอยู่',
        "Questions? Let's talk now or later!": 'มีคำถาม? มาคุยกันตอนนี้หรือทีหลัง!',

        // === Common Words ===
        'or': 'หรือ',
        'and': 'และ',
        'the': '',
        'of': 'ของ',
        'in': 'ใน',
        'to': 'ไป',
        'for': 'สำหรับ',
        'with': 'กับ',
        'from': 'จาก',
        'by': 'โดย',
        'on': 'บน',
        'at': 'ที่',
        'is': 'คือ',
        'are': 'คือ',
        'was': 'คือ',
        'were': 'คือ',
        'be': 'เป็น',
        'been': 'เป็น',
        'being': 'กำลัง',
        'have': 'มี',
        'has': 'มี',
        'had': 'มี',
        'do': 'ทำ',
        'does': 'ทำ',
        'did': 'ทำ',
        'will': 'จะ',
        'would': 'จะ',
        'could': 'สามารถ',
        'should': 'ควร',
        'may': 'อาจ',
        'might': 'อาจ',
        'must': 'ต้อง',
        'can': 'สามารถ',
        'not': 'ไม่',
        'your': 'ของคุณ',
        'you': 'คุณ',
        'we': 'เรา',
        'they': 'พวกเขา',
        'them': 'พวกเขา',
        'their': 'ของพวกเขา',
        'this': 'นี้',
        'that': 'นั้น',
        'these': 'เหล่านี้',
        'those': 'เหล่านั้น',
        'what': 'อะไร',
        'which': 'ซึ่ง',
        'who': 'ใคร',
        'whom': 'ใคร',
        'where': 'ที่ไหน',
        'when': 'เมื่อไร',
        'why': 'ทำไม',
        'how': 'อย่างไร'
    },

    // Initialize the localization system
    init: function() {
        const savedMarket = localStorage.getItem('selectedMarket');
        if (savedMarket) {
            this.currentMarket = savedMarket;
        }
        // Apply translations on init
        setTimeout(() => {
            this.applyFullLocalization();
        }, 100);
    },

    // Set market and update display
    setMarket: function(market) {
        this.currentMarket = market;
        localStorage.setItem('selectedMarket', market);
        this.applyFullLocalization();
    },

    // Convert USD to local currency
    convertFromUSD: function(usdAmount) {
        const rate = this.currencyRates[this.currentMarket];
        // Convert USD to local currency
        // For EUR: USD * 0.92
        // For others: USD * 0.92 * rate
        if (this.currentMarket === 'europe') {
            return Math.round(usdAmount * 0.92);
        } else if (this.currentMarket === 'usa') {
            return Math.round(usdAmount);
        } else {
            return Math.round(usdAmount * 0.92 * rate.rate);
        }
    },

    // Convert EUR to local currency
    convertFromEUR: function(eurAmount) {
        const rate = this.currencyRates[this.currentMarket];
        if (this.currentMarket === 'usa') {
            return Math.round(eurAmount * 1.08);
        }
        return Math.round(eurAmount * rate.rate);
    },

    // Format currency with symbol
    formatCurrency: function(amount, fromCurrency = 'USD') {
        const rate = this.currencyRates[this.currentMarket];
        let localAmount;

        if (fromCurrency === 'EUR') {
            localAmount = this.convertFromEUR(amount);
        } else {
            localAmount = this.convertFromUSD(amount);
        }

        return rate.symbol + localAmount.toLocaleString();
    },

    // Get currency info for current market
    getCurrencyInfo: function() {
        return this.currencyRates[this.currentMarket];
    },

    // Create dual-language text (Thai primary, English smaller below)
    createDualText: function(thai, english, primaryClass = '', secondaryClass = '') {
        if (this.currentMarket !== 'thailand') {
            return english;
        }
        return `<span class="thai-primary ${primaryClass}" style="display: block;">${thai}</span><span class="english-secondary ${secondaryClass}" style="display: block; font-size: 0.65em; opacity: 0.7; font-style: italic; margin-top: 2px;">${english}</span>`;
    },

    // Translate a single text string
    translate: function(text) {
        if (this.currentMarket !== 'thailand') {
            return text;
        }

        const thai = this.thaiTranslations[text];
        if (thai) {
            return this.createDualText(thai, text);
        }
        return text;
    },

    // Apply full localization to all slides
    applyFullLocalization: function() {
        console.log('Applying localization for market:', this.currentMarket);

        // Update currency displays
        this.updateAllCurrencies();

        // If Thailand, apply Thai translations
        if (this.currentMarket === 'thailand') {
            this.applyThaiTranslations();
        } else {
            // Reset to English
            this.resetToEnglish();
        }

        // Update calculator if it exists
        if (typeof window.updateCalculator === 'function') {
            window.updateCalculator();
        }

        // Update leverage slide if it exists
        if (typeof window.updateLeverageSlide === 'function') {
            window.updateLeverageSlide();
        }
    },

    // Apply Thai translations to all elements with data-translate attribute
    applyThaiTranslations: function() {
        // Find all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            const thai = this.thaiTranslations[key];
            if (thai) {
                el.innerHTML = this.createDualText(thai, key);
            }
        });

        // Also translate elements with class 'translatable'
        document.querySelectorAll('.translatable').forEach(el => {
            const originalText = el.getAttribute('data-original') || el.textContent.trim();
            el.setAttribute('data-original', originalText);
            const thai = this.thaiTranslations[originalText];
            if (thai) {
                el.innerHTML = this.createDualText(thai, originalText);
            }
        });
    },

    // Reset all translations to English
    resetToEnglish: function() {
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            el.innerHTML = key;
        });

        document.querySelectorAll('.translatable').forEach(el => {
            const originalText = el.getAttribute('data-original');
            if (originalText) {
                el.textContent = originalText;
            }
        });
    },

    // Update all currency displays on the page
    updateAllCurrencies: function() {
        const rate = this.currencyRates[this.currentMarket];

        // Update elements with data-currency-usd attribute
        document.querySelectorAll('[data-currency-usd]').forEach(el => {
            const usdAmount = parseFloat(el.getAttribute('data-currency-usd'));
            const localAmount = this.convertFromUSD(usdAmount);
            el.textContent = rate.symbol + localAmount.toLocaleString() + ' ' + rate.code;
        });

        // Update elements with data-currency-eur attribute
        document.querySelectorAll('[data-currency-eur]').forEach(el => {
            const eurAmount = parseFloat(el.getAttribute('data-currency-eur'));
            const localAmount = this.convertFromEUR(eurAmount);
            el.textContent = rate.symbol + localAmount.toLocaleString() + ' ' + rate.code;
        });

        // Update currency code indicators
        document.querySelectorAll('.currency-code').forEach(el => {
            el.textContent = rate.code;
        });

        // Update currency symbols
        document.querySelectorAll('.currency-symbol').forEach(el => {
            el.textContent = rate.symbol;
        });
    }
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    window.MarketLocalization.init();
});

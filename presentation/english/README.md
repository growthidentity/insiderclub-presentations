# Mobicryp Presentation - Modular Structure

## Folder Structure

```
MOBICRYP PRESENTATION EN/
├── presentation.html      ← READY PRESENTATION (open this in browser!)
├── build.sh              ← Build presentation after changes
├── slides/               ← 20 separate slide files (EDIT THESE!)
│   ├── slide-01.html
│   ├── slide-02.html
│   └── ...
├── css/
│   └── styles.css        ← All styles
├── js/
│   └── script.js         ← Navigation and timer
└── LOGOS/                ← Images
```

## How to Use

### 1. View Presentation
Open `presentation.html` in browser

### 2. Edit a Slide
For example, open `slides/slide-16.html` and make changes

### 3. Rebuild
Run in Terminal:
```bash
cd "/Users/vambolatullus/Desktop/MOBICRYP PRESENTATION EN"
./build.sh
```

Or simply double-click the `build.sh` file in Finder!

### 4. View Result
Open `presentation.html` again in browser (refresh)

## Slide List

- **slide-01.html** - Title Slide
- **slide-02.html** - Greeting
- **slide-03.html** - My Role
- **slide-04.html** - Statistics
- **slide-05.html** - Founder 1 (Dr. Abhishek)
- **slide-06.html** - Founder 2 (Ankit)
- **slide-07.html** - Founder 3 (Sidharth)
- **slide-08.html** - Products (Ecosystem)
- **slide-09.html** - Revenue Stream
- **slide-10.html** - What is Arbitrage
- **slide-11.html** - Arbitrage Table
- **slide-12.html** - How Profit is Generated
- **slide-13.html** - Other Revenue Streams
- **slide-14.html** - How Investor Earns
- **slide-15.html** - Contract Calculator
- **slide-16.html** - Wealth Multiplication
- **slide-17.html** - Dubai Trip
- **slide-18.html** - Why Dubai
- **slide-19.html** - Closing Words
- **slide-20.html** - Next Steps

## Working with Claude

Now you can say:
- "Edit slide 15" → Claude edits only `slides/slide-15.html`
- "Add text to slide 16" → Claude changes only `slides/slide-16.html`
- After changes, run `./build.sh` to build `presentation.html`

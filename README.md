# 📰 Next.js News Portal – LiveHindustan Inspired Front Page

A fully responsive and SEO-friendly **News & Media Front Page** built using **Next.js**, designed as a simplified clone of LiveHindustan.  
This project demonstrates layout design, component architecture, routing, ISR data fetching, filtering, search, and production-ready UI.

---

# 📌 Part A – Features & Implementation

## 🚀 Features

### ✔ Core Features
- Dynamic routing for each news article (`/articles/[slug]`)
- Category filtering (All, Sports, National, Business, Lifestyle, Trending)
- Search bar with client-side filtering
- Pagination (client-side)
- Breaking News auto-scrolling ticker
- Trending section based on views/isTrending
- Article read-time calculation
- Reusable UI components
- Responsive layout (mobile + desktop)

### 🎨 UI Features
- Modern article cards with hero images
- Trending 🔥 badge
- Sidebar layout with top stories
- Clean typography (TailwindCSS)
- Gradient overlays for hero images
- Dark text for readability

### 🔍 SEO Features
- Dynamic `<title>` & meta description
- OpenGraph metadata
- Twitter cards
- JSON-LD structured data for NewsArticle

---

# 📌 Part B – Explanation & Documentation

## 📝 1. Design Document

### **1.1 Wireframe (Text Description)**

| Header (Logo + Nav) |
| Breaking News Ticker (scrolling) |
| Search Bar |
| Category Buttons (All, Sports, etc.) |
| Main Grid |
| ┌──────────────────────────────┐ ┌───────────────┐ |
| | Main Articles (2-column) | | Sidebar | |
| | Article Cards with images | | Trending | |
| | Summary + Read-time | | Top Stories | |
| └──────────────────────────────┘ └───────────────┘ |
| Footer (optional) |



### **1.2 Layout Decisions**
- **Two-column layout** mirrors real news portals (content + sidebar).
- **Top Stories** placed in the sidebar to highlight important articles.
- **Trending section** shows viral/important content.
- Hero images placed on top of each article card for strong visual context.
- Category chips added for quick filtering.

### **1.3 Data-Fetching Strategy**

Used:

```js
export async function getStaticProps() {
  const articles = getAllArticles();
  return {
    props: { articles },
    revalidate: 60,
  };
}

Why getStaticProps + ISR?

Faster performance due to pre-rendering.

Ideal for semi-static data (mock news).

ISR ensures updates every 60 seconds.

Reduces server cost.

Trade-offs:

Not suitable for real-time news updates.

Requires rebuild delay.


🧩 2. Code Explanation
Components Created
Component	Purpose
Layout	Global wrapper, meta tags, OG tags
Header	Top navigation bar
BreakingTicker	Scrolling breaking news
ArticleCard	Standard and compact news card
Trending	Sidebar trending list
SearchBar	Client-side search
ArticlePage	Full article viewer with dynamic routing


🗂 3. Data Model Structure

Each article follows this schema:
{
  "id": 1,
  "slug": "city-marathon-thousands-running",
  "title": "City Marathon Sees Thousands Running for a Cause",
  "summary": "...",
  "content": "<p>HTML content...</p>",
  "image": "/images/marathon.jpg",
  "publishedAt": "2025-11-22",
  "author": "Aparna",
  "category": "Sports",
  "views": 1200,
  "isTrending": true,
  "readTime": 3
}


🚧 4. Challenges Faced & Solutions
Challenge	Solution
JSON parsing errors	Cleaned file structure & validated JSON
Image not loading	Corrected public folder mapping
Title overlapped with image	Added gradient + white text
Trending logic didn’t work	Added fallback using highest views
Category filtering broke	Refactored filtering conditions
Long titles overflowed	Added Tailwind line-clamp + wrapping
UI inconsistency	Updated typography + spacing

AI helped with suggestions, but required manual corrections.

🚀 5. Improvements for Future

Real API integration (NewsAPI)

Admin dashboard for adding articles

Dark mode support

Comments & reactions

Infinite scrolling

User accounts and login

📌 Part C – Testing & Edge Cases
✔ What happens if an article has no image?

Fallback placeholder image is shown.

✔ What if API returns no articles?

Home page displays:
No articles found.


✔ Long titles?

Titles wrap automatically without breaking layout.

✔ Error states handled:

Missing image → fallback

Missing content → shows summary only

Invalid slug → notFound: true triggers 404 page

Loading → ISR serves last valid page

✔ Tasks completed using AI:

Component boilerplate generation

Styling suggestions

Debugging complex errors

JSON-LD structured data template

README generation

✔ Where AI made mistakes:

Incorrect JSX in ticker

Tailwind class conflicts

JSON formatting errors

Trending logic misunderstood initially

✔ How I corrected AI output:

Manually cleaned JSON

Adjusted filters using useMemo

Added explicit fallback logic

Revised UI spacing & color contrast

✔ Custom modifications I wrote manually:

Trending badge 🔥

Read-time logic

Pagination system

Combined filtering (category + search)

Custom hero card gradient overlay

▶️ Running Locally
npm install
npm run dev

Visit:
👉 http://localhost:3000

📦 Deployment

Easily deploy on Vercel:
vercel deploy



👩‍💻 Author

Aparna Pandey
Frontend Developer • Next.js • UI/UX




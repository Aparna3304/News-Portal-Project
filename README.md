# 📰 Next.js News Portal – LiveHindustan Inspired Front Page

A fully responsive and SEO-friendly **News & Media Front Page** built using **Next.js**, designed as a simplified clone of LiveHindustan.  
This project demonstrates layout design, component architecture, routing, ISR data fetching, filtering, search, and more.

---

## 🚀 Features

### ✅ Core Features
- Dynamic routing for each news article (`/articles/[slug]`)
- Home page with category filtering:
  - Sports, National, Business, Lifestyle, Trending, etc.
- Article search (client-side)
- Pagination for large datasets
- Breaking News ticker (auto-scrolling)
- Trending section based on:
  - `isTrending: true` **or**
  - highest `views`

### 🎨 UI/UX Features
- Responsive layout (mobile + desktop)
- Modern article cards with hero images
- Trending 🔥 badge + Read Time indicator
- Sidebar with Top Stories
- Clean typography via TailwindCSS
- Optimized images using Next.js `<Image>`

### 🔍 SEO Features
- Dynamic `<title>` + meta description
- OpenGraph tags for social media (OG image, title, desc)
- JSON-LD structured data for NewsArticle
- Improved search engine visibility

---

## 🗂 Project Structure

news-portal/
│── pages/
│ ├── index.js # Home page
│ └── articles/[slug].js # Dynamic article page
│
│── components/
│ ├── Layout.js
│ ├── Header.js
│ ├── ArticleCard.js
│ ├── BreakingTicker.js
│ ├── Trending.js
│ └── SearchBar.js
│
│── data/
│ └── articles.json # Mock API data
│
│── lib/
│ └── api.js # Data fetch helpers
│
│── public/images/ # Article images
│── styles/ # Optional global styles
│── README.md
---

## 🔧 Tech Stack

- **Next.js 14+**
- **React**
- **TailwindCSS**
- **Mock JSON API (local data)**
- **Node.js**
- **SEO (OpenGraph + JSON-LD)**

---

## 📡 Data Fetching (ISR)

This project uses **`getStaticProps` with ISR**:

```js
export async function getStaticProps() {
  const articles = getAllArticles();
  return {
    props: { articles },
    revalidate: 60,   // updates every 60 seconds
  };
}

📝 Sample Article Object
{
  "id": 1,
  "slug": "city-marathon-thousands-running",
  "title": "City Marathon Sees Thousands Running for a Cause",
  "summary": "Participants turned out in large numbers this weekend...",
  "content": "<p>Full article content...</p>",
  "image": "/images/marathon.jpg",
  "publishedAt": "2025-11-22",
  "author": "Aparna",
  "category": "Sports",
  "views": 1200,
  "isTrending": true,
  "readTime": 3
}


{
  "id": 1,
  "slug": "city-marathon-thousands-running",
  "title": "City Marathon Sees Thousands Running for a Cause",
  "summary": "Participants turned out in large numbers this weekend...",
  "content": "<p>Full article content...</p>",
  "image": "/images/marathon.jpg",
  "publishedAt": "2025-11-22",
  "author": "Aparna",
  "category": "Sports",
  "views": 1200,
  "isTrending": true,
  "readTime": 3
}



🧪 Edge Case Handling
Scenario	Result
No image	Fallback image is used
No articles	Shows “No articles found”
Long titles	Auto-wrapped with responsive styling
API failure	Graceful message (fallback UI)
Slow loading	Static fallback + ISR rebuild
🧠 Challenges Faced

JSON parsing issues

Image paths not resolving

Ticker overlapping UI

Trending logic conflicts

Layout and spacing issues

✔ Fixes:

Cleaned JSON

Resolved file path mapping

Adjusted z-index & padding

Improved filter logic

Enhanced readability & contrast

🤖 AI Use & Reflection

AI was used for:

Component boilerplate

Debugging errors

Tailwind design suggestions

SEO metadata setup

AI mistakes corrected:

Incorrect JSON formatting

Outdated Next.js routing syntax

Styling inconsistencies

Custom additions I built manually:

Trending badge

Read-time calculation

Pagination

Two-level filtering (search + categories)

Custom sidebar layout

▶️ Running Locally
npm install
npm run dev


App will run at:
👉 http://localhost:3000

📌 Deployment

Supported on Vercel:

vercel deploy

📜 License

This project is open-source and free to use.

🙋‍♀️ Author

Aparna Pandey
Next.js | Frontend Development | UI/UX
GitHub: your_username_here

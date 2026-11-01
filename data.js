// lowpolyeditz media kit — ALL the numbers live here. Edit this file, push, done.
// index.html reads it and draws the page.
window.KIT = {
  updated: "Nov 1, 2026",           // shown in the header and the numbers section
  handle: "@lowpolyeditz",
  email: "lowpolybiz@gmail.com",
  // Social links shown as buttons in the header. Instagram only for now:
  // YouTube and TikTok get added (youtube: "...", tiktok: "...") once Li says they're big enough.
  links: {
    instagram: "https://www.instagram.com/lowpolyeditz/"
  },
  title: "POLY vs. the universe",
  pitch: "3D low-poly shorts where one rule doubles until the universe breaks. POLY, a faceless hero, answers everything with one word. His friend Jamal never stops eating chips.",
  tags: ["60–75 s episodes", "Rendered in 2K at 60 fps", "Instagram · TikTok · YouTube Shorts"],

  // Big stat tiles (Instagram insights)
  stats: [
    { value: "1.65M", label: "views in the last 30 days" },
    { value: "1.1M",  label: "views on the top reel" },
    { value: "65K+",  label: "views on each of the last 7 reels" },
    { value: "+1,991", label: "new followers in 30 days" }
  ],
  // One line under the tiles
  statsNote: "Top reels: <b>32–35 s</b> average watch time · <b>20–25%</b> skip rate · <b>14%</b> share rate, <b>83.7K</b> likes and <b>6.4K</b> saves on the 1.1M reel",

  audience: {
    headline: [
      { value: "93%", label: "men" },
      { value: "66%", label: "aged 18–34" }
    ],
    age: [
      { label: "13–17", pct: 19 },
      { label: "18–24", pct: 35 },
      { label: "25–34", pct: 31 },
      { label: "35+",   pct: 15 }
    ],
    countries: [
      { label: "United States", pct: 21 },
      { label: "India",         pct: 12 },
      { label: "Turkey",        pct: 5 },
      { label: "Indonesia",     pct: 5 }
    ],
    language: "English, 66%"
  },

  // Thumbnails in img/, 348×548 (9:16 crop)
  reels: [
    { img: "img/reel-aura.jpg",    title: "Aura stairs", views: "1.1M" },
    { img: "img/reel-sword.jpg",   title: "Sword",       views: "279K" },
    { img: "img/reel-onemore.jpg", title: "One More",    views: "263K" },
    { img: "img/reel-phonk.jpg",   title: "Phonk",       views: "108K" },
    { img: "img/reel-rizz.jpg",    title: "Rizz",        views: "98.2K" },
    { img: "img/reel-sneeze.jpg",  title: "Sneeze",      views: "73.1K" }
  ],

  // Starting prices, USD
  packages: [
    { name: "In-episode placement", desc: "Your product in the story: Jamal's chips, a rung, a billboard.", price: "from $400" },
    { name: "Dedicated episode",    desc: "A whole episode built around your product.",                     price: "from $900" },
    { name: "End card",             desc: "POLY and Jamal hold your sign at the end.",                      price: "from $150" },
    { name: "Story + link",         desc: "A story with a link sticker. Add it to any deal.",               price: "$50" }
  ],
  packagesNote: "Prefer to pay per view? CPM deals welcome.",
  music: "Music artists: your track as the soundtrack of a full episode, $100–200 per episode or a per-view rate.",

  partner: { name: "Flashloop", note: "code LOW" }
};

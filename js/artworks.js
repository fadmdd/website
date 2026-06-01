// Add your artworks here.
// Each entry has: title, year, and media (array of images/videos).
//
// media types:
//   "image"  — jpg, jpeg, png, webp  →  src: "assets/filename.jpg"
//   "video"  — local mp4/m4v file    →  src: "assets/filename.mp4"
//   "vimeo"  — Vimeo URL, plays as muted ambient loop in the gallery
//
// Optional fields:
//   link       — detail page that opens when the title ↗ is clicked
//   videoLink  — Vimeo URL; shows "full video —" button in bottom right
//   materials  — third line of the bottom-left label
//   dimensions — fourth line of the bottom-left label

const artworks = [
  {
    title: "Performance - upcoming",
    year: "2026",
    link: "performance.html",
    videoLink: "https://vimeo.com/1197444287",
    materials: "",
    dimensions: "",
    media: [
      { type: "video", src: "assets/performance1.m4v" }
    ]
  },
  {
    title: "Fragments",
    year: "2024 - ongoing",
    materials: "",
    dimensions: "",
    media: [
      { type: "image", src: "assets/fragments1.jpg" }
    ]
  },
  {
    title: "beep beep 1 & 2",
    year: "2026",
    link: "performance.html",
    materials: "exhibition curation and light design",
    dimensions: "",
    media: [
      { type: "image", src: "assets/beep beep.jpeg" }
    ]
  },
  {
    title: "work",
    year: "2025",
    videoLink: "https://vimeo.com/1197448185",
    materials: "video",
    dimensions: "",
    media: [
      { type: "vimeo", src: "https://vimeo.com/1197448185" }
    ]
  },
  {
    title: "unfinished thoughts",
    year: "2024",
    materials: "book",
    dimensions: "",
    media: [
      { type: "image", src: "assets/book1.jpg" }
    ]
  },
  {
    title: "concept I",
    year: "2024",
    materials: "text",
    dimensions: "",
    media: [
      { type: "image", src: "assets/gold.jpg" }
    ]
  },
  {
    title: "concept II",
    year: "2024",
    materials: "text",
    dimensions: "",
    media: [
      { type: "image", src: "assets/memorial.jpg" }
    ]
  }
];

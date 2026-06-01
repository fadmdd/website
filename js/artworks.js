// Add your artworks here.
//
// media types:
//   "image"  — jpg, jpeg, png, webp  →  src: "assets/filename.jpg"
//   "video"  — local mp4/m4v file    →  src: "assets/filename.mp4"
//   "vimeo"  — Vimeo URL as ambient gallery panel (opens full video via button)
//
// Optional fields:
//   link       — detail page that opens when the title ↗ is clicked
//   videoLink  — Vimeo URL; merged fullscreen button opens this video
//   materials  — third line of the bottom-left label
//   dimensions — fourth line of the bottom-left label
//   theme      — "bright" makes all overlay text black (for light artworks)
//   bg         — background colour of the artwork panel, e.g. "#fff"

const artworks = [
  {
    title: "existence between bodies",
    year: "2026",
    link: "performance.html",
    videoLink: "https://vimeo.com/1197444287",
    materials: "performance",
    dimensions: "",
    media: [
      { type: "video", src: "assets/performance1.mp4" }
    ]
  },
  {
    title: "Fragments",
    year: "2024 - ongoing",
    materials: "installation",
    dimensions: "12 × 8 cm × 12 cm",
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
    dimensions: "8 cm × 12 cm",
    media: [
      { type: "image", src: "assets/book1.jpg" }
    ]
  },
  {
    title: "concept I",
    year: "2024",
    materials: "text",
    dimensions: "",
    theme: "bright",
    bg: "#fff",
    media: [
      { type: "image", src: "assets/gold.jpg" }
    ]
  },
  {
    title: "concept II",
    year: "2024",
    materials: "text",
    dimensions: "",
    theme: "bright",
    bg: "#fff",
    media: [
      { type: "image", src: "assets/memorial.jpg" }
    ]
  }
];

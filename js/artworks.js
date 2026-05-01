// Add your artworks here.
// Each entry has: title, year, and media (array of images/videos).
// Supported media types: "image" (jpg, png, webp) and "video" (mp4, webm).
// For videos, "poster" is an optional thumbnail shown before the video loads.
// To show multiple images for one artwork, add more items to the media array.
// Place all files in the assets/ folder.
//
// Optional fields:
//   link       — filename of a linked detail page (e.g. "performance.html")
//   materials  — shown as third line in the bottom-left label
//   dimensions — shown as fourth line in the bottom-left label

const artworks = [
  {
    title: "Performance - upcoming",
    year: "2026",
    link: "performance.html",
    materials: "",
    dimensions: "",
    media: [
      { type: "video", src: "assets/performance1.m4v"}
    ]
  },
  {
    title: "Fragments",
    year: "2024 - ongoing",
    materials: "",
    dimensions: "",
    media: [
      { type: "image", src: "assets/fragments1.jpg" },
      { type: "image", src: "assets/fragments2.jpg" },
      { type: "image", src: "assets/fragments3.jpg" }
    ]
  },
  {
    title: "unbeendete Gedanken",
    year: "2024",
    materials: "paper",
    dimensions: " cm by cm",
    media: [
      { type: "image", src: "assets/book1.jpg" }
    ]
  }
];

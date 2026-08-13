// Add your artworks here.
//
// media types:
//   "image"  — jpg, jpeg, png, webp  →  src: "assets/filename.jpg"
//   "video"  — local mp4/m4v file    →  src: "assets/filename.mp4"
//   "bunny"  — Bunny Stream video as ambient gallery panel (autoplays muted,
//              loops, no controls). Needs libraryId + videoId.
//
// Optional fields:
//   link            — detail page that opens when the title ↗ is clicked
//   bunnyLibraryId  — Bunny Stream library id; with bunnyVideoId the merged
//   bunnyVideoId      fullscreen button opens that video with sound + controls
//   materials       — third line of the bottom-left label
//   dimensions      — fourth line of the bottom-left label
//   theme           — "bright" makes all overlay text black (for light artworks)
//   bg              — background colour of the artwork panel, e.g. "#fff"

const artworks = [
  {
    title: "existence between bodies",
    year: "2026",
    subtitle: "with Amina Bassyouni, Çagla Gillis, Meike Kiehl,\nDavid Meier, Helena Röpken, and Moira Schulz",
    bunnyLibraryId: "725887",
    bunnyVideoId: "41e47cf1-f575-4dd8-83c9-4d246b49ee86",
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
    theme: "bright",
    media: [
      { type: "image", src: "assets/fragments/1.jpeg" },
      { type: "image", src: "assets/fragments/2.jpeg" },
      { type: "image", src: "assets/fragments/3.jpeg" },
      { type: "image", src: "assets/fragments/4.jpeg" },
      { type: "image", src: "assets/fragments/5.jpeg" },
      { type: "image", src: "assets/fragments/6.jpeg" },
      { type: "image", src: "assets/fragments/7.jpeg" },
      { type: "image", src: "assets/fragments/8.jpeg" },
      { type: "image", src: "assets/fragments/9.jpeg" },
      { type: "image", src: "assets/fragments/10.jpeg" },
      { type: "image", src: "assets/fragments/11.jpeg" },
      { type: "image", src: "assets/fragments/12.jpeg" }
    ]
  },
  {
    title: "beep beep 1 & 2",
    year: "2026",
    link: "performance.html",
    materials: "exhibition curation and light design",
    dimensions: "",
    media: [
      { type: "image", src: "assets/beep beep/1.jpeg" },
      { type: "image", src: "assets/beep beep/2.jpeg" },
      { type: "image", src: "assets/beep beep/3.jpeg", caption: "Lisa Butzer" },
      { type: "image", src: "assets/beep beep/4.jpeg", caption: "Anna Schmidt" },
      { type: "image", src: "assets/beep beep/5.jpeg", caption: "Sion Sung" },
      { type: "image", src: "assets/beep beep/6.jpeg", caption: "Helena Röpken, and in the background Charlotte Schicketanz" },
      { type: "image", src: "assets/beep beep/7.jpeg", caption: "Honorata Nel Hoffman" }
    ]
  },
  {
    title: "work",
    year: "2025",
    bunnyLibraryId: "725887",
    bunnyVideoId: "97c49dcc-20d8-4d82-8b07-74ec59c0041f",
    materials: "video",
    dimensions: "",
    media: [
      { type: "bunny", libraryId: "725887", videoId: "97c49dcc-20d8-4d82-8b07-74ec59c0041f" }
    ]
  },
  {
    title: "unfinished thoughts",
    year: "2024",
    materials: "book",
    dimensions: "7.5 cm x 10.5 cm",
    theme: "bright",
    media: [
      { type: "image", src: "assets/unfinished thoughts/1.jpeg" },
      { type: "image", src: "assets/unfinished thoughts/2.jpeg" },
      { type: "image", src: "assets/unfinished thoughts/4.jpeg" },
      { type: "image", src: "assets/unfinished thoughts/7.jpeg" },
      { type: "image", src: "assets/unfinished thoughts/9.jpeg" },
      { type: "image", src: "assets/unfinished thoughts/11.jpeg" },
      { type: "image", src: "assets/unfinished thoughts/13.jpeg" },
      { type: "image", src: "assets/unfinished thoughts/18.jpeg" },
      { type: "image", src: "assets/unfinished thoughts/19.jpeg" },
      { type: "image", src: "assets/unfinished thoughts/21.jpeg" },
      { type: "image", src: "assets/unfinished thoughts/22.jpeg" }
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

/* =====================================================================
   EDIT HERE — this is the “back end”. Add, change or delete entries.
   Newest first looks best. Everything below this block just displays it.

   Album fields:
     title, artist, year, listened (when you heard it), rating (1–5 or ""),
     note (your thoughts), color (cover color if no image),
     cover (optional image path like "covers/francis.jpg"),
     tracks: list of song names, favorites: names from tracks to highlight
   Song fields: title, artist, note, link (optional URL)
   ===================================================================== */
const ALBUMS = [
  {
    title: "Francis Aquarius",
    artist: "Noah Floersch",
    year: 2025,
    listened: "October 2025",
    rating: "",
    note: "This album is full of sad-boy singalongs with a little funk added in. Many songs about guilt over an ended relationship, so if you're going through something like that it may be perfect or triggering for you.",
    color: "#8a63c4",
    cover: "",
    tracks: [
      "Fatal Feminine","Wild Thing","Somebody Nobody Gets Over","Somethin’ Bout A Beer",
      "My Bad","Growing Everything Out","Nobody’s Ever Gonna Love You","Look at You",
      "ok, cool","Worst Guy Ever","To Be Around","Airway"
    ],
    favorites: ["Fatal Feminine"],
    hated: ["Airway"]
  }
];

const SONGS = [
  { title: "Fatal Feminine", artist: "Noah Floersch", rating: 4, note: "Song is what the title suggests, he is obsessed with a girl and she may be the death of him", link: "" },
  { title: "Wild Thing", artist: "Noah Floersch", rating: 4, note: "He doesn't know who this girl turned into, reminiscing over when she used to be a wild thing", link: "" },
  { title: "Somebody Nobody Gets Over", artist: "Noah Floersch", rating: 4, note: "", link: "" },
  { title: "Somethin’ Bout A Beer", artist: "Noah Floersch", rating: 4, note: "", link: "" },
  { title: "My Bad", artist: "Noah Floersch", rating: 4, note: "", link: "" },
  { title: "Growing Everything Out", artist: "Noah Floersch", rating: 4, note: "", link: "" },
  { title: "Nobody’s Ever Gonna Love You", artist: "Noah Floersch", rating: 4, note: "", link: "" },
  { title: "Look at You", artist: "Noah Floersch", rating: 4, note: "", link: "" },
  { title: "ok, cool", artist: "Noah Floersch", rating: 4, note: "", link: "" },
  { title: "Worst Guy Ever", artist: "Noah Floersch", rating: 4, note: "", link: "" },
  { title: "To Be Around", artist: "Noah Floersch", rating: 4, note: "", link: "" },
  { title: "Airway", artist: "Noah Floersch", rating: 4, note: "", link: "" }
];
// Hero picture: put a photo path (e.g. "images/me-with-headphones.jpg") in image.
// Leave it empty to show the music note drawing.
const HERO = { image: "", alt: "A music note" };

const SITE_FOOTER = "Made by Randi Sullivan, 2026.";
/* ===================== END OF EDITABLE SECTION ===================== */

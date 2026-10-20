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
    note: "Example entry. Noah plays a character who is guilt-tripping and projecting his insecurities, but the album itself is playful, with sad-boy singalongs and slick funk.",
    color: "#8a63c4",
    cover: "",
    tracks: [
      "Fatal Feminine","Wild Thing","Somebody Nobody Gets Over","Somethin’ Bout A Beer",
      "My Bad","Growing Everything Out","Nobody’s Ever Gonna Love You","Look at You",
      "ok, cool","Worst Guy Ever","To Be Around","Airway"
    ],
    favorites: []
  }
];

const SONGS = [
  { title: "Fatal Feminine", artist: "Noah Floersch", note: "Example entry. Delete me and add your own.", link: "" }
];

// Hero picture: put a photo path (e.g. "images/me-with-headphones.jpg") in image.
// Leave it empty to show the music note drawing.
const HERO = { image: "", alt: "A music note" };

const SITE_FOOTER = "Made by Randi Sullivan. Edit the ALBUMS and SONGS lists in the file to update this page.";
/* ===================== END OF EDITABLE SECTION ===================== */

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
    rating: "4.5",
    note: "This album is full of sad-boy singalongs with a little funk added in. Many songs about guilt over an ended relationship, so if you're going through something like that it may be perfect or triggering for you.",
    color: "#8a63c4",
    cover: "",
    tracks: [
      "Fatal Feminine","Wild Thing","Somebody Nobody Gets Over","Somethin’ Bout A Beer",
      "My Bad","Growing Everything Out","Nobody’s Ever Gonna Love You","Look at You",
      "ok, cool","Worst Guy Ever","To Be Around","Airway"
    ],
    favorites: ["Somebody Nobody Gets Over"],
    hated: []
  },
  {
    title: "West End Girl",
    artist: "Lily Allen",
    year: 2025,
    listened: "October 2025",
    rating: "5",
    note: "The lore behind this album made it absolutely amazing. Husband asks for an open mariage, reluctantly agrees, he breaks the agreement... The album felt like watching a play with my ears.",
    color: "#1f8a8f",
    cover: "",
    tracks: [
      "West End Girl","Ruminating","Sleepwalking","Tennis",
      "Madeline","Relapse","Pussy Palace","4chan Stan",
      "Nonmonogamummy","Just Enough","Dallas Major","Beg For Me",
      "Let You W/in","Fruityloop"
    ],
    favorites: [],
    hated: []
  }
];

const SONGS = [
  { title: "Fatal Feminine", artist: "Noah Floersch", rating: 4, lyric: "Under your influence. I'm kinda into it", note: "Very cute song. Giving: 'I love something I shouldn't'", link: "" },
  { title: "Wild Thing", artist: "Noah Floersch", rating: 4, lyric: "But man, you switched it up, did a full 180. Night-life woman to a real nice lady", note: "This reminds me of a song, but I cannot put my finger on it", link: "" },
  { title: "Somebody Nobody Gets Over", artist: "Noah Floersch", rating: 5, lyric: "You could've gave me a warning that you're someone nobody gets over", note: "OUUUFFF, Noah. I feel you", link: "" },
  { title: "Somethin’ Bout A Beer", artist: "Noah Floersch", rating: 4, lyric: "Don't forget to tip the ones that help you forget the ones you love", note: "An ode to the bartenders out there helping people get over their exes", link: "" },
  { title: "My Bad", artist: "Noah Floersch", rating: 3.2, lyric: "But then I called her by your name", note: "I think we've all been there. Can't decide if I like this song", link: "" },
  { title: "Growing Everything Out", artist: "Noah Floersch", rating: 3.5, lyric: "I've been acting apathetic, it's part of my aesthestic", note: "Decent song. Don't love, don't hate.", link: "" },
  { title: "Nobody’s Ever Gonna Love You", artist: "Noah Floersch", rating: 3.7, lyric: "If I'm not worth the time, why do you keep coming back", note: "Great question, Noah.", link: "" },
  { title: "Look at You", artist: "Noah Floersch", rating: 3.5, lyric: "I thought you'd only use that charm on me, but it's for everybody", note: "I like the song, don't love the message. But I understand it.", link: "" },
  { title: "ok, cool", artist: "Noah Floersch", rating: 3.3, lyric: "", note: "I love this song in the album, but as a stand-alone song... I don't know if I would come back to her. (Also feeling a little called out for my behaviour in this song.... Okay, cool)", link: "" },
  { title: "Worst Guy Ever", artist: "Noah Floersch", rating: 3.8, lyric: "Empty promises that I'll be better. Hoping I would change, baby, I would never", note: "I like the song. Touches on wanting to do better in a relationship but you can't sustain it.", link: "" },
  { title: "To Be Around", artist: "Noah Floersch", rating: 3.9, lyric: "You remind me of someone I don't like to be reminded 'bout", note: "Good song. I like it.", link: "" },
  { title: "Airway", artist: "Noah Floersch", rating: 2.5, lyric: "", note: "Easy listening, but too much synth in the background for me. I am sure it was intentional, but it hurts my brain to listen to.", link: "" }
];

const RANDOM_SONGS = [
  { title: "Song name here", artist: "Artist here", rating: 5, lyric: "", note: "", link: "" }
];

// Hero picture: put a photo path (e.g. "images/me-with-headphones.jpg") in image.
// Leave it empty to show the music note drawing.
const HERO = { image: "", alt: "A music note" };

const SITE_FOOTER = "Made by Randi Sullivan, 2026.";
/* ===================== END OF EDITABLE SECTION ===================== */

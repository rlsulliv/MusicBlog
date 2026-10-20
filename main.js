const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

document.getElementById("albumList").innerHTML = ALBUMS.length ? ALBUMS.map(a => {
  const stars = a.rating ? "★".repeat(a.rating) + "☆".repeat(5 - a.rating) : "";
  const cover = a.cover ? `<img src="${esc(a.cover)}" alt="Cover of ${esc(a.title)}">` : `<span aria-hidden="true">${esc(a.title[0])}</span>`;
  const tracks = (a.tracks || []).map(t => {
  const c = (a.favorites || []).includes(t) ? "fav" : (a.hated || []).includes(t) ? "hate" : "";
  return `<li${c ? ` class="${c}"` : ""}>${esc(t)}</li>`;
}).join("");
  return `<article class="album">
    <div class="cover" style="--c:${esc(a.color || "#8a63c4")}">${cover}</div>
    <div class="info">
      <h3>${esc(a.title)}</h3>
      <p class="meta">${esc(a.artist)}, ${esc(a.year)}${a.listened ? " | heard " + esc(a.listened) : ""}</p>
      ${stars ? `<p class="rating" aria-label="${a.rating} out of 5">${stars}</p>` : ""}
      ${a.note ? `<p class="note">${esc(a.note)}</p>` : ""}
      ${tracks ? `<details><summary>Tracklist (${a.tracks.length})</summary><ol>${tracks}</ol></details>` : ""}
    </div></article>`;
}).join("") : `<p class="empty">No albums yet. Add one in the ALBUMS list.</p>`;

const RATING = {
  5: { label: "Favourite", cls: "love" },
  4: { label: "Like", cls: "like" },
  3: { label: "Fine", cls: "fine" },
  2: { label: "Meh", cls: "meh" },
  1: { label: "Hate", cls: "hate" }
};

let sortBest = false;

function renderSongs() {
  const list = [...SONGS];
  if (sortBest) list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  document.getElementById("songList").innerHTML = list.length ? list.map(s => {
    const t = s.link ? `<a href="${esc(s.link)}" target="_blank" rel="noopener">${esc(s.title)}</a>` : esc(s.title);
    const r = RATING[s.rating];
    const badge = r ? `<em class="badge ${r.cls}">${r.label}</em>` : "";
    return `<li><div class="songHead"><span>${t}</span> <small>${esc(s.artist)}</small> ${badge}</div>${s.lyric || s.note ? `<div class="songText">${s.lyric ? `<q class="lyric">${esc(s.lyric)}</q>` : ""}${s.note ? `<small>${esc(s.note)}</small>` : ""}</div>` : ""}</li>`;
  }).join("") : `<li class="empty">No songs yet. Add one in the SONGS list.</li>`;
}

document.getElementById("sortBtn").addEventListener("click", () => {
  sortBest = !sortBest;
  document.getElementById("sortBtn").textContent = sortBest ? "Sort: best first" : "Sort: my order";
  renderSongs();
});
renderSongs();

document.getElementById("heroArt").innerHTML = HERO.image
  ? `<img src="${esc(HERO.image)}" alt="${esc(HERO.alt)}">`
  : `<svg viewBox="0 0 200 200" role="img" aria-label="Music note"><defs><linearGradient id="ng" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color:var(--accent)"/><stop offset="1" style="stop-color:var(--teal)"/></linearGradient></defs><circle class="bgc" cx="100" cy="100" r="96"/><g fill="url(#ng)"><ellipse cx="66" cy="140" rx="21" ry="15" transform="rotate(-20 66 140)"/><ellipse cx="136" cy="122" rx="21" ry="15" transform="rotate(-20 136 122)"/><rect x="80" y="48" width="7" height="90"/><rect x="150" y="30" width="7" height="90"/><polygon points="80,48 157,30 157,56 80,74"/></g></svg>`;

document.getElementById("foot").textContent = SITE_FOOTER;

const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

const RATING = {
  5: { label: "Favourite", cls: "love" },
  4: { label: "Like", cls: "like" },
  3: { label: "Fine", cls: "fine" },
  2: { label: "Meh", cls: "meh" },
  1: { label: "Hate", cls: "hate" }
};

let sortBest = false;

function renderSongs() {
  const list = [...RANDOM_SONGS];
  if (sortBest) list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  document.getElementById("randomList").innerHTML = list.length ? list.map(s => {
    const t = s.link ? `<a href="${esc(s.link)}" target="_blank" rel="noopener">${esc(s.title)}</a>` : esc(s.title);
    const r = RATING[s.rating];
    const badge = r ? `<em class="badge ${r.cls}">${r.label}</em>` : "";
    return `<li><div class="songHead"><span>${t}</span> <small>${esc(s.artist)}</small> ${badge}</div>${s.lyric || s.note ? `<div class="songText">${s.lyric ? `<q class="lyric">${esc(s.lyric)}</q>` : ""}${s.note ? `<small>${esc(s.note)}</small>` : ""}</div>` : ""}</li>`;
  }).join("") : `<li class="empty">No songs yet. Add one in the RANDOM_SONGS list.</li>`;
}

document.getElementById("sortBtn").addEventListener("click", () => {
  sortBest = !sortBest;
  document.getElementById("sortBtn").textContent = sortBest ? "Sort: best first" : "Sort: my order";
  renderSongs();
});

renderSongs();
document.getElementById("foot").textContent = SITE_FOOTER;
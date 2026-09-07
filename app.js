/* ---------------------------------------------------------
   RAADS-R · pinta les dades de data/amics.js
   HTML + CSS + JS pelat, sense dependències.
   --------------------------------------------------------- */

const $  = (s, a = document) => a.querySelector(s);
const $$ = (s, a = document) => [...a.querySelectorAll(s)];

const escapa = (t) => String(t ?? "").replace(/[&<>"']/g, (c) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
}[c]));

const clau  = (amic, i) => "a" + i + "-" + escapa(amic.nom).toLowerCase().replace(/[^\w-]+/g, "");
const alt   = (valor, max) => Math.max(0, Math.min(100, (valor / max) * 100));

/* qui està apagat */
const amagats = new Set();

/* ---------- gràfic ---------- */

function columna(cat) {
  const barres = AMICS.map((amic, i) => {
    const valor = amic.resultats[cat.id] ?? 0;
    return `
      <div class="barra" data-qui="${clau(amic, i)}"
           style="--c:${escapa(amic.color)}; height:${alt(valor, cat.max)}%"
           title="${escapa(amic.nom)} · ${cat.nom}: ${valor}">
        <span class="xifra">${valor}</span>
      </div>`;
  }).join("");

  return `
    <div class="columna">
      <div class="zona">
        <div class="barres">${barres}</div>
        <div class="llindar" style="bottom:${alt(cat.llindar, cat.max)}%">
          <span class="num">${cat.llindar}</span>
        </div>
      </div>
      <div class="peu">${cat.nom} <span class="max">/${cat.max}</span></div>
    </div>`;
}

function pintaGrafic() {
  if (!AMICS.length) {
    $("#grafic").innerHTML = `<p class="buit">encara no hi ha ningú · afegeix-lo a data/amics.js</p>`;
    return;
  }
  $("#grafic").innerHTML = CATEGORIES.map(columna).join("");
  aplicaAmagats();
}

/* ---------- menú ---------- */

function pintaMenu() {
  $("#menuAmics").innerHTML = AMICS.map((amic, i) => `
    <label class="opcio" style="--c:${escapa(amic.color)}">
      <input type="checkbox" data-qui="${clau(amic, i)}" checked>
      <span>${escapa(amic.nom)}</span>
    </label>`).join("");

  $$("#menuAmics input").forEach((caixa) => {
    caixa.addEventListener("change", () => {
      const qui = caixa.dataset.qui;
      caixa.checked ? amagats.delete(qui) : amagats.add(qui);
      caixa.closest(".opcio").classList.toggle("apagat", !caixa.checked);
      aplicaAmagats();
    });
  });
}

function aplicaAmagats() {
  $$(".barra").forEach((b) => {
    b.style.display = amagats.has(b.dataset.qui) ? "none" : "";
  });
}

/* ---------- engegada ---------- */

$("#veureLlindar").addEventListener("change", (e) => {
  document.body.classList.toggle("sense-llindar", !e.target.checked);
});

pintaMenu();
pintaGrafic();

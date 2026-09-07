/* ---------------------------------------------------------
   DADES
   Per afegir algú: copia un bloc, canvia nom, color i números.
   No cal tocar res més.
   --------------------------------------------------------- */

/* Les 5 columnes del test: màxim possible i llindar de cada una. */
const CATEGORIES = [
  { id: "total",      nom: "total",       max: 240, llindar: 65 },
  { id: "social",     nom: "social",      max: 117, llindar: 31 },
  { id: "interessos", nom: "interessos",  max: 42,  llindar: 15 },
  { id: "llenguatge", nom: "llenguatge",  max: 21,  llindar: 4  },
  { id: "sensorial",  nom: "sensorial",   max: 60,  llindar: 16 }
];

/* Colors lliures, però que es distingeixin:
   #e63946  #1d70b8  #f4a300  #2a9d5c  #7b52d3
   #d6336c  #0aa5b5  #8a6d3b  #444444  #c05621 */

const AMICS = [
  {
    nom: "??",                 // <- digue'm qui és
    color: "#e63946",
    data: "2026-09-06",
    respostes: 79,             // preguntes contestades de 80
    resultats: {
      total: 113,
      social: 54,
      interessos: 30,
      llenguatge: 12,
      sensorial: 17
    }
  }
];

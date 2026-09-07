# RAADS-R · amics

Els resultats del test RAADS-R que anem fent, tots en un gràfic.
Pàgina estàtica: HTML, CSS i JS pelat. Sense build ni dependències.

## Com afegir algú

Tot viu a **`data/amics.js`**. Copies un bloc i canvies el que calgui:

```js
{
  nom: "nom o mote",
  color: "#1d70b8",
  data: "2026-09-06",
  respostes: 80,
  resultats: {
    total: 113,
    social: 54,        // Social Relatedness
    interessos: 30,    // Circumscribed Interests
    llenguatge: 12,    // Language
    sensorial: 17      // Sensory Motor
  }
}
```

Els cinc números són la primera fila de la taula que dona el test
(la de `Current test results`). El llindar ja està posat a `CATEGORIES`,
no cal repetir-lo per persona.

Colors que es distingeixen bé sobre blanc:
`#e63946` `#1d70b8` `#f4a300` `#2a9d5c` `#7b52d3`
`#d6336c` `#0aa5b5` `#8a6d3b` `#444444` `#c05621`

Les captures originals van a `img/`, per si mai cal comprovar un número.

## Com es llegeix

Cinc columnes, una per categoria. Cada persona, el seu color.
Cada columna va a la seva escala (del 0 al màxim d'aquella categoria),
perquè no tenen el mateix sostre:

| columna | preguntes | màxim | llindar |
|---|---|---|---|
| total | 80 | 240 | 65 |
| social | 39 | 117 | 31 |
| interessos | 14 | 42 | 15 |
| llenguatge | 7 | 21 | 4 |
| sensorial | 20 | 60 | 16 |

La ratlla puntejada és el llindar. Al menú de sota es pot treure,
i encendre o apagar cada persona. Tot ve encès per defecte.

## Com mirar-ho

Doble clic a `index.html`. Ja està.
Per publicar-ho: Settings → Pages → branch `main`, carpeta `/ (root)`.

## Un avís

El RAADS-R és un test de **cribratge**, no un diagnòstic. Passar el llindar
vol dir "val la pena mirar-s'ho", res més. I són dades de gent concreta:
millor tenir el repo privat si no t'han dit que sí.

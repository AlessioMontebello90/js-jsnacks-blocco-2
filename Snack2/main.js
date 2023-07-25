// creo due array con lo stesso numero di contenuti (lista invitati)
const names = [
  "Guè",
  "Salmo",
  "Sfera",
  "Rkomi",
  "Kendrik",
  "Kobe",
  "Shaq",
  "James",
  "Anna",
  "Raty",
];
const surnames = [
  "Blu",
  "Rosso",
  "Verde",
  "Arancione",
  "Rosa",
  "Giallo",
  "Melo",
  "Rusty",
  "Ernia",
  "Swag",
];

// scrivo due variabili che producano un numero randomico

const lenght = names.length;

// genero e imposto un ciclo nel quale *Per Ogni* elemento dell'array stampa un elemento per array con indice popolato da variabile randomica creata prima

for (let i = 0; i < 20; i++) {
  let randomNum1 = Math.round(Math.random() * (lenght - 1));
  let randomNum2 = Math.round(Math.random() * (lenght - 1));

  console.log(names[randomNum1] + " " + surnames[randomNum2]);
}

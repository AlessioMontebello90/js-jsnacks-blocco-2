//  propongo un promt dove chiedo un numero all'utente

let userNumber = prompt("Inserisci un numero");

// seleziono elemento

const yourNumber = document.getElementById("your-number");

// imposto una condizione doce SE il numero generato è pari viene stampato su pagina html con ID

if (userNumber % 2 == 0) {
  yourNumber.innerHTML += userNumber;
} else {
  userNumber++;

  yourNumber.innerHTML += userNumber;
}

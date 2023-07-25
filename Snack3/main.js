// creo un array con numeri interi

const numbers = [15, 67, 88, 3, 490, 700, 32, 59, 178, 64, 12, 17, 47, 1];
const length = numbers.length;

// nel ciclo seleziono solo gli indici che divisi con modulo danno resto

let sumNumbers = 0;

for (i = 1; i < length; i++) {
  if (i % 2 != 0) console.log((sumNumbers += numbers[i]));
}

alert(sumNumbers);

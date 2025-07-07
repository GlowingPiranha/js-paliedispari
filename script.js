// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// funzione con prompt dall'utente, deve verificare se la parola inserita è uguale sia dritta che reverse


// reverse string usato da Fabbrizio
function reverseString(text) {
  let result = '';
  // scatola per invertire

  for (let i = text.length - 1; i >= 0; i--) {
    // funzione per invertire
    result += text[i]
    // invertimento a partire dall'ultimo carattere
  }

  return result;
  // risultato dell'invertimento
}

// definisco due stringhe, una con il prompt e l'altra che inverte il prompt

const string = prompt(`inserisci una parola palindroma`);
const reversedString = reverseString(string);

// ricordati SEMPRE di definire tutte le variabili, sennò `ti son monega`

console.log(string)
console.log(reversedString)

// dimostrare con if se le due stringhe combaciano

if (string === reversedString) {
  console.log(`la parola è palindroma`)
} else {
  console.log(`la parola non è palindroma`)
}

// ora la parte usando split, reverse e join

// chiedi all'utente il prompt

const parola = prompt(`inserisci una parola palindroma parte 2`);


function palindromaSi(parola) {
  // variabile definita

  const parolaReverse = parola.split(``).reverse().join(``);
  // soluzione trovata su stackoverflow, la divide, la inverte e la ricollega 
  return parola === parolaReverse;
  // controlla se sono uguali

}

// solito schema if di prima
if (palindromaSi(parola)) {
  console.log(`è palindroma`)
} else {
  console.log(`non è palindroma`)
}


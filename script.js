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



// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const pariOdispari = prompt(`scegli pari o dispari`);
const numeroUtente = parseInt(prompt(`inserisci un numero da 1 a 5`));

// randomInteger ha la sua funzione di numero random tra due valori interi
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// definisco numeroPc con la funzione e gli dò un range da 1 a 5
const numeroPc = randomInteger(1, 5);
console.log(numeroPc)
console.log(numeroUtente)

// faccio la somma dei due valori
const somma = numeroPc + numeroUtente;


// controllo se è pari o dispari
function checkPariODispari(somma) {
  if (somma % 2 === 0) {
    return `pari`
  } else {
    return `dispari`
  }
}

// definisco un'altra variabile per la funzione somma
const risultatoFinale = checkPariODispari(somma);

// controllo se la variabile è pari o dispari
if (risultatoFinale === `pari`) {
  console.log(`è pari`)

} else {
  console.log(`è dispari`)
}

// faccio il paragone tra il risultato finale e quello scelto dall'utente, se la scelta dell'utente combacia allora si và con le scomesse

if (risultatoFinale === pariOdispari) {
  console.log(`hai vinto`)
} else {
  console.log(`hai perso`)
}
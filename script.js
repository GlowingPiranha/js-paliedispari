// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// funzione con prompt dall'utente, deve verificare se la parola inserita è uguale sia dritta che reverse


// reverse string usato da Fabbrizio
function reverseString(text) {
  let result = '';

  for (let i = text.length - 1; i >= 0; i--) {

    result += text[i]

  }

  return result;

}

// definisco due stringhe, una con il prompt e l'altra che inverte il prompt

const string = prompt(`inserisci una parola palindroma`);
const reversedString = reverseString(string);

console.log(string)
console.log(reversedString)

// dimostrare con if se le due stringhe combaciano

if (string === reversedString) {
  console.log(`la parola è palindroma`)
} else {
  console.log(`la parola non è palindroma`)
}



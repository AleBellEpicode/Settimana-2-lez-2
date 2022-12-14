/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
const grande = 1;
const piccolo = 0;
if (piccolo > grande) {
  console.log("il numero piu grande e 0");
} else {
  console.log("il numero piu grande e 1");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
if (grande !== piccolo) console.log("not equal");

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
if (grande % 5) console.log("divisibile per 5");
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
const number1 = 8;
const number2 = 0;
if (number1 === 8 || number2 === 8) {
  console.log("il numero e uguale a 8");
} else if (number1 + number2 === 8 || number1 - number2 === 8) {
  console.log(
    "il risultato dell`addizione o sottrazione dei due numberi viene 8"
  );
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 75;
let spedizione = 10;
if (totalShoppingCart > 50) {
  console.log(
    "Congratulazioni! La tua spedizione sara gratuita. Importo totale=",
    totalShoppingCart
  );
} else if (totalShoppingCart < 50) {
  console.log("totale del tuo cart=", totalShoppingCart + spedizione);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let sconto = 0.8;
let BlackFriday = sconto * totalShoppingCart;

if (BlackFriday > 50) {
  console.log(
    "Congratulazioni! La tua spedizione sara gratuita. Importo totale=",
    BlackFriday
  );
} else if (BlackFriday < 50) {
  console.log("totale del tuo cart=", BlackFriday + spedizione);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
const great = 30;
const greater = 10;
const enormous = 20;

if (great > greater && greater > enormous) {
  console.log(great, greater, enormous);
} else if (greater > enormous && enormous > great) {
  console.log(greater, enormous, great);
} else if (enormous > greater && greater > great) {
  console.log(enormous, greater, great);
} else if (great > enormous && enormous > greater) {
  console.log(great, enormous, greater);
} else if (greater > great && great > enormous) {
  console.log(greater, great, enormous);
} else if (enormous > great && great > greater) {
  console.log(enormous, great, greater);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
const numberornotnumber = 123;
console.log(typeof numberornotnumber);
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

evennumber = 10;
console.log(
  "se il risultato e 0, il numero di partenza sara pari, se non lo e, sara dispari",
  evennumber % 2
);

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
let val = 7;
if (val < 10) {
  console.log("Meno di 10");
} else if (val - 3 < 5) {
  console.log("Meno di 5");
} else if (val * 3 >= 10) {
  console.log("Uguale a 10 o maggiore");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
  */

delete me.lastName;

/* ESERCIZIO 13
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
  */

delete me.skills[2];
console.log(me);
/* ESERCIZIO 14
    Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
  */
const arrayofnumbers = [];
arrayofnumbers.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.

arrayofnumbers[9] = 100;
console.log(arrayofnumbers);

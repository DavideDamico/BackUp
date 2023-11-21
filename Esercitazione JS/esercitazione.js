console.log("\n -------ESEMPIO FILTER-------")
/*
Esempio filter:
*/
//faccio un array di numeri da 1 a 20
//uso array.filter per prendere i numeri fino a 10

let array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  
  let arrayFinoA10 = array.filter((num) => num <= 10);
  
  console.log(arrayFinoA10);



console.log("\n -------ESERCIZIO 1-------")
/*
Esercizio 1: Stampa numeri pari
Scrivi un programma che utilizzi un ciclo for per stampare tutti i numeri pari da 1 a 20.
*/

let arrayNumber =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for(let i = 0; i < arrayNumber.length; i++){
    if (arrayNumber[i] % 2 == 0){
        console.log("Numeri pari:", arrayNumber[i])
    }

}


console.log("\n-------ESERCIZIO 2-------")
/*
Esercizio 2: Somma degli elementi di un array
Scrivi una funzione che accetti un array di numeri come argomento e 
restituisca la somma di tutti gli elementi nell'array.
*/

const array1 = arrayNumber.reduce((prec, current) => prec + current);
console.log("Somma arrey:", array1);


console.log("\n-------ESERCIZIO 3-------")
/*
Esercizio 3: Tabellina del 7
Scrivi un programma che utilizzi un ciclo for per stampare la tabellina del 7 (da 1 a 10).
*/

let arreyTabellina = [1,2,3,4,5,6,7,8,9,10]

for(let i = 0; i < arreyTabellina.length; i++){

    console.log(arreyTabellina[i] * 7)

}


console.log("\n-------ESERCIZIO 4-------")
/*
Esercizio 4: Calcola il fattoriale
Scrivi una funzione che accetti un numero intero come argomento e 
restituisca il suo fattoriale. Il fattoriale di un numero n è il prodotto 
di tutti i numeri interi positivi da 1 a n.
*/

//Inrisolta
let fattoriale = 0;
let n = 4;

for(let i = n; i < 0; i++){
    let fattoriale
}

function funzioneFattoriale(n){

}
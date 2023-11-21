const myStudents = ["Paolo", "Luca", "Francesco", "Giada", "Gino"];

const myStudentsWithObjects = myStudents.map(function (name){
    const myStudentsObjects = {
        name: name,
        subject: "Javascript class",
        age: name.length * 4
    }
    return myStudentsObjects;
})

console.log(myStudentsWithObjects)
console.log("\n")

//#################################################################################

// funzione MAP
let array = [1,2,3,45,67,99];

// aggiungere ad ogni elemento il numero 10
let array2 = new Array();
for(let i = 0; i < array.length; i++){
    array2[i] = array[i] + 10; 
}
console.log(array);
console.log(array2);


let array3 = array.map( el => el + 10); // functoin arrow
console.log(array3);
let arrayFilt = new Array();
for(let i = 0; i < array.length; i++){
    if(array[i] > 40){
        arrayFilt.push(array[i]);
    }
}
console.log(arrayFilt);

// funzione FILTER valori > 40 => let arrayFiltrato = [45,67,99];
let arrayFiltrato = array.filter(el => el > 40);
console.log(arrayFiltrato);
/*
function(el){
    return el + 10;
}*/

// function reduce // let array = [1,2,3,45,67,99];
// prec = 0
// current = 1
//0 + 1 => prec

// prec = 1
// current 2 
// 1 + 2  => prec
let somma = 0;
for(let i = 0; i < array.length; i++){
    somma += array[i]
}
console.log(somma);

let somma2 = array.reduce( (prec,current) => prec + current, 0);
console.log(somma2);
 
// for each
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}
array.forEach(element => {
    console.log(element);
});
console.log("\n")

/*
Eseguire i seguenti esercizi con e senza i metodi
(Vedere file "esercizi4 Mario")

Dato il seguente array = [1,2,3,45,6,77,8,9,10] :
1.moltiplicare tutti i numeri x5 e inserire l'array in uno nuovo
2.filtriamo gli elementi compresi tra 5 e 2
3.sommiamo tutti gli elementi dell'array
4.ottenere il valore del primo elemento dell’array che ha un valore di 18 o superiore:
5.stampare l’array risultante
*/

const arrey = [1, 2, 3, 45, 6, 77, 8, 9, 10]

const arr2 = arrey.map((x) => x * 5);
const arr3 = arrey.filter((x) => x >= 2 && x <= 5);
const arr4 = arrey.reduce((a, b) => a + b, 0);
const arr5 = arrey.find((x) => x >= 18);
const arr6 = [];
arrey.forEach((x) => {
  arr6.push(x)
})

console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);
console.log(arr6);
console.log("\n")


/*
1.Leggere la data e mandare un messaggio di: Buongiorno: se l’orario è
compreso tra 00 e 14; Buon Pomeriggio: se l’orario è compreso tra le 14 e le 20; 
Buonasera: se l’orario ècompreso tra le 20 e le 24. [vardata = new Date()].

2.Crea una funzione che decodifica i numeri nell’intervallo 1-5. 
La decodifica trasforma il numero da numero a lettere.

3.Creare una calcolatrice con soltanto le quattro operazioni base (+, *, -, /), l'operazione 
da eseguire deve essere definita attraverso una funzione esterna che prenda in input tre parametri, 
rispettivamente il tipo di operazione da eseguire  ed i due numeri su cui fare l'operazione. 
La funzione deve restituire il risultato e poi stamparlo a video.
*/

// console.log(new Date())

// function sayHello() {
//   const hour = new Date().getHours();
//   //if
//   hour < 14
//     ? alert("Buongiorno")
//   //else if
//     : hour >= 14 && hour < 20
//       ? alert("Buonpomeriggio")
//   //else
//       : alert("Buonasera")
// }

function sayHelloBene() {
    const hour = new Date().getHours();
    if (hour < 14) {
      console.log("Buongiorno")
    } else if (hour >= 14 && hour < 20) {
        console.log("Buon pomeriggio")
    } else {
        console.log("Buonasera")
    }
  }
  
  sayHelloBene();
  const code = {
    1: "a",
    2: "b",
    3: "c",
    4: "d",
    5: "e"
  }
  
  const arr = [1,2,3,4,5,5,4,1,8]
  const arrCod = arr.map((x) => x > 6 ? "" : code[x])
  console.log(arrCod)
  
  // const int = 12323;
  // const intCod = int.toString().split("").map((x) => code[x])
  // console.log(intCod)
  
  function calc(operatorOne, operatorTwo, operand) {
    let result;
    if (operand === "+") {
      result = operatorOne + operatorTwo;
      return result;
    } else if (operand === "-") {
        result = operatorOne - operatorTwo;
        return result;
    } else if (operand === "*") {
        result = operatorOne * operatorTwo;
        return result;
    } else if (operand === "/"){
       result = operatorOne / operatorTwo;
       return result;
     } else {
       console.log("Invalid operation");
       return;
     }
   }
  
  
  console.log(calc(1,2,"+"))
  console.log(calc(34,2,"-"))
  console.log(calc(30,40,"-"))
  console.log(calc(30,2,"*"))
  console.log(calc(30,2,"/"))
  console.log(calc(3,20,"/"))
  console.log(calc(3,7, "**"))
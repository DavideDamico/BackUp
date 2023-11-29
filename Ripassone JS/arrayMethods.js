/*** FUNZIONI ****/
console.log('ripassone/loops.js');

// ************** SINTASSI ******************* //

const moreStudents = ["Davide", "Giada", "Delia"];

function sayHi(name){
    console.log("Ciao sono " + name)
}

// CICLO FOR

for(let i = 0; i < moreStudents.length; i = i + 1){
    sayHi(moreStudents[i])
}

// **** metodi array per la manipolazione e copia *** //

moreStudents.push("Riccardo") // aggiungi in coda all'array

moreStudents.pop(); // toglie ultimo elemento

moreStudents.shift() // toglie il primo elemento

moreStudents.unshift("Paolo")

// e come si copia un'array? fino ad ora abbiamo manipolato l'originale...
// ONE DOES NOT SIMPLY MUTATE STATE
//si usa concat che crea una copia indipendente
// che possiamo manipolare liberamente con la confidenza
// di non mutare l'array original moreStudents
const moreStudentsCopy = moreStudents.concat([])
moreStudentsCopy.push("Riccardo")

//invece così stiamo solo facendo un'assegnazione
// stiamo dicendo che in moreStudentsCopyByReference
// c'è in realtà moreStudents. 
// stiamo puntando ad esso, non copiandolo
const moreStudentsCopyByReference = moreStudents
moreStudentsCopyByReference.push("Padre Maronno")

// MAPPARE I MIEI ELEMENTI DELL'ARRAY ORIGINALE
// CREANDO UN'ALTRO ARRAY ED EVENTUALMENTE FARE QUALCOSA 
// PER OGNI ELEMENTO,
// IL RISULTATO DI QUESTO FARE QUALCOSA FINIRA' NELL'ARRAY
// RITORNATO DAL MIO METODO MAP
/*
const moreStudentsMapCopy = moreStudents.map(function(student){
    return student
})
*/

function arrayMap(inputArray, callback){
    let newArray = [];

    for (let i = 0; i < inputArray.length; i++){
        const elementAtIndex = inputArray[i];
        const callbackResult = callback(elementAtIndex, i, inputArray)
        newArray.push(callbackResult)
    }

    return newArray

}

const moreStudentsMapCopy = arrayMap(moreStudents, function(student){
    return student
})


/*** VARIABILI ****/
console.log('ripassone/variables.js');

// **************+ TIPI DI VARIABILI ******************* //

// VAR è caduto in disuso a causa di problemi insiti nel suo funzionamento
// LET E CONST > parole chiave per le variabili

let myLet = "Io sono una variabile let";
const myConst = "Io sono una variabile const"

// quando inseriamo in una const un dato primitivo,
// non dobbiamo provare a mutarlo o avremo un'errore

myLet = "Sono la let modificata"
// myConst = "Non dovrei farlo" // questo causa > Uncaught TypeError: Assignment to constant variable.

// con let e const non si può ridichiare nello stesso scope
// una variabile con nome identico

// let myLet = "non so che sto sovrascrivendo" // > Uncaught SyntaxError: Identifier 'myLet' has already been declared 


/************************************************************************************* */

// ******************* TIPI DI DATO ********************* //

// - DATO PRIMITIVO -> string, number, boolean, null, undefined
// - DATO COMPLESSO -> array, object

// string

let myString = "Ehilà stringa"

// number

let myNumber = 120 // intero
let myFloatNumber = 20.50 // float -> con decimali

// boolean

let isThisJavascript = true;

// null e undefined

let myMaybeEmptyVariable; // dichiarare -> il valore è implicitamente undefined

// undefined -> non inizializzato, non c'è mai stato niente qui dentro

myMaybeEmptyVariable = null // inizializzato
myMaybeEmptyVariable = 20
// quando vogliamo risvuotare una variabile utilizziamo null
myMaybeEmptyVariable = null // vuoto in questo momento ma messo esplicitamente vuoto


// TIPO DATO COMPLESSO -> ARRAY

const myStringArray = ["Davide", "Marta", "Roberto", "Giulia"]
// const myStringArray2 = ["Davide", 2, "Roberto", false] -> questo è strano!

// indice di un'array è il modo in cui potete accedere ad un'elemento
// ma ha una particolarità: INIZIA DA ZERO

const myStringArrayFirstElement = myStringArray[0] // Davide

// un'array in realtà per javascript è un'oggetto
// un'oggetto può avere metodi ( funzioni ) e proprietà
// possiamo accedervi tramite la dot notation

// la lunghezza di un'array è contenuta nella proprietà length
// ma è uguale al conto "umano" di elementi ( da 1 a totale)
console.log("myStringArray.length", myStringArray.length)

// TIPO DATO COMPLESSO -> OGGETTO

// una proprietà in un'oggetto è una coppia di chiave e valore

const teacher = {
    name: "Riccardo",
    age: 37
}

// per accedere ad una proprietà in un'oggetto utilizziamo 2 modi:
// - il più comune -> la dot notation
teacher.name // Riccardo
// - valido ma utilizzate in casi particolari -> quadre
teacher["age"] // 37

// un'oggetto non accetta come valori solo dati primitivi,
// accetta tutte le strutture dati

const student = {
    name: "Davide",
    age :25,
    hobbies: ["Manga", "Netflix", "Pizza"],
    favoriteBook: {
        title: "Atomic Habits",
        pages: 200
    }
}

student.hobbies[0] // Manga
student.favoriteBook.title // Atomic Habits
student["favoriteBook"]["title"] // Atomic Habits


// EXTRA:  come si passa da oggetto a Array

const arrayLikeObject = {
    "0" : "Roberto",
    "1" : "Riccardo",
    "2" : "Davide",
    "3" : "Giulia"
}
arrayLikeObject[0]

const arrayFromObject = ["Roberto", "Riccardo", "Davide", "Giulia"]
arrayFromObject[0]


// https://www.w3schools.com/js/js_arrays.asp#:~:text=Arrays%20are%20Objects,are%20best%20described%20as%20arrays.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://dev.to/fromaline/why-an-array-is-an-object-in-javascript-4bh6


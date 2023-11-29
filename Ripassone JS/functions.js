/*** FUNZIONI ****/
console.log('ripassone/functions.js');

// ************** SINTASSI ******************* //

// DEFINIZIONE

function myFirstFunction(){
    console.log("Hello function!!!")
}

// UTILIZZO -> INVOCAZIONE

myFirstFunction()

// GLI ARGOMENTI - PARAMETRI DI UNA FUNZIONE

// una buona funzione non legge mai dati dall'esterno
// o meglio lo fa solo tramite i suoi argomenti

function sumNumbers(numA, numB){
    return numA + numB
}

// gli argomenti rendono la nostra funzione riutilizzabile
sumNumbers(1,1)
sumNumbers(4,1)
sumNumbers("patate", "davvero") // "patatedavvero"
console.log("true+true > ",sumNumbers(true, true))
console.log("false+true > ",sumNumbers(false, true))

function concatString(stringA, stringB){
    return stringA + stringB
}

// *********************************************************************//

// gli argomenti racchiudono un pò di magia
// nelle tonde noi diciamo quanti e quali nomi
// avranno i nostri argomenti
// ma cosa succede? come fanno ad essere disponibili
// all'interno del blocco di codice della nostra funzione?
function divideByNumber(numberA, numberB){
    // javascript dietro le quinte sta creando due
    // variabili a cui assegna i valori
    // corrispondenti passati ad ogni invocazione
    // quindi nel caso di invocazione sotto con
    // number A -> 1 e numberB -> 3
    // let numberA = 1
    // let numberB = 3
    return numberA / numberB
}

divideByNumber(1,3)

// *********************************************************************//

// c'è un limite negli argomenti?
// NO, il limite è il buon senso

// all'interno di una funzione possiamo scrivere codice a piacimento

// MA LA REGOLA DEL RETURN NON SBAGLIA MAI


function internalSum(numA, numB){
    const result = numA + numB
    console.log("il mio risultato è -> " + result)
    //se io non metto nulla javscript ritorna undefined
    return result // return esplicito
}


const myResult = internalSum(1, 3);
console.log("myResult è -> " + myResult)


// ******* "SALVARE" una funzione in una variabile ********** //


// questo non invoca la funzione
// definiamo la funzione e la mettiamo in una variabile
// myMultiplyFunction
const myMultiplyFunction = function multiply(numA, numB){
    return numA * numB
}
//multiply non è richiamabile perchè abbiamo messo 
// la funzione nella costante myMultiplyFunction 
// per invocare la funzione dovremo quindi 
// invocare myMultiplyFunction
const multiplyResult = myMultiplyFunction(1,3)

console.log("multiplyResult è ->", multiplyResult)

// ******* FUNZIONI - CODICE RIUTILIZZABILE CONDIZIONALE  ********** //

function checkPersonAge(age){
     //CONTROLLO DI ETA'
     if ( age < 18){
        console.log("sei ammesso, ma non hai abbastanza anni per partecipare");
    } else if (age === 18) {
        console.log("sei ammesso, e hai giusto abbastanza anni per partecipare")
    } else { //age > 18
        console.log("sei ammesso, hai abbastanza anni per partecipare vecchio mio")
    }  
}

function checkIsAllowed(personName, personAge){

    function isAllowedName(name){
        const otherAdmittedStudents = ["Riccardo", "Davide"];  
        return name === otherAdmittedStudents[0] || name === otherAdmittedStudents[1]  
    }

    const isStudentAllowed = isAllowedName(personName)
    // se il mio nome è uguale a uno dei due nomi ammessi
    //if (otherAdmittedStudents.includes(yourName)){
    if (isStudentAllowed){
        // condizione nomi vera, siamo qui
        console.log("sei ammesso, benvenuto/a ", personName)
    
        //CONTROLLO DI ETA'
        checkPersonAge(personAge)
        
    } else {
        console.log("non sei ammesso/a, mi dispiace, cambia nome ", personName)
    }
}

// invochiamo
console.log("//***************** checkIsAllowed ************** // ")
checkIsAllowed("Riccardo", 10)
checkIsAllowed("Roberto", 100)





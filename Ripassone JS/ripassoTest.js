console.log("ripasso Test")


console.log("\nFUNZIONI E CONDIZIONI")

/*
  Scriviamo una funzione 
  che tramite un'argomento stringa
  che sarà un simbolo di operazione ( "+", "-", "/", "*")
  ritorni il risultato dell'operazione indicata sui due numeri input
*/
function calculate(operator,numA, numB){
    
    if (operator=== "+"){
        return (numA + numB)
    }
    else if (operator=== "-") {
        return (numA - numB)
    }
    else if (operator=== "/") {
        return (numA / numB)
    }
    else if ( operator==="*") {
        return (numA * numB)
    }
}
console.log("calculate -> ",calculate('+',1,2))
console.log("calculate -> ",calculate('-',1,2))
console.log("calculate -> ",calculate('/',1,2))
console.log("calculate -> ",calculate('*',1,2))

// ************************ **************************** //

console.log("\nCICLI")

function getVowels(){
    const alfabeto = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z'
      ]
      
    // console.log(alfabeto);
    let newArray = []
    for (let i=0; i < alfabeto.length ; i++) {
        if (alfabeto[i]==="a" || alfabeto[i]=== "e" || alfabeto[i]=== "i" || alfabeto[i]=== "o" || alfabeto[i]=== "u" ){
            console.log(alfabeto[i])
            newArray.push(alfabeto[i])
        }
    }
    return newArray
}
const vowels = getVowels()
console.log(vowels) 

console.log("\nRICREIAMO IL METODO FILTER")

// https://www.w3schools.com/jsref/jsref_filter.asp

const names = ["Marco", "Davide", "Alessia", "Domenico", "Olio"]

function hasBeginningVowels(nameToCheck){
    for (let j=0; j<vowels.length; j++){
        if (nameToCheck[0].toLowerCase() === vowels[j]){
            return true;
        }
    }
    return false;
}

function arrayFilter(namesArray, filterFunction){

    const finalArray= [];
    for (let k=0; k<namesArray.length; k++){
        if (filterFunction(namesArray[k]) === true){
            finalArray.push(namesArray[k])
        }
    }
    return finalArray;
}

const filteredNames = arrayFilter(names, hasBeginningVowels);
console.log(filteredNames)

console.log("\nANCORA ESERCIZI")

console.log("\nQUANTE VOCALI E QUANTE CONSONANTI")

/*
 Partendo da una parola di input ritorniamo un'oggetto che ci dica quante
 consonanti e quante vocali ci sono all'interno della parola
 esempio: getVowelsAndConsonantsCounts("Consonante") -> { vowels: 4, consonants: 6 }
*/

function getVowelsAndConsonantsCounts(myWord){
    const myLowercaseWord = myWord.toLowerCase()
    const vowels = ['a','e','i', 'o', 'u'];
    let counts = {
        vowels: 0,
        consonants: 0
    }
    
    // completate la funzione qui

    for (let i = 0; i < myLowercaseWord.length; i++){
        /* SOLUZIONE INCLUDES
        // è una vocale?
        if(vowels.includes(myLowercaseWord[i])){
            counts.vowels = counts.vowels + 1;
        } else { // è una consonante!
            counts.consonants = counts.consonants + 1;
        }
        */
       // SOLUZIONE FOR CLASSICO
       let hasFoundVowel = false
       const currentLetter = myLowercaseWord[i];
       for ( let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++ ){
            const currentVowel = vowels[vowelIndex]
            if(currentLetter === currentVowel){
                hasFoundVowel = true
            }
       }
       if(hasFoundVowel){
            counts.vowels = counts.vowels + 1;  
       } else {
        counts.consonants = counts.consonants + 1;  
       }
       
    }

    return counts
}

console.log(getVowelsAndConsonantsCounts("Consonante"))

console.log("\nNUMERI MINORE E MAGGIORE")

/*
    dato un array di numeri input ritorniamo un'oggetto 
    che riporti il numero più grande e il numero più piccolo
    esempio: getLowestAndHighestNumber([10,7,3,5,9,28]) -> { lowest: 3, highest: 28 }
*/ 

function getLowestAndHighestNumber(numbersArray){
    let result = {
        lowest: 0,
        highest: 0
    }
    // compilate la funzione :) 
    for (let i = 0; i < numbersArray.length; i++){
        const currentNumber = numbersArray[i]
        if(currentNumber > result.highest){
            result.highest = currentNumber
        }
        if(result.lowest === 0){
            result.lowest = currentNumber
        }
        if(currentNumber < result.lowest){
            result.lowest = currentNumber
        }
    }
    return result;
}

console.log(getLowestAndHighestNumber([10,7,3,5,9,28]))

console.log("\nLA PAROLA PALINDROMA")

// altro grande classico immancabile dei colloqui!
// completiamo la funzione che a partire da una stringa
// ci dice se il suo inverso è identico
// esempio: "otto" è una parola che seppur invertita risulta identica

function isPalindrome(myString){

    // la funzione dovrà tornare vero se l'inversione della stringa
    // risulta in una parola identica, altrimenti false
     // Step 1. Usa il metodo split() per restituire un nuovo array
     let splitString = myString.split(""); // ["o", "t", "t", "o"]
     // ["c", "i", "a", "o"]
    /*
     // copia dell'array
     let stringCopy = splitString.concat([])
     //let stringCopy = myString.split("") // ottengo un nuovo array
  
     // Step 2. Usa il metodo reverse() per invertire l'array appena creato
     let reverseStringArray = stringCopy.reverse(); // ["o", "t", "t", "o"];
     // ["o", "a", "i", "c"]
     */
    const reverseStringArray = [];
    for(let k = splitString.length - 1; k > -1; k-- ){
        reverseStringArray.push(splitString[k])
    }
    
     for(let i = 0; i < splitString.length; i++){
        const normalOrderLetterAtIndex = splitString[i];
        const inverseOrderLetterAtIndex = reverseStringArray[i];
        if(normalOrderLetterAtIndex !== inverseOrderLetterAtIndex){
            return false
        }
     }
     return true
}

console.log(isPalindrome("ciao"))
console.log(isPalindrome("otto"))


console.log("\nMAP")


/**
 * utilizziamo map di javascript per trasformare un'array iniziale di numeri
 * in un'array in cui ogni numero è moltiplicato per 3
 * ripassiamo il concetto e raggiungiamo la soluzione
 * esempio: doubleNumbers([10, 20, 25]) -> [20, 40, 50]
 */

function doubleNumbers(inputArray){
    // completate ed attivate la riga sottostante
    return inputArray.map(function(element){
        return element * 2
    })    
}

console.log(doubleNumbers([10, 20, 25, 15, 20, 1205,592,1,20,500]))

console.log("\nFILTER")

/**
 * un pò di pepe per l'ultimo esercizio!
 * Utilizziamo filter per ottenere un nuovo array con le stringhe 
 * che rispettino i limiti di carattere ( limite inclusivo quindi essere anche pari al limite è valido ). 
 * Esempio: filterWordsByMinAndMaxLength(["Ciao", "questo", "non", "mi", "piace"],2, 5) -> ["Ciao", "non", "mi", "piace"]
 */

function filterWordsByMinAndMaxLength(myStringsArray, minLength, maxLength) {

    return myStringsArray.filter(function(word){
        /*
        const isNotBelowMinLength = word.length >= minLength
        const isNotAboveMaxLength = word.length <= maxLength
        return isNotAboveMaxLength && isNotBelowMinLength
        */
       const isEqualOrAboveMinLength = word.length >= minLength;
       const isEqualOrBelowMaxLength = word.length <= maxLength;
       return isEqualOrAboveMinLength && isEqualOrBelowMaxLength
    });
  }

 console.log(filterWordsByMinAndMaxLength(["Ciao", "questo", "non", "mi", "piace"],2, 5))


 console.log("\nARRAY FIND")

/*
    il metodo array find ci restituisce il primo elemento
    che matcha la condizione della callback
    Altrimenti ritorna undefined
    Facciamo un'esempio:
    const myArray = ["Riccardo", "Roberto", "Giada", "Maria"]
    myArray.find(function (name){ return name === "Riccardo"}) -> "Riccardo"
    myArray.find(function (name){ return name === "Giacobbe"}) -> undefined
    Ecco la doc!
    https://www.w3schools.com/jsref/jsref_find.asp
*/

const arrayDiIncludesEFind = ["Ciao", "questo", "non", "mi", "piace"]

function arrayFind(myArray, stringaCheVoglioTrovare){
    return myArray.find(function(element){
        return element === stringaCheVoglioTrovare
    })
}

console.log(arrayFind(arrayDiIncludesEFind, "piace")) //Stampa in console la stringa da trovare in questo caso "Piace"

// console.log(arrayFind(["Riccardo", "Roberto", "Giada", "Maria"], "Riccardo")) // deve ritornare "Riccardo"
// console.log(arrayFind(["Riccardo", "Roberto", "Giada", "Maria"], "Giacobbe")) // deve ritornare undefined

console.log("\nARRAY INCLUDES")

/*
 per chi non avesse fatto ieri proviamo a ricreare il metodo includes
 Di base includes controlla se nell'inputArray c'è l'elemento passato 
 per il controllo
 Esempio:
 const myArray = [1,2,3,4]
 myArray.includes(2) // true, l'array contiene il numero due

 creiamo la nostra implementazione seguendo anche la 
 documentazione per maggiori esempi
 https://www.w3schools.com/jsref/jsref_includes_array.asp
*/

function arrayIncludes(myArray, stringaCheVoglioTrovare2){
    return myArray.includes(stringaCheVoglioTrovare2)
}

console.log(arrayIncludes(arrayDiIncludesEFind, "questo")) //Stampa in console true o false se nell'array selezionato c'è la stringa , in questo caso "questo"

// console.log(arrayIncludes([1,2,3,4],4)) // true


console.log("\nTAGLIAMO GLI ESTREMI")

/*
    creiamo una funzione che senza modificare l'array input (che deve avere almeno 3 elementi)
    ritorni una nuova copia dell'array input che non abbia il primo e l'ultimo elemento
*/

function cutTheEdges(inputArray){

}

// console.log(cutTheEdges(["Non", "io", "ci", "riesco", "mai"])) // ["io", "ci", "riesco"]

console.log("\nCONTIAMO LE OCCORRENZE DI UN NUMERO")

/*
    Dato un'array di numeri la nostra funzione deve ritornare il
    numero di volte che un certo numero viene ripetuto
*/

function getNumberOccurrencesCount(inputArray, number){

}

// la funzione ci deve ritornare quante volte 2 appare nell'array
 // console.log(getNumberOccurrencesCount([10, 2, 5, 2, 3, 4, 2, 5, 5, 2], 2)) // 4

 console.log("\nSTUDENTI E INSEGNANTI")

/*
 Completiamo la funzione!
  Dato un'array di oggetti in cui abbiamo oggetti che rappresentano studenti,insegnanti e tutor
  tramite la proprietà role andiamo a completare l'oggetto result con
  gli array di nomi di studenti ed insegnanti. 
  Quindi attenzione! I tutor non devono finire negli array di result!
*/ 

function getStudentsAndTeachers(){
    const schoolPeople = [
        { name: "Riccardo", role : "teacher"},
        { name: "Davide", role: "student"},
        { name: "Giada", role: "student"},
        { name: "Nicole", role : "tutor"},
        { name: "Erica", role : "teacher"},
        { name: "Giulia", role: "student"},
        { name: "Gabriella", role : "teacher"},
        { name: "Andrea", role : "teacher"},
        { name: "Carmela", role : "tutor"},
        { name: "Antonio", role: "student"},
    ]

    let result = {
        teachersNames: [],
        studentsNames: []
    }

    // completiamo qui la funzione

    return result;

}

/*
 decommentando l'invocazione della funzione sotto
 deve loggare un'oggetto con
 {
    teachersNames: ["Riccardo", "Erica", "Gabriella", "Andrea"],
    studentsNames: ["Davide", "Giada", "Giulia", "Antonio"]
 }
 */
// console.log(getStudentsAndTeachers())


console.log("\nIL BOSS FINALE: ALFABETO")

/*
 Esercizio finale!
 Completiamo la funzione che ci restituisce la somma 
 dei valori degli indici delle lettere di una parola all'interno dell'alfabeto
 Esempio

 getAlphabetLettersIndexCount("ava"); -> ritorna 21

 Come si arriva a 21 ? 
 Se mettiamo le lettere dell'alfabeto in un'array:
 - a è la prima lettera -> indice 0
 - v è la ventiduesima lettera -> indice 21
 - a è la prima lettera -> indice 0

 La somma dei valori degli indici è 0 + 21 + 0 quindi 21

 Un'altro esempio:
  getAlphabetLettersIndexCount("otto"); -> ritorna 21
 - o è la quindicesima lettera -> indice 14
 - t è la ventesima lettera -> indice 19
 - t è la ventesima lettera -> indice 19
 - o è la quindicesima lettera -> indice 14

 La somma dei valori degli indici è 14 + 19 + 19 + 14 quindi 66
*/

function getAlphabetLettersIndexCount(word){
    const alphabet = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ]

}

//console.log(getAlphabetLettersIndexCount("ava")); // -> ritorna 21
//console.log(getAlphabetLettersIndexCount("otto")); // -> ritorna 66

console.log("\nFINE")

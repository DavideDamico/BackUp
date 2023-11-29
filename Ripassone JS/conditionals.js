/*** CONDIZIONI ****/
console.log('ripassone/conditionals.js');

// ************** COMPARAZIONI ******************* //

// OPERATORI DI CONFRONTO -> uguale o diverso

// la terza parte dell'operatore ( terzo carattere )
// rappresenta un controllo di tipo
// ci mette in salvo da tipi diversi che risultano per motivi 
// vari veri o falsi come uguaglianza (o disuguaglianza) in modi inaspettati
console.log("true === true", true === true) // true
console.log("true === false",true === false ) // false
console.log("'' === false",'' === false ) // false
// ed ecco la dimostrazione poi di perchè usiamo sempre il controllo di tipo
console.log("'' == false",'' == false ) // true (mannaggia a tutto)

// OPERATORI DI CONFRONTO -> comparare numeri

console.log('10 > 10', 10 > 10); // false
console.log('10 >= 10', 10 >= 10); // true
console.log('10 < 8', 10 < 8); // false
console.log('10 <= 10', 10 <= 10); // true

// OPERATORI PER FARE OPERAZIONI MATEMATICHE -> operazioni

console.log('1 + 1', 1 + 1); // 2
console.log('1 - 1', 1 - 1); // 0
console.log('1 * 10', 1 * 10); // 10
console.log('20 / 10', 20 / 10); // 2

// operatore resto! ( remainder )
console.log('20 % 3', 20 % 3); //  2

// ************** COSTRUTTI CONDIZIONALI ******************* //

// tra le tonde abbiamo la nostra espressione di comparazione
// il blocco tra le graffe si esegue solo quando la condizione è vera
if (10 >= 10) {
    console.log("sono nell'if del divertimento")
}

// if else
if ("Riccardo" === "Davide") { // false
    console.log("sono Riccardo")
} else {
    console.log("else chi ti conosce")
}

// CONCATENAZIONE DI CONDIZIONI

// AND - && - veri entrambe le espressioni a destra e sinistra
if( 1 === 1 && 2 === 2 && 3 === 3 ){ // tutte le condizioni devono essere vere
    console.log("sei un drago con i numeri")
}

// OR - || - vero se una qualsiasi delle condizioni concatenate è vera
if( 1 === 0 || 1 === 1 || 0 !== 1){
    console.log("li avevi presi quasi tutti")
}

// if -  else if - else
const ageToCheck = 37;

const admittedStudents = ["Riccardo", "Davide"];

const yourName = "Davide";

// se il mio nome è uguale a uno dei due nomi ammessi
//if (admittedStudents.includes(yourName)){
if (yourName === admittedStudents[0] || yourName === admittedStudents[1]){
    // condizione nomi vera, siamo qui
    console.log("sei ammesso, benvenuto/a")

    //CONTROLLO DI ETA'

    if ( ageToCheck < 18){
        console.log("sei ammesso, ma non hai abbastanza anni per partecipare");
    } else if (ageToCheck === 18) {
        console.log("sei ammesso, e hai giusto abbastanza anni per partecipare")
    } else { //ageToCheck > 18
        console.log("sei ammesso, hai abbastanza anni per partecipare vecchio mio")
    }
    
} else {
    console.log("non sei ammesso/a, mi dispiace, cambia nome")
}

// e se avessi degli oggetti?

const otherAdmittedStudents = ["Riccardo", "Davide"];

const wannabeStudent = {
    name: "Davide",
    age: 37
}

// se il mio nome è uguale a uno dei due nomi ammessi
//if (otherAdmittedStudents.includes(yourName)){
if (wannabeStudent.name === otherAdmittedStudents[0] || wannabeStudent.name === otherAdmittedStudents[1]){
    // condizione nomi vera, siamo qui
    console.log("sei ammesso, benvenuto/a")

    //CONTROLLO DI ETA'

    if ( wannabeStudent.age < 18){
        console.log("sei ammesso, ma non hai abbastanza anni per partecipare");
    } else if (wannabeStudent.age === 18) {
        console.log("sei ammesso, e hai giusto abbastanza anni per partecipare")
    } else { //wannabeStudent.age > 18
        console.log("sei ammesso, hai abbastanza anni per partecipare vecchio mio")
    }
    
} else {
    console.log("non sei ammesso/a, mi dispiace, cambia nome")
}

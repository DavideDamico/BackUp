console.log("--------ESERCITAZIONE--------")

/*
Dato il seguente array [3,1,40,12,42,100,431,76,4,9]. Creare dei bottoni che al click scatenano un evento.

    Il primo bottone mostra un messaggio con la somma.
    Il secondo colora di blu il numero maggiore.
    Il terzo colora di rosso il numero più piccolo.
    Il quarto sceglie un numero casuale e lo triplica.
    Il quindi bottone mostra un messaggio con la somma tutti i numeri pari.
*/

//Bottone con somma
let array = [3,1,40,12,42,100,431,76,4,9];

    function sommaArrey(){
    let somma = 0;
    for(let i = 0; i < array.length; i++)[
        somma += array[i]
    ]
    console.log(somma)
}

/*
//Colorare di blu il numero maggiore
function coloreBlu() {
    let numeroMaggiore = 0;

    //Prende il numero maggiore nell'arrey
    for (let i = 0; i < array.length; i++) {
        if (array[i] > numeroMaggiore) {
            numeroMaggiore = array[i];
        }
    }

    console.log(numeroMaggiore);

    // Colora il numero maggiore di blu sulla pagina HTML
    let numeroMaggioreElement = document.getElementById("blue");
    numeroMaggioreElement.textContent = numeroMaggiore;
    numeroMaggioreElement.style.color = "blue";
}

//Colorare di rosso il numero minore (Non funziona ancora , da sistemare)
function coloreRosso() {
    let numeroMinore = 0;

    //Prende il numero minore nell'arrey
    for (let i = 0; i < array.length; i++) {
        if (array[i] > numeroMinore) {
            numeroMinore = array[i];
        }
    }

    console.log(numeroMinore);

    // Colora il numero minore di rosso sulla pagina HTML
    let numeroMinoreElement = document.getElementById("red");
    numeroMinoreElement.textContent = numeroMinore;
    numeroMinoreElement.style.color = "red";
}
*/


//Metodo spiegato da gabriella
coloreBlu = function(){ 
    /*
    console.log("IL MASSIMO"); 
    console.log(Math.max(10,3));
    */
    console.log("TROVO IL MASSIMO");
    let max = array.reduce(function(a,b){
        return Math.max(a,b);
    },array[0]);
    console.log("MAX", max);
    let elMax = document.getElementById("blue");
    elMax.innerHTML = max;
    elMax.style.color = "blue";
    
}

coloreRosso = function(){ 
    /*
    console.log("IL MINIMO"); 
    console.log(Math.min(10,3));
    */
    console.log("TROVO IL MINIMO");
    let min = array.reduce(function(a,b){
        return Math.min(a,b);
    },array[0]);
    console.log("MIN", min);
    let elMin = document.getElementById("red");
    elMin.innerHTML = min;
    elMin.style.color = "red";
    
}

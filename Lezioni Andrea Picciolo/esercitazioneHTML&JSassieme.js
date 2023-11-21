
/*
Crea una pagina HTML con diversi elementi (div o paragrafi).
Implementa la logica JavaScript per cambiare il colore di sfondo di 
ciascun elemento quando il mouse passa sopra e ripristinarlo quando il mouse esce.
*/

//Funzione per colorare il background passando il mouse sopra
let rosso = document.getElementById("h1")
function red(){
    rosso.style.backgroundColor = "red"
}

//Funzione per colorare il background passando il mouse sopra
let verde = document.getElementById("p")
function green(){
    verde.style.backgroundColor = "green"
}

//Funzione per colorare il background passando il mouse sopra
let giallo = document.getElementById("li1")
function yellow(){
    giallo.style.backgroundColor = "yellow"
}

//Funzione per colorare il background passando il mouse sopra
let arancione = document.getElementById("li2")
function orange(){
    arancione.style.backgroundColor = "orange"
}

//Funzione per colorare il background passando il mouse sopra
let blu = document.getElementById("li3")
function blue(){
    blu.style.backgroundColor = "blue"
}

//Funzione per colorare il background passando il mouse sopra
let rosa = document.getElementById("li4")
function pink(){
    rosa.style.backgroundColor = "pink"
}

//Funzione per colorare il background passando il mouse sopra
let viola = document.getElementById("li5")
function purple(){
    viola.style.backgroundColor = "purple"
}

//Funzione per colorare il background uscendo con il mouse dall'elemento , però facendolo tornare bianco 
function white(){
    rosso.style.backgroundColor = "white"
    verde.style.backgroundColor = "white"
    giallo.style.backgroundColor = "white"
    arancione.style.backgroundColor = "white"
    blu.style.backgroundColor = "white"
    rosa.style.backgroundColor = "white"
    viola.style.backgroundColor = "white"

}

//Funzione per sostituire tutte le funzioni sopra e rendere il tutto più veloce e con meno codice
function cambiaColore(id, colore){
    let elementoColore = document.getElementById(id)
    elementoColore.style.backgroundColor = colore
}

/*
Crea una pagina HTML con un pulsante e un contatore inizialmente impostato a zero.
Implementa la logica JavaScript per incrementare il valore del contatore ogni 
volta che il pulsante viene cliccato.
*/

//Esercizio bottone che aumenta i numeri
let contatore = document.getElementById("contatore");

let count = 0;
function schiaccia() {
  count++;
  contatore.innerHTML = count;
}

//Bottone che scorre i nomi ad ogni click
let contatore2 = document.getElementById("contatore2");

let array = ["Pippo", "Topolino", "Pluto", "Paperino"];

let indiceArray = 0;
  function schiaccia2() {
    indiceArray++;
    let nome = array[indiceArray - 1]

        //Primo metodo per far si che alla fine dei nomi non dia undefined ma un testo che decidiamo
        /*
        if (nome === undefined){
            contatore2.innerText = "errore";
            return
        }
        */
    
        //Secondo metodo per far si che alla fine dei nomi non dia undefined ma un testo che decidiamo
        if(indiceArray > array.length){
            contatore2.innerText = "errore";
            return
        }

    contatore2.innerText = nome;
  }

/*
Crea una pagina HTML con una lista di numeri.
Aggiungi due pulsanti: uno per ordinare i numeri in ordine crescente e un altro per ordinarli in ordine decrescente.
Implementa la logica JavaScript per ordinare dinamicamente i numeri quando i pulsanti vengono cliccati
*/

//Funzione fatta da chatgpt con l'utilizzo del sort e parseInt [parseInt = converte un testo in un numero]
/*
function crescente() {
    var list = document.getElementById("list");
    var items = list.getElementsByTagName("li");
    var sortedItems = [];

    // Estrai i numeri dalla lista e li converte in un array
    for (var i = 0; i < items.length; i++) {
        sortedItems.push(parseInt(items[i].innerText));
    }

    // Ordina l'array di numeri in ordine crescente
    sortedItems.sort(function(a, b) {
        return a - b;
    });

    // Aggiorna la lista HTML con i numeri ordinati
    for (var i = 0; i < items.length; i++) {
        items[i].innerText = sortedItems[i];
    }
}
*/

//Funzione senza utilizzo di sort e parseInt
function crescente() {
    var list = document.getElementById("list");
    var items = list.getElementsByTagName("li");
    var shouldSort = true;

    while (shouldSort) {
        shouldSort = false;

        for (var i = 0; i < items.length - 1; i++) {
            var current = items[i].textContent;
            var next = items[i + 1].textContent;

            if (Number(current) > Number(next)) {
                var temp = current;
                items[i].textContent = next;
                items[i + 1].textContent = temp;
                shouldSort = true;
            }
        }
    }
}

//Funzione senza utilizzo di sort e parseInt
function decrescente() {
    var list = document.getElementById("list");
    var items = list.getElementsByTagName("li");
    var shouldSort = true;
    
    while (shouldSort) {
        shouldSort = false;
    
        for (var i = 0; i < items.length - 1; i++) {
            var current = items[i].textContent;
            var next = items[i + 1].textContent;
    
            if (Number(current) < Number(next)) {
                var temp = current;
                items[i].textContent = next;
                items[i + 1].textContent = temp;
                shouldSort = true;
            }
        }
    }
}


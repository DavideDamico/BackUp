// const nuovo_titolo = "Nuovo Titolo Modificato"

function Modificatesto(){
    // Ottieni l'elemento con id "titolo"
    let titoloElement = document.getElementById("titolo");

    // Modifica il testo dell'elemento
    titoloElement.innerText = "Nuovo Titolo Modificato"; // oppure usare nuovo_titolo al posto di "Nuovo Titolo Modificato"
    
    // altro metodo più avanzato senza usare la variabile let: document.getElementById("titolo").innerText = nuovo_titolo
}

/*
In questa esercitazione, avrai una lista (ul) con alcuni elementi (li). L'obiettivo è imparare come 
aggiungere dinamicamente nuovi elementi e rimuoverli utilizzando JavaScript. Crea due funzioni: 
aggiungiElemento() che aggiunge un nuovo elemento alla lista con il testo 
"Nuovo Elemento", e rimuoviElemento() che rimuove l'ultimo elemento dalla lista.
*/

function aggiungiElemento() {
    // Crea un nuovo elemento li
    let nuovoElemento = document.createElement("li");
    
    // Imposta il testo del nuovo elemento
    nuovoElemento.appendChild(document.createTextNode("Nuovo Elemento"));
    
    // Aggiunge il nuovo elemento alla lista
    document.getElementById("lista").appendChild(nuovoElemento);
}

function rimuoviElemento() {
    // Ottiene la lista
    let lista = document.getElementById("lista");
    
    // Ottiene tutti gli elementi li nella lista
    let elementi = lista.getElementsByTagName("li");
    
    // Verifica se ci sono elementi da rimuovere
    if (elementi.length > 0) {
        // Ottiene l'ultimo elemento della lista
        let ultimoElemento = elementi[elementi.length - 1];
        
        // Rimuove l'ultimo elemento dalla lista
        lista.removeChild(ultimoElemento);
    } else {
        alert("La lista è vuota. Impossibile rimuovere ulteriori elementi.");
    }
}
// Realizza una pagina web con un pulsante.
// Quando l'utente clicca sul pulsante,
// esegui una chiamata GET a un API pubblico (ad esempio,
// JSONPlaceholder) per ottenere e visualizzare dati sul documento.
// https://jsonplaceholder.typicode.com/todos/1

//Stampa l'url sulla console ma ancora non sull'html per l'utente
/*
let bottone = document.getElementById("bottone");

async function schiaccia() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const placeholder = await response.json();
  console.log(placeholder);
}
*/

// Questa è una funzione che fa una richiesta a un server remoto usando fetch
function effettuaChiamataGET() {
    // Utilizza la funzione fetch per fare una richiesta GET a un endpoint specifico
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        // Quando la risposta è disponibile, converti il corpo della risposta in formato JSON
        .then(response => response.json())
        // Quando i dati JSON sono disponibili, aggiorna un elemento HTML con quei dati
        .then(data => {
            // Trova un elemento HTML con l'id 'risultatoGET' e aggiorna il suo testo con i dati JSON formattati
            document.getElementById('risultatoGET').textContent = JSON.stringify(data, null, 2);
        })
        // Se si verifica un errore durante la richiesta, mostra un messaggio di errore nella console
        .catch(error => console.error('Errore durante la chiamata GET:', error));
}

/*
Crea una pagina con un modulo di login che raccoglie username e password. 
Quando l'utente invia il modulo, effettua una chiamata POST a un endpoint di un 
server (simulato con un servizio come MockAPI) con i dati del modulo
*/
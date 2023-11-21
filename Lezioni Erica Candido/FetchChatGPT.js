// URL dell'API di Star Wars (SWAPI) per ottenere informazioni su un personaggio specifico (in questo caso, il personaggio con ID 1)
const url = 'https://swapi.dev/api/people/1/';

// Effettua una richiesta GET all'API utilizzando fetch
fetch(url)
  // Quando la richiesta ha successo, ottieni la risposta in formato JSON
  .then(response => {
    // Controlla se la risposta è stata ricevuta correttamente
    if (!response.ok) {
      // Se la risposta non è ok, lancia un errore
      throw new Error('Errore nella richiesta');
    }
    // Altrimenti, converti la risposta in formato JSON
    return response.json();
  })
  // Quando i dati sono stati convertiti con successo, gestiscili
  .then(data => {
    // Stampa le informazioni sul personaggio nella console
    console.log('Informazioni sul personaggio:', data);

    // Esempio di utilizzo dei dati ricevuti
    console.log('Nome:', data.name); // Stampa il nome del personaggio
    console.log('Altezza:', data.height); // Stampa l'altezza del personaggio
    console.log('Peso:', data.mass); // Stampa il peso del personaggio

    // Puoi fare ulteriori operazioni con questi dati qui
  })
  // Se si verifica un errore durante il fetch o la gestione della risposta
  .catch(error => {
    // Stampa l'errore nella console
    console.error('Si è verificato un errore:', error);
  });
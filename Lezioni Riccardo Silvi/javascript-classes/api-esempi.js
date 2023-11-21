//Esempio riccardo 
/*
async function logMovies(){
    const response = await fetch("https://swapi.dev/api/films")
    const films = await response.json()
    console.log(films)
}

logMovies()
*/

/*
Scrivere una funzione che fetcha un film per id e mi ritorna
vero o falso in base al fatto che nel film ci sia Chewbacca
 -> characters
*/

async function fetchMovieById(id){
    const url = `https://swapi.dev/api/films/${id}/` //Per ${id} usare questi apici = `
    //Effettuare la nostra richiesta e vedere che cosa intercetta il ritorno fetch la response
    const res = await fetch(url);
    //ora che abbiamo la response vogliamo ottenere un qualcosa che sia in formato che conosciamo e possiamo manipolare in JS , per questo utilizziamo il metodo json
    const movie = await res.json();
    const chewbacca = "https://swapi.dev/api/people/2/"
    
    //FIND
    //se la callback ritorna true , il risultato di find è l'elemento relativo
    //se ritorna false il risultato è undefinded 
    const foundChewbacca = movie.characters.find(function(character){
        return chewbacca === character
    })
    
    return foundChewbacca !== undefined 
}

fetchMovieById(1)

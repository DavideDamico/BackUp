
async function logMovies(){
    const res = await fetch("https://swapi.dev/api/films")
    const films = await res.json()
    console.log(films)
}

//logMovies()

// scrivere una funzione che fetcha un film per id
// e mi ritorna vero o falso in base al fatto che 
// nel film ci sia Chewbacca
// Chewbacca è rappresentato da
// "https://swapi.dev/api/people/2/"
// -> characters

async function fetchMovieById(id){
    const url = `https://swapi.dev/api/films/${id}/`
    // effettuare la nostra richiesta e vedere
    // che cosa intercetta il ritorno fetch
    // la response
    const res = await fetch(url);
    // ora che abbiamo la response vogliamo
    // ottenere un qualcosa che sia in un formato che
    // conosciamo e possiamo manipolare in JS
    // per questo utilizziamo il metodo json
    const movie = await res.json();
    return movie
}

function fetchMovieByIdOldStyle(id){
    const url = `https://swapi.dev/api/films/${id}/`

    const movie = fetch(url)
    .then(function(res){
        return res
    })
    .catch(function(e){

    })
    .then(function(res){
        return res.json()
    })

}

async function getIsChewbaccaInMovieById(id){

    const movie = await fetchMovieById(id);

    const chewbacca = "https://swapi.dev/api/people/2/"

    // find
    // se la callback 
    // - ritorna true il risultato di find è l'elemento relativo
    // - ritorna false il risultato è undefined
    const foundChewbacca = movie.characters.find(function(character){
        return chewbacca === character
    })
    
    //throw new Error("Facciamo un'esempio di errore")
    
    return foundChewbacca !== undefined
}

//SINTASSI PROMISE BASED CON CATCH-THEN ( OLD )
/*
getIsChewbaccaInMovieById(1)
.then(function(isTrue){
    if(isTrue){
        console.log("Chewbacca is here!")
    } else {
        console.log("Chewbacca is not here!")
    }
})
.catch(function(error){
    console.log("errorrrre, ", error)
})
*/

// SINTASSI CON ASYNC AWAIT (NEW)
async function logIfChewbaccaIsInMovie(id){
    try {
        const isTrue = await getIsChewbaccaInMovieById(id)
        if(isTrue){
            console.log("Chewbacca is here!")
        } else {
            console.log("Chewbacca is not here!")
        }
    } catch(error){
        console.log("errorrrre, ", error)
    } finally {
        console.log("c'è un'errore o no io vengo eseguito")
    }
    
}

logIfChewbaccaIsInMovie(1)

/*
Utilizzando fetchMovieById 1
se non ci sono errori nella chiamata stampo un'ul nel DOM
con tutti i "planets" ( ogni planet è in un tag li)
mostriamo sopra alla lista un tag h1 con il titolo del film (title)
e il numero di episodio ( episode_id )
se c'è un'errore mostriamo nel DOM un testo che segnala che c'è stato 
un'errore
in ogni caso ( nel finally ) alla fine 
mostrare un h3 con scritto "è bello conoscere altri appassionati"
*/
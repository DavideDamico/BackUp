
/*

    <h1 id="title"></h1>
    <ul id="planets_list">

    </ul>
    <h3 style="display:none;" id="finally">è bello conoscere altri appassionati</h3>
    <p id="error_text"></p> 
*/

function getOrCreateElementById(id, tagName, callback){
    const rootElement = document.getElementById("root")
    const foundElement = document.getElementById(id)
    if(foundElement){
        callback(foundElement)
        return 
    }
    const newElement = document.createElement(tagName)
    const manipulatedElement = callback(newElement)
    rootElement.append(manipulatedElement)
    return document.getElementById(id)
}

async function printPlanetsFullJS(id){
    try {
        const movie = await fetchMovieById(id);
        // throw new Error("non si passa")

        // 1. recuperiamo il nostro h1 e riempiamolo con il testo richiesto
        getOrCreateElementById("title", "h1", function(h1Element){
            h1Element.id = "title"
            h1Element.innerText = `Titolo: ${movie.title}, id episodio: ${movie.episode_id}`
            return h1Element
        })
        
        // 2. crea un ul, riempiamo la lista con gli li
        const ulElement = getOrCreateElementById("planets_list", "ul", function(ulElement){
            ulElement.id = "planets_list";
            ulElement.innerHTML = ""
            return ulElement
        })

        movie.planets.forEach(function(planet){
            const liElement = document.createElement("li")
            liElement.innerText = planet // url pianeta
            ulElement.appendChild(liElement)
        })
    
    } catch(e){
        console.log(e)
        //3. nel caso di errore riempiamo il nostro elemento dedicato 
        // con un testo
        getOrCreateElementById("error_text", "p", function(pElement){
            pElement.id = "error_text"
            pElement.innerText = "qualcosa è andato storto"
            return pElement
        })
    
    } finally {
        // 4. mostriamo il nostro elemento dedicato modificando 
        // la proprietà display nel suo attributo style
        getOrCreateElementById("finally", "h3", function(h3Element){
            h3Element.id = "finally"
            h3Element.innerText = "è bello conoscere altri appassionati"
            return h3Element
        })
        
    
    }
}

// printPlanetsFullJS(1)

//*** COMPONENTI JS *****/

//Creazione h1
function renderTitle(props){
    getOrCreateElementById("title", "h1", function(h1Element){
        h1Element.id = "title"
        h1Element.innerText = `Titolo: ${props.movieTitle}, id episodio: ${props.movieEpisodeId}`
        return h1Element
    })
}

//Creazione h2 
function renderDirector(props){
    getOrCreateElementById("director", "h2", function(h2Element){
        h2Element.id = "director"
        h2Element.innerText = "Director: "+ props.movieDirector
        return h2Element
    })
}

//Creazione h3
function renderProducer(props){
    getOrCreateElementById("producer", "h3", function(h3Element){
        h3Element.id = "producer"
        h3Element.innerText = "Producer: "+ props.movieProducer
        return h3Element
    })
}

//Creazione p
function renderOpeningCrawl(props){
    getOrCreateElementById("opening_crawl", "p", function(pElement){
        pElement.id = "opening_crawl"
        pElement.innerText = "Opening Crawl: \n"+ props.opening_crawl
        return pElement
    })
}

function renderPlanets(props){
    const ulElement = getOrCreateElementById("planets_list", "ul", function(ulElement){
        ulElement.id = "planets_list";
        ulElement.innerHTML = ""
        return ulElement
    })

    props.planets.forEach(function(planet){
        const liElement = document.createElement("li")
        liElement.innerText = planet // url pianeta
        ulElement.appendChild(liElement)
    })
}

//Creazione seconda ul 
function renderSpecies(props){
    const ulElement2 = getOrCreateElementById("species_list", "ul", function(ulElement2){
        ulElement2.id = "species_list";
        ulElement2.innerHTML = ""
        return ulElement2
    })

    props.species.forEach(function(specie){
        const liElement = document.createElement("li")
        liElement.innerText = specie 
        ulElement2.appendChild(liElement)
    })
}

function renderGreeting(props){
    getOrCreateElementById("finally", "h3", function(h3Element){
        h3Element.id = "finally"
        h3Element.innerText = "è bello conoscere altri appassionati"
        return h3Element
    })
}
function renderError(props){
    getOrCreateElementById("error_text", "p", function(pElement){
        pElement.id = "error_text"
        pElement.innerText = "qualcosa è andato storto"
        return pElement
    })
}

// COMPONENTE APP
function renderApp(props){

    if (props.isLoading === true ){
        return
    }
    if(props.hasError){
        renderError()

        renderGreeting()
        return 
    }

    if(props.planets !== undefined){

        renderTitle({
            movieTitle: props.movieTitle,
            movieEpisodeId: props.movieEpisodeId
        })

        // qui vogliamo renderizzare il movie.director con un h2 
        renderDirector({
            movieDirector: props.movieDirector
        })

        // inseriamo producer (h3)
        renderProducer({
            movieProducer: props.movieProducer
        })

        // inseriamo opening_crawl (p)
        renderOpeningCrawl({
            opening_crawl: props.opening_crawl
        })


        renderPlanets({
            planets: props.planets
        })

        // qui vogliamo renderizzare la lista movie.species con ul e relativi li
        renderSpecies({
            species: props.movieSpecies
        })

        
        renderGreeting()
    }
}

async function App(props){

    const state = {
        planets: undefined,
        isLoading: false,
        hasError: false
    }

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
   

    renderApp(state)

    try {
        renderApp({
            planets: undefined,
            isLoading: true,
            hasError: false
        })
        const movie = await fetchMovieById(props.id);
        renderApp({
            planets: movie.planets,
            movieEpisodeId: movie.episode_id,
            movieDirector: movie.director,
            movieProducer: movie.producer,
            opening_crawl: movie.opening_crawl,
            movieSpecies: movie.species,
            movieTitle: movie.title,
            isLoading: false,
            hasError: false
        })
    } catch(e){
        console.log(e)
        renderApp({
            planets: undefined,
            isLoading: false,
            hasError: true
        })
    }
}

async function MyApplication(){
    await App({id: 1})
    
}

MyApplication()




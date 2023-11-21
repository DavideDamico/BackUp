
/*
 * Creare una entità persona con nome Marco, cognome Rossi, età 32 anni. 
 * Creare un’altra entità persona con nome Francesca, cognome Leotta, età 34 anni. 
 * Stampare il nome e cognome della persona più anziana. 
 * Aggiungere ad ogni persona la proprietà sesso, rispettivamente M e F. Stampare le entità femminili. 
 */

let persona1 = {
    nome: "Marco",
    cognome: "Rossi",
    eta: 32
}

let persona2 = {
    nome: "Francesca",
    cognome: "Leotta",
    eta: 34
}

//Se l'età di Marco è maggiore di Francesca stampare il suo nome e
//cognome , sennò stampare quello di persona2 , cioè Francesca
if(persona1.eta > persona2.eta){
    console.log(persona1.nome + " " + persona1.cognome);
}
else{
        console.log(persona2.nome + " " + persona2.cognome);
    }


//Metodo alternativo

function persona(nome,cognome,eta){
    this.nome = nome,
    this.cognome = cognome,
    this.eta = eta,
    this.stampaNome = function(){
        console.log("NOME:"+ nome + ", COGNOME:" + cognome);
    }
}

let perso1 = new persona("Marco", "Rossi", 32);
let perso2 = new persona("Francesca", "Leotta", 34);
let perso3 = new persona("Lucia", "Bella", 62);
perso1.stampaNome()

//Aggiungere una proprietà
perso1.sesso = "M";
perso2.sesso = "F";
perso3.sesso = "F";


console.log(perso1);

console.log("\n","---------Stampa sesso F---------")
//Verificare se un'entità è femmina o maschio
function verifySex(personaTemp){
    if(personaTemp.sesso == "F"){
        personaTemp.stampaNome();
        console.log("La persona e' di sesso femminile");
    }

}
verifySex(perso1); //Non viene vista perchè ha sesso M
verifySex(perso2);
verifySex(perso3);

console.log("\n","---------Altro Esercizio---------")

/*
 * Creare una lista di oggetti auto. Ogni auto deve contenere: marca, modello (string), 
 * colore(string) e anno produzione(number).  
	AUTO: bmw, 530, blu, 2021
	AUTO: audi, A6, grigia, 2020
	AUTO: mercedes, c200, blu, 1988
	AUTO: fiat, 126, giallo, 1975
	AUTO: mazda, rx8, rossa, 2015
	AUTO: fiat, panda, bianca, 1985
       Esercizio 1 - Stampare tutte le auto blu.
       Esercizio 2 - Creare un nuovo array contenente tutti le auto con anno di produzione  > 2000. 
 */

function auto(marca,modello,colore,anno){
    this.marca = marca,
    this.modello = modello,
    this.colore = colore,
    this.anno= anno
}

let listaAuto = [
    new auto("bmw", "530", "blu", 2021),
    new auto("audi", "A6", "grigia", 2020),
    new auto("mercedes", "c200", "blu", 1988),
    new auto("fiat", "126", "giallo", 1975),
    new auto("mazda", "rx8", "rossa", 2015),
    new auto("fiat", "panda", "bianca", 1985)
];

//Esercizio 1
//Stampa di tutte le macchine con la proprietà colore blu
for(let i = 0; i < listaAuto.length; i++){
    if(listaAuto[i].colore == "blu"){
        console.log("Marca", listaAuto[i].marca, " ; Modello ", listaAuto[i].modello);
    }
}

//Metodo 2
let listaAutoBlu = listaAuto.filter( el => el.colore == "blu");
console.log(listaAutoBlu);

//Esercizio 2
let listaAuto2000 = listaAuto.filter( el => el.anno > 2000);
console.log(listaAuto2000);


console.log("\n","---------Esercizio Libreria---------")
console.log("\n")

/*
Creare una libreria di oggetti (almeno 4). Ogni oggetto deve contenere i seguenti attributi:
    nome => stringa
    autore => Stringa
    letto => boolean true se è stato letto, false altrimenti
    dataDiPubblicazione => Data
    capitoli => array bidimensionale. Ad Esempio [[1,4], [2, 5]] il primo capito è formato da 4 pagine, il secondo è formato da 5 pagine
    stampaCopertina() => funzione che restituisce una stringa formata da nome + autore + anno
    stampaPagineCapitoli() => funzione stampa il numero di pagine suddivise per capitoli
    anno() => funzione che restituisce l'anno di pubblicazione
    eventuali funzioni di supporto che potrebbero esservi utili

1. stampare le pagine totali dei libri
2. stampare l'elenco dei libri letti
3. stampare le pagine totali dei libri letti
*/

/*
function libro(nome, autore, letto, dataPubblicazione, capitoli){
    this.nome = nome,
    this.autore = autore,
    this.letto = letto,
    this.dataPubblicazione = dataPubblicazione,
    this.capitoli = capitoli
    this.stampaCopertina = function(){
        console.log("NOME:"+ nome + ", AUTORE:" + autore + ", ANNO:" + dataPubblicazione)
    },
    this.stampaPagineCapitoli = function(){
        for(let i = 0; i < this.capitoli.length; i++)
        console.log("CAPITOLO:"+ this.capitoli[i][0],"PAGINE:"+ this.capitoli[i][1])
    },
    this.anno = function(){
        console.log("ANNO PUBBLICAZIONE:"+ dataPubblicazione)
    }
}

    
    let libro1 = new libro ("Narnia", "Giovanni", true , 1997, [[1,44], [2,67],[3,15]])
    let libro2 = new libro ("HarryPotter", "Carlo", true , 2006, [[1,54], [2,78], [3,34]])
    let libro3 = new libro ("It", "Barbara", false , 2010, [[1,22], [2,89]])
    let libro4 = new libro ("Twilight", "Simona", false , 2018, [[1,78], [2,43],[3,64],[4,38]])
    let libreria = [libro1,libro2,libro3,libro4]

    console.log("|Libro1|")
    libro1.stampaCopertina()
    libro1.stampaPagineCapitoli()
    libro1.anno()

    //1.
        let totalePagine = 0;

        for (let i = 0; i < libreria.length; i++) {
            let libroTemp = libreria[i];

            for (let c = 0; c < libroTemp.capitoli.length; c++) {
                totalePagine += libroTemp.capitoli[c][1];
            }
        }

    console.log("\n")
    console.log("Totale pagine di tutti i libri: "+ totalePagine);
    console.log("\n")

    //2.
    console.log("Libri letti:")
    let libriLetti = libreria.filter(el => el.letto == true);
    console.log(libriLetti)

    // 3.
    let totalePagineLetti = 0;

    for (let i = 0; i < libriLetti.length; i++) {
        let libroLettura = libriLetti[i];
        for (let c = 0; c < libroLettura.capitoli.length; c++) {
            totalePagineLetti += libroLettura.capitoli[c][1];
        }
        
    }

    console.log("\nTotale pagine dei libri letti: "+ totalePagineLetti);
    */



    console.log("\n","---------Esempi STATIC e CLASS---------")
    //Esempi di come usare STATIC e CLASS

    //Dicitura non molto utilizzata ma trovabile
    class Point{
        constructor(x,y){
            this.x;
            this.y;
        }
        //Metodi definiti statici
        puntox = "x";
        static displayNome = "Point";
        static distance(a,b){
            let dx = a - b;
            let dy = a + b;
            return Math.hypot(dx,dy);
            }
    }

    let pointA = new Point(5,5);
    console.log(pointA.displayNome);
    console.log(pointA.puntox);
    console.log(Point.displayNome);

    let data = new Date();
    data.getDate();
    Math.random();


    console.log("\n","---------USO DEL FORM---------")
    /*
    //Uso del FORM
    utenti = new Array();

    function aggiungiUtente(){
        let nome = document.getElementById("name").value;
        let surname = document.getElementById("surname").value;
        let city = document.getElementById("city").value;
        //Evitabile dopo aver inserito utenti.push| console.log(nome, surname, city);

        //Per pushare nell'array tutti i nuovi utenti che si creano
        utenti.push(nome+" "+surname+" "+city);
        console.log(utenti)

    }
    */

    console.log("\n","---------LIBRERIA GABRIELLA---------")
    //LIBRERIA DI GABRIELLA PER FARE L'ESERCIZIO SOTTOSTANTE
    function libro(nome,autore,letto,dataPubblicazione,capitoli){
        this.nome = nome;
        this.autore = autore;
        this.dataPubblicazione = dataPubblicazione;
        this.letto = letto;
        this.capitoli = capitoli;
        this.stampaCopertina = function(){
            return this.nome + " " + this.autore + " " + this.getAnno();
        }
        this.stampaPagineCapitoli = function(){
            for(let capitolo of this.capitoli){  
                console.log("Capitolo" + capitolo[0] + " , pagine: " + capitolo[1]);
            }
        }
        this.getAnno = function(){
            return dataPubblicazione.getFullYear(); 
        }
        // funzione di supporto
        this.numeroTotaleDiPagine = function(){
            let sommaPagine = 0;
            for(let capitolo of this.capitoli){
                sommaPagine += capitolo[1];
            } 
            return sommaPagine;
        }
    }
    // new Date();
    let libro1 = new libro("Pinocchio", "Collodi", true, new Date(2018, 11,1), [[1,5],[2,7]]);
    let libro2 = new libro("Cuore", "De Amicis", false,  new Date(2020, 11,1), [[1,6],[2,8]]);
    let libro3 = new libro("La Divina Commedia", "Dante", false, new Date(2019, 11,11), [[1,7],[2,9]]);
    let libro4 = new libro("I Promessi sposi", "Manzoni", true, new Date(2001, 11,1), [[1,8],[2,10]]);
    let libro5 = new libro("l'uomo che non reggeva l'alcool","Maccio Capatonda",true,new Date(2005,9,20),[[1,500]]);
    let libro6 = new libro("I Promessi Sposi","Manzoni",false,new Date(1987, 11,1),[[1,5],[2,7]]);
    let libro7 = new libro("Storia di una ladra di libri","Markus Zusak",true,new Date(2010, 11,1),[[1,7],[2,20],[3,12],[4,20]]);
    let libro8 = new libro("Cambiare senza paura","Roberto Re",true,new Date(2019, 11,1),[[1,17],[2,3],[3,30]]);
    let libro9 = new libro("Il monaco che vendette la sua Ferrari","Robin Sharma",true,new Date(2011, 11,1),[[1,17],[2,3],[3,30]]);
    
    let libreria = new Array(libro1,libro2,libro3,libro4,libro5,libro6,libro7,libro8,libro9);
    
    for(let libro of libreria){
        console.log("LIBRO:" + libro.stampaCopertina());
    }
    
    // 1) Stampare le pagine totali dei libri
    let numeroPagine = 0;
    for(let libro of libreria){
        numeroPagine += libro.numeroTotaleDiPagine();
    }
    console.log("Il numero totale di pagine e': " + numeroPagine);
    
    // 2) stampare i libri letti
    for(let libro of libreria){
        if(libro.letto){
            libro.stampaCopertina();
        }
    }

    // 3) Stampare le pagine totali dei libri letti
    let numeroPagineLibriLetti = 0;
    for(let libro of libreria){
        if(libro.letto){
            numeroPagineLibriLetti += libro.numeroTotaleDiPagine();
        }
    }
    console.log("Il numero totale di pagine dei libri letti e': " + numeroPagineLibriLetti);

    console.log("\n","---------ESERCITAZIONE CON LIBRERIA GABRIELLA---------")

    /*
    1) Modificare l'esercizio libreria affinché la libreria venga visualizzata su una tabella,
       dove ogni riga corrisponde ad un libro.

    Ogni libro dovrà avere le seguenti informazioni:
    1. nome (text)
    2. autore (text)
    3. Data di uscita del libro (non anno)
    4. Numero di pagine totali del libro (integer)
    -RICERCA: sopra la tabella deve essere presente un input type text ed un bottone "cerca". 
     Al click del bottone devono essere cercati tutti i libri dell'autore scritto sulla text. 
     Le righe dei libri trovati devono essere colorate di verde (potete ridisegnare la tabella). 
     Attenzione, il nome dell'autore potrebbe essere incompleto, ad esempio ricerca per nome e/o cognome

    -INSERIMENTO: creare una form per inserire un nuovo libro. 
    1. controllare che tutti i campi siano stati inseriti e che abbiano dei valori corretti.
    2. Il nuovo libro correttamente inserito deve essere visualizzato sulla tabella 
    (potete ridisegnare la tabella).

    -CANCELLA: creare una form per eliminare un libro.
    1. Il libro può essere cancellato solo se vengono selezionati il nome e l'autore del libro.
    2. Se uno dei due campi non è settato allora deve apparire un alert di avviso (potete ridisegnare la tabella).
    */

    console.log("\n","---------ESERCIZIO FATTO CON CHATGPT---------")

   // Funzione per creare e popolare la tabella con i dati della libreria
   function visualizzaLibreria() {
    let tabella = document.getElementById('tabellaCorpo');
    tabella.innerHTML = '';
  
    for (let libro of libreria) {
      let riga = document.createElement('tr');
      
      let nomeCella = document.createElement('td');
      nomeCella.textContent = libro.nome;
      riga.appendChild(nomeCella);
  
      let autoreCella = document.createElement('td');
      autoreCella.textContent = libro.autore;
      riga.appendChild(autoreCella);
  
      let dataCella = document.createElement('td');
      dataCella.textContent = libro.dataPubblicazione.toDateString();
      riga.appendChild(dataCella);
  
      let pagineCella = document.createElement('td');
      pagineCella.textContent = libro.numeroTotaleDiPagine();
      riga.appendChild(pagineCella);
  
      tabella.appendChild(riga);
    }
    }
    // Visualizza la libreria al caricamento della pagina
    document.addEventListener('DOMContentLoaded', function() {
        visualizzaLibreria();
    });

    //Funzione per cercare e colorare la riga dell'autore scritto
    function cercaLibro() {
        let inputAutore = document.getElementById('autoreInput').value.toLowerCase();
        let tabellaRighe = document.getElementById('tabellaCorpo').getElementsByTagName('tr');

        for (let i = 0; i < libreria.length; i++) {
            let autoreLibro = libreria[i].autore.toLowerCase();
            let riga = tabellaRighe[i];

            if (autoreLibro === inputAutore && inputAutore !== '') {
                riga.classList.add('found'); // Aggiunge la classe 'found' per evidenziare la riga trovata
            } else {
                riga.classList.remove('found'); // Rimuove la classe 'found' dalle righe non trovate
            }
        }
    }

    // Funzione per aggiungere un nuovo libro alla libreria
    function aggiungiNuovoLibro() {
        let nome = document.getElementById('nomeLibro').value.trim();
        let autore = document.getElementById('autoreLibro').value.trim();
        let dataPubblicazione = new Date(document.getElementById('dataPubblicazione').value);
        let pagine = parseInt(document.getElementById('pagineLibro').value);

        if (nome && autore && !isNaN(dataPubblicazione.getTime()) && !isNaN(pagine) && pagine > 0) {
            // Creiamo un array di capitoli per il nuovo libro, aggiungendo un oggetto per ogni capitolo
            var capitoli = [];
            for (var i = 1; i <= pagine; i++) {
                capitoli.push([i, 1]); // Aggiungi ogni pagina come un capitolo separato con 1 pagina
            }

            let nuovoLibro = new libro(nome, autore, true, dataPubblicazione, capitoli);

            libreria.push(nuovoLibro);

            visualizzaLibreria(); // Aggiorna la visualizzazione della tabella con il nuovo libro

            document.getElementById('nuovoLibroForm').reset();
        } else {
            alert('Si prega di compilare tutti i campi correttamente.');
        }
    }

    // Aggiungi l'event listener per il form di aggiunta del nuovo libro
    document.getElementById('nuovoLibroForm').addEventListener('submit', function (event) {
        event.preventDefault();
        aggiungiNuovoLibro();
    });

    // Funzione per cancellare un libro dalla tabella
    function cancellaLibro() {
        let nomeLibro = document.getElementById('nomeLibroCancella').value.trim();
        let autoreLibro = document.getElementById('autoreLibroCancella').value.trim();

        // Verifica se entrambi i campi sono stati compilati
        if (nomeLibro && autoreLibro) {
            // Cerca il libro nella libreria in base al nome e all'autore
            for (let i = 0; i < libreria.length; i++) {
                if (libreria[i].nome.toLowerCase() === nomeLibro.toLowerCase() && libreria[i].autore.toLowerCase() === autoreLibro.toLowerCase()) {
                    // Rimuovi il libro dalla libreria
                    libreria.splice(i, 1);

                    // Aggiorna la visualizzazione della tabella
                    visualizzaLibreria();

                    // Resetta i campi del form
                    document.getElementById('cancellaLibroForm').reset();

                    return; // Esci dalla funzione dopo aver trovato e cancellato il libro
                }
            }
            // Se il libro non è stato trovato, mostra un messaggio di avviso
            alert('Il libro specificato non è presente nella libreria.');
        } else {
            // Se uno dei campi non è stato compilato, mostra un messaggio di avviso
            alert('Si prega di compilare entrambi i campi.');
        }
    }

    // Aggiungi un event listener al form di cancellazione del libro
    document.getElementById('cancellaLibroForm').addEventListener('submit', function (event) {
        event.preventDefault();
        cancellaLibro();
    });


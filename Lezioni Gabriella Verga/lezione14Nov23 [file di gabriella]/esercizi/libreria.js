/*creare una libreria di oggetti (almeno 4). Ogni oggetto deve contenere i seguenti attributi:
    - nome => stringa
    - autore => Stringa
    - letto => boolean true se è stato letto, false altrimenti
    - dataDiPubblicazione => Data
    - capitoli => array bidimensionale. Ad Esempio [[1,4], [2, 5]] il primo capito è formato da 4 pagine, il secondo è formato da 5 pagine
    - stampaCompertina() => funzione che restituisce una stringa formata da nome + autore + anno
    - stampaPagineCapitoli() => funzione stampa il numero di pagine suddive per capitoli
    - anno() => funzione che restituisce l'anno di pubblicazione
    - eventuali funzioni di supporto che potrebbero esservi utili
1. stampare le pagine totali dei libri
2. stampare l'elenco dei libri letti
3. stampare le pagine totali dei libri letti
////4. ordinare i libri per anno di pubblicazione
4. estrarre il json, in forma di stringa, della libreria e passarlo ad un vostro collega. Il vostro collega dovrà:
    - importare la stringa json;
    - contare il numero di libri;
    - contare il numero di libri di un determinato autore (fornito dal collega)
*/
 
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
        for(var capitolo of this.capitoli){  
            console.log("Capitolo" + capitolo[0] + " , pagine: " + capitolo[1]);
        }
    }
    this.getAnno = function(){
        return dataPubblicazione.getFullYear(); 
    }
    // funzione di supporto
    this.numeroTotaleDiPagine = function(){
        var sommaPagine = 0;
        for(var capitolo of this.capitoli){
            sommaPagine += capitolo[1];
        } 
        return sommaPagine;
    }
}
// new Date();
var libro1 = new libro("Pinocchio", "collodi", true, new Date(2018, 1,12), [[1,5],[2,7]]);
var libro2 = new libro("Cuore", "de amicis", false,  new Date(2020, 1,12), [[1,6],[2,8]]);
var libro3 = new libro("La Divina Commedia", "Dante", false, new Date(2019, 11,12), [[1,7],[2,9]]);
var libro4 = new libro("I Promessi sposi", "MAnzoni", true, new Date(2001, 1,12), [[1,8],[2,10]]);
var libro5 = new libro("l'uomo che non reggeva l'alcool","Maccio Capatonda",true,new Date(2005,20,9),[[1,500]]);
var libro6 = new libro("I Promessi Sposi","Manzoni",false,new Date(1987, 1,12),[[1,5],[2,7]]);
var libro7 = new libro("Storia di una ladra di libri","Markus Zusak",true,new Date(2010, 1,12),[[1,7],[2,20],[3,12],[4,20]]);
var libro8 = new libro("Cambiare senza paura","Roberto Re",true,new Date(2019, 1,12),[[1,17],[2,3],[3,30]]);
var libro9 = new libro("Il monaco che vendette la sua Ferrari","Robin Sharma",true,new Date(2011, 1,12),[[1,17],[2,3],[3,30]]);

var libreria = new Array(libro1,libro2,libro3,libro4,libro5,libro6,libro7,libro8,libro9);

for(var libro of libreria){
    console.log("LIBRO:" + libro.stampaCopertina());
}

// 1) Stampare le pagine totali dei libri
var numeroPagine = 0;
for(var libro of libreria){
    numeroPagine += libro.numeroTotaleDiPagine();
}
console.log("Il numero totale di pagine e'" + numeroPagine);

// 2) stampare i libri letti
for(let libro of libreria){
    if(libro.letto){
        libro.stampaCopertina();
    }
}
// 3) Stampare le pagine totali dei libri letti
var numeroPagineLibriLetti = 0;
for(var libro of libreria){
    if(libro.letto){
        numeroPagineLibriLetti += libro.numeroTotaleDiPagine();
    }
}
console.log("Il numero totale di pagine e'" + numeroPagineLibriLetti);


var libreriaFormatoStringa = JSON.stringify(libreria);

var libreriaS = '[{"nome":"Libro 0","autore":"Autore 0","letto":false,"dataDiPubblicazione":"2013-01-31T23:00:00.000Z","capitoli":[[0,16],[1,14],[2,28],[3,20]]},{"nome":"Libro 1","autore":"Autore 1","letto":false,"dataDiPubblicazione":"2015-01-31T23:00:00.000Z","capitoli":[[0,23],[1,35],[2,27],[3,10]]},{"nome":"Libro 2","autore":"Autore 2","letto":false,"dataDiPubblicazione":"2016-01-31T23:00:00.000Z","capitoli":[[0,38],[1,12],[2,21],[3,11]]},{"nome":"Libro 3","autore":"Autore 3","letto":false,"dataDiPubblicazione":"2002-01-31T23:00:00.000Z","capitoli":[[0,10],[1,15],[2,18],[3,28],[4,15],[5,13],[6,12],[7,29]]},{"nome":"Libro 4","autore":"Autore 4","letto":false,"dataDiPubblicazione":"2011-01-31T23:00:00.000Z","capitoli":[[0,13],[1,29],[2,39],[3,30]]},{"nome":"Libro 5","autore":"Autore 5","letto":false,"dataDiPubblicazione":"2004-01-31T23:00:00.000Z","capitoli":[[0,17],[1,18],[2,31],[3,24],[4,26],[5,24]]},{"nome":"Libro 6","autore":"Autore 6","letto":false,"dataDiPubblicazione":"2008-01-31T23:00:00.000Z","capitoli":[[0,14],[1,16],[2,21],[3,14],[4,38],[5,37],[6,32],[7,11],[8,13]]},{"nome":"Libro 7","autore":"Autore 7","letto":false,"dataDiPubblicazione":"2002-01-31T23:00:00.000Z","capitoli":[[0,34],[1,20],[2,27],[3,37],[4,10],[5,18],[6,36],[7,11],[8,21]]},{"nome":"Libro 8","autore":"Autore 8","letto":false,"dataDiPubblicazione":"2008-01-31T23:00:00.000Z","capitoli":[[0,11],[1,21],[2,25]]},{"nome":"Libro 9","autore":"Autore 9","letto":false,"dataDiPubblicazione":"2019-01-31T23:00:00.000Z","capitoli":[[0,33],[1,24],[2,34],[3,15],[4,11],[5,34],[6,19]]}]';

var libreriaNuova = JSON.parse(libreriaS);

for(var libro of libreriaNuova){
    console.log(libro.nome);
}
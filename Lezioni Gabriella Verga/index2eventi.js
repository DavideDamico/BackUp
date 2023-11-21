
window.onload = function(){
    let ele = document.getElementById("testo");
    console.log(ele);

    //Altro modo per collegare l'evento onclick
    document.getElementById("testo").onclick = function(){
        //alert("Benvenuto");
    }

    //OnMouseOver , andando sopra col mouse si attiva l'evento
    document.getElementById("onMouseEvent").onmouseover = function(){
        //alert("Sono sul mouse");
        //console.log("Sono sul mouse");
    }

    //OnMouseOut , uscendo da una riga col mouse si attiva l'evento
    document.getElementById("onMouseEvent").onmouseout = function(){
        //alert("Sono uscito col mouse")
        //console.log("Sono uscito col mouse")

    }

    //Ciò che viene scritto nella textarea viene stampato nella console
    document.getElementById("testoKey").onkeypress = function(){
        //console.log(this.value);
    }

    //Quando si entra nel textbox viene registrato il messaggio nella console
    document.getElementById("onBlur").onfocus = function(){
        console.log("sono entrato nel textbox")
    }

    //Quando si esce dal textbox viene registrato il messaggio nella console
    document.getElementById("onBlur").onblur = function(){
        console.log("sono uscito dal textbox")
    }

    //Cambiare il testo di un paragrafo cliccandoci sopra
    //cambiando il primo "testo2" si può attivare l'evento da diversi
    //punti non cliccando per forza sul testo che verrà cambiato
    document.getElementById("testo2").onclick = function(){
        let ele = document.getElementById("testo2");
        ele.innerHTML = "<p>Buon giorno</p>"
    }

    //Cambiare i valori css cliccando sul testo
    document.getElementById("testo").onclick = function(){
        let ele = document.getElementById("testo");
        //Cambia il colore
        ele.style.color = "red";
        //Cambia la fontsize
        ele.style.fontSize = "30px"
    }
    

}

/*
//Come risolvere il fatto di avere lo script nell'head che non funziona
loadElement = function(){
    let ele = document.getElementById("testo");
    console.log(ele);
}

//Evento onclick

clickTesto = function(){
    alert("Benvenuto")
}
*/

//Stampa il valore selezionato sulla tendina nella console
selezionaAuto = function(){
    let valore = document.getElementById("mySelect").value;
    console.log(valore);
}

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
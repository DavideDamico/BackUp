addList = function(){

    //Creo elementi ul e li
    let ul = document.createElement("ul");
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");

    //Do dei nomi
    li1.textContent = "Primo elemento";
    li2.textContent = "Secondo elemento";
    li3.textContent = "Terzo elemento";

    //Creare la connessione tra ul e li
    ul.append(li1,li2,li3);

    //Inserire la lista all'interno il div desiderato
    document.getElementById("list").append(ul);

    //Abbiamo preso l'elemento list e fatto la stampa
    //di tutte le classi che contiene
    let list = document.getElementById("list");
    list.classList.forEach( el =>
        console.log(el)
    )

    //Abbiamo aggiunto una classe al div (visualizzabile con ispeziona)
    list.classList.add("esempioAdd");
    

    let listChildren = list.childNodes;
    console.log(listChildren);

    //Aggiungo la classe "Prova" a ul (sempre visualizzabile con ispeziona)
    listChildren[0].classList.add("Prova");
    


}

addDiv = function(){

    //Abbiamo creato un div e un paragrafo
    let div = document.createElement("div");
    let p = document.createElement("p");

    //Abbiamo dato il testo al paragrafo
    p.textContent = "Questo è un paragrafo";

    //Abbiamo unito div e p , dicendo che p è un figlio di div
    div.appendChild(p);

    //Abbiamo collegato il div precedentemente creato al primo div
    //con l'id "testID"
    document.getElementById("testID").append(div);
}

addList();
addDiv();
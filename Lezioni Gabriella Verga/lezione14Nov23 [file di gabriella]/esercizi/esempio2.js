utenti = new Array();
function aggiungiUtente(){
    let nome = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let city = document.getElementById("city").value;
    //console.log(nome , surname , city); 
    utenti.push(nome+" "+surname+" "+city);
    //console.log(utenti);
}
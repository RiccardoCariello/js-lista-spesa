/* Data una lista della spesa, stampare in console gli elementi della lista individualmente, prima con un ciclo for, poi con un ciclo while.
Quando le stampe in console sono corrette, stampare gli elementi in un elenco puntato, utilizzando uno dei due cicli scritti al punto precedente.
Consigli:
Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while

Bonus:
Aggiungere alla pagina HTML un campo di input testuale e un pulsante “aggiungi”: l’utente inserisce nell’input un prodotto da acquistare e quando clicca sul pulsante, il testo viene aggiunto alla lista.

Super Bonus:
Aggiungere a fianco ad ogni elemento della lista un pulsante “elimina”: quando l’utente clicca su uno di questi pulsanti, l’elemento corrispondente viene rimosso dalla lista.
Buon lavoro a tutte e a tutti!! */

/* Esercizio base
let listaSpesa = ["farina", "pollo", "acqua", "frutta", "spinaci"];
//let contatore = 0;

//console.log(listaSpesa.lenght);

for(let i = 0 ; i< listaSpesa.length ; i++){
    console.log(i+1 + ". " + listaSpesa[i]);
}
let i =0;
while(i < listaSpesa.length ){
    console.log(i+1 + "- " + listaSpesa[i]);
    i++
}
*/

// bonus
let listaSpesa = [];



//document.addEventListener("click", aggiungi);

function aggiungi(){
    
    let newItem = document.getElementById("inputUtente").value;
    listaSpesa.push(newItem);
    //console.log(listaSpesa);


}

function stampa(){
    let output = "";
    
    for(let i = 0 ; i < listaSpesa.length ; i++){
        //document.getElementById("lista").innerHTML += `
        output +=`
                <li class="list-group-item"><span>${i+1}</span>. <span>${listaSpesa[i]}</span>  <button type="button" class="btn btn-primary btn-sm" id="cancel" onclick="cancella(${i})">Cancel</button></li>
                    
                `;

        
    }
    document.getElementById("lista").innerHTML = output;
}

function cancella(index){
    //index.preventDefault();
    

    let arrayScarto = listaSpesa.splice(listaSpesa[index], 1);

    console.log(`listaSpesa values: ${listaSpesa}`);
    console.log(`variable x value: ${arrayScarto}`);

}

//come faccio a tenere il tutto aggiornato?










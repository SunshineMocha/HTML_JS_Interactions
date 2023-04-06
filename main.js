`use strict`

// console.log(document.body); // ci logga il document della pagina. body e head sono due figli diretti di html, sono gli unici due child che posso chiamare con il punto
// // gli altri devo dare un id/nome per chiamarli. con document.getelementbyid()

// // ci interessano i children, HTML collection
// // Ma ci sono  troppi branch del tree! Come li documento tutti per interagire senza aprire tutti i children? Do un ID ai miei tag

// const pippoTag = document.getElementById(`pippo`) // Dammi il document dell'elemento che mi serve, tramite ID

// console.log(pippoTag);

// // pippo non ha children, ha nodechildren (nodi di children), se apro contiene "qui quo qua" come testo. 
// // Anche il testo viene considerato child. Non è un child standard ma node (TextNode)



// //----

// // ripesco il mio main div
// const mainDiv = document.getElementById(`main-div`);

// // ora voglio creare il mio P

// const newP = document.createElement('p'); // creo un elemento HTML di tipo p nel #main-div, posso usare ogni tag

// // voglio creare un nodo di testo che solo il document puo fare

// const text = document.createTextNode(`Attento! Non cliccare, è pericoloso`);

// newP.appendChild(text); //appende (in fondo) al figlio il testo. 

// mainDiv.appendChild(newP); // appende al mainDiv newP


// Creare una TODO list

const toDos = [`Studiare Javascript`, `Esercitarmi su Codewars`, `Ripetere la scacchiera`, `FizzBuzz Forever`];

function displayList(array) { // faccio una funzione dove passo l'array e lui fa la logica per metterlo in HTML
    
    document.getElementById('main-list').innerHTML = ``; // mi ripulisce l'interno di un elemento
    
    for (let i = 0; i < array.length; i++){
    const element = array[i];

    const mainUL = document.getElementById(`main-list`); // collego la classe

    const newli = document.createElement(`li`); // creo un nuovo li element 

    const text = document.createTextNode(element); // passo l'elemento in ciclo alla nuovo <li>

    const doneButton = document.createElement(`button`); // creo un nuovo button element 

    const buttonText = document.createTextNode(`Done!`);
    
    doneButton.appendChild(buttonText) // Appendo il testo fatto appositamente per il mio bottone al bottone

    doneButton.addEventListener('click', (event) => removeTodo(element)); // QUANDO È UN EVENTO PASSO CLICK INVECE DI ONCLICK, passo funzione tramite lambda, rimuovo 
    // elemento in ciclo

    newli.appendChild(text); // Appendo il testo al <li>
    newli.appendChild(doneButton); // appendo il bottone al <li>
    mainUL.appendChild(newli); // Appendo il <li> alla lista
    }
}

displayList(toDos);

function addButtonPressed(){ // faccio una funzione per creare l'evento pressione bottone
    const input = document.getElementById(`todo-Input`); // creo una variabile input e vado a prendere l'elemento in ID, la stringa sarà il valore inserito
    if(input.value !== ``) // Se casella di testa vuota, non aggiungere nulla!
    {
        const newToDo = input.value; // creo una stringa qualsiasi da aggiungere al mio array 
        // questo mi da solo una cosa che voglio io, non l'utente, aggiungo input per testo
        toDos.push(newToDo); // pusho la stringa
        displayList(toDos); // rimostro la lista, ma questo vuol dire che mi stampa tutti gli elementi compresi quelli precedenti, 
        // mi serve svuotare la lista prima! Aggiungo linea 40
        input.value = ``;
    }
}

// quando clicco non succede nulla perchè non ho un punto di contatto tra HTML e JS
// Metodo 1, vedi HTML, onclick in button

// Cosa succede se voglio rimuovere un elemento quando completato? Per ogni elemento aggiungo un button, linea 53
// ma ho un problema, non lo ho nell'HTML, l'ho nel JS, come faccio a collegarlo? linea 59

function removeTodo(todo){ // creo la funzione per eliminare 
    // due modi per eliminare dall'array
    // index of e poi splice
    // filter
    const todoIndex = toDos.indexOf(todo); // dammi l'indice del todo che ti sto passando e assegnalo alla variabile
    toDos.splice(todoIndex, 1);// splice mi rimuove l'elemento che dico dall'array, UN elemento
    displayList(toDos);
}

// COMPITI: 
// Correggere doppio elemento nella lista, quando è doppio DEVE rimuovere l'elemento giusto

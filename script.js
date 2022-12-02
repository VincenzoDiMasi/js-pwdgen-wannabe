console.log ('JS OK');

/*Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21*/

//1. Prendo l'elemento dal DOM
//2. Chiedo il nome all'utente
//2b. Salvo la risposta in una variabile
//3. Chiedo il cognome all'utente
//3b. Salvo la risposta in una variabile
//4. Chiedo il colore preferito all'utente
//4b. Salvo la risposta in una variabile
//5. Preparo una variabile con la somma di queste stringhe
//6. Inserirlo nell'HTML


//1. Prendo l'elemento dal DOM
const passwordElement = document.getElementById('my-password');


//2. Chiedo il nome all'utente
const firstName = prompt('Qual è il tuo nome?');


//3. Chiedo il cognome all'utente
const lastName = prompt('Qual è il tuo cognome?');

//4. Chiedo il colore preferito all'utente
const favColour = prompt('Qual è il tuo colore preferito?');

//5. Preparo una variabile con la somma di queste stringhe
const myPassword = firstName + lastName + favColour;

//6. Inserirlo nell'HTML
passwordElement.innerText = "La tua password è: " + myPassword + "21";




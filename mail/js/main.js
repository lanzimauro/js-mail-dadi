// Chiedo all'utente di inserire la propria email:
var utente = prompt('Inserisci il tuo indirizzo e-mail');
document.getElementById('mail').innerHTML= utente;

// Creo una lista di email "valide":
var lista = ['matteo@boolean.it', 'marco@boolean.it', 'paolo@boolean.it', 'mauro@boolean.it'];

// Creo una variabile per verificare la validità dell'indirizzo e-mail:
var verifica;

//verifico la presenza dell'indirizzo e-mail nella mia lista:
for (var i = 0; i < lista.length; i++) {
    if (utente == lista[i]) {
        verifica = 1;
    }
}

// Utilizzo la variabile creata prima per la verifica:
if (verifica == 1) {
    document.getElementById('validation').innerHTML= 'è valido';

} else {
    document.getElementById('validation').innerHTML= 'non è valido';
}

document.getElementById('centra').setAttribute('class','visible');

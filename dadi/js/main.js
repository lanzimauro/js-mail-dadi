// Creo due numeri casuali che rappresentano i due lanci dei dadi:
var lancio1 = Math.floor(Math.random() *10);
console.log(lancio1);
var lancio2 = Math.floor(Math.random() *10);
console.log(lancio2);
document.getElementById('dado1').innerHTML = lancio1;
document.getElementById('dado2').innerHTML = lancio2;

if (lancio1 > lancio2) {
    document.getElementById('esito').innerHTML = 'Ha vinto il giocatore 1'
} else if (lancio1 < lancio2) {
    document.getElementById('esito').innerHTML = 'Ha vinto il giocatore 2'
} else if (lancio1 == lancio2) {
    document.getElementById('esito').innerHTML = 'Avete pareggiato'
}

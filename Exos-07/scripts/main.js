let nbLigne = prompt('Veuillez indiquer le nombre de ligne à afficher : ');
let text = 'A';
for (let i = 0; i < nbLigne; i++) {
    console.log(text);
    text += 'A';
}
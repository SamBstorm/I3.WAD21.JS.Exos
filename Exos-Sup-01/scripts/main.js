let nbRecherche;
do{
    nbRecherche = parseInt(prompt('Veuillez introduire un nombre positif : '))
}while(isNaN(nbRecherche) || nbRecherche < 0);
alert('Ceci est bien un nombre entier : '+nbRecherche)

let notFound = true
for (let i = 0; i <= (nbRecherche /2)+1 && notFound; i++) {
    if(i*i == nbRecherche){
        notFound = false;
        alert(`Le nombre ${nbRecherche} est le carré de ${i}!`);
    }
}

if(notFound) alert(`Le nombre ${nbRecherche} n'est pas un carré...`);

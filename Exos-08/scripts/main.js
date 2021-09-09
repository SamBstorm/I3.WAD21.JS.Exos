let texte = prompt('Veuillez indiquer la phrase à inverser :');

function inverser(chaine){
    let chaine_2 = chaine.split('').reverse().join('');
    console.log(chaine_2);
    alert(chaine_2);
}

inverser(texte);
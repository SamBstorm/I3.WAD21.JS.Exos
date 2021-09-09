let texte = prompt('Veuillez indiquer la phrase à inverser :');

/**
 * Fonction permettant d'inverser l'ordre des caractères d'une string
 * @param {string} chaine 
 */
function inverser(chaine){
    let chaine_2;
    try{
        chaine_2 = chaine.toString().split('').reverse().join('');
    }
    catch(error){
        chaine_2 = "Erreur : la valeur ne peut pas être inversée"
    }
    console.log(chaine_2);
    alert(chaine_2);
}

inverser(texte);
let nb = 314;
inverser(nb);
let o = {};
inverser(o);

//Fera crasher l'application...
try{
    inverser(undefined);
}catch(error){
    console.error('Impossible de inverser undefined...')
}
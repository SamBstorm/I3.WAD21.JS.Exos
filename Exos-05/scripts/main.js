let prix = parseFloat(prompt("Veuillez indiquer le prix HTVA de votre livre : "));
let quantite = parseInt(prompt(`Veuillez indiquer le nombre de livre à ${prix}€ :`));

let total = (prix / 100 * 121) * quantite;

alert(`Vous devrez payer la somme de ${total.toFixed(2)} € pour les ${quantite} livres de ${prix} €.`)

// alert(`Vous devrez payer la somme de ${((parseFloat(prompt("Veuillez indiquer le prix HTVA de votre livre : ")) / 100 * 121) * parseInt(prompt(`Veuillez indiquer le nombre de livre :`))).toFixed(2)} €.`)
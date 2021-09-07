//Solution 1

let reponse = prompt('Indiquez votre année de naissance : ');
let age = new Date().getFullYear() - parseInt(reponse);
alert('Vous avez '+ age +' ans.');

// //Solution 2

// let reponse = parseInt(prompt('Indiquez votre année de naissance : '));
// let age = 2021 - reponse;
// alert('Vous avez '+ age +' ans.');

// //Solution 3

// let reponse = parseInt(prompt('Indiquez votre année de naissance : '));
// alert(`Vous avez ${2021 - reponse} ans.`);

// //Solution 4

// alert('Vous avez '+ (2021 - parseInt(prompt('Indiquez votre année de naissance : '))) +' ans.');
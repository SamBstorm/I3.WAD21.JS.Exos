let titre1 = document.createElement('h1');
document.querySelector('body').appendChild(titre1);
titre1.setAttribute('class','pair')
//titre1.innerHTML = jour(today) <---Manque la fonction jour()
 
function heure_body(){
    let today = new Date();
    let heures = today.getHours();
    let minutes = today.getMinutes();
    if (minutes < 10) minutes = "0"+minutes;
    let secondes = today.getSeconds();
    if (secondes < 10) secondes = "0"+secondes;
    let heure_mnt = `${heures}:${minutes}:${secondes}`.toString();
    titre2.innerHTML = heure_mnt;
};
 
function chgmt_color(){
    if ((document.querySelector('h1').getAttribute('class')) == 'impair') {
        document.querySelector('h1').setAttribute('class','pair')
    }
    else //<---------- Manque le 'else'
    document.querySelector('h1').setAttribute('class','impair')
}
 
let titre2 = document.createElement('h2');
document.querySelector('body').appendChild(titre2);
setInterval(heure_body,1000);
 
setInterval(chgmt_color, 1500);
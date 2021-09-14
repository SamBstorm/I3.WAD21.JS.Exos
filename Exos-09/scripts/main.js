function afficherHeure() {
    let today = new Date();

    let hour = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    // if(seconds < 10) seconds = '0'+seconds;
    // if(minutes < 10) minutes = '0'+minutes;

    // let time = `${hour}:${minutes}:${seconds}`; 
    // let time = hour + ':' + minutes + ':' +seconds;


    let time = `${hour}:${(minutes < 10) ? '0' + minutes : minutes}:${(seconds < 10) ? '0' + seconds : seconds}`;

    let title_time = document.querySelector('head title');

    title_time.innerText = time;
}

setTimeout(afficherHeure,3000)

// setTimeout(function(){
//     alert('toto')
// },3500);
let weekDayNames = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

let today = new Date().getDay();

// SOLUTION BOUCLE
{
    // for (let index = 0; index < weekDayNames.length; index++) {
    //     if(index == today) {
    //         alert(`Bonjour, nous sommes ${weekDayNames[index]}`);
    //     }
    // }

    // // BOUCLE 2

    // for (const index in weekDayNames) {
    //     if(index == today) {
    //         alert(`Bonjour, nous sommes ${weekDayNames[index]}`);
    //     }
    // }

    // // BOUCLE 3

    // for (const value of weekDayNames) {
    //     if(value == weekDayNames[today]){
    //         alert(`Bonjour, nous sommes ${value}`);
    //     }
    // }

    // // BOUCLE 4
    // let index = 0;
    // while (index < weekDayNames.length) {
    //     if(index == today){
    //         alert(`Bonjour, nous sommes ${weekDayNames[index]}`);
    //     }
    //     index++;
    // }

    // // BOUCLE 5
    // let index = 0;
    // do {
    //     if(index == today){
    //         alert(`Bonjour, nous sommes ${weekDayNames[index]}`);
    //     }
    //     index++;
    // }while (index < weekDayNames.length)
}

// SOLUTION SWITCH
{
// let dayName = "";
// switch (today) {
//     case 1:
//         dayName = "Lundi";
//         break;
//     case 2:
//         dayName = "Mardi";
//         break;
//     case 3:
//         dayName = "Mercredi";
//         break;
//     case 4:
//         dayName = "Jeudi";
//         break;
//     case 5:
//         dayName = "Vendredi";
//         break;
//     case 6:
//         dayName = "Samedi";
//         break;
//     case 0:
//         dayName = "Dimanche";
//         break;
// }

// alert(`Bonjour, aujourd'hui nous sommes ${dayName}!`)
}

// SOLUTION IF
{
    // let dayName = "";
    // if (today == 1) dayName = "Lundi";
    // else if (today == 2) dayName = "Mardi";
    // else if (today == 3) dayName = "Mercredi";
    // else if (today == 4) dayName = "Jeudi";
    // else if (today == 5) dayName = "Vendredi";
    // else if (today == 6) dayName = "Samedi";
    // else if (today == 0) dayName = "Dimanche";

    // alert(`Bonjour, aujourd'hui nous sommes ${dayName}!`)
}

// SOLUTION SANS BLOC D'INSTRUCTION
alert(`Bonjour, aujourd'hui nous sommes ${weekDayNames[today]}!`)

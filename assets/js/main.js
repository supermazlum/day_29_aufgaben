// console.log("test");

//==================
//#TERNARY Lvl1_1
//==================

// const alter = document.getElementById("alter");
// const ausgabe = document.getElementById("checkOut");

// function checkAge() {
//     console.log(alter.value);

//     let pruefung = alter.value >=18;

//     pruefung ? ausgabe.innerHTML = "zugriff gewährt" : ausgabe.innerHTML = "zugriff verweigert";
// }


//==================
//#TERNARY Lvl1_2
//==================

// const eingabe = document.getElementById("eingabe");
// const checkOut = document.getElementById("checkOut");

// function pruefung() {
//     console.log(eingabe.value);
//     let pwLaenge = eingabe.value.length >= 8;

//     pwLaenge ? checkOut.innerHTML = "Passwort reicht aus" : checkOut.innerHTML = "Passwort ist zu kurz";
// }


//==================
//#TERNARY Lvl2_5
//==================
// function abc() {
//     const blInfo = document.getElementById("bundeslandInfo").value;
//     let blErgebnis = document.getElementById("bundeslandInfoErgebnis");

//     switch (blInfo) {
//         case "Baden-Württemberg":
//             console.log("Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt");
//             document.getElementById("bundeslandInfoErgebnis").innerHTML = "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";
//             break;

//         case "Bayern":
//             console.log("Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt");
//             document.getElementById("bundeslandInfoErgebnis").innerHTML = "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt";
//             break;
            

//         case "Berlin":
//             console.log("Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt")
//             break;
//     }
// }
// Assets:
// switch
// case
// break
// default

// Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt
// Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt
// Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt
// Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt
// Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt
// Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt
// Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt
// Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt
// Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt
// Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt
// Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt
// Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt
// Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt
// Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt
// Ein solches Bundesland gibt es in Deutschland nicht.


//==================
//#TERNARY Lvl2_7
//==================
// Schreibe eine Funktion, um die Daten der Selectbox zu erhalten.

// JS Assets

// switch
// case
// break
// default  ( Extra große Größe )

function showtxt() {
    let paket = document.getElementById("mylist").value;
    let masseJS = document.getElementById("masse");

    switch(paket) {
        case "0":
            masseJS.innerHTML = "<b>Brief und Postkarte</b> <br>L: 10 - 23,5 cm B: 7 - 12,5 cmbH: bis 1 cm"
            break;
        case "1":
            masseJS.innerHTML = "<b>DHL Paket 2 kg</b> <br> bis 60 x 30 x 15 cm"
            break;
        case "2":
            masseJS.innerHTML = "<b>DHL Paket 2 kg</b> <br>bis 60 x 30 x 15 cm"
            break;
        case "3":
            masseJS.innerHTML = "<b>DHL Paket 10 kg</b> <br>bis 120 x 60 x 60 cm"
            break;
        case "default":
            masseJS.innerHTML = "<b>Extra große Größe</b>"
            break;
    }
}
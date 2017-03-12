/**
 * Created by stasiakprzemyslaw on 25.02.2017.
 */

function tabfunc() {
    var femaleNames = ['Asia', 'Kasia', 'Ola','Jola'];
    var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

    var allNames = femaleNames.concat(maleNames);

    var newName = document.getElementById('getName').value;

    if (allNames.indexOf(newName)== -1) {
        allNames.push(newName);
    } else {
        console.log("Imie jest juz w tablicy");
    }
    console.log(allNames);
    console.log(femaleNames);
    console.log(maleNames);
}


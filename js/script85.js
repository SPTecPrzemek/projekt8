/**
 * Created by stasiakprzemyslaw on 24.02.2017.
 */

function delta(){
    var a = document.getElementById('texta').value;
    var b = document.getElementById('textb').value;
    var value = (a*a) + (2*a*b) - (b*b);
    console.log(a);
    console.log(b);
    console.log(value);

    if (value < 0) {
        console.log("Waynik mnniejszy od 0");
    } else if (value == 0) {
        console.log("Wynik równy 0");
    } else if (value > 0) {
        console.log("Wynik większy od 0");
    } else {
        console.log("Nipooprawne Dane");
    }
}

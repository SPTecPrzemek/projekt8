/**
 * Created by stasiakprzemyslaw on 25.02.2017.
 */

function Oblicz() {
    var a = document.getElementById('textFA').value;
    var h = document.getElementById('textFH').value;
    var wynik = getTriangleArea(a,h);
    console.log(wynik);
    var wynik2 = getTriangleArea(2,4);
    console.log(wynik2);
    var wynik5 = getTriangleArea(6,8);
    console.log(wynik5);
}

function getTriangleArea(a,h) {
    if ((a <= 0) || ( h <= 0)) {
        console.log("Nieprawidłowe Dane");
    } else {
        var value = a*h/2;
        return value;
    }
}

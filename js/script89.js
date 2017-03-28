/**
 * Created by stasiakprzemyslaw on 26.02.2017.
 */
function rysuj() {
    var wysokoscChoinki = document.getElementById('getHeight').value;
    console.log(wysokoscChoinki);
    rysujChoinke(wysokoscChoinki);

}

function rysujChoinke(wysokoscChoinki) {
    for (var i=1; i<=wysokoscChoinki; i++) {
        var star = '';
        for (var j=0; j<(i*2)-1; j++) {
            star += '*';
        }
        console.log(star);
    }
}
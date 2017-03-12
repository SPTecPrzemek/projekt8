/**
 * Created by stasiakprzemyslaw on 26.02.2017.
 */
function zamianafunc() {
    var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";
    var text2 = "Zielone słonie";
    var text3 = text2.toUpperCase();
    console.log(text3);

    text = text.replace('Papugi', text3);
    console.log(text.slice(0, text.length/2));
}
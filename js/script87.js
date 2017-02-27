/**
 * Created by stasiakprzemyslaw on 26.02.2017.
 */
function zamianafunc() {
    var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";
    var text2 = "Zielone słonie";
    text2.toUpperCase();

    text = text.replace('Papugi', text2);
    console.log(text.slice(0, text.length/2));
}


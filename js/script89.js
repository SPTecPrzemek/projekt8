/**
 * Created by stasiakprzemyslaw on 26.02.2017.
 */

function start() {
    var button = document.getElementsByClassName("button");
    console.log(button);
    butoonLenght = button.length;
    console.log(butoonLenght);

    for (var i=0; i < butoonLenght; i++) {
        var buttonTXT = button[i].innerText;
        console.log(buttonTXT);
    }
}
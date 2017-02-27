/**
 * Created by stasiakprzemyslaw on 27.02.2017.
 */
var add = document.getElementById('addElem');
var list = document.getElementById('list');

add.addEventListener('click', function(event) {
    var listNumber = document.getElementsByTagName('li').length;
    console.log(listNumber);
    list.innerHTML += '<li>item ' + listNumber + '</li>' });

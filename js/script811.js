/**
 * Created by stasiakprzemyslaw on 12.03.2017.
 */
var add = document.getElementById('addElem');
var list = document.getElementById('list');

add.addEventListener('click', function(event) {
    var listNumber = document.getElementsByTagName('li').length;
    console.log(listNumber);
    list.innerHTML += '<li>item ' + listNumber + '</li>';
});

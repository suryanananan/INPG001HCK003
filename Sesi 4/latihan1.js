console.log (24 + 24);
var num = 83;
console.log (num);

var name = 'nana';
var domicile = 'Citayam';
var panjang = 5;
var lebar = 5;

//selector untuk deklarasi variabel disamakan dengan name yg ada di page
var nameElement = document.getElementById('name');
var domicileElement = document.getElementById('domicile');
var container = document.getElementById('container');


//element creator untuk membuat element (tag) di html
var paragraf = document.createElement('p')
paragraf.setAttribute('id', 'paragraf')
paragraf.innerText = 'asusususuausu'

var h1 = document.createElement('h1')
h1.setAttribute('id', 'h1')
h1.innerText = panjang * lebar;

//append untuk tempel nilai kedalam selector
nameElement.innerHTML = name;
domicileElement.innerHTML = domicile;
container.appendChild(paragraf);
container.appendChild(h1);

container.innerHTML = "<h1>Nana</h1>";

//var newparagraf = document.getElementById('paragraf');  
//newparagraf.innerHTML = 'Yo Yo Yo nana';

alert("Yo whats up bro");

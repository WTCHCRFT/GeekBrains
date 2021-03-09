let button = document.getElementById('burger');

let navigation = document.getElementById('menu');

let wrp = document.getElementById('wrp');

button.addEventListener('click', function () {
    navigation.classList.toggle('display-block');
    wrp.classList.toggle('wrp-active');
});
let button2 = document.getElementById('burger2');

let navigation2 = document.getElementById('menu');

let wrp2 = document.getElementById('wrp');

button2.addEventListener('click', function () {
    navigation2.classList.toggle('display-block');
    wrp2.classList.toggle('wrp-active');
});
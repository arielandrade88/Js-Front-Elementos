function qs(element) {
    return document.querySelector(element);
}

let $main = qs(".container");
let $h2 = qs(".subtitulo");
let $a = qs("a");
let $p = document.querySelectorAll("p");
let $body = qs("body");

let userName = prompt("Ingrese su nombre");
//prompt('Ingrese su nombre') ?? 'invitado'

userName.trim() !== ""
    ? ($h2.innerText += ` ${userName}`) : ($h2.innerText += " Invitad@");
$h2.style.textTransform = "uppercase"
$a.style.color = "#E51B3E"

let background = confirm('¿Desea colocar un fondo de pantalla?')

if (background == true) {
    $body.classList.add('fondo')
}

for (let i = 0; i < $p.length; i++) {
    if (i % 2 == 0) {
        $p[i].classList.add("destacadoPar")
    } else {
        $p[i].classList.add("destacadoImpar")
    }
}

$main.style.display = "block"
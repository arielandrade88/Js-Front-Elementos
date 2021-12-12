function qs(element) {
    return document.querySelector(element);
}

let $title = qs('h1')
let $section = qs('section')
let $article = qs('article')

$title.classList.add('titulo')
$article.classList.add('fondoTransparente')
$section.classList.add('fondoCRUD')
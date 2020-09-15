let i = 1;

console.log(document.querySelectorAll('.mySildes'))

Slides(i)
function plus(n){
    Slides(i += n);
    console.log(n)
};

function vu(n){
    Slides(i = n)
}

function Slides(n){
    
    let slides = document.querySelectorAll('.mySlides');
    if (n > slides.lenght) {i = 1}
    if (n < 1) { i = slides.lenght }
    for(p of slides) {
        p.style.display = 'none'
    }    
    if (slides[n-1] === undefined){
        i = 0
        slides[i].style.display = 'flex';
    } else {slides[n-1].style.display = 'flex';}
}

let prix = document.querySelector('.details p').textContent
let PrixConvert = parseInt(prix)

let dec = new Intl.NumberFormat('fr-FR', {style : 'currency', currency : 'XAF'}).format(PrixConvert)

console.log(dec)

document.querySelector('.details p').textContent = dec;

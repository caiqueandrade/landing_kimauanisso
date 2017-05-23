// function trocarSlide(){
//     slides[slideActive].classList.remove('active');
//     slideActive++;
//     if(slideActive == slides.length){
//         slideActive = 0;
//     }
//     slides[slideActive].classList.add('active');
// }

function trocarTexto(){
    textos[textoActive].classList.remove('active');
    textoActive++;
    if(textoActive == textos.length){
        textoActive = 0;
    }
    textos[textoActive].classList.add('active');
}

function mover(){
    var elemento = document.getElementById('bar');
    var width = 1;
    var id = setInterval(frame, 50);
    function frame(){
        if (width >= 100) {
            clearInterval(id);
        }
        else {
            width++;
            elemento.style.width = width + '%';
        }
    }
}

//var imagenes = ['eventos/img1.jpg', 'eventos/img2.jpg','eventos/img3.jpg']  // agregar las cantidad de imagenes que quiera
//cont = 0;
//function carrusel(contenedor){
 //   contenedor.addEventListener('click', e=> {
 //    let atras =contenedor.querySelector('.atras'),
 //    adelante =contenedor.querySelector('.adelante'),
//     img = contenedor.querySelector('img'),
//     tgt = e.target;

//     if(tgt == atras){
//          if (cont > 0) {
//            img.src = imagenes[cont -1];
//            cont--;
//          } else {
//            img.src = imagenes[imagenes.length - 1 ]; 
//            cont = imagenes.length - 1;

//          }
//     } else if(tgt == adelante){
//        if (cont < imagenes.length - 1) {
//            img.src = imagenes[cont + 1];
//            cont++;
//          } else {
//            img.src = imagenes[0]; 
//            cont = 0;
//
//          }
//     }
//
//    });
//}
//document.addEventListener("DOMContentLoaded", () => {
 //   let contenedor = document.querySelector('.contenedor');
//    carrusel(contenedor);
//})
/*carrusel
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
   
    spaceBetween: 30,
    grabCursor:true,
    loop:true,
    breakpoints : {
        991: {
            slidesPerView:4 
        }
    }
});*/





/* NOTICIAS*/
/*const slider_content = document.querySelectorAll('.slider_content')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
let index = 0


const mount = () => slider_content[index].classList.add('active')
const unmount = () => slider_content[index].classList.remove('active')
next.addEventListener('click', () => {
    unmount()
    if(index >= slider_content.length - 1){
        index = 0
    }
    else {

        index++
    }
    mount()
})

prev.addEventListener('click', () => {
    unmount()
    if(index <= 0){
        index = slider_content.length - 1
    }
    else {
        index--
    }
    mount()
})

mount()


*/









const slider_content = document.querySelectorAll('.slider_content')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
let index = 0


const mount = () => slider_content[index].classList.add('active')
const unmount = () => slider_content[index].classList.remove('active')
next.addEventListener('click', () => {
    unmount()
    if(index >= slider_content.length - 1){
        index = 0
    }
    else {

        index++
    }
    mount()
})

prev.addEventListener('click', () => {
    unmount()
    if(index <= 0){
        index = slider_content.length - 1
    }
    else {
        index--
    }
    mount()
})

var header = document.getElementById('Header');
window.addEventListener ('scroll', ()=> {
    var scroll= window.screenY
    if (scroll>10) {
            header.style.backgroundColor = '#121212'
    } else {
        header.style.backgroundColor = 'transparent'
    }
})
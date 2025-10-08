/*--- ANIMATE ---
$(document).ready(function(){

	"use strict";

	$('.animated').appear(function() {

		var elem = $(this);
		var animation = elem.data('animation');

		if ( !elem.hasClass('visible') ) {
			var animationDelay = elem.data('animation-delay');
			if ( animationDelay ) {
				setTimeout(function(){
					elem.addClass( animation + " visible" );
				}, animationDelay);

			} else {
				elem.addClass( animation + " visible" );
			}
		}
	});
});*/


 /* let currentIndex = 0;
  const sliderWrapper = document.querySelector('.slider-wrapper');
  const totalSlides = document.querySelectorAll('.slide-img').length;

  function updateSlider() {
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
  }*/




/*--- MENU ---*/
$('#menu_button').on('click',function(e){
	e.preventDefault();
	if( !$(this).hasClass('active') ){
		$(this).addClass('active');
		$('#menu').addClass('active');
		$('#header').addClass('active');
		$('body').css({ overflow : 'hidden' });
	}else{
		$(this).removeClass('active');
		$('#menu').removeClass('active');
		$('#header').removeClass('active');	
		$('body').css({ overflow : 'visible' });
	}
});
$(function(){
	$(document).ready(function(){
		$("body").on('click',function(e){
			if(e.target.id != $("#menu").attr('id') && !$("#menu").has(e.target).length
			&& e.target.id != $("#menu_button").attr('id') && !$("#menu_button").has(e.target).length
			&& $('#menu').hasClass('active') ){
			$('#menu_button').removeClass('active');
			$('#menu').removeClass('active');
			$('#header').removeClass('active');
			$('body').css({ overflow : 'visible' });
			}
		});
	});
});

if( $('.noticias-square').length ){
var noticiasSquare = new Swiper('.noticias-square', {
		autoplay: {
			delay: 4000,
		},
		speed: 1500,
		loop:true,
		preloadImages:true,
		slidesPerView: 1,
		spaceBetween: 0,
		breakpoints: {
			// when window width is <= 800px
			800: {
			  slidesPerView: 2
			}
		}
	});
}
if( $('.segundo-bloque-home').length ){
var segundoBloqueHome = new Swiper('.segundo-bloque-home .swiper-container', {
		autoplay: {
			delay: 6000,
		},
		speed: 1500,
		loop:true,
		preloadImages:true,
		slidesPerView: 1,
		spaceBetween: 0
	});
}	

$('#gotop').click(function(e){
	e.preventDefault();
	$('body,html').animate({ scrollTop : 0 },1200);
});	

/*--- BUSCADOR ---*/
$('#header .search').click(function(e){
	e.preventDefault();
	if( !$('#buscador').hasClass('active') ){
		$('#buscador').addClass('active');
		$('#buscador input#search').focus();
	}else{
		$('#buscador').removeClass('active');
		$('#buscador input#search').blur();
	}
});

$('#buscador .cerrar').click(function(e){
	e.preventDefault();
	$('#buscador').removeClass('active');
	$('#buscador input#search').blur();
});

/*--- MENU ---*/
$('#header .show').click(function(e){
	e.preventDefault();
	if( !$(this).hasClass('active') ){
		$('body').css({ overflow : 'hidden' });
		$('#menu').addClass('active');
		$(this).addClass('active').find('span').html('Cerrar menú');
	}else{
		$('body').css({ overflow : 'auto' });
		$('#menu').removeClass('active');
		$(this).removeClass('active').find('span').html('Abrir menú');
	}
});

$('#menu li.item a.seccion').click(function(e){
	e.preventDefault;
	$('#menu li.item').removeClass('active');
	$(this).parents('li.item').addClass('active');
}).parents('#menu').find('li.item:first').addClass('active');

$('#buscador .cerrar').click(function(e){
	e.preventDefault();
	$('#buscador').removeClass('active');
});

/*--- IDIOMAS ---*/
$('.idiomas .icono').toggle(function(e){
	e.preventDefault();		
	$(this).removeClass('icon-circle-down').addClass('icon-circle-up');
	$('.idiomas .combo').addClass('active');
	
},function(e){
	e.preventDefault();		
	$(this).removeClass('icon-circle-up').addClass('icon-circle-down');
	$('.idiomas .combo').removeClass('active');
});

$('.idiomas .combo span a').click(function(e){
	return true;
});


/*--- FIXTURE ---*/
if($('.fixture .partidos li').length){
	var partidosVisible = 2;
	var ultimoJugado = $('.fixture .partidos li.jugado').filter(':last');
	if( ultimoJugado.length ){
		if( ultimoJugado.length && $('.fixture .partidos li').length - $('.fixture .partidos li').index( ultimoJugado ) >= partidosVisible ){
			ultimoJugado = $('.fixture .partidos li').index( ultimoJugado );
			//$('.fixture .nav-button-next').addClass('disabled');
		}else{
			ultimoJugado = $('.fixture .partidos li').length - partidosVisible;
		}	
	}else{
		ultimoJugado = 0;
		$('.fixture .nav-button-prev').addClass('disabled');
	}

	if( $('.fixture .swiper-container').length ){
	var fixture = new Swiper('.fixture .swiper-container', {
			speed: 500,
			preloadImages:true,
			slidesPerView: 2,
			spaceBetween: 15,
			initialSlide: ultimoJugado,
			navigation: {
				nextEl: '.fixture .nav-button-next',
				prevEl: '.fixture .nav-button-prev',
			},
			breakpoints: {
				375: {
				  slidesPerView: 2,
				  spaceBetween: 15
				},
				640: {
				  slidesPerView: 3,
				  spaceBetween: 10
				}
			}
		});
	}
}

// banners
if($('.swiper-slide','.banner').length > 1){
var banners = new Swiper('.banner .swiper-container', {
		direction: 'vertical',
		autoplay: {
			delay: 3500,
		},
		autoHeight:true,
		speed: 1000,
		loop:true,
		preloadImages:true,
		slidesPerView: 1,
		spaceBetween: 0
	});
}


/*--- / OFERTAS ---*/
if( $('.productos.swiper-container').length ){
var _productos = new Swiper('.productos.swiper-container', {
	paginationClickable: false,
	navigation: {
		nextEl: '#ofertas_locademia .sw-button-next',
		prevEl: '#ofertas_locademia .sw-button-prev',
	},
    slidesPerView: 5,
    spaceBetween: 20,
	breakpoints: {
		375: {
		  slidesPerView: 2,
		  spaceBetween: 5
		},
		640: {
		  slidesPerView: 2,
		  spaceBetween: 10
		},
		800: {
		  slidesPerView: 3,
		  spaceBetween: 15
		},
		1024:{
			slidesPerView: 4,
		  	spaceBetween: 20
		}
	}	
});
}

/*--- PLANTEL HOME ---*/
if( $('.plantel_home .swiper-container').length ){
var _plantel_home = new Swiper('.plantel_home .swiper-container', {
	paginationClickable: false,
	navigation: {
		nextEl: '.plantel_home .sw-button-next',
		prevEl: '.plantel_home .sw-button-prev',
	},	
	freeMode: true,
	loop: true,
	speed: 600,
	slidesPerView: 7,
	breakpoints: {
		// when window width is <= 320px
		375: {
		  slidesPerView: 2,
		  spaceBetween: 10
		},
		// when window width is <= 480px
		480: {
		  slidesPerView: 3
		},
		// when window width is <= 640px
		640: {
		  slidesPerView: 4
		},
		// when window width is <= 800px
		800: {
		  slidesPerView: 5
		}
	}
});
}

if( $('.galerias_home.swiper-container').length ){
var _galerias_home = new Swiper('.galerias_home.swiper-container', {
	paginationClickable: false,
	navigation: {
		nextEl: '.galerias_home .sw-button-next',
		prevEl: '.galerias_home .sw-button-prev',
	},	
	slidesPerView: 'auto',
	freeMode: true
});
}




(function ($){


	window.addEventListener('load', function(){
		// retirar o loader da tela quando tudo estiver pronto
		setTimeout(function(){
			$('#loader').fadeOut(200);
		}, 1000)

	});

	$('input[type=radio][name=chk1]').on('change', function() {
		console.log('teste')
		$('.btn-finalizar').attr('disabled', false);
   });

	$(".btn-pesquisa").click(function(event){
		$(".btn-pesquisa").removeClass("check");
		$(this).toggleClass("check");
	});

	$('.colecao-wrraper-flex').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 3,
        prevArrow: '<img src="/img/pesquisa/colecao/seta-esquerda.png" class="slick-prev" alt="Esquerda" />',
        nextArrow: '<img src="/img/pesquisa/colecao/seta-direita.png"  class="slick-next" alt="Esquerda" />',
		infinite:false,
		responsive: [
		  {
			breakpoint: 768,
			settings: {
			  arrows: true,
			  centerMode: true,
			  centerPadding: '40px',
			  slidesToShow: 3
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  arrows: true,
			  centerMode: true,
			  centerPadding: '40px',
			  slidesToShow: 1
			}
		  }
		]
	  });

})($)

(function ($){
	window.addEventListener('load', function(){
		// retirar o loader da tela quando tudo estiver pronto
		setTimeout(function(){
			$('#loader, #loader-biz').fadeOut(200);
		}, 1000)
	});

	$('input[type=radio][name=chk1]').on('change', function() {
		console.log('teste')
		$('.btn-finalizar').attr('disabled', false);
   });

	$(".btn-pesquisa").click(function(){
		$(".btn-pesquisa").removeClass("check");
		$(this).toggleClass("check");
	});

})($)
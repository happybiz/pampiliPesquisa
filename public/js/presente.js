(function ($){

	$('input[type=radio][name=chk1]').on('change', function() {
		console.log('teste')
		$('.btn-finalizar').attr('disabled', false);
   });

	$(".btn-presente-escolha").click(function(){
        // não pode selecionar mais de 3
        var n = $("input[name='chk1']:checked").length;
        var check = $(this).children('input');

        if(n > 3){
            $(check).attr('checked', false)
            return
        }

        $('.btn-presente-escolha').removeClass('btn-ativo');

        if(n === 3){
            $('.btn-finalizar').attr('disabled', false);
            $('.btn-presente-escolha').addClass('btn-cinza');
            $('.ativo').addClass('btn-ativo');
            $(this).addClass('btn-ativo');
        }else{
            $('.btn-finalizar').attr('disabled', true)
            $('.btn-presente-escolha').removeClass('btn-cinza');
        }
        
        // se tiver a class ativo, remover
        if($(this).hasClass('ativo')){
            $(this).removeClass('ativo');
            $(check).attr('checked', false);
            return
        }
            
		$(this).toggleClass("ativo");
	});

})($)
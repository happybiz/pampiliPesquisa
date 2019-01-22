(function ($){

	$('input[type=radio][name=chk1]').on('change', function() {
		console.log('teste')
		$('.btn-finalizar').attr('disabled', false);
   });

	$(".btn-marca-escolha").click(function(){
        // não pode selecionar mais de 3
        var n = $("input[name='chk1']:checked").length;
        var check = $(this).children('input');

        if(n === 3){
            $('.btn-finalizar').attr('disabled', false);
        }else{
            $('.btn-finalizar').attr('disabled', true)
        }
        
        // se tiver a class ativo, remover
        if($(this).hasClass('ativo')){
            $(this).removeClass('ativo');
            $(check).attr('checked', false);
            return
        }

        if(n > 3){
            $(check).attr('checked', false)
            return
        }
            
		$(this).toggleClass("ativo");
	});

})($)
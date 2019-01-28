($)(function($){


	function corElementos(elemento, evt){
        var terminou = true;
        var inputs = $('.somar');


        // no mouser hover ou padrao sera cinza
        // colocar o bg-tual em todos "PRÈ" irmãos
        // caso os pontos passe a quantidade limite retorne sem fazer nada
        var valor       = elemento.getAttribute('data-number');
        

        // retorna e zera o campo
        if(evt.type === 'click' && $(elemento).hasClass('ativo')){
            console.log('teste');
            $(elemento).siblings().removeClass('bg-atual ativo');
            $(elemento).removeClass('bg-atual ativo')
            $(elemento).parents('.concordancia').children('.somar').val(0);
            $('.btn-finalizar').attr('disabled', true);

            return    
        }

        //trocar o valor
        $(elemento).parents('.concordancia').children('.somar').val(valor);
        $(elemento).addClass('ativo');
        $(elemento).prevAll().addClass('ativo');
        
        $(inputs).each(function(index){
            var valor = parseInt($(this).val());
            if(valor === 0){
                terminou = false;
                }
        });

        if(terminou){
            $('.btn-finalizar').attr('disabled', false);
            return
        }
    }    
    
	$('.pegar-numero').on('click', function(e){
        corElementos(this, e);
    });
    
})
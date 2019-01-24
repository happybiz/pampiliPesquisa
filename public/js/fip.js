($)(function($){


	function corElementos(elemento, evt){

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
            
            somar();
            mensagem();
            return    
        }

        //trocar o valor
        $(elemento).parents('.concordancia').children('.somar').val(valor);
        $(elemento).addClass('ativo');
        $(elemento).prevAll().addClass('ativo');
    }    
    
	$('.pegar-numero').on('click', function(e){
        corElementos(this, e);
    });
    
})
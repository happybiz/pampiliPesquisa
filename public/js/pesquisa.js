($)(function($){

	function corElementos(elemento){
            
        var valor = parseInt($(elemento).val());
        var limit = 10;
        var cor = 'rgba(221, 86, 166,' + valor / 10  +')';
        var img = $(elemento).parents('.concordancia').find('.status-cara');
        $(elemento).css('background-color', cor);
        switch(parseInt(valor)){
            case 1 || 2:
                $(img).attr('src', 'img/indicadores/1.png');
                break;
            case 3 || 4:
                $(img).attr('src', 'img/indicadores/2.png');
                break;
            case 5 || 6:
                $(img).attr('src', 'img/indicadores/3.png')
                break;
            case 7 || 8:
                $(img).attr('src', 'img/indicadores/4.png');
                break;
            case 9 || 10:
                $(img).attr('src', 'img/indicadores/5.png');
                break;
        }
		// caso elemento maior que zero a cor a baixo sera adicionadO 
	    
	}

    
	//EVENTOS
	$('.rangeSlider').on('input change', function(){
        console.log('text');
        corElementos(this);

    });
    
});
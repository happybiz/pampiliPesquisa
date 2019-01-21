
(function ($){
	$('.base-escolher > .base-header, .base-escolher > .base-corpo').on('click', function(e){
        e.stopPropagation();
        var papai = $(this).parent();
        $('.base-escolher').removeClass('ativo');        
        $(papai).addClass('ativo');
        
        $('.inputBase').removeAttr('checked');
        $(this).children('input').attr('checked', true);
        })
        
        $(' .base-rodape').on('click', function(){
            $(this).children('.outroNumero').slideToggle(500);    
        })
})($)
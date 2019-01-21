
(function ($){
    var btnDeletar  = $('.materiais-deletar');
    var modal       = $('#deletarModal');
    var btnCerteza  = $('#certeza');
    var elSeraDeletado = null;

    // excluir out feachar modal
    function deletarElemento(){
        if(!elSeraDeletado){
            throw("Opsss!!! Precisamos de algo para deletar")
            return         }
        $(elSeraDeletado).fadeOut(400);
    }
        
    // abrir modal para confirmar exclusão
    btnDeletar.on('click', function(){
        $(modal).modal();
        elSeraDeletado = $(this).parents('tr');
    });

    btnCerteza.on('click', deletarElemento);

    //
    $('.img-abrir').off().on('click', function(e){
        var pai = $(this).parents('.com-pai').first();
        $(pai).children('.filho, .com-pai').slideToggle(200);

        e.stopPropagation();

        $(this).toggleClass('img-abrir-rot');
    })
})($)
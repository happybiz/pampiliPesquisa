(function($){
    var modalDuplicar = $('#duplicarModal');
    // clique no duplicar
    $('.duplicar').on('click', function(){
        $(modalDuplicar).modal();;
    });




    // DELETAR // 
    var btnDeletar  = $('.materiais-deletar');
    var modalDeletar  = $('#deletarModal');
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
        $(modalDeletar).modal();
        elSeraDeletado = $(this).parents('tr');
    });

    btnCerteza.on('click', deletarElemento);
})($)
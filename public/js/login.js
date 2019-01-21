(function($){
    $('#txtSenha').on('focus', function(){
        $('#zib').attr('src', 'img/zib-login-tela2.png');
    });
    $('#txtSenha').on('blur', function(){
        $('#zib').attr('src', 'img/zib-login-tela.png');
    })
    $('#btnLogin').on('click', function(){
        location.href='/cronograma.html';
    })
})($)
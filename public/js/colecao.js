(function ($){
    $('.colecao-wrraper-flex').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        prevArrow: '<img src="/img/pesquisa/colecao/seta-esquerda.png" class="slick-prev" alt="Esquerda" />',
        nextArrow: '<img src="/img/pesquisa/colecao/seta-direita.png"  class="slick-next" alt="Esquerda" />',
        infinite:false,
        responsive: [
        {
            breakpoint: 768,
            settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
            }
        }
        ]
    });

    $('.slick-current button').attr('disabled', false);  
    $('.slick-prev, .slick-next').on('click',function(){ 
        $('.slick-slide button').attr('disabled', true);      
        $('.slick-current button').attr('disabled', false);
    });

    $('.botoes-colecao button').on('click', function(){
        $('.slick-current .botoes-colecao button').removeClass('borda-check');
        $(this).toggleClass('borda-check'); 
        $(this).parents('.bg-colecao').addClass('img-certo');

        var count = $('.img-certo').length;
        var universal = $('.slick-slide').length;

        if(count === universal){
            $('.btn-finalizar').attr('disabled', false);
        }else{
            $('.btn-finalizar').attr('disabled', true);
        }
    });

})($)
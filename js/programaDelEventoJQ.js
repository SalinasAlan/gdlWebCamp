$(document).ready(function(){
    
    //lettering (main-title)
    $('.nombre-sitio').lettering();

    //menu fijo(barra fija)
    var windowHeight = $(window).height();
    var barraHeight = $('.barra').innerHeight();
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > windowHeight) {
            $('.barra').addClass('fixed');
            $('body').css({'margin-top': barraHeight+'px'});
        }else{
            $('.barra').removeClass('fixed');
            $('body').css({'margin-top': '0px'});
        }
    });

    //Menu resposive
    $('.menu-movil').on('click', function(){
        $('.navegacion-principal').slideToggle();
    });


    //programa de conferencias
    $('.programa-evento .info-cursos:first').show();

    $('.menu-programa a').on('click', function(){
        $('.menu-programa a').removeClass('activo');
        $(this).addClass('activo');
        $('.ocultar').hide();
        var enlace = $(this).attr('href');
        $(enlace).fadeIn(500);
        return false;        
    });
    

    //Animaciones para los numeros
    $('.resumen-evento li:nth-child(1) p').animateNumber({number: 6}, 1200);
    $('.resumen-evento li:nth-child(2) p').animateNumber({number: 15}, 1200);
    $('.resumen-evento li:nth-child(3) p').animateNumber({number: 3}, 1300);
    $('.resumen-evento li:nth-child(4) p').animateNumber({number: 9}, 1300);


    //cuenta regresiva
    $('.cuenta-regresiva').countdown('2020/03/5 9:00:00', function(event){
        $('#dias').html(event.strftime('%D'));
        $('#horas').html(event.strftime('%H'));
        $('#minutos').html(event.strftime('%M'));
        $('#segundos').html(event.strftime('%S'));
    });

});
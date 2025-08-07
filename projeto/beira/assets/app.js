// extrapolo.com | BEIRA | Agosto 2014

function random(max, negative){
    var random = Math.round(Math.random()*max)
    if (negative){random -= max/2}
    return random}
function sacode(){ $("#fundo").animate({left: random(1900, true), top: random(700, true)}, 11000, function(){sacode()})}
function fantasma(){ $("#camarada").animate({left: random($('body').width(), false), top: random($('body').height(), false)}, 8000, function(){fantasma()})}
function cronos(){ $("#crono").text(diff_dates(new Date(), new Date(2014, 12-1, 21, 00, 00, 00)))}
function zero_time(x) {return ((x>9)?"":"0")+x}
function diff_dates(d1, d2) {
    var ms = (d2.getTime()-d1.getTime())/1000;
    if (ms>=0){
        days = Math.floor(ms / (60 * 60 * 24));
        ms %= (60 * 60 * 24);
        hours = Math.floor(ms / (60 * 60));
        ms %= (60 * 60);
        minutes = Math.floor(ms / 60);
        ms %= 60;
        seconds = Math.floor(ms);
        return "em " + days + "d" + hours + "h" + minutes + "m" + seconds + "s";
    } else {
        return "BOOOOOMMMMM!!!";
    }}
function is_valid_mail(email){
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);}
function derrapar(isso, depois){
    var top = isso.offset().top;
    var left = isso.offset().left;
    var escondido = '-' + (isso.width() + left + 100) + 'px';
    $('.item, #navs').hide();
    isso
        .css('top', top)
        .css('left', left)
        .css('position', 'fixed')
        .animate({'left': escondido}, 1500, function(){
            isso
                .css('top', '')
                .css('left', '')
                .css('position', '')
                .hide();
            depois();
        })
    .show()}
function translate_to(a){
    window.lang = a;
    var other = "pt"==a?"en":"pt";
    $("#to-"+a).css("text-decoration","underline");
    $("#to-"+other).css("text-decoration","none");
    $.each($("p[en]"),function(b,c){$(c).html($(c).attr(a))})
}


$(document).ready(function() {
    window.timer = 0;
    window.subitem = false;
    window.lang = 'pt';
    $(document).on('mouseout', function(event){ $('#cursor').hide() });
    $(document).on('mousemove', function(event){ window.timer = 0 });
    $("body").mousemove(function(e){
        window.timer = 0;
        if (!$('#cursor').is(":visible")){ $('#cursor').show() }
        $("#cursor")
            .css("left", e.pageX-10)
            .css("top", e.pageY+-10);
    });

    // begin
    jQuery.fx.interval = 50;
    $('#camarada')
        .css('top', $('body').height()/3)
        .css('left', $('body').width()/2);
    sacode()
    applyHover()
    setInterval("cronos()", 1000);
    $('#fundo').on('load', function(){ $('#todo').fadeIn(2000) })

    // screensaver
    var screensaver = $('#screensaver');
    screensaver
        .css('width', $(window).width()*1.5)
        .css('top', $(window).height()/3)
    var saver = 0;
    setInterval(
        function(){
           window.timer+=1;
           if (window.timer>40){ // ativa em 40s
                $('#cursor, #fundo, #navs, #menu, #camarada').css('opacity', 0);
                if(!screensaver.is(':visible')){ screensaver.fadeIn(1000) }
                if (saver == 0){
                    saver = setInterval(function(){screensaver.animate({rotate: '+=1deg'}, 0)}, 20);
                }
           } else {
                if(screensaver.is(':visible')){
                    $('#cursor, #fundo, #navs, #menu').css('opacity', 1);
                    if (window.subitem){ $('#camarada').css('opacity', '0.8') }
                    screensaver.hide();
                    clearInterval(saver);
                    saver = 0;
                }
           }
        }, 1000
    );

    // Navs: Imagem || Texto
    $('#radio-nav-img, #nav-img').on("click", function(){
        $('#radio-nav-img').attr('checked', true);
        $.each($('#menu>a.beira'), function(i,e){
            $(e).html("<img pt='"+ $(e).children().attr('pt') +"' en='"+ $(e).children().attr('en') + "' class='item icon' src=\"assets/images/"+ $(e).attr("img") +".png\"><br/>");
        });
        applyHover()
    });
    $('#radio-nav-txt, #nav-txt').on("click", function(){
        $.each($('#menu>a.beira'), function(i,e){
            $('#radio-nav-txt').attr('checked', true);
            $(e).html("<p class='item baixo' pt='"+ $(e).children().attr('pt') +"' en='"+ $(e).children().attr('en') +"'>"+ $(e).children().attr(window.lang) + "</p>");
        });
        applyHover();
    });

    // voltar >> fantasma icon
    $('#camarada').on('click', function(){
        $("#camarada").stop().fadeOut(1000, function(){ fantasma() });
        var atual = $(".tela:visible");
        var escondido = $('#todo').width();
        $('.colecao').scrollLeft(0);
        $('.colecao').fadeOut(300);
        console.log(atual);
        atual.animate({left: -(escondido)}, 1500, function(){
            $(this).hide();
            $('.item, #navs').fadeIn(800);
            $('#camarada').stop();
            $('.subitem').show();
            window.subitem = false;
        });
    })

    $('#newsletter').on('click', function(){
        var email = prompt("Inscrever-se na Newsletter. Qual seu email?");
        if (is_valid_mail(email)){
            $.get("/newsletter.php?mail="+email, function(data){
                alert(data);
            })
        } else {
            alert("Opz. Email inválido.");
        }
    })

    function applyHover(){
        window.timer = 0;
        $(".tela").hide();
        $('.item')
            .on('mouseenter',
                function(){
                    $('#fundo, #navs').css('visibility', 'hidden');
                    $('.item').css('visibility', 'hidden');
                    $(this).css('visibility', 'visible');
                })
            .on('mouseleave',
                function(){
                    $('#fundo, #navs').css('visibility', 'visible');
                    $('.item').css('opacity', '1');
                    $('.item').css('visibility', 'visible');
                })
            .on('click', function(){
                window.subitem = true;
                var tela = $(this).parent().attr('img').replace('nav-', 'tela-');
                tela = $('#'+tela);
                var la = $(window).width() + tela.width();
                tela
                    .css('left', la)
                    .animate({'left': 0}, 2000)
                    .show();

                derrapar($(this), function(){
                    // fundo volta em fade
                    $('#fundo').hide().css('visibility', 'visible').stop().fadeIn(1000);
                    $('#camarada').css('opacity', '0.8').stop().fadeIn(1000, function(){ fantasma() });
                    //$('.tela').css('white-space', 'normal');
                    sacode();
                    // especial behaviour:
                    if (tela.attr('id')=="tela-arquivo"){
                        $('#tela-arquivo>.colecao').fadeIn(1000);
                        $.each($("#tela-arquivo>.colecao>img"), function(i, e){
                            $(e).attr('src', $(e).attr('load'));
                        });
                    }
                })
            })

        // exibir imagem de coleção em fade ao carregar
        $('.colecao>img').on('load', function(){
            $(this).hide().fadeIn(500);
        })

        // coleções
        $('.subitem')
            .on('mouseenter',
                function(){
                    $('#fundo, #navs').css('visibility', 'hidden');
                    $('.subitem').css('visibility', 'hidden');
                    $(this).css('visibility', 'visible');
                })
            .on('mouseleave',
                function(){
                    $('#fundo, #navs').css('visibility', 'visible');
                    $('.subitem').css('opacity', '1');
                    $('.subitem').css('visibility', 'visible');
                })
            .on('click', function(){
                $('.subitem').hide();
                $(this).show();
                //todo: ligar subitem no fantasma
                var colec = '#'+$(this).attr('ref');
                $.each($(colec+">img"), function(i, e){
                    $(e).attr('src', $(e).attr('load'));
                });
                $(colec+">img").last().css('margin-right', '35px');
                $(colec).fadeIn(1000);
            })

        $("#to-pt").on("click",function(){translate_to("pt")});
        $("#to-en").on("click",function(){translate_to("en")});
    }
});

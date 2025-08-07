/* Developed by extrapolo.com */
$(document).ready(function(){

  var DOURADO = '#baa772';
  timerTick();

  window.direction = 0;
  window.currentTime = 0;
  window.tourCurrentTime = 0;
  window.animating = false;
  window.loaded = false;

  function resize(){
    var largura = $(window).width() - 30;
    $('#todo').height(0);
    $('#todo').height($(document).height());

    $('body').css('height', '100%');
    $('.seta-nav').css('top', $(window).height()/2 - 12);
    $('#planta-geral').css('top', top);

    if ($('#planta-geral').is(':visible')){
      var planta_width = $(document).width() - 225 - 125;
      $('#planta-geral').width(planta_width - 30);
      var top = $(window).height()/2 - $('#planta-geral').height()/2;
      $('#planta-geral').css('top', top);
    }

    if (!$('#home')[0]){
      $('#todo').css('height', $(document).height());
      $('#todo').css('width', $(window).width());
    } else {
      var videoHeight = $(window).height() - $('p.home').height() - 90;
      $('#web-video').height(videoHeight);
      $('#video-container').css('height', videoHeight);
    }

    if (full = $('.full')[0]){ lightBoxLoaded() }

    // remove fixed-right propoertuy when < 1000
    if ($(window).width() < 1000){
      $('#fotos').css('right', '');
    } else {
      if ($('#fotos').css('right') != '120px'){
        $('#fotos').css('right', '120px');
      }
    }

    if ($(window).height() < 590){
      $('#planta').hide();
    } else {
      if ((window.loaded) && (!$('#lightbox').is(":visible")) && (!$('#planta-geral').is(":visible"))){
        $('#planta').show();
      }
    }
  }
  $(window).resize(function(){ resize() })

  // toggle Uhr
  $('#uhr').on('click', function(){
    $(this).attr('dia') == 'true' ? setNoite(true) : setDia(true)
  })

  var hora_rio = getFuso();
  ((hora_rio.getHours() > 6) && (hora_rio.getHours() < 18)) ? setDia(false) : setNoite(false)

  function setNoite(animate){
    window.dia = false;
    $('#uhr').attr('dia', 'false');
    $('#uhr-noite').css('opacity', '1');
    $('#uhr-dia').css('opacity', '0.5');
    $('#planta-geral>img').first().attr('src', $('#planta-geral>img').first().attr('src').replace('dia', 'noite'));
    $('.muda').animate({color: '#ffffff'}, 'slow');
    $('input, textarea').animate({backgroundColor: '#282828'}, 'slow');
    $.each($('#fotos>img'), function(i, e){$(e).attr('src', $(e).attr('src').replace('dia', 'noite'))});
    $("p[comodo]").animate({color: '#71684d'}, 'slow');
    $(".num").animate({color: '#71684d'}, 'slow');
    $('.separator').animate({borderColor: '#71684d'}, 'slow', function(){
      $('#menu-nav>p').mouseleave();
    });

    if ($('#tour')[0]){
      var tour = $('#player');
      var src = tour.attr('src');
      var atual = src.match(/\d+/);
      tour.attr('src', src.replace(atual, '95433406'));
      tour.load();
    }

    if ($('#lightbox>img.full')[0]){
      $('#lightbox>img.full').attr('src', $('#lightbox>img.full').attr('src').replace('dia', 'noite'))
    }
    if ($('#home')[0]){
      var video = $('#web-video')[0];
      $.each($('#web-video>source'), function(i, e){ $(e).attr('src', $(e).attr('src').replace('dia', 'noite'))} );
      if ( animate==true ){ window.currentTime = video.currentTime }
      $(video).animate({'opacity': '0'}, 800, function(){
        video.load();
      });
    }
    if (animate){
      $('#todo').animate({backgroundColor: '#282828'}, 'slow');
      $('.comodo').animate({backgroundColor: '#282828'}, 'slow');
    } else {
      $('#todo').css('background-color', '#282828');
      $('.comodo').css('background-color', '#282828');
    }
    if(!$('#home')[0]){
      $('#todo').css('width', $(window).width());
      $('#todo').height($(document).height());
    }
    preloadPlanta()
  }

  function setDia(animate){
    window.dia = true;
    $('#uhr').attr('dia', 'true');
    $('#uhr-dia').animate({opacity: '1'}, 'slow');
    $('#uhr-noite').animate({opacity: '0.5'}, 'slow');
    $('#planta-geral>img').first().attr('src', $('#planta-geral>img').first().attr('src').replace('noite', 'dia'));
    $('.muda').animate({color: '#000000'}, 'slow');
    $('input, textarea').animate({backgroundColor: '#ffffff'}, 'slow');
    $.each($('#fotos>img'), function(i, e){$(e).attr('src', $(e).attr('src').replace('noite', 'dia'))});
    $("p[comodo]").animate({color: '#d5cbb1'}, 'slow');
    $(".num").animate({color: '#d5cbb1'}, 'slow');
    $('.separator').animate({borderColor: '#d5cbb1'}, 'slow', function(){
      $('#menu-nav>p').mouseleave();
    });

    if ($('#tour')[0]){
      var tour = $('#player');
      var src = tour.attr('src');
      var atual = src.match(/\d+/);
      tour.attr('src', src.replace(atual, '95433404'));
      tour.load();
    }

    if ($('#lightbox>img.full')[0]){
      $('#lightbox>img.full').attr('src', $('#lightbox>img.full').attr('src').replace('noite', 'dia'))
    }
    if ($('#home')[0]){
      var video = $('#web-video')[0];
      $.each($('#web-video>source'), function(i, e){ $(e).attr('src', $(e).attr('src').replace('noite', 'dia'))} );
      window.currentTime = video.currentTime;
      $(video).animate({'opacity': '0'}, 500, function(){
        video.load();
      });
    }
    if (animate){
      $('#todo').animate({backgroundColor: '#ffffff'}, 'slow');
      $('.comodo').animate({backgroundColor: '#ffffff'}, 'slow');
    } else {
      $('#todo').css('background-color', '#ffffff');
      $('.comodo').css('background-color', '#ffffff');
    }
    preloadPlanta()
  }

  // slide inicial em home
  $('#sair-home').on('click', function(){
    $('body').css('overflow', 'hidden');
    $("#galeria")
      .hide()
      .css('visibility',  'visible')
      .fadeIn(2000);
    $('#todo').height($(document).height());
    $('html, body').animate({
        scrollTop: $("#galeria").offset().top
    }, 1500, function(){
      $('#comodo-1').removeClass('absoluto').addClass('fixo');
      $('body,html').scrollTop(0);
      $('#home').hide(0, function(){
        $('#menu-nav').css('position', 'fixed');
        $('#fotos').css('position', 'absolute');
        $('#todo').height($(document).height());
        $('#todo').height($("#fotos").height() + 30);
        $('body').css('overflow', 'auto');
        $('#menu-topo').slideDown(function(){
          $(this).css('display', 'inline-block');
          // não exibir planta quando galeria aberta
          if ($('#planta').attr('off') != "true"){
            $('#planta').show('slow');
          }
          // force select fixed comodo
          $('#menu-nav>p').mouseleave();
          window.loaded = true;
        });
      });
      $('#home').remove();
    });
  })

  // highlight related menu-nav item
  function highlightRelated(atual){
    var color = window.dia ? '#d5cbb1' : '#71684d';
    $("p[comodo]").css('color', color);
    $(".num").css('color', color);
    var nav_atual = $("p[comodo='"+atual+"']");
    nav_atual.css('color', DOURADO);
    $(".num[id='"+ nav_atual.attr('ref') +"']").css('color', DOURADO);
  }

  // hora (GMT+3) no Rio de Janeiro
  function getFuso(){
    var local = new Date();
    var fuso =  3 - (new Date()).getTimezoneOffset()/60;
    return (new Date(local.setHours(local.getHours() - fuso)));
  }

  // Tic-Tac Uhr
  function timerTick() {
    with (getFuso()) {
      var h, m, s;
      h = 30 * ((getHours() % 12) + getMinutes() / 60);
      m = 6 * getMinutes();
      s = 6 * getSeconds();
      document.getElementById('h_pointer').setAttribute('transform', 'rotate(' + h + ', 50, 50)');
      document.getElementById('m_pointer').setAttribute('transform', 'rotate(' + m + ', 50, 50)');
      document.getElementById('s_pointer').setAttribute('transform', 'rotate(' + s + ', 50, 50)');
      setTimeout(timerTick, 1000);
    }
  }

  // selecionar último comodo quando há 50px do fim da página
  function is_last_comodo(){
    if ((window.loaded) && ($(window).scrollTop() > $(document).height() - $(window).height() - 50)){
      highlightRelated(10);
    }
  }

  // window scroll
  $(window).scroll(function(){
    // fixar label comodo
    if (window.loaded){
      var fixo = $(".fixo>p.muda[fixo='true']").first().parent();
      if (fixo.size()){
        var comodo = parseInt(fixo.attr('id').match(/\d+/)[0]);
        var next = $('#comodo-' + (comodo+1));
        var prev = $('#comodo-' + (comodo-1));
        highlightRelated(comodo);
        if ((next.size()) && (fixo.size()) && (fixo.offset().top >= next.offset().top) &&
          (window.direction < $(window).scrollTop())){
          // descendo: fixar
          var fixo_top = next.next().offset().top - 15;
          fixo.css('top', fixo_top);
          fixo.attr('top', fixo_top);
          fixo.addClass('absoluto');
          fixo.children().attr('fixo', false);
          next.removeClass('absoluto');
          next.addClass('fixo');
          fixo.css('visibility', 'hidden');
          next.children().attr('fixo', true);
        }
        if ((window.direction > $(window).scrollTop()) && prev[0] && (fixo.offset().top - 5 <= prev.attr('top'))){
          // subindo: liberar
          prev.css('top', '');
          prev.removeClass('absoluto');
          prev.addClass('fixo');
          prev.css('visibility', 'visible');
          prev.children().attr('fixo', true);
          fixo.removeClass('fixo');
          fixo.addClass('absoluto');
          fixo.children().attr('fixo', false);
        }
        // set to recognize up or down scroll
        window.direction = $(window).scrollTop();
      }
      is_last_comodo();
    }
  })

  function goToComodo(comodo){
    if (!window.animating){
      window.animating = true;
      fecharPlanta();
      if (comodo==1){
        $('html, body').animate({ scrollTop: 0}, 1500, function(){window.animating = false;});
        return false;
      }
      var atual = parseInt(($(".muda[fixo='true']").parent()).attr('id').match(/\d+/)[0]);
      var destino, extra;
      if (comodo > atual){
        // abaixo
        destino = $("#comodo-"+(comodo));
        extra = 3
      } else {
        // acima
        destino = $("#comodo-"+(comodo-1));
        extra = 4
      }
      $('html, body').animate({
        scrollTop: destino.offset().top - extra
      }, 1500, function(){
        window.animating = false;
      });
    }
  }

  $('p[ref]')
    .on('mouseenter', function(){ $("#" + $(this).attr('ref')).css('color', DOURADO)})
    .on('mouseleave', function(){ $("#" + $(this).attr('ref')).css('color', '#dcd390')})

  $('#menu-nav>p')
    .on('mouseenter', function(){ $(this).css('color', DOURADO)})
    .on('mouseleave', function(){
        var fixo = $(".fixo>p.muda[fixo='true']").first().parent();
        if (fixo.size()){
          var comodo = parseInt(fixo.attr('id').match(/\d+/)[0]);
          highlightRelated(comodo);
        }
        is_last_comodo();
      })
    .on('click', function(){ goToComodo($(this).attr('comodo')) })

    $('#uhr-dia')
      .on('mouseenter', function(){ $(this).css('opacity', '1') })
      .on('mouseleave', function(){ $(this).css('opacity', (window.dia ? '1' : '0.5')) })
    $('#uhr-noite')
      .on('mouseenter', function(){ $(this).css('opacity', '1') })
      .on('mouseleave', function(){ $(this).css('opacity', (window.dia ? '0.5' : '1')) })

  $('#planta')
    .on('mouseenter', function(){
      $(this).attr('src', 'assets/images/planta/thumb-full.png');
      $(this).animate({width: 205, height: 138}, 200);
    })
    .on('mouseleave', function(){
      $(this).attr('src', 'assets/images/planta/thumb.png');
      $(this).animate({width: 190, height: 123}, 200);
    })
    .on('click', function(){
        // exibr planta geral
        $(this).fadeOut();
        $('#fotos').animate({'opacity': '0.05'}, 'slow');
        $('#planta-geral').fadeIn('slow');
        resize();
    })

    function fecharPlanta(){
      $('#planta').fadeIn('slow');
      $('#fotos').animate({opacity: '1'}, 'slow');
      $('#planta-geral').fadeOut('slow');
    }

    function fecharLightbox(){
      $('#lightbox>img.full').remove();
      $('#lightbox').hide();
      $('#menu-nav').show();
      $('#planta').attr('off', 'false');
      $('#planta').show();
      $('#fotos').show();
      $('body').css('overflow', 'auto');
    }

    $('#fechar-lightbox').on('click', function(){
      $('#galeria').fadeIn('slow');
      fecharLightbox();
    })

    $('#fechar-planta').on('click', function(){ fecharPlanta() })
    $('.fechar-btn')
      .on('mouseenter', function(){
        $(this).attr('src', 'assets/images/fecha_hover.png');
      })
      .on('mouseleave', function(){
        $(this).attr('src', 'assets/images/fecha_btn.png');
      })

    $('#planta-img')
      .on('click', function(){
        fecharPlanta();
        var comodo = $(this).attr('comodo');
        if (parseInt(comodo)>0){ goToComodo(comodo) }
      })
      .on('mousemove', function(e){
        var x = (e.offsetX || e.clientX - $(e.target).offset().left + window.pageXOffset )
        var y = (e.offsetY || e.clientY - $(e.target).offset().top + window.pageYOffset );

        if (proporcional(x, y, 13, 228, 3, 189) || proporcional(x, y, 14, 197, 187, 238)){
          setPlanta('saladeestar', 1);
        } else {
          if (proporcional(x, y, 376, 494, 466, 529)){
            setPlanta('banheiro', 10);
          } else {
            if (proporcional(x, y, 493, 681, 0, 177)){
              setPlanta('cozinha', 5);
            } else {
              if (proporcional(x, y, 378, 486, 84, 144)){
                setPlanta('lavabo', 6);
              } else {
                if (proporcional(x, y, 238, 375, 0, 150)){
                  setPlanta('mezanino', 2);
                } else {
                  if (proporcional(x, y, 390, 585, 183, 280)){
                    setPlanta('saladejantar', 4);
                  } else {
                    if (proporcional(x, y, 195, 234, 191, 283) || proporcional(x, y, 230, 390, 150, 281)){
                      setPlanta('saladetv', 3);
                    } else {
                      if (proporcional(x, y, 0, 261, 385, 622) || proporcional(x, y, 183, 347, 564, 668)){
                        setPlanta('suite1', 7);
                      } else {
                        if (proporcional(x, y, 354, 555, 563, 665) || proporcional(x, y, 556, 585, 630, 665)){
                          setPlanta('suite2', 8);
                        } else {
                          if (proporcional(x, y, 561, 699, 379, 621) || proporcional(x, y, 697, 954, 379, 473)){
                            setPlanta('suite3', 9);
                          } else {
                            setPlanta('comodo', 0);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      })

    function setPlanta(src, comodo){
      var path = 'assets/images/planta/';
      var dia = window.dia ? 'dia' : 'noite';
      var planta = $('#planta-img');
      var src = path + src + '-' + dia + '.png';
      if (comodo==0){ src = path + "geral-"+dia+".png" }
      if (planta.attr('src')!=src){
        planta.attr('src', src);
        planta.attr('comodo', comodo);
      }
    }

    function proporcional(x, y, x_min, x_max, y_min, y_max){
      function x_prop(x){return (($('#planta-img').height() * x) / 675)}
      function y_prop(y){return (($('#planta-img').width() * y) / 960)}
      if ((x > x_prop(x_min)) && (x < x_prop(x_max)) && (y > y_prop(y_min)) && (y < y_prop(y_max))){ return true }
    }

    $('#fotos>img')
       // resize() after each loaded image
      .load(function(){ resize() })
      // click em foto
      .on('click', function(){
        if ((!$('#planta-geral').is(':visible')) && ($(this).attr('full')=='false')){
          var maiorSrc = maiorFoto($(this).attr('src'));
          $('#galeria').fadeOut('slow', function(){
            $('#planta').attr('off', 'true');
            $('#planta').hide();
            $('body').css('overflow', 'hidden');
            $('#lightbox').show();
              $('#lightbox').append($('<img class="full" onload="lightBoxLoaded()">').attr('src', maiorSrc));
              setLightbox();
          })
        }
      })

    function preloadPlanta(){
      var imgs = ['saladeestar','banheiro','cozinha','lavabo','mezanino','saladejantar','saladetv','suite1','suite2','suite3'];
      var path = 'assets/images/planta/';
      var dia = window.dia ? 'dia' : 'noite';
      $(imgs).each(function(){ $('<img/>')[0].src = (path + this + '-' + dia + '.png') });
    }

    function menorFoto(src){ return src.replace('_g', '_p') }
    function maiorFoto(src){ return src.replace('_p', '_g') }
    function setLightbox(){
      var full = $('#lightbox>img.full');
      //full.fadeIn('slow');
      var src = full.attr('src');
      fotos = [];
      $('#planta').hide();
      $.each($(".foto"), function(i, e){fotos.push($(e).attr('src'))});
      var atual = fotos.indexOf(menorFoto(src));
      (atual == 0) ? $('#prev').hide() : $('#prev').show();
      (atual == fotos.length-1) ? $('#next').hide() : $('#next').show();
      var container = $("img[src='"+menorFoto(src)+"']").prevAll('.comodo').first().children("p");
      $('#lightbox>.label').hide();
      $('#fechar-lightbox').hide();
      $('#lightbox>p.label').html('<span class="bold">' + $(container[1]).text() + ".</span> " + $(container[0]).text());
      //$('#lightbox>p.label-right').text('(' + (atual+1) + "/" + fotos.length + ')');
      return atual;
    }

    // exibir contato
    $('#nav-contato').on('click', function(){
      $('#menu-topo>a').css('text-decoration', 'none');
      $(this).css('text-decoration', 'underline');
      $('#tour').fadeOut('slow', function(){
        $('#galeria').fadeOut('slow', function(){
          $('#contato').fadeIn('slow', function(){ initMap(); resize() });
        });
      });
      fecharLightbox();
      fecharPlanta();
    })

    // exibir galeria
    $('#nav-galeria').on('click', function(){
      $('#menu-topo>a').css('text-decoration', 'none');
      $(this).css('text-decoration', 'underline');
      $('#contato').fadeOut('slow', function(){
        $('#tour').fadeOut('slow', function(){
          $('#galeria').fadeIn('slow', function(){ resize() });
        });
      });
      fecharLightbox();
      fecharPlanta();
    })

    // exibir tour
    $('#nav-tour').on('click', function(){
      $('#menu-topo>a').css('text-decoration', 'none');
      $(this).css('text-decoration', 'underline');
      $('#galeria').fadeOut('slow', function(){
        $('#contato').fadeOut('slow', function(){
          $('#tour').fadeIn('slow', function(){ resize() });
        });
      });
      fecharLightbox();
      fecharPlanta();
    })

    $('#next').on('click', function(){
      var next = setLightbox() + 1;
      $('body').css('cursor', 'progress');
      $('#lightbox>img.full').hide();
      $('#lightbox>img.full').attr('src', maiorFoto(fotos[next]));
      setLightbox();
    })

    $('#prev').on('click', function(){
      var prev = setLightbox() - 1;
      $('body').css('cursor', 'progress');
      $('#lightbox>img.full').hide();
      $('#lightbox>img.full').attr('src', maiorFoto(fotos[prev]));
      setLightbox();
    })

    $("#web-video")
      .on('click', function(){$('#sair-home').click()})
      .bind("loadedmetadata", function(){
        $('.x-object-fit-cover').css('opacity', '1');
        var video = $("#web-video")[0];
        setTimeout(function(){
          if (!$('#home').is('visible')){$('#home').fadeIn(500)}
          $('.x-object-fit-cover').css('opacity', '1');
          video.currentTime = window.currentTime;
          $(video).animate({'opacity': '1'}, 1200);
          video.play();
          var altura = $(video).height();
          if (altura==0){
            var videoHeight = $(window).height() - $('p.home').height() - 90;
            $(video).css('height', videoHeight);
          } else {
            $(video).css('height', altura);
          }
          resize();
        }, 1200)
      })

    // fit home video
    objectFit.polyfill({ selector: 'video', fittype: 'cover'});

    player = $f($('#player')[0]);
    player.addEvent('ready', function(){
        if (window.tourCurrentTime > 1){
          player.api('seekTo', window.tourCurrentTime);
        }
        player.addEvent('finish', function(id){
          window.tourCurrentTime = 0;
        });
        player.addEvent('playProgress', function(data, id){
          window.tourCurrentTime = data.seconds;
        });
    });

  $("#enviar-email").on('click', function(){
    $("#mail-text").val(encodeURIComponent("\n\n" + $("#mail-text").val()));
    $("#msg").submit();
    $("#mail-text").val("");
    return false;
  });

});

function lightBoxLoaded(){
  $('body').css('cursor', '');
  var full = $('#lightbox>img.full');
  full.css('max-width', $(window).width()-210);
  full.css('max-height', $(window).height()-85);
  full.fadeIn('300');
  $('#lightbox>.label').css('top', $('#lightbox>img.full').height() + 60);
  $('#lightbox>.label').fadeIn();
  $('#fechar-lightbox').fadeIn();
  $('#fechar-lightbox').css('margin-left', $('#lightbox>img.full').width() + 40);
}

var map;
function initMap() {
  var mapOptions = {
        center: new google.maps.LatLng(-22.9687852,-43.1812282),
        zoom: 13,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
        },
        disableDoubleClickZoom: true,
        mapTypeControl: false,
        scaleControl: false,
        scrollwheel: true,
        streetViewControl: false,
        draggable : true,
        overviewMapControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [  { 'featureType': 'water', 'stylers': [{ 'visibility': 'on' },{ 'color': '#acbcc9' } ]  },{ 'featureType': 'landscape', 'stylers': [{ 'color': '#f2e5d4' } ]  },{ 'featureType': 'road.highway', 'elementType': 'geometry', 'stylers': [{ 'color': '#c5c6c6' } ]  },{ 'featureType': 'road.arterial', 'elementType': 'geometry', 'stylers': [{ 'color': '#e4d7c6' } ]  },{ 'featureType': 'road.local', 'elementType': 'geometry', 'stylers': [{ 'color': '#fbfaf7' } ]  },{ 'featureType': 'poi.park', 'elementType': 'geometry', 'stylers': [{ 'color': '#c5dac6' } ]  },{ 'featureType': 'administrative', 'stylers': [{ 'visibility': 'on' },{ 'lightness': 33 } ]  },{ 'featureType': 'road'  },{ 'featureType': 'poi.park', 'elementType': 'labels', 'stylers': [{ 'visibility': 'on' },{ 'lightness': 20 } ]  },{  },{ 'featureType': 'road', 'stylers': [{ 'lightness': 20 } ]  }],
    }

    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var locations = [
        ['1101', -22.9687852, -43.1812282]
    ];

  for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
          icon: 'assets/images/marker.png',
          position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          map: map
      });
  }
}

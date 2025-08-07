<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <title>BEIRA</title>
    <? include 'config.php' ?>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="description" content="<?= $description ?>">
    <meta name="author" content="extrapolo.com">
    <meta name="viewport" content="width=1200px, height=900px, initial-scale=1.0, maximum-scale=1.0">
    <script src="assets/core.js" type="text/javascript"></script>
    <script src="assets/app.min.js" type="text/javascript"></script>
    <link href="assets/app.css" media="screen" rel="stylesheet" type="text/css">
    <link href="assets/favicon.ico" rel="icon" type="image/x-icon">
    <meta property="og:image" content="http://beira.com.br/assets/images/camarada.png"/>
    <meta property="og:description" content="<?= $description ?> "/>

    <?= $google_analytics ?>
  </head>

  <body cz-shortcut-listen="true">
    <div id='todo'>
      <a href="/" class="logo beira">BEIRA<a>

      <img id="cursor" src="assets/images/cursor.png">
      <img id="fundo" src="assets/images/back.png">
      <img id="screensaver" src="assets/images/screensaver.png">
      <p class='load-mangalarga-font'>.</p>
      <a href="#" title="back to menu" id="camarada">
        <img src="assets/images/camarada.png">
      </a>

      <div id="box">
        <div id='translator'>
          <span id='to-pt' class='selected'>PT</span>
          <span class='barra-space'>/</span>
          <span id='to-en'>EN</span>
        </div>
        <?= $contato ?>
        <p id="newsletter" class='mangalarga'>Newsletter</p>
        <a href="http://instagram.com/ola_beira" target="_blank">
          <img src="assets/images/insta.png"/>
        </a>
      </div>

      <div id="menu">
        <a href="#" class="beira" img="nav-arquivo">
          <p class='item baixo' pt='ARQUIVO' en='ARCHIVE'>ARQUIVO</p>
        </a>
        <br/>
        <div id='tela-arquivo' class='tela'>
          <div class='colecao'>
            <?= read_images('ARQUIVO') ?>
          </div>
        </div>

        <a href="#" class="beira" img="nav-colecoes">
          <p class='item baixo' pt='COLEÇÕES' en='COLECTIONS'>COLEÇÕES</p>
        </a>
        <br/>
        <div id='tela-colecoes' class='tela'>
          <?= read_colecoes() ?>
        </div>

        <a href="#" class="beira" img="nav-sobre">
          <p class='item baixo' pt='SOBRE' en='ABOUT'>SOBRE</p>
        </a>
        <br/>
        <div id='tela-sobre' class='tela'>
          <p class='beira sobre' pt="<?= $sobre ?>" en="<?= $about ?>"><?= $sobre ?></p>
        </div>

        <a href="#" class="beira" img="nav-loja">
          <p class='item baixo' pt='LOJA' en='STORE'>LOJA</p>
        </a>
        <br/>
        <div id='tela-loja' class='tela'>
          <p id='crono'>00:00:00</p>
          <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
          <div style="overflow:hidden;height:400px;width:600px;"><div id="gmap1_canvas" style="height:400px;width:600px;"></div><style>#gmap1_canvas img{max-width:none!important;background:none!important}</style></div><script type="text/javascript"> function init_map(){var myOptions = {zoom:15,center:new google.maps.LatLng(-22.9648398,-43.22009209999999),mapTypeId: google.maps.MapTypeId.ROADMAP};map = new google.maps.Map(document.getElementById("gmap_canvas1"), myOptions);marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(-22.9648398, -43.22009209999999)});infowindow = new google.maps.InfoWindow({content:"<b>Dona Coisa</b><br/>R. Lopes Quintas, 153 - Jardim Bot&acirc;nico<br/> Rio de Janeiro" });google.maps.event.addListener(marker, "click", function(){infowindow.open(map,marker);});infowindow.open(map,marker);}google.maps.event.addDomListener(window, 'load', init_map);</script>
          <div style="overflow:hidden;height:400px;width:600px;"><div id="gmap2_canvas" style="height:400px;width:600px;"></div><style>#gmap2_canvas img{max-width:none!important;background:none!important}</style></div><script type="text/javascript"> function init_map(){var myOptions = {zoom:16,center:new google.maps.LatLng(-23.5630037,-46.68643470000001),mapTypeId: google.maps.MapTypeId.ROADMAP};map = new google.maps.Map(document.getElementById("gmap_canvas2"), myOptions);marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(-23.5630037, -46.68643470000001)});infowindow = new google.maps.InfoWindow({content:"<b>Loja IT</b><br/>Instituto Tomie Ohtake Rua Corope&#769;s, 88 - Pinheiros<br/> S&atilde;o Paulo" });google.maps.event.addListener(marker, "click", function(){infowindow.open(map,marker);});infowindow.open(map,marker);}google.maps.event.addDomListener(window, 'load', init_map);</script>
        </div>
      </div>

      <div id="navs">
        <input id='radio-nav-img' type="radio" value="nav-img" name="group-nav">
        <input id='radio-nav-txt' checked="true" type="radio" value="nav-img" name="group-nav">
        <br/>
        <img id="nav-img" src="assets/images/nav-img.png">
        <p id="nav-txt" class="beira" pt='TEXTO' en='TEXT'>TEXTO</p>
      </div>
    </div>
  </body>
</html>

var fit = function(){
  $('.isotope').packery({
    itemSelector: '.element-item',
    gutter: 5
  })
}

var filter = function(classe){
  $('#about-text').hide();
  $('.isotope').show();
  $('.element-item').not('.logo').fadeOut(100)
  if (classe!='*'){
    $(classe).fadeIn(100, function(){fit()});
  } else {
    $('.element-item').fadeIn(100, function(){fit()});
  }
}

var img2embed = function(vid){
  return $("<iframe class='video' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen src='https://www.youtube.com/embed/"+vid+"?autoplay=1'>");
}

$(document).ready(function() {
  var container = fit();

  // convert video cover image to proper embed
  $("img[vid]").on('click', function(){
    var player = img2embed($(this).attr('vid'));
    $(this).replaceWith(player);
    doHover();
  })

  // white hover for videos and images link blocks
  function doHover(){
    $('.element-item > iframe, .element-item > .video, .element-item > a')
      .on('mouseenter', function(){ $(this).parent().css('border', '3px solid white')})
      .on('mouseleave', function(){ $(this).parent().css('border', '')})
  } doHover();

  // keep selected filter btns selected on click & animations
  $('#filters').on( 'click', 'button', function()  {
    filter($( this ).attr('data-filter'));
    $('select>option:eq(0)').prop('selected', true);
  });
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
  $('#produced').change(function(){
    filter($(this).val());
    $('button').removeClass('is-checked');
  })
  $('.about-btn').on('click', function(e){
    e.preventDefault();
    $('.isotope').hide(function(){
      $('#about-text').fadeIn();
    })
  })
});

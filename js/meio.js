$(document).ready(function(){
  $('#menu,.down').css('visibility', 'hidden');

  $('body')
    .css('background-color', 'white')
    .animate({backgroundColor: 'rgb(54,53,49)'}, 3000, function(){
      var springy = jQuery('#meio').springy({
      stiffness: 50,
      repulsion: 100000,
      damping: 0.1,
      graph: graph,
      selected: function(node){
        var site = node.data.site;
        if (site){
          window.open(node.data.site);
        }
      }
    });
    $('#menu,.down').css('visibility', 'visible');
    $('#menu,.down').hide();
    $('#menu,.down').fadeIn(2000);
    $('#meio').fadeIn(2000, function(){
      $('#lang-switcher').fadeIn(800);
    });
  });

});

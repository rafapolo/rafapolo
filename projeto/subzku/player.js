$(document).ready(function(){

  // load mixer audios
  window.mixer = []
  $(".vol").each(function(i){
    audio = new Howl({
      src: ["audio/TEST_TRACK_0"+(i+1)+".mp3"],
      html5: false,
      volume: 0.5,
      loop: false,
      autoplay: false,
      onend: function() {
       this.play();
     }
    });
    window.mixer[i+1] = audio
  });

  // show intro on first load
  if(document.cookie!="intro=1"){
    // cookies just works on server-side
    document.cookie="intro=1";
    $("#intro").show().delay(3000).fadeOut(1500, function(){
      $("#player").fadeIn(1000);
      playAll();
    });
  } else {
    $("#player").show();
    playAll();
  }

  // make propor sizes for mixers
  $(window,document).resize(function() {
    reproporciona();
  }); reproporciona();

  // stop audio when leave page
  $(window).on('beforeunload', function(){
       stopAll();
       alert(1);
   });

  // control mixer
  $(document).on("input", ".vol", function(){
    id = ($(this).attr("id").split("audio")[1])
    audio = window.mixer[id];
    audio.fade(parseFloat($(this).val()/100), 0);
  })

  function reproporciona(){
    $("#intro").css("margin-top", $(document).height()/2-120);
    $(document).focus();
  }
});

// play all on window focus
$(window,document).on("focusin", function(){
    playAll();
});
// pause all on window onfocus
$(window,document).on("focusout", function(){
    pauseAll();
});

function playAll(){
  $(window.mixer).each(function(i){
    var audio = window.mixer[i];
    if (i>0) {
      if (!audio.playing()){ audio.play() }
    }
  })
}

function pauseAll(){
  $(window.mixer).each(function(i){
    var audio = window.mixer[i];
    if (i>0) {
      if (audio.playing()){ audio.pause() }
    }
  })
}

function stopAll(){
  $(window.mixer).each(function(i){
    if (i>0) { window.mixer[i].stop() }
  })
}

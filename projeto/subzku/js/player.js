/* subzku.space by extrapolo.com */

$(document).ready(function(){
  var set_num = $("#set").attr("set");
  $("#set").text($("#set").text() + "#0" + set_num);

  $(".vol").val(100);
  window.loaded = 0;
  window.text = $("#set").text();
  $("#set").text("loading...");

  // load mixer audios
  window.mixer = []
  $(".vol").each(function(i){
    var filename = "audio/set0"+set_num+"/t"+(i+1)
    audio = new Howl({
      src: [filename+".mp3", filename+".webm", filename+".ogg"],
      html5: false,
      volume: 1,
      loop: false,
      autoplay: false,
      onload: function() {
        window.loaded += 1;
        if (window.loaded==6){
          $("#set").text(window.text);
          $("#playlist").fadeIn(1000);
          playAll();
        }
     },
      onend: function() {
       this.play(); // loop
     }
    });
    window.mixer[i+1] = audio
  });

  // // show intro on first load
  // if((document.cookie!="intro=1") && (location.hostname!="")) {
  //   // cookies just works on server-side
  //   document.cookie="intro=1";
  //   $("#intro").show().delay(3000).fadeOut(1500, function(){
  //     $("#player").fadeIn(1000);
  //     playAll();
  //   });
  // } else {
  //   $("#player").show();
  //   playAll();
  // }

  $(document).focus();
  $("#playlist").click().click();

  $(document).click(function(){
    playAll();
  })

  // control mixer
  $(document).on("input", ".vol", function(){
    id = ($(this).attr("id").split("audio")[1])
    audio = window.mixer[id];
    var vol = parseFloat($(this).val()/100).toFixed(2);
     playAll();
    audio.fade(vol, 0.0);
  })

  $(".vol").on("change", function(){
    $("#playlist").hide(0).show(0);
  })
});

// play all on window focus
$(window,document).on("focusin", function(){
    playAll(); // todo: if paused
});
// pause all on window onfocus
$(window,document).on("focusout", function(){
    pauseAll();
});

// global

function playAll(){
  $(window.mixer).each(function(i){
    // if all loaded
    if (window.loaded==6){
      var audio = window.mixer[i];
      if (i>0) {
        if (!audio.playing()){ audio.play() }
        console.log("playAll()")
      }
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

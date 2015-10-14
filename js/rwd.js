(function($) { 
$.noConflict();
jQuery(document).ready(function($){
      
        // console.log($.BigVideo());
    
        $("#hide").click(function(){
        $("#hide").fadeOut( "slow" );
    });

        var BV = new $.BigVideo({
          doLoop:true, 
          controls: false
        });
        BV.init();
    
    if (Modernizr.touch) {
    BV.show('video-poster.jpg');
} else {
    BV.show('video/LeopoldALBERT-HD.mp4',{ambient:true});
}
    
        console.log(BV);
        BV.show('video/LeopoldALBERT-HD.mp4'); 
        // showVideo();
        // BV.getPlayer().addEvent('loadeddata', function(){
        //   onVideoLoaded();
        // });
    
        BV.getPlayer().on('durationchange',function(){
    $('#big-video-wrap').fadeIn();
});
    
});
 

    
    
})(jQuery);
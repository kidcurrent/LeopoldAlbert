
$.noConflict();
jQuery(document).ready(function($){
      
        // console.log($.BigVideo());

        var BV = new $.BigVideo({
          doLoop:true, 
          controls: false
        });
        BV.init();
        console.log(BV);
        BV.show('video/Building.mp4'); 
        // showVideo();
        // BV.getPlayer().addEvent('loadeddata', function(){
        //   onVideoLoaded();
        // });
});
 

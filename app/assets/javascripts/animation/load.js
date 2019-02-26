
function preloader(){
    var preload= document.getElementById("preload");
    var loading=0;
    var id =setInterval(frame,64);

    function frame(){
        if(loading == 100) {
            clearInterval(id);
            TweenMax.fromTo("#preload", 0.5,{autoAlpha:1}, {autoAlpha:0, ease: Power1.easeInOut});
        } else {
            loading= loading+4;

        }
    }
}
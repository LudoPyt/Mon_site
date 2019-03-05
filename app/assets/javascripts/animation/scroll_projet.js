var controller = new ScrollMagic.Controller();

$('.content').each(function(){

    var scroll_anim = new TimelineMax();

    scroll_anim.add([
        TweenMax.fromTo($(this).find(".all_img"), 1,{x:"-50%", y:"-50%"},
         { x:"-98%", y:"-75%",ease: Power1.easeInOut}),

        TweenMax.fromTo($(this).find(".all_detail"), 1,{ x:"-50%", y:"-50%",opacity:0},
         {x:"-2%",y:"-25%",opacity:1, ease: Power1.easeInOut})
    ])

    var scroll = new ScrollMagic.Scene({
        triggerElement:this,
        triggerHook:0,
        duration: "65%"
    })
    .setPin(this)
    .setTween(scroll_anim)
    .addTo(controller);
})

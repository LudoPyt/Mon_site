
$("#appear").click(function menu_appear(){
    $(".sayhello").hide(),
    $(".menu").show();
    // TweenMax.fromTo($(this).find(".all_detail"), 0,{ x:"-50%", y:"-50%",opacity:0}, {x:"-2%",y:"-25%",opacity:1, ease: Power1.easeInOut})
    // TweenMax.fromTo((".menu"), 1,{autoAlpha:0}, { autoAlpha:0, ease: Power1.easeInOut});
console.log(menu_appear);
});



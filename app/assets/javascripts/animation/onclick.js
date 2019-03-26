function menuAppear(){


   let menuClick = new TimelineMax();
    menuClick.add([
    TweenMax.staggerFromTo(".menu_detail_home", 1, { x:"0%", y:"-150%",autoAlpha:0}, {x:"0%",y:"0%",autoAlpha:1, ease: Power2.easeInOut}, -.3),
    TweenMax.to(".sayhello", .1, {display: "none", ease: Power1.easeOut}),
    TweenMax.to("#a_propos", .1, {display: "none", ease: Power1.easeOut}),
    TweenMax.to("#contact", .1, {display: "none", ease: Power1.easeOut}),
    TweenMax.to("#all_projet", .1, {display: "none", ease: Power1.easeOut}),
    TweenMax.to("#details", .1, {display: "none", ease: Power1.easeOut}),
    TweenMax.to(".ariane", .1, {display: "none", ease: Power1.easeOut})
    ])

}

$('#appear').click(menuAppear);


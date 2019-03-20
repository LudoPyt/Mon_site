function menuAppear(){


   let menuClick = new TimelineMax();
    menuClick.add([
    TweenMax.to("#menu", .1, {autoAlpha:1, ease: Power1.easeOut}),
    TweenMax.fromTo(".detail1", 0.9,{ x:"0%", y:"-200%",autoAlpha:0}, {x:"0%",y:"0%",autoAlpha:1, ease: Power4.easeInOut}),
    TweenMax.fromTo(".detail2", 0.7,{ x:"0%", y:"-200%",autoAlpha:0}, {x:"0%",y:"0%",autoAlpha:1, ease: Power4.easeInOut}),
    TweenMax.fromTo(".detail3", 0.5,{ x:"0%", y:"-200%",autoAlpha:0}, {x:"0%",y:"0%",autoAlpha:1, ease: Power4.easeInOut}),
    TweenMax.to(".sayhello", .1, {display: "none", ease: Power1.easeOut}),
    TweenMax.to("#a_propos", .1, {display: "none", ease: Power1.easeOut}),
    TweenMax.to("#contact", .1, {display: "none", ease: Power1.easeOut}),
    TweenMax.to("#all_projet", .1, {display: "none", ease: Power1.easeOut}),
    TweenMax.to("#details", .1, {display: "none", ease: Power1.easeOut}),
    TweenMax.to(".ariane", .1, {display: "none", ease: Power1.easeOut})
    ])

}

$('#appear').click(menuAppear);


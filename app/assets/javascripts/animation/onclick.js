var menu_appear = TweenMax.fromTo(".menu", 1,{ x:"-100%", y:"0%",autoAlpha:0}, {x:"0%",y:"0%",autoAlpha:1, ease: Power1.easeInOut});

$('#appear').click( function(){menu_appear});

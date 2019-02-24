var menu_appear = TweenMax.fromTo(".menu", 0,{ x:"-100%", y:"-50%",opacity:0}, {x:"0%",y:"-50%",opacity:1, ease: Power1.easeInOut});

$('#appear').click( function(){menu_appear});

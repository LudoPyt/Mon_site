function menu_appear(){TweenMax.fromTo(".menu", 0.5,{ x:"-100%", y:"0%",autoAlpha:0}, {x:"0%",y:"0%",autoAlpha:1, ease: Power1.easeInOut});} 

$('#appear').click(menu_appear);

 var element = document;

 var barHeight = $(".barre").height();
 barHeight = 300;

 var anim = new Hammer.Manager(element);

 anim.add(new Hammer.Pan({direction: Hammer.DIRECTION_VERTICAL, threshold: 0}));

 anim.on("pan", function(e) {
  if(-e.deltaY*2 >= barHeight) {
    $(".rempli").removeClass("drag");
    $(".rempli").css("height", barHeight);
    Appear();
  } else if (-e.deltaY*2 < barHeight) {
    $(".drag").css("height", -e.deltaY*2);
  }
});

function Appear() {

  let boum = new TimelineMax();
  boum.add([
    TweenMax.to(".drag_cursor", .2, {display: "none", ease: Power1.easeOut}),
    TweenMax.fromTo(".menu", .1,{autoAlpha:0}, {autoAlpha:1, ease: Power1.easeInOut}),
    TweenMax.staggerFromTo(".menu_detail", 1, { x:"0%", y:"150%",autoAlpha:0}, {x:"0%",y:"0%",autoAlpha:1, ease: Power2.easeInOut}, .07),
    TweenMax.to(".sayhello", .1, {display: "none", ease: Power1.easeOut}),
    TweenMax.to(".hold_drag", .2, {display: "none", ease: Power1.easeOut})
  ])
}

$(window).mousemove(function(e) {
  TweenMax.to(".drag_cursor", .1, {left: e.clientX, top: e.clientY, ease: Power1.easeOut});
});

function Down(){
let bounce = new TimelineMax({ repeat: -1});
  TweenMax.to(".drag_cursor", .2, {width: 25, height: 25, ease: Power1.easeOut});
  bounce.add([TweenMax.fromTo(".drag_cursor img", .7,  {  y:"-300%", autoAlpha: 0.5}, {y:"-600%", autoAlpha:1, ease: Power3.easeInOut})
    ]);

  $(window).mouseup(function(){
    bounce.kill();

  });

}

function Up(){
  TweenMax.to(".drag_cursor", .2, {width: 30, height: 30, ease: Power1.easeOut});
  TweenMax.to(".drag_cursor img", .2, {autoAlpha: 0, ease: Power1.easeOut});
}

$(window).mousedown(Down);
$(window).mouseup(Up);

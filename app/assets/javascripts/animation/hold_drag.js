var hold, bar;

    document.addEventListener('mousedown', function(){
        addEventListener('mousemove', moveBar);
    });

    // document.addEventListener('mousedown',(e) => {
    //     addEventListener('mousemove', moveBar);
    //     console.log("couccou");
    // });

    window.addEventListener('mouseup', function(){
      removeEventListener('mousemove', moveBar);
    });

    // dragging bar
    function moveBar(e){

      hold = document.getElementById("hold");
      bar = document.getElementById("bar");

      console.log(hold);
      let newHeight = 2 *  (Math.min(hold.clientHeight, -  e.pageY + hold.offsetHeight ));

      if(newHeight >= hold.offsetHeight) {
          bar.style.height = hold.offsetHeight +30 ;
          removeEventListener('mousemove', moveBar);
          function menu_appear(){

            TweenMax.fromTo(".menu", 1,{autoAlpha:0}, { autoAlpha:0, ease: Power1.easeInOut})
            
          }
      } else {
          bar.style.transition = '0.1s';
          bar.style.height = newHeight + 'px';
      }

    }

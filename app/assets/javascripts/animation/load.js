
function load(){
    var preload= document.getElementById("preload");
    var loading=0;
    var id =setInterval(frame,64);

    function frame(){
        if(loading == 100) {
            clearInterval(id);
            document.getElementById("preload").style.display = 'none';
        } else {
            loading= loading+1;
            document.getElementById("preload").style.display = 'block';

        }
    }
}
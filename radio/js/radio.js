window.onload=function(){







document.getElementById('atras').onclick = function () {
    anmacionAtras();

}
document.getElementById('adelante').onclick = function () {
    animacionDelante();
}
}
/*
function myMove() {
  var elem = document.getelementsbyClassName("vl");   
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 324) {
      clearInterval(id);
       elem.style.left = 0px; 
    } else {
      pos++;  
      elem.style.left = pos + 'px'; 
    }
  }
}



document.getElementById('myAnimation').onclick = function(){
    myMove();
}
*/


function animacionDelante() {

    var currentLeft = parseInt(document.getElementsByClassName("vl")[0].style.left) || 0;
    if (currentLeft < 320) {
        document.getElementsByClassName("vl")[0].style.left = currentLeft + 20 + "px";
    } else {
        document.getElementsByClassName("vl")[0].style.left = 0;
    }
}
function anmacionAtras() {
    var currentLeft = parseInt(document.getElementsByClassName("vl")[0].style.left) || 0;
    if (currentLeft <= 0) {
        document.getElementsByClassName("vl")[0].style.left = 0;
    } else {
        document.getElementsByClassName("vl")[0].style.left = currentLeft - 20 + "px";
    }
}

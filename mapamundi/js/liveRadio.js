
window.onload=function(){
  var audio = new Audio('https://21233.live.streamtheworld.com/LOS40AAC.aac?dist=onlineradiobox');
  var elemento= document.getElementById("españa");
  if(audio){
  elemento.addEventListener("click", playPause,false);
  
  }
  
  elemento.addEventListener("mouseover", showNombre,false);
  elemento.addEventListener("mouseout", quitarNombre,false);
  
  function playPause() { 
    if (audio.paused) {
        audio.play();
     
        }
    else  {
        audio.pause(); 
        }
} 

function showNombre(){
elemento.style.color="black";
 elemento.innerHTML=elemento.getAttribute("data_information");
}
function quitarNombre(){
 elemento.innerHTML="";

}

} 




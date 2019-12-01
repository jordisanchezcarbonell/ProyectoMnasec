window.onload = function() {
//PANTALLA 4096X2160
var str = "Jordi";
var res = str.substr(0, 4);
document.getElementById("resultado").innerHTML = "      El resultado es:"+res;
  var imgArray = [
    'imagen/los-40-principales.png',
    'http://statics.ccma.cat/img/logos/logo_catradio.svg',
    'https://cdn.webrad.io/images/logos/emisora-org-es/maxima-fm.png',
    "imagen/Radio.png"
   ];
var click=1;
var canvas = {
    element: document.getElementById('canvas'),
    width: 1200,
    height: 800,
   
    initialize: function () {
        this.element.style.width = this.width + 'px';
        this.element.style.height = this.height + 'px';
        document.body.appendChild(this.element);
    }
};
var nextId = 1;
var Ball = {

    create: function (color, dx, dy,boolean,letra) {

        var newBall = Object.create(this);
        var test= document.createElement('div');

newBall.id= nextId++;
        newBall.dx = dx;
        newBall.dy = dy;
        newBall.width = 100;
        newBall.height = 100;
        newBall.element = document.createElement('div');
        newBall.element.style.backgroundImage  ='url('+color+')';
        newBall.element.style.width = newBall.width + 'px';
        newBall.element.style.height = newBall.height + 'px';

        newBall.element.className += 'ball';
       newBall.element.setAttribute("data-comp", boolean);
           newBall.element.setAttribute("data-letra", letra);

        newBall.element.setAttribute("id", "escoger");
        newBall.width = parseInt(newBall.element.style.width);
        newBall.height = parseInt(newBall.element.style.height);
        test.appendChild(newBall.element);
     

         newBall.element.addEventListener("click", function(ev){
        //newBall.element.style.backgroundImage  ='url('+color+')';
        el=ev.target;
       
        if(el.getAttribute("data-comp") == document.getElementById('borrar').getAttribute("data-imagen") ){
       
        primerEvento(el);
        }
       



    });
        canvas.element.appendChild(newBall.element);
       
        return newBall;
    },
   
    moverElemento: function (x, y) {
        this.element.style.left = x + 'px';
        this.element.style.top = y + 'px';
    },
    cambioDireccion: function (x, y) {
        if (x < 0 || x > canvas.width - this.width) {
            this.dx = -this.dx;
        }
        if (y < 0 || y > canvas.height - this.height) {
            this.dy = -this.dy;
        }
    },
    draw: function (x, y) {
        this.moverElemento(x, y);
        var ball = this;
        setTimeout(function () {
            ball.cambioDireccion(x, y);
            ball.draw(x + ball.dx, y + ball.dy);
        }, 1000 / 60);
    }
   
};
canvas.initialize();
var ball1 =  Ball.create(imgArray[0], 4, 3,"Los40","i");
var ball2 =  Ball.create(imgArray[1], 4, 3,"catalunya");
var ball3 =  Ball.create(imgArray[3], 2, 6,"otro");


ball1.draw(4, 300);
ball2.draw(1, 5);

ball3.draw(10, 10);
//document.getElementById("1").addEventListener('click', hola, false);  
//VARIABLES DE LOS SELECTORES PARA LAS FUNCIONES
/*
var todolosdiv=document.querySelectorAll('div');
var obtenerpuntuacionall=document.querySelectorAll('div')
var obtenerpuntuacion=elementoQuery("Los40");
var OTRO=elementoQuery(false);
var terceraImagen=elementoQuery("otro");
var clicks=1;

//var obtenerpuntuacion= tank.getAttribute("data-resultado");
/*
var obtenerpuntuacion=document.querySelectorAll('div[data-comp=true]')[0].getAttribute("data-comp");*/
//var obtenerpuntuacion=document.querySelector('div[data-comp=true]')
//var obtenerpuntuacion=elementoQuery(true);

//var OTRO=elementoQuery(false);
//var terceraImagen=elementoQuery("otro");

/*var correcto=document.querySelector('div[data-resultado=true]')[0].getAttribute("data-resultado");*/
//var obtenerpuntuacionall=document.querySelectorAll('div')
/*
var lso40=document.getElementById('borrar').getAttribute("data-imagen");
console.log(lso40);

var lso40random=document.getElementById("escoger").getAttribute("data-comp");
console.log(lso40random);

if(lso40==lso40random){
document.getElementById("escoger").addEventListener('click', primerEvento);


}
//OTRO.addEventListener('click', prueba);

// OTRO.addEventListener('click', prueba);
//console.log(correcto);
//AGREGAMOS UN EVENTO LISTENER
/* if con los dos datas
if(obtenerpuntuacion==true || correcto==true){
correcto.addEventListener('click', hola, false);  
//correcto.onclick = function(){hola()};

}

*/

function primerEvento(evento){
document.getElementById("resultado").innerHTML = "      El resultado es:"+res+evento.getAttribute("data-letra");
console.log(res+evento.getAttribute("data-letra"));
if(res+evento.getAttribute("data-letra")=="Jordi"){
    $('#gameover').modal('show');

}
evento.remove();
var elementoBorrar=document.getElementById("borrar");

elementoBorrar.setAttribute("src", imgArray[click]);
elementoBorrar.setAttribute('width','100px')
elementoBorrar.setAttribute('height','100px')
elementoBorrar.setAttribute('data-imagen','catalunya')
//document.getElementById("escoger").addEventListener('click', primerEvento);
//OTRO.onclick = segundoEvento(OTRO,imgArray[2]);
//obtenerpuntuacion.dispatchEvent();
//OTRO.addEventListener('click', primerEvento);





    click++;

//$('#myModal').modal('show');
//document.getElementById("borrar").removeAttribute("img");

}
/*
function segundoEvento(){
this.remove();
var elementoBorrar=document.getElementById("borrar");
elementoBorrar.setAttribute("src",imgArray[2]);
elementoBorrar.setAttribute('width','100px')
elementoBorrar.setAttribute('height','100px')

//document.getElementById("borrar").removeAttribute("img");
document.getElementById("resultado").innerHTML += " Segundo Evento";


}
function generalEvento(evento,imagen){
evento.remove();
var elementoBorrar=document.getElementById("borrar");
elementoBorrar.setAttribute("src",imagen);
elementoBorrar.setAttribute('width','100px')
elementoBorrar.setAttribute('height','100px')

//document.getElementById("borrar").removeAttribute("img");
document.getElementById("resultado").innerHTML += " Segundo Evento";


}



function elementoQuery(parametro){
return document.querySelector('div[data-comp='+parametro+']');





}  
*/
//Alternativa de hover:

//Un click , doble click


}
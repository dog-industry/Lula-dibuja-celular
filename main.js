var canvas=document.getElementById("mi_canvas");
var ctx=canvas.getContext("2d");
var color="red"
//var mouseEvent="empty"//
var ultima_posicion_de_x
var ultima_posicion_de_y
var ancho_de_linea=2
var ancho_de_pantalla=screen.width
var nuevo_ancho=screen.width-70
var nuevo_alto=screen.height-300
canvas.addEventListener("touchstar",mi_touchstart);
if (ancho_de_pantalla < 992){

    document.getElementById("mi_canvas").width=nuevo_ancho;
    document.getElementById("mi_canvas").height=nuevo_alto;
    document.body.style.overflow="hidden"
}
function mi_touchstart(l){
    ultima_posicion_de_x=l.touches[0].clientX-canvas.offsetLeft
    ultima_posicion_de_y=l.touches[0].clienty-canvas.offsetTop
}
canvas.addEventListener("touchmove",mi_touchmove);
function mi_touchmove(c){
    posicion_actual_de_mouse_x=c.touches[0].clientX-canvas.offsetLeft
    posicion_actual_de_mouse_y=c.touches[0].clientY-canvas.offsetTop

    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=ancho_de_linea;
    ctx.moveTo(ultima_posicion_de_x, ultima_posicion_de_y);
    ctx.lineTo(posicion_actual_de_mouse_x, posicion_actual_de_mouse_y);
    ctx.stroke();
    ultima_posicion_de_x=posicion_actual_de_mouse_x
    ultima_posicion_de_y=posicion_actual_de_mouse_y
}
function borrar(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
function rojito(){
    color="red"
}
function azulito(){
    color="blue"
}
function verdesito(){
    color="green"
}
function amarillito(){
    color="yellow"
}
function negrito(){
    color="black"
}
function blancito(){
    color="white"
}
function rosita(){
    color="pink"
}
function moradito(){
    color="purple"
}
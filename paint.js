

let state=0;
let color_pluma="#000000";
const borrador="#FFFFFF";
const tp = 5;
const tb = 25;

//SE OBTIENEN LOS ELEMENTOS
const negro = document.getElementById('negro');
const verde = document.getElementById('Verde');
const azul = document.getElementById('Azul');
const naranja = document.getElementById('Naranja');
const morado = document.getElementById('Morado');
const mostaza = document.getElementById('Mostaza');
const gris = document.getElementById('Gris');
const amarillo = document.getElementById('Amarillo');
const rojo = document.getElementById('Rojo');
const cafe = document.getElementById('Cafe');
const rosa = document.getElementById('Rosa');
const blanco = document.getElementById('Blanco');


//SE DA CLICK Y SE OBTIENE EL COLOR ELEGIDO
negro.addEventListener("click", (color_p)=>{
    color_pluma="#000000";
});

verde.addEventListener("click", (color_p)=>{
    color_pluma="#5ab149";
});

azul.addEventListener("click", (color_p)=>{
    color_pluma="#6666cc";
});

naranja.addEventListener("click", (color_p)=>{
    color_pluma="#e74c3c";
});
morado.addEventListener("click", (color_p)=>{
    color_pluma="#9966FF";
});
mostaza.addEventListener("click", (color_p)=>{
    color_pluma="#999900";
});
gris.addEventListener("click", (color_p)=>{
    color_pluma="#999999";
});
amarillo.addEventListener("click", (color_p)=>{
    color_pluma="#FFFF66";
});
rojo.addEventListener("click", (color_p)=>{
    color_pluma="#CC3333";
});
cafe.addEventListener("click", (color_p)=>{
    color_pluma="#CC6633";
});
rosa.addEventListener("click", (color_p)=>{
    color_pluma="#FF33CC";
});
blanco.addEventListener("click", (color_p)=>{
    color_pluma="#FFFFFF";
});

//PINTAR EN EL LIENZO

//LIENZO
let area =document.getElementById('areaDibujo');
let lienzo=area.getContext('2d');
let x,y;

area.width=window.innerWidth;
area.height=window.innerHeight;

//MOVERSE EN EL LIENZO

document.addEventListener("mousedown",presionar);
document.addEventListener("mouseup",soltar);
document.addEventListener("mousemove",mover);

//Mover
function mover(evento){
    if(state==1){
      if (color_pluma == borrador) {
        pluma(color_pluma,x,y,evento.layerX,evento.layerY,lienzo,tb);
      }
      else {
        pluma(color_pluma,x,y,evento.layerX,evento.layerY,lienzo,tp);
      }
    }
    x=evento.layerX;
    y=evento.layerY;
}
//Presionar
function presionar(){
    state=1;
}
//Soltar
function soltar(){
    state=0;
}

//CARACTERISTICAS DE LA PLUMA (color)
function pluma(color,xinicial,yinicial,xfinal,yfinal,papel,tamaño){
    papel.beginPath();
    papel.strokeStyle=color;
    papel.lineWidth=tamaño; //Grosor del pincel
    papel.moveTo((xinicial),yinicial);
    papel.lineTo(xfinal,yfinal);
    papel.stroke();
    papel.closePath()
}

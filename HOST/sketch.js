var boton1;
var boton2;
var boton3;

var boton4;
var boton5;

var boton6;

var malefica;
var maleficaSonido;

var listaSonidos = [];

var mostrarImagenes;

var x = [];
var y = [];

var botonParar = 0;

function setup() {
  createCanvas(1200, 600);
  
  fondo = loadImage("disney.png");
  instrucciones = loadImage("instrucciones.png");
  respuestas = loadImage ("respuestas.png");
  pausa = loadImage ("pausa.png");
  
  malefica = loadImage("malefica.png");
  maleficaSonido = loadSound("maleficaSonido.m4a");

  madrastra = loadImage("madrastra.png");
  madrastraSonido = loadSound("madrastraSonido.m4a");
  
  yzma= loadImage("yzma.png");
  yzmaSonido= loadSound("yzmaSonido.m4a");
  
  scar=loadImage("scar.png");
  scarSonido= loadSound( "scarSonido.m4a");
  
  madregothel= loadImage("madregothel.png");
  madregothelSonido= loadSound("madregothelSonido.m4a");
  
  cruella= loadImage("cruella.png");
  cruellaSonido= loadSound("cruellaSonido.m4a");
  

  listaSonidos = append(listaSonidos, maleficaSonido);
  listaSonidos = append(listaSonidos, madrastraSonido);
  listaSonidos = append(listaSonidos, yzmaSonido);
  listaSonidos = append(listaSonidos, scarSonido);
  listaSonidos = append(listaSonidos, madregothelSonido);
  listaSonidos = append(listaSonidos, cruellaSonido);
  


  var steps = width / 3;
  var steps0 = height / 2;
  for (var i = steps / 2; i < width; i += steps) {
    for (var j = steps0 / 2; j < height; j += steps0) {
      x = append(x, i);
      y = append(y, j);
    }
  }
}

function draw() {
  
  //fondo
  imageMode(CENTER);
image(fondo,width/2,height/2, width/1, height/1);
  
  
  imageMode(CENTER);
image(instrucciones,width/3 +7,height/3 +330, width/2, height/2);
  
  
  imageMode(CENTER);
image(respuestas,width/3 +380,height/3 +330, width/2, height/2);
  
  imageMode(CENTER);
  image(pausa, width/3 +700,height/3 +330, width/2, height/2);
  

  
  //bolitas
  for (var i = 0; i < x.length; i += 1) {
    var d = dist(mouseX, mouseY, x[i], y[i]);

    if (d <= 50) {
      fill(255, 200, 40);
    } else {
      fill(250,200,40);
      noStroke();
    }

    ellipse(x[i], y[i], 50, 50);

    if (d <= 50) {
      if (mouseIsPressed) {
        if (listaSonidos[i].isPlaying()) {
        } else {
          listaSonidos[i].play();
        }
      }
    }
  }
  
  
  if(mostrarImagenes == 1){
    image(malefica,width/2,height/2,200,200);
  }
    if(mostrarImagenes == 2){
    image(madrastra,width/2,height/2,200,200);
  }
    if(mostrarImagenes == 3){
    image(yzma,width/2,height/2,200,200);
  }
  if(mostrarImagenes == 4){
    image(scar,width/2,height/2,200,200);
  }
  if(mostrarImagenes == 5){
  image(madregothel,width/2,height/2,200,200);
  }
  if(mostrarImagenes == 6){
    image(cruella,width/2,height/2,200,200);
  }
}

function keyTyped() {
  if (key == "p") {
    for (var i = 0; i < x.length; i += 1) {
      if (listaSonidos[i].isPlaying()) {
        listaSonidos[i].stop();
      } else {
      }
    }
  }
  //malefica
  if (key == "d") {
    mostrarImagenes = 1;
  }
  //madrastra
    if (key == "i") {
    mostrarImagenes = 2;
  }
  //yzma
   if (key == "s") {
    mostrarImagenes = 3;
  }
   //scar
   if (key == "n") {
    mostrarImagenes = 4;
  }
   //madregothel
   if (key == "e") {
    mostrarImagenes = 5;
  }
   //cruella
   if (key == "y") {
    mostrarImagenes = 6;
  }

}
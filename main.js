narizX="";
narizY="";


function preload() { 
  nariz = loadImage('nariz.png');
}

function setup() {
    //guardamos el lienzo creado en una variable
  lienzo = createCanvas(400, 300);
  lienzo.center();
  //create capture es la funcion para acceder a la camara
  video = createCapture(VIDEO);
  video.size(300,300);
  //video.hide permite que veamos la camara en movimiento, al quitarlo se ve como una foto y no video
  video.hide();

  poseNet= ml5.poseNet(video,modelocargado);
  poseNet.on('pose',gotPoses);
}


function modelocargado() {
  console.log('PoseNet se ha iniciado');
}


function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    narizX = results[0].pose.nose.x-7;
    narizY = results[0].pose.nose.y-110;
  }
}


function draw() {
  image(video, 0, 0, 400, 300);
  //tint es funcion de p5 para configurar el color del lienzo
  image(nariz, narizX, narizY, 120, 150);
}

function tomarfoto(){    
    //save es funcion de p5 para guardar fotos o imagenes
  save('foto_con_filtro.png');
}




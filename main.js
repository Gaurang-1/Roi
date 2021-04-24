video="";
status="";

function preload(){
    video=createVideo('video.mp4');
    video.hide();
}

function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
}

function start(){
    objectDetector=ml5.objectDetector('cocossd',modalLoaded);
    document.getElementById("status").innerHTML="Status - Detecting objects";
}

function modalLoaded(){
    console.log("Modal Loaded!");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function draw(){
    image(video,0,0,480,380);
}
noseX=0;
noseY=0;
function preload(){
    clown_nose=loadImage('https://i.postimg.cc/Dz4PXbYV/red-lips-png-red-lipstick-is-timeless-and-will-probably-lip-gloss-115632207295qxnqhlwra.png');
}
function setup(){
canvas=createCanvas(450,450);
canvas.center();
video=createCapture(VIDEO);
video.size(450,450);
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose",got_poses);

}
function draw(){
image(video,0,0,450,450);
image(clown_nose,noseX,noseY,35,30);
}

function take_snapshot(){
save("meme.png");
}
function modelLoaded(){
    console.log("posenet initialisied :):)");
}
function got_poses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x-10;
        noseY = results[0].pose.nose.y+20;
        console.log("x coordinate of nose"+noseX);
        console.log("y coordinate of nose"+noseY);
    }
}
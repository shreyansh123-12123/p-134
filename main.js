
baby="";
objects=[];


function setup(){
   canvas = createCanvas(700,500);
   canvas.position(400,150);
   video = createCapture(VIDEO);
   video.hide();
   objectDectector=ml5.objectDetector('cocossd',modelLoaded);
   document.getElementById("baby").innerHTML="Status: detecting objects";
}
function modelLoaded(){
    console.log("model is loaded !!!!!!!!!!!!!!!!!!!!!!!!!!");
    baby=true;
    
}
function draw(){
    image(video,0,0,700,500);
    if(baby != ""){
        r = random(255);
        g = random(255);
        b = random(255);
        objectDectector.detect(video,gotResult);
        for(var i=0; i<objects.length; i++){
            document.getElementById("baby").innerHTML="status: Baby not Detected";
            document.getElementById("number_of_objects").innerHTML="Number Of Objects Detected : " + objects.length; 
            fill(r,g,b);
            percent=floor(objects[i].confidence*100);
            text(objects[i].label + "  " + percent + "%" , objects[i].x+20 , objects[i].y+20);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);

        }
        
    }
    else{
        
        document.getElementById("baby").innerHTML="status: Baby not Detected";
       
    }
    if(objects==person){
        document.getElementById("baby").innerHTML="status: Baby  Detected";
       

    }
    if(objects!=person){
        document.getElementById("baby").innerHTML="status: Baby not Detected";
       
    }
}
    
    



function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}
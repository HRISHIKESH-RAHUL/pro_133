img="";
Status="";
objects=[];

function preload(){
    img = loadImage("dog_cat.jpg");
    }

    function setup(){
        canvas= createCanvas(600,500);
        canvas.center();
        objectDetector = ml5.objectDetector("cocossd" , modelLoaded);
        document.getElementById("status").innerHTML="Status : Object Detecting";
        }

        function modelLoaded(){
            console.log("model loaded");
            Status=true;
            objectDetector.detect(img , gotResult);
        }

        function gotResult(error , results){
            if(error){
                console.error(error);
            }
            else{
                console.log(results);
                objects = results;
            }
        }

        function draw(){
            image(img,0,0,600,500);
            if(Status != ""){
                for(i=0; i<objects.length; i++){
                    document.getElementById("status").innerHTML = "Status : Object Detected";
            
                    fill("#03fc20");
                    percent = floor(objects[i].confidence * 100);
                    text(objects[i].label + " " + percent + "%" , objects[i].x+15 , objects[i].y+15);
                    noFill();
                    stroke("#03fc20");
                    rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
                }
            }
        }
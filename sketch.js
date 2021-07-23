const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg()
} 

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg)
    background(backgroundImg);


    Engine.update(engine);

    


}

async function getBackgroundImg(){

    var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Chennai")
    var responseJSON= await response.json()
    var datetime= responseJSON.datetime
    var hour= datetime.slice(11,20)

    if(hour >=0 && <=5){
       bg= "sunset12.png"
    }else if(hour >=5 && <=8){
        bg= "sunrise1.png"
    }else if(hour >=8 && <=10){
        bg= "sunrise2.png"
    }else if(hour >=10 && <=11){
        bg= "sunrise4.png"
    }else if(hour >=11 && <=12){
        bg= "sunrise5.png"
    }else if(hour >=12 && <=4){
        bg= "sunrise6.png"
    }else if(hour >=4 && <=6){
        bg= "sunset7.png"
    }else if(hour >=6 && <=7){
        bg= "sunset8.png"
    }else if(hour >=7 && <=9){
        bg= "sunset10.png"
    }else(hour >=9 && <=0){
        bg= "sunset11.png"
    }

    backgroundImg= loadImage(bg)

}

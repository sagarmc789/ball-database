//var ball;
var hypnoticBall;
var database;
var position;


function setup(){

  database=firebase.database();
  console.log(database);
  createCanvas(500,500);

  hypnoticBall=createSprite(50,50,20,20);
  hypnoticBall.shapecolor="yellow"

  var hBallPosition=database.ref('ball/position');
  hBallPosition.on("value",readPosition);

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){

    database.ref('ball/position').set({
        'x':position.x+x,
        'y':position.y+y
    })
}

function readPosition(data){

    position=data.val();
    hypnoticBall.x=position.x,
    hypnoticBall.y=position.y
}

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg,bgImg;
var car1Img,car2Img;
var game,form,player;
var ball,ballImg;
var database,gameState,playerCount,allPlayers,car1,car2;
var cars = [];
var car1Body,Car2Body,ballBody;

function preload(){
bg = loadImage("assets/background.jpg");
car1Img = loadImage("assets/Car1.png");
car2Img = loadImage("assets/Car2.png");
ballImg = loadImage("assets/ball.png");

}

function setup(){
createCanvas(windowWidth-15,windowHeight-20);
engine = Engine.create();
world = engine.world;

database=firebase.database();
game=new Game();
game.getState();
game.start();
bgImg = bg;
}

function draw(){
background(bgImg);
Engine.update(engine);

if(playerCount===2){
game.update(1);

}

if(gameState===1){
    game.play();
}

}
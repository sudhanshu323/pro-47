class Game{
    constructor(){

    }

    getState() {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data) {
          gameState = data.val();
        });
      }
      update(state) {
        database.ref("/").update({
          gameState: state
        });
      }
 
      start() {
        player = new Player();
        playerCount = player.getCount();
    
        form = new Form();
        form.display();
    
        car1 = createSprite(width / 4 - 50, height- 100);
        car1.addImage("car1", car1Img);
        car1.scale = 0.2;

        car2 = createSprite(width / 2 + 350, height - 100);
        car2.addImage("car2", car2Img);
        car2.scale = 0.2;
        car2.mirrorX(-1);
        
        ball=createSprite(width/2,height - 100)
        ball.addImage("ball",ballImg);
        ball.scale = 0.3;
        car1Body=Bodies.rectangle(width / 4 - 50, height- 100,60,40);
        car2Body=Bodies.rectangle(width / 2 + 350, height - 100,60,40);
        ballBody=Bodies.circle(width/2,height - 100,10);
        World.add(world,car1Body)
        World.add(world,car2Body)
        World.add(world,ballBody)

    
        cars = [car1, car2];
      }    

      handleElements(){
        form.Hide();
      }

      play(){
       this.handleElements();
       Player.getPlayersInfo();
       
       if(allPlayers!==undefined){
         image(bg,0,0,width,height);
         var index = 0;
         for(var plr in allPlayers){
           index=index+1;
           var x=allPlayers[plr].positionX;
           var y=allPlayers[plr].positionY;
         }
         drawSprites();
       }

      }

}
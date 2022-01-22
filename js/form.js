class Form{
    constructor(){
        this.input = createInput("").attribute("placeholder","Enter your name");
        this.playbutton = createButton("Play");
        this.logo = createImg("assets/logo.png","Game title");
        this.title = createElement("h1");
        this.greeting=createElement("h2");
    }

    setElementsPosition(){
        this.input.position(width/2-120,height/2+30);
        this.playbutton.position(width/2-90,height/2+100);
        this.logo.position(width/4-150,height/4-50);
        this.title.position(width/4+110,height/4-60);
        this.greeting.position(width/2-250,height/2-20);
    }

    setElementsStyle(){
        this.title.class("title");
        this.input.class("input");
        this.playbutton.class("button");
        this.greeting.class("greeting");
        this.title.html("Car League");
    }

    Hide(){
       this.input.hide();
       this.playbutton.hide();
       this.greeting.hide();
       this.title.hide();
       this.logo.hide();
    } 

    handleMousePressed(){
         this.playbutton.mousePressed(()=>{
             this.input.hide();
             this.playbutton.hide();
             var message = `Welcome ${this.input.value()} to Car League 
             </br> Waiting for another player to join`
             this.greeting.html(message);
             playerCount+=1
             player.name=this.input.value();
             player.index=playerCount;
             player.addPlayer();
             player.updateCount(playerCount);
         });
    }

    display(){
        this.setElementsPosition();
        this.setElementsStyle();
        this.handleMousePressed();
    }
}
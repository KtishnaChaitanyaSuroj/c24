class Paper {
    constructor(x,y){
     var options = {
         isStatic: false,
         restitution: 0.3, 
         friction:0.5,
         density:1.2,
     }
        this.body = Bodies.circle(x,y,20,options);
        this.radius = 2;
        World.add(world, this.body);
    }


    display(){
       var posi = this.body.position;
       fill("pink");
      circle(posi.x, posi.y, 20);
         
    }
};




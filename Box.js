class Box  {
    constructor(x, y, width, height){
      var options={
        rstitution : 0.8
      }
        this.body=Bodies.rectangle(x, y, width, height);
        console.log(this.body.position.x, this.body.position.y);
        World.add(world, this.body);
    }
  display(){
    //rect(0, 0, 0 ,0);
    rect(this.body.position.x, this.body.position.y, this.body.position.width, this.body.position.height);
    fill("white");
  }
};
  
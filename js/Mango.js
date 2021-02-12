class Mango {
    constructor(x,y) {
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.x = x;
        this.y = y;
        this.body = ellipse(this.x,this.y,50,50,options)
        this.image = loadImage("images/mango.png");
    }

    display() {
        image(this.image,this.x,this.y,50,50);
    }
}
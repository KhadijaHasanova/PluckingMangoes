class Stone {
    constructor(x,y) {
        var options={
            isStatic:false,
            restitution:0,
            friciton:1,
            density:1.2
        }
        this.x = x;
        this.y = y;

        this.body = ellipse(this.x,this.y,width,height,options);
        this.image = loadImage("images/stone.png");
    }

    display() {
        image(this.image,this.x,this.y,70,50);

    }
}
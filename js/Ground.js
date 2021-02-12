class Ground {
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = rect(this.x,this.y,this.width,this.height);
    }

    display() {
        push();
        fill("green");
        rect(this.x,this.y,this.width,this.height);
        pop();
    }
}
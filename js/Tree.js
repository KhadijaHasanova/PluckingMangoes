class Tree {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.body = rect(this.x,this.y);
        this.image = loadImage("images/tree.png");
    }

    display() {
        image(this.image,this.x,this.y,600,600);
    }
}
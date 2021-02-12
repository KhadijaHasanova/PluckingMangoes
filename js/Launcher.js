class Launcher {
    constructor(bodyA,pointB) {
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01
        }
        this.pointB = pointB;
        this.bodyA = bodyA;
        this.constraint = Constraint.create(options);
        World.add(world,this.constraint);
    }

    attach(body){
        this.constraint.bodyA = body;
    }
    
    fly(){
        this.constraint.bodyA = null;
    }

    display(){
        var pointA = this.constraint.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(3);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
    }

}
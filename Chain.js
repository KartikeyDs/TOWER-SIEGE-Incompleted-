class Chain{
constructor(bodyA, pointB){
var options = {
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.04,
    length:10
}
this.pointB = pointB;
this.chain = Constraint.create(options);
World.add(world, this.chain)

}
display(){
var pointA = this.chain.bodyA.position;
var pointB = pointB;
strokeWeight(3)
line(pointA.x, pointA.y, pointB.x, pointB.y);
}
}
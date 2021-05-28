class Chain{
    constructor(body1,pointB){
        var option ={
            bodyA:body1,
            pointB:pointB,
            length:10,stiffness:0.04
        }
        this.chain=Constraint.create(option)
        World.add(world,this.chain)
    }
    fly(){
        this.chain.bodyA=null
    }
    display(){
        if(this.chain.bodyA){
            var pointA=this.chain .bodyA.position
            var pointB=this.chain .pointB
            strokeWeight(4)
            line (pointA.x,pointA.y,pointB.x,pointB.y)

        }
        
    }
}
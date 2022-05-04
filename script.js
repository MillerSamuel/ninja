class Ninja{
    constructor(name){
        this.name=name;
        this.health=3;
        this.speed=3;
        this.strength=3;
    }
    sayName(){
        console.log("Name:",this.name)
    }
    showStats(){
        console.log("Name:",this.name ," Strength: ",this.strength," Speed: ",this.speed," Health: ", this.health)
    }
    drinkSake(){
        this.health+=10;
    }
}

let ninja1= new Ninja("John")
ninja1.drinkSake()
ninja1.showStats()
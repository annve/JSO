/* super, abstract class */

abstract class Animal {
    constructor(public name: string) { }
    move(distanceInMeters: number = 0): void {
        console.log('%s moved %dm.', this.name, distanceInMeters);
    }
}

class Panda extends Animal{
    
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5): void {
        console.log("Slithering...");
       super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45): void {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam: Animal = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

//let tim: Animal = 
//    new Animal("Timmy the dangerous ('all animals are dangerous')");  // compileerfout;
// want je kunt geen instantie van een abstracte klasse maken

let animals: Animal[] = [];
animals[0] = new Snake("Sammie de slang");
animals[1] = new Snake("Bijterke");
animals[2] = new Horse("Amica");
animals[3] = new Horse("Black Beauty");
for(let i:number=0; i<animals.length; i++){
    animals[i].move();
}
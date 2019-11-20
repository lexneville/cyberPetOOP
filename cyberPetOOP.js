// //------------------------------ USING CLASSES ---------------------------------------
// class Pets {
//     constructor(type, action) {
//         this.petType = type;
//         this.petAction = action;

//         this.petEnergy = 40;
//         this.petMood = 40;
//         this.petThirst = 40;
//         this.petHunger = 40;
        
//     }
// }
//             // cat     play
// let interact = (type, action) => {
//                       //cat   play
//     let pet = new Pets(type, action);
//             //play                     40
//     if ((action == "play") && (pet.petEnergy >= 20)) {
//         pet.petEnergy -= 20;  // final 20
//         pet.petMood += 20; // final 60
//         pet.petHunger += 20; // final 60
//         pet.petThirst += 20; //final 60
//         console.log(`You have played with your ${pet.petType}, they are now happier!`);
//     } else if ((action == "play") && (pet.energy < 20)) {
//         console.log(`Your pet ${pet.petType} is too exhausted to play, please let them rest!`)
//     } else if (action == "rest") {
//         pet.energy = 100;
//         console.log(`You have let your ${pet.petType} rest, they are full of energy now!`)
//     } else if (action == "feed") {
//         pet.hunger = 0;
//         console.log(`You have fed your ${pet.petType} and they are full up!`)
//     } else if (action == "drink") {
//         pet.thirst = 100;
//         console.log(`You ${pet.type} has had a drink, their thirst has been quenched!`)
//     }
// }

// interact("cat", "play");
// interact("Weasel", "rest");

// //----------------------------- USING PROTOTYPES ----------------------------------------

let PetsP = function(type, action){
    this.petType = type;
    this.petAction = action;
    this.petEnergy = 40;
    this.petMood = 40;
    this.petThirst = 40;
    this.petHunger = 40;       
}
let interact = function(type, action) {
    let pet = new PetsP(type, action);                 
    if ((action == "play") && (pet.petEnergy >= 20)) {
        pet.petEnergy -= 20; 
        pet.petMood += 20;
        pet.petHunger += 20; 
        pet.petThirst += 20; 
        console.log(`You have played with your ${pet.petType}, they are now happier!`);
    } else if ((action == "play") && (pet.energy < 20)) {
        console.log(`Your pet ${pet.petType} is too exhausted to play, please let them rest!`)
    } else if (action == "rest") {
        pet.energy = 100;
        console.log(`You have let your ${pet.petType} rest, they are full of energy now!`)
    } else if (action == "feed") {
        pet.hunger = 0;
        console.log(`You have fed your ${pet.petType} and they are full up!`)
    } else if (action == "drink") {
        pet.thirst = 100;
        console.log(`Your ${pet.petType} has had a drink, their thirst has been quenched!`)
    }
}

interact("cat", "play");
interact("Weasel", "rest");




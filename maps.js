const dogs = ["Labrador", "Beagle", "Poodle", "Pug", "Chihuahua"]

const doggieWalks = dogs.map((dogName) => {
    return "The " + dogName + " needs to go for a walk!";
})

// Task 1: 
console.log(doggieWalks);

// Task 2: Now change .forEach to .map on line 9 and run the code again.

// Task 3: 
const shoutyDogNames = dogs.map((dogName) => {
    return dogName.toUpperCase();
})

console.log(shoutyDogNames);
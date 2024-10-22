const dogs = ["Labrador", "Beagle", "Poodle", "Pug", "Chihuahua"]

const printDogName = (dogName) => {
    console.log("The " + dogName + " barks.")
}

// Task 1: 
dogs.forEach(printDogName);

// Task 2: 
const printDogNameUppercase = (dogName) => {
    console.log(`The ${dogName} barks.`.toUpperCase());
}

dogs.forEach(printDogNameUppercase);

// Task 3: 
dogs.forEach((dogName) => {
    console.log("The " + dogName + " needs to go for a walk!");
})

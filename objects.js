// Task 1:
const person = {
    studentAt: "Chas",
    name: "Jenny",
    age: 38,
    favoriteFoods: ["tacos", "pasta", "mapu tofu"]
}

console.log(person);

// Task 2: Add a fourth property to the object using the key `favoriteFoods`. Its value
// should be an array of strings with some foods you like.

// Task 3: 
console.log(person.name + " " + person.age);

// Task 4: 
person.eyeColor = "blue";

// Task 5: 
const dogs = {
    labrador: {
        adult: {
            name: "Marley"
        },
        puppy: {
            name: "Buster"
        }
    }
}

console.log(dogs.labrador.puppy.name);
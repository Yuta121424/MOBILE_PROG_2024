//? Destructuring objects and arrays
// Sept 2024

const person = {
    name: 'John',
    age: 25,
    hobbies: ['reading','cooking'] ,
    greet: function() {
        console.log('Hello, my name is' + this.name + ' and i am' +  this.age + ' years old. ');
    }

};

// When to use destructing?
// Destructing is useful web you only need a specific property of an object.
// Regular function
//Regular passing of object
// even though we are passing thr whole object, we are only using the name property

//const printName = (personalData) => {
//    console.log(personData.name);
//}



//!DESTRUCTING THE OBJECT
// if we are only interested in the name property of the object, we can use destructing

const printName = ({name}) => {
    console.log(name);
}

// We pass the object as an argument to the function 
printName(person);

//! WITHOUT FUNCTION DESTRUCTING

const { name, age } = person;
console.log (name,age);

// DESTRUCTING ARRAYS
const hobbies = ['reading', 'cooking'];
const[hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

/* Reminders when using destructing:
- The property name must match the object property name.
- The property name must be enclosed in curly braces.
- The */

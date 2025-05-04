// memory
// stack(primitive) and heap(non-primitive)

// stack is for static memory allocation, heap is for dynamic memory allocation
// stack is faster than heap
// stack is for function calls, heap is for objects
// stack is for local variables, heap is for global variables
// stack is for primitive types, heap is for reference types

let name = "Ashwnani"; // string (primitive type)
let anotherName = name; // copy of the value (primitive type)

anotherName = "Ashwnani Harjai"; // change the value of anotherName
console.log(name); // Ashwnani (original value is unchanged)
console.log(anotherName); // Ashwnani Harjai (new value)
 

let person = {
    name: "Ashwnani", // string (non-primitive type)
    age: 25, // number (non-primitive type)
    isStudent: true // boolean (non-primitive type)
}

let anotherPerson = person; // reference to the same object (non-primitive type)
anotherPerson.name = "Ashwnani Harjai"; // change the value of anotherPerson's name
anotherPerson.age = 26; // change the value of anotherPerson's age

console.log(anotherPerson);
console.log(person); 

// both person and anotherPerson point to the same object in memory, so changes are reflected in both

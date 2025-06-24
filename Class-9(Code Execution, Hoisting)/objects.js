 let car = {
    color: 'Red',
    name: 'BMW',
    topspeed: '250m/hr',
    isGeared: false,
    doors: 2
 }

 console.log(car);


 //Object of Captain America

 let cap = {
    name: 'Steve Rogers',
    age: 100,
    //array
    friends: ['Bucky Barnes', 'Bruce Banner', 'Tony Stark'],

    //nested  objects  
    address:{
        country: 'USA', 
        city:{
            name:'Brooklyn',
            pincode: 12345
        }
    },
    isAvenger: true
};

console.log(cap.age);
console.log(cap.friends);

//bracket notation

console.log(cap["isAvenger"]);

//adding a new key
cap.movies = ['Avengers', 'Endgame', 'Infinity War'];
console.log(cap);

//changing value;
cap.isAvenger = false;

//deleting a key
delete cap.age;

console.log(cap);


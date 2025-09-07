const car = {
    make: "Toyota",
    engine: {
        start: function() {
            console.log("Car started: " + this.make);
        }
    }
};

// To ensure 'this' refers to 'car', bind the method:
car.engine.start = car.engine.start.bind(car);

// Test
//car.engine.start();  // Output: 'Car started: Toyota'

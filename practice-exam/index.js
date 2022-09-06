// const dogs = require('./dogData');
let dogs = [
    {
        "name": "Doggo-co-WOOF",
        "age": 3,
        "species": "dog",
        "weight": 45,
        "votes": 22
    }, {
        "name": "Space CATdet",
        "age": 4,
        "species": "cat",
        "weight": 20,
        "votes": 5
    }, {
        "name": "Solar Squirrel",
        "age": 1,
        "species": "squirrel",
        "weight": 0.5,
        "votes": 13
    }, {
        "name": "Bark Hole",
        "age": 20,
        "species": "dog",
        "weight": 19,
        "votes": 20
    }, {
        "name": "Howlling Winds",
        "age": 55,
        "species": "dog",
        "weight": 90,
        "votes": 200
    }, {
        "name": "Electron Nutria",
        "age": 7,
        "species": "nutria",
        "weight": 3,
        "votes": 0
    }, {
        "name": "Howlling Winds Sr.",
        "age": 59,
        "species": "dog",
        "weight": 101,
        "votes": 201
    }, {
        "name": "Tycho Brahe",
        "age": 35,
        "species": "moose",
        "weight": 500,
        "votes": 123
    }, {
        "name": "Johannes Kepler",
        "age": 9,
        "species": "dog",
        "weight": 5,
        "votes": 55
    }, {
        "name": "Pluto",
        "age": 89,
        "species": "dog",
        "weight": 10,
        "votes": 190
    }, {
        "name": "Quark",
        "age": 20,
        "species": "dog",
        "weight": 1,
        "votes": 45
    }, {
        "name": "Higgs",
        "age": 26,
        "species": "dog",
        "weight": 0.00001,
        "votes": 200
    }, {
        "name": "Lepton",
        "age": 12,
        "species": "dog",
        "weight": 15,
        "votes": 175
    }, {
        "name": "Boson",
        "age": 9,
        "species": "dog",
        "weight": 8,
        "votes": 141
    }
]

// 1.
// function takes in greeting, location, time
// function returns a concatenated sentence of all values logged to console
var greeting = function(greeting, location, time) {
    console.log(greeting.concat(" ", location, " ", time));
};



// 2.
// function takes in an array
// function returns the number of entries in dogs array
var contestants = function(array) {
    return array.length;
};



// 3.
// use native filter
// function takes in an array
// function returns new array of all animals without dogs
var filterSpecies = dogs.filter(function(animalObj) {
    return animalObj.species === "dog";
});



// 4. 
// use spread operator
// copy filterSpecies array to dogContestants
var dogContestants = [...filterSpecies];



// 5. 
// use native map
// function takes in an array
// function returns an array with added key of "class" to each object
// added value of red, yellow, or green
var dogsWithClasses = dogContestants.map(function(obj) {
    if (obj.weight > 0 && obj.weight < 11) {
        obj.class = "red"
    }else if (obj.weight > 10 && obj.weight < 21) {
                obj.class = "yellow";
    }else {
        obj.class = "green";
    }
    return obj;
})
    


// 6.
// use recursion
// function takes in the top dogs array
// function copies all properties into one object and returns that object
var firstInClass = function(array, output = {}) {
    if (array.length === 0) {
        return output;
    }
    Object.assign(output, array[0]);
    return firstInClass(array.slice(1), output);
};



// 7.
// use reduce
// find sum of the votes casted for dog and non dog contestants
// function takes in the dogs array
// function returns a number of total votes casted
var votes = dogs.reduce(function(acc, current) {
    acc += current.votes;
    return acc;
}, 0);
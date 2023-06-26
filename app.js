// create a object that is export in several file 

const sakib = {
    name: "sakib",
    age: 23,
    subject : "cse",
    experience : ()=>{
        return console.log("He is a web app developer ");
    },

    address: {
        country: "Bangladesh",
        division: "Dhaka",
    }
}

const lodash = require('lodash');
const array = [1,[2,[3,[4,[5]]]]];

const newArray = lodash.flatMapDeep(array);
console.log( newArray);


module.exports = sakib;
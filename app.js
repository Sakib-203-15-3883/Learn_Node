// create a object that is export in index.js file 

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

module.exports = sakib;
// 1. normal function to add 2 numbers 

const sum = (num1,num2)=>{
    const ans = num1+num2;
    return ans ;
}
const result = sum(5,25);
console.log(result);

// 2 . we create a empty array and then add 10 values (0 to 9 ) on that empty array using for loop.

const array = [];

for(i=0; i<10; i++){
    array.push(i);
}
console.log(array);

//3. we create a array with 9 values and then modify  each array element  and replace each array element using forEach method .

const array2 = [1,2,3,4,5,6,7,8,9];

array2.forEach((element,index,arr) => {
console.log(element);

const newValue = element + 100;
arr[index] = newValue;
});
console.log(array2);


// we create an array with 10 values and modify each array element and create new array with that new value . 

const array3 = [1,2,3,4,5,6,7,8,9];

const newArray3 = array3.map((element)=>{

    return  element + 20;
})

console.log(array3);
console.log(newArray3);

// write a code with are import data from app.js file 

const sakib = require("./app");

console.log(sakib);

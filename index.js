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


// write an array that store 4 students information as a object and then find the  age of students  which is === 30  to understand filter method.

const studentsInformation  = [

    {name:"sakib", age : 22},
    {name:"rakib", age : 30},
    {name:"talha", age : 24},
    {name:"jahidul", age : 30},
    {name:"anamul", age : 30},
    {name:"jahidul2", age : 35}
];

const  filterResult = studentsInformation.filter((element)=>{

      if(element.age===30){
        return element.age ; 
      }
});

console.log(filterResult);

// example 15 : E-commerce related  , suppose a user select 3 different product . now you need to calculate the sum of those 3 product price using reduce() method.

const userCard =[

    {productId : 1, productName : "mobile", price : 12000},
    {productId : 2, productName : "laptop", price : 22000},
    {productId : 3, productName : "tv", price : 15000},
    ]
    const totalAmount = userCard.reduce((totalPrice,currentProduct) => {return totalPrice+currentProduct.price},1000);// we set 1000  as a 2nd parameter that is represent initial total price .
    console. log(totalAmount);

    // sort the range of product price  for do that you need to clone the existing array .

    const product2 = [
    {productId : 1, productName : "mobile", price : 12000},
    {productId : 2, productName : "laptop", price : 22000},
    {productId : 3, productName : "tv", price : 15000},
    ];

    // now i clone the existing array 
    const SortingThePrice = product2.slice(0).sort((a,b)=>{return a.price-b.price});
    console.log(SortingThePrice );

    
    






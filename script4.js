// Task - 4 Javascript  Loops , Funcations 


// Task 1 - For loop :

// Print number from 1 to 10 using a for loop :

for(let i = 1; i<= 10; i++){
    console.log(i);    
}

// Task 2 - Reverse Number :

for (let i=10; i >=1; i--){
    console.log(i);
}


// Task 3 - Even Number :

for(let i = 1; i <= 40; i++){
    if(i % 2 == 0){
        console.log(i);
        
    }
}


// Task 4 - Odd Number :

for(let i = 1; i<= 20 ; i++){
    if(i % 2!=0){
        console.log(i);
        
    }
}


// Task  5 - Multiplication Table :

let number = Number(prompt("Enter a number:"));

for(let i = 1; i <= 10; i++){
    console.log(number + "*" + i + "=" +(number*i));
    
}


//  Task 6 - While loop :

// Countdown :
//Use a while loop to print numbers from 10 to 1.

let i = 10 ;

while(i >= 1){
    console.log(i);
    i--;
}


// Task 7 - Sum of Numbers :

let j = 1;
let sum = 0;

while(i <= 10){
    sum = sum + i;
    j++;
}
console.log(sum);


// Task 8 - Do While loop:
// Print Numbers:

let k = 1;

do{
    console.log(i);
    i++;
    
} while(i <= 5);


// Task 9 - Do While Understanding :

let a = 10;
                             //  The doWhile is excute the code at least once so a= 10 the do 
                             //  block runs frist console.log(a). its print 10 Then a++ changes a to 11.
                             // Then js checks condition a<=5.  11 <= 5 flase
do{
    console.log(a);
    a++
    
} while(a <= 5);


//  For of Loop :

// Task 10 - String characters :

let name = "Javascript";

for (let character of name){
    console.log(character);
    
}


// Task 11 - Array Values :

let fruits = ["apple", "orange", "banna", "mango", "grapes","kiwi"];

for(let fruite of fruits){
    console.log(fruits);
    
}


// Task 12 - Student Name :

let students = ["Arun", "Harika", "Sowmya", "Akhil","Raju"];

for (let student of students){
    console.log("Student:" + student);
    
}


// For in Loop:

//  Task 13- Employee Object :

let employee = {
    name: "Arun",
    age : 23,
    role: "Full Stack",
    city : "Hyd"
};

for(let key in employee){
    console.log(key, employee[key]);
    
}


// Task 14 - product Object :

let product = {
    productName: "Laptop",
    price      : 55000,
    brand      : "Dell",
    category   :  "Electronics",
    stock      :  15
};

for (let key in product){
    console.log(key,product[key]);
    
}


// Fucation :

//  Task - 15  Simple Function :

function Welcome(){
    console.log("Welocme to JavaScript");
    
}

Welcome();
Welcome();
Welcome();


// Task - 16 Funcation with Parameter :

function greet(name){
    console.log("Hello" + name);
    
}
greet("Harika")
greet("Raju");
greet("Renuka");


// Task 17 -  Multiple Parameters :

function student(name, age, depertment) {
    console.log("Name:" + name);
    console.log("Age:" + age);
    console.log("Department:" + depertment);
    console.log("-----------------");
}

student("Harika", 23, "CSE");
student("Raju", 29, "CSE");
student("Rahul", 26, "ECE");


//  Return :

// Task 18 - Addition Funcation :

function add(a,b) {
    return a+b;
}

let result = add(10,20);

console.log(result);


// Task 19 - Salary :

function Salary(amount){
    return amount;
}

let result1 = Salary(30000);
console.log(result1);


// Task 20 - Bonus Calculator :

function bonus(Salary, bonusAmount){
    return salary + bonusAmount;
}

let toatal = bonus(50000, 4500);
console.log(total);


// Task 21 - Default Parameter :

function employee(name,role = "Developer"){
    console.log("Name:"+ name);
    console.log("Role:" + role);
    
}
employee("Harika");
employee("Raju", "Co - Worker");


// Type of Function :

// Task 22 - Named Fucation :

function square(number){
    return number * number;
}
console.log(square(2));
console.log(square(5));
console.log(square(10));
console.log(square(12));
console.log(square(20));

 
// Task 23 - Anonymous Funcation:

let calculate = function(a, b) {
    return a + b;
};

let result3 = calculate(10, 20);

console.log(result3);


// Task 24 - Arrow Fucation 

let Multiply = (a,b) =>{
    return a * b;
};

let result4 = Multiply(10*5);
console.log(result);


// Scope :

// Task 25 - scope :

function test(){
    if (true){
        var a= 10;
        let b = 20;
        const c = 30;
        console.log(a);
        console.log(b);
        console.log(c);
    }

    console.log(a);
    //console.log(b);  // refrence eroor and let b is block scoped. it cannot be accessed outside if .
    //console.log(c);  // refrence eroor and const c is block scoped. it cannot be accessed outside if .
    
}
test();


// Task 26 - Hoisting :

// Hosting with Var:

var a1;

console.log(a1); // var the declaration is hoisted, but the value is not. So at console.log(a), a exists but its value is undefined  

a1 = 10;


// Task 27 - Hoisting with let 

// console.log(b1);

// let b1 = 20;

//  Its come an Error like ReferenceError let is hi=oisted , but it cannnot be accessed before its declaration. 

// // Task 28 - Hoisting with const 

// console.log(c);

// const c1 = 30;

// // reference eroor const  is hoisted, but it cannot be accessed before its declaration .


// Task - 29 IIFE parameters :

(function (product, discount)
{
    console.log(product+"has"+ discount +"% discount");
    
})("Laptop", 20);


// Task 30 - callback/ Higher-Order Funcation :

function Welcome(){
    console.log("Welcom");
    
}

function execute(callback){
    callback();
}

execute(Welcome);


// Task 31 - Generator Funcation :

function * cashback(){
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let result5 = cashback();

for(let value of result){
    console.log(value);
    
}


                            
                                  //  FINAL MINI PROJECT

                     // Task 32 — Employee Management Console
  // Create a simple Employee Management System using only the concepts you've learned.

  let employee = [
    {
        name : "Harika",
        age  :  23,
        role :  "Full Stack developer",
       salary:   30000
    },
    
    {
       name :  "Raju",
       age  :  29,
       depertment : "Software design",
       role  :  "Team lead",
       salary: 40000
    }
];
 
// 1. for of  - print every employee

console.log("-----All Employees -----");

for(let employee of employees){
    console.log(employee);
    
}

// 2. for in - print keys and value 

console.log("-----Employee Details ------");

for(let employee of employee){

    for(let key in employee){
        console.log(key + ":" + employee[key]);
        
    }
    console.log("----------------");
    
}

// 3 & 4. Funcation with parameters 

function displayEmployee(name, age , depertment, role, salary){
    console.log("Name:" + name);
    console.log("Age:" + age);
    console.log("Deparment:" + depertment);
    console.log("Role:" + role);
    console.log("Salary:" + salary);
}

displayEmployee(
    employee[0].name,
    employee[0].age,
    employee[0].depertment,
    employee[0].role,
    employee[0].salary,

);

// 5. Return - Get employee salary

function getSalary(employee){
    return employee.salary;
}

let salary = getSalary(employee[0]);

console.log("Employee Salary:" +salary);

// 6. condition - salary >= 40000

if (salary >= 40000){
    console.log("salary is 40000 or above");
    
} else{
    console.log("Salary is below 40000");
    
}

// 7. Aroow funcation - Calculate yearly salary 

let yearlySalary = (salary) => {
    return salary * 12;
};

console.log("Yearly Salary:" + yearlySalary(salary));

// 8. Geneator - Employee benefits 

function* benefits() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

let employeeBenefits = benfits();

console.log("-----Employee Benefits --------");

for(let benfit of employeeBenefits){
    console.log(benefit);
    
}

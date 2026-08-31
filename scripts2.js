
//Create three variables:

//var → student name
var Studentname = "Harika";
console.log(Studentname);

//let → student age
let studentage = 23
console.log(studentage);

//const → college name
const collegename = "Stanley college of engg & tech"
console.log(collegename);

//Print all three values:
console.log(Studentname);
console.log(studentage);
console.log(collegename);

//Change the var value:
var Studentname = "Renuka";
console.log(Studentname);

// Change the let value:
 let studentAge = 34;
 console.log(studentAge);

 //Try changing const:
 //const collegename = "Stanley college of engg & tech"
 // its comes an error because in const we cannot be reassigned after declaration. And it's a TypeError Assignment to const variable

//  Try redeclaring the var variable:
var Studentname = "Arella";
console.log(Studentname);

//Try redeclaring the let variable and observe the error:
// let studentAge = 34;
// Its comes an error because Now studentage is alredy exist so that the let cannot declared twice with the same name in the same scope.


//User Information:

let name = prompt("Enter your Name:");
let age = prompt("Enter your Age:");
let city = prompt("Enter your City:");

console.log("Name",name);
console.log("Age",age);
console.log("City",city);

//Welcome Message:

let Name = prompt("Enter your Name:");
alert("Welcome" + name + "!");


//Age Calculator:

let birthyear = prompt("Enter your birth year:");
let Age = 2026;
console.log("Birth Year:", birthyear);
console.log("Age:", Age);


// Data Types - Identify Data types

let a = "Hello";
let b = 100;
let c = 23.4;
let d = true;
let e = false;
let f = undefined;
let g = null;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);


//Student Data:

let student = {
    name: "Harika",
    userage: 23,
    city: "hyd",
    qualification: "BE CSE",
    isStudent: true
};

console.log(student);
console.log(student.name);
console.log(student.userage);
console.log(student.qualification);
console.log(student.isStudent);


//Fruit Array:

let fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes", "Papaya","kiwi","Pear","Guava"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);
console.log(fruits.length);


//Arithmetic Operator : 

//Basic Calculator:

let h = 20;
let i = 9;

console.log(h + i); //Add
console.log(h - i); //sub
console.log(h*i);   //multplication
console.log(h/i);   //div
console.log(h%i);   // Modulus
console.log(h**i);      //Exponentiation


//Shopping Bill:

let shirt = 999;
let pant = 1499;
let shoes = 1999;

let total = shirt + pant + shoes;

console.log(total);


// Simple Marks Calculation:

let Tamil = 80;
let English = 75;
let Maths = 90;

let Total = Tamil + English + Maths;
let average = Total / 3;

console.log(Total);
console.log(average);


//Increment & Decrement:
// Post Increment :

let j = 20;
let k = j++;

console.log(j);
console.log(k);

//pre Increment:

let l = 20;
let m = ++l;

console.log(l);
console.log(m);


// Post Decrement:

let n = 10;
let o = n--;

console.log(n);
console.log(o);

//pre Decerment :

let p = 10;
let q = --p;

console.log(p);
console.log(q);


// Find the final values :

let r = 5;
let s = r++;       // s = 5, r = 6
let t = ++r;       // r = 7, t = 7
let u = s--;       // u = 5, s = 4

console.log(r);
console.log(s);
console.log(t);
console.log(u);


//Assignment Operators:

let num = 10;
num += 5;
console.log(num);

let num1 = 10;
num1 -= 5;
console.log(num1);

let num2 = 10;
num1 *= 5;
console.log(num2);

let num3 = 10;
num1 /= 5;
console.log(num3);

let num4 = 10;
num1 %= 5;
console.log(num4);

let num5 = 10;
num1 **= 5;
console.log(num5);


// Mini Student Profile:
let Name1 = "HarikaArella";
let agevalue= 24;
let city1 = "Hyderabad";
let college = "Stanley college of Engg & Tech";

let subjects = ["JavaScript", "Python", "HTML", "CSS", "React.js", "Node.js","SQL"];

let student1 = {
    name : "harika",
    age : 23,
    city : "HYD",
    subjects : ["java", "JavaScript", "python"],
    isStudent : true
};

console.log(student1.name);
console.log(student1.age);
console.log(student1.city);
console.log(subjects[0]);
console.log(subjects[subjects.length -1]);
console.log(subjects.length);
console.log(student1);


//Final Challenge — User + Calculator :

let w = prompt("Enter first number:");
let x = prompt("Enter second number:");

w = Number(w);
x = Number(x);

console.log("Addition:", w + x);
console.log("Subtraction:",w - x);
console.log("Multiplication:", w * x);
console.log("Division:", w / x);
console.log("Modulus:", w % x);
console.log("Exponentiation:", w ** x);
















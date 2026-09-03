// Task1 - Varaiable :

var name = "Harika";
let agE = 23;
const City1 = "Hyderabad";
const College1 = "Stanley college of engg & tech";

// Print all values:

console.log(name);
console.log(agE);
console.log(City1);
console.log(College1);

// Change var value :

var name = "Renuka";
console.log(name);

// Change let value:

 let age1 = 34;
console.log(age1);

//Try changing const value:

const city = "Bangalore";
console.log(city);

//Try redeclaring each variable and observe what happens:
// var name = "Harika";
// var name = "Renuka";

// console.log(name);
// we  be redeclare the var its possible in var

//let age = 23;
// it's comes like syntax error identifier age has alredy been declared . The let does not allow redeclaration in the same scope. but remember changing the value is allowed.
// let age = 23
//  age = 24;

//const City = "Hyd";
//const City = "Banglore";
// const does not allow redeclaration and its shows syntaxerror identifier city has alredy been declared . and we cannot change the value also.


//Task 2 — Printing Statements:

// console.log()
console.log("JavaScript program");

// alert()
alert("Welcome to JavaScript!");

// confirm()
confirm("Are you ready to learn JavaScript?");

//prompt()
let Name = prompt("Enter your Name:");
console.log(name);

// document.writeln()
document.writeln("js!");


//Task 3 — User Details :

let name1 = prompt("Enter your Name:");
let age2 = prompt("Enter your age");
let city1 = prompt("Enter your city ");
let qualification = prompt("Enter your qualification");

console.log("Name:",name1);
console.log("Age:",age1);
console.log("city",city1);
console.log("qualification:",qualification);


// Task 4 -  Data Types:

let language = "JavaScript";
let number = 100;
let decimal = 99.5;
let isStudent = true;
let isWorking = false;
let notDefine = undefined;
let emptyValue = null;

console.log(language, typeof language);
console.log(number, typeof number);
console.log(decimal, typeof decimal);
console.log(isStudent, typeof isStudent);
console.log(isWorking, typeof isWorking);
console.log(inotDefine, typeof notDefine);
console.log(emptyValue, typeof emptyValue);


// Task 5 - Student Array :

let student = ["Arun", "priya", "kumar", "Divya", "Rahul"];

console.log("First student:", student[0]);
console.log("Second student:", student[1]);
console.log("Last student:", student[4]);
console.log("Total student:", student.length);


// Task 6 - Employee Object :

let Employee = {
    name: "Harika",
    age : 23,
    role: "Developer",
    skills: ["HTML", "CSS", "JavaScript"],
    isWorking : true,
    qualification : ["Diploma", "B.E"]
};

console.log("Employee name:", Employee.name);
console.log("Age:" , Employee.age);
console.log("Role:", Employee.role);
console.log("First skill:", Employee.skills[0]);
console.log("Last qualification:", Employee.qualification[1]);
console.log("Working status:", Employee.isWorking);


// Arithmetic Operator Tasks:

// Task 7 — Calculator :

let a = 20;
let b= 5;

console.log("Addition:", a+b);
console.log("Sub:", a-b);
console.log("Mul:", a*b);
console.log("Div: ", a/b);
console.log("Modulus:", a%b);
console.log("Exponentation:", a ** b);


// Task 8 - Shopping Bill 

let shirt = 999;
let pant = 1499;
let shoes = 1999;
let bag = 799;

let total = shirt + pant + shoes + bag ;


// Task 9 - Increment & Decrement :

// Find the output without running the code first.
// A
// let a = 10;

// let b = a++;

// console.log(a); //  output = 11
// console.log(b);  // output = 10 

// B
// let a = 10;

// let b = ++a;

// console.log(a); // output = 11
// console.log(b); // output = 11

// C
// let a = 10;

// let b = a--;

// console.log(a); // output = 9 
// console.log(b); // output = 10 

// D
// let a = 10;

// let b = --a;

// console.log(a);  // output = 9 
// console.log(b);  // output = 9


// Task 10 - Assignment OPerators :

let num = 10 ;

num += 5 ;
console.log(num);
num = 10;
num -= 3;
console.log(num);
num= 10;
num *= 2;
console.log(num);
num = 10;
num /= 4;
console.log(num);
num = 10; 
num %= 3;
console.log(num);
num = 10;
num **= 2;
console.log(num);


// Task 11 — Comparison Operators:

console.log(10 > 5);                 // ture 
console.log(10 < 5);                // false 
console.log(10 >= 10);              // true 
console.log(10 <= 9);               // false 
console.log(5 == "5");              // true 
console.log(5 === "5");             // flase 
console.log(10 != "10");            // flase
console.log(10 !== "10");           // true 


//Logical Operator Tasks

//  Task 12 — AND && :

console.log(true && true);             // True 
console.log(true && false);            // false
console.log(false && true);            // false
console.log(false && false);           // false


// Task 13 - OR || :

console.log(true || true);            // True 
console.log(true || false);           //True
console.log(false || true);          //True 
console.log(false || false);         // false


//Task 14 — NOT :

console.log(!true);               //  false
console.log(!false);              //  true 
console.log(!(5 > 10));           //  true 
console.log(!(10 > 5));           //  false


// Task 15 — Combination :


 console.log(5 == "5" && !(5 === 5) || 6 > 7);        // flase 

 console.log(10 > 5 && 8 < 12 || 4 === "4");          // true 

 console.log(7 === 7 && 10 != "10" || 5 >= 5);        // true 

console.log(15 < 10 || 20 > 15 && 5 == "5");          // true 


//  Task 16 — Votiing :

let age = 20 ; 

let result = age >= 18 ? "Eligible to vote": "Not eligible";

console.log(result);


// Task 17 - password :

let password = true;

let result1 = password ? "login sucessful" : "wrong password";

console.log(result1);


// Task 18 - User Introduction :

let name3 = "Harika";

let age3 = 24;

let city2 = "Hyd"

console.log(` My name is ${name}. I am ${age} years old . I live in ${city2}`);


// Type Casting Tasks

//Task 19 — String Conversion:

// Task 19 — String Conversion

console.log(String(100));
console.log(String(true));
console.log(String(undefined));
console.log(String(null));
console.log(String([1, 2]));


// Task 20 - Number conversion :

console.log(Number());                     // 0
console.log(Number(""));                   // 0
console.log(Number("123"));                // 123
console.log(Number("a1"));                 // NaN 
console.log(Number(true));                 // 1 
console.log(Number(false));               //  0 
console.log(Number(undefined));           // NaN
console.log(Number(null));                // 0 


// Task 21 - Boolean conversion :

console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean([]));
console.log(Boolean({}));


//Flow Control Tasks:

// Task 22 - Voiting Eligiblity :

let age4 = Number(prompt("Enter your Age:"));

if (age >= 18){
    console.log("You can vote");
} 
else{
    console.log("You can't Vote");
}


// Task 23 - Positive or Negative :

let number1 = Number(prompt("Enter a number"));

if (number > 0){
    console.log("Positive");
}
else if (number < 0){
    console.log("Negative");
}
else{
    console.log("Zero");
    
}


// Task 24 - Grade System :

let marks = Number(prompt("Enter Your marks"));

if (marks >= 90){
    console.log("A Grade");
}
else if (marks >= 80){
    console.log("B Grade");
}
else if (marks >= 70){
    console.log("C Grade");
}
else if (marks >= 60){
    console.log("D Grade");
}
else{
    console.log("Fail");
}


// Nested If Task:

// Task 25 - job Eligiblity :

let age5 = Number(prompt("Enter your age:"));
let height = Number(prompt("Enter your height:"));
let weight = Number(prompt("Enter your weight:"));

if (age >= 18) {

    if (height >= 160) {

        if (weight >= 60) {
            console.log("Congratulations! You are selected");
        } else {
            console.log("Your weight is below 60");
        }

    } else {
        console.log("Your height is below 160");
    }

} else {
    console.log("Your age is below 18");
}


// Switch Tasks :

// Task 26 - Traffic Light :

let color = prompt("Enter traffic light color:");

switch (color){
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default :
        console.log("Ivalid color")
}


// Tak 27 - Day :

let day = 1;

switch(day){
 case 1:
    console.log("Monday");
    break;

    case 2:
        console.log("Tuesday");
        break;

        case 3:
            console.log("Wednesday");
            break;

            case 4:
                console.log("Thursday");
                break;

                case 5:
                    console.log("Friday");
                    break;

                    case 6:
                        console.log("Saturday");
                        break;

                        case 7:
                            console.log("Sunday");
                            break;
default:
    console.log("Invaild day");  
}



              // FINAL MINI PROJECT :

//  Task 28 — Student Result System:

let name4 = prompt("Enter your name:");
let age6 = Number(prompt("Enter your age :"));
let city3 = prompt("Enter your city");

let JavaScript = Number(prompt("Enter JavaScript marks:"));
let Java = Number(prompt("Enter Java marks"));
let Python = Number(prompt("Enter Python marks:"));

let total1 = JavaScript + Java + Python;
let average = total / 3;

let grade;
if (average >= 90){
    grade = "A";
} else if (average >= 80){
    grade = "B";
} else if (average >= 70){
    grade = "C";
} else if (average >= 60){
    grade = "D";
} else{
    grade = "Fail";
}

let Voiting;

if (age >= 18) {
    voting = "Eligible";
} else{
    voting = "Not Eligible";
}

console.log(` Name: ${name4} Age: ${age6} City: ${city3} Total: ${total1} Average:${average.toFixed(2)} Grade: ${grade} Voting: ${voting}`);

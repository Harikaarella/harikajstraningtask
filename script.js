// 1. What is a variable in JavaScript?
//     A variable in Javascript is a named storage location used to store data values. The value stored in a variable can be used and processed throughout a program.
                let age = 23;
             console.log(age);

// 2. What are the three keywords used to create variables?
//    Javascript proivdes three keywords for declaring variables: Var, let and const.

// 3. Write the syntax to create a variable using var.
              var Studentname = "Harika";
              console.log(Studentname);
               

// 4. Write the syntax to create a variable using let.
//     let age = 23;
           

// 5. Write the syntax to create a variable using const.
//      const mark = 234
          

// 6. What is declaration?
//     Declaration is the process of creating a variable and specifying its name. At the declaration stage, a value does not necessarily have to be assigned.
//               Ex: let age;

// 7. What is initialization?
//     Initialization is the process of assigning an initial value to a variable when it is created. 
//         Ex: let age = 23;
//     Here,23 is the intial value assigned to age.

// 8. What is reassignment?
//     Ressignment means changing the value of an existing variable. variables declared using let and var can be reassigned.
              let Age = 20;
              console.log(Age);
//            Followed by age = 25;

// 9. What is redeclaration?
//   Redeclaration means declaring the same varible again. The var keyword allows redeclaration.

// 10. Which keyword allows redeclaration?
//     var allows redeclaration. The var keyword allows a variable to be redeclared.
            var b = 20;
            var b = 22;
            console.log(b);

// 11. Which keyword allows reassignment?
             var no = 234;
             no = 278;
             console.log(no);

// 12. Which keyword requires initialization when declared?
//       The   const keyword requires intialization when it is declared.
              const marks = 342;
              console.log(marks); 
              
//  13. Identify the declaration and initialization:
 //       let age = 25;  
 //       Declaration:let age 
 //       Initialization: =25
 //     Here, the variable age is declared using let and initialzed with the value 25.
 
 // 14. What is the value of a?
          var a = 100;
          console.log(a);
 //    a has the value 100. The output is 100         
 // 
 
 // 15.  Change the value to 200
             let number = 100;
              number = 200;
            console.log(number);
//  We can change the value using reassignment. Since number is declared with let, its value can be changed.

//16. What will be the output?
        var a = 10;
         console.log(a);
//  The output of the code is 10. The variable a is declared using the var keyword and assigned the value 10. Then console.log(a) Prints the value stored in the variable a.

// 17. What will be the output?
        var a = 10;
         a = 20;
        console.log(a);
// The output of the code is 20. The variable a is declared using the var keyword and assigned the value 10. Then a=20 reassigns the value of a from 10 to 20 finally console.log(a) Prints the updated value of  a.

// 18. What will be the output?
        var a = 10;
        var a = 30;
      console.log(a);
// The output of the code is 30. The variable a is declared using the var keyword and assigned the value 10. Then a=20 reassigns the value of a from 10 to 30 finally console.log(a) Prints the updated value of  a.

// 19. Create a var variable named name with the value "john"
              var names = "renuka";
               console.log(names);

// 20. Create a var variable named price with the value 500
        var price = 540;
        console.log(price);   
        
// 21. Reassign price from 500 to 1000.
          var price = 540;
          price = 1000;
          console.log(price);   
          
// 22. What will be the output?
           var x = 50;
            x = 100;
          console.log(x);  
// The output of the above code is 100. The variable x is declared using the var keyword and assigned the value 50. Then the statement x=100 changes the value of x from 50 to 100. this is called reassignment.   

// 23. Can a var variable be reassigned?
//     Yes, a var variable can be reassigned.
            var d = 30;
            d = 25;
            console.log(d);

// 24. Can a var variable be redeclared?
//     yes, a var variable can be redeclared.
         var name = "harika";
         var name = "arella";
         console.log(name);
         
// 25. Write an example of var redeclaration.         
//      The variable name is declared with the value harika. Then, The same variable name is declared again using the var keyword and assigned the value arella. Since var allows redclaration, this code does not give an error.
               var name = "harika";
               var name = "arella";
                console.log(name);

// 26. Create a let variable named age with the value 25.             
            let AGE = 23;
            console.log(AGE);

// 27. What will be the output?
         let AgE = 20;
           AgE = 30;
        console.log(AgE); 
//   The variable AgE is created with the value 20. Then The value is changed from 20 to 30. This is called reassignment. finally the current value of AgE. The output is 30.      

// 28. Can a let variable be reassigned?
//     Yes, a let variable can be reassigned
           let AGe = 20;
           AGe = 40;
        console.log(AGe); 

// 29. Can a let variable be redeclared?
//        NO, a let variable cannot be redeclared in the same scope.
  //          let age = 23;
    //        let age = 34;//error

// 30. Find the error:
        // let name = "John";
        // let name = "David"; 
//      The error is that name is declared twice using let in same scope. and let does not allow redeclaration.

// 31. Create a let variable called city and assign "Chennai".
       let city = "chennai";
       console.log(city);
       
// 32. Change the value of city to "Salem".
         let City = "chennai"; 
         City = "salem";
         console.log(City);
         
 // 33.  What will be the output?
            let X = 10;
             X = 50;
            console.log(X);
//  The variable x is created with the value 10. Then, The value of X is changed from 10 to 50. This is called reassignment and The output is 50.

// 34. Write a let variable called salary with the value 25000.
             let salary = 25000;
             console.log(salary);

// 35. Reassign salary to 30000. 
          let Salary = 25000;
          Salary = 30000;
          console.log(salary);
  
// 36. Create a const variable called pi with the value 3.14.
          const pi = 3.14;
          console.log(pi);

// 37. Can a const variable be reassigned? 
//      No , a const variable cannot be reassigned
//             const pi = 3.14;
//               pi = 3.14;// Error

// 38. Can a const variable be redeclared?
 //         NO, a const variable cannot be redclared in the same scope.
//            const age = 23;
//            const age = 34; // error

// 39. What is wrong with this code?
 //              const age;
   //             age = 25;
   //  The error is that a const variable must be intialized when it is declared. You cannot declare a const variable without giving it a value.

// 40. What happens here?
//     const price = 500;
//      price = 1000;
//   price is declared using const and assigned the value 500. Then, we try to change the value from 500 to 100. But a const variable cannot be reassigned .

// 41. Create a const variable called country with the value "India".
           const country = "India";
           console.log(country);

// 42. What will be the output?
          //const x = 100;
          //console.log(x);   
// The output is 100. 

// 43. Which keyword should you use if the value should not be reassigned?
// const - we use the const keyword when we don't want to change or reassign the value.
        // const age =25;
        // age = 30;//error  cannot be ressigned.

// 44. What is the difference between let and const?
 // The main difference is that a let variable can reassigned, While a const variable cannot be reassigned.
 // ex: let
 //  let age = 20;
 //  age = 30;
 //  console.log(age);   output: 30
// Here, The value of age is changed from 20 to 30, so let allows reassignment.

 //  Ex: const   const age = 20;
 //                age = 30;
 // Here. The value cannot be changed because const doesnot allow reassignment.

// 45. What is the difference between var and const?
// The main difference is that var can be reassigned and redeclared, whereas const cannot be reassigned or redeclared.
//     Ex: var:    var age = 20;
//                 age = 30;  // Reassignment
//                var age = 34; // Redclaration

//     Ex: const:    const age = 20;
//                     age = 23; // Error
// const does not allow reassignment.

//46. Write JavaScript code to print Hello World using console.log().
           console.log("This is JavaScript");

// 47. Write JavaScript code to print the number 500 using console.log().           
                console.log(500);

// 48. What is the purpose of console.warn()?
//     console.warn() is used to display a waring message in the browser console.
               console.warn("This is a warning message");
               
// 49. What is the purpose of console.error()?
// console.error() is used to display an error message in brower console.
        console.error("something went wrong!");

// 50. What is the purpose of each?
// alert() - alert() is used to display a message in a popup box to user.
                 alert("Welcome to JavaScript!");

// prompt() - prompt() is used to enter some information
                    let Name = prompt("Enter your name:");
                       console.log(name); 

// confirm() - confirm() is used to ask the user for confirmation. It display OK And Cancel buttons.
                    let answer = confirm("Do You Want to Continue?");
                        console.log(answer);

// document.writeln() - document.writeln() is used to write content directly onto the webpage.
                        document.writeln("This is scripting");

// console.log() - console.log() is used to display information in the browser's developer console. It's is commonly used for checking values and dubugging.
                console.log("Harika"); 

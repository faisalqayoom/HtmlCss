/**
 * Basic: Introduction, Variables, datatypes
 * control Statement: if, ifelse, loops(for loop, while loop, do while), switch
 * Functions: basic functions, parameters, return types, 
 * DOM: Document object model.
 */

//Number, String, bool;
//var;
// let n = 1000;
// for(let i =0 ; i<= n; i+=2){
//   console.log(i);
// }

// let arr = ["faisal" , 1 , "yawar"];

//PUSH
// arr.push("umar");
// arr.push(["shafi","shakir",3,5]);
// console.log(arr);

//POP removes the last element
// arr.pop();
// console.log(arr);


//Shift removes the first element
// arr.shift();
// console.log(arr);

// arr.unshift("sajad");
// console.log(arr);


/**
 * //!CSS Selectors//
 * .(classname), #(id), elementname, elementname > child_element_name
 * selector:nth(4)
 */

/**
 * Javascript selectors are same as CSS selectors
 * 
 */

// var x = 10;
// var y = true;

// var student = {
//   name: "Faisal",
//   address: "Shar",
//   phone: "98798797",
//   walk: function() {                         //Anonymous function: function without name.
//     console.log(this.name + " is walking!")
//   },
//   talk() {
//     console.log(this.name + " is walking!")
//   }
// };


// console.log(student.walk);

// function Talk() {
//   console.log("Faisal is talking!");
// }

// var tk = Talk;
// console.log(tk());



// function RunOtherFunction(func) {
//   console.log(func())
// }

// function funct() {
//   console.log("This is a function running inside other function");
// }

// //first way
// RunOtherFunction(function() {
//   console.log("This is a function running inside other function");
// });

// //2nd way
// RunOtherFunction(funct);


let loginButton = document.getElementById("loginBtn");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let emailError = document.getElementById("emailError");

//event listeners
loginButton.addEventListener('click', function() {
  console.log("Login button clicked!");
});

function loginBtnClick() {
  console.log("Login button clicked!");
}

// function validateForm() {
//   let x = document.forms["form"]["user-email"].value;
//   if (x == "") {
//     alert("Name must be filled out");
//     return false;
//   }
// }



emailInput.addEventListener('change', function() {
  console.log(emailInput.value)
  if(emailInput.value != "sajadshafi@gmail.com") emailError.innerText = "Email is not valid"; 
  else emailError.innerText = "Email is valid";
})
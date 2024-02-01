console.log("Hello, welcome to FUN-ctions!!");

// Step 1: declare/define the function
//--------------------------------
function functionName() {
  //code within the { } will run whenever you invoke the function
}

// Step 2: invoke/call the function
//--------------------------------
//    a) function name - wingardium leviosa!!
//    b) () paranthesis - flick and swish
functionName();

// sayHello function
// ------------------
// - no parameters
// - no return statement
function sayHello() {
  console.log("Hello");
}

sayHello();

// greetPerson function
// ----------------------
// - name parameter
// - no return statement
// - more dynamic than sayHello() because it uses parameters
function greetPerson(name) {
  console.log(name);
}
// must pass a name string as an argument or the function won't work properly
greetPerson("Bob");

// addThreeAndFive function
// ---------------------
// - no parameters
// - returns a number
// - not very useful, returns the same value everytime
function addThreeAndFive() {
  let sum = 3 + 5;
  return sum;
}

let sumOfThreeAndFive = addThreeAndFive();
console.log(addThreeAndFive());

// addNumbers function
// --------------------
// - 2 parameters: num1, num2
// - returns the sum of the 2 parameters
// - this function is dynamic because we are using parameters
//    - it will give us different results based of the arguments we pass when we invoke it
function addNumbers(num1, num2) {
  let sum = num1 + num2;
  return sum;
}
let addedNumbers = addNumbers(10, 7);
console.log(addedNumbers);

// we could also write the above 2 lines of code in a single line
console.log(addNumbers(20, 5));

// formatDogeAge
// ---------------------
// - 2 parameters: name, age
// - returns a formatted string
// - dynamic and reusable
let dogAge = 5;
let dogName = "Leo";

function formatDogAge(name, age) {
  let formattedAge = "Doggie " + name + " is " + age * 7 + " in human years";
  return formattedAge;
}

let formattedBella = formatDogAge("Bella", 10);
console.log(formattedBella);

let formattedLeo = formatDogAge(dogName, dogAge);
console.log(formattedLeo);

// Again, we could also write the above 2 lines of code in a single line (they perform the same thing)
console.log(formatDogAge("Poochi", 3));
console.log(formatDogAge("Bob", 2));
console.log(formatDogAge("Buddy", 5));

// When we invoke/call a function we need to make sure to pass it the correct arguments in the correct order
//  - the below code will not run as we intended
console.log(formatDogAge(100, "Java"));

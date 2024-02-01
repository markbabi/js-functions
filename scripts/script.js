console.log("Hello, welcome to FUN-ctions!!");

function functionName() {
  //add some code
}

let dogAge = 5;
let dogName = "Leo";

function formatDogAge(name, age) {
  let formattedAge = "Doggie " + name + " is " + age * 7 + " in human years";
  return formattedAge;
}

let formattedDogAge = formatDogAge("Bella", 10);
console.log(formattedDogAge);

let formattedLeo = formatDogAge(dogName, dogAge);
console.log(formattedLeo);

console.log(formatDogAge("Poochi", 3));
console.log(formatDogAge("Bob", 2));
console.log(formatDogAge("Buddy", 5));
console.log(formatDogAge("Java", 100));

function sayHello(name) {
  return "Hello " + name;
}

let hello = sayHello("Jim");
console.log(hello);

function addNumbers(num1, num2) {
  return num1 + num2;
}

console.log(addNumbers("mark", 300));

alert("this is an alert");

var start_input = prompt("What number should we start with?");
var end_input = prompt("Where should we end with?")

var start_number = parseInt(start_input);
var end_number = parseInt(end_input);

console.log("Start Number: " + start_number);
console.log("End Number: " + end_number);

if (start_number < end_number){
  while (start_number <= end_number) {
    if (start_number % 3 === 0 && start_number % 5 === 0) {
      console.log("FizzBuzz");
      start_number++;
    }
    else if (start_number % 5 === 0) {
      console.log("Buzz");
      start_number++;
    }
    else if (start_number % 3 == 0) {
      console.log("Fizz");
      start_number++;
    }
    else {
      console.log(start_number);
      start_number++;
    }
  }
}
else{
  while (start_number >= end_number){
    if (start_number % 3 === 0 && start_number % 5 === 0){
      console.log("FizzBuzz");
      start_number--; 
    }
    else if (start_number % 5 === 0) {
      console.log("Buzz");
      start_number--;
    }
    else if (start_number % 3 == 0) {
      console.log("Fizz");
      start_number--;
    }
    else {
      console.log(start_number);
      start_number--;
    }
  }
}
var correct = true;
var password = "cortana";
var answer = prompt("What is your password?")
if (answer != password){
  correct = false
}

if (correct === false){
  alert("You got it wrong it's " + password)
}
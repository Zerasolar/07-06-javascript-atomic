var answer= prompt("What is your age?");
answer = parseInt(answer)

if (Number.isNaN(answer)){
  alert("Sorry, that is not a number")
} else if (answer >= 25){
  alert("You can rent a car");
} else if (answer >= 21){
  alert("Please don't drink and drive");
} else if (answer >= 16){
  alert("You are eligible for a driver's license");
} else if (answer > 0){
  alert("You can not drive yet, but you'll be able to in a few years");
} else if (answer < 0){
  alert("You haven't been born yet");
}

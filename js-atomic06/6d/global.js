var answer = parseInt (prompt("What is your age?"))
if (answer >= 25){
  alert("You can rent a car")
} 

if (answer >= 21){
  alert("Please don't drink and drive")
} 

if (answer >= 16){
  alert("You're eligible for a driver's license")
} 

if ((answer <= 15) && (answer >= 0)){
  alert("You can't drive yet, but you'll be able to in a few years")
}

if (answer < 0){
  alert("You haven't been born yet")
}

if (isNaN(answer)){
  alert("Sorry, but that's not a number")
}  
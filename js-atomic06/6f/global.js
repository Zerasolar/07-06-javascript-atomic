var number1= parseInt(prompt("What is the length of side 1?"));

var number2= parseInt(prompt("What is the length of side 2?"));

var number3= parseInt(prompt("What is the length of side 3?"));

var calc1= (number1 + number2) > number3
console.log(calc1)

var calc2= (number2 + number3) > number1
console.log(calc2)

var calc3= (number1 + number3) > number2
console.log(calc3)

if (calc1 == true && calc2 == true && calc3 == true){
  alert("This is a valid triangle!");
} else {
  alert("This is NOT a valid triangle");
}
  
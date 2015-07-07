var start_number = prompt("What number should we start?");
var end_number = prompt("What number should we end?");
var counter_number = prompt("What number should we count by");

if (start_number > end_number){
  for(start_number; start_number >= end_number; start_number += counter_number){
    console.log(start_number);
  }
}
else {
  for (start_number; start_number <= end_number; start_number -= counter_number) {
    console.log(start_number);
  }
}
var bottles = 99;

while (bottles > 1) {
  console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer.  You take one down, pass it around, " + (bottles - 1) + " bottles of beer on the wall.");
  bottles--;
}

if (bottles == 1) {
  console.log (bottles + " bottle of beer on the wall, " + bottles + " bottle of beer. You take one down, pass it around, no more bottles of beer on the wall.");
}
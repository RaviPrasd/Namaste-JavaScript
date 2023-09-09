var z = 3;
function a() {
  var y = 2;
  //   console.log(`console.log from inside of function a ` + x);
  console.log(`console.log from inside of function a ` + y);
  console.log(`console.log from inside of function a ` + z);
  b();
  function b() {
    var x = 1;
    console.log(`console.log from inside of function b ` + x);
    console.log(`console.log from inside of function b ` + y);
    console.log(`console.log from inside of function b ` + z);
  }
}
// console.log(` console.log From the outer ` + x);
// console.log(` console.log From the outer ` + y);
console.log(` console.log From the outer ` + z);
a();
// b();

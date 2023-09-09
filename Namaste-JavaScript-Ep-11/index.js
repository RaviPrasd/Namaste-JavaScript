// function a() {
//   let x = 10;
//   setTimeout(function b() {
//     console.log(x);
//   }, 3000);
//   console.log(`Namaste JavaScript`);
// }
// a();

// printing 1 to 5 at the interval of timing same as number

// function print() {
//   for (i = 1; i <= 5; i++) {
//     setTimeout(function num() {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log(`Printing Number`);
// }
// print();

/**
 * Here the out will be as follows
 * Printing Number
 * 6
 * 6
 * 6
 * 6
 * 6
 * this is due to the i in line number 15 is refrencing towards the i at same memory in line number 13 ,
 * 6 is been printed because of setTimeout as the loop is running continously
 * This can be avoided by using let as it is block scope (it will have new value every time)
 * The other option to avoid this is by closure
 */

function print() {
  for (i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(function num() {
        console.log(i);
      }, i * 1000);
    }
    close(i);
  }
  console.log(`Printing Number`);
}
print();

// Everytime we call a close function with i it creates a new copy of of itself on line 38

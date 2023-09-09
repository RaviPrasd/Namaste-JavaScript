// Hoisting is phenomenon in JavaScript by which you can access the variable and function even before initialising it

console.log(x);

getName();

console.log(getName1);

/*  getName1() 
    This will throw Uncaught typeerror : getName1 is not a function ; 
    Arrow functions are treated as variable only

*/
var x = 7;

function getName() {
  console.log(`Namaste JavaScript`);
}

var getName1 = () => {
  console.log(`Namaste JavaScript`);
};

var a = 100;
let b = 200;
const c = 300;
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}

console.log(
  " Shadowing occurs as var a = 100 in global scope is not printed " + a
);
console.log(b);
console.log(c);
/* console.log(b);
   console.log(c); 
   cannot acces let and const outside bloc as they are block scoped
*/

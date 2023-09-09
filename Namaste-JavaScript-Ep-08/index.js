var a = 100;
var a = 200;

//  console.log(b) -> will give RefrenceError as the let is in temporal deadzone
let b = 100;
console.log(b);
//  var b = 100 -> cannot do this as let doesn't allow duplication
const c = 1000;
console.log(c);
let d;
d = 400;
/* const e;
    e = 500; -> can't do this as const intialisation and declaration is done at same time 
*/
/*
    Try to use const 
    if can't use const use let
    use of var is not suggested
    To avoid temporal deadzone try to declare and initialise all the const and let variable at the start of program 
*/

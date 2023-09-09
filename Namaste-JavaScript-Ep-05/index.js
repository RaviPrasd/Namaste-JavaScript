var x = 100;

function fn() {
  var x = 10;
  console.log(`console log used with window keyword ` + window.x);
  console.log(`console log used with this keyword ` + this.x);
  console.log(x);
}

console.log(this.x);
console.log(window.x);
fn();

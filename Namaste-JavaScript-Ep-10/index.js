function a() {
  const num = 10;
  function b() {
    console.log(num);
  }
  return b;
}
/* If we try to ivoke function b outside the function a it gives a Refrence error b is not defined ,
bt if we return the function b it will still remember where it was actually present */
let d = a();
d();

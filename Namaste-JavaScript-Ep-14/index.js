setTimeout(function () {
  console.log(`setTimeout used`);
}, 5000);

function a(y) {
  console.log(`Inside a`);
  y();
}
a(function b() {
  console.log(`Inside b`);
});
function countingClick() {
  let count = 0;
  document.getElementById("click-me").addEventListener("click", function xyz() {
    console.log(`Button clicked`, ++count);
  });
}
countingClick();

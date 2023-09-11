const arr = [2, 4, 6, 8];

function double(x) {
  return x * 2;
}

function triple(x) {
  return x * 3;
}

function binary(x) {
  return x.toString(2);
}

const output = arr.map(double);
console.log(output);

const outputTriple = arr.map(triple);
console.log(outputTriple);

const outputBinary = arr.map(binary);
console.log(outputBinary);

// Filter

const arr1 = [1, 2, 3, 4, 5, 6, 7];

function isOdd(x) {
  return x % 2;
}

const outputOdd = arr1.filter(isOdd);
console.log(outputOdd);

function isEven(x) {
  return x % 2 === 0;
}

const outputEven = arr1.filter(isEven);
console.log(outputEven);

function greaterThan4(x) {
  return x > 4;
}
const greater = arr1.filter(greaterThan4);
console.log(greater);

// Reduce

function findSum(arr1) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum = sum + arr1[i];
  }
  return sum;
}
console.log(findSum(arr1));

const newOutput = arr1.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);
console.log(newOutput);

function findMax(arr1) {
  let max = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > max) {
      max = arr1[i];
    }
  }
  return max;
}
console.log(findMax(arr1));

const newOutput1 = arr1.reduce(function (acc, curr) {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);
console.log(newOutput1);

const user = [
  { firstName: "Ravi", lastName: "Prasad", age: 27 },
  { firstName: "Bruce", lastName: "Wayne", age: 51 },
  { firstName: "Tony", lastName: "Stark", age: 27 },
  { firstName: "Bary", lastName: "Allen", age: 75 },
];

// List of Full Name

const fullName = user.map((x) => x.firstName + " " + x.lastName);
console.log(fullName);

// age and there repeatation

const age = user.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(age);

// age greater than 30 with there first name

const greaterThan30 = user.filter((x) => x.age > 30).map((x) => x.firstName);
console.log(greaterThan30);

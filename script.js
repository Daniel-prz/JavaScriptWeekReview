"use strict";

const NAME = document.getElementById("name");
const AGE = document.getElementById("age");
const FORM = document.getElementById("form1");

FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  const NALI = document.createElement("li");
  const urName = e.target.name.value;
  const urAge = e.target.age.value;
  NALI.innerText = `${urName} , ${urAge}`;
  document.getElementById("list").appendChild(NALI);
});

let colorArray = ["black", "red", "gray", "navy", "teal"];

for (let i = 0; i < colorArray.length; i++) {
  const colors = document.createElement("p");
  colors.innerText = colorArray[i];
  document.getElementById("pdiv").appendChild(colors);
}

let counter = [1, 2, 3, 4, 5, 6, 7];

let i = 0;
while (i < 5) {
  const counting = document.createElement("p");
  counting.innerText = counter[i];
  document.getElementById("pdiv").appendChild(counting);
  i++;
}

let numArray = [5, 10, 15, 20, 25];

let numx2 = numArray.map(x2);

function x2(num) {
  return num * 2;
}

console.log(numx2);

let numEvens = numArray.filter(evens);

function evens(num) {
  return num % 2 === 0;
}

console.log(numEvens);

const listEvens = numEvens.forEach(createEvens);

function createEvens() {
  //for (let i = 0; i > 2; i++) {
  const even1 = document.createElement("li");
  even1.innerText = numEvens;
  document.getElementById("list").appendChild(even1);

  // }
}
//const listEvens2 = numEvens.forEach(forEachEvens);

// function forEachEvens() {
//   numEvens.forEach(() => {
//     const even1 = document.createElement("li");
//     even1.innerText = numEvens;
//     document.getElementById("list").appendChild(even1);
//   });
// }
// console.log(listEvens);

const array1 = [3, 6, 9, 12];
const array2 = array1;
array1.shift();
console.log(array2);

let numberValue = 10;
let otherValue = numberValue;
numberValue = numberValue * 2;
console.log(otherValue);
console.log(numberValue);

"use strict";

const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("Hi");

// Interpolated
console.log("Hello there, %s", "✌");
// console.log(`Hello ${variable}`);

// Styled
console.log("%cStyled texts", "font-size:2rem; background: teal");

// Warning
console.warn("A WARNING!");

// Error
console.error("Error!");

// Info
console.info("This is an info.");

// Assert
const p = document.querySelector("p");
console.assert(p.classList.contains("hey"), 'Does not contain class "hey".');

// Clearing console
// console.clear();

// Viewing dom elements
console.dir(p);

// Grouping
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.groupEnd(`${dog.name}`);
});

// Count
console.count("Hey");
console.count("Hey");
console.count("Hello");
console.count("Hey");
console.count("Hello");

// Timing
console.time("Fetching data");
fetch("https://api.github.com/users/dwivedyaakash")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("Fetching data");
    console.log(data);
  });

// Table
console.table(dogs);

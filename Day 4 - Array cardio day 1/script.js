"use strict";

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

//1 Filter
const filterInventors = inventors.filter(function (inventor) {
  if (inventor.year >= 1500 && inventor.year < 1600) {
    return true;
  }
});
console.table(filterInventors);

//2 Map
const fullNames = inventors.map(
  //   (inventor) => inventor.first + " " + inventor.last
  (inventor) => `${inventor.first} ${inventor.last}`
);
console.log(fullNames);

//3 Sort
// const ordered = inventors.sort(function (a, b) {
//   if (a.year > b.year) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.table(ordered);

//4 Reduce
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);

//5 Sort by years
const yearLived = inventors.sort(function (a, b) {
  const first = a.passed - a.year;
  const last = b.passed - b.year;
  return first > last ? -1 : 1;
});
console.table(yearLived);

//6 Map and filter
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const categoryLinks = [...document.querySelectorAll(".mw-category a")];
const de = categoryLinks
  .map((link) => link.textContent)
  .filter((streetName) => streetName.includes("de"));

//7 Sort by last name
const peopleSorted = people.sort(function (last, first) {
  const [aLast, aFirst] = first.split(", ");
  const [bLast, bFirst] = last.split(", ");
  return aLast > bLast ? -1 : 1;
});
console.log(peopleSorted);

//8 Reduce
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const transport = data.reduce(function (obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});
console.log(transport);

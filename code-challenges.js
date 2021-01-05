// ASSESSMENT 6: JavaScript Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee."

//alejando
const nameFinder = (array) => {
  let name = array.map(value => value.name)
  //console.log(name);
  let nameSplit = name.map(value => value.split(" "))
  //console.log(nameSplit);
  let capitalizer = nameSplit.map(value => value.map(value => value[0].toUpperCase() + value.slice(1, value.length)))
  let joinNames = capitalizer.map(value => value.join(""))
  let occupation = array.map(value => value.occupation)
  let nameOccupation = []
  for(let i=0; i<array.length; i++){
    nameOccupation.push(`${joinNames[i]} is a ${occupation[i]}`)
  }
  return nameOccupation.join("")
}

console.log(nameFinder(people));

//filippo
const sentCap = (array) => {
  let describe = array.map(value => {
    let namesCap = value.name.split(" ").map(value => value.charAt(0).toUpperCase() + value.slice(1)).join(" ")
    return `${namesCap} is a ${value.occupation}`
  })
  return describe
}
console.log(sentCap(people));

// console.log();
// const persons = (array) => {
//   let re = /(\b[a-z](?!\s))/g
//   let nameMap = array.map(value => value.name.replace(re, function(alpha){return alpha.toUpperCase()}))
//   console.log(nameMap);
//   let occupations = people.map(value => value.occupation )
// console.log(occupations);
//   return nameMap
// }
// console.log(persons(people));

// console.log(people[0].occupation)
// const person = (array) => {
//   let namemap = people.map(value => value.name)
//   let re = /(\b[a-z](?!\s))/g
//   // let s = namemap.replace(re, function(x){return x.toUpperCase()})
//   // return s
//   console.log(namemap);
//   console.log(re);
//   return namemap.join(" ").replace(re, function(x){return x.toUpperCase()})
// }
// console.log(person(people));

// '${name} is a ${occupation}.'

// V-Brain Storm-V
// .map on key pair name and @ Index of 0 .UpperCase
// return through string interpulation key value pairs
// array of key value pairs
// destructure people
//var persons = people.filter(value => value )
//console.log(persons);
//console.log(people);
//console.log(people[0]);
//console.log(people[0].name);
//$ford prefect
//console.log(people[0].occupation);
//$hitchhiker
// var re = /(\b[a-z](?!\s))/g
// var s = namemap.replace(re, function(x){return x.toUpperCase()})
// console.log();

// const nameCapilizer = (array) => {
//   let names = people.name
  
// }





// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDER of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// create a local variable that filters for Numbers only, must use Number.isFinite because javascript sees zeros as a falsey statement
//console log [ 23, 45, -9, 0 ] & [ 5, 43, -34 ]
// return a .map over the local variable for the remainder of 3 (aka % 3)
//console log [ 2, 0, -0, 0 ] & [ 2, 1, -1 ]

const numRemainder = (array) => {
  let numFilter = array.filter(Number.isFinite)
  return numFilter.map(value => value % 3)
}

//refactored to fit one line below!
const numRemainder2 = (array) => {
  return array.filter(Number.isFinite).map(value => value % 3)
}
console.log(numRemainder2(testingArray1));
//console.log(numRemainder(testingArray1));
// Expected output: [ 2, 0, -0, 0 ]
//console.log(numRemainder(testingArray2));
// Expected output: [ 2, 1, -1 ]





// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]


// Comparing two seperate arrays as arguements (array1, array2)
// Combine both arrays into one array using .concat 
// Use * new Set * to store only unique values (so no more repeating values in concat)
// return result by using the spread operator to expand the iterable object of "set" into a copied array to comply with Expected output
const noDuplicates = (array1, array2) => {
  let concat = array1.concat(array2)
  let set = new Set(concat)
  return [...set]
}
console.log(noDuplicates(testingArray3, testingArray4));
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]


// const noDuplicates = (array1, array2) => {
//   return array1 = array1.filter(val => !array2.includes(val))
// }
// console.log(noDuplicates(testingArray3, testingArray4));
// [ 10 ]

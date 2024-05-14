// // //array of fruits
// // let fruits = ['apple', 'banana', 'mango', 'orange'];

// // let people = [
// //     // array of objects
// //     { name: 'John', age: 30, gender: 'male' },
// //     { name: 'Jane', age: 25, gender: 'female' },
// //     { name: 'Bob', age: 40, gender: 'male' },
// //     { name: 'Alice', age: 35, gender: 'female' }
// // ]

// //1.foreach loop : it is used to iterate over an array or object
// // fruits.forEach((fruit) => {
// //     console.log(fruit);
// // })
// // //for each loop
// // fruits.forEach(function (fruit) {
// //     console.log(fruit);
// // })

// // 2. for...in loop: it is used to iterate over an object
// // for (let key in people ) {
// //     console.log(key);
// //     console.log(people[key]);
// //     }

// // 3. for...of loop: it is used to iterate over an array
// // for(let item of fruits) {
// //     console.log(item);
// // }

// //4. for loop : it is used to iterate over an array or object
// //list numbers from 1 to 10

// // for(initialization; condition; increment/decrement){ {
// //code to be executed
// // }

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// //5. while loop : checks the condition first and then executes the code block
// // while (condition) {
// //     //code to be executed
// // // }

// let i = 1;

// while (i <= 10) {
//   console.log(i); //1,2,3,4,5,6,7,8,9,10
//   i++;
// }

// let j = 10;

// while (j >= 1) {
//   console.log(j); //10,9,8,7,6,5,4,3,2,1
//   j--;
// }

// // 6. do...while loop : executes the code block first and then checks the condition
// // do {
// //     //code to be executed
// //      increment/decrement
// // } while (condition);

// let k = 1;

// do {
//   console.log(k); //1,2,3,4,5,6,7,8,9,10
//   k++;
// } while (k <= 10);

// let l = 10;
// do {
//   console.log(l); //10,9,8,7,6,5,4,3,2,1
//   l--;
// } while (l >= 1);

// GROUP ASSIGNMENT
// example 3
console.log("example3");
for (let i = 1; i <= 6; i++) {
  let stars = "*".repeat(i);
  console.log(stars);
}

// *
// **
// ***
// ****
// *****
// ******

// example 4
console.log("example4");
for (let i = 6; i > 0; i--) {
  let stars = "*".repeat(i);
  console.log(stars);
}

// ******
// *****
// ****
// ***
// **
// *

// example 5
console.log("example5");
for (let i = 1; i <= 5; i++) {
  let stars = "*".repeat(i);
  let spaces = " ".repeat(5 - i);
  console.log(spaces + stars);
}
for (let i = 4; i > 0; i--) {
  let stars = "*".repeat(i);
  let spaces = " ".repeat(5 - i);
  console.log(spaces + stars);
}

//     *
//    **
//   ***
//  ****
// *****
//  ****
//   ***
//    **
//     *

// example 6
console.log("example6");
for (let i = 1; i <= 5; i++) {
  let stars = "*".repeat(i * 2 - 1);
  let spaces = " ".repeat(5 - i);
  console.log(spaces + stars);
}
for (let i = 4; i > 0; i--) {
  let stars = "*".repeat(i * 2 - 1);
  let spaces = " ".repeat(5 - i);
  console.log(spaces + stars);
}

//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

// example 7
console.log("example7");
function reverseRows(rows) {
  let stars = "*".repeat(rows);
  console.log(stars);

  for (let i = 1; i <= rows; i++) {
    console.log(" ".repeat(rows - 1) + "*");
  }
}
reverseRows(7);

//*******
//      *
//      *
//      *
//      *
//      *
//      *
//      *

// example 8
console.log("example8");
function reverseRows(rows) {
  let stars = "*".repeat(rows);
  console.log(stars);

  for (let i = 1; i <= rows; i++) {
    console.log("*" + " ".repeat(rows - 1));
  }
}
reverseRows(7);

//*******
//*
//*
//*
//*
//*
//*

// //array : ds which stores a collection of elements with index

// //index in array : 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ...n
// // create an array
// // 1. using array literal
let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];

// //2. using array prototype(new keyword/ constructor)
let marks = new Array(10, 20, 30, 40, 50);
console.log(marks[3]);

// // ARRAY PROPERTIES:
// // Arrays in JavaScript have several built-in properties, including:
// // * length: The number of elements in the array.
// // * constructor: A reference to the function that was used to create the array.
// //length property : returns the number of elements in the array

console.log(fruits.length); // 5

// //constructor property : returns the constructor function that created the array object
console.log(fruits.constructor); // [Function: Array]

// // ARRAY METHODS:
// push(), pop(), shift(),
// unshift(), splice(), slice(),
// concat(), join(), reverse(), sort(), indexOf(),
// lastIndexOf(), includes(), find(), findIndex(),
// filter(), map(), reduce(), reduceRight(), every(),
// some(), forEach(), toString(), toLocaleString(),
// isArray()

// //1.pop() : removes the last element from the array and returns the removed element
// // console.log(fruits.pop()); // Pineapple
// // console.log(fruits); // ['Apple', 'Banana', 'Mango', 'Orange']

// //2.push() : adds one or more elements to the end of an array and returns the new length of the array
// // console.log(fruits.push("kevin"));
// // console.log(fruits);

// //BEGINNING OF ARRAY METHODS
// //3.unshift() :  method adds a new element to an array (at the beginning)
// // console.log(fruits.unshift("kevin"));
// // console.log(fruits);

// // 4.shift() : removes the first element from an array and returns the removed element
// // console.log(fruits.shift());  //removes  & returns the removed element
// // console.log(fruits);

// //OTHER METHODS
// // let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
// // 5. indexOf
// // The indexOf() method searches an array for an element value and returns its position in the array.

// // let position = fruits.indexOf('Mango');
// // console.log(position)

// // 6. lastIndexOf
// // The lastIndexOf() method returns the position of the last occurrence of a specified value in a string.

// // let fruits15 = ["Apple", "Banana", "Orange", "Apple"];
// // let position2 = fruits15.lastIndexOf("Apple");
// // console.log(position2);

// // 7. includes
// // The includes() method determines whether an array contains a specified element.
// // let isInArray = fruits.includes("Man");
// // console.log(isInArray);

// // 8. join
// // The join() method returns the array as a string.
// // let fruits01 = ["Apple", "Banana", "Orange"];
// // let fruits17 = ["zabibu", "machungwa", "nanasi"];
// // let fruitsString = fruits17.join(fruits01);
// // console.log(fruitsString); // Apple,Banana,Orange

// // 9. filter
// // The filter() method creates a new array with array elements that passes a test.
// // let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // let evenNumbers = numbers.filter(function (number) {
// // return number % 2 == 0; // 3%2 = 1 4%2 =0
// });
// // let oddNumbers = numbers.filter((number) => {
// // return number % 2 != 0;
// });
// // console.log(evenNumbers);
// // console.log(oddNumbers);

// // 10. map
// // The map() method creates a new array with the results of calling a function for every array element.
let numbers2 = [1, 2, 3, 4, 5];
// // increment each element by 3
let incrementedNumbersBy3 = numbers2.map((number) => {
  return number + 3;
});
// // multiples of 2 for an array
let multiplesOf2 = numbers2.map((number) => {
  return number * 2;
});

console.log(incrementedNumbersBy3);
console.log(multiplesOf2);

// // 11. splice
// // The splice() method adds/removes items to/from an array, and returns the removed item(s).
let fruits4 = ["Banana", "Orange", "Apple", "Mango"];
fruits4.splice(1, 1, "Lemon", "Kiwi");
// the first number represents position to insert elements and the second position to delete elements
// if its 1 you just add, if its 0 item is deleted
console.log(fruits4); // ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]
//Example2
var fruits = ["apple", "banana", "orange", "mango"];
// Use the splice method to remove the second and third elements and insert "kiwi" and "lemon" in their place
var removed = fruits.splice(1, 2, "kiwi", "lemon");
// Print the modified array and the removed elements
console.log(fruits); // ["apple", "kiwi", "lemon", "mango"]
console.log(removed); // ["banana", "orange"]


// // 12. concat
// // The concat() method is used to join two or more arrays.
// let fruits3 = ["Banana", "Orange", "Apple", "Mango"];
// let vegetables = ["Potato", "Tomato", "Onion", "Cabbage"];
// let fruitsAndVegetables2 = fruits3.concat(vegetables);
// console.log(fruitsAndVegetables2); // ["Banana", "Orange", "Apple", "Mango", "Potato", "Tomato", "Onion", "Cabbage"]

//13. reverse
// // The reverse() method reverses the elements in an array.
// let fruits3 = ["Banana", "Orange", "Apple", "Mango"];
// fruits3.reverse();
// console.log(fruits3); // ["Mango", "Apple", "Orange", "Banana"]

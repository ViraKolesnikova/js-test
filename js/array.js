//=======ARRAYS=======
//Конструктор Array()
const array = ([1, 2, 3,'JavaScript', 4, 5, 6]);
// console.log(array)

// console.log(array[0])
// console.log(array[3])

//update element
array[0] = 'I Love';
// console.log(array)

//delete element in array
// delete array[1];
// console.log(array[1])
// console.log(array);

//iterate by array (for, for...of)

// for (let i = 0; i < array.length; i += 1) {
//   console.log(array[i])
//   //ітерація 1 : array[0] - I Love;
//   // ітерація 2 : array[1] - 2;
//   // ітерація 3 : array[2] - 3;....
// }

//break & continue
for (let i = 0; i < array.length; i += 1) {
  if (typeof array[i] === "number")
    continue
  // console.log(array[i])
  //ітерація 1 : array[0] - I Love;
  // ітерація 2 : array[1] - 2;
  // ітерація 3 : array[2] - 3;....
}

//multidinational arrays

const multiArray = [
  [1, 10, 100, 1000],
  [2, 20, 200, 2000],
  [3, 30, 300, 3000],
]
// console.log(multiArray.length)
// console.log(multiArray)

let it = 1;
for (let array of multiArray) {
  // console.log(array)
  for (let xxx of array) {
    // console.log(xxx)
  }
}

//При присвоюванні примітиви роблять копію, а складні типи, як масиви - ссилку
let age = 30;
// console.log('age', age);

let myAge = age;
// console.log('myAge', myAge);

// console.log(age === myAge);

age = 35;
// console.log('age', age);
// console.log('myAge', myAge);

// console.log(age === myAge);

const numbers = [5, 10, 15, 20, 25]
// console.log(numbers);

// const myNumbers = numbers;
// console.log(myNumbers);

numbers[0] = 200;
// console.log(numbers);
// console.log(myNumbers);

//Array Methods
console.log(numbers);

//slice()
const myNumbers = numbers.slice();
// console.log(myNumbers)
// console.log(numbers === myNumbers)

const firstTwoElens = numbers.slice(0, 2);
// console.log(firstTwoElens)

//split()
let myString = 'my String';
console.log(typeof myString, myString);
console.log(myString[0]);
console.log(myString[1]);
console.log(myString[2]);
console.log(myString[3]);
console.log(myString[4]);

const arrayFromString1 = myString.split('');
console.log(arrayFromString1)

const arrayFromString2 = myString.split(' ');
console.log(arrayFromString2)

const arrayFromString3 = myString.split('n');
console.log(arrayFromString3)

//join()
const myArray = ['I', 'love', 'js'];
console.log(myArray.length);

let arrayToString = myArray.join(' ')
console.log(arrayToString);

//indexOf() & include()
console.log(myArray);
console.log(myString);

// unshift()   ADD      push(elem....)
// shift()   DELETE    pop(elem....)
const exampleArray = [1, 1, 4, 4];
console.log(exampleArray);
const unshiftElem = exampleArray.unshift(0,9,8);
console.log(exampleArray);
const pushElem = exampleArray.push(5,6,7);
console.log(exampleArray);
const shiftElem = exampleArray.shift();
console.log(exampleArray);
const popElem = exampleArray.pop();
console.log(exampleArray);

//splice(index, num) - delete elements

//splice(index, 0, elem.....) - add elements
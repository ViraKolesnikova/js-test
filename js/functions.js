// Объявление (создание)
// FUNCTION EXPRESSION
// myFunc() // нельзя вызывать до объявления
const myFunс = function (param1, param2) {
  //перечисляєм інструкції
  console.log(`Функціональне вираження з параметрами ${param1} & ${param2}`);
}

// FUNCTION DECLARATION
// myFuncDecl() // МОжно вызвать до объявления
function myFuncDecl(param) {
  console.log('Дукларативне вираження');
}


// ARROW FUNCTION - ES6
// myArrowFunc() // нельзя вызывать до объявления
const myArrowFunc = (param1) => {
  //перечисляєм інструкції
  console.log('Стрілочна функція');
}

// Вызовы функций
// myFunс('Hello', 'baby');
// myFuncDecl()
// myArrowFunc()

// PARAMS & ARGUMENTS
// let user
// function toSayHello(userName = "User") {
//   // alert(`${userName}, раді Вас вітати!`)
// }
// toSayHello('Vera')
// toSayHello(user)
// default params

// toSayHello('sandra')
// toSayHello(user)

function showInfo (userName, userAge) {
  console.log(`Hello, my name is ${userName}, I'm ${userAge} years old`);
}

// showInfo('Vera', 35)

// arguments & ...args
function getResult() {
  // console.log(arguments);
  for (let elem of arguments) {
    // console.log(elem);
  }
  // arguments.push(1);
  //перетворення псевдомасива в масив

  const myArgs = Array.from(arguments);
  // console.log(myArgs);
  // myArgs.push(1);
  // console.log(myArgs);
}
// getResult(0, 1);

const getArrayRes = (...allParams) => {
  // console.log(allParams);
}
// getArrayRes(1,2,3,4,5)

// Guard Clause
function getValues(array, value) {
  console.log(array);
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === value) {
      return `Значення ${value} є в масиві`;      
    } 
  }  
  return `Значення ${value} немає в масиві`
}
console.log(getValues([1, 2, 3, 4, 5, 6, 7], 6));


// ARRROW FUNC & RETURN

const getTotal = (a, b) => {
  return a + b
}

console.log(getTotal(2, 5));

// 1
function checkYear(year) {
  let condition = year % 4 === 0;
  if (condition) {
    return `${year} високосний рік`
  }
  return `${year} не високосний рік`
}
console.log(checkYear(2020));

// 2

// function game() {
//   let comp = Math.ceil(Math.random() * (10 - 1) + 1)
//   let user = prompt('Введіть число від 1 до 10')
//   console.log(comp, user);
//   if (comp == user) {
//     return 'You win'
//   }
//   return 'You loose'
// }
// console.log(game())

// 3
function getMathResult() {
  let num1 = prompt('`Enter the first number`');
  let num2 = prompt('`Enter the second number`');
  let symbol = prompt('`Enter the symbol`');
  let total

  switch (symbol) {
    case '+':
      total = num1 + num2;
      break
    
    case '-':
      total = num1 - num2;
      break
    
    case '*':
      total = num1 * num2;
      break
    
    case '/':
      total = num1 / num2;
      break
    
    default:
      console.error('ERROR');
  }
 return total
}
console.log(getMathResult())

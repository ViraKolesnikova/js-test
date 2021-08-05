// PRACTICE
function every(array, callback) {
  const result = [];
  for (let elem of array) {
    let condition = callback(elem)
    // console.log(condition);
    result.push(condition)
  }
  // console.log(result);
  if (result.includes(false)) {
    return false
  } else{return true}
}
// console.log(every([1, 11, 111, 2, 22, 33], getLessThenTen));
// console.log(every([1, 2,3,4,5,6], getLessThenTen));

function getLessThenTen(number) {
  if (number < 10) {
    return true
  } else {
    return false
  }
}

function getMoreThenTen(number) {
  return number>10? true : false
}
// console.log((every([1, 11, 111, 2, 22, 33], getMoreThenTen)));

// 3
function compact(array, callback) {
  const newArray = [];
  for (let value of array) {
    console.log(Boolean(value));
    // if (Boolean(value)) {
    //   newArray.push(value)
    // }
  }
  callback(value, newArray)
  return newArray;
}

function getFalsyValues(element, falsyValues) {
  if (!Boolean(element)) {
    falsyValues.push(element)
  }
}
function getNotFalsyValues(element, notFalsyValues) {
  if (Boolean(element)) {
    notFalsyValues.push(element)
  }
}


console.log(compact([1,0,'', null, 'Hello']), getFalsyValues);
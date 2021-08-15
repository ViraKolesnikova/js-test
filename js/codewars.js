function duplicateEncode(word){
  let newWord = '';
  let wordArray = word.split('');
  // console.log(wordArray);
  for (let i = 0; i < wordArray.length; i += 1) {
    // console.log(wordArray[i]);
    for (let letter of wordArray) {
       if (wordArray[i] === letter && wordArray.indexOf([i]) !== wordArray.indexOf(letter)) {
        newWord = newWord + ')';
        break;
      } else if (wordArray[i] === letter && wordArray.indexOf([i]) === wordArray.indexOf([letter])) {
        newWord = newWord + '(';
      } 
    }
  }  
  return newWord;
}

console.log(duplicateEncode('recede'));

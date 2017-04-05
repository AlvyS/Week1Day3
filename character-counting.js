function countLetters(word) {
  var splitWord = [];
  var obj = {};
  splitWord = word.split("");
  for(var i = 0; i < splitWord.length; i++) {
    if (obj[splitWord[i]] !== " ") {
      if (obj[splitWord[i]])   {
        obj[splitWord[i]]++;
      } else {
        obj[splitWord[i]] = 1;
      }
    }
  }
  return obj;
}



console.log(countLetters("lighthouse in the house"));


function position(word) {
  var wordWithNoSpaces = word.replace(/\s/g, '');
  var obj = {};
  for (i in wordWithNoSpaces) {
    var letter = wordWithNoSpaces[i];
    if (!obj[letter]) {
      obj[letter] = [i];
    } else {
      obj[letter].push(i);
    }
  }
  return obj;
}

console.log(position("lighthouse in the house"));
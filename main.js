function getWordCount(sentence) {
  var counter = 0
  for(var i = 0; i < sentence.length; i++) {
  if(sentence[i] === " ") {
    counter += 1;

  }
 }
  return counter + 1


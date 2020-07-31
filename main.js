function decimalPlaceCounter(stringNumber){
  var counter = 0;
  for (var i = 0; i < stringNumber.length; i++) {
    counter += 1
    if (stringNumber[i] === ".") {
      return counter - 1
    }
  }
  return 0
}

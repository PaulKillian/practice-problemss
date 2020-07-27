function phAnalyzer(number) {
  switch(number) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return "Acidic";
    case 7:
      return "Neutral";
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
      return "Alkaline";
    default:
      return "Invalid ph value"
  }
}

function checkVowel(char){

switch(char) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
  case "A":
  case "E":
  case "I":
  case "O":
  case "U":
return("Vowel");
  break;
  default:
 return("Consonant");
}
}

console.log(checkVowel("e"));
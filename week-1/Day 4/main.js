function ageChecker(dob){
   
var currentYear = 2021;
var age = currentYear - dob;
if(age >= 13 && age <= 19) {
  return("Teenage");
}
else if(age >= 20 && age <=29) {
  return("Twenties");
}
}

console.log(ageChecker(2001));
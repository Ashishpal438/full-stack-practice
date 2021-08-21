function weekday(num) {
    
  var num ;
  switch(num) {
    case 1: 
      return("Monday");
      break;
    case 2: 
      return("Tuesday");
      break;
    case 3: 
      console.log("Wednesday");
      break;
    case 4: 
      return("Thursday");
      break;
    case 5: 
     return("Friday");
      break;
    case 6: 
      return("Saturady");
      break;
    case 7: 
      return("Sunday");
      break;
  }
}
console.log(weekday(7));

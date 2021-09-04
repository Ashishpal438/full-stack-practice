//declaring a function to convert uppercase to lowercase--
function lowerCase(char){
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    for(var i=0;i<upper.length;i++){
      if(char === upper[i]){
        return lower[i];
      }
    }
       return char;
    }
  
  
  //declaring a function to convert lowerrcase to uppercase--
    function upperCase(char){
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    for(var i=0;i<upper.length;i++){
      if(char === lower[i]){
        return upper[i];
      }
    }
       return char;
    }
  
  
  //declaring a function to swap -----
  function swap(str){
  var lower = "abcdefghijklmnopqrstuvwxyz"
  var upper = "ABCDEFGHIJKLMNOPQRSTUVXYZ"
  var newstr = ""
   for(var i=0;i<str.length;i++){
    for(var j=0;j<lower.length;j++){
      if(str[i]===lower[j]){
       newstr = newstr + upperCase(str[i])
       break;
      }
      else if(str[i]===upper[j]){
      newstr = newstr + lowerCase(str[i])
      break;
      }
     }  
   }
   return newstr
  }
  //sample---
  console.log(swap("Test"))
  //sample1---
  console.log(swap("Masai"))
  //sample2----
  console.log(swap("schooL"))
  //sample3----
  console.log(swap("mAsAi"))
  
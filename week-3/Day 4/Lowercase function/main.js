//declaring a function to convert a character to lowercase---
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
  
  // using above function to convert a word to lowercase--
  
  function lowerWord(str){
  var newstr = "";
  for(var j=0;j<str.length;j++){
  newstr = (newstr + lowerCase(str[j]));
  }
  return (newstr)
  }
  
  //sample ---
  console.log(lowerWord("MASAI"))
  
  //using above function to convert an array of string to array of lowercase string ---
  
  function lowerArray(arr){
    var newArr = [];
  for(var i=0;i<arr.length;i++){
    newArr.push(lowerWord(arr[i]));
  }
  return newArr;
  }
  
  // sample--
  console.log(lowerArray(["MA","SA","I","SCH","OOL"]));
  //SAMPLE2-----
  console.log(lowerArray(["sOFTWaRE","dEVeLOPMeNT"]))
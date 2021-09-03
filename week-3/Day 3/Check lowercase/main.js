function isSmallChar(char){
    var smallChar = "abcdefghijklmnopqrstuvwxyz"
    for(var i=0;i<smallChar.length;i++){
      if(char === smallChar[i]){
        return true;
      }
    }
    return false;
  }
  
  
  console.log(isSmallChar("M"))
  console.log(isSmallChar("n"))
  console.log(isSmallChar("e"))
  console.log(isSmallChar("F"))
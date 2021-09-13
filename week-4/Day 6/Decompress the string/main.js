function decompressString(string) {
    var alphabets = "abcdefghijklmnopqrstuvwxyz";
    var newstr = "";
    for(var i=0; i<string.length; i++){
      var isNumber = true;
     for(var j=0; j<alphabets.length; j++){
      if(string[i] === alphabets[j]){
       isNumber = false;
        break;
      }
     }
      if(isNumber){
       for(var k=1; k<=string[i]; k++){
        newstr = newstr + string[i-1]
       }
      }
    }
    console.log(newstr)
  }
  decompressString("a3b2")
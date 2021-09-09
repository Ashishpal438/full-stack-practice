function strongPassword(N,arr){
    var symbol = "@$*#"
    var newstr = ""
    var str = "";
    for(var i=0; i<N; i++){
       var isWeak = true;
     var str = arr[i];
  
      for(var j=0; j<str.length; j++){
         for(var k=0; k<symbol.length; k++){
         if(str[j] === symbol[k]){
         isWeak = false;
           break;
         }
        }
        if(isWeak === false){
           break;
           } 
      }
      //final--
      if(isWeak){
      newstr = newstr + "weak" + " ";
      }else{
      newstr = newstr + "strong" + " ";
      }
    }
  console.log(newstr)
  }
strongPassword(3,["ashish","as@1","dhg3"])  
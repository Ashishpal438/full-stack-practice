function removeUppercase(N, str) {
    var uppercase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
     var ans = "";
    
    for(var i=0; i<N; i++){
      var isUpper = false;
     for(var j=0; j<uppercase.length; j++){
      if(str[i] === uppercase[j]){
        isUpper = true;
        break;
      }  
     }
      if(isUpper){
       ans = ans ;
      } else{
       ans = ans + str[i]
      }
    }
    console.log(ans)
  }
  removeUppercase(6,"ASrita")
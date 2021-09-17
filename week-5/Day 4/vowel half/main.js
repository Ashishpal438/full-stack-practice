function vowelHalf(N, str) {
    var vowels = "aeiou";
    var count = 0;
    for(var i=0; i<N; i++){
      for(var j=0; j<vowels.length; j++){
        if(str[i] === vowels[j]){
         count++;
        }
      }
    }
    if(count > N/2){
     console.log("True")
    }else{
     console.log("False")
    }
  }
vowelHalf(6,"aabefe")  
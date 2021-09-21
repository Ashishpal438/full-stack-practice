function vowelsInRows(N,M,arr){
    var vowel = "aeiou";
     for(var i=0; i<N; i++){
      for(var j=0; j<M; j++){
        var isVowel = false;
       for(var k=0; k<vowel.length; k++){
        if(arr[i][j] === vowel[k]){
         isVowel = true;
          break;
        }
       }  
       if(isVowel){
        break;
       }
      }
        if(isVowel){
        console.log("Yes");
        }else{
         console.log("No")
        }
     }
   }
   vowelsInRows(3,2,[['a','b'],['c','d'],['e','f']])
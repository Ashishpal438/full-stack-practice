function vowelAndConsonantCount(N, str) {
    var vowels = "aeiouAEIOU";
    var vowelsCount = 0;
    var consonantsCount = 0;
    for(var i=0;i<=N;i++){
    
      for(var j=0;j<=vowels.length-1;j++){
      
      if(str[i]===vowels[j]){
       vowelsCount++ ;
        }
      }
      
    }
    consonantsCount = N - vowelsCount;
    console.log(vowelsCount , consonantsCount)
  }
  vowelAndConsonantCount(6, "Ashish")
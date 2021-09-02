function checkVowel(N, str) {
    var isVowel = false;
    var vowels = "aeiou";
    
      for(var i=0;i<=N;i++){   
      
        for(var j=0;j<=(vowels.length-1);j++){
        if(str[i] === vowels[j]) {
        isVowel = true;
          break;
         } 
        }     
        if(isVowel === true){
        break;
        }
       
      }
     console.log(isVowel)
  }
  checkVowel(5, "Nrupul")
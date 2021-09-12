function countConsonants(s) {
    var vowels = "aeiou";
    var count = 0;
    for(var i=0; i <s.length;i++){
      var isVowel = false;
    for(var j=0; j<vowels.length; j++){
    if(s[i] === vowels[j]){
    isVowel = true;
      break;
      }
     }
       if(isVowel === false){
       count++;
       }
    }
   
    console.log(count);
  }
  countConsonants("softwaredevelopment")
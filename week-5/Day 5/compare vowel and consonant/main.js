function compareVowelsConsonants(N, str) {
    var vowels = "aeiou";
    var vowelCount = 0;
    var consoCount = 0;
    for(var i=0; i<N; i++){
     var isVowel = false;
       for(var j=0; j<vowels.length; j++){
        if(str[i] === vowels[j]){
         isVowel = true;
        }
       }
      if(isVowel){
        vowelCount++;
      }else{
       consoCount++;
      }
    }
    if(vowelCount === consoCount){
     console.log("Tie");
    }else if(vowelCount > consoCount){
     console.log("Vowel");
    }else if(vowelCount < consoCount){
     console.log("Consonant");
    }
  }
compareVowelsConsonants(6, "ashish")  
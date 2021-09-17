function twoStringsFromOne(N, str) {
    var vowels = "aeiou";
    var str1 = "";
    var str2 = "";
    for(var i=0; i<N; i++){
      var isVowel = false;
     for(var j=0; j<vowels.length; j++){
      if(str[i] === vowels[j]){
        isVowel = true;
      }
     }
      if(isVowel){
       str1 = str1 + str[i];
      }else{
       str2 = str2 + str[i]
      }
    }
    console.log(str1);
    console.log(str2);
  }
twoStringsFromOne(6,"nrupul")  
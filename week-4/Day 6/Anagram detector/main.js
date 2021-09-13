function anagramDetector(S1,S2){
    var str1 = S1.split(" ").join('');
  var str2 = S2.split(" ").join('');
  
  var newstr1 = str1.split("").sort().join("");
  var newstr2 = str2.split("").sort().join("");
  if(newstr1.length !== newstr2.length){
   console.log("False")
   return  ;
  }
    var isAnagram = true;
    for(var i=0; i<newstr1.length; i++){
      if(newstr1[i] !== newstr2[i]){
       isAnagram = false;
        break;
      }
    }
  if(isAnagram){
   console.log("True")
  }else{
   console.log("False")
  }
}
anagramDetector("anagram", "nag a ram")
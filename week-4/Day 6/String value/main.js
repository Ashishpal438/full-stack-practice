function stringValue(S) {
    var alphabets = "abcdefghijklmnopqrstuvwxyz";
    var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
    var sum = 0;
     for(var i=0; i<S.length; i++){
      for(var j=0; j<alphabets.length; j++){
       if(S[i] === alphabets[j]){
        sum = sum + numbers[j]
          break;
       }
      }
     }
    console.log(sum);
  }
stringValue("abcd")  
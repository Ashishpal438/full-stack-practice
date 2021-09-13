function subStrUnderCond(s){

    var count = 0;
    for(var i=0; i<s.length; i++){
      var str = "";
    for(var j=i; j<s.length; j++){
      str = str + s[j];
      if(str[0] === str[str.length-1]){
      count++
      }
     }
    }
    console.log(count)
  }
subStrUnderCond("abcab")  
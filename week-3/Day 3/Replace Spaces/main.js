function replaceSpaces(input,char){
    var output = ""
    for(var i=0;i<input.length;i++){
      if(input[i] === " "){
      output = output + char;
      }
      else{
     output = output + input[i]
      }
    }
    return output;
  }
  
  console.log(replaceSpaces("A B C D E" , "-"));
var  str = '   Hello world!   ';
console.log(str)
function customTrim(str){
  var newstr = "";
  var i = 0;
  while(str[i]=== " "){
      i++;
  }
  
   for(var j=i;j<str.length;j++){
       newstr = newstr + str[j]
     }
      return newstr;
    }
 

console.log(customTrim(str))
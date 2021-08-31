var str = "developer";

var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXY"
var newstr = "" ;
for(var i=0;i<str.length;i++){

  for(var j=0;j<lower.length;j++){

   if(str[i]===lower[j] || str[i] === upper[j]){
    newstr = newstr + upper[j];
    break;
   }
   
 } 
   
}

console.log(newstr)

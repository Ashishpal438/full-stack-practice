var str = "masai";
var newObj = {};

for(var i=0; i<str.length; i++){
 var k = str[i];
 if(newObj[k] === undefined){
   newObj[k] = 1
 } else{
   var prev = newObj[k] ;
   newObj[k] = prev + 1;
 }
}
 for(key in newObj){
   console.log(key + " - " + newObj[key])
 }
 
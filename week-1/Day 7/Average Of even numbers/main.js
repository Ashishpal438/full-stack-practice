var start = 1;
var end = 100;
var i = 1;
var n = 0;
var sum = 0

while(i <= end){
 if(i % 2 === 0){
   sum = sum + i;
    n++;
  }
  i++;  
}
console.log( sum / n);
var arr = [1,2,3,4,5,6,7,8,9,10]
var sum = 0;
var count = 0;

for(var i=0;i<arr.length;i++){
  if(arr[i] % 2 === 0){
    sum = sum + arr[i];
    count++;
  }
}
var avg ;
if(count == 0 ){
  avg = 0;
}
else{
  avg = sum / count;
}

console.log(avg);
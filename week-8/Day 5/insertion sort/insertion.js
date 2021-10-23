var arr = [7,5,18,3,9];
for(var i=1; i<arr.length; i++){
    var current = arr[i];
    var j = i-1
   while(arr[j]>current && j>=0){
     arr[j+1] = arr[j];  
     j--;
   }
   arr[j+1] = current
}
console.log(arr);
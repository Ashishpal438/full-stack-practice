//declaring a function to find the sum of all itmes of an array ---
function arrSum(items){
    var sum = 0;
    for(var i=0;i<items.length;i++){
      sum = sum + items[i];
    }
    return sum;
   }
   
   //using the above function to find the average of all item in array ---
   
   function arrAvg(items){
     var count = 0;
     for (var i=0;i<items.length;i++){
       count++;
     }
     if(count === 0){
       return 0;
     } else{
     return arrSum(items)/count;
     }
   }
   
   //using this function in code --
   //sample 1--
   var arr1 = [2,4,6,8];
   var s = arrAvg(arr1);
   console.log(s);
   
   // sample 2---
   var arr2 = [];
   var s = arrAvg(arr2);
   console.log(s);
   
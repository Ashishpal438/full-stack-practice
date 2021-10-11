
 function twoSum(N,target,arr){
    var left=0;
    var right=N-1;
    var ans =[];
    
    var found = false;
    while(left<right){
     if(arr[left] + arr[right] == target){
       ans.push(left,right);
        found = true;
       break;
     }else if(arr[left] + arr[right] < target){
         left++;
     }else{
       right--;
     }
     
    }
    if(found){
       console.log(ans.join(" "))
   }else{
       console.log(-1,-1);
   }
    }
  twoSum(4,9,[2,7,11,5])
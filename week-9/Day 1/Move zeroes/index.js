var moveZeroes = function(nums) {
 
    for(var i=0; i<nums.length-1; i++){
      for(var j=0; j<nums.length-1-i; j++){
          if(nums[j] === 0){
              var temp = nums[j]
              nums[j] = nums[j+1]
              nums[j+1] = temp;
          }
      }
    }
  
    return nums
};
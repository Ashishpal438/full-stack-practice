var removeDuplicates = function(nums) {
    if(nums.length === 0){
        return 0
    }
    var i=0;
    for(var j=i+1; j<nums.length; j++){
        if(nums[i] !== nums[j]){  
            i++;
             nums[i] = nums[j]
        }
    }
    return i+1
};
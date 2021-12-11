var findMin = function(nums) {
    var low = 0
    var high =  nums.length-1
    while(low <= high){
           var mid =  low + Math.floor((high-low)/2)
        if(nums[mid] > nums[high]){
          low = mid + 1
        }
        
        else if(nums[mid] < nums[high]){
            high = mid
        }
        else{
        high--
        }
    }
    return nums[low]
};
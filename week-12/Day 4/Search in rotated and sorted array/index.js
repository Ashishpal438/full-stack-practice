var search = function(nums, target) {
    var low = 0
    var high = nums.length-1
    
    while(low <= high){
        var mid =  low + Math.floor((high-low)/2)
        
        if(nums[mid] === target) return true
        
        else if(nums[mid] < nums[high] || nums[mid] < nums[low]){
            if(nums[mid] < target && target <= nums[high]){
                low = mid + 1
            }
            else high = mid -1
        }
        else if(nums[mid] > nums[low] || nums[mid] > nums[high]){
           
             if(nums[low] <= target && target <= nums[mid]){
                high = mid -1
            }
            else low = mid + 1
        }
        else{
            high--
        }
    }
    return false
};
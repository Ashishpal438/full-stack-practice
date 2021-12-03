var search = function(nums, target) {
    var low = 0
    var high = nums.length-1
    var ans = -1
    while(low <= high){
      var mid = low + Math.floor((high-low)/2)
      if(nums[mid]===target){
          return mid
      }
        else if(nums[low] <= nums[mid]){
            if(nums[low] <= target && target <= nums[mid]){
                high = mid-1
            }
            else{
                low = mid + 1
            }
        }
        else{
            if(nums[mid] <= target && target <= nums[high]){
                low = mid + 1
            }
            else{
                high = mid -1
            }
        }
    }
    return ans
};
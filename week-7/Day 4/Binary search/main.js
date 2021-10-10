var search = function(nums, target) {
    var isPresent = false;
    var ans;
    for(var i=0; i<nums.length; i++){
        if(nums[i] === target){
            isPresent = true;
            ans = i
            break;
        }
    }
    if(isPresent){
        return ans;
    }else{
        return -1;
    }
};
console.log(search([-1,0,3,5,9,12],9));
var shuffle = function(nums, n) {
    var ans = []
    for(var i=0; i<nums.length ; i++){
        if(i<n){
            ans.push(nums[i])
            ans.push(nums[n+i]) 
        }
    }
    return ans
};
console.log(shuffle([2,5,1,3,4,7],3));
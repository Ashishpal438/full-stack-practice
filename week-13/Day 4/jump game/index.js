var jump = function(nums) {
    let dp  = new Array(nums.length).fill(Infinity)
    dp[0] = 0
   // console.log(dp)
    for(var i=1; i<nums.length; i++){
        for(var j=0; j<i; j++){
           if(nums[j] + j >= i){
               dp[i] = Math.min(dp[i],dp[j]+1)
           }
        }
    }
   // console.log(dp)
    return dp[nums.length-1]
};
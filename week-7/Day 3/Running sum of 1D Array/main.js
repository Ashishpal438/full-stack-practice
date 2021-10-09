var runningSum = function(nums) {
    var runningSum = [];
    var presum = 0;
    for(var i=0; i<nums.length; i++){
        if(i==0){
             runningSum[i] = nums[i];
            presum = presum + nums[i];
        }else{
            runningSum[i] = nums[i]+ presum;
            presum = presum + nums[i]
        }
       
    }
    return runningSum;
};
console.log(runningSum([1,2,3,4]));
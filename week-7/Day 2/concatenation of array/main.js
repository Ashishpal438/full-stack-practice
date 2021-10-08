var getConcatenation = function(nums) {
    var n = nums.length;
    var ans = [];
    
    for(var i=0; i<n ;i++){
        ans.push(nums[i])
    }
    for(var i=0; i<n; i++){
        ans.push(nums[i])
    }
    return ans;
};
console.log(getConcatenation([1,2,1]));

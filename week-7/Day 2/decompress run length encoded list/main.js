var decompressRLElist = function(nums) {
    var ans = [];
    for(var i=0; i<nums.length; i+=2){
        let frequency = nums[i];
        let value = nums[i+1];
        while(frequency > 0){
            ans.push(value);
            frequency--;
        }
    }
   return ans;
};
console.log(decompressRLElist([1,2,3,4]));
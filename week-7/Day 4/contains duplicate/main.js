var containsDuplicate = function(nums) {
    var map = new Map();
     var out;
    for(var i=0; i<nums.length; i++){
        var key = nums[i];     
        if(map.has(key)){
            out = true;
            break;
       } else{
             map.set(key,1)
            out = false;
       }
    }
    return out;
};
console.log(containsDuplicate([1,2,3,1]));
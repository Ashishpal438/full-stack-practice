var numIdenticalPairs = function(nums) {
    var goodPair = 0;
   for(var i=0; i<nums.length; i++){
     for(var j=i; j<nums.length; j++){
         if(nums[i]===nums[j+1])goodPair++;
     }
   }
    return goodPair;
};
console.log(numIdenticalPairs([1,2,3,1,1,3]));
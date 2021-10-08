function buildArray (nums) {
    var ans = [];
      for(var i=0; i<nums.length; i++){
          ans[i] = nums[nums[i]]
      }
      
      return ans;
  };
  console.log(buildArray([0,2,1,5,3,4]));


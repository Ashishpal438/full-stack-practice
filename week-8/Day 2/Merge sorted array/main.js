var merge = function(nums1, m, nums2, n) {
    nums1.splice(m,m+n)
  
  for(var i=0;i<n;i++){
    nums1.push(nums2[i])
  }  
    nums1.sort(function(a, b){return a - b});
    return nums1

};
console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));
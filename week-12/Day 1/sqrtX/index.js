var mySqrt = function(x) {
    if(x===0){
        return 0
    }
    var low =  1
    var high  = x
    var ans  = -1
    while(low <= high){
      var mid = low + Math.floor((high-low)/2)
      if(mid*mid===x){
        return mid 
      }
        else if(mid*mid > x){
            high = mid-1
        }
        else{
            ans = mid
            low = mid +1
        }
    }
    return ans
};
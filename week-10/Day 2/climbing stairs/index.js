var arr = new Array(46)
arr.fill(0)
var climbStairs = function(n) {
    if(n===0){
        return 1
    }
    if(n<0){
        return 0
    }
    if(arr[n]!==0){
        return arr[n]
    }
    return arr[n] = climbStairs(n-1) + climbStairs(n-2)
};
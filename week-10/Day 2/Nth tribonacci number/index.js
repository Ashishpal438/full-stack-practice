var arr = new Array(38)
arr.fill(0)
var tribonacci = function(n) {
    if(n==0){
        return 0
    }
    if(n===2||n===1){
        return 1
    }
    else if(arr[n]!==0){
      return arr[n]
    }
    return arr[n]  = tribonacci(n-1)+tribonacci(n-2)+tribonacci(n-3)
};
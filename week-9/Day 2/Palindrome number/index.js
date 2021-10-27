var isPalindrome = function(x) {
    str = String(x)
    if(x<0){
        return false
    }
    else{
        let i=0
        let j=str.length-1
        while(i<j){
            if(str[i]===str[j]){
                i++
                j--
            }
            else{
                return false
            }
        }
        return true
    }
};

console.log(isPalindrome(-121));
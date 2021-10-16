var twoSum = function(numbers, target) {
    var i = 0;
    var j = numbers.length-1;
    var ans = [];
    while(i<j){
        if(numbers[i] + numbers[j] === target){
            ans.push(i+1)
            ans.push(j+1)
            return ans;
        }
        else if(numbers[i] + numbers[j] < target){
            i++;
        }else{
            j--;
        }
    }
};
console.log(twoSum([2,7,11,15],9));
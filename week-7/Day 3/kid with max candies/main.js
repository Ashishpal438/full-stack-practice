var kidsWithCandies = function(candies, extraCandies) {
    var ans = [];
    var greatest = Math.max(...candies);
    for(var i=0; i<candies.length; i++){ 
        var num = candies[i] + extraCandies;
        if(num>=greatest){
            ans.push(true); 
        }else{
           ans.push(false); 
        }
        
    }
   return ans;
}   
console.log(kidsWithCandies([2,3,5,1,3],3));
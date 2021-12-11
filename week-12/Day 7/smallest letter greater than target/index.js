var nextGreatestLetter = function(letters, target) {
    
if(target >= letters[letters.length-1]) return letters[0]

   var low = 0
   var high = letters.length-1
   var ans = 'a'
   while(low <= high){
    var mid = low + Math.floor((high-low)/2)
    if(letters[mid] > target){
        ans = mid
        high = mid-1
    }
       else{
           low = mid +1
       }
   }
    return letters[ans]
};
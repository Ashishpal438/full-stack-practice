var numJewelsInStones = function(jewels, stones) {
    var count = 0;
    for(var i=0; i<stones.length; i++){
        for(var j=0; j<jewels.length; j++){
           if(stones[i] === jewels[j]){
               count++;
               break;
           }
        }
    }
    return count;
};
console.log(numJewelsInStones("aA","aAAbbbb"));
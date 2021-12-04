var canPlaceFlowers = function(flowerbed, n) {
    for(var i=0; i<flowerbed.length; i++){
       if(flowerbed[i]===0){
           if(flowerbed[i-1]===0 || flowerbed[i-1]===undefined){
               if(flowerbed[i+1]===0 || flowerbed[i+1]===undefined){
                   flowerbed[i] = 1
                   n--
               }
           }
       }
    }
    if(n<=0) return true
    else return false
};
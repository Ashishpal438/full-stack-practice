var lemonadeChange = function(arr) {
    var five = 0
    var ten = 0
    var twenty = 0
    if(arr[0] !== 5) return false
    
    for(var i=0; i<arr.length; i++){
      if(arr[i]===5){
          five++
      }
      else if(arr[i] === 10){
          ten++
          if(five>0){
              five--
          }else{
              return false
          }  
      }
      else if(arr[i] === 20){
            if(ten > 0 && five > 0){
                twenty++
                ten--
                five--
            }
          else if(five >= 3){
              twenty++
              five -= 3
          }
          else{
              return false
          }
        }
    }
    return true
};
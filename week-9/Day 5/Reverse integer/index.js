// /**
//  * @param {number} x
//  * @return {number}
//  */
 var reverse = function(x) {
    if(x> 2**32){
        return 0
    }
    let st = []
    let y = String(x)
     for(var i=0; i<y.length; i++){
         if(y[i] !== '-'){
              st.push(y[i])
         }   
        }    
 //onsole.log(st)
   var ans = []
   for(var j=y.length-1; j>=0; j--){
       if(y[j] !== "-"){
            ans.push(y[j])
       }
   }
    var out = Number(ans.join(""))
    if(out > 2**31) return 0
    if(x<0){
         return out * -1
    }else{
        return out
    }
}   
  
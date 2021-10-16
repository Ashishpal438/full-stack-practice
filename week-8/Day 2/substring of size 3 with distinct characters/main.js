var countGoodSubstrings = function(s) {
    var count = null
     for(var i=0; i<s.length; i++){
         var sub = "";
         for(var j=i; j<s.length;j++){
             sub = sub + s[j]
             if(sub.length === 3){
                 if(sub[0] !== sub[1] && sub[1] !== sub[2] && sub[2] !== sub[0]){
                     count++;
                 }
                  
             }
            
         }
     }
     return count;
 };
 console.log(countGoodSubstrings("xyzzaz"));
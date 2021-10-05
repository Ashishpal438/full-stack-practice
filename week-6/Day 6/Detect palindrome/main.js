function detectPalII(N, string){
    var mp = new Map()
    var count = 0;
  for(var i=0; i<string.length; i++){
    var key = string[i]
    
    if(mp.has(key) === false){
      mp.set(key,1);
    }else{
      mp.set(key, mp.get(key)+1)     
    }
   }   
  
  for(const value of mp.values() ){
      if(value % 2 === 1){
          count++;
      }
  }
  
   if(count <= 1){
       console.log("Possible!")
   }else{
       console.log("Not Possible!")
   }
  }
detectPalII(6,"aabbcc")  
function encryptionScheme(N,array){
    var sumIndex = 0;
     for(var i=0; i<N; i++){
      if(array[i] === 1){
       sumIndex = sumIndex + (i+1);
      }
    }
     console.log(sumIndex)
   }
encryptionScheme(5,[0,1,1,1,1])   
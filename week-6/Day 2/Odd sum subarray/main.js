function oddSumSubArr(N,arr){
    var count = 0;
     for(var i=0; i<N; i++){
      var sub = [];
       for(var j=i; j<N; j++){
         sub.push(arr[j])
           var sum = 0
           for(var k=0; k<sub.length; k++){
              sum = sum + sub[k]
           }
         if(sum % 2 === 1){
          count++
         }
          
       }
     }
      console.log(count)
  }
  oddSumSubArr(3,[1,2,3])
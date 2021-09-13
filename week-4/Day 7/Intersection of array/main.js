function intersectionOfArray(N, arr1, arr2){
    for(var i=0;i<arr1.length; i++){
     for(var j=0; j<arr2.length; j++){
       if(arr1[i] === arr2[j]){
         console.log(arr1[i])
           break;
         }
      }
    }  
}
intersectionOfArray(3,[4,5,7],[9,2,5])
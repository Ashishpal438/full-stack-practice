function solve(N,arr){
    for(var i=0; i<N-1; i++){
       //var min = arr[i]
        for(var j=i+1;j<N; j++){
            if(arr[j] < arr[i]){
               var temp = arr[i];
                 arr[i] = arr[j];
                  arr[j] = temp;
               }
        }
      
    }
    console.log(arr.join(" "))
}
solve(5,[3,5,0,9,0])
function swapOddEvenElements(N,arr){
    var newarr = "";
    for(var i=0; i<N; i++){
      
    if(i % 2 === 0 ){
    newarr = newarr + (arr[i+1]) + " ";
    } else{
    newarr = newarr + (arr[i-1] + " ")
    }
    }
    console.log(newarr)
  }
swapOddEvenElements(6,["A","B","C","D","E","F"])  
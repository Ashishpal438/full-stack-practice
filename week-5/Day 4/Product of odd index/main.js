function productOfOddIndexes(N, arr) {
    var pro = 1;
    for(var i=0; i<N; i++){
     if(i % 2 === 1){
      pro = pro * arr[i]
     }
    }
    console.log(pro)
  }
productOfOddIndexes(4,[1,2,3,4])  
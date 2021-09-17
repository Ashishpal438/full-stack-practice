function productOfEvenIndexes(N, arr) {
    var pro = 1;
    for(var i=0; i<N; i++){
     if(i % 2 === 0){
      pro = pro * arr[i]
     }
    }
    console.log(pro)
  }
productOfEvenIndexes(3,[1,2,3])  
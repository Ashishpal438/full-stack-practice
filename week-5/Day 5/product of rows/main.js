function productOfRows(N,M,arr){
    for(var i=0; i<N; i++){
      var pro = 1;
     for(var j=0; j<M; j++){
      pro = pro * arr[i][j]
     }
      console.log(pro)
    }
   
 }
productOfRows(3,2,[[1,2],[3,4],[5,6]])

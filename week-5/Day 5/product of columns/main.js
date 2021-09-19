function productOfColumns(N,M,arr){
    for(var i=0;i<M; i++){
      var pro = 1;
     for(var j=0; j<N; j++){
       pro = pro * arr[j][i]
     }
      console.log(pro)
    }
    
  }
productOfColumns(3,2,[[1,2],[3,4],[5,6]])  
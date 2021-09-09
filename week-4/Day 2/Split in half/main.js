function splitInHalf(A, B, K) {
    var canSplit = false;
    for(var i=1;i<=K;i++){
    if( (A+i) === (B + (K -i)) ){
     canSplit = true;
      break;
     }
    }
    
    //updated value comparison
    if(canSplit){
    console.log("YES");
    } else{
    console.log("NO");
    }
  }
  splitInHalf(5,10,15)
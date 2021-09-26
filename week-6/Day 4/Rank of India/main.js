function ACM_ICPC_India_Rank(N, countriesArr) {
    for(var i=0; i<N; i++){
        if(countriesArr[i] === "India"){
            console.log(i+1)
            break;
        }
    }
  }
ACM_ICPC_India_Rank(5,["Russia", "America", "Japan", "India", "Africa"])  
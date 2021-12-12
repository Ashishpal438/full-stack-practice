function maximumOccuringElement(A,N){
    var max = 0
    var ans = 0
    for(var i=0; i<N; i++){
        var count = 0
        for(var j=0; j<N; j++){
            if(A[j]==A[i]) count++
        }
     
        if(count > max){
            max = count
            ans = A[i]
            
        }
    }
    console.log(ans)
}

function maximumOccuringElement(A,N){
    var maxcount = 0;
    var ans;
    for(var i=0; i<N; i++){
       var count = 1; 
        for(var j=i+1; j<N; j++){
            if(A[i] === A[j]){
                count++;
            }
        }
        if(count > maxcount){
            maxcount = count;
            ans = A[i];
        }else if(count === maxcount){
            if(A.indexOf(ans) > i){
                ans = A[i]
            }
        }
    }
    console.log(ans)
}
maximumOccuringElement([0,2,0,6,9],5)
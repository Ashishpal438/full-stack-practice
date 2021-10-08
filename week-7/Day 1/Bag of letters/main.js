function check(N,s1,M,s2){
    for(var i=0; i<M; i++){
        var ispresent = false;
        for(var j=0; j<N; j++){
            if(s2[i] === s1[j]){
                ispresent = true;
            }
        }
        if(!ispresent){
            break;
        }
    }
    if(ispresent){
        console.log("Yes")
    }else{
        console.log("No")
    }

}
check(5,"aabbc",3,"abc")   
function motu(N){

    if(N>=5){
        if(N%5===0){
            var ans = N/5;
        }else{
        ans = Math.floor(N/5)+1;
        }
      
    }
    else{
        var ans = 1;
    }
    console.log(ans)
   // if(N>4)
}
motu(26)
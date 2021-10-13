function commonIndex(N,A,M,B) {
    ans = []
    var i = 0;
    var j = 0;
   
    while(i<N && j<M){
        if(A[i]<B[j]){
            i++;
        }else if(A[i]===B[j]){
            ans.push(A[i])
            i++;
            j++;
        } else if(A[i]>B[j]){
            j++;
        } 
      
    }
    if(ans.length === 0){
        console.log(-1);
    }else{
        console.log(ans.join(" "));
    }
    
    
    
}  
   

console.log(commonIndex(6,[1,2,3,4,5,6],3,[3,3,5]));
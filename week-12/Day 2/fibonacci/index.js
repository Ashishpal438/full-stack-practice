function fib(n,qb){
    if(n===0 || n==1) return n
    if(qb[n]){
        return qb[n]
    } 
    
    qb[n] =  fib(n-1,qb) + fib(n-2,qb)
    return qb[n]
}

console.log(fib(5,[]));
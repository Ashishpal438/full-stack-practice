function pdi(n){
    if(n==0) return
    console.log(n);
    pdi(n-1)
    console.log(n);
}

pdi(5)
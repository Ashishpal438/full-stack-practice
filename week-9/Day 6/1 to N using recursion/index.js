
function oneToN(n){
 if(n===0){
     return
 }
 oneToN(n-1)
 console.log(n);
}

oneToN(17)
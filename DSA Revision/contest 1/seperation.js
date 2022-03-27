function seperationOfOddEven(N, fieldSize,Q) {
    fieldSize = fieldSize.sort((a,b) => a-b)
    let even = []
    let odd = [];
    for(let i=0; i<N; i++){
        if(fieldSize[i] % 2 === 0){
            even.push(fieldSize[i])
        }
        else{
            odd.push(fieldSize[i])
        }
    }
    if(Q===1){
        console.log(even.concat(odd).join(" "))
    }else{
     console.log(odd.concat(even).join(" "))   
    }
}
  
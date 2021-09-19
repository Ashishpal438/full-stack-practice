function playOf4and6(N) {
    if(N % 4 === 0  &&  N % 6 === 0) {
     console.log("Awesome!")
    }else if( N % 4 === 0){
     console.log("Four!");
    } else if(N % 6 === 0){
     console.log("Six!")
    }else{
     console.log("Dark!")
    }
}
playOf4and6(4)
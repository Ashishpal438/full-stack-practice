function socialNetworking(N) {
    if(N<13){
    console.log("1 Kms");
    } else if(N>=13 && N<18){
     console.log("5 Kms");
    } else if(N>=18 && N<30){
    console.log("10 Kms");
    } else{
    console.log("You can have friends from anywhere");
    }
   }
   socialNetworking(21)
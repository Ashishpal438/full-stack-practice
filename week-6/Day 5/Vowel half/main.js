function vowelHalf(N, str) {
    vowel = 0;
    cons = 0;
    for(var i=0; i<N; i++){
        if(str[i]=='a' || str[i] =='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
            vowel++;
        }else{
            cons++;
        }
    }
    if(vowel > N/2){
        console.log("True")
    }else{
        console.log("False")
    }
   }
   vowelHalf(6,"aabefe")
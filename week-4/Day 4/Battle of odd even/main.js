function battleOfOddAndEven(n, arr){
    var oddSum = 0;
    var evenSum = 0;
    for(var i=0; i<arr.length; i++){
    if(arr[i] % 2 === 0){
       evenSum = evenSum + arr[i];
    } else{
    oddSum = oddSum + arr[i]
    }
    }
    if(oddSum > evenSum){
    console.log("Odd")
    } else{
    console.log("Even")
    }
  }
battleOfOddAndEven(4,[1,2,3,4])  
function mapSymbolsSum(N, str) {
    var sum = 0;
    var symbol = "!@#$%^&*";
   var num = [1,2,3,4,5,6,7,8];
    for(var i=0; i<N; i++){
     for(var j=0; j<symbol.length; j++){
      if(str[i] === symbol[j]){
       sum = sum + num[j]
      }
     }
    }
    console.log(sum)
  }
  mapSymbolsSum(4,"!@#$")
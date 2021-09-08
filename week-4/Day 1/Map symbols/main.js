function mapSymbols(N) {
    var symbol = ['!','@','#','$','%','^','&','*']
      var newObj = {};
    for(var i=0;i<symbol.length;i++){
    newObj[i] = symbol[i] + "-" + (N+i*2)
    }
    for(key in newObj){
    console.log(newObj[key])
    }
  }
mapSymbols(10)  
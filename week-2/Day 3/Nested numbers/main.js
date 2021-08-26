function anotherNested(num) {
    
  for(var i=1;i<=num;i++){
    for(var j=1;j<=i;j++){ 
      console.log(j)
    } 
  }
}

anotherNested(4)
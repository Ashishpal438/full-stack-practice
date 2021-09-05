function twoAndThree(num) {
  for(var i=1;i<=num;i++){
   if((i % 2 === 0) && (i % 3 === 0)){
      console.log("Both");
    } else if(i % 2 === 0){
    console.log("Two");
    }else if(i % 3 === 0){
    console.log("Three")
    } else{
    console.log("None")
    }
  } 
}
twoAndThree(18)
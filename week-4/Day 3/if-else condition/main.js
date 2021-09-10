function masaiSchoolHurray(N) {
 
    for(var i=1;i<=N;i++){
    if(i % 5 === 0 && i % 7===0 ){
    console.log("Ashish Pal");
    }
      else if(i%7===0){
      console.log("Ashish");
      }
      else if(i%5===0){
      console.log("Pal");
      }
      else{
      console.log("Hurray!")
      }
    }
  }
masaiSchoolHurray(8)  
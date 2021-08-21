function worldCupFinal(NzScore, NzSuperOver, NzFours, EngScore, EngSuperOver, EngFours) {
   
  if( NzScore > EngScore){
  return("New Zealand");
    }
  else if( NzScore < EngScore){
return("England");
  }
  else if( NzSuperOver > EngSuperOver ){
    return("New Zealand");
  }
  else if( NzSuperOver < EngSuperOver){
    return("England");
  }
  else if(NzFours > EngFours){
    return("New Zealand");
  }
  else if(NzFours < EngFours){
  return("England");
  }
}
console.log(worldCupFinal(45,65,92,43,87,93))

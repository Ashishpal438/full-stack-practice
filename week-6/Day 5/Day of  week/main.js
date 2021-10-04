function dayOfTheWeek(day, N) {
       var days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
     
  var map = new Map();
   for(var i=0; i<days.length;i++){
       var key = days[i];
      map.set(key,i)
   }
  //console.log(map)
   for(var [keys,values] of map){
      var d = keys 
      if(day === d){
        var z = ( map.get(d) + N) % 7;
        }
        
   }
   for(var [keys,values] of map){
    if(values === z){
        console.log(keys)
        break;
       }
   }
}
   dayOfTheWeek('Wednesday',8)
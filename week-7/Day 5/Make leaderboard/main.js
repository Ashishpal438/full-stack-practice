function leaderboard(N,Names,Marks) {
    for(var i=0; i<N-1; i++){
       for(var j=0; j<N-1-i; j++){
         if(Marks[j] < Marks[j+1]){
           var temp =Marks[j];
           Marks[j] = Marks[j+1];
           Marks[j+1] = temp;
  
          var x = Names[j];
          Names[j] = Names[j+1];
          Names[j+1] = x ;
  
        } else if(Marks[j] === Marks[j+1]){
                 if(Names[j] > Names[j+1]){
                  var y = Names[j];
                  Names[j] = Names[j+1];
                  Names[j+1] = y;
                }  
          }
       }
    }
  //   console.log(Names);
  //   console.log(Marks);
    var count = 0
     var rank = 1
      var previous = -1
      
      for (var k= 0;k<N;k++){
              if (Marks[k] == previous){
                          console.log(rank,Names[k])
              }else{
                      rank += count
                      count = 0
                      console.log(rank,Names[k])
              }
              count++
              previous = Marks[k]
      }
  }
leaderboard(6,[['rancho', 'chatur','raju', 'farhan', 'virus' ,'joy'],[45,32,30,28,32.45] ])  
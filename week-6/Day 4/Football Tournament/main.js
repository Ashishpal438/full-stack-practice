function footBallTournament(n, teamNamesArr) {
    var total = 0;
   
    for(var i=0; i<n; i++){
        var count = 1;
        for(var j=i+1; j<n; j++){
            if(i === j){
                count++;
            }
        }
        if(total < count){
            total = count;
            var ans = teamNamesArr[i];
        }
    }
    console.log(ans);
  }
footBallTournament(5,["A","ABA","ABA","A","A"])  
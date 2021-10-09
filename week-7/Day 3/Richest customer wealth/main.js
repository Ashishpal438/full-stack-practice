var maximumWealth = function(accounts) {
    var ans = 0;
      for(var i=0; i<accounts.length; i++){
          var sum = 0;
          for(var j=0; j<accounts[i].length; j++){
               sum = sum + accounts[i][j];
              //console.log(sum)
          }
            
          if(sum >= ans){
           ans = sum;
          }
         // console.log(ans)
      }
      
      return ans;
  };
  console.log(maximumWealth( [[1,2,3],[3,2,1]]));
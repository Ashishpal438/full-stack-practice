function unitsConsumed(n) {
    var fixedCharge = 80;
    var totalUnits = 0;
    
    var r = n - fixedCharge;
    
    if(r <= 150){
      var unit1 = r/3;
    totalUnits = totalUnits + unit1;
      console.log(totalUnits)
      }
       if(r > 150 && r <= 650){
          var unit1 = 50;
        var unit2 = (r - 150) / 5;
      totalUnits = totalUnits + unit1 + unit2;
          console.log(totalUnits)
      }
    
      if(r > 650){
        var unit1 = 50;
        var unit2 = 100;
        var unit3 = (r - 650) / 10 ;
        totalUnits = unit1 + unit2 + unit3;
         console.log(totalUnits)
    }
  
  }
unitsConsumed(420)  
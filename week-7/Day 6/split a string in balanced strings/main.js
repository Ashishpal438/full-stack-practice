var balancedStringSplit = function(s) {
    var total = 0;
    for(var i=0; i<s.length; i++){
        var countl=0;
        var countr=0;
        for(var j=0; j<=i; j++){
            if(s[j]==="R")countr++;
            if(s[j]==="L")countl++;
        }
        if(countl===countr)total++;
    }
    
    return total;
};
console.log(balancedStringSplit( "RLRRLLRLRL"));
var countMatches = function(items, ruleKey, ruleValue) {
    var count =0;
    for(var i=0; i<items.length; i++){
        for(var j=0; j<items[i].length; j++){
            if(ruleKey==="type" && j===0 || ruleKey==="color" && j==1 || ruleKey=="name" && j==2) 
                if(ruleValue === items[i][j]){
                    count++;
                }
        }
    }
    return count;
};
console.log(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]],"color","silver"));
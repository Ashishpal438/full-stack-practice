var restoreString = function(s, indices) {
    var ans = "";
    for(var i=0; i<s.length; i++){
        for(var j=0; j<indices.length; j++){
            if(i===indices[j]){
                 ans = ans + s[j]
            }
        }
       
    }
    return ans;
};
console.log(restoreString( "codeleet",[4,5,6,7,0,2,1,3]));
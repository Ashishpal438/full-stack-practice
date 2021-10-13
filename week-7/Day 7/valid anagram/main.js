var isAnagram = function(s, t) {
    var x = s.split("").sort().join("");
    var y = t.split("").sort().join("");
        if(x===y){
             return true;
            }else{
                return false;
            }
        }      

console.log(isAnagram("anagram","nagaram"))
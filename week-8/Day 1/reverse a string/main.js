function revStr(s){
    var rev = "";
    for(var i = s.length-1; i>=0; i--){
        rev = rev + s[i];
    }
    return rev;
 }

 console.log(revStr("GeeksforGeeks"));
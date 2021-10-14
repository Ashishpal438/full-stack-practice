function  modify(s){
    //code here
    var str = "";
    for(var i=0; i<s.length; i++){
        if(s[i] === " "){
            str = str + '';
        }else{
            str = str + s[i];
        }
    }
    return str;
}
console.log(modify("geeks  for geeks"));
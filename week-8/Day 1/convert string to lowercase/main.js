function toLower(arr,n){
    //code here
    var lowerCase = "abcdefghijklmnopqrstuvwxyz"
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var str = "";
    for(var i=0; i<arr.length; i++){
        var isUpper = false;
        for(var j=0; j<lowerCase.length; j++){
            if(arr[i] === upperCase[j]){
                 str = str + lowerCase[j];
                break;
            }else if(arr[i] === lowerCase[j]){
                str = str + lowerCase[j];
            }
        }
    }
   return str;
}
console.log(toLower("ABCddE"));
var defangIPaddr = function(address) {
    var ans = "";
    for(var i=0; i<address.length; i++){
        if(address[i] === "."){
            ans = ans + "[.]"
        }else{
            ans = ans + address[i];
        }
    }
    return ans;
};
console.log(defangIPaddr("1.1.1.1"));
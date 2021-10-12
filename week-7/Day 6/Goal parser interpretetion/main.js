var interpret = function(command) {
    var str = "";
    for(var i=0; i<command.length; i++){
        if(command[i]==="G")str = str + "G";
        else if(command[i]+command[i+1]==="()")str = str + "o";
        else if(command[i]+command[i+1]+command[i+2]+command[i+3]==="(al)")str = str + "al";
    }
    return str;
};
console.log(interpret("G()(al)"));
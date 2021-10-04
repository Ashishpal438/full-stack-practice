function detectPalII(N, string){
    var map = new Map();
    for(var i=0; i<N; i++){
        var key = string[i];
        if(map.has(key)){
            map.set(key, map.get(key)+1);
        }else{
            map.set(key,1);
        }
    }
    //console.log(map)
    var count = 0;
    for(var value of map.values()){
        if(value %2 == 1){
            count++;
        }
    }
    if(count>1){
        console.log("Not Possible!");
    }else{
        console.log("Possible!");
    }
}
detectPalII(6,"aabbcc")
function alanFrequency(N, string) {
    var str = string.split("");
    
    var string1 = str.sort()
    var mp = new Map()
  for(var i=0; i<N; i++){
     if(mp.has(string1[i])){
        mp.set(string1[i],mp.get(string1[i])+1) 
     }else{
      mp.set(string1[i],1)
     }
  }

 for(var [keys,values] of mp){
     console.log(keys+"-"+values)
 }
}
alanFrequency(4,"aman")
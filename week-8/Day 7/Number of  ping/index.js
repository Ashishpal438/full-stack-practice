function runProgram(input) {
    var input = input.trim().split("\n");
    var t = +input[0]
    var line = 1
    for(var  i=0; i<t; i++){
        var n = +input[line];
        line++;
        var s = input[line];
        line++
       // console.log(n,s)
        ping(n,s)
    }
      
  }
  function ping(n,s){
      var count =0;
      var mp = new Map();
      for(var i=0; i<s.length; i++){
        if(s[i]=='p' || s[i]=='i' || s[i] =='n' || s[i]==='g'){
              if(mp.has(s[i])){
              mp.set(s[i], mp.get(s[i]) + 1 );
          }else{
              mp.set(s[i],1)
          }
        }
      }
   //  console.log(mp)
     if(mp.has('p') && mp.has('i') && mp.has('n') && mp.has('g')){
          var min = Infinity
    for(const [key,value] of mp){
        if(value < min ){
            min = value
        }
    }
     console.log(min)
     }else{
         console.log(0)
     }
   
   
    
  }
  
  
  
  
  
  if (process.env.USER === "Ashish Pal") {
    runProgram(`2
    7
    pingpin
    8
    pingping`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
function runProgram(input) {
    input = input.trim().split("\n")
    var t = +input[0]
    var line = 1
    for(var i=0; i<t; i++){
     var n = +input[line]
     line++
     console.log(santosh(n))
    }
    }
    function santosh(n){
       if(n==0){
           return 1
       } 
       if(n<0){
         return 0   
       }
       return santosh(n-4) + santosh(n-8)
    }
    
    if (process.env.USERNAME === "Ashish Pal") {
      runProgram(``);
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
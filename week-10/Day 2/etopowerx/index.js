function runProgram(input) {
    var [x,n] = input.trim().split(" ").map(Number)
    console.log(etopowerx(x,n).toFixed(4))
    }
    
    
     function factorial(n){
        if(n<=1){
            return 1
        }
        return n * factorial(n-1)
    }
    
    
    
    function etopowerx(x,n){
        if(n===0){
            return 1
        }
        else{
            var sum = (x**n)*(1/factorial(n))
        }
        return sum + etopowerx(x,n-1)
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
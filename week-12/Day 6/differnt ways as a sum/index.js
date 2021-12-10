function runProgram(input) {
    var n = +input
    
    console.log(sum(n))
   }
   var dp = []
    dp[0] = 0
    dp[1] = 1
    dp[2] = 1
    dp[3] = 2
    dp[4] = 4
    
   function sum(n){
   
            if(dp[n] !== undefined) return dp[n]
            dp[n] = sum(n-1) + sum(n-3) + sum(n-4)
         
         return dp[n]
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
   
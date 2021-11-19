function runProgram(input) {
    input = input.trim().split("\n")
    var n = +input[0]
    var arr = input[1].trim().split(" ").map(Number)
    var dp = new Array(n).fill(Infinity)
    dp[0] = 0
    btm(n,arr,dp)
   
   }
   
   function btm(n,arr,dp){
   for(var i=1; i<n; i++){
        for(var j=0; j<i; j++){
          if((arr[j]+j) >= i){
              dp[i] = Math.min(dp[j]+1,dp[i])
          }
       }
    }
    //console.log(dp);
    console.log(dp[n-1]);
   }
   
   if (process.env.USERNAME === "Ashish Pal") {
     runProgram(`11
     1 3 5 8 9 2 6 7 6 8 9`);
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
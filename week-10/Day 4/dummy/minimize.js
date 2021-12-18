function runProgram(input) {
    input = input.trim().split("\n")
    var t = +input[0]
    var line = 1
    for(var i=0; i<t; i++){
        var n = +input[line++]
        let dp = new Array(n+1).fill(+Infinity)
        var res = minimumPages(n,dp)
        if(res === +Infinity) console.log(-1);
        else console.log(res);
    }
  }
  
  function minimumPages(n,dp){
    if(n === 0) return 0
    if(n < 0) return +Infinity
    if(dp[n] !== +Infinity) return dp[n]
    dp[n] = 1 + Math.min(minimumPages(n-12,dp), minimumPages(n-10,dp))
    return dp[n]
  }
  
  if (process.env.USERNAME === "Ashish Pal") {
    runProgram(`2
    23
    32`);
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
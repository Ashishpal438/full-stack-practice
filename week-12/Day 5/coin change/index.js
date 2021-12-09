function runProgram(input) {
  input = input.trim().split("\n")
  var [total,n] = input[0].trim().split(" ").map(Number)
  var arr =  input[1].trim().split(" ").map(Number)
  var dp = []
  for(var i=0; i<n; i++){
      dp[i] = []
      for(var j=0; j<=total; j++){
          dp[i][j] = -1
      }
  }
  console.log(coinChange(arr,n,total,0,dp))
}

function coinChange(arr,n,total,i,dp){
 if(total==0) return 1
 if(total < 0 || i == n) return 0

 if(dp[i][total] !== -1) return dp[i][total]

 dp[i][total] = coinChange(arr,n,total-arr[i],i,dp) +
                 coinChange(arr,n,   total, i+1, dp)
 
 return dp[i][total]
}

if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`4 3
  1 2 3`);
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
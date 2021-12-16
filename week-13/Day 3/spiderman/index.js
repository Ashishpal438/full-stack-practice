function runProgram(input) {
 input = input.trim().split("\n")
 var [n,k] = input[0].trim().split(" ").map(Number)
 var arr = input[1].trim().split(" ").map(Number)
 var dp = []
 for(var i=0; i<n; i++){
     dp.push(0)
 }
 spiderman(n,k,arr,dp)
}

function spiderman(n,k,arr,dp){
  for(var i=n-1; i>=0; i--){
     let minimum = 100000
     var jump = 1
     while(jump <= k && jump+i < n){
        var j = i+jump
        var val = Math.abs(arr[i]-arr[j]) + dp[j]
        minimum = Math.min(minimum,val)
        dp[i] = minimum
        jump++
     }
  }
    console.log(dp[0]);
 }
 

if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`5 3
  10 30 40 50 20`);
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
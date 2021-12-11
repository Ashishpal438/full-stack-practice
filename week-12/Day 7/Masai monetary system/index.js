function runProgram(input) {
 input = input.trim().split("\n")
 for(var i=0; i<input.length; i++){
   var n = +input[i]
   var res = monetrySystem(n)
   console.log(res);
 }
}
var dp = []
dp[0] = 0
dp[1] = 1
dp[2] = 2
dp[3] = 3
dp[4] = 4

function monetrySystem(n){
 if(dp[n]!==undefined) return dp[n]
 var cont_1 = monetrySystem(Math.floor(n/2)) + monetrySystem(Math.floor(n/3)) + monetrySystem(Math.floor(n/4))
 dp[n] = Math.max(cont_1,n)
 return dp[n]
}

if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`12
  2`);
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
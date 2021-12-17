function runProgram(input) {
 input = input.trim().split("\n")
 var t = +input[0]
 var line = 1
 for(var i=0; i<t; i++){
     var n = +input[line++]
     var points = input[line++].trim().split(" ").map(Number)
     var drinks = input[line++].trim().split(" ").map(Number)
     nways(points,drinks,n)
 }
}

function nways(points,drinks,n){
  var dp = new Array(n).fill(1e9)
  dp.push(0)
 points.push(1e5)
 
 var ans = 0
 for(var j=n-1; j>=0; j--){
  var diff = points[j+1] - points[j]
  var extra = drinks[j] - diff
  if(extra < dp[j+1]){
      dp[j] =  dp[j+1] - extra
  }else{
      dp[j] = 0, ans++
  }
 }
 console.log(ans)
}

if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`2
  3
  99991 99994 99997
  3 3 3
  4
  99988 99991 99994 99997 
  6 3 2 3`);
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
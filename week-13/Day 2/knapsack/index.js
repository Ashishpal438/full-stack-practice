function runProgram(input) {
  input = input.trim().split("\n")
  var t = +input[0]
  var line = 1
  var [w,n] = input[line++].trim().split(" ").map(Number)
  var weight = []
  var value = []
  for(var i=0; i<n; i++){
   var [x,y] = input[line++].trim().split(" ").map(Number)
   weight.push(x)
   value.push(y) 
  }
  var dp = []
  for(var j=0; j<n; j++){
      dp[j] = []
      for(var k=0; k<=w; k++){
          dp[j][k] = -1
      }
  }
  var res = knapsack(weight,value,n,w,0,dp)
  console.log(res);
}

function knapsack(weight,value,n,w,curr,dp){
  if(curr == n || w <= 0 ) return 0
   
  if(dp[curr][w] !== -1) return dp[curr][w]

  if(w < weight[curr]){
    return  knapsack(weight,value,n,w,curr+1,dp)
  }
  else{
      dp[curr][w] = Math.max(knapsack(weight,value,n,w,curr+1,dp), value[curr] + knapsack(weight,value,n,w-weight[curr],curr+1,dp))
  }
  return dp[curr][w]
}

if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`1
  4 5
  1 8
  2 4
  3 0
  2 5
  2 3`);
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
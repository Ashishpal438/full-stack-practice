function runProgram(input) {
  input = input.trim().split("\n")
  var t = +input[0]
  var line = 1
  for(var i=0; i<t; i++){
    var [r,c] = input[line++].trim().split(" ").map(Number)
    var grid = []
    var dp = []
    for(var j=0; j<r; j++){
      grid[j] = input[line++].trim().split(" ").map(Number)
      dp[j] = []
    }
     springRoad(grid,r,c,dp);
  }

}

function springRoad(grid,r,c,dp){
 for(var i=r-1; i>=0; i--){
     for(var j=c-1; j>=0; j--){
      if(i==r-1 && j==c-1){
        dp[i][j] = grid[i][j]
      }
      else if(i==r-1){
        dp[i][j] =  grid[i][j] 
      }
      else if(j==c-1){
       dp[i][j] =  grid[i][j] + Math.max(dp[i+1][j],dp[i+1][j-1])
      }
      else if(j==0){
        dp[i][j] = grid[i][j] + Math.max(dp[i+1][j],dp[i+1][j+1])
      }
      else{
       dp[i][j] = Math.max(dp[i+1][j] , Math.max(dp[i+1][j+1],dp[i+1][j-1])) + grid[i][j]
      }
     }
 }
  var max = dp[0][0]
  for(var j=0; j<c; j++){
    if(dp[0][j] > max){
      max = dp[0][j]
    }
  }
  console.log(max);
}

if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`1
  6 5
  3 1 7 4 2
  2 1 3 1 1
  1 2 2 1 8
  2 2 1 5 3
  2 1 4 4 4
  5 2 7 5 1`);
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
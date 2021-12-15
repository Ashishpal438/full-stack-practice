function runProgram(input) {
    input = input.trim().split("\n")
    var t = +input[0]
    var line = 1
    for(var i=0; i<t; i++){
      var n = +input[line++]
      var grid = []
      var dp = []
      for(var j=0; j<n; j++){
        grid[j] = input[line++].trim().split(" ").map(Number)
        dp[j] = []
      }
      var r = n
      var c = 3 
       alice(grid,r,c,dp);
    }
  
  }
  
  function alice(grid,r,c,dp){
    for(var i=r-1; i>=0; i--){
       for(var j=c-1; j>=0; j--){
        if(i==r-1 && j==c-1){
          dp[i][j] = grid[i][j]
        }
        else if(i==r-1){
          dp[i][j] =  grid[i][j] 
        }
        else if(j==0){
        dp[i][j] =  grid[i][j] + Math.min(dp[i+1][j+1],dp[i+1][j+2])
        }
        else if(j==c-1){
          dp[i][j] = grid[i][j] + Math.min(dp[i+1][j-1],dp[i+1][j-2])
        }
        else{
        dp[i][j] =  Math.min(dp[i+1][j+1],dp[i+1][j-1]) + grid[i][j]
        }
       }
   }
   // console.log(dp)
    var min = dp[0][0]
    for(var j=0; j<c; j++){
      if(dp[0][j] < min){
        min = dp[0][j]
      }
    }
    console.log(min);
  }
  
  if (process.env.USERNAME === "Ashish Pal") {
    runProgram(`1
    3
    1 50 50
    50 50 50
    1 50 50`);
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
function runProgram(input) {
    var input = input.trim().split("\n");
    var N = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    //console.log(N,arr)
    weightChecker(N,arr);
  }
  
  function weightChecker(N,arr){
      for(var i=0; i<N; i++){
          if(arr[i]< 85){
              console.log("Enter");
          }else{
              console.log("Beep")
          }
      } 
  }
  
  
  
  if (process.env.USERNAME === "Ashish Pal") {
    runProgram(`5
  24 83 89 43 91`);
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
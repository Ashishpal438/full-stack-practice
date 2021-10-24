function runProgram(input) {
    var input = input.trim().split("\n")
    var [N,X] = input[0].trim().split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    noddy(N,X,arr)
  }
  function noddy(N,X,arr){
      var skip = 0;
      var solved =0
      for(var i=0; i<N; i++){
          if(arr[i] > X){
              if(skip < 1){
                 skip++  
              }else{
                  break
              }
          }else if(arr[i] <= X){
              solved++;
            
          }
      }
      console.log(solved)
  
  }
  
  
  if (process.env.USERNAME === "Ashish Pal") {
    runProgram(`7 6
    4 3 7 6 7 2 2`);
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
  
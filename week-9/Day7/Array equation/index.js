function runProgram(input) {
    input = input.trim().split("\n")
    var n = +input[0]
    var arr = input[1].trim().split(" ").map(Number)
    equation(n,arr)
    }
    
    function equation(n,arr){
        var evensum = 0
        var oddsum = 0
        for(var i=0; i<n; i++){
            if(arr[i]%2===0){
                evensum += arr[i]
            }else{
                oddsum += arr[i]
            }
        }
        var ans = 2*evensum + 3*oddsum
       console.log(ans)
    }
    
    if (process.env.USERNAME === "Ashish Pal") {
      runProgram(``);
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
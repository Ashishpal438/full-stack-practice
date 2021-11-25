function runProgram(input) {
    input = input.trim().split("\n")
    var t = +input[0]
    var line = 1
    for(var i=0; i<t; i++){
        var n = +input[line++]
        var arr = input[line++].trim().split(" ").map(Number)
        runningSum(arr,n)
    }
   }
   
   function runningSum(arr,n){
       var ans = []
       var sum = 0
       for(var i=0; i<n; i++){
           sum += arr[i]
           ans.push(sum)
       }
       console.log(ans.join(" "))
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
function runProgram(input) {
    var n = +input
    console.log( nWays(n));
   
   }
   function nWays(n){
    if(n===0){
        return 1
    }
    if(n < 0){
        return 0
    }
   
    return nWays(n-1)+ nWays(n-2) + nWays(n-3)
   
   }
   
   if (process.env.USERNAME === "Ashish Pal") {
     runProgram(`4`);
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
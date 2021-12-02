function runProgram(input) {
    triangle(input)
   }
   
   function triangle(n){
   
      for(var i=1; i<=n; i++){
          var out = ''
          for(var j=1; j<=i; j++){
              out = out + j + " "
          }
          console.log(out)
      }
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
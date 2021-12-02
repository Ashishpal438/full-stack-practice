function runProgram(input) {
    input = input.trim().split("\n")
    var n = +input[0]
    var s = input[1].trim().split(" ").map(Number)
    var c = input[2].trim().split(" ").map(Number)
    dogLover(s,c,n)
   }
   
   function dogLover(s,c,n){
       s = s.sort((a,b)=>b-a)
       c = c.sort((a,b)=>b-a)
      var total = 0
      for(var i=0; i<n; i++){
          total += s[i]*c[i]
      }
      console.log(total)
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
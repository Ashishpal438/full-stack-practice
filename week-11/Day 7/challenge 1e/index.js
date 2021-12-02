function runProgram(input) {
    input = input.trim().split("\n")
    var n = +input[0]
    var first = input[1].trim().split(" ").map(Number)
    var m = +input[2]
    var second = input[3].trim().split(" ").map(Number)
    friends(n,first,m,second)
   }
   
   function friends(n,first,m,second){
       second = second.sort((a,b)=>b-a)
       var total = 0
       for(var i=0; i<n; i++){
           if(first[i] <= second[0]){
               total += (second[0]-first[i] + 1)
           }
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
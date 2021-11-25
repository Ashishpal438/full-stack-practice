function runProgram(input) {
    input = input.trim().split("\n")
    var n = +input[0]
    var sol = []
    var next = 1
    for(var i=0; i<n; i++){
        sol.push(+input[next++])
    }
    var q = +input[n+1]
    var line = n+2
    for(var j=0; j<q; j++){
       var power = +input[line++] 
       codingFight(power,sol)
    }
   }
   
   function codingFight(power,sol){
    var count = 0
    var sum = 0
    for(var i=0; i<sol.length; i++){
        if(sol[i] <= power){
            count++
            sum += sol[i]
        }
    }
    console.log(count,sum)
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
function runProgram(input) {
    var input = input.trim().split("\n");
    var t = +input[0]
    var line = 1
    for(var i=0; i<t; i++){
        var[N,K] = input[line].trim().split(" ").map(Number);
        line++
        var arr = input[line].trim().split(" ").map(Number);
        line++;
       console.log(suchPairs(N,K,arr)) 
    }
   }
   
   
   function suchPairs(N,K,arr){
   arr.sort(function(a,b) {return a-b}) 
   
   var count = 0;
    var i=0;
    var j=N-1;
    while(i<j){
        if(arr[i]+arr[j] > K){
            j--
        }
        else if(arr[i] + arr[j] < K){
            i++
        }else{
            count++
            return 1
        }
    }
     return -1
   
   }
   
   
   
   
   if (process.env.USERNAME === "Ashish Pal") {
     runProgram(`1
     5 2
     3 4 0 2 7`);
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
   
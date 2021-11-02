function runProgram(input) {
    input = input.trim().split("\n")
    var t = +input[0]
    var line = 1
    for(var i=0; i<t; i++){
        var n = +input[line++]
        var arr = input[line++].trim().split(" ").map(Number)
        //var dp = new Array(n).fill(0)
        stockBroker(n,arr)
    }
  }
  
  function stockBroker(n,arr){
   var min = +Infinity, max = -Infinity 
   for(var i=0; i<n; i++){
     if(arr[i] < min){
         min = arr[i]
         temp = min - arr[i]
         if(temp > max ) max = temp
     }else{
         temp = arr[i] - min
         if(temp > max ) max = temp
     }
     
   }
   console.log(max)
  }
  
  if (process.env.USERNAME === "Ashish Pal") {
    runProgram(`2
    6
    7 1 5 3 6 4
    4
    4 3 2 1`);
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
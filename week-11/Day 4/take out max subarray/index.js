function runProgram(input) {
    input = input.trim().split("\n")
    var [n,k] = input[0].trim().split(" ").map(Number)
    var arr = input[1].trim().split(" ").map(Number)
    takeOutMax(arr,n,k)
  }
  
  function takeOutMax(arr,n,k){
   var win = 0
   for(var i=0; i<k; i++){
       win += arr[i]
   }
   var max = win
   var start = 0
   var end = k
   while(end < n){
       win = win + arr[end] - arr[start]
       if(win > max){
           max = win
       }
       start++
       end++
   }
   console.log(max);
  }
  
  
  if (process.env.USERNAME === "Ashish Pal") {
    runProgram(`10 3
    -1 -1 -2 1 -2 4 1 9 3 9`);
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
function runProgram(input) {
    input = input.trim().split("\n")
    var n = +input[0]
    var arr = input[1].trim().split(" ").map(Number)
    check(arr,n)
  }
  
  function check(arr,n){
   var low = 0
   var high = n-1
  
   while(low < high ){
       var mid = low + Math.floor((high-low)/2)
  
       if(arr[mid] < arr[high]){
           high = mid
       }
       else{
           low = mid + 1
       }
       
   }
   if(low === 0){
       console.log("NO")
   }else{
       console.log("YES")
   }
  }
  
  if (process.env.USERNAME === "Ashish Pal") {
    runProgram(`10
    4 6 7 9 10 -1 0 1 2 3`);
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
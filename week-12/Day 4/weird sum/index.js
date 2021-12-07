function runProgram(input) {
 input = input.trim().split("\n")
 var t = +input[0]
 var line = 1
 for(var i=0; i<t; i++){
     var n = +input[line++]
     var arr =  input[line++].trim().split(" ").map(Number)
     sum(arr,n)
 }
}

function sum(arr,n){
  arr = arr.sort((a,b)=>a-b)
  var low = 0
  var high = n-2
  var target = arr[n-1]
  while(low <= high){
      var mid = low + Math.floor((high-low)/2)
      if(arr[mid]==target){
          console.log('Yes');
          return
      }
      else if(arr[mid] > target){
          high = mid-1 
      }
      else{
          low = mid+1
      }
  }
  console.log("No");
}

if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`3
  3
  1 2 3
  4
  0 1 2 3
  4
  2 3 6 10`);
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
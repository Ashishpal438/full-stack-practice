function runProgram(input) {
  var n = +input
  console.log(factorial(n));
  
}
function factorial(n){
  if(n===1 || n===0){
   return 1
  }
  else{
      return n * factorial(n-1)
  }
}

if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`6`);
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
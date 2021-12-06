function runProgram(input) {
  var n = +input
  var res = sandhya(n)
  console.log(res);
}

function sandhya(n){
    if(n==0){
        return 1
    }
    if(n<0){
        return 0
    }

    return sandhya(n-1) + sandhya(n-2) + sandhya(n-3)
}
if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`4`);
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
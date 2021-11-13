function runProgram(input) {
  [a,b] = input.trim().split(" ").map(Number)
 console.log(atob(a,b))
}

function atob(a,b){
 if(b === 0){
     return 1
 }
 return a*atob(a,b-1)
}
if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`2 4`);
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
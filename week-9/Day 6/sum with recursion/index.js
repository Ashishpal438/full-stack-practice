function runProgram(input) {
input = input.trim().split("\n")
var t = +input[0]
var line  = 1
for(var i=0; i<t; i++){
    var n = +input[line]
    line++
    var arr = input[line].trim().split(" ").map(Number)
    line++
   console.log(sum(n,arr,0)) 
}

function sum(n,arr,i){
    
    if(i==n-1){
        return 0
    }
    var x = Math.abs(arr[i]-arr[i+1])
    var s = x + sum(n,arr,i+1)
    return s
    
}


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
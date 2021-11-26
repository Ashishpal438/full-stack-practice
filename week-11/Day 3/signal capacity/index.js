function runProgram(input) {
    input = input.trim().split("\n")
    var t = +input[0]
    var line = 1
    for(var i=0; i< t; i++){
        var n = +input[line++]
        var arr = input[line++].trim().split(" ").map(Number)
        towerPower(arr,n)
    }
}

function towerPower(arr,n){
var st = []
var index = []
for(var i=0; i<n; i++){
 while(st.length !== 0 && st[st.length-1] <=  arr[i]){
     st.pop()
     index.pop()
 }
 if(st.length  === 0){
     console.log(i+1);
     st.push(arr[i])
     index.push(i)
 }
 else{
     st.push(arr[i])
     index.push(i)
     console.log(index[index.length-1] -  index[index.length-2]);
 }
}
}
if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`2
  7
  100 80 60 70 60 75 85
  5
  3 5 0 9 8`);
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
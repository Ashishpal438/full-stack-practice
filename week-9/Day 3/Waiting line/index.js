function runProgram(input) {
  input = input.trim().split("\n")
  var t = +input[0]
  var line = 1
  for(var i=0; i<t; i++){
      var arr = input[line].trim().split(" ")
      line++
       queue(arr)
  }
}
var Q=[];
function queue(arr){
   if(arr[0]==="E"){
    Q.push(arr[1])
    console.log(Q.length);
   }
   else if(arr[0]==="D"){
     if(Q.length === 0){
         console.log(-1,Q.length);
     }else{
         console.log(Q.shift(),Q.length);
     }
   }
}

if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`5
  E 2
  D
  D
  E 3
  D`);
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
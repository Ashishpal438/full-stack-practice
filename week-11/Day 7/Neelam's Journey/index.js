function runProgram(input) {
  input = input.trim().split("\n")
  var n = +input[0]
  var arr = input[1].trim().split(" ").map(Number)
 neelam(arr,n)
}

function neelam(arr,n){
 var total = 0
 fair = arr[0]
 for(var i=0; i<n ; i++){
     if(arr[i] < fair){
       fair = arr[i]
       total += fair
   }else{
       total += fair 
   }
 }
 console.log(total);
}
if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`5
  4 7 8 3 4`);
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
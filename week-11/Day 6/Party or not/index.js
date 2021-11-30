function runProgram(input) {
  input = input.trim().split("\n")
  var [n,c,r] = input[0].trim().split(" ").map(Number)
  var arr = input[1].trim().split(" ").map(Number)
  arr = arr.sort(function(a,b){return a-b})
  partyOrNot(arr,n,c,r)
}

function partyOrNot(arr,n,c,r){
 var sum = 0
 for(var i=0; i<c; i++){
   sum += arr[i]  
 }
 if(sum <= r){
     console.log("Party");
 }else{
     console.log("Sad");
 }
}

if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`5 3 24
  6 4 21 20 13`);
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
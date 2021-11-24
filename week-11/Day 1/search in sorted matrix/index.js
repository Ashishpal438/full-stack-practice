function runProgram(input) {
 input = input.trim().split("\n")
 var t = +input[0]
 var line = 1
 var k = 0
 while(k<t){
 var [n,m] = input[line++].trim().split(" ").map(Number)
 var mat = []
 for(var i=0; i<n; i++){
     mat[i] = input[line++].trim().split(" ").map(Number)
 }
 var target = +input[line++]
 console.log(matrixSearch(mat,n,m,target))
 k++
 }
} 

function matrixSearch(mat,n,m,target){
let i = 0
let j = m-1
 while(i<n && j>=0){
     if(mat[i][j] == target){
         return true
     }
     else if(mat[i][j] > target){
         j--
     }
     else{
         i++
     }
 }
 return false
}


if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`2
  4 4
  1 2 3 4
  5 6 7 8
  9 10 11 12
  13 14 15 16 
  13
  4 4
  1 2 3 4
  5 6 7 8
  9 10 11 12
  13 14 15 16 
  17`);
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
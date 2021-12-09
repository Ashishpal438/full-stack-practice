function runProgram(input) {
input = input.trim().split("\n")
var s1 = input[0]
var s2 = input[1]
var n1 = s1.length
var n2 = s2.length
var i = 0, j=0
var res = similarText(s1,s2,i,j,n1,n2)
console.log(res);
}
function similarText(s1,s2,i,j,n1,n2){
 if(i == n1 || j == n2) return 0
 if(s1[i] === s2[j]) {
   return 1 + similarText(s1,s2,i+1,j+1,n1,n2)
}
 else{
     return Math.max(similarText(s1,s2,i+1,j,n1,n2) , similarText(s1,s2,i,j+1,n1,n2))
 }
}

if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`AEDFHR
  ABCDGH`);
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
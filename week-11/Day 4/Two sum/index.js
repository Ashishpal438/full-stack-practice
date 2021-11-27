function runProgram(input) {
 input = input.trim().split("\n")
 var t = +input[0]
 var line = 1
 for(var i=0; i<t; i++){
    var [n,k] = input[line++].trim().split(" ").map(Number)
    var arr = input[line++].trim().split(" ").map(Number)
    twoSum(arr,n,k)
 }
}
function twoSum(arr,n,k){
 var i=0
 var j=n-1
 while(i<j){
   if(arr[i]+arr[j] === k){
       console.log(i,j)
       return
   }
   else if(arr[i] + arr[j] > k){
       j--
   }else{
       i++
   }
 }
 console.log(-1,-1);
}

if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`3
  4 9
  2 7 11 15
  5 10
  1 2 3 5 5
  2 100
  48 49`);
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
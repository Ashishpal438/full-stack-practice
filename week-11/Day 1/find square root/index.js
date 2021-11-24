function runProgram(input) {
 input = input.trim().split("\n")
 let t = +input[0]
 let line = 1
 for(let i=0; i<t; i++){
     let n = +input[line++]
     console.log(squareRoot(n))
 }
}

function squareRoot(n){
 let low = 0
 let high = n-1
 let ans = 0
 while(low<=high){
     let mid = low + Math.floor((high-low)/2)
     if(mid*mid === n){
         return mid
     }
     else if(mid*mid > n){
         high = mid -1
     }else{
         ans = mid
         low = mid + 1
     }
 }
 return ans
}

if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`2
  4
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
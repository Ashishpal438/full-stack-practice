function runProgram(input) {
 input = input.trim().split("\n")
 var [n,k] = input[0].trim().split(" ").map(Number)
 var arr = input[1].trim().split(" ").map(Number) 
 arr = arr.sort(function(a,b){return a-b})
 console.log(binary(n,k,arr))
}

function binary(n,k,arr){
 let low = 0
 let high = n-1
 while(low<high){
     let mid = low + Math.floor((high-low)/2)
     if(arr[mid] == k){
         return 1
     }
     else if(arr[mid] < k){
         low = mid+1
     }
     else{
         high = mid-1
     }
 }
 return -1
}

if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`5 0
  2 -2 0 3 4`);
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
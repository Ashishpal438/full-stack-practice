function runProgram(input) {
  input = input.trim().split("\n")
  var [n,k] = input[0].trim().split(" ").map(Number)
  var arr = input[1].trim().split(" ").map(Number)
  samosaLove(arr,n,k)
}

function samosaLove(arr,n,k){
 arr = arr.sort((a,b)=>a-b)
 var count = 0
 for(var i=0; i<n; i++){
     if(arr[i] <= k){
         count++
         k = k - arr[i]
     }
 }
 console.log(count);
}

if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`4 10
  5 4 2 4`);
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
function runProgram(input) {
  var input = input.trim().split("\n");
  var t = +input[0];
  var line = 1;
  for(var i=0; i<t; i++){
      var [N,K,X] = input[line].trim().split(" ").map(Number);
      line++;
      var A = input[line].trim().split(" ").map(Number);
      line++;
      
      //console.log("K",K,"X",X);
      subarrays(N,K,X,A);
  }
}
function subarrays(N,K,X,A){
 var arr = [];
 for(var i=0; i<N; i++){
     if(A[i] <= K){
         arr[i] = 0
     }else{
         arr[i] = 1
     }
 }
// console.log(arr)
 var sum =0
 for(var j=0; j<X; j++){
     sum = sum + arr[j]
 }
// console.log(sum)
 var count = 0
 if(sum ===0){
     count++
 }
 
 var l=0
 var r=X
 while(l<N){
     sum = sum - arr[l] + arr[r]
     if(sum === 0){
         count++;
         l++;
         r++;
     }else{
         l++;
         r++;
     }
 }
 console.log(count)
}


if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`1
5 3 2
1 3 2 5 1`);
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
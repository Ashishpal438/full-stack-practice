function runProgram(input) {
  input = input.trim().split("\n")
  var n = +input[0]
  var arr = input[1].trim().split(" ").map(Number)
  angry(n,arr)
}

function angry(n,arr){
 arr.sort((a,b)=>a-b)
 var even = []
 var odd = []
 for(var i=0; i<n; i++){
     if(i%2 === 0){
       even.push(arr[i])
     }
     else{
         odd.push(arr[i])
     }
 }
 for(var j=odd.length-1; j>=0; j--){
     even.push(odd[j])
 }
 var max = 0
 for(var k=0; k<even.length-1; k++){
     var diff = Math.abs(even[k]-even[k+1])
     if(diff > max){
        max = diff
     }
 }
  console.log(max);
}

if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`4
  5 10 6 8`);
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
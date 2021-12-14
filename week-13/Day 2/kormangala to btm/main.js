function runProgram(input) {
 input = input.trim().split("\n")
 var n = + input[0]
 var arr = input[1].trim().split(" ").map(Number)
 kormangalaToBtm(n,arr)
}

function kormangalaToBtm(n,arr){
var count = 1
var i=0
while(i<n){
    if(arr[i] >= n-1-i){
      break;        
    }
    else{
        let maxIndex = -1
        let max = -Infinity
       for(var j=1; j<=arr[i]; j++){
          if(arr[i+j] >= max){
              max = arr[i+j]
              maxIndex = i+j
          }
       }
       count++
        i = maxIndex
    }
}
 console.log(count)
}

if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`11
  1 3 5 8 9 2 6 7 6 8 9`);
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
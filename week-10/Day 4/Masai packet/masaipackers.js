function runProgram(input) {
  input = input.trim().split("\n")
  var [k,n] = input[0].trim().split(" ").map(Number)
  var arr = input[1].trim().split(" ").map(Number)
  console.log(masaiPackers(k,n,arr));
}
function masaiPackers(k,n,arr){
    if(k==0){
        return 1
    }
    if(k<0){
        return 0
    }
    var sum = 0
    for(var i=0; i<n; i++){
         sum += masaiPackers(k-arr[i],n,arr)
    }
    return sum


}

if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`3 3
  1 2 3`);
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
function runProgram(input) {
  input = input.trim().split("\n")
  var t = +input[0]
  var line = 1
  for(var i=0; i<t; i++){
      var n = +input[line++]
      var arr = input[line++].trim().split(" ").map(Number)
      var k = +input[line++]
      arr = arr.sort(function(a,b){return a-b})
      pairlessThanK(arr,n,k)
  }
}

function pairlessThanK(arr,n,k){
 var low = 0
 var high = n-1
 while(low < high){
    var max = -1
    var low = 0
    var high = n-1
    while(low < high){
        var sum = arr[low] + arr[high]
        if(sum < k){
            if(sum > max){
                max = sum
            }
            low++
        }
        else{
            high--
        }
    }
    console.log(max);
 }
}  


if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`2
  5
  1 2 3 4 5
  7
  3
  30 10 20
  15`);
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
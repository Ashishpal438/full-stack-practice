function runProgram(input) {
  input = input.trim().split("\n")
  var [n,q] = input[0].trim().split(" ").map(Number)
  var arr = input[1].trim().split(" ").map(Number)
  arr = arr.sort(function(a,b){return a-b})
  var line = 2
  for(var i=0; i<q; i++){
      var k = +input[line]
      discover(n,arr,k)
      line++
}
}
function discover(n,arr,k){
  let low = 0
  let high = n-1
  while(low<=high){
      let mid = low + Math.floor((high-low)/2)
      if(arr[mid] == k){
        console.log("YES");
        return
      }
      else if(arr[mid] > k){
          high = mid-1
      }
      else{
          low = mid + 1
      }
  }
  console.log('NO');
  return
}

if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`5 10
  50 40 30 20 10
  10
  20
  30
  40
  50
  60
  70
  80
  90
  100`);
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

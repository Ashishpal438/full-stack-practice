function runProgram(input) {
  input = input.trim().split("\n")
  var [n,k] = input[0].trim().split(" ").map(Number)
  var arr = input[1].trim().split(" ").map(Number)
  arr = arr.sort(function(a,b){return a-b})

  console.log(upperBound(n,arr,k));
}

function upperBound(n,arr,k){
  let low = 0
  let high = n-1

  while(low<high){
    let mid = low + Math.floor((high-low)/2)
      if(arr[mid]<=k){
          low = mid + 1
      }
      else{
        high = mid
    }
  }
  if(arr[low] > k){
      return low
  }
  return -1
  
}

if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`10 3
  0 2 4 4 5 5 7 7 9 10`);
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
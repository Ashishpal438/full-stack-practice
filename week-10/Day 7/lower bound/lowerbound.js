function runProgram(input) {
  input = input.trim().split("\n")
  var [n,k] = input[0].trim().split(" ").map(Number)
  var arr = input[1].trim().split(" ").map(Number)
  arr = arr.sort(function(a,b){return a-b})

  console.log(lowerBound(n,arr,k));
}

function lowerBound(n,arr,k){
  let low = 0
  let high = n-1
  let ans = -1
  while(low<=high){
    let mid = low + Math.floor((high-low)/2)
    if(arr[mid] === k) {
      ans = mid
      high = mid-1
    }
    else if(arr[mid] > k ){
     high = mid-1
    }
    else{
      low = mid +1
    }
    return ans
}
}

if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`5 1
  1 1 2 2 5`);
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
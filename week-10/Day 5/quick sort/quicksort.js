function runProgram(input) {
  input = input.trim().split("\n")
  var n = +input[0]
  var arr = input[1].trim().split(" ").map(Number)
  quickSort(arr,0,n-1)
  console.log(arr.join(" "));
}

function quickSort(arr,low,high){
    if(low<high){
        var index = partition(arr,low,high)
        quickSort(arr,low,index-1)
        quickSort(arr,index+1,high)
    }
}

function partition(arr,low,high){
  var i = low
  var j = high
  var pivot  = arr[low]
  while(i<j){
      while(arr[i]<=pivot && i<high){
          i++
      }
      while(arr[j]>pivot && j>low){
          j--
      }
      if(i<j){
          var temp = arr[i]
          arr[i] = arr[j]
          arr[j] = temp
      }
  }
  var t = arr[low]
  arr[low] = arr[j]
  arr[j] = t
  return j
}

if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`5
  3 5 0 9 8`);
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
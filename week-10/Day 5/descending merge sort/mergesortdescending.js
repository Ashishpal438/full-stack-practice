function runProgram(input) {
  input = input.trim().split("\n")
  var n = +input[0]
  var arr = input[1].trim().split(" ").map(Number)
  mergeSort(arr,0,n-1)
  console.log(arr);
}
function mergeSort(arr,low,high){
  if(low<high){
     var mid = Math.floor((low+high)/2)
      mergeSort(arr,low,mid)
      mergeSort(arr,mid+1,high)
      merge(arr,low,high,mid)
  }
}

function merge(arr,low,high,mid){
    var left = []
    for(var i=low; i<=mid; i++){
        left.push(arr[i])
    }
    var right = []
    for(var j=mid+1; j<=high; j++){
        right.push(arr[j])
    }

    var l = 0
    var r = 0
    var k = low
    while( l < left.length && r < right.length){
         if(left[l] <= right[r]){
             arr[k] = right[r]
             r++
             k++
         }
         else{
             arr[k] = left[l]
             l++
             k++
         }
    }
    while(l<left.length){
        arr[k] = left[l]
        l++
        k++
    }
    while(r<right.length){
        arr[k] = right[r]
         r++
         k++
    }
}

if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`5
  2 3 1 4 5`);
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
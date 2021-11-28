function runProgram(input) {
  input = input.trim().split("\n")
  var n = +input[0]
  var arr = input[1].trim().split(" ").map(Number)
  var k =  +input[2]
  binarySearch(arr,n,k)
}

function binarySearch(arr,n,k){
 var out = ''
 //----> finding first occurence --->
 var low = 0
 var high = n-1
 var fistOccur = -1
 while(low <= high){
     var mid = low + Math.floor((high-low)/2)
     if(arr[mid] == k){
         fistOccur = mid
         high = mid-1
     }
     else if(arr[mid] > k){
         high = mid-1
     }
     else{
         low = mid + 1 
     }
 }
 out += fistOccur + ' '

 //-----> finding last occurence ----->
 var lo = 0
 var hi = n-1
 var lastOccur = -1
 while(lo <= hi){
    var middle = lo + Math.floor((hi-lo)/2)
    if(arr[middle] === k){
        lastOccur = middle
        lo = middle + 1
    }
    else if(arr[middle] > k){
        hi = middle -1
    }
    else{
        lo = middle + 1
    }
 }
 out += lastOccur + ' '

 var total = lastOccur - fistOccur + 1
 out += total

 console.log(out);

}

if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`6
  1 1 1 2 2 2	
  1`);
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
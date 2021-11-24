function runProgram(input) {
 input = input.trim().split("\n")
 var t = +input[0]
 var line = 1
 for(var i=0; i<t; i++){
     var k = +input[line++]
     var arr = input[line++].trim().split(" ").map(Number)
     findPosition(k,arr)
 }
}

function findPosition(k,arr){
 var low = 0
 var high = k-1
 var previous = -1
 while(low<=high){
     var mid = low + Math.floor((high-low)/2)
     if(arr[mid] < k){
       previous = mid
        low = mid + 1
     }else{
         high = mid -1
     }
 }
 if(previous == -1){
    var ans1 = "Front";
 }else{
   var ans1 = arr[previous];
 }
 
 var lo = 0
 var hi  = k-1
 var final = -1
 while(lo<=hi){
     var m = lo + Math.floor((hi-lo)/2)
     if(arr[m] > k){
         final = m
         hi = m -1
     }
     else{
         lo = m +1
     }
 }
 if(final == -1){
    var ans2 = "Last";
 }else{
    var ans2 = arr[final];
 }

 console.log(ans1 +" " + ans2);
}


if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`3
  3
  1 4 5 6 8 9
  5 
  1 2 6 7 8
  1
  2 3 4 5 6`);
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
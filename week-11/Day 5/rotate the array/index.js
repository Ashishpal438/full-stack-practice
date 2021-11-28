function runProgram(input) {
 var input = input.trim().split("\n")
 var t = +input[0]
 var line = 1
 for(var i=0; i<t; i++){
     var [n,k] = input[line++].trim().split(" ").map(Number)
     var arr = input[line++].trim().split(" ").map(Number)
     rotate(arr,n,k)
 }
}

function rotate(arr,n,k){
 k = k % n
 var low = 0
 var high = n-1
 while(low < high){
     var temp = arr[low]
     arr[low] = arr[high]
     arr[high] = temp
     low++
     high--
 }
 
 var i = 0
 var j = k-1
 while(i < j){
     var t = arr[i]
     arr[i] = arr[j]
     arr[j] = t
     i++
     j--
 }

 var a = k
 var b = n-1
 while(a < b){
     var x = arr[a]
     arr[a] = arr[b]
     arr[b] = x
     a++
     b--
 }


 console.log(arr);

}

if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`1
  5 3
  1 2 3 4 5`);
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
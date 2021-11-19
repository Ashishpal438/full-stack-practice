function runProgram(input) {
 input = input.trim().split("\n")
 var[k,n] = input[0].trim().split(" ").map(Number)
 var arr = input[1].trim().split(" ").map(Number)
 //console.log(k,n,arr)
 masaiPackers(k,n,arr,0)
 if(min == +Infinity){
     console.log(-1)
 }else{
     console.log(min,max)
 }

}
var min = +Infinity
var max = 0
var count = 0
function masaiPackers(k,n,arr,i){
    if(k===0){
       min = Math.min(count,min)
       max = Math.max(count,max)
     return true
    }
    if(k<0){
        return false
    }

    for(var i=0; i<n; i++){
        count++
       masaiPackers(k-arr[i],n,arr,i)
       count--
    }
 
}

if (process.env.USERNAME === "Ashish Pal") {
  runProgram(``);
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
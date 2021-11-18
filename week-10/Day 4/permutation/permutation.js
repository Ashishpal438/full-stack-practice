function runProgram(input) {
 input = input.trim().split("\n")
 var n = +input[0]
 var arr = input[1].trim().split(" ").map(Number);
 gp(arr,0)
 out.sort(function(a,b){return a[0]-b[0]})
 console.log(out);
}
 var out = []
function gp(arr,curr){
 if(curr ===  arr.length){
    out.push([...arr])
     return
 }

 for(var i=curr; i<arr.length; i++){
    arr = swap(arr,i,curr)
     gp(arr,curr+1)
     arr = swap(arr,i,curr)
 }
 return
}

function swap(arr,left,right){
    var temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
    return arr
}





if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`3
  1 2 3`);
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
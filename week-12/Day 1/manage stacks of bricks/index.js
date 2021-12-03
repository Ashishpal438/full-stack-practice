function runProgram(input) {
  input = input.trim().split("\n")
  var t = +input[0]
  var line = 1
  for(var i=0; i<t; i++){
    var n = +input[line++]
    var x = +input[line++]
    var y = +input[line++]
    var initial = []
    var final = []
    for(var j=0; j<n; j++){
        var a = input[line++].trim().split(" ").map(Number)
        initial.push(a[0])
        final.push(a[1])
    }
    initial.sort((a,b)=>a-b)
    final.sort((a,b)=>a-b)
    manageBricks(n,x,y,initial,final);
  }
}

function manageBricks(n,x,y,initial,final){
 var cost = 0
 for(var i=0; i<n; i++){
   if(initial[i] > final[i]){
       cost += y*(initial[i]-final[i])
   }
   else{
       cost += x*(final[i]-initial[i])
   }
 }
 console.log(cost);
}

if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`1
  3
  6
  4
  3 1
  1 2
  1 2`);
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
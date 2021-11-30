function runProgram(input) {
  input = input.trim().split("\n")
  var t = +input[0]
  var line = 1
  for(var  i=0; i<t; i++){
    var [b,g] = input[line++].trim().split(" ").map(Number)
    var boys =  input[line++].trim().split(" ").map(Number)
    var girls = input[line++].trim().split(" ").map(Number)
    danceNight(boys,girls,b,g)
  }
  
}

function danceNight(boys,girls,b,g){
 boys.sort((a,b)=>a-b)
 girls.sort((a,b)=>a-b)
 var flag = true
 for(var i=0; i<b; i++){
     if(boys[i] <= girls[i]){
        flag = false
     }
 }
 if(flag){
     console.log("YES");
 }else{
     console.log("NO");
 }
}

if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`1
  4 5
  2 5 6 8
  3 8 5 1 7`);
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
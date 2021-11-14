function runProgram(input) {
  input = input.trim().split("\n")
  var t = +input[0]
  var line = 1
  for(var i=0; i<t; i++){
      var n = +input[line++]
      var str = input[line++].trim()
      mrRobot(0,n-1,str)
      console.log(ans)
      ans = ''
  }
 }
 
 var ans  = ''
 function mrRobot(low,high,str){
    
  if(low>high){
      return ans
  }
  
  var mid = Math.floor((low+high)/2)
  ans += str[mid]
  
  return mrRobot(low,mid-1,str) + mrRobot(mid+1,high,str)
 }
 
 
 
 if (process.env.USERNAME === "Ashish Pal") {
   runProgram(`1
   4
   abcd`);
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
function runProgram(input) {
  input = input.trim().split(" ")
  var n = input[0]
  var k = input[1]
  let sum = 0
   for(var i=0; i<n.length; i++){
       sum += +n[i] 
   }
   sum = sum * (+k)
   var s = String(sum)
  console.log(famousSum(s))
 }
 
 //-----> Main function starts here ------>
 
 function famousSum(s){
   if(s.length ===1){
       return s
   }
   var total = 0
   for(var i=0; i<s.length; i++){
       total += +s[i]
   }
   
   return famousSum(String(total))
 }
 
 if (process.env.USERNAME === "Ashish Pal") {
   runProgram(`123 3`);
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
function runProgram(input) {
    input = input.trim().split("\n")
    var s1 = input[0].trim()
    var s2 = input[1].trim()
    var res = permutation(s1,s2)
    if(res) console.log("Yes")
    else console.log("No")
   }
   
   function permutation(s1,s2){
       for(var i=0; i<s1.length; i++){
           var flag =  false
           for(var j=0; j<s2.length; j++){
               if(s1[i] == s2[j]){
                   flag = true
                   break
               }
           }
           if(!flag) return false
       }
       return true
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
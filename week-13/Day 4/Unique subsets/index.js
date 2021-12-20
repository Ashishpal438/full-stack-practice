function runProgram(input) {
    input = input.trim().split("\n")
    var n = +input[0]
    var arr = input[1].trim().split(" ").map(Number)
    var k = +input[2]
    var sub = []
    var res = unique(arr,n,k,0,sub)
    if(res) console.log("True")
    else console.log("False")
   }
   
   function unique(arr,n,k,curr,sub){
       if(sub.length !== 0){
           if(sub.length >= k){
               var val  = sub[0]
               for(var i=0; i<sub.length; i++){
                   if(sub[i] !== val){
                       return false
                   }
               }
               return true
           }
       }
       if(curr===n) return false
       
       for(var i=curr; i<n; i++){
           sub.push(arr[i])
           if(unique(arr,n,k,i+1,sub)){
               return true
           }
           sub.pop()
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
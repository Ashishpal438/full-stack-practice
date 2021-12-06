function runProgram(input) {
    input = input.trim().split("\n")
    var n  = +input[0]
    var arr = input[1].trim().split(" ").map(Number)
    arr =  arr.sort((a,b)=>a-b)
    strong(arr,n)
   }
   
   function strong(arr,n){
    var start = []
    var end = []
   
    for(var i=0; i<n/2; i++){
        start.push(arr[i])
    }
    for(var j=n-1; j>=n/2; j--){
        end.push(arr[j])
    }
   
   
   var final = []
    
    for(var k=0; k<n/2; k++){
       final.push(start[k])
       final.push(end[k])
    }
   
   var sum = 0
   for(var l=0; l<final.length-1; l++){
       sum += Math.abs(final[l]-final[l+1])
   }
   sum+= Math.abs(final[n-1]-final[0])
    console.log(sum);
   }
   
   if (process.env.USERNAME === "Ashish Pal") {
     runProgram(`4
     1 2 4 8`);
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
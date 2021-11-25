function runProgram(input) {
    input = input.trim().split("\n")
    var n = +input[0]
    var arr = input[1].trim().split(" ").map(Number)
    var k = +input[2]
    sinchan(arr,n,k)
   }
   
   function sinchan(arr,n,k){
       var low = 0
       var high = n-1
       var ans = -1
       while(low <= high){
           var mid = low + Math.floor((high-low)/2)
           if(arr[mid] === k){
               console.log(mid)
               return
           }
           else if(arr[mid] > k){
               ans = mid
               high = mid-1   
           }else{
               low = mid + 1
           }
       }
       console.log(ans)
       return
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
function runProgram(input) {
    input = input.trim().split("\n")
    var n = +input[0]
    var arr = input[1].trim().split(" ").map(Number)
    arr = arr.sort((a,b)=>a-b)
    var totalquery = +input[2]
    var line = 3
    for(var i=0; i<totalquery; i++){
        var q = +input[line++]
       // console.log(q)
        soap(arr,n,q)
    }
   }
   
   function soap(arr,n,q){
       var low = 0
       var high = n-1
       var ans = -1
       while(low <= high){
           var mid = low + Math.floor((high-low)/2)
           if(arr[mid] >= q){
               high = mid-1
           }
           else if(arr[mid] < q){
               ans = mid
               low = mid+1
           }
       }
       console.log(low)
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
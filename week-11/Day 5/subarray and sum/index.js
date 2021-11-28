function runProgram(input) {
    input = input.trim().split("\n")
    var [n,k] = input[0].trim().split(" ").map(Number)
    var arr = input[1].trim().split(" ").map(Number)
    subarray(arr,n,k)
   }
   
   function subarray(arr,n,k){
    var count = 0
    var sum = 0
    for(var i=0; i<n; i++){
      sum += arr[i]  
    }
    if(sum % k !== 0){
       count++
    }
    else{
        let lo = 0
        let hi = n-1
        while(arr[lo] % k === 0){
              lo++
           }
        while(arr[hi] % k === 0){
              hi--
          }
        var left = n-lo - 1
        var right = n-hi - 1
        var window = Math.max(left,right)
        var winsum = 0
        for(var i=0; i<window; i++){
          winsum += arr[i]
        }
        if(winsum % k !== 0){
            count++
        }
        var start = 0
        var end = window
        while(end !== n){
            winsum = winsum + arr[end] - arr[start]
            if(winsum % k !== 0){
                count++
            }
            start++
            end++
        }
    }
    console.log(count);
   
   }
   
   if (process.env.USERNAME === "Ashish Pal") {
     runProgram(`4 3
     1 3 7 6`);
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
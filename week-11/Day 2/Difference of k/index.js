function runProgram(input) {
    input = input.trim().split("\n")
    var t = +input[0]
    var line = 1
    for(var i=0; i< t; i++){
        var [n,k] = input[line++].trim().split(" ").map(Number)
        var arr = input[line++].trim().split(" ").map(Number)
        dofk(arr,n,k)
    }
  }
  
  function dofk(arr,n,k){
   var i=0
   var j=0
   while(i<=n-1){
   var diff = arr[i]-arr[j]
   if( diff == k){
       console.log("Yes");
       return
   }
   else if(diff < k ){
       i++
   }else{
       j++
   }
   }
   console.log("No");
  }
  if (process.env.USERNAME === "Ashish Pal") {
    runProgram(`2
    5 3
    1 2 3 4 5
    5 8
    1 2 3 4 5 `);
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
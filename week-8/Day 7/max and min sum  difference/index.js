function runProgram(input) {
    var input = input.trim().split("\n");
    var t = +input[0]
    var line = 1
    for(var  i=0; i<t; i++){
        var [n,m] = input[line].trim().split(" ").map(Number);
        line++;
        var arr = input[line].trim().split(" ").map(Number);
        line++
       //console.log(n,m,arr)
       minandmax(n,m,arr)
    }
      
  }
  function minandmax(n,m,arr){
   for(var i=0; i<n-1; i++){
       var minIndex =i;
       for(var j=i+1; j<n; j++){
           if(arr[j]< arr[minIndex]){
               minIndex = j
           }
       }
       var temp = arr[i]
       arr[i] = arr[minIndex]
       arr[minIndex] = temp;
   }
   //console.log(arr)
  
  var k = n-m
  var min = 0
  for(var i=0; i<k; i++){
      min+= arr[i]
  }
  var max = 0
  for(var j=n-1; j>=n-k; j--){
      max += arr[j]
  }
  console.log(max-min)
  
  
  }
  
  
  
  
  
  if (process.env.USER === "Ashish Pal") {
    runProgram(`1
    5 1
    1 2 3 4 5`);
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
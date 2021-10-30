function runProgram(input) {
    input = input.trim().split("\n")
        var n = +input[0]
        var arr = input[1].trim().split(" ").map(Number);
        nextGreater(n,arr)
  }
  
  function nextGreater(n,arr){
      var st = []
      var ans = []
     for(var i=n-1; i>=0; i--){
         if(st.length === 0){
           ans.push(arr[i])
           st.push(arr[i])
         }else{
             if(st[st.length-1] <= arr[i]){
              ans.push(arr[i])
              st.push(arr[i])
         }
        // console.log(st)
     }
   }
   var out = ans.reverse().join(" ")
     console.log(out)
  }
  
  if (process.env.USERNAME === "Ashish Pal") {
    runProgram(`1
    4
    1 3 2 4`);
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
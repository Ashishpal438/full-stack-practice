function runProgram(input) {
    input = input.trim().split("\n")
    var t = +input[0]
    var line = 1
    for(var i=0; i<t; i++){
        var n = +input[line]
        line++
        var arr = input[line].trim().split(" ").map(Number);
        line++
        nextGreater(n,arr)
    }
  }
  
  function nextGreater(n,arr){
      var st = []
      var ans = []
     for(var i=n-1; i>=0; i--){
         while(st.length !== 0 && st[st.length-1] <= arr[i]){
             st.pop()
         }
         if(st.length === 0){
           ans.push(-1)
           st.push(arr[i])
         }else{
             ans.push(st[st.length-1])
             st.push(arr[i])
         }
        // console.log(st)
     }
     var out = ans.reverse().join(" ")
     console.log(out);
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
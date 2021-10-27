function runProgram(input) {
    input = input.trim().split("\n")
    var n = +input[0]
    var arr = input[1].trim().split(" ").map(Number);
   // console.log(n,arr);
    smallerNeighbour(n,arr)
  }
  let st = []
  function smallerNeighbour(n,arr){
      for(var i=0; i<n; i++){
          if(i===0){
             st.push(-1)
          }
          if(arr[i-1]>arr[i]){
              var ispresent = false
              for(var j=i-1; j>=0;j--){
                  if(arr[j] < arr[i]){
                      st.push(arr[j])
                      ispresent = true
                      break;
                  }
              }
              if(ispresent==false){
                  st.push(-1);
              }
            }
             else if(arr[i-1] < arr[i]){
                st.push(arr[i-1])
             }
             else if(arr[i-1]===arr[i]){
              st.push(st[st.length-1])
             }
     }
      console.log(st.join(" "));
  }
  
  
  if (process.env.USERNAME === "Ashish Pal") {
    runProgram(`8
    39 27 11 4 24 32 32 1`);
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
function runProgram(input) {
    input = input.trim().split("\n")
    var t = +input[0]
    var line = 1;
    for(var i=0; i<t; i++){
        var arr = input[line].trim().split(" ").map(Number);
        line++
       pushPopTop(arr)
    }
  }
   let st = [];
  function pushPopTop(arr){
    if(arr[0]===1){
        st.push(arr[1])
    }
    else if(arr[0]===2){
        st.pop()
        
    }
    else if(arr[0]===3){
        if(st.length === 0){
            console.log("Empty!")
        }else{
            console.log(st[st.length-1]) 
        }
        
    }
  }
  
  if (process.env.USERNAME === "Ashish Pal") {
    runProgram(`6
    1 15
    1 20
    2
    3
    2
    3`);
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
  
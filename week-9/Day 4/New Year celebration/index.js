function runProgram(input) {
    input = input.trim().split("\n")
    var t = +input[0]
    var line = 1
    for(var i=0; i<t; i++){
        var arr = input[line].trim().split(" ").map(Number)
        line++
       // console.log(arr);
         queue(arr)
    }
  }
  var Q=[];
  var st = [];
  function queue(arr){
    if(arr[0]===1){
        Q.push(arr[1])
    }
    else if(arr[0]===2){
        st.push(arr[1])
    }
    else if(arr[0]===3){
        if(Q.length === 0){
            console.log(-1);
        }else{
            console.log(Q[0]);
        }   
    }
    else if(arr[0]===4){
        if(st.length===0){
            console.log(-1);
        }else{
            console.log(st[st.length-1]);
        }  
    }
    else if(arr[0]===5){
            st.push(Q.shift())
    }
  }
  
  if (process.env.USERNAME === "Ashish Pal") {
    runProgram(`7
    1 4
    2 3
    1 2
    3
    4
    5
    4`);
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
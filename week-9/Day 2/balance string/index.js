function runProgram(input) {
    input = input.trim().split("\n")
    var t = +input[0]
    var line = 1
    for(var i=0; i<t; i++){
        var str = input[line].trim()
        line++
       // console.log(str)
       balanced(str)
    }
  }
  function balanced(str){
     let st = []
     for(var i=0; i<str.length; i++){
         if(str[i] === "(" || str[i]==="[" || str[i]==="{"){
             st.push(str[i])
         }
          else if(str[i] === ")" && st[st.length-1]==="(" || str[i]==="]" && st[st.length-1]=="[" || str[i]==="}" && st[st.length-1]==="{"){
                  st.pop()
          }else{
              st.push(str[i])
          }
     }
    // console.log(st);
     if(st.length ===  0){
         console.log("balanced");
     }else{
         console.log("not balanced");
     }
  }
  
  if (process.env.USERNAME === "Ashish Pal") {
    runProgram(`3
    {([])}
    ()
    ([]
    `);
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
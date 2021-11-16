function runProgram(input) {
    input = input.trim().split("\n")
    var n  = +input[0]
    var str = input[1].trim()
    subsequenc(str,"",0)
  }
  
  function subsequenc(str,out,curr){
    if(curr == str.length){
       return
    }
   
     for(var i=curr; i<str.length; i++){
        var newstr = out + str[i]
        console.log(newstr);
        subsequenc(str,newstr,i+1)
      }
  }
  
  if (process.env.USERNAME === "Ashish Pal") {
    runProgram(`2 4`);
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
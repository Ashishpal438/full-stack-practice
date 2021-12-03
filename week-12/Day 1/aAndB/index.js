function runProgram(input) {
  var str = input.trim().split("")
  aAndB(str)  
  
}

function aAndB(str){

  for(var i=0; i<str.length; i++){
    if(str[i]==="?"){
        if(str[i-1]==="a"){
         str[i] = "b"   
        }
        else if(str[i+1] === "a"){
            str[i] = "b"
        }
        else{
            str[i] = "a"
        }
    }
    
}
console.log(str.join(""))
}

if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`?ba??b`);
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
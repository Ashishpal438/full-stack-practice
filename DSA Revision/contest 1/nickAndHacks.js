function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let t = +input[0];
  for(let i=1; i<=t; i++){
      let n = +input[i]
      let res = nickAndHacks(n)
      if(res){
          console.log('Yes');
      }
      else{
          console.log('NO');
      }
  }
}

let nickAndHacks = (n) => {
    if(n === 1){
        return true
    }
    else if(n < 1 || n < 10){
        return false
    }

    return nickAndHacks(n/10) || nickAndHacks(n/20)
}

if (process.env.USERNAME === "dell") {
  runProgram(`5
  1
  2
  10
  25
  200`);
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
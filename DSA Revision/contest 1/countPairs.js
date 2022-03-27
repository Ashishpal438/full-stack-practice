function runProgram(input) {
    input = input.trim().split("\n");
    let [n,t] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    countPairs(n,t,arr)
  }
  
  let countPairs = (n,t,arr) => {
    let count = 0;
    for(let i=0; i<n-1; i++){
        for(let j=i+1; j<n; j++){
            if(arr[i] + arr[j] === t){
                count++;
            }
        }
    }
    console.log(count);
  }
  
  if (process.env.USERNAME === "dell") {
    runProgram(`5 9
    3 0 6 2 7`);
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
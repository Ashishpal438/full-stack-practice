function runProgram(input) {
  input = input.trim().split("\n");
  let t = +input[0];
  let line = 1;
  for (let i = 0; i < t; i++) {
    let n = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    majorityElement(n, arr);
  }
}

const majorityElement = (n, arr) => {
 let m = 0;
 let count = 1;
 for(let i=0; i<n; i++){
     if(arr[m] === arr[i]) count++;
     else count--;
     if(count === 0){
         m = i;
         count = 1;
     }
 }

 let max = 0
 for(let i=0; i<n; i++){
     if(arr[i] == arr[m]){
         max++
     }
 }

 if(max > n/2){
     console.log(arr[m]);
 }
 else{
     console.log(-1);
 }

};

if (process.env.USERNAME === "dell") {
  runProgram(`1
  4
  9 9 7 7`);
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

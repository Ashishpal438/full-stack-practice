function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let arrival = input[1].trim().split(" ").map(ele => ele.split(":").join("")).map(Number).sort((a,b) => a-b)
  let departure = input[2].trim().split(" ").map(ele => ele.split(":").join("")).map(Number).sort((a,b) => a-b)
  minimumPlatforms(arrival,departure,n)
}

const minimumPlatforms = (arrival,departure,n) => {
  let a = 1;
  let d = 0;
  let count = 1;
  while(a < n){
      if(arrival[a] <= departure[d]){
         count++;
         a++;
      }
      else {
        a++;
        d++;
      }
  }
  console.log(count);
}

if (process.env.USERNAME === "dell") {
  runProgram(`6
  9:00 9:40 9:50 11:00 15:00 18:00
  9:10 12:00 11:20 11:30 19:00 20:00`);
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
function runProgram(input) {
  input = input.trim().split("\n");
  let t = +input[0];
  let line = 1;
  for (let i = 0; i < t; i++) {
    let n = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    awardCeremony(n, arr);
  }
}

const awardCeremony = (n, arr) => {
  let gold = 0;
  let silver = 0;
  let bronze = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) {
      gold++;
    } else if (arr[i] === 1) {
      silver++;
    } else {
      bronze++;
    }
  }

  let ans = [];
  for (let i = 0; i < gold; i++) {
    ans.push(0);
  }
  for (let j = 0; j < silver; j++) {
    ans.push(1);
  }
  for (let k = 0; k < bronze; k++) {
    ans.push(2);
  }
  console.log(ans.join(" "));
};

if (process.env.USERNAME === "dell") {
  runProgram(`3
  1
  2
  3
  2 0 1
  4
  2 0 2 1`);
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

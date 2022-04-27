function runProgram(input) {
  input = input.trim().split("\n");
  let t = +input[0];
  let line = 1;
  for(let i=0; i<t; i++){
      let n = +input[line++];
      let arr = input[line++].trim().split(" ").map(Number);
      let res = majorityElement(n,arr)
      console.log(res);
  }
}

// METHOD 1 :  TC - O(N)  SC - O(N)
// const majorityElement = (n,arr) => {
//     let mp = new Map();
//     for(let i=0; i<n; i++){
//         if(mp.has(arr[i])){
//             mp.set(arr[i], mp.get(arr[i])+1)
//         }
//         else{
//             mp.set(arr[i], 1)
//         }
//     }
//     for(const [key, value] of mp){
//         if(value > n/2) {
//             return key
//         }
//     }
//     return -1;
// }


// METHOD 2 : MOORE VOTING ALGORITHM :  TC - O(N)  SC - O(1)

const majorityElement = (n,arr) => {
    let count = 1;
    let m = 0;
    for(let i = 1; i < n; i++){
        if(arr[i] === arr[m]) count++;
        else if(count === 0){
            m = i;
            count = 1;
        }
        else  count--;
    }
    //verifying-->
    let majCount  = 0;
    for(let i=0; i<n; i++){
        if(arr[i] === arr[m]) majCount++
    }

    if(majCount > n/2) return arr[m]
    else return -1
}

if (process.env.USERNAME === "dell") {
  runProgram(`2
  6
  2 3 1 1 1 1
  5
  1 1 2 2 3`);
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
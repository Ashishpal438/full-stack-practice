function runProgram(input) {
 input = input.trim().split("\n")
 var n = +input[0]
 var arrival = input[1].trim().split(" ")
 var depart = input[2].trim().split(" ")
 for(var i=0; i<n; i++){
     arrival[i] = Number(arrival[i].split(":").join(""))
     depart[i] = Number(depart[i].split(":").join(""))
 }
 arrival = arrival.sort((a,b)=>a-b)
 depart = depart.sort((a,b)=>a-b)
 console.log(arrival)
 console.log(depart);
 getMinPlatform(arrival,depart,n)
}

function getMinPlatform(arrival,depart,n){
    var count = 1
    var i = 1
    var j = 0
    while(i < n){
        if(arrival[i] <= depart[j]){
            count++
        }
        else{
            j++
        }
        
        i++
    }
   console.log(count);
}

if (process.env.USERNAME === "Ashish Pal") {
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
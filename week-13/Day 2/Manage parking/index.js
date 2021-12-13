function runProgram(input) {
    input = input.trim().split("\n")
    var total = +input[0]
    var arrival = input[1].trim().split(" ").map(Number)
    var departure = input[2].trim().split(" ").map(Number)
    arrival.sort((a,b)=>a-b)
    departure.sort((a,b)=>a-b)
    // console.log(arrival)
    // console.log(departure)
    parking(arrival,departure,total)
    
    }
    
    function parking(arrival,departure,total){
        let a = 1
        let d = 0
        var count = 1
        while(a < arrival.length){
            if(arrival[a] < departure[d]){
                count++
                a++
            }
            else{
                a++, d++
            }
        }
        //console.log(count)
        if(count <= total) console.log("Possible")
        else console.log("Not Possible")
    }
    if (process.env.USERNAME === "Ashish Pal") {
      runProgram(``);
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
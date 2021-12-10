function runProgram(input) {
    input = input.trim().split("\n")
    var n = +input[0]
    var vac = input[1].trim().split(" ").map(Number)
    var pat = input[2].trim().split(" ").map(Number)
     var res = doctor(n,vac,pat)
     if(res){
         console.log("Yes")
     }
     else{
         console.log("No")
     }
    }
    
    function doctor(n,vac,pat){
        vac = vac.sort((a,b)=> a-b)
        pat = pat.sort((a,b)=> a-b)
        var i = 0 
        while(i<n){
            if(vac[i] < pat[i]){
                return false
            }
            i++
        }
        return true
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
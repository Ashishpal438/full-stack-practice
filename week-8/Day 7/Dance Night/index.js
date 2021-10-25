function runProgram(input) {
    var input = input.trim().split("\n");
    var t = +input[0]
    var line = 1
    for(var  i=0; i<t; i++){
        var [m,n] = input[line].trim().split(" ").map(Number);
        line++;
        var boy = input[line].trim().split(" ").map(Number);
        line++
        var girl = input[line].trim().split(" ").map(Number);
        line++
      //  console.log(m,n,boy,girl)
     dance(m,n,boy,girl)
    }
      
  }
  function  dance(m,n,boy,girl){
    var b = boy.sort(function(a,b){return (a-b)})
    var g = girl.sort(function(a,b){return(a-b)})
   // console.log(b,g)
    var i = 0
    var j = 0 
    var count = 0
    while(i<m){
        if(b[i] > g[j]){
            count++;
           // console.log(count)
            i++
            j++
        }
        else if(b[i] < g[j]){
            i++;
        }else{
            i++
            j++
        }
    }
    if(count === m){
       console.log("YES")
    }else{
        console.log("NO")
    }
  }
  
  
  
  
  
  if (process.env.USER === "Ashish Pal") {
    runProgram(`1
    4 5
    2 5 6 8
    3 8 5 1 7`);
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
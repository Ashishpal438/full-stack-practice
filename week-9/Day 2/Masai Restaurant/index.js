function runProgram(input) {
    input = input.trim().split("\n")
    var t=+input[0]
    var line =1;
    
    for(var i=0; i<t; i++){
        var arr = input[line].trim().split(" ").map(Number);
        line++;
        //console.log(arr);
       masai(arr)
    }
   }
   let st = []
   function masai(arr){
      
      if(arr[0] === 1){
          if(st.length === 0){
              console.log("No Food");
          }
          else{
             console.log(st.pop());  
          }
      }
      else if(arr[0]===2){
          st.push(arr[1])
      }
   }
   
   if (process.env.USERNAME === "Ashish Pal") {
     runProgram(`6
     1
     2 5
     2 7
     2 9
     1
     1`);
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
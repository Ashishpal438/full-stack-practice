function runProgram(input) {
    input = input.trim().split("\n")
    var n = +input[0]
    var arr = input[1].trim().split(" ").map(Number)
    smallerNeighbour(n,arr)
   }
   
   function smallerNeighbour(n,arr){
       var st = []
       var ans = []
       var count = 0
    for(var i=n-1; i>=0; i--){
        
        while(st.length !== 0 && arr[i] <= st[st.length-1]){
            st.pop()
        }
        if(st.length===0){
            //count++
            ans.push(-1)
            st.push(arr[i])
        }
        else{
            ans.push(st[st.length-1])
            st.push(arr[i])
        }
    }
    for(var j=0; j<ans.length; j++){
        if(ans[j]== -1){
            count++
        }
    }
    console.log(count)
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
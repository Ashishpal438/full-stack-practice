function runProgram(input) {
  input = input.trim().split("\n")
  var n = +input[0]
  var arr = input[1].trim().split(" ").map(Number)
  findSum(n,arr)
 }
 
 function findSum(n,arr){
 var X = []
 var Y = []
 
 var st = []
 //----> finding x ---> (index of previous greater element)
 for(var i=0; i<n; i++){
  while(st.length !== 0 && st[st.length-1] <= arr[i]){
      st.pop()
  }  
  if(st.length === 0){
      X.push(-1)
      st.push(arr[i])
  }else{
      X.push(arr.indexOf(st[st.length-1])+1)
      st.push(arr[i])
  }
 }
 //------>finding y----->  (index of next greater element)
 var st2 = []
 for(var j=arr.length-1; j>=0; j--){
     while(st2.length !== 0 && st2[st2.length-1] <= arr[j]){
         st2.pop()
     }
     if(st2.length == 0){
         Y.push(-1)
         st2.push(arr[j])
     }
     else{
         Y.push(arr.indexOf(st2[st2.length-1])+1)
         st2.push(arr[j])
     }
 }
 Y = Y.reverse()
 var ans = []
 for(var l=0; l<n; l++){
   ans.push(X[l]+Y[l])
 }
 console.log(ans.join(" "));
 
 }
 
 
 
 
 
 if (process.env.USERNAME === "Ashish Pal") {
   runProgram(`5
   5 4 1 3 2`);
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
function runProgram(input) {
 var str = input.trim()
 reduce(str)
}
function reduce(str){
 var out = ""   
 var st = []
 for(var i=0; i<str.length; i++){
     if(st.length == 0){
         out += str[i]
         st.push(str[i])
     }
     else if(st[st.length-1] == str[i]){
        st.pop()
        out = out.slice(0,-1)
     }
     else{
        st.push(str[i])
         out += st[st.length-1]
     }

 }
 console.log(out);
}
if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`aaabccddd`);
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
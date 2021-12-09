function runProgram(input) {
 input = input.trim().split("\n")
 var t = +input[0]
 var line = 1
 for(var i=0; i<t; i++){
     var [cap,n] = input[line++].trim().split(" ").map(Number)
     var weight = []
     var value = []
     for(var j=0; j<n; j++){
        var x =  input[line].trim().split(" ").map(Number)
         weight.push(x[0]) 
         value.push(x[1])
         line++
     }
     //console.log(weight,value);
     greedy(weight,value,n,cap)
 }
}

function greedy(weight,value,n,cap){
    var ratio = []
    for(var i=0; i<n; i++ ){
        ratio.push([value[i]/weight[i],weight[i]])
    }
    ratio.sort((a,b)=>b[0]-a[0])
    //console.log(ratio);
  var total = 0
     for(var j=0; j<n; j++){
        if(ratio[j][1] <= cap){
          total += ratio[j][0]*ratio[j][1]
          cap = cap - ratio[j][1]
        }
        else{
            break
        }    
   }
  console.log(total);
}

if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`1
  4 5
  1 8
  2 4
  3 0
  2 5
  2 3`);
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
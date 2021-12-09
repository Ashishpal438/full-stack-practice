function runProgram(input) {
  input = input.trim().split("\n")
  var limit = +input[0]
  var n = +input[1]
  var price = input[2].trim().split(" ").map(Number)
  var weight = input[3].trim().split(" ").map(Number)
  steal(price,weight,n,limit)
}

function steal(price,weight,n,limit){
 var total = 0
 var pricePerUnit = []

 var  w = new Map()
 for(var i=0; i<n; i++){
     pricePerUnit[i] = price[i] / weight[i]
     w.set(pricePerUnit[i],weight[i])
 }

pricePerUnit.sort((a,b)=>b-a)

var weight = []

for(var m=0; m<n; m++){
  weight.push(w.get(pricePerUnit[m]))
}






 for(var j=0; j<n; j++){
    if(weight[j] <= limit){
        limit = limit - weight[j]
        total = total + weight[j]*pricePerUnit[j]
    }
    
    else if(weight[j] > limit && limit !== 0){
        total = total + limit*pricePerUnit[j]
        limit = 0
    }

 }
 console.log(Math.round(total));
}








if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`201
  8
  96 23 12 7 58 100 32 2
  90 51 20 23 4 100 21 58`);
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
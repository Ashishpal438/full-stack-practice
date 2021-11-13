function runProgram(input) {
  var arr = []
  for(var i=0; i<10; i++){
      arr[i] = []
      for(var j=0; j<10; j++){
          arr[i][j] = 0
      }
  }

  input = input.trim().split(" ").map(Number);
  var[x,y,z] = input
  x = x-1
  y = y-1
  followTheKnight(arr,x,y,z);
  var count = 0
  for (let i = 0; i < arr.length; i++) {
      for(let j=0; j<arr.length; j++){
          if(arr[i][j]==1){
              count++
          }
      } 
  }
  console.log(count);
}

function followTheKnight(arr,x,y,z){
  if(x<0 || x>9 || y<0 || y>9){
      return
  }
  if(z===0){
      arr[x][y] = 1
      return
  }

 followTheKnight(arr,x-2,y-1,z-1)
 followTheKnight(arr,x-2,y+1,z-1)
 followTheKnight(arr,x+2,y-1,z-1)
 followTheKnight(arr,x+2,y+1,z-1)
 followTheKnight(arr,x-1,y-2,z-1)
 followTheKnight(arr,x-1,y+2,z-1)
 followTheKnight(arr,x+1,y-2,z-1)
 followTheKnight(arr,x+1,y+2,z-1)
}

if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`3 3 1`);
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
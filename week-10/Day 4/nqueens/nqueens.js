function runProgram(input) {
  var n = +input
  var board = []
  for(var i=0; i<n; i++){
   board[i] = []
   for(var j=0; j<n; j++){
       board[i][j] = 0
   }
  }
  nqueens(board,0,n)
  console.log(count);
}
var count = 0
function nqueens(board,row,n){
  if(row == n){
      count++
      return
  }

  for(var i=0; i<n; i++){
      if(check(board,row,i)===true){
        board[row][i] = 1
        nqueens(board,row+1,n)
        board[row][i] = 0
      }
  }
}

function check(board,row,col){

    //vertical check --->
    for(var i=0; i<row; i++){
        if(board[i][col] == 1){
            return false
        }
    }

    //upper left diagonal check --->
    for(var i=row-1, j=col-1; i>=0 && j>=0; i--, j--){
        if(board[i][j] == 1){
           return false
        }
    }

    //upper right diagonal check ---->
    for(var i=row-1, j=col+1; i>=0 && j<board.length; i--,j++){
        if(board[i][j]==1){
            return false
        }
    }

    return true
}


if (process.env.USERNAME === "Ashish Pal") {
  runProgram(`4`);
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
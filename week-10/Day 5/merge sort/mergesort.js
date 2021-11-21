// function runProgram(input) {
//  input = input.trim().split("\n")
//  var n = +input[0]
//  var arr = input[1].trim().split(" ").map(Number)
var arr = [5,7,3,9,2]
 mergeSort(arr,0,4)
 console.log(arr.join(" "));
//}


function mergeSort(arr,low,high){
 if(low<high){
     var mid = Math.floor((low+high)/2)
     mergeSort(arr,low,mid)
     mergeSort(arr,mid+1,high)
     merge(arr,low,high,mid)
 }

}

function merge(arr,low,high,mid){

var left = []
for(var i=low; i<=mid; i++){
    left.push(arr[i])
}
var right = []
for(var j=mid+1; j<=high; j++){
    right.push(arr[j])
}
var k = low
var l = 0
var r = 0
while(l<left.length && r <right.length){
    if(left[l]<=right[r]){
        arr[k] = left[l]
        l++
        k++
    }
    else{
        arr[k] = right[r]
        r++
        k++
    }
}
while(l<left.length){
    arr[k] = left[l]
    l++
    k++
}
while(r<right.length){
    arr[k] = right[r]
    r++
    k++
}
//console.log(arr);
}

// if (process.env.USERNAME === "Ashish Pal") {
//   runProgram(`5
//   3 5 0 9 8`);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }
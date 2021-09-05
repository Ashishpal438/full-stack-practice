var arr = [1,2,3,4,6,"ram","g"];

function customIncludes(arr,x){
  for(var i=0;i<arr.length;i++){
    var isPresent = false;
    if(arr[i] === x){
      isPresent = true;
      break;
    }
  }
  return isPresent;
}

console.log(customIncludes(arr,4))
console.log(customIncludes(arr,"ram"))
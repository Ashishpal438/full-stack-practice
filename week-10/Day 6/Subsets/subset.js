gs([1,2,3],[],0)

function gs(arr,out,curr){
    if(out.length !== 0){
        console.log(out);
    }
    if(out.length === 0){
        console.log([]);
    }
    if(curr == arr.length){
      return
    }

    for(var i=curr; i<arr.length; i++){
        out.push(arr[i])
        gs(arr,out,i+1)
        out.pop()
    }
}
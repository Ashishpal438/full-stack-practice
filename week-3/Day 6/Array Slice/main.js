function customSlice(arr, start , end){
    var newarr = [];
    if(start === undefined){
      start = 0;
    } 
    if(end === undefined){
      end = arr.length;
    }
    for(var i=0; i<arr.length; i++){
    //   if(start < 0){
    //     if(start <= (i*-1) ) 
    //      newarr.push(arr[end-i]
    //   }
    // //  else{
       if(i >= start){
        if(i<end){
         newarr.push(arr[i])
        }
      }
    //}
      
    }
    return newarr;
  }
  
  var  animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
  console.log(customSlice(animals,2,4))
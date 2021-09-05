var arr = ['Fire', 'Air', 'Water'];

function customJoin(arr,x){
  if(x === undefined){
    x = ","
  }
   var newstr = "";
  if(arr.length === 0){
    return newstr;
  }
  else{
    for(var i=0 ; i<arr.length; i++){
      if(i !== arr.length-1){
        newstr = newstr + arr[i] + x;
      } else{
           newstr = newstr + arr[i]
      }
       
    }
  }
  return newstr;
}
console.log(customJoin(arr,  "-"));
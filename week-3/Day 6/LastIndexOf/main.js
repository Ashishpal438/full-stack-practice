var animals = ['Dodo', 'Tiger', "Dodo",'Penguin',"Dodo"];

function customLastIndex(arr,x){
  var lastIndex = -1;
 for(var i=0; i<arr.length; i++){  
   if(arr[i] === x){
     lastIndex = i;
   }
 }
 return lastIndex
}
console.log(customLastIndex(animals,"Dodo"))
var str = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

function customReplace(str, find ,replace){
  var arr = str.split(" ")
 
  for(var i=0;i<arr.length;i++){
    var endWord = find + ".";
    
    if(arr[i] === find || arr[i] === endWord){
       if(arr[i] === endWord){
         arr[i] = replace + "."
         break;
       }
       else{
         arr[i] = replace;
         break;
       }
    } 
  }

  var output = arr.join(" ")
  return (output)
}
console.log(customReplace(str, 'dog' , 'monkey'));

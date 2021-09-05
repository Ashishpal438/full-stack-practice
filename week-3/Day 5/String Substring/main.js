var str = 'Mozilla';

function customSubstring(str,start,end){
  var newstr = ""
  if(end === undefined){
    end = str.length;
  }
  for(var i= start;i<end;i++){
  newstr = newstr + str[i];
  }
  return newstr
}
console.log(customSubstring(str,1))
console.log(customSubstring(str,1,6))
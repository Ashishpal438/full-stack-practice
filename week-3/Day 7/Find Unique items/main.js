var arr = ["a","b","c","d","b","a","d","a","d"];
var newObj = {};
for(var i=0;i<arr.length;i++){
  var k = arr[i]
  newObj[k] = "x";
}
 console.log(Object.keys(newObj))
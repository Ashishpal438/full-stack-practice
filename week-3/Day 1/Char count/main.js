var arr = ["Masai","School","Ashish","Developer"]
var count = 0;
for(var i=0;i<arr.length;i++){
 var name = arr[i];
 count = count + name.length;
}
console.log(count);
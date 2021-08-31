var str = "I will be a software developer in July";
if(str.length === 0){
  console.log(" 0 words")
} else{
var count = 0;
for(var i=0;i<str.length;i++){
  if(str[i] === " "){
    count++;
  }
  }
  console.log((count + 1));
}

var length = 10;
var height = 20;

for(var i=1;i<=height;i++){
  var pattern = "";
  for(var j=1;j<=length;j++){
    if(i===1 || i===height){
    pattern = pattern + "*";
    }
    else{
      if(j===1 || j===length){
        pattern = pattern + "*";
      }
      else{
        pattern = pattern + " ";
      }
    }
  }
  console.log(pattern)
}

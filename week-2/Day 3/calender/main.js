var months = 12;

for(var i=1;i<=months;i++){
  var days = 31;
  if(i==2){
    days = 28;
  }
  else if(i==4 || i==6 || i==9 || i==11){
    days = 30;
  }
  
  for(var j=1;j<=days;j++){
    console.log(j + "-" + i);
  }
}
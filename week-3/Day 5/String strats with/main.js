function customStartsWith(str,search,position){
  
    var isStart = false;
    for(var i=0;i<str.length;i++){
     
      for(var j=0;j<str.length;j++){
       if(search[i]===str[j]) {
         if(j === position){
         isStart = true;
         }
      
      }
     }
   
    }
    return isStart;
 }
 
 var str1 = 'Saturday night plans';
 console.log(customStartsWith(str1,"pla",15));
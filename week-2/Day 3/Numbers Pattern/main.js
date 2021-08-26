function yourFirstNested(num) {
    // Write code here
 for(var i=1;i<=num;i++){
   var pattern = "";
   for(var j=1;j<=num;j++){
    pattern = pattern  + j + " ";
   }
   console.log(pattern)
 }
}
yourFirstNested(5)
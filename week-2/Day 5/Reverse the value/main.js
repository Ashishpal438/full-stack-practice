function reverseTheValue(num) {
 
    let revNum = "" + num ;
   let reverse = ""
   for(let i=revNum.length-1;i>=0;i--) {
    reverse = reverse + revNum[i]
   }
    console.log(reverse)
  }
reverseTheValue(5432)  
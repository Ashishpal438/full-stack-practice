// defining a function to find differnce of 2 numbers --
function diff(a,b){
    return (a-b);
  }
  
  // using above function to define a function to find absolute differnce --
  
  function absDiff(a,b){
   if(a>b){
    return diff(a,b);
    } else{
    return (diff(a,b) * -1) ;
    }
  }
  //sample 1 --
  console.log(absDiff(12,4))
  //sample 2--
  console.log(absDiff(4,18))
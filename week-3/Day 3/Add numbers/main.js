//creating a function to add to numbers-
function addNumbers(num1,num2){
    return (num1 + num2);
  }
  
  // using the above function to calculate sum of 3 add Numbers-
  
  function add3Num(a,b,c){
    return addNumbers(a,b) + c;
  }
  
  //sample 1 ---
  console.log(add3Num(4,5,5));
  //sample 2 ---
  console.log(add3Num(14,0,-5));
  
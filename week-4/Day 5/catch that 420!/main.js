function catch420(n) {
    var num = "" + n;
    var j = 0;
    for (var i=0; i<num.length; i++){
    if(num[i] === "4" && num[i+1]==="2" && num[i+2]==="0"){
     j++;
    }  
    }
    if(j !== 0){ 
      console.log("Caught");
    }
    else{
    console.log("Escaped");
    }
  
  }
  catch420(2242084)
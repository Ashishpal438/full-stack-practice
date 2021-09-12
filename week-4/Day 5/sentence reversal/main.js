function masaiSentenceReverse(s) {
    var arr = (s.split(' '))
        var newstr = "";
        for(var i = arr.length-1; i>=0; i-- ){
        if(i === arr.length-1 ){
          newstr = newstr + arr[i];
          }else{
          newstr = newstr + " " + arr[i];
        }
        }
       console.log(newstr)
    }
    masaiSentenceReverse("Full stack web development")
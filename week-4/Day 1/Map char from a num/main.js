function mapCharAgain(N) {
    
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var arr = [];
     for(var i=0; i<lowerCase.length; i++){
     var obj = {
       name : lowerCase[i],
       value : N+i,
       data : function() {
       console.log(this.name + "-" + this.value);
       }
      }
       arr.push(obj);
     }
    for(var i=0; i<arr.length; i++){
    var k = arr[i];
     k.data();
    }
  }
  mapCharAgain(8)
function mapChar(N) {
    var arr = [];
    var lowerCase = "abcdefghijklmnopqrstuvwxyz"
      for(var i=0;i<N;i++){
          var obj = {
               alpha : lowerCase[i],
               num : i+1,
               data : function() {
                console.log( this.alpha + "-" + this.num);
               } 
            }
            arr.push(obj)
         }
      
      for(var i=0; i<arr.length; i++){
      var itm = arr[i];
        itm.data()
      }
  }
  mapChar(5)
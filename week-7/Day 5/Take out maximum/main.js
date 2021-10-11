function maximum(N,K,arr){
    var left = 0;
    var right = 0;
    var sum = 0 
    var max = sum;
    
    while(right<N){
       
      if(right-left+ 1 < K){
           sum = sum + arr[right];
          max = sum;
           right++;
      // console.log("max is now---",max)
        }
        else if(right-left+1 === K){
            sum = sum + arr[right];
            //console.log("first window sum is ",sum )
          if(sum>max){
              max=sum;
          }
           sum = sum - arr[left];
          left++;
          right++;
         
          //   console.log(left,right);
          //   console.log(sum);
      }
      
    }
    console.log(max);
  }

  maximum(10,3,[-1,-1, -2, 1, -2, 4, 1, 9, 3, 9])
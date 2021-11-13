var arr = [1,2,3,4,5,6,7,8,9]
console.log(binary(5,0,8))


function binary(x,start,end){
 if(start > end){
     return false
 }
 var mid = Math.floor((start+end)/2)
 if(arr[mid]===x){
     return true
 }
 if(arr[mid] < x){
     return binary(x,mid+1,end)
 }
 else{
     return binary(x,start,mid-1)
 }
}
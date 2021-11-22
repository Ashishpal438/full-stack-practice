// function xpn(x,n){
//     if(n==0){
//         return 1
//     }
//      return x * xpn(x,n-1)
// }
// console.log(xpn(2,5));


// logarithm ---->
function xpn(x,n){
    if(n == 0) return 1
    var xpnb2 = xpn(x,n/2) 
    let xn = xpnb2 * xpnb2

    if(n % 2 == 1){
      xn = xn * x
    }
    
    return xn
}

console.log(xpn(5,3));
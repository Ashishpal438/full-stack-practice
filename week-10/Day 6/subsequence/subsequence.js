gs('abc','',0)

function gs(str,out,curr){
 if(out.length !== 0){
     console.log(out)
 }
 if(curr == str.length){
     return
 }

 for(var i=curr; i<str.length; i++){
     out += str[i]
     gs(str,out,i+1)
     out = out.slice(0,-1)
 }
}
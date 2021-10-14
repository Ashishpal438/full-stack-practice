function longest(names,n){
    //code here
    var highest = names[0];
    for(var i=0; i<n; i++){
        var str = names[i] ;
        if(str.length > highest.length){
            highest = names[i]
        }
    }
    return highest;
}
console.log(longest(["Geek", "Geeks", "Geeksfor","GeeksforGeek", "GeeksforGeeks"],5));
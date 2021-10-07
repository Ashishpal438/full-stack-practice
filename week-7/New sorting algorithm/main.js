function customSort(N,K,arr) {
    for(var i=0;i<N; i++){
        for(var j=0; j<N;j++){
            if(arr[j]%K > arr[j+1]%K){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr.join(" "))
}
customSort(5,6,[12,18,17,65,46])
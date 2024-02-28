function equalTo(arr){
   for(let i=0; i<arr.length; i++){
    if(arr[i] === i){
        console.log(arr[i]);
        return arr[i]
    }
   }
   console.log(-1);
   return -1
}
equalTo([-10, -5, 0, 3, 7])
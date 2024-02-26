function removeVowels(arr){
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = ''
    for(let i=0; i<arr.length; i++){
        if(!vowels.includes(arr[i])){
            result += arr[i]
        }
    }
    if(result.length ===0){
        return -1
    }else {
        console.log(result);
        return result
    }

}
removeVowels('welcome to geeksforgeeks')
function secondLargest(arr) {
    let secondMax = Number.MIN_SAFE_INTEGER
    let max = Number.MIN_SAFE_INTEGER
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        }if(arr[i]>secondMax && arr[i] < max){
            secondMax = arr[i]
        }
    }
    console.log(secondMax);
    return secondMax
}
secondLargest([ 35, 1, 10, 34, 1])
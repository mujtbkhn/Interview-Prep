function secondLargest(arr) {

    let max = Number.MIN_SAFE_INTEGER
    let second_max = Number.MIN_SAFE_INTEGER
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            second_max = max;
            max = arr[i]
        }
        if (arr[i] > second_max && arr[i] < max) {
            second_max = arr[i]
        }
    }
    console.log(second_max)
    return second_max
}
secondLargest([45, 7, 21, 65, 54])
// function atLeastTwoGreater(arr){
//     arr.sort((a,b) => a - b)

//     const newArr =  arr.slice(0, arr.length-2)
//     console.log(newArr);
//     return newArr
// }
// atLeastTwoGreater([2, 8, 7, 1, 5])

function atLeastTwoGreater(arr) {
    let firstMax = Number.MIN_SAFE_INTEGER;
    let secondMax = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstMax) {
            secondMax = firstMax;
            firstMax = arr[i];
        } if (arr[i] > secondMax) {
            secondMax = arr[i]
        }
    }

    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < secondMax) {
            result.push(arr[i])
        }
    }
    console.log(result);
    return result
}
atLeastTwoGreater([2, 8, 7, 1, 5])
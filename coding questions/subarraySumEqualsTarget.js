// Given an unordered array of integers, write a program that finds a contiguous subarray whose sum is equal to the given one.
// const arr = [1, 3, 4, 2, 5];
// const targetSum = 9;

// console.log(contiguousSubarraySum(arr, targetSum)); // Output: [4, 2, 5]

function contiguousSubarraySum(arr, targetSum){
    const result = []
      for(let i =0; i<arr.length; i++){
        if(arr[i]+ arr[i+1] < targetSum){
              result.push(arr[i], arr[i+1])
        }
      }
      console.log(result);
}
const arr = [1, 3, 4, 2, 5];
const targetSum = 9;
contiguousSubarraySum(arr, targetSum)
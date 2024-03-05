function isPrime(num) {
  // Check if the number is less than 2
  if (num < 2) {
    return false;
  }
  // Loop through potential divisors from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // If the number is divisible by any divisor, it's not prime
    if (num % i === 0) {
      return false;
    }
  }
  // If no divisors are found, the number is prime
  return true;
}

// Example usage:
console.log(isPrime(17)); // Output: true
console.log(isPrime(15)); // Output: false

// check no is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
  
    for (let i = 3; i * i <= num; i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  }
console.log(isPrime(2));  
console.log(isPrime(4));  

// to return factorial
function factorial(n) {
    if (n < 0) return 'Factorial is not defined for negative numbers'; 
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
   }
  console.log(factorial(3));  
  console.log(factorial(0));  
  console.log(factorial(-1));

  //return captail letter
  function capitalWord(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  }
  console.log(capitalWord('hello world')); 
  
  // new array with each element doubled

  function doublenum(arr) {
    return arr.map(num => num > 10 ? num * 2 : num);
  }

  const numbers = [5, 12, 7, 15, 3];
  console.log(doublenum(numbers)); 

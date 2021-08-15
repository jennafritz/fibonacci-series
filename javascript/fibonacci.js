function fibonacci(num) {
  // type your code here
  let fibonacciArray = [0, 1]

  for(i = 2; i <= num; i++){
    fibonacciArray[i] = fibonacciArray[i - 2] + fibonacciArray[i - 1]
  }

  return fibonacciArray[num]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

  // my tests

  console.log("Expecting: 2")
  console.log("=>", fibonacci(3))

  console.log("Expecting: 5")
  console.log("=>", fibonacci(5))
}

module.exports = fibonacci;

// Please add your pseudocode to this file
  // given an array index, n, find the value in the fibonacci series that would be at that index

  // the value would be the sum of the two preceding values, so at index n-1 and n-2

  // fibonacci series starts with 0 and 1: [0, 1, 1, 2, 3, 5, 8]

  // initialize array [0, 1]

  // starting at index 2, for each element in the array, up to and including element n, set that index equal to the sum of the previous two elements

  // when nth element is reached, return value



// And a written explanation of your solution

  // this function starts the fibonacci series off with the first two numbers
  // then, given a specific index, n, the fibonacci array is calculated up to that element by adding the previous two elements together to supply the value of the next
  // the function then returns the value of the nth element

// Function to calculate sum using a for loop
function sumFor(numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}

// Function to calculate sum using a while loop
function sumWhile(numbers) {
  let result = 0;
  let i = 0;
  while (i < numbers.length) {
    result += numbers[i];
    i++;
  }
  return result;
}

// Function to calculate sum using recursion
function sumRecursion(numbers, index = 0) {
  if (index === numbers.length) {
    return 0;
  }
  return numbers[index] + sumRecursion(numbers, index + 1);
}

// Function to calculate sum using underscore
function sumTheSimpleWay(numbers) {
  return _.reduce(numbers, function (memo, num) {
    return memo + num;
  }, 0);
}

// Test code
const numbers = [1, 2, 3, 4, 5];
console.log('Sum using for loop:', sumFor(numbers));
console.log('Sum using while loop:', sumWhile(numbers));
console.log('Sum using recursion:', sumRecursion(numbers));
console.log('Sum using underscore:', sumTheSimpleWay(numbers));

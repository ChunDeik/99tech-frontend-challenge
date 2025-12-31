/**
 * Implementation 1: Iterative Approach
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * This approach uses a simple loop to accumulate the sum. It is 
 * easy to read and understand.
 */
var sum_to_n_a = function(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};

/**
 * Implementation 2: Mathematical Formula (Arithmetic Progression)
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 * Using Gauss's formula (n * (n + 1) / 2) is the most efficient way 
 * to solve this problem as it calculates the result in constant time.
 */
var sum_to_n_b = function(n) {
    return (n * (n + 1)) / 2;
};

/**
 * Implementation 3: Recursive Approach
 * While this approach is functionally elegant, it is the least performant for very large values of 'n' because it creates a new 
 * stack frame for each decrement, which can lead to a "Maximum call stack size exceeded" error.
 */
var sum_to_n_c = function(n) {
    if (n <= 0) return 0; // Added check for 0/negative to prevent infinite recursion
    if (n === 1) return 1;
    return n + sum_to_n_c(n - 1);
};
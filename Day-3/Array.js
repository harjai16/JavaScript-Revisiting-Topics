let arr = [1, 2, 3, 4, 5, "Ashwani", true]; // array of mixed types
let arr1 = [1, 2, 3, 4, 5, [6, 7, 8]]; // array of arrays
let arr3 = [1, 2, 3, 4, 5]; // array of numbers

arr.push(6); // add 6 to the end of the array
arr.pop(); // remove the last element of the array
arr.shift(); // remove the first element of the array
arr.unshift(0); // add 0 to the beginning of the array
arr.splice(2, 1); // remove 1 element from index 2
arr.splice(2, 0, 10); // add 10 at index 2

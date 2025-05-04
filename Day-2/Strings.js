// Strings 

let str = "Hello";
let str2 = "Ashwani"; 
let str3 = str + " " + str2; // concatenation
console.log(str3); // Hello Ashwani

console.log(str.length); // length of the string
console.log(str.charAt(0)); // first character of the string
console.log(str.charAt(str.length - 1)); // last character of the string
console.log(str.indexOf("l")); // index of the first occurrence of "l"
console.log(str.lastIndexOf("l")); // index of the last occurrence of "l"
console.log(str.includes("l")); // true (checks if "l" is present in the string)
console.log(str.startsWith("H")); // true (checks if the string starts with "H")
console.log(str.endsWith("o")); // true (checks if the string ends with "o")
console.log(str.toUpperCase()); // HELLO (convert to uppercase)
console.log(str.toLowerCase()); // hello (convert to lowercase)
console.log(str.trim()); // Hello (remove whitespace from both sides)
console.log(str.replace("l", "L")); // HeLlo (replace first occurrence of "l" with "L")
console.log(str.replaceAll("l", "L")); // HeLLo (replace all occurrences of "l" with "L")
console.log(str.slice(1, 4)); // ell (slice from index 1 to 4)
console.log(str.substring(1, 4)); // ell (substring from index 1 to 4)
console.log(str.split("l")); // [ 'He', 'o' ] (split the string into an array using "l" as a separator)
console.log(str.split("")); // [ 'H', 'e', 'l', 'l', 'o' ] (split the string into an array of characters)
console.log(str.concat(" ", str2)); // Hello Ashwani (concatenate two strings)
console.log(str.repeat(3)); // HelloHelloHello (repeat the string 3 times)
console.log(str.padStart(10, "0")); // 00000Hello (pad the string with "0" to a total length of 10)
console.log(str.padEnd(10, "0")); // Hello00000 (pad the string with "0" to a total length of 10)
console.log(str.localeCompare("Hello")); // 0 (compare two strings, returns 0 if they are equal, -1 if the first string is less than the second, and 1 if the first string is greater than the second)


let number = 1000000;
let numberString = number.toString(); // convert number to string
let numberStringWithCommas = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // add commas to the number string
console.log(numberStringWithCommas); // 1,000,000 (add commas to the number string)
console.log(number.toLocaleString(`en-IN`));



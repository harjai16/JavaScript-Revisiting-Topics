 const accountId = 123456789;
 let accountName = "Ashwani";
 var accountBalance = 1000;
 accountType = "Savings"; 

 let accountState;  // This is a variable that has been declared but not initialized

//  lets try to change value now 
// accountId = 987654321; // This will throw an error because accountId is a constant
accountName = "Ashwani Harjai"; // This is allowed because accountName is a variable  
accountBalance = 2000; // This is allowed because accountBalance is a variable
accountType = "Current"; // This is allowed because accountType is a variable

console.log(accountId); // 123456789
console.log(accountName); // Ashwani Harjai

console.log(accountBalance); // 2000
console.log(accountType); // Current

console.log(accountState); // undefined



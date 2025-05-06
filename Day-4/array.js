const fav_singers = ["Sidhu Moosewala", "Karan Aujla", "AP Dhillon", "Shubh"];
const fav_songs = ["295", "Brown Munde", "Excuses", "Insane"];

fav_singers.push(fav_songs);

console.log(fav_singers); // ["Sidhu Moosewala", "Karan Aujla", "AP Dhillon", "Shubh", ["295", "Brown Munde", "Excuses", "Insane"]]

const singers_somgs =  fav_singers.concat(fav_songs);
console.log(singers_somgs); // ["Sidhu Moosewala", "Karan Aujla", "AP Dhillon", "Shubh", "295", "Brown Munde", "Excuses", "Insane"]
console.log(fav_singers.length); // 5 (length of the array)
console.log(fav_songs.length); // 4 (length of the array)

const money = [1,2,3,4,5,[6,7,8,9],10[11,12,[13,14,15]]];
console.log(money); // [1, 2, 3, 4, 5, [6, 7, 8, 9], 10[11, 12, [13, 14, 15]]]

Array.isArray(money); // true (checks if money is an array)
console.log(money[0]); // 1 (accesses the first element of the array)

Array.isArray("Ashwani"); // false (checks if "Ashwani" is an array)
console.log(Array.from("Ashwani")); // ["A", "s", "h", "w", "a", "n", "i"] (converts string to array)   
console.log(Array.from("Ashwani", (char) => char.charCodeAt(0))); // [65, 115, 104, 119, 97, 110, 105] (converts string to array of char codes)
console.log(Array.from("Ashwani", (char) => char.charCodeAt(0)).toString()); // "65,115,104,119,97,110,105" (converts array of char codes to string)
console.log(Array.from("Ashwani", (char) => char.charCodeAt(0)).join("-")); // "65-115-104-119-97-110-105" (joins array of char codes with "-")
console.log(Array.from("Ashwani", (char) => char.charCodeAt(0)).join("-").split("-")); // ["65", "115", "104", "119", "97", "110", "105"] (splits string into array)



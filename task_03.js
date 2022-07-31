// function removeDupes(str) {
//   hard way...
//     const res = [];
//     const map = {};
//     for (let i = 0; i < str.length; i++) {
//       const char = str[i];
//       if (!map[char]) {
//         map[char] = true;
//         res.push(char);
//       }
//     }
//     return res.join("");

//     easy way
//     return Array.from(new Set(str)).join("");
// }

// console.log(removeDupes("abcd"));
// console.log(removeDupes("aabbccdd"));
// console.log(removeDupes("abcddbca"));
// console.log(removeDupes("abababcdcdcd"));

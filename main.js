// function isUnique(string) {
// for (let i = 0; i < string.length; i++) {
//     const char = string[i]
//     if (string.lastIndexOf(char) !== i) {
//         return false
//     }
// }
//   return true
// const set = new Set()
// for (let i = 0; i < string.length; i++) {
// const char = string[i]
// if(set.has(char)) {
//     return false
// }
// set.add(char)
// }
// return true
// lvl 80
// return new Set(string).size === string.length
// }

// console.log(isUnique('abcdef'))
// console.log(isUnique('12345'))
// console.log(isUnique('abcABC'))
// console.log(isUnique('abcadf'))


// const duplicates = [1,1, 2,3,2,4,3,3,5,6,7,8,8,7,9]

  
// const removeD = duplicates.filter((item, ind) => {
//     return duplicates.indexOf(item) === ind
// })

// console.log(removeD)


// const ES6 = [...new Set(duplicates)]

// console.log(ES6)
// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce((mem, char) => char + mem, '')
}

// function reverse(str) {
//     let reversed = ''
//     for (let character of str) {
//         reversed = character + reversed
//     }
//     return reversed
// }

// function reverse(str) {
//     const arr = str.split('')
//     let reversed = []
//     arr.forEach(element => {
//         reversed.unshift(element)
//     });
//     return reversed.join('')
// }

// function reverse(str) {
//     return str.split('').reverse().join('')   
// }


module.exports = reverse;

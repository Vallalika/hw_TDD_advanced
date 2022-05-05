const IsogramFinder = function (word) {
    this.word = word.toLowerCase()
    this.letters = word.split('')
}

// // Version without higher order function
// IsogramFinder.prototype.isIsogram = function () {
//     let uniqueValues = []
//     for (const letter of this.letters) {
//         if (uniqueValues.includes(letter)) {
//             return false
//         } else {
//             uniqueValues.push(letter)
//         }
//     }
//     if (uniqueValues.length === this.letters.length) {
//         return true
//     }
// }

// Version with higher order function
IsogramFinder.prototype.isIsogram = function () {
    const isogramCheck = this.letters.every((letter) => {
        // initialise the count with that letter once
        let countLetter = 0

        //check that letter against every letter in the
        for (const l of this.letters) {
            if (letter === l) {
                countLetter += 1
            }
        }
        return countLetter === 1
    })
    return isogramCheck
}

const isogramFinder = new IsogramFinder('subdermatoglyphic');
const result = isogramFinder.isIsogram()
console.log(result)

module.exports = IsogramFinder;
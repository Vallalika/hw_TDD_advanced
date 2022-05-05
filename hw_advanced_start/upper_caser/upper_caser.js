const UpperCaser = function (words) {
    this.words = words
}

// Long version
UpperCaser.prototype.toUpperCase = function () {
    const result = this.words.map(word => {
        return word.toUpperCase()
    })
    return result
}

// Short version
// UpperCaser.prototype.toUpperCase = function () {
//     const result = this.words.map(word => word.toUpperCase())
//     return result
// }

module.exports = UpperCaser;
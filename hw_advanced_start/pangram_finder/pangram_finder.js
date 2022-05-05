const UpperCaser = require('../upper_caser/upper_caser.js');

const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.toLowerCase();
}

// LONG VERSION
// PangramFinder.prototype.isPangram = function () {
//   const pangram = this.alphabet.every(letter => {
//     return this.phrase.includes(letter)
//   })
//   return pangram
// }

// SHORT VERSION
PangramFinder.prototype.isPangram = function () {
  const pangram = this.alphabet.every(letter => this.phrase.includes(letter))
  return pangram
}

module.exports = PangramFinder;
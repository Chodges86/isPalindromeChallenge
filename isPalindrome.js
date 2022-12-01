
// Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.

// For example:

// isPalindrom("a")
// // returns true

// isPalindrom("noon")
// // returns true

// isPalindrom("hello")
// // returns false
// Treat spaces and uppercase letters normally—so “Racecar” wouldn’t be a palindrome since “R” and “r” aren’t the same letter:

// isPalindrom("Racecar")
// // returns false

// isPalindrom("racecar")
// // returns true

// Write your code below

function isPalindrom(word) {

    const wordToArray = Array.from(word)
    const reversedArray = []
    wordToArray.forEach(char => reversedArray.unshift(char))
    const reversedWord = reversedArray.join("")
    
    console.log(word)
    console.log(reversedWord)

    if (word === reversedWord) {
        return true
    } else {
        return false
    }
}

console.log(isPalindrom("hello"))
console.log(isPalindrom("Racecar"))
console.log(isPalindrom("racecar"))
console.log(isPalindrom("abcddcba"))
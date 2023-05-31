// Letter freq
let LetterFreq = (phrase) => {
    let letterFreq = {}
    for(let letter of phrase){
        if(letter in letterFreq) letterFreq[letter]++
        else                 letterFreq[letter] = 1
    }
    
    return {letterFreq}
}

console.log(LetterFreq('hey i am khalid'))

// word count

let wordCount = (phrase) => {
    let words = 1
    for(let letter of phrase){
        if(letter == ' ') ++words
    }
    return {words}
}
console.log(wordCount('hey i am khalid'))

// Word Frequency
let WordFreq = (phrase) => {
    let wordFreq = {}
    words = phrase.split(' ')
    for(let word of words){
        if(word in wordFreq)  wordFreq[word]++
        else                  wordFreq[word] = 1
    }
    
    return {wordFreq}
}

console.log(WordFreq('hey i am khalid'))
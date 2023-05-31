// Letter freq
let LetterFreq = (phrase) => {
    let freq = {}
    for(let letter of phrase){
        if(letter in freq) freq[letter]++
        else                 freq[letter] = 1
    }
    
    return {freq}
}

console.log(LetterFreq('hey i am khalid'))

// word freq

let wordFreq = (phrase) => {
    let word = 1
    for(let letter of phrase){
        if(letter == ' ') ++word
    }
    return {word}
}

console.log(wordFreq('hey i am khalid'))
// Letter freq
let Freq = (phrase) => {
    let Freq = {}
    for(let letter of phrase){
        if(letter in Freq) Freq[letter]++
        else               Freq[letter] = 1
    }
    
    return {Freq}
}

console.log(Freq('hey i am khalid'))

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
    // let wordFreq = {}
    // words = phrase.split(' ')
    // for(let word of words){
    //     if(word in wordFreq)  wordFreq[word]++
    //     else                  wordFreq[word] = 1
    // }
    
    // return {wordFreq}

    const words = phrase.split(' ')
    return Freq(words)
}

console.log(WordFreq('hey i am khalid'))
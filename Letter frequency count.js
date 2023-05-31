let LetterFreq = (phrase) => {
    let freq = {}
    for(let letter of phrase){
        if(letter in freq) freq[letter] += 1
        else                 freq[letter] = 1
    }
    
    return freq;
}

console.log(LetterFreq('hey i am khalid'))
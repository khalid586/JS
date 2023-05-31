const letters = 'i am khalid'

for(const letter in letters){ // letter will give index value if we use 'in'
    console.log(letter)
}

for(const letter of letters){ // letter will give actual value if we use 'of'
    console.log(letter)
 }
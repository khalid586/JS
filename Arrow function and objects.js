// Arrow function
const sum = (a,b) => a+b 
console.log(sum(10,20))

// object 
let person = {
    name: 'khalid',
    shirt: 'white',
    cars: ['farari','lambo','bmw']
}

person.number = 134 // adding properties

console.log(person['name']) // accessing object with bracket notation
console.log(person.shirt) // accessing object with dot notation
console.log(person.cars[0])
console.log(person.number)
console.log(person )

// ES6 arrow function

const introducer =  (name,shirt) => {
    const person = {
        Name: name ,
        Shirt: shirt ,
        assets: 100000 , 
        liability: 50001,
        networth: function() {
            return this.assets - this.liability
        }
    }

    const intro = `Hi, my is ${person.Name} 
    and the color of my shirt is ${person.Shirt} and my net worth is ${person.networth()}`

    return intro
}

console.log(introducer('khalid','black'))





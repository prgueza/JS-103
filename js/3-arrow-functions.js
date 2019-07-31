// Slide 1: Definition

// Arrow functions are an alternative to regular functions, written in a more
// syntactically compact way. They don't have their own bindings to the this and
// arguments keywords, but this is an intended feature.

(a, b) => { return a + b }


// Slide 2: Syntax

// The basic syntax for an arrow function takes arguments within parentheses,
// and expressions contained in it's body, surrounded by curly braces.

(/* arguments */) => { /* expressions */ }


// Slide 3: Alternative Syntax

// We can write arrow functions in different ways

// When just one argument is passed we don't need the parentheses
a => { return a * 2 }

// When the expression in the body is just used to return a value we don't need
// the curly braces
(a, b) => a + b

// If the expression in the body returns an object literal, we need parentheses
// within the body
(key, value) => ({ key: value })

// If the function takes no arguments, we need to use empty parenthesees
() => console.log(' 🍕 ')


// Slide 4: Named arrow functions

// We can store arrow functions in a variable so we can use them anywhere within
// our code

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1)

console.log(capitalize('garfield')) // 'Garfield'

// Slide 5: Basic test

🤔 // Are these arrow functions well written? What do they return?

// 1 (a === 4, b === 3)
const sum = (a, b) => a + b

// 2 (array === ['a', 'b', 'c'])
const firstElement = array => array[0]

// 3 (object === { a: 5, b: 2 })
const concat = (object) => { return `${object.a} - ${object.b}` }

// 4 (human === 'Jon', cat === 'Garfield')
const makeObject = human, cat => ({ human: human, cat: cat })

// Slide 6: Uses in map, reduce, filter...

// The most common use for these functions is within methods that take a function
// as an argument, such as map(), reduce(), find(), filter()...

const animals = [{
  name: 'cat',
  legs: 4
}, {
  name: 'dog',
  legs: 4
}, {
  name: 'human',
  legs: 2
}]

const twoLeggedAnimals = animals.filter(animal => animal.legs === 2)

const dog = animals.find(animal => animal.name === 'dog')

const animalNames = animals.map(animal => animal.name)

const totalLegs = animals.reduce((total, current) => total += current.legs, 0)


// Slide 7: Arrow function context

// Arrow functions don't create content, which means they don't have their own
// 'this' object. The expression within the arrow function will look up through
// the contexts until it finds a valid 'this' and use it.

function updateThis () {

  this.value = 0

  const addOneToThis = () => {
    this.value ++
  }

  console.log(this.value)
  addOneToThis()
  console.log(this.value)

}

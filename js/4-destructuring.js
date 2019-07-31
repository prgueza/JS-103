// Slide 1: Introduction

// Destructuring is javascript's way to unpack values from arrays or properties
// from objects into distinct variables.

const [ cat, dog ] = [ 'Garfield', 'Oddie' ]

console.log(cat) // Garfield
console.log(dog) // Oddie


// Slide 2: Basic Array destructuring

// Basic array destructuring works by asigning variables different values that
// exist within the array using the syntax [ variable, variable...] = array

const address = '28035 - Madrid'

const [ zipCode, city ] = address.split(' - ') // split() returns an array

console.log(zipCode) // 28035
console.log(city) // Madrid


// Slide 3: Default values

// We can assign default values to the variables in case the position of the
// array they try to acces doesn't exist or is undefined

const animals = [ 'Garfield', undefined ]

const [ cat, dog = 'Oddie', horse = 'Bojack ' ] = animals


// Slide 4: Destructuring Test

🤔 // What does this print?

const array = [ 0, undefined, null, '' ]

const [ a = 1, b = 2, c = 3, d = 4, e = 5, f ] = array

console.log(a, b, c, d, e, f)


// Slide 5: Swapping variables before

// Before destructuring we used to need an aditional bubble variable if we wanted
// to swap values from two variables

let a = 1
let b = 2
let bubble

bubble = a // a = 1, b = 2, bubble = 1
a = b // a = 2, b = 2, bubble = 1
b = bubble  // a = 2, b = 1 -> Swapped!


// Slide 6: Swapping variables now

🎉 // Using destructuring this is not needed anymore!

let a = 1
let b = 2

[ a, b ] = [ b, a ] // now a = 2, b = 1


// Slide 7: Ignoring values

// We might encounter the problem where we don't need all the values. We can
// ignore certain positions by skipping the declaration of a variable for those

const array = [ 'needed', 'needed', 'not needed', 'nedded' ]

const [ a, b, , c ] = array // a = needed, b = needed, c = needed


// Slide 8: Basic Object destructuring

// With objects works similarly, but with basic destructuring variables need
// to be named with the object's keys. This allows us to declare them in any
// order.

const house = { human: 'Jon', cat: 'Garfield', dog: 'Oddie' }

const { human, dog, cat } = house

console.log(human, dog, cat) // Jon Oddie Garfield


// Slide 9: Changing names

// However, we can change names to better suited ones if needed. We can consider
// the semicolon as the word 'as', so it reads:
// 'store variable 'as' new named variable'

const house = { humanNameIs: 'Jon', catName: 'Garfield' }

const { humanNameIs: human, catName: cat } = house

console.log(human, cat) // Jon Garfield


// Slide 10: Default values

// We can also use default values in case the key doesn't exist or is undefined

const house = { human: 'Jon', cat: undefined }

const { human, cat = 'Garfield', dog = 'Oddie' } = house

console.log(human, cat, dog) // Jon Garfield Oddie


// Slide 11: Test changing names + default values

🤔 // What does this print?

const house = { nameA: 'Jon', nameB: undefined }

const { nameA: human, nameB: cat = 'Garfield', dog: nameC = 'Oddie' } = house

console.log(human, cat, dog)


// Slide 12: Unpacking fields from function parameters

// For functions that take objects or arrays as arguments we can use destructuring
// to access each of the values within these data structures directly in the
// arguments.

const person = { name: 'Jon', surname: 'Q. Arbuckle' }

function concatenateName ({ name, surname }) {
  return name + surname
}

const fullName = concatenateName(person)

console.log(fullName) // Jon Q. Arbuckle

// Slide 13: Using arrow functions and template strings

🎉 // This is how thigs we have learn help us write better and cleaner code!

// From this:

const person = { name: 'Jon', surname: 'Q. Arbuckle' }

function concatenateName (person) {
  let name = person.name
  let surname = person.surname
  return name + surname
}

const fullName = concatenateName(person)

// To this!

const person = { name: 'Jon', surname: 'Q. Arbuckle' }

const fullName = ({ name, surname }) => `${name} ${surname}`

// Slide 14: Nested destructuring

// For nested objects the destructuring gets a bit more complicated, but it's
// still possible.

const person = {
  name: 'Jon',
  pets: {
    cat: 'Garfield',
    dog: undefined
  }
}

const { name: human, pets: { cat, dog = 'Oddie' } }  // Same rules apply!

console.log(human, cat, dog) // Jon Garfield Oddie

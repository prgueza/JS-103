// Slide 1: Introduction

// The spread operator allows iterables to be expanded. We can think of it as
// spreading butter over bread.

const array = [ 1, 3, 4 ]

function sum (x, y, z) {
  return x + y + z
}

// Applying the function to the array old-school style
console.log(sum(array[0], array[1], array[2])) // 8

// Using the spread operator!
console.log(sum(...array)) // 8


// Slide 2: Concat and merge Arrays

// We can make use of this operator for merging and concatenating arrays in a
// simpler way

const a = [ 1, 2 ]
const b = [ 3, 4 ]
const c = [ 5, 6, 7 ]

// old-school style
const concatenated =  a.concat(b).concat(c)

// using the spread operator
const concatenated = [ ...a, ...b, ...c ] // 1, 2, 3, 4, 5, 6, 7

// We can also merge an array into an arbitrary position of another array
const merged = [ 1, 2, ...b, 5, 6 ] // 1, 2, 3, 4, 5, 6


// Slide 3: Clone arrays

// It can  also be used  to clone arrays to another variable, passing the values
// as values instead of as a reference to the original array, so mutations to the
// cloned array don't affect the original one

const a = [ 1, 2, 3 ]
const b = [ ...a ] // b is now a clone of a

b.push(4)  // Mutation being made to b

console.log(...b) // 1, 2, 3, 4
console.log(...a) // 1, 2, 3  -> Still remains the same


// Slide 4: Rest operator

// The rest operator works as the spread operator, but used when destructuring,
// so it holds the remaining values that where not destructured

const user = [ 'Jon', 'Q. Arbuckle', '28000', 'Madrid', 'Spain']

function getFullNameAndAddress ([ name, surname, ...rest ]) {
  // rest is now [ '28000', 'Madrid', 'Spain' ]
  return `${name} ${surname}, ${rest.join(' ')}`
}

console.log(getFullNameAndAddress(user)) // Jon Q. Arbuckle, 28000 Madrid Spain


// Slide 5: Spread with objects

// Sread also works with objects, spreading the key/value pairs.

const user = { name: 'Jon', surname: 'Q. Arbuckle' }
const address = { zipCode: '28000', city: 'Madrid', country: 'Spain' }

const userInfo = { ...user, ...address }
// { name: 'Jon', surname: 'Q. Arbuckle', zipCode: '28000', city: 'Madrid', ... }


// Slide 6: Merge objects

// When mergin two objects with keys that are the same, the values from the latter
// preveil over the previous values. This is usefull for declaring objects with
// default values.

const defaultConfiguration = { method: 'get', protocol: 'http', port: '8080' }

const customConfiguration = { ...defaultConfiguration, protocol: 'https' }
// { method: 'get', protocol: 'https', port: '8080' } -> http changed to https!

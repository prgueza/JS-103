// Slide 1: Definition

// Template strings are strings that allow embedded expresions, multi line
// text and string interpolation. Template strings are enclosed by the back
// tick ` ` and can contain placeholders indicated by a dollar sign ($) and
// curly braces

const string = 'normal string'
const templateString = `I'm more than a ${ string }` // I'm more than a normal string


// Slide 2: Multiline

// Template strings can be used to write multiline text. While using normal
// strings the way to achieve this was by using the backspace character (\n),
// with template strings we can write multiline text by writing a multiline
// template string

// String
const multiLineString = 'I need more than \none line'

// Template string
const multiLineTemplateString = `I need more than
one line`


// Slide 3: Embedding expressions

// Embedding expressions with normal strings requires concatenating the result
// of the expression with our string

const resultAsString = '2 + 4 = ' + (2 + 4)

// With template strings we can compute the result inside the placeholder

const resultAsTemplateString = `2 + 4 = ${ 2 + 4 }`


// Slide 4: Tagged templates

// A more advanced type of template strings is tagged templates, which allow us
// to parse template strings with a function. This function takes as the first
// argument a list of the normal strings contained in the template and the
// remaining arguments are the result of the expressions. They can return anything.

const house = {
  human: 'Jon',
  pets: ['Garfield', 'Oddie', 'Bird']
}

function pets (strings, name, pets) {

  let petCount = pets.length

  if (petCount > 2) {
    petCount = 'too many'
  }

  return `${name}${strings[1]}${petCount}${strings[2]}`
}

// This yields: Jon has too many pets
const result = pets`${house.human} has ${house.pets} pets`

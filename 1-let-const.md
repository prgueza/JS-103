# 1. Let & Const

[let MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

[const MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

[repl.it with the code](https://repl.it/@pedro_rodalia/1-Let-and-Const)


## Slide 1: Global scope

`let` and `const` are never globally registered, which means they don't create properties of the window object when declared globally.

```js
var human = 'Jon'
let dog = 'Odie'
const cat = 'Garfield'

console.log(this.human) // Jon
console.log(this.dog) // undefined
console.log(this.cat) // undefined
```


## Slide 2: Let's scope

`let` is blocked scoped (that means that let doesn’t care about local or global, it just cares about the {block} it is declared within). They are never globally registered.

```js
function letScoping () {
  let cat = 'Garfield'
  if (true) {
    let cat = 'Snowball II'
    console.log(cat) // Snowball II
  }
  console.log(cat) // Garfield
}

// VS.

function varScoping () {
  var cat = 'Garfield'
  if (true) {
    var cat = 'Snowball II' // Same variable!
    console.log(cat) // Snowball II
  }
  console.log(cat) 🤔 // Snowball II
}
```


## Slide 3: Accessing variables from lower blocks

Still we can access let variables that exist on a higher block.

```js
function letScoping () {
  let cat = 'Garfield'
  if (true) {
    console.log(cat) // Garfield
  }
  console.log(cat) // Garfield
}
```


## Slide 4: Small test

🤔 Will this work?

```js
function getHuman (petName) {
  switch (petName) {
    case 'Garfield':
      let human = 'Jon'
      break
    case 'Cheshire':
      let human = 'Alice'
      break
    default
      let human = ''
      break
  }
  return human
}
```


## Slide 5: Test resolution

🎉 We can fix it by declaring new scopes inside the cases.

```js
function getHuman (petName) {
  switch (petName) {
    case 'Garfield': {
      let human = 'Jon'
      break
    }
    case 'Cheshire': {
      let human = 'Alice'
      break
    }
    default {
      let human = ''
      break
  	}
  }
  return human
}
```


## Slide 6: Hard test

🤔 What does this print and why?

 ```js
for (var number = 0; number < 10, number ++) {
  setTimeout(function (number) {
    console.log(number)
  }, 1000) // Run the function after one second
}
```


## Slide 7: Hard test resolution

🎉 We can fix it by using `let`, which is block scoped and doesn't get overwritten by latter declarations, as for each iteration, the for loop creates a new scope.

```js
for (let number = 0; number < 10, number ++) {
  setTimeout(function (number) {
    console.log(number)
  }, 1000) // Run the function after one second
}
```


## Slide 8: consts

`const` is used to create variables that cannot be reassigned. It's used for constants or any variable that we want to protect, so it doesn't get assigned any other unexpected value.

```js
const API_ENDPOINT = 'https://www.onesait-api-services.com/api/v1/'
const API_KEY = '2ejovPwSdjOHCnG7TuS0Y0KSU1kQRoEO'

function double (numbers) {
  const two = 2
  const doubledNumbers = numbers.map(function (number) {
  	return number * two
  })
  return doubledNumbers
}
```


## Slide 9: Scope for consts

`const` is block scoped (so is `let`), so in different scopes we can declare
variables using `let` and `const` using the same name without issues.

```js
function blockScope () {
  const human = 'Jon'
  let dog = 'Oddie'
  const cat = 'Garfield'
  if (true) {
    const human = 'Alice'
    let cat = 'Cheshire'
    console.log(human) // 'Alice'
    console.log(dog) // 'Oddie'
  }
  console.log(cat) // Garfield
}
```


## Slide 10: Variable initialisation

`const` must be initialised (unlike `let` or `var`), because we cannot assign a value to a const by definition.

```js
const iHaveNoValueYet
iHaveNoValueYet = "I'm a const variable"
console.log(iHaveNoValueYet)

let iHaveNoValueYet
iHaveNoValueYet = "I'm a let variable"
console.log(iHaveNoValueYet)
```


## Slides 11 & 12: const with objects/arrays

`const` also works on objects and arrays, so they are protected against reassignation, but object key-value pairs and array values are not, and can
change. Remember, const only protects against reassignation

```js
const house = {
  human: 'Alice',
  cat: 'Cheshire'
}

// Attempting to reassign the object throws an error
house = {
  human: 'Jon',
  cat: 'Garfield'
}

// However we can change the values
house.human = 'Jon'
house.cat = 'Garfield'
house.dog = 'Oddie' // Even assign new key-value pairs


// It works the same way with arrays

const cats = ['Cheshire', 'Garfield']

// Attempting to reassign the array throws an error
cats = ['Snowball II', 'Cheshire', 'Garfield']

// However we can add new values
cats.push('Snowball II')
```

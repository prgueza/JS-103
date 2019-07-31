# 6. Prototypes and Classes

[prototypes MDN documentation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)

[classes MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

[repl.it with the code](https://repl.it/@pedro_rodalia/6-Prototypes-and-Classes)

## Slide 1: Introduction

Everything in javascript ends up being an object under the hood. This means that every data structure has a similar structure to that of an object. It has properties that can be values or even methods that interact with the data.

```js
function sum (a, b) {
  return a + b
}

console.log(sum.name) // ?
console.log(sum.length) // ?
```


## Slide 2: What is a prototype

Javascript is often described as a prototype-based language. Objects can have a prototype object which acts as a template or model for every object we create, which will inherit methods and properties from this prototype.

 ```js
const array = [ 1, 2, 3 ]

console.log(array.length) // This property is inherited from the prototype
console.log(array.map(...)) // This method is inherited from the prototype too!
```


## Slide 3: Custom objects

We can declare a new data structure of our own, with it's own properties and methods

```js
function Cat (name, color, age) {

  this.name = name
  this.color = color
  this.age = 0
  this.lifes = 7

  this.isAlive = function () {
    return this.lifes > 0
  }

  this.growOld = function () {
    this.age ++
    if (this.age > 15) {
      this.lifes --
      this.age = 0
    }
  }

}

const cat = new Cat('Garfield', 'orange', 5)

cat.growOld()

console.log(cat.color) // orange
console.log(cat.age) // 1
console.log(cat.isAlive()) // true

// Let's look at it using the console
```


## Slide 4: Prototype inheritance

New structures inherit properties and methods from their prototype. That's why our Cat has methods and properties that we didn't define, but the chain of prototypes allows us to access properties and methods from the Object prototype!

```js
cat.valueOf() // Try it on the console!
```


## Slide 5: Modifying existing prototypes

We can modify existing prototypes for data structures that are 'native' data structures in javascript. For instance, we can customise the Array prototype and add new methods:

```js
Array.prototype.whatAmI = 'An array, duh...' // Array is the 'native' array!
Array.prototype.rightShift = function () {
  this.unshift(this.pop()) // Shift array
  return this // Return shifted array
}

// Now all arrays will have these methods and properties!

const week = [ 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'SATURDAY', 'SUNDAY' ]

console.log(week.whatAmI) // An array, duh...
console.log(week.rightShift()) // [ 'SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'SATURDAY' ]
```


## Slide 6: Classes

Classes were introduced in ECMAScript 2015 and are basically syntactical sugar over the existing prototype inheritance with some differences we  will take a look at.

```js
function Cat () {
  /* Old school 'classes' */
}

class Cat {
  /* We use the class keyword followed by the name of the class */
}
```


## Slide 7: constructor

The constructor is just a method, but one that is special and used for creating and initialising an object with a class. Is the method that gets called when we use the 'new' keyword for creating an object of said class.

```js
class Cat {

  constructor (name, color, age) {
    this.name = name
    this.color = color
    this.age = age
  }

}

const cat = new Cat('Garfield', 'orange', 5)  // constructor('Garfield', 'orange', 5)
```


## Slide 8: Methods

As with prototypes we can declare methods within the class body, but we can use computed properties that return data based on the instance properties.

```js
class Cat {

  constructor (name, color, age) {
    this.name = name
    this.color = color
    this.age = age
  }

  get description () {
    return `${this.name} is an ${this.color} cat, aged ${this.age}`
  }

  growOld () {
    this.age ++
  }

}

const cat = new Cat('Garfield', 'orange', 5)

cat.growOld

console.log(cat.description) // Garfield is an orange cat, aged 6
```

## Slide 9: Inheritance (extends)

Classes can extend other classes and inherit their methods and properties by using the keyword extends followed by the 'parent' class.

```js
class Kitty extends Cat {

  constructor (name, color, age) {
    super(name, color)
    if (age > 3) throw Error('This is a fully grown cat!')
    this.age = age
  }

  // We can still use growOld and get description because we inherited them!

}
```

## Slide 10: Inheritance (super)

While we can overwrite the parent's class methods or properties, we can always access them within the class using super.

```js
class Kitty extends Cat {

  constructor (name, color, age) {
    super(name, color)
    if (age > 3) throw Error('This is a fully grown cat!')
    this.age = age
  }

  // We can overwrite growOld but still inherit some functionallity
  growOld () {
    super.growOld() // Invoke the growOld method from the parent class
    if (this.age > 3) throw Error('This kitty is now a full grown cat :(')
  }

}
```

# Class 02 Lecture Notes

## Data Types

- A way of labeling and organizing our data
- A way to format data that our program can anticipate and use properly

JavaScript is a **loosely typed** and **dynamic** language

- Loosely typed meaning that we don't have to know the type of data to declare a variable
- Variables do not need to be declared with a type

`let cat;`

- Dynamic meaning that I can change the type of data after the variable has been declared.

`cat = 3;`

`cat = 'cuddly';`

`cat = false;`

## Primitives

- A data type that cannot be broken down into something more basic

### Numbers

- Numeric data type, can be decimals, can be negative...written with no special notation:
  - `4`

### Strings

- A sequence of characters used to represent text.. can be letter or other characters like numbers or symbols. Denoted with single quotes.
  - `'4'`
  - `'hello'`

### Booleans

- Logical data type, can only be true or false. Use this a lot in validation. Denoted with no special notation.
  - `true`
  - `false`

### Undefined

- Something that does not yet have a definition.
  - `'let cat;`

### Null

- Something explicitly defined as none
  - `let cat = null;`

## Comparison Operators

- `==` 'loose equality'...value must be the same, but type can be different
  - `6 == '6' // evaluates to true`
- `===` 'strict equality'...value and type must be the same
  - `6 == '6' // evaluates to false` but...
  - `6 === 6 // evaluates to true`
- `!=` 'loose inequality'
  - `6 != '6' // evaluates as false`
  - `6 != 'a' // evaluates as true`
- `!==` 'strict inequality'
  - `6 !== '6' // evaluates as true`
  - `6 !== 6 // evaluates as false`
- `>` greater than; `<` less than
- `>=` greater than or equal to; `<=` less than or equal to

## Logical Operators

- `&&` and;
- `||` or;
- `!` not, also refered to as the bang symbol. Gives you the opposite of whatever it is placed in front of
  - `!true` this will equate to false
# Class 04 lecture notes

## Function!

- A data type

### What is a function?

- A function is a group statements that perform a task or calculate a value stored in a structure that prevents them from running until the function is 'called' or 'invoked'.

- input, processing, output

### Why

- they're reusable
- prevent bugs
- keeps code dry (don't repeat yourself)

### 2 step process

- define/declare
- run/invoke

## CSS Positioning

2 types

- static-type
- relative-type
  - relative
  - absolute
  - fixed

### Static - standard - element sits where it normally

### Position Relative

Elements that are `position: relative` can be moved out of their normal flow position while still taking up the same space. This is achieved by utilising those offset properties (top, bottom, left, right) to offset the element, relative to itself.

### Position Absolute

Essentially does the same thing as position: relative, with two key differences:
The element is taken out of normal flow and leaves no space behind.
The element is positioned relative to its nearest parent with a relative-type (relative, absolute, fixed) positioning.

### Position Fixed

fixed is the same as absolute with one key difference:
The element is positioned relative to the viewport.

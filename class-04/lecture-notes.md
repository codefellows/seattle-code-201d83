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

## Pair Programming Instructions

On github.com:

- Fork this Repository.
- In GitHub, navigate to **YOUR COPY** of the forked repo. This will have your name followed by the name of the repo you forked.
- Copy the link from the green button that says 'code'.

In your terminal:

- cd into your Projects or 201 folder and use the command `git clone` followed by the link that you copied from GitHub
  - This will clone down the repo on to your local machine
- cd into the repo and use `code .` to open your VSCode

In VSCode:

- Update the function.js file following the instructions listed in the comments and save

In your terminal:

- Do an A-C-P and push your updated function.js file up to **YOUR COPY** of the forked repo.

On GitHub.com:

- Navigate to the repo you forked and click on 'Pull Requests' in the options bar across the top of the screen.
- Below the heading that says Compare Changes, you will see a bar with two input fields. One says 'base' and one says 'compare'
- Set base to the repo you **FORKED FROM**
- Set compare to **YOUR REPO**
- Push the button to 'Create the Pull Request' and follow the directions on the next screen to 'Create Pull Request'
